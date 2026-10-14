import type { Metadata } from "next";
import { ChoiceQuiz, type ChoiceItem } from "../../../../components/ChoiceQuiz";
import { FixList, LessonHeader, LessonMap, LessonSection, SpeakTask, StartHere, type FixItem, type MapStep } from "../../../../components/LessonBlocks";
import { CompleteLessonButton } from "../../../../components/LessonProgress";
import { ListenButton } from "../../../../components/ListenButton";
import { StudentShell } from "../../../../components/StudentShell";
import { maggie } from "../../../student-data";

export const metadata: Metadata = {
  title: { absolute: "Understanding workplace emails · Maggie's English" },
  description: "Workplace vocabulary, speaking feedback and pronunciation from Maggie's fourth lesson.",
};

const pastCheck: FixItem[] = [
  { said: "I also have a meeting with customers last Friday.", natural: <>I also <b>had</b> a meeting with customers last Friday.</>, why: "Last Friday is in the past, so the verb is too. Find the time phrase first, then check the verb." },
];

const pluralCheck: FixItem[] = [
  { said: "Some word… two sentence…", natural: <>some <b>words</b> · two <b>sentences</b></>, why: "After two, three, many, some or several, add -s." },
  { said: "Another problems.", natural: <>another <b>problem</b></>, why: "Another means one more, so the noun stays singular." },
];

const laterChecks: FixItem[] = [
  { said: "I don't need to focus the very specific word.", natural: <>I don&apos;t need to <b>focus on</b> specific words.</>, why: "Learn the verb with its partner: focus on, listen to, ask for, explain something to someone." },
  { said: "Listen what I'm talking.", natural: <><b>Listen to</b> what I&apos;m <b>saying</b>.</>, why: "Listen to something. Say what; talk about something." },
  { said: "They have a little confused.", natural: <>They <b>were</b> a little <b>confused</b>.</>, why: "A person is confused. A thing is confusing. The feeling is confusion." },
  { said: "What's the means of recurring?", natural: <>What does <b>recurring mean</b>?</>, why: "What does ___ mean? is the standard question for any new word." },
  { said: "Please check whether have any mistake.", natural: <>Please check whether <b>there are any mistakes</b>.</>, why: "After whether, you still need a full sentence: subject and verb." },
  { said: "See you next the class.", natural: <>See you <b>next lesson</b>. / See you in our next lesson.</>, why: "No the and no preposition before next: next week, next Friday, next lesson." },
  { said: "When my team has a problem, I step into help.", natural: <>When my team has a problem, I <b>step in</b> to help.</>, why: "Step in = get involved to help. Step into = start a new role: She stepped into the manager role." },
];

const words = [
  { word: "briefing", meaning: "a short meeting or message that gives people the information they need before something happens", partner: "debriefing", partnerMeaning: "happens after, to review what happened" },
  { word: "beyond", meaning: "further than a point or limit. In a workflow, “approved and beyond” means that stage and every stage after it", partner: "within", partnerMeaning: "inside the limit" },
  { word: "recurring", meaning: "happening again and again, with breaks in between", partner: "ongoing", partnerMeaning: "continuing without stopping" },
  { word: "spillover", meaning: "unfinished work from one sprint that moves into the next", partner: "backlog", partnerMeaning: "all the work still waiting to be planned" },
];

const wordQuiz: ChoiceItem[] = [
  { sentence: "We had a short ___ before the workshop started.", options: ["briefing", "debriefing"], answers: ["briefing"], why: "It came before the workshop to prepare people." },
  { sentence: "Missing approvals are a ___ problem. It happens every month.", options: ["recurring", "ongoing"], answers: ["recurring"], why: "It stops and comes back again." },
  { sentence: "The system migration is ___. It started in May and is still running.", options: ["recurring", "ongoing"], answers: ["ongoing"], why: "It has been continuing without a break." },
  { sentence: "Three tickets weren't finished, so they are ___ from the last sprint.", options: ["backlog", "spillover"], answers: ["spillover"], why: "Unfinished work carried forward from one sprint is spillover." },
  { sentence: "This request is ___ our team's scope. Please ask IT.", options: ["within", "beyond"], answers: ["beyond"], why: "It's outside the limit of what your team does." },
];

