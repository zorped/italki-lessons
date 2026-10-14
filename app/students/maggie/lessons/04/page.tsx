import type { Metadata } from "next";
import { CompleteLessonButton } from "../../../../components/LessonProgress";
import { ContextReading, type ReadingPage } from "../../../../components/ContextReading";
import { StudentShell } from "../../../../components/StudentShell";
import { maggie } from "../../../student-data";

export const metadata: Metadata = {
  title: { absolute: "Understanding workplace emails · Maggie's English" },
  description: "Useful workplace vocabulary and pronunciation practice from Maggie's fourth lesson.",
};

const reading: ReadingPage[] = [{
  number: 1,
  paragraphs: [
    {
      text: "Following the briefing, we agreed to plan beyond the current sprint. Looking ahead helps the team prepare for future work.",
      notes: [
        { text: "briefing", kind: "meaning", priority: "high", title: "briefing", explanation: "A short meeting or explanation that gives people the information they need. A briefing prepares people; a debriefing reviews what happened afterwards.", example: "We had a short briefing before the workshop." },
        { text: "beyond", kind: "meaning", priority: "high", title: "beyond", explanation: "Further than a point or outside a limit. Here it means planning further ahead than the current sprint. After a workflow status, 'approved and beyond' means that status and later stages in the process.", example: "We need to think beyond this week's deadline." },
      ],
    },
    {
      text: "Unfinished work can create sprint spillover. If this becomes a recurring problem, the team may need to review its workload and capacity.",
      notes: [
        { text: "spillover", kind: "meaning", priority: "medium", title: "sprint spillover", explanation: "Work that was not finished in one sprint and carries over into a later sprint. A backlog is the broader list of work still to be done; spillover is unfinished work carried forward.", example: "We need to finish the spillover from the previous sprint." },
        { text: "recurring", kind: "meaning", priority: "high", title: "recurring", explanation: "Happening again and again. Recurring problems return; ongoing problems continue without necessarily stopping.", example: "Missing approvals are a recurring problem." },
      ],
    },
  ],
}];

const pronunciation = [
  { word: "scenarios", sound: "sih-NAIR-ee-ohz", tip: "Stress the second syllable. Keep the plural /z/ at the end.", example: "Let's consider two possible scenarios." },
  { word: "real", sound: "REE-uhl", tip: "Move smoothly from the ee sound into the ending. It can sound like one flowing syllable or two closely joined ones.", example: "This is a real opportunity." },
  { word: "technology", sound: "tek-NOL-uh-jee", tip: "Stress NOL. The ch sounds like /k/, and the final part sounds like jee.", example: "Technology can help us work more efficiently." },
  { word: "modernizing", sound: "MOD-er-ny-zing", tip: "Stress the first syllable. The s sound in modernise or modernize is /z/.", example: "We are modernizing the way we work." },
  { word: "adjective", sound: "AD-jik-tiv", tip: "Stress the first syllable. Join the d and j into one /dʒ/ sound.", example: "In 'a recurring problem', recurring is an adjective." },
];

const workplaceWording = [
  { everyday: "We have a problem.", work: "We are facing a challenge.", note: "Challenge emphasises a difficulty to overcome. Problem and issue are still useful at work, especially when something is wrong and needs fixing." },
  { everyday: "Tell everyone the important details.", work: "Brief the team on the key points.", note: "Brief someone on something = give them the essential information." },
  { everyday: "Tell me what is happening.", work: "Keep me updated on progress.", note: "An update gives new information about the current situation." },
  { everyday: "We need to agree on what matters most.", work: "We need to align on our priorities.", note: "Align on something = reach a shared understanding or direction. Agree is also perfectly natural in a work email." },
  { everyday: "This keeps happening.", work: "This is a recurring issue.", note: "Recurring means it happens repeatedly. It does not necessarily continue without a break." },
  { everyday: "We cannot take on more work right now.", work: "We have limited capacity to take on additional work.", note: "You can also say: 'Taking on another task would be beyond our bandwidth.'" },
  { everyday: "Can you help us with this?", work: "Could you support us with this task?", note: "Both versions are appropriate at work. Support can suggest help over a period of time." },
  { everyday: "Please send it by Wednesday.", work: "Please submit it by Wednesday.", note: "Submit means send something for review, approval or a formal process. Use send for an ordinary message." },
];

