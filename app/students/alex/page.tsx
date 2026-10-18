import type { Metadata } from "next";
import Link from "next/link";
import { StudentShell } from "../../components/StudentShell";
import { alex } from "../student-data";

export const metadata: Metadata = {
  title: { absolute: "Alex's English lessons" },
  description: "Alex's English speaking practice for international work and interviews.",
};

const recurring = [
  { title: "Past story, past verbs", example: <>Two weeks ago I <b>woke up</b> and <b>downloaded</b> Instagram.</>, href: "/students/alex/lessons/01#past-story" },
  { title: "Past questions need did", example: <><b>Did</b> you visit Moscow? Where <b>did</b> you stay?</>, href: "/students/alex/lessons/01#questions" },
  { title: "Numbers take -s", example: <>I studied for nine year<b>s</b>. A two-year degree.</>, href: "/students/alex/lessons/01#small-words" },
];

export default function AlexOverview() {
  const lessons = [...alex.lessons].reverse();
  const latest = lessons[0];

  return (
    <StudentShell student={alex} active="overview">
      <article className="lessonV2">
        <div className="lessonTop">
          <header className="lessonHeader">
            <p className="lessonLabel">Your English notebook</p>
            <h1>Welcome, Alex.</h1>
            <div className="lessonIntro"><p>{alex.focus} Each lesson starts with one thing to focus on. Do that first.</p></div>
          </header>
          <Link className="startHere continueCard" href={latest.href}>
            <p className="startHereLabel">Latest lesson <span>{latest.date}</span></p>
            <p className="continueTitle">{latest.title}</p>
            <p>{latest.summary}</p>
            <p className="continueGo">Open lesson {latest.number} →</p>
          </Link>
        </div>

        <section className="lessonSection" id="recurring">
          <div className="sectionHead noNumber">
            <div>
              <p className="sectionKind">What to watch when you speak</p>
              <h2>Three habits to build first</h2>
              <p className="sectionLead">These came up most in our first conversation. They also matter in interviews, when you describe your experience.</p>
            </div>
          </div>
          <div className="recurringCards">
            {recurring.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p className="recurringExample">{item.example}</p>
                <p className="recurringLinks"><Link href={item.href}>Practise this</Link></p>
              </article>
            ))}
          </div>
        </section>

        <section className="lessonSection" id="goals">
          <div className="sectionHead noNumber">
            <div>
              <p className="sectionKind">Your goals</p>
              <h2>More comfortable conversations</h2>
              <p className="sectionLead">Practise talking with people from different language backgrounds, explaining your experience and answering interview questions.</p>
            </div>
          </div>
        </section>

        <section className="lessonSection" id="lessons">
          <div className="sectionHead noNumber">
            <div>
              <p className="sectionKind">Lessons</p>
              <h2>All lessons</h2>
            </div>
          </div>
          <div className="lessonCards">
            {lessons.map((lesson) => (
              <Link className="lessonCardV2" href={lesson.href} key={lesson.id}>
                <span className="lessonCardNumber">{lesson.number}</span>
                <div>
                  <p className="lessonCardDate">{lesson.date}</p>
                  <h3>{lesson.title}</h3>
                  <p>{lesson.summary}</p>
                  {lesson.sections && (
                    <ul className="lessonCardSteps">
                      {lesson.sections.map((section) => <li key={section.id}>{section.title}</li>)}
                    </ul>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </StudentShell>
  );
}
