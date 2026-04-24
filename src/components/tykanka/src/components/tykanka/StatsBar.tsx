import React from 'react';

type Props = {
  speed: number;
  accuracy: string;
  correct: number;
  errors: number;
};

export function StatsBar({ speed, accuracy, correct, errors }: Props) {
  return (
    <div className="tyk-stats-bar">
      <div className="tyk-stat-card">
        <div className="tyk-stat-val">{speed}</div>
        <div className="tyk-stat-lbl">симв/хв</div>
      </div>
      <div className="tyk-stat-card">
        <div className="tyk-stat-val">{accuracy}</div>
        <div className="tyk-stat-lbl">точність</div>
      </div>
      <div className="tyk-stat-card">
        <div className="tyk-stat-val">{correct}</div>
        <div className="tyk-stat-lbl">правильно</div>
      </div>
      <div className="tyk-stat-card">
        <div className="tyk-stat-val">{errors}</div>
        <div className="tyk-stat-lbl">помилки</div>
      </div>
    </div>
  );
}
