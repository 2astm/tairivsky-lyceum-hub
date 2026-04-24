import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useLayout } from './hooks/useLayout';
import { useTyping } from './hooks/useTyping';
import { Keyboard } from './Keyboard';
import { TaskDisplay } from './TaskDisplay';
import { StatsBar } from './StatsBar';
import { CalibPanel } from './CalibPanel';
import { Modal } from './Modal';
import { HandsModal } from './HandsModal';
import { EXERCISES, LESSON_NAMES } from './data/exercises';
import { CODE_TO_ID, CALIB_CODES } from './data/layouts';
import './tykanka.css';

type ModalView = 'none' | 'lesson' | 'progress' | 'hands' | 'about' | 'calib-done';

export function Tykanka() {
  const layout   = useLayout();
  const typing   = useTyping();

  const [name, setName]       = useState('');
  const [surname, setSurname] = useState('');
  const [modalView, setModalView] = useState<ModalView>('none');

  // Shift/CapsLock state for keyboard display
  const [shiftOn, setShiftOn]   = useState(false);
  const [capsOn, setCapsOn]     = useState(false);
  const isUppercase = shiftOn !== capsOn;

  // Which key is highlighted (next to type)
  const [selectedKeyId, setSelectedKeyId] = useState<string | null>(null);

  // Transient key flash: keyId → 'ok'|'err', cleared after 180ms
  const [flashKeys, setFlashKeys] = useState<Record<string, 'ok' | 'err'>>({});
  const flashTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  // Status message
  const [status, setStatus] = useState('');
  const statusTimer = useRef<ReturnType<typeof setTimeout>>();

  function showStatus(msg: string, ms = 2500) {
    clearTimeout(statusTimer.current);
    setStatus(msg);
    statusTimer.current = setTimeout(() => setStatus(''), ms);
  }

  // ── Init ──────────────────────────────────────────────
  useEffect(() => {
    layout.initLayout();
  }, []); // eslint-disable-line

  // When layout becomes ready, highlight first key
  useEffect(() => {
    if (layout.layoutReady) updateHighlight();
  }, [layout.layoutReady]); // eslint-disable-line

  // When calibration produces a pending layout, show confirmation modal
  useEffect(() => {
    if (layout.pendingLayout) setModalView('calib-done');
  }, [layout.pendingLayout]);

  // ── Derived stats ─────────────────────────────────────
  const { typingState } = typing;
  const elapsed = typingState.timeStart
    ? ((typingState.timeEnd || Date.now()) - typingState.timeStart) / 1000
    : 0;
  const speed    = elapsed > 0 ? Math.round(typingState.correct / elapsed * 60) : 0;
  const total    = typingState.correct + typingState.errors;
  const accuracy = total > 0 ? Math.round(typingState.correct / total * 100) + '%' : '—';
  const progress = typingState.taskText.length > 0
    ? (typingState.cursor / typingState.taskText.length) * 100
    : 0;

  // ── Key highlight ──────────────────────────────────────
  function updateHighlight(state = typingState) {
    const ch = state.taskText[state.cursor];
    if (!ch) { setSelectedKeyId(null); return; }
    const id = layout.charMap[ch] ?? layout.charMap[ch?.toLowerCase()];
    setSelectedKeyId(id ?? null);
  }

  // ── Flash a key briefly ───────────────────────────────
  function flashKey(keyId: string, kind: 'ok' | 'err') {
    clearTimeout(flashTimers.current[keyId]);
    setFlashKeys(prev => ({ ...prev, [keyId]: kind }));
    flashTimers.current[keyId] = setTimeout(() => {
      setFlashKeys(prev => { const n = { ...prev }; delete n[keyId]; return n; });
    }, 180);
  }

  // ── Keyboard events ───────────────────────────────────
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const active = document.activeElement as HTMLElement;
      if (active?.id === 'tyk-inp-name' || active?.id === 'tyk-inp-surname') return;

      // ── Calibration mode ──
      if (layout.calibState.active) {
        if (e.key === 'Shift') {
          setShiftOn(true);
          return;
        }
        layout.handleCalibKeyDown(e);
        return;
      }

      // ── Normal mode ──
      if (e.key === 'Shift') {
        setShiftOn(true);
      }
      if (e.key === 'CapsLock') {
        setCapsOn(c => !c);
      }
    }

    function onKeyUp(e: KeyboardEvent) {
      const active = document.activeElement as HTMLElement;
      if (active?.id === 'tyk-inp-name' || active?.id === 'tyk-inp-surname') return;

      // ── Calibration mode ──
      if (layout.calibState.active) {
        if (e.key === 'Shift') setShiftOn(false);
        layout.handleCalibKeyUp(e);
        return;
      }

      // ── Normal mode ──
      if (e.key === 'Shift') {
        setShiftOn(false);
        return;
      }

      const IGNORE = ['Control','Meta','Alt','AltGraph','Enter','Tab',
                      'Backspace','CapsLock','ArrowLeft','ArrowRight',
                      'ArrowUp','ArrowDown','Escape','GroupNext','Shift'];
      if (IGNORE.includes(e.key)) return;
      if (!layout.layoutReady) return;
      if (modalView !== 'none') return;

      const keyId   = layout.charMap[e.key] ?? layout.charMap[e.key?.toLowerCase()];
      const result  = typing.handleChar(e.key);


      console.log(`result: ${result} (${keyId})`);

      if (result === 'correct' || result === 'done') {
        if (keyId) flashKey(keyId, 'ok');
        setSelectedKeyId(null);
        if (result === 'done') {
          typing.sendProgress(name, surname);
          setModalView('progress');
        } else {
          // update highlight with new cursor
          const nextCursor = typingState.cursor + 1;
          const ch = typingState.taskText[nextCursor];
          const id = ch ? (layout.charMap[ch] ?? layout.charMap[ch?.toLowerCase()]) : null;
          setSelectedKeyId(id ?? null);
        }
      } else {
        if (keyId) flashKey(keyId, 'err');
        const expected = typingState.taskText[typingState.cursor];
        console.log(`e.key: ${e.key}, expected: ${expected}, result: ${result}`)
        if (e.key.toLowerCase() === expected?.toLowerCase()) {
          showStatus('Змініть регістр символів!');
        } else if (/[a-zA-Z]/.test(e.key) && /[а-яіїєґ]/i.test(expected)) {
          showStatus('Змініть розкладку клавіатури!');
        }
      }
    }

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup',   onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup',   onKeyUp);
    };
  }, [layout, typing, typingState, modalView, name, surname]); // eslint-disable-line

  // ── Actions ───────────────────────────────────────────
  function selectLesson(idx: number) {
    typing.startTask(idx);
    setModalView('none');
    setSelectedKeyId(null);
    setTimeout(() => updateHighlight(), 0);
  }

  function closeModal() { setModalView('none'); }

  function onCalibOk() {
    layout.confirmCalib();
    showStatus('Розкладку збережено ✓', 3000);
    setModalView('none');
    setTimeout(() => updateHighlight(), 0);
  }

  const progress_data = typing.getProgress(name, surname);

  // ── Render ────────────────────────────────────────────
  return (
    <div className="tyk-root">

      {/* Header */}
      <header className="tyk-header">
        <div className="tyk-logo">Тика<span>нка</span></div>
        <div className="tyk-name-row">
          <label htmlFor="tyk-inp-name">Ім'я</label>
          <input id="tyk-inp-name" value={name} onChange={e => setName(e.target.value)} placeholder="Іван"/>
          <label htmlFor="tyk-inp-surname">Прізвище</label>
          <input id="tyk-inp-surname" value={surname} onChange={e => setSurname(e.target.value)} placeholder="Петренко"/>
        </div>
      </header>

      {/* Nav */}
      <nav className="tyk-nav">
        <button className="tyk-btn" onClick={() => setModalView('lesson')}>Вправи</button>
        <button className="tyk-btn" onClick={() => setModalView('progress')}>Поступ</button>
        <button className="tyk-btn" onClick={() => setModalView('hands')}>Постановка рук</button>
        <button className="tyk-btn" onClick={() => setModalView('about')}>Про тренажер</button>
        <button className="tyk-btn" onClick={() => { layout.startCalib(); }}>Розкладка</button>
        <button className="tyk-btn tyk-btn-active">{typing.lessonName}</button>
      </nav>

      {/* Typing area — hidden until layout ready */}
      {layout.layoutReady ? (
        <div className="tyk-typing-area">
          <StatsBar
            speed={speed}
            accuracy={accuracy}
            correct={typingState.correct}
            errors={typingState.errors}
          />
          <TaskDisplay
            text={typingState.taskText}
            cursor={typingState.cursor}
            progress={progress}
          />
          {status && <div className="tyk-status">{status}</div>}
        </div>
      ) : (
        <div className="tyk-pre-calib">
          <div className="tyk-pre-calib-title">Визначення розкладки клавіатури</div>
          <div className="tyk-pre-calib-sub">
            {layout.calibState.active
              ? 'Слідуйте інструкції нижче…'
              : 'Зачекайте — визначаємо розкладку…'}
          </div>
        </div>
      )}

      {/* Calibration panel */}
      {layout.calibState.active && <CalibPanel calibState={layout.calibState} />}

      {/* Keyboard */}
      <Keyboard
        layout={layout.layout}
        isShift={isUppercase}
        selectedKeyId={selectedKeyId}
        flashKeys={flashKeys}
        calibState={layout.calibState}
      />

      {/* Finger legend */}
      <div className="tyk-finger-legend">
        {[
          { cls: 'pinky',  label: 'мізинець' },
          { cls: 'ring',   label: 'підмізинний' },
          { cls: 'middle', label: 'середній' },
          { cls: 'index',  label: 'вказівний' },
          { cls: 'thumb',  label: 'великий' },
        ].map(({ cls, label }) => (
          <span key={cls} className="tyk-legend-item">
            <span className={`tyk-legend-dot tyk-f-${cls}-dot`}/>
            {label}
          </span>
        ))}
        <span className="tyk-legend-item">
          <span className="tyk-legend-home-dot"/>домашня клавіша
        </span>
      </div>

      {/* ── Modals ── */}

      {modalView === 'lesson' && (
        <Modal title="Оберіть вправу" onOk={closeModal}>
          <select className="tyk-select" size={12}
            onChange={e => selectLesson(Number(e.target.value))}>
            {LESSON_NAMES.map((name, i) => (
              <option key={i} value={i}>{name}</option>
            ))}
          </select>
        </Modal>
      )}

      {modalView === 'progress' && (
        <Modal title="Результати" onOk={closeModal}>
          <div className="tyk-result-grid">
            <div className="tyk-result-cell">
              <div className="tyk-result-big">{progress_data.mins}:{String(progress_data.secs).padStart(2,'0')}</div>
              <div className="tyk-result-lbl">час</div>
            </div>
            <div className="tyk-result-cell">
              <div className="tyk-result-big">{progress_data.speed}</div>
              <div className="tyk-result-lbl">симв/хв</div>
            </div>
            <div className="tyk-result-cell">
              <div className="tyk-result-big">{progress_data.accuracy}%</div>
              <div className="tyk-result-lbl">точність</div>
            </div>
            <div className="tyk-result-cell">
              <div className="tyk-result-big">{progress_data.correct}</div>
              <div className="tyk-result-lbl">правильно</div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 12 }}>
            <span className="tyk-grade-badge">{progress_data.grade} балів</span>
          </div>
        </Modal>
      )}

      {modalView === 'hands' && (
        <Modal title="Постановка рук" onOk={closeModal}>
          <HandsModal />
        </Modal>
      )}

      {modalView === 'about' && (
        <Modal title="Про Тиканку" onOk={closeModal}>
          <p>Клавіатурний онлайн-тренажер для школярів.</p>
          <br/>
          <p>Щира подяка:</p>
          <p>· Pelle Lundgren (evilpaper) — за Keyboard Hero</p>
          <p>· Спільноті KDE — за уроки для Ktouch</p>
          <p>· Спільноті «Шкільна інформатика від А до Я»</p>
          <br/>
          <p>Автор: Громко Г.Ю.</p>
        </Modal>
      )}

      {modalView === 'calib-done' && (
        <Modal title="Калібрування завершено" onOk={onCalibOk}>
          <div style={{ textAlign: 'center', padding: '8px 0' }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>✓</div>
            <div className="tyk-modal-confirm-title">Розкладку клавіатури збережено</div>
            <div className="tyk-modal-confirm-sub">Натисніть OK щоб почати вправу.</div>
          </div>
        </Modal>
      )}
    </div>
  );
}
