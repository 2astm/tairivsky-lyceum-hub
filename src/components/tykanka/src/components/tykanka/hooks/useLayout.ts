import { useState, useCallback, useRef } from 'react';
import type { RuntimeLayout, CalibState } from '../types';
import {
  FALLBACK_LAYOUT, QWERTY_TO_UA, CALIB_CODES, CODE_TO_ID,
} from '../data/layouts';

const STORAGE_KEY = 'tyk_layout_v2';

function buildCharMap(layout: RuntimeLayout): Record<string, string> {
  const map: Record<string, string> = {};
  for (const [code, [lo, hi]] of Object.entries(layout)) {
    const id = CODE_TO_ID[code];
    if (!id) continue;
    if (lo && !map[lo]) map[lo] = id;
    if (hi && !map[hi]) map[hi] = id;
  }
  return map;
}

function saveLayout(layout: RuntimeLayout) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(layout)); } catch { /* ignore */ }
}

function loadLayout(): RuntimeLayout | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

export type UseLayoutReturn = {
  layout: RuntimeLayout;
  charMap: Record<string, string>;
  calibState: CalibState;
  layoutReady: boolean;
  // called once on mount
  initLayout: () => void;
  // called from nav button
  startCalib: () => void;
  // called from keydown handler
  handleCalibKeyDown: (e: KeyboardEvent) => boolean; // returns true if consumed
  // called from keyup handler
  handleCalibKeyUp: (e: KeyboardEvent) => boolean;
  // confirm and apply after calibration modal OK
  confirmCalib: () => void;
  pendingLayout: RuntimeLayout | null;
};

export function useLayout(): UseLayoutReturn {
  const [layout, setLayout]           = useState<RuntimeLayout>({ ...FALLBACK_LAYOUT });
  const [charMap, setCharMap]         = useState<Record<string, string>>(() => buildCharMap(FALLBACK_LAYOUT));
  const [layoutReady, setLayoutReady] = useState(false);
  const [calibState, setCalibState]   = useState<CalibState>({
    active: false, shiftPass: false, captured: {},
  });
  const [pendingLayout, setPendingLayout] = useState<RuntimeLayout | null>(null);

  const applyLayout = useCallback((newLayout: RuntimeLayout) => {
    setLayout(newLayout);
    setCharMap(buildCharMap(newLayout));
    setLayoutReady(true);
  }, []);

  // ── Init: try localStorage → API → calibration ───────────
  const initLayout = useCallback(async () => {
    // 1. Saved layout
    const saved = loadLayout();
    if (saved) { applyLayout(saved); return; }

    // 2. KeyboardLayoutMap API (maps QWERTY position → UA char)
    if ((navigator as any).keyboard?.getLayoutMap) {
      try {
        const map = await (navigator as any).keyboard.getLayoutMap();
        const detected: RuntimeLayout = { ...FALLBACK_LAYOUT };
        for (const code of Object.keys(CODE_TO_ID).filter(c => c !== 'Space')) {
          const qwerty = map.get(code) as string | undefined;
          if (!qwerty || qwerty === 'Dead' || qwerty.length !== 1) continue;
          const uaPair = QWERTY_TO_UA[qwerty.toLowerCase()];
          detected[code] = uaPair ?? [qwerty, qwerty.toUpperCase()];
        }
        applyLayout(detected);
        saveLayout(detected);
        return;
      } catch { /* fall through */ }
    }

    // 3. Manual calibration
    setCalibState({ active: true, shiftPass: false, captured: {} });
  }, [applyLayout]);

  // ── Explicit recalibrate from nav ─────────────────────────
  const startCalib = useCallback(() => {
    setCalibState({ active: true, shiftPass: false, captured: {} });
    setLayoutReady(false);
  }, []);

  // ── Handle keydown during calibration ────────────────────
  const handleCalibKeyDown = useCallback((e: KeyboardEvent): boolean => {
    if (!calibState.active) return false;

    // Always update shift display — don't consume, let keyboard component handle visuals
    if (e.key === 'Shift' || e.key === 'CapsLock') return false;

    e.preventDefault();

    const code = e.code;
    if (!CALIB_CODES.includes(code)) return true;

    // Enforce shift discipline
    if (calibState.shiftPass && !e.shiftKey)  return true;
    if (!calibState.shiftPass && e.shiftKey)  return true;

    const slot = calibState.shiftPass ? 1 : 0;
    const char = e.key.length === 1 ? e.key : '';

    setCalibState(prev => {
      const captured = { ...prev.captured };
      if (!captured[code]) captured[code] = ['', ''];
      else captured[code] = [...captured[code]] as [string, string];

      if (captured[code][slot]) return prev; // already captured

      captured[code][slot] = char;

      const doneCount = CALIB_CODES.filter(c => captured[c]?.[slot]).length;

      if (doneCount >= CALIB_CODES.length) {
        if (!prev.shiftPass) {
          // Move to shift pass
          return { ...prev, captured, shiftPass: true };
        } else {
          // Done — build layout (handled via useEffect in component or confirmCalib)
          const merged: RuntimeLayout = { ...FALLBACK_LAYOUT };
          for (const [c, pair] of Object.entries(captured)) {
            if (pair[0] || pair[1]) merged[c] = pair as [string, string];
          }
          setPendingLayout(merged);
          return { ...prev, captured, active: false };
        }
      }

      return { ...prev, captured };
    });

    return true;
  }, [calibState]);

  // ── Handle keyup during calibration ──────────────────────
  const handleCalibKeyUp = useCallback((e: KeyboardEvent): boolean => {
    if (!calibState.active) return false;
    e.preventDefault();
    return true;
  }, [calibState.active]);

  // ── Confirm pending layout (called after OK modal) ────────
  const confirmCalib = useCallback(() => {
    if (!pendingLayout) return;
    saveLayout(pendingLayout);
    applyLayout(pendingLayout);
    setPendingLayout(null);
  }, [pendingLayout, applyLayout]);

  return {
    layout, charMap, calibState, layoutReady,
    initLayout, startCalib,
    handleCalibKeyDown, handleCalibKeyUp,
    confirmCalib, pendingLayout,
  };
}
