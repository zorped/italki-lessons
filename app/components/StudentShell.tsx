"use client";

import { useRef, type ReactNode } from "react";
import type { StudentConfig } from "../students/student-data";
import { LessonNavigation } from "./LessonNavigation";
import { PageOutline } from "./PageOutline";

export function StudentShell({ student, active, children }: { student: StudentConfig; active: string; children: ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <main className="learningShell lessonNavigationShell">
      <LessonNavigation key={`lessons-${student.id}-${active}`} student={student} active={active} />
      <div className="learningMain" ref={contentRef}>
        {children}
        <footer className="learningFooter">Small lessons, useful examples, regular review.</footer>
      </div>
      {active !== "overview" && <PageOutline key={`outline-${student.id}-${active}`} contentRef={contentRef} />}
    </main>
  );
}