const speechPatterns = [
  { title: "Plural endings after numbers and quantity words", heard: "some word; two sentence; another problems", better: "some words; two sentences; another problem", pattern: "Use a plural noun after two, many or some (for countable things). Another takes a singular noun.", check: "After a number, check the noun ending: two sentences, three examples." },
  { title: "Past time needs a past-tense verb", heard: "I also have a meeting with customers last Friday.", better: "I also had a meeting with customers last Friday.", pattern: "Last Friday places this meeting in the past. Use had, spoke, noticed and answered when retelling it.", check: "Find the time phrase first. Then check the verbs." },
  { title: "Learn the preposition with the verb", heard: "I don't need to focus the very specific word; listen what I'm talking", better: "I don't need to focus on specific words; listen to what I'm saying", pattern: "Learn complete chunks: focus on something, listen to someone, explain something to someone, ask someone for something.", check: "Ask: does this verb need on, to or for? Learn the whole phrase rather than swapping prepositions." },
  { title: "Confused describes a person; confusion is a noun", heard: "They have a little confused.", better: "They were a little confused.", pattern: "Someone is confused. Something is confusing. There is some confusion.", check: "Am I describing the person, the thing causing the feeling, or the feeling itself?" },
  { title: "Give the question a complete structure", heard: "What's the means of recurring?; whether have any mistake", better: "What does recurring mean?; whether there are any mistakes", pattern: "Ask 'What does this word mean?' In a statement, use 'Check whether there are any mistakes.'", check: "Check that the sentence has a subject and a verb." },
  { title: "Use next in familiar time expressions", heard: "See you next the class.", better: "See you next lesson.", pattern: "Next lesson, next week and next Friday do not need the or a preposition. Also natural: 'See you in our next lesson.'", check: "Practise the whole expression: see you next week; on Friday; at three; in October." },
];

