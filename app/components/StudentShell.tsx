"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import type { StudentConfig } from "../students/student-data";
import { ProgressBadge } from "./LessonProgress";

export function StudentShell({
  student,
  active,
  children,
}: {
  student: StudentConfig;
  active: "overview" | string;
  children: ReactNode;
}) {
  const sidebarKey = `english-lessons-${student.id}-sidebar`;
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        setCollapsed(localStorage.getItem(sidebarKey) === "collapsed");
      } catch {
        setCollapsed(false);
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [sidebarKey]);

  function toggleSidebar() {
    const next = !collapsed;
    setCollapsed(next);
    try {
      localStorage.setItem(sidebarKey, next ? "collapsed" : "expanded");
    } catch {
      // The toggle still works for the current page if storage is unavailable.
    }
  }

  return (
    <main className={`learningShell${collapsed ? " isSidebarCollapsed" : ""}`}>
      <aside className="learningSidebar" aria-label={`${student.name}'s lessons`}>
        <div className="sidebarHeader">
          <div className="studentIdentity">
            <span aria-hidden="true">{student.initial}</span>
            <div>
              <small>Your {student.language}</small>
              <strong>{student.name}</strong>
            </div>
          </div>
          <button
            className="sidebarToggle"
            type="button"
            onClick={toggleSidebar}
            aria-expanded={!collapsed}
            aria-label={collapsed ? "Show sidebar" : "Hide sidebar"}
            title={collapsed ? "Show sidebar" : "Hide sidebar"}
          >
            <span aria-hidden="true">{collapsed ? "›" : "‹"}</span>
          </button>
        </div>

        <nav className="learningNav" aria-label="Lesson navigation">
          <div className="learningNavGroup">
            <p>Start</p>
            <Link href={student.basePath} aria-current={active === "overview" ? "page" : undefined}>
              <span className="navIndex">⌂</span>
              <span>Overview</span>
            </Link>
          </div>

          <div className="learningNavGroup">
            <p>Your lessons</p>
            {student.lessons.map((lesson) => (
              <Link key={lesson.id} href={lesson.href} aria-current={active === lesson.id ? "page" : undefined}>
                <span className="navIndex">{lesson.number}</span>
                <span>{lesson.title}</span>
              </Link>
            ))}
          </div>
        </nav>

        <ProgressBadge studentId={student.id} total={student.lessons.length} />
      </aside>

      <div className="learningMain">
        {children}
        <footer className="learningFooter">Small lessons, useful examples, regular review.</footer>
      </div>
    </main>
  );
}
