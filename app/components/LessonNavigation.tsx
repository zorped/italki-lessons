"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { StudentConfig } from "../students/student-data";
import { ProgressBadge } from "./LessonProgress";

export function LessonNavigation({ student, active }: { student: StudentConfig; active: string }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    function outside(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);

  return (
    <aside
      className="lessonSwitcher"
      ref={rootRef}
      aria-label={`${student.name}'s lessons`}
      onPointerEnter={(event) => { if (event.pointerType === "mouse") setOpen(true); }}
      onPointerLeave={(event) => { if (event.pointerType === "mouse" && !rootRef.current?.contains(document.activeElement)) setOpen(false); }}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}
    >
      <button className="lessonSwitcherTrigger" type="button" ref={triggerRef} aria-label="Lesson navigation" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen((current) => !current)}>
        <span className="lessonSwitcherBars" aria-hidden="true">
          <span className={`outlineBar${active === "overview" ? " isCurrent" : ""}`} />
          {student.lessons.map((lesson) => <span className={`outlineBar${active === lesson.id ? " isCurrent" : ""}`} key={lesson.id} />)}
        </span>
        <span className="lessonSwitcherMobileLabel">{student.navigationLabel ? "Chapters" : "Lessons"}</span>
      </button>
      <div className="lessonSwitcherPanel" id={panelId} hidden={!open}>
        <div className="studentIdentity">
          <span aria-hidden="true">{student.initial}</span>
          <div><small>Your {student.language}</small><strong>{student.name}</strong></div>
        </div>
        <nav className="lessonSwitcherLinks" aria-label="Choose a lesson">
          <Link href={student.basePath} aria-current={active === "overview" ? "page" : undefined} onClick={() => setOpen(false)}><span>⌂</span>Overview</Link>
          <p>{student.navigationLabel || "Your lessons"}</p>
          {student.lessons.map((lesson) => (
            <Link href={lesson.href} aria-current={active === lesson.id ? "page" : undefined} key={lesson.id} onClick={() => setOpen(false)}><span>{lesson.number}</span>{lesson.title}</Link>
          ))}
        </nav>
        <ProgressBadge studentId={student.id} total={student.lessons.length} />
      </div>
    </aside>
  );
}