const wording = [
  { everyday: "We have a problem.", work: "We're facing a challenge.", note: "Challenge sounds like something to overcome. Problem and issue are still fine at work." },
  { everyday: "Tell everyone the important details.", work: "Brief the team on the key points.", note: "Brief someone on something." },
  { everyday: "Tell me what's happening.", work: "Keep me updated on progress.", note: "" },
  { everyday: "We need to agree on what matters most.", work: "We need to align on our priorities.", note: "Align on = reach the same understanding. Agree is perfectly natural too." },
  { everyday: "We can't take on more work right now.", work: "We have limited capacity for additional work.", note: "" },
  { everyday: "Please send it by Wednesday.", work: "Please submit it by Wednesday.", note: "Submit = send for review or approval. For a normal message, send is right." },
];

const pronunciation = [
  { word: "scenarios", sound: <>sih-<b>NAIR</b>-ee-ohz</>, tip: "End with a clear /z/.", example: "Let's consider two possible scenarios." },
  { word: "technology", sound: <>tek-<b>NOL</b>-uh-jee</>, tip: "ch sounds like k.", example: "Technology can help us work faster." },
  { word: "modernizing", sound: <><b>MOD</b>-er-ny-zing</>, tip: "The s/z is a /z/ sound.", example: "We are modernizing the way we work." },
  { word: "adjective", sound: <><b>AJ</b>-ik-tiv</>, tip: "d + j join into one sound.", example: "Recurring is an adjective." },
  { word: "real", sound: <><b>REE</b>-uhl</>, tip: "Glide from ee into l. One or two syllables are both fine.", example: "This is a real opportunity." },
];

const steps: MapStep[] = [
  { id: "speaking-checks", title: "Two speaking checks", kind: "Fix it" },
  { id: "highlighted-words", title: "Your highlighted words", kind: "Words · quiz" },
  { id: "bandwidth", title: "Saying no politely", kind: "Builder" },
  { id: "workplace-wording", title: "Everyday vs work", kind: "Compare" },
  { id: "sentence-starts", title: "Starting a sentence", kind: "Patterns" },
  { id: "pronunciation", title: "Pronunciation", kind: "Listen" },
  { id: "practice", title: "Say it out loud", kind: "Speaking" },
];

