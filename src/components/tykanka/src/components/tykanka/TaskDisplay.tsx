import React, { useMemo } from 'react';

type Props = {
  text: string;
  cursor: number;
  progress: number; // 0–100
};

export function TaskDisplay({ text, cursor, progress }: Props) {
  const chars = useMemo(() => {
    const WIN  = 80;
    const start = Math.max(0, cursor - 30);
    const end   = Math.min(text.length, start + WIN);
    return text.slice(start, end).split('').map((ch, i) => {
      const abs = start + i;
      const cls = abs < cursor ? 'tyk-char-done'
                : abs === cursor ? 'tyk-char-cursor'
                : 'tyk-char-ahead';
      return <span key={abs} className={cls}>{ch === ' ' ? '\u00a0' : ch}</span>;
    });
  }, [text, cursor]);

  return (
    <>
      <div className="tyk-progress-track">
        <div className="tyk-progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="tyk-task-box">{chars}</div>
    </>
  );
}
