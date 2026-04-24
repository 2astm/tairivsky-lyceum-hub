import React from 'react';
import { CALIB_CODES } from './data/layouts';
import type { CalibState } from './types';

type Props = { calibState: CalibState };

export function CalibPanel({ calibState }: Props) {
  const { shiftPass, captured } = calibState;
  const slot  = shiftPass ? 1 : 0;
  const done  = CALIB_CODES.filter(c => captured[c]?.[slot]).length;
  const total = CALIB_CODES.length;
  const pct   = Math.round(done / total * 100);

  return (
    <div className="tyk-calib-panel">
      <div className="tyk-calib-header">
        <span className="tyk-calib-phase">
          {shiftPass ? 'Крок 2 — з ⇧ Shift' : 'Крок 1 — без Shift'}
        </span>
        <div className="tyk-calib-progress-wrap">
          <div className="tyk-calib-track">
            <div className="tyk-calib-fill" style={{ width: `${pct}%` }} />
          </div>
          <span className="tyk-calib-count">{done} / {total}</span>
        </div>
      </div>
      <div className="tyk-calib-instr">
        {shiftPass ? (
          <>Затисніть <b>⇧ Shift</b> і пройдіться по тих самих клавішах. Сірі — ще не натиснуті.</>
        ) : (
          <><b>Друкуйте будь-які клавіші</b> — кожна позначиться зеленим. Спочатку без Shift.</>
        )}
      </div>
    </div>
  );
}
