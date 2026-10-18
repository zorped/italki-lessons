import type { Metadata } from "next";
import { LessonHeader, LessonSection, SpeakTask, StartHere } from "../../../../components/LessonBlocks";
import { CompleteLessonButton } from "../../../../components/LessonProgress";
import { StudentShell } from "../../../../components/StudentShell";
import { alex } from "../../../student-data";

export const metadata: Metadata = { title: { absolute: "Your speaking goals · Alex's English" } };

export default function AlexTrial() {
  return (
    <StudentShell student={alex} active="trial"><article className="lessonV2">
      <div className="lessonTop"><LessonHeader label="Trial · 14 October 2026" title="Your speaking goals"><p>You want to find an international job, prepare for interviews and feel more confident speaking English.</p></LessonHeader><StartHere time="5 minutes"><p>Introduce yourself aloud. Say what you do now and what you want to do next.</p></StartHere></div>
      <LessonSection id="goals" number={1} kind="Your goals" title="Build confidence through conversation"><ul className="starterList"><li>Get more experience speaking with people who do not share your first language.</li><li>Explain your work and experience in complete sentences.</li><li>Practise interview answers and follow-up questions.</li></ul></LessonSection>
      <LessonSection id="language" number={2} kind="Useful phrases" title="Talk about your plans"><dl className="wordList"><div><dt>an international role</dt><dd>a job in an international working environment<span>I&apos;m looking for an international role.</span></dd></div><div><dt>work from home</dt><dd>do your job at home rather than at an office<span>I&apos;d like to talk about working from home.</span></dd></div><div><dt>prepare for</dt><dd>get ready for something<span>I&apos;m preparing for job interviews.</span></dd></div><div><dt>gain confidence</dt><dd>become more confident through experience<span>I want to gain confidence speaking English.</span></dd></div></dl></LessonSection>
      <LessonSection id="practice" number={3} kind="Speaking" title="Try a short introduction"><ol className="speakTasks"><SpeakTask number={1}>What do you do, and what kind of role are you looking for?</SpeakTask><SpeakTask number={2}>Which English conversation would you like to feel more confident having?</SpeakTask></ol></LessonSection>
      <footer className="lessonClose"><CompleteLessonButton studentId="alex" lessonId="trial" /></footer>
    </article></StudentShell>
  );
}
