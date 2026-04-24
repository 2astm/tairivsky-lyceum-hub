export type LayoutPair = [string, string]; // [lowercase, uppercase]
export type RuntimeLayout = Record<string, LayoutPair>;

export type CalibState = {
  active: boolean;
  shiftPass: boolean;
  captured: Record<string, [string, string]>;
};

export type TypingState = {
  taskIdx: number;
  taskText: string;
  cursor: number;
  correct: number;
  errors: number;
  timeStart: number;
  timeEnd: number;
};

export type ModalData = {
  title: string;
  body: React.ReactNode;
  onOk?: () => void;
} | null;
