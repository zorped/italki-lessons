import type { Metadata } from "next";
import Link from "next/link";
import { StudentShell } from "../../components/StudentShell";
import { maggie } from "../student-data";

export const metadata: Metadata = {
  title: { absolute: "Maggie's English lessons" },
  description: "Maggie's personal English listening, vocabulary and speaking reviews.",
};

export default function MaggieOverview() {
  return (
    <StudentShell student={maggie} active="overview">
      <section className="studentOverview">
        <p className="eyebrow">Your English notebook</p>
        <h1>Welcome, Maggie.</h1>
        <p className="overviewLead">{maggie.focus} Choose a lesson whenever you want to review and practise.</p>

        <div className="overviewHeading">
          <div><p className="eyebrow">Lessons</p><h2>Available now</h2></div>
          <p>Listen → Notice → Use</p>
        </div>

        <div className="studentLessonGrid">
          {maggie.lessons.map((lesson) => (
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

