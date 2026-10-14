import type { Metadata } from "next";
import Link from "next/link";
import { StudentShell } from "../../components/StudentShell";
import { maggie } from "../student-data";

export const metadata: Metadata = {
  title: { absolute: "Maggie's English lessons" },
  description: "Maggie's personal English listening, vocabulary and speaking reviews.",
};

const recurring = [
  { title: "Plural nouns after numbers", example: <>two sentence → two sentence<b>s</b></>, lessons: [{ id: "03", href: "/students/maggie/lessons/03#quantity" }, { id: "04", href: "/students/maggie/lessons/04#speaking-checks" }] },
  { title: "Past tense when telling a story", example: <>last Friday I <b>had</b> a meeting</>, lessons: [{ id: "03", href: "/students/maggie/lessons/03#past-story" }, { id: "04", href: "/students/maggie/lessons/04#speaking-checks" }] },
  { title: "Word forms", example: <>confused / confusing · genuine / genuine<b>ly</b></>, lessons: [{ id: "03", href: "/students/maggie/lessons/03#similar-words" }, { id: "04", href: "/students/maggie/lessons/04#speaking-checks" }] },
];

export default function MaggieOverview() {
  const lessons = [...maggie.lessons].reverse();
  const latest = lessons[0];

  return (
    <StudentShell student={maggie} active="overview">
      <article className="lessonV2">
        <div className="lessonTop">
          <header className="lessonHeader">
            <p className="lessonLabel">Your English notebook</p>
            <h1>Welcome, Maggie.</h1>
            <div className="lessonIntro"><p>{maggie.focus} Each lesson starts with one thing to focus on. Do that first.</p></div>
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
              <p className="sectionKind">Across lessons</p>
              <h2>Patterns that keep coming up</h2>
              <p className="sectionLead">These appeared in more than one conversation. When you speak, check one of them at a time.</p>
            </div>
          </div>
          <div className="recurringCards">
            {recurring.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p className="recurringExample">{item.example}</p>
                <p className="recurringLinks">
                  Practise in{" "}
                  {item.lessons.map((lesson, index) => (
                    <span key={lesson.id}>{index > 0 && " · "}<Link href={lesson.href}>Lesson {lesson.id}</Link></span>
                  ))}
                </p>
              </article>
            ))}
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
