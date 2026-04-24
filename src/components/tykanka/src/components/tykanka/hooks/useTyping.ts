import { useState, useCallback } from 'react';
import { EXERCISES, LESSON_NAMES } from '../data/exercises';
import type { TypingState } from '../types';

const TG_TOKEN   = '8120809238:AAGTVpgBKD_iH6HgFvLTu_FCctuxoDCYcjM';
const TG_CHAT_ID = '317175238';

function sendToTelegram(text: string) {
  fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: TG_CHAT_ID, text }),
  }).catch(console.error);
}

function calcGrade(speed: number, accuracy: number): number {
  let pts = 0;
  if      (accuracy > 98) pts += 6;
  else if (accuracy > 95) pts += 5;
  else if (accuracy > 90) pts += 4;
  else if (accuracy > 85) pts += 3;
  else if (accuracy > 80) pts += 2;
  else if (accuracy > 70) pts += 1;
  if      (speed > 160)   pts += 6;
  else if (speed > 140)   pts += 5;
  else if (speed > 120)   pts += 4;
  else if (speed > 100)   pts += 3;
  else if (speed > 80)    pts += 2;
  else if (speed > 60)    pts += 1;
  return pts;
}

export type ProgressResult = {
  mins: number; secs: number;
  speed: number; accuracy: number; correct: number; grade: number;
};

export type UseTypingReturn = {
  typingState: TypingState;
  startTask: (idx: number) => void;
  handleChar: (char: string) => 'correct' | 'wrong' | 'done';
  getProgress: (name: string, surname: string) => ProgressResult;
  sendProgress: (name: string, surname: string) => void;
  lessonName: string;
};

export function useTyping(): UseTypingReturn {
  const [typingState, setTypingState] = useState<TypingState>({
    taskIdx: 0,
    taskText: EXERCISES[0],
    cursor: 0,
    correct: 0,
    errors: 0,
    timeStart: 0,
    timeEnd: 0,
  });

  const startTask = useCallback((idx: number) => {
    const clamped = Math.max(0, Math.min(EXERCISES.length - 1, idx));
    setTypingState({
      taskIdx: clamped,
      taskText: EXERCISES[clamped],
      cursor: 0,
      correct: 0,
      errors: 0,
      timeStart: 0,
      timeEnd: 0,
    });
  }, []);

  const handleChar = useCallback((char: string): 'correct' | 'wrong' | 'done' => {
    let result: 'correct' | 'wrong' | 'done' = 'wrong';

    setTypingState(prev => {
      const expected = prev.taskText[prev.cursor];
      console.log(`Expected: ${expected}, Got: ${char}`);
      if (char !== expected) {
        result = 'wrong';
        return { ...prev, errors: prev.errors + 1 };
      }

      const timeStart = prev.timeStart || Date.now();
      const newCursor = prev.cursor + 1;
      const correct   = prev.correct + 1;
      const done      = newCursor >= prev.taskText.length;

      result = done ? 'done' : 'correct';
      return {
        ...prev,
        cursor: newCursor,
        correct,
        timeStart,
        timeEnd: done ? Date.now() : 0,
      };
    });

    console.log(`Result: ${result}`)

    return result;
  }, []);

  const getProgress = useCallback((name: string, surname: string): ProgressResult => {
    const { correct, errors, timeStart, timeEnd } = typingState;
    const elapsed = timeStart ? ((timeEnd || Date.now()) - timeStart) / 1000 : 0;
    const mins    = Math.floor(elapsed / 60);
    const secs    = Math.floor(elapsed % 60);
    const speed   = elapsed > 0 ? Math.round(correct / elapsed * 60) : 0;
    const total   = correct + errors;
    const accuracy = total > 0 ? Math.round(correct / total * 100) : 0;
    const grade   = calcGrade(speed, accuracy);
    return { mins, secs, speed, accuracy, correct, grade };
  }, [typingState]);

  const sendProgress = useCallback((name: string, surname: string) => {
    const p = getProgress(name, surname);
    const lesson = LESSON_NAMES[typingState.taskIdx] ?? `Вправа ${typingState.taskIdx + 1}`;
    sendToTelegram(
      `${lesson} | ${surname} ${name}\n` +
      `Час: ${p.mins}хв ${p.secs}с | Швидкість: ${p.speed} симв/хв | Точність: ${p.accuracy}% | Балів: ${p.grade}`
    );
  }, [getProgress, typingState.taskIdx]);

  const lessonName = LESSON_NAMES[typingState.taskIdx] ?? `Вправа ${typingState.taskIdx + 1}`;

  return { typingState, startTask, handleChar, getProgress, sendProgress, lessonName };
}