export default function MaggieLessonFour() {
  return (
    <StudentShell student={maggie} active="04">
      <section className="chapterHero">
        <p className="eyebrow">English · Lesson 04 · 13 October 2026</p>
        <h1>Understanding workplace emails</h1>
        <p className="overviewLead">Practise the words you highlighted and the sounds we revisited while reading workplace emails.</p>
      </section>
      <div className="chapterStack lessonEditorial">
        <section className="chapterCard" id="workplace-vocabulary">
          <p className="sectionKicker">4.1</p>
          <h2>Your highlighted words in context</h2>
          <p className="rule">Hover over a highlighted word, or tap it, to see its meaning and a useful comparison.</p>
          <ContextReading title="Sprint planning · practice examples" pages={reading} />
        </section>
        <section className="chapterCard" id="pronunciation">
          <p className="sectionKicker">4.2</p>
          <h2>Pronunciation to revisit</h2>
          <p className="rule">Say the word once, then read the complete sentence. Capital letters show the stressed syllable.</p>
          <div className="lessonTableScroll" tabIndex={0} role="region" aria-label="Pronunciation reference">
            <table className="lessonTable pronunciationTable">
              <thead><tr><th scope="col">Word</th><th scope="col">Say it</th><th scope="col">Practise</th></tr></thead>
              <tbody>{pronunciation.map((item) => (
                <tr key={item.word}><th scope="row">{item.word}</th><td><span className="sound">{item.sound}</span></td><td>{item.example}<details><summary>Sound tip</summary><p>{item.tip}</p></details></td></tr>
              ))}</tbody>
            </table>
          </div>
        </section>
        <section className="chapterCard" id="beyond-bandwidth">
          <p className="sectionKicker">4.3</p>
          <h2>Beyond our bandwidth</h2>
          <p className="rule">Our classroom example, in a polished form:</p>
          <p className="example">Given that I already have a lot of work, taking on a new task would be beyond my bandwidth.</p>
          <p><strong>Given that</strong> introduces the situation or reason. <strong>Take on a task</strong> means accept responsibility for doing it.</p>
          <p><strong>Bandwidth</strong> in a workplace conversation means the time, attention or capacity available to do something.</p>
          <div className="comparison">
            <div><h3>Within our bandwidth</h3><p>We have enough capacity to handle it.</p></div>
            <div><h3>Beyond our bandwidth</h3><p>It requires more capacity than we have available.</p></div>
          </div>
          <aside className="chapterNote"><strong>A shorter version of your idea:</strong> I don&apos;t have the bandwidth to take on a new task right now.</aside>
        </section>
        <section className="chapterCard" id="workplace-wording">
          <p className="sectionKicker">4.4</p>
          <h2>Everyday wording → workplace wording</h2>
          <p className="rule">Keep the same idea and choose the phrase that fits the situation. Simple English works well in business too.</p>
          <div className="lessonTableScroll" tabIndex={0} role="region" aria-label="Everyday and workplace expressions">
            <table className="lessonTable wordingTable">
              <thead><tr><th scope="col">Everyday</th><th scope="col">At work</th><th scope="col">When it fits</th></tr></thead>
              <tbody>{workplaceWording.map((item) => (
                <tr key={item.everyday}><td>{item.everyday}</td><td>{item.work}</td><td>{item.note}</td></tr>
              ))}</tbody>
            </table>
          </div>
          <aside className="chapterNote"><strong>Step in or step into?</strong> Say “When my team members face a problem, I step <strong>in</strong> to help.” Use “step <strong>into</strong> a new role” when starting a position or responsibility.</aside>
          <h3>Give the sentence a clear starting point</h3>
          <p>You mentioned starting many sentences with <em>I</em> or <em>we</em>. Those are fine. You can also start with the purpose, benefit or situation:</p>
          <ul className="sentenceStarters">
            <li><strong>The purpose of this meeting is</strong> to agree on the next steps.</li>
            <li><strong>The main benefit of planning ahead is</strong> that the team can review requests earlier.</li>
            <li><strong>Given our current workload,</strong> we need to prioritise urgent requests.</li>
          </ul>
          <p className="chapterNote"><strong>Purpose or examples?</strong> Use “so that” to explain the aim: “Review the list early <strong>so that</strong> we can prepare.” Use “such as” to introduce examples: “Review urgent requests, <strong>such as</strong> system fixes.”</p>
        </section>
        <section className="chapterCard" id="speech-patterns">
          <p className="sectionKicker">4.5</p>
          <h2>Notice patterns in your speaking</h2>
          <p className="rule">These examples come from your own conversation, with wording lightly reconstructed from the recording. Try noticing one pattern at a time.</p>
          <div className="lessonTableScroll" tabIndex={0} role="region" aria-label="Speech patterns and corrections">
            <table className="lessonTable speechTable">
              <thead><tr><th scope="col">Pattern</th><th scope="col">From our conversation</th><th scope="col">Try saying</th></tr></thead>
              <tbody>{speechPatterns.map((item) => (
                <tr key={item.title}>
                  <th scope="row">{item.title}</th><td>{item.heard}</td>
                  <td><span className="correctedSentence">{item.better}</span><details><summary>Pattern &amp; self-check</summary><p>{item.pattern}</p><p>{item.check}</p></details></td>
                </tr>
              ))}</tbody>
            </table>
          </div>
          <aside className="chapterNote"><strong>Your first practice target:</strong> Tell the story of last Friday&apos;s meeting again. Keep the verbs in the past and check plural nouns. Then repeat it once more, correcting only those two patterns.</aside>
        </section>
        <section className="chapterCard" id="practice">
          <p className="sectionKicker">4.6</p>
          <h2>Make it useful at work</h2>
          <div className="practiceSet">
            <article className="practicePrompt"><span>01</span><p>Give a short <strong>briefing</strong> about a task. Say what needs to happen, who will do it and when it is due.</p></article>
            <article className="practicePrompt"><span>02</span><p>Describe a <strong>recurring</strong> problem. How is that different from a problem that is <strong>ongoing</strong>?</p></article>
            <article className="practicePrompt"><span>03</span><p>Explain <strong>sprint spillover</strong> to someone who has never worked in your team.</p></article>
            <article className="practicePrompt"><span>04</span><p>Politely explain that an extra task is <strong>beyond your bandwidth</strong>. Suggest what could change so you can take it on.</p></article>
            <article className="practicePrompt"><span>05</span><p>Choose two everyday sentences above and express the same ideas in a work email. Explain why the wording fits.</p></article>
            <article className="practicePrompt"><span>06</span><p>Describe your last customer meeting. Check <strong>past tense</strong> and <strong>plural endings</strong>, then try again.</p></article>
          </div>
        </section>
        <section className="chapterEnd">
          <p>Try explaining a work situation in your own words before looking at the notes.</p>
          <CompleteLessonButton studentId="maggie" lessonId="04" />
        </section>
      </div>
    </StudentShell>
  );
}
