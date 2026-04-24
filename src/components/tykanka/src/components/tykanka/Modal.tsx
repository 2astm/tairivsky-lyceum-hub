import React from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
  onOk: () => void;
  okLabel?: string;
};

export function Modal({ title, children, onOk, okLabel = 'OK' }: Props) {
  return (
    <div className="tyk-modal-overlay">
      <div className="tyk-modal">
        <div className="tyk-modal-head">{title}</div>
        <div className="tyk-modal-body">{children}</div>
        <div className="tyk-modal-foot">
          <button className="tyk-btn-primary" onClick={onOk}>{okLabel}</button>
        </div>
      </div>
    </div>
  );
}
