import type { Metadata } from "next";
import Link from "next/link";
import { StudentShell } from "../../components/StudentShell";
import { sarah } from "../student-data";

export const metadata: Metadata = {
  title: { absolute: "Sarah's Hindi lessons" },
  description: "Sarah's personal Hindi speaking notes and practice.",
};

export default function SarahOverview() {
  return (
    <StudentShell student={sarah} active="overview">
      <section className="studentOverview">
        <p className="eyebrow">Your Hindi notebook</p>
        <h1>Welcome, Sarah.</h1>
        <p className="overviewLead">
          {sarah.focus} Choose a lesson whenever you want to review and speak aloud.
        </p>

        <div className="overviewHeading">
          <div><p className="eyebrow">Lessons</p><h2>Available now</h2></div>
          <p>Read → Say it aloud → Use it</p>
        </div>

        <div className="studentLessonGrid">
          {sarah.lessons.map((lesson) => (
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
