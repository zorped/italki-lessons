"use client";

import { useEffect, useState } from "react";

function storageKey(studentId: string) {
  return `english-lessons-${studentId}-progress`;
}

function readCompleted(studentId: string): string[] {
  try {
    return JSON.parse(localStorage.getItem(storageKey(studentId)) || "[]");
  } catch {
    return [];
  }
}

export function ProgressBadge({ studentId, total }: { studentId: string; total: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const refresh = () => setCount(readCompleted(studentId).length);
    const frame = window.requestAnimationFrame(refresh);
    window.addEventListener("lesson-progress-change", refresh);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("lesson-progress-change", refresh);
    };
  }, [studentId]);

  return (
    <div className="sidebarProgress" aria-label={`${count} of ${total} lessons completed`}>
      <span>Your progress</span>
      <strong>{count} / {total}</strong>
    </div>
  );
}

export function CompleteLessonButton({
  studentId,
  lessonId,
  label = "lesson",
}: {
  studentId: string;
  lessonId: string;
  label?: string;
}) {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setComplete(readCompleted(studentId).includes(lessonId));
    });
    return () => window.cancelAnimationFrame(frame);
  }, [studentId, lessonId]);

  function toggleComplete() {
    const completed = new Set(readCompleted(studentId));
    if (completed.has(lessonId)) completed.delete(lessonId);
    else completed.add(lessonId);
    localStorage.setItem(storageKey(studentId), JSON.stringify([...completed]));
    setComplete(completed.has(lessonId));
    window.dispatchEvent(new Event("lesson-progress-change"));
  }

  return (
    <button className="completeButton" type="button" onClick={toggleComplete}>
      {complete ? "Completed ✓" : `Mark ${label} complete`}
    </button>
  );
}
