import type { Metadata } from "next";
import Link from "next/link";
import { StudentShell } from "../../components/StudentShell";
import { ronaldo } from "../student-data";

export const metadata: Metadata = {
  title: { absolute: "Ronaldo's English lessons" },
  description: "Ronaldo's personal English reviews, vocabulary and practice.",
};

export default function RonaldoOverview() {
  return (
    <StudentShell student={ronaldo} active="overview">
      <section className="studentOverview">
        <p className="eyebrow">Your English notebook</p>
        <h1>Welcome, Ronaldo.</h1>
        <p className="overviewLead">{ronaldo.focus} Choose a lesson whenever you want to review and practise.</p>

        <div className="overviewHeading">
          <div><p className="eyebrow">Lessons</p><h2>Available now</h2></div>
          <p>Lesson → Review → Practice</p>
        </div>

        <div className="studentLessonGrid">
          {ronaldo.lessons.map((lesson) => (
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
