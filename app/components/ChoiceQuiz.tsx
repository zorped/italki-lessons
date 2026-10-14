"use client";

import { useEffect, useState } from "react";

export type ChoiceItem = {
  /** Use ___ to mark the gap. */
  sentence: string;
  options: string[];
  /** Every option that is correct. The first one fills the gap after answering. */
  answers: string[];
  why: string;
};

function readSaved(key: string): Record<number, string> {
  try {
    return JSON.parse(localStorage.getItem(key) || "{}");
  } catch {
    return {};
  }
}

export function ChoiceQuiz({ id, items }: { id: string; items: ChoiceItem[] }) {
  const storageKey = `english-lessons-quiz-${id}`;
  const [picked, setPicked] = useState<Record<number, string>>({});

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setPicked(readSaved(storageKey)));
    return () => window.cancelAnimationFrame(frame);
  }, [storageKey]);

  function choose(index: number, option: string) {
    setPicked((current) => {
      const next = { ...current, [index]: option };
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {}
      return next;
    });
  }

  function reset() {
    setPicked({});
    try {
      localStorage.removeItem(storageKey);
    } catch {}
  }

  const answered = Object.keys(picked).length;
  const correct = items.filter((item, index) => item.answers.includes(picked[index])).length;

  return (
    <div className="choiceQuiz">
      <ol>
        {items.map((item, index) => {
          const choice = picked[index];
          const done = choice !== undefined;
          const right = done && item.answers.includes(choice);
          const [before, after] = item.sentence.split("___");
          return (
            <li key={item.sentence}>
              <p className="choiceSentence">
                {before}
                <span className={`choiceGap${done ? (right ? " isRight" : " isWrong") : ""}`}>{done ? (right ? choice : item.answers[0]) : "   "}</span>
                {after}
              </p>
              <div className="choiceOptions" role="group" aria-label={`Choose a word for: ${item.sentence.replace("___", "blank")}`}>
                {item.options.map((option) => (
                  <button
                    type="button"
                    key={option}
                    disabled={done}
                    aria-pressed={choice === option}
                    className={done && item.answers.includes(option) ? "isAnswer" : done && choice === option ? "isMiss" : undefined}
                    onClick={() => choose(index, option)}
                  >{option}</button>
                ))}
              </div>
              {done && (
                <p className="choiceWhy" role="status">
                  <strong>{right ? "Yes." : `Not quite: ${choice} doesn't fit here.`}</strong> {item.why}
                </p>
              )}
            </li>
          );
        })}
      </ol>
      {answered > 0 && (
        <p className="choiceScore">
          {correct} of {items.length} right{answered < items.length ? ` so far` : ""}.
          <button type="button" onClick={reset}>Try again</button>
        </p>
      )}
    </div>
  );
}
