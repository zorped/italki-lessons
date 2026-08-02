import type { Metadata } from "next";
import Link from "next/link";
import { StudentShell } from "../../components/StudentShell";
import { ihar } from "../student-data";

export const metadata: Metadata = {
  title: { absolute: "Ihar's English lessons" },
  description: "Ihar's personal English reviews, professional vocabulary and practice.",
};

export default function IharOverview() {
  return (
    <StudentShell student={ihar} active="overview">
      <section className="studentOverview">
        <p className="eyebrow">Your English notebook</p>
        <h1>Welcome, Ihar.</h1>
        <p className="overviewLead">{ihar.focus} Choose a lesson whenever you want to review and practise.</p>

        <div className="overviewHeading">
          <div><p className="eyebrow">Lessons</p><h2>Available now</h2></div>
          <p>Lesson → Review → Practice</p>
        </div>

        <div className="studentLessonGrid">
          {ihar.lessons.map((lesson) => (
            <Link className="studentLessonCard" href={lesson.href} key={lesson.id}>
              <span className="lessonNumber">Lesson {lesson.number}</span>
              <h3>{lesson.title}</h3>
              <p>{lesson.summary}</p>
              <small>{lesson.date}</small>
              <strong>Open lesson →</strong>
            </Link>
          ))}
        </div>
      </section>
    </StudentShell>
  );
}
