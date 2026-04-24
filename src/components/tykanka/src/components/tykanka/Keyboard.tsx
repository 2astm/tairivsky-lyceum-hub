import React from 'react';
import { KB_ROW_DEFS, FINGER_MAP, HOME_KEY_CODES, CODE_TO_ID } from './data/layouts';
import type { RuntimeLayout, CalibState } from './types';
import { CALIB_CODES } from './data/layouts';

type Props = {
  layout: RuntimeLayout;
  isShift: boolean;
  selectedKeyId: string | null;
  flashKeys: Record<string, 'ok' | 'err'>; // keyId → flash state
  calibState: CalibState;
};

export function Keyboard({ layout, isShift, selectedKeyId, flashKeys, calibState }: Props) {
  function getLabel(code: string, staticLabel?: string): string {
    if (staticLabel !== undefined) return staticLabel;
    const pair = layout[code];
    if (!pair) return '';
    return isShift ? pair[1] : pair[0];
  }

  function getCalibStyle(code: string): React.CSSProperties {
    if (!calibState.active && !calibState.captured[code]) return {};
    const slot = calibState.shiftPass ? 1 : 0;
    if (calibState.captured[code]?.[slot]) {
      return { background: 'var(--tyk-ok-lo)', borderColor: 'var(--tyk-ok)', color: 'var(--tyk-ok)' };
    }
    return {};
  }

  return (
    <div className="tyk-keyboard">
      {KB_ROW_DEFS.map((row, rowIdx) => (
        <div key={rowIdx} className="tyk-kb-row">
          {row.map(({ code, id, label, wide }) => {
            const finger  = code ? FINGER_MAP[code] : undefined;
            const isHome  = code ? HOME_KEY_CODES.has(code) : false;
            const flash   = flashKeys[id];
            const isSelected = id === selectedKeyId;
            const calibStyle = code ? getCalibStyle(code) : {};

            const cls = [
              'tyk-key',
              wide ? `tyk-${wide}` : '',
              finger ? `tyk-f-${finger}` : '',
              isHome ? 'tyk-home-key' : '',
              isSelected ? 'tyk-key-selected' : '',
              flash === 'ok'  ? 'tyk-key-hit-ok'  : '',
              flash === 'err' ? 'tyk-key-hit-err' : '',
            ].filter(Boolean).join(' ');

            const displayLabel = label !== undefined ? label : getLabel(code, undefined);
            const isShifted = label === undefined && isShift &&
              layout[code]?.[1] && layout[code]?.[1] !== layout[code]?.[0];

            return (
              <div
                key={id}
                id={id}
                className={cls}
                style={{
                  ...calibStyle,
                  ...(isShifted ? { fontSize: 14, fontWeight: 600 } : {}),
                }}
              >
                {displayLabel}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