export default function MaggieLessonFour() {
  return (
    <StudentShell student={maggie} active="04">
      <article className="lessonV2">
        <div className="lessonTop">
          <LessonHeader label="Lesson 04 · 13 October 2026" title="Understanding workplace emails">
            <p>You brought emails from work and marked the words you wanted to understand. You also asked for feedback on how you speak, not only how you read, so that comes first.</p>
          </LessonHeader>
          <StartHere time="about 10 minutes">
            <p><b>Two checks when you talk about the past:</b> is the verb in the past? Is the noun plural after a number?</p>
            <p>Do step 1, then speaking task 1 twice.</p>
          </StartHere>
        </div>

        <LessonMap steps={steps} />

        <LessonSection id="speaking-checks" number={1} kind="Fix it" title="Two things to check when you speak" lead="Correct each sentence out loud before you open it. These are from our conversation, tidied slightly from the recording.">
          <div className="split">
            <div className="checkCard">
              <p className="checkLabel">Check 1</p>
              <h3>Past time → past verb</h3>
              <FixList items={pastCheck} />
            </div>
            <div className="checkCard">
              <p className="checkLabel">Check 2</p>
              <h3>Number → plural noun</h3>
              <FixList items={pluralCheck} />
            </div>
          </div>
          <h3>Later, one at a time</h3>
          <p className="hint">Don&apos;t try to fix all of these at once. Pick one per week.</p>
          <FixList items={laterChecks} layout="grid" />
        </LessonSection>

        <LessonSection id="highlighted-words" number={2} kind="Words · quiz" title="The words you highlighted" lead="Each word has a partner that people often mix it up with. Knowing the pair is what makes the meaning stick.">
          <div className="pairCards">
            {words.map((item) => (
              <article key={item.word}>
                <p className="pairHead"><b>{item.word}</b><span>vs</span><b className="pairOther">{item.partner}</b></p>
                <p>{item.meaning}</p>
                <p className="pairContrast"><b>{item.partner}</b>: {item.partnerMeaning}</p>
              </article>
            ))}
          </div>
          <ChoiceQuiz id="maggie-04-words" title="Check yourself" items={wordQuiz} layout="grid" />
        </LessonSection>

        <LessonSection id="bandwidth" number={3} kind="Sentence builder" title="Saying no politely: bandwidth" lead="At work, bandwidth means the time and attention you have available. Here is your idea from the lesson, in three pieces:">
          <ol className="chunkRow">
            <li><b>Given that I already have a lot of work,</b><span>the reason</span></li>
            <li><b>taking on a new task</b><span>take on = accept responsibility for</span></li>
            <li><b>would be beyond my bandwidth.</b><span>more than I can handle</span></li>
          </ol>
          <div className="split">
            <p className="calloutNote"><span className="noteLabel">Shorter</span>I don&apos;t have the bandwidth to take on a new task right now.</p>
            <p className="calloutNote"><span className="noteLabel">Opposite</span>That&apos;s <b>within</b> our bandwidth. We can do it this week.</p>
          </div>
        </LessonSection>

        <LessonSection id="workplace-wording" number={4} kind="Compare" title="Everyday words, work words" lead="Both are correct English. The work version is more precise, not more correct. Simple English is always fine in an email.">
          <ul className="pairList">
            {wording.map((item) => (
              <li key={item.everyday}>
                <span className="pairEveryday">{item.everyday}</span>
                <span className="pairArrow" aria-hidden="true">→</span>
                <span className="pairWork">{item.work}</span>
                {item.note && <span className="pairNote">{item.note}</span>}
              </li>
            ))}
          </ul>
        </LessonSection>

        <LessonSection id="sentence-starts" number={5} kind="Patterns" title="Starting a sentence" lead="You said many of your sentences start with I or We. That's fine. When you want variety, start with the purpose, the benefit or the situation.">
          <div className="split">
            <div>
              <h3 className="panelTitle">Three ways to begin</h3>
              <ul className="starterList">
                <li><b>The purpose of this meeting is</b> to agree on the next steps.</li>
                <li><b>The main benefit of planning ahead is</b> that we can review requests earlier.</li>
                <li><b>Given our current workload,</b> we need to prioritise urgent requests.</li>
              </ul>
            </div>
            <div>
              <h3 className="panelTitle">so that or such as?</h3>
              <dl className="wordList">
                <div><dt>so that</dt><dd>gives the reason or goal<span>Review the list early <b>so that</b> we can prepare.</span></dd></div>
                <div><dt>such as</dt><dd>gives examples<span>Review urgent requests, <b>such as</b> system fixes.</span></dd></div>
              </dl>
            </div>
          </div>
        </LessonSection>

        <LessonSection id="pronunciation" number={6} kind="Listen · repeat" title="Pronunciation" lead="Bold shows the stressed part. Press ▶ to hear it (in an Indian English voice if your device has one), say the word, then read the sentence.">
          <ul className="soundList">
            {pronunciation.map((item) => (
              <li key={item.word}>
                <ListenButton text={item.word} />
                <div>
                  <p className="soundWord">{item.word} <span>{item.sound}</span></p>
                  <p className="soundExample">{item.example} <em>{item.tip}</em></p>
                </div>
              </li>
            ))}
          </ul>
        </LessonSection>

        <LessonSection id="practice" number={7} kind="Speaking" title="Say it out loud" lead="Speak first. Open the example only after you've tried.">
          <ol className="speakTasks">
            <SpeakTask number={1} model="Last Friday I had a meeting with two customers. They asked several questions about delivery times. They were a little confused about the new process, so I explained it again and sent them the details.">Tell me about last Friday&apos;s customer meeting. Then tell it again, fixing only <b>past tense</b> and <b>plurals</b>.</SpeakTask>
            <SpeakTask number={2} model="Quick briefing on Friday's shipment: Anna will prepare the documents by Wednesday, and I'll confirm the delivery slot with the carrier on Thursday.">Give a 20-second <b>briefing</b> on a task: what needs to happen, who does it, and by when.</SpeakTask>
            <SpeakTask number={3} model="Given my current workload, taking this on would be beyond my bandwidth this week. If we can move the report to Monday, I'm happy to help.">A colleague asks you to take on extra work. Say no politely using <b>bandwidth</b>, and suggest what would make it possible.</SpeakTask>
            <SpeakTask number={4} model="Late invoices are a recurring problem: it happens every month. The system upgrade is ongoing: it started in May and hasn't finished yet.">Describe one <b>recurring</b> problem and one <b>ongoing</b> project at work.</SpeakTask>
          </ol>
        </LessonSection>

        <footer className="lessonClose">
          <p>Before our next lesson: do task 1 twice, out loud. The second time, fix only past tense and plurals.</p>
          <CompleteLessonButton studentId="maggie" lessonId="04" />
        </footer>
      </article>
    </StudentShell>
  );
}
