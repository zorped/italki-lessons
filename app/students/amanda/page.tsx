import type { Metadata } from "next";
import Link from "next/link";
import { StudentShell } from "../../components/StudentShell";
import { amanda } from "../student-data";

export const metadata: Metadata = {
  title: { absolute: "Amanda's Hindi notebook" },
  description: "Amanda's personal Hindi vocabulary and speaking practice.",
};

export default function AmandaOverview() {
  return (
    <StudentShell student={amanda} active="overview">
      <section className="studentOverview">
        <p className="eyebrow">Your Hindi notebook</p>
        <h1>Welcome, Amanda.</h1>
        <p className="overviewLead">
          Open a chapter to review the key language, listen to examples and practise aloud.
        </p>

        <div className="overviewHeading">
          <div><p className="eyebrow">Hindi chapters</p><h2>Available now</h2></div>
        </div>

        <div className="studentLessonGrid">
          {amanda.lessons.map((chapter) => (
            <Link className="studentLessonCard" href={chapter.href} key={chapter.id}>
              <span className="lessonNumber">Chapter {chapter.number}</span>
              <h3>{chapter.title}</h3>
              <p>{chapter.summary}</p>
              <small>Lesson · {chapter.date}</small>
              <strong>Open chapter →</strong>
            </Link>
          ))}
        </div>
      </section>
    </StudentShell>
  );
}
