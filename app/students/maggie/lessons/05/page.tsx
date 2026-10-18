import type { Metadata } from "next";
import { ChoiceQuiz, type ChoiceItem } from "../../../../components/ChoiceQuiz";
import { FixList, LessonHeader, LessonMap, LessonSection, SpeakTask, StartHere, type FixItem, type MapStep } from "../../../../components/LessonBlocks";
import { CompleteLessonButton } from "../../../../components/LessonProgress";
import { ListenButton } from "../../../../components/ListenButton";
import { StudentShell } from "../../../../components/StudentShell";
import { maggie } from "../../../student-data";
import { EmailWorkshop } from "./EmailWorkshop";

export const metadata: Metadata = {
  title: { absolute: "From workplace words to clear sentences · Maggie's English" },
  description: "Workplace vocabulary, pronunciation and speaking practice from Maggie's fifth lesson.",
};

const groups = [
  {
    title: "People and working together",
    words: [
      { word: "alongside", meaning: "together with, or next to someone or something", example: "I work alongside colleagues from different teams." },
      { word: "frontline", meaning: "directly involved in serving customers or doing the main operational work", example: "Frontline colleagues understand the problems customers face." },
      { word: "blend", meaning: "a combination of different things; also a verb meaning combine", example: "The role needs a blend of technical knowledge and communication skills." },
      { word: "encompass", meaning: "include a range of things within a larger whole", example: "My role encompasses planning, reporting and customer communication." },
    ],
    tip: "Learn the complete patterns: work alongside someone; a blend of A and B; a role encompasses several responsibilities.",
  },
  {
    title: "Improving the way we work",
    words: [
      { word: "strengthen", meaning: "make something stronger or more effective", example: "Regular updates strengthen communication between teams." },
      { word: "scale", meaning: "expand an activity or system so it can handle more work", example: "We need a process that can scale as the business grows." },
      { word: "scalable", meaning: "able to expand to handle more work or reach more people", example: "A scalable training programme can reach teams in many locations." },
      { word: "framework", meaning: "an organised structure of principles or steps that guides work", example: "The framework helps us assess skills consistently." },
      { word: "initiative", meaning: "a planned effort to improve something; also the ability to act without being told", example: "The training initiative will help new colleagues. She took the initiative to organise it." },
      { word: "initiation", meaning: "the act or process of starting something", example: "During project initiation, we agree on the purpose and scope." },
      { word: "simplify", meaning: "make something simpler or easier to understand or do", example: "The new process will simplify decision-making." },
    ],
    tip: "A framework guides the work. An initiative is an organised effort to make a change. They are not interchangeable.",
  },
  {
    title: "Skills and standards",
    words: [
      { word: "consistent", meaning: "following the same standard or behaving in a steady, reliable way", example: "We need consistent service across all locations." },
      { word: "rigor / rigour", meaning: "careful, thorough attention to methods, accuracy and standards", example: "The review needs more rigor so that we can trust the results." },
      { word: "thoroughly", meaning: "completely and carefully, with attention to all the details", example: "Please check the report thoroughly before sending it." },
      { word: "applicable", meaning: "relevant and able to be used in a particular situation", example: "These guidelines are applicable to all teams." },
      { word: "competency / competencies", meaning: "an ability to do something well; at work, competencies are specific skills or abilities needed for a role", example: "Communication is a key competency. The assessment covers several competencies." },
      { word: "expertise", meaning: "specialist knowledge or skill gained through experience", example: "The team has expertise in warehouse operations." },
    ],
    tip: "Rigor is the American spelling; rigour is British. Competency is singular; competencies is plural.",
  },
];

const wordQuiz: ChoiceItem[] = [
  { sentence: "I work ___ the operations team to solve delivery problems.", options: ["alongside", "encompass", "applicable"], answers: ["alongside"], why: "Work alongside someone means work together with them." },
  { sentence: "The new training ___ aims to improve customer service.", options: ["initiative", "rigor", "frontline"], answers: ["initiative"], why: "An initiative is a planned effort to improve something." },
  { sentence: "Please review the figures ___ before sharing them.", options: ["thorough", "thoroughly", "rigor"], answers: ["thoroughly"], why: "The adverb thoroughly describes how you review the figures." },
  { sentence: "These rules are ___ to temporary staff as well.", options: ["applicable", "consistent", "alongside"], answers: ["applicable"], why: "Applicable to means the rules apply to those people or that situation." },
  { sentence: "This role requires several technical ___.", options: ["competency", "competencies", "competent"], answers: ["competencies"], why: "Several needs a plural noun: competencies." },
  { sentence: "Our process must ___ as the number of customers increases.", options: ["scale", "blend", "framework"], answers: ["scale"], why: "Scale means expand to handle more demand." },
  { sentence: "The new training ___ includes mentoring and workshops to improve our skills.", options: ["initiation", "initiative"], answers: ["initiative"], why: "The initiative is the organised effort. Initiation is the act or stage of starting it." },
  { sentence: "Please attach the test results, where ___. Some changes do not require this test.", options: ["applicable", "consistent"], answers: ["applicable"], why: "Where applicable means in the cases where it is relevant or required." },
];

const speakingFixes: FixItem[] = [
  { said: "Different people have different method to finish the task.", natural: <>Different people have different <b>methods</b> for completing the task.</>, why: "Different people can have several methods, so use the plural. This is the same plural-noun check from our earlier lessons." },
  { said: "We can summary some common words or phrase.", natural: <>We can <b>summarise</b> some common <b>words and phrases</b>.</>, why: "Summary is a noun; summarise (or summarize) is the verb. After can, use the base verb." },
  { said: "My family members think I'm a person that very kind and nice.", natural: <>My family members think I&apos;m a person <b>who is</b> very kind and nice.</>, why: "The description needs a verb: who is kind. A shorter version is 'My family members think I'm very kind and nice.'" },
  { said: "The view is same across the regions.", natural: <>The view is <b>the same</b> across the regions.</>, why: "Learn the same as a complete phrase. We also met this in 'Everyone has the same twenty-four hours.'" },
];

const pronunciation = [
  { word: "thoroughly", sound: <><b>THUR</b>-uh-lee</>, tip: "Start with th as in think. Keep the final -ly.", example: "I checked the document thoroughly." },
  { word: "competency", sound: <><b>KOM</b>-puh-tuhn-see</>, tip: "Stress the first syllable. Competencies ends with a /z/ sound.", example: "Communication is an important competency." },
  { word: "competencies", sound: <><b>KOM</b>-puh-tuhn-seez</>, tip: "The plural ending is seez, not just see.", example: "The role requires several competencies." },
  { word: "applicable", sound: <><b>AP</b>-li-kuh-buhl</>, tip: "This common pronunciation stresses the first syllable. uh-PLIK-uh-buhl is also a standard variant.", example: "This policy is applicable to our team." },
  { word: "rigor", sound: <><b>RIG</b>-er</>, tip: "The g is hard, as in go. British spelling: rigour.", example: "We need more rigor in our review." },
  { word: "initiative", sound: <>ih-<b>NISH</b>-uh-tiv</>, tip: "Stress NISH. The middle sound is sh.", example: "She took the initiative to improve the process." },
  { word: "initiation", sound: <>ih-nish-ee-<b>AY</b>-shuhn</>, tip: "Compare the different endings: initiative ends in -tiv; initiation ends in -AY-shuhn.", example: "The project is in the initiation stage." },
  { word: "strengthen", sound: <><b>STRENG</b>-thuhn</>, tip: "Keep the str at the beginning and the th in the middle.", example: "This will strengthen our working relationship." },
  { word: "simplify", sound: <><b>SIM</b>-plih-fy</>, tip: "Read the whole ending. Simple ends in -puhl; simplify ends in -plih-fy.", example: "We want to simplify the approval process." },
  { word: "areas", sound: <><b>AIR</b>-ee-uhz</>, tip: "Finish with /z/. We revisited this word during the reading.", example: "The assessment covers several areas." },
  { word: "perspectives", sound: <>per-<b>SPEK</b>-tivz</>, tip: "Keep the final /z/ so that the listener hears the plural.", example: "The role combines technical and business perspectives." },
];

const steps: MapStep[] = [
  { id: "speaking-patterns", title: "Your sentences, naturally", kind: "Fix it" },
  { id: "words", title: "Your workplace words", kind: "Words" },
  { id: "word-choices", title: "Choose the right word", kind: "Quiz" },
  { id: "pronunciation", title: "Pronunciation", kind: "Listen" },
  { id: "practice", title: "Say it out loud", kind: "Speaking" },
  { id: "email-workshop", title: "Your email revisions", kind: "Writing" },
];

export default function MaggieLessonFive() {
  return (
    <StudentShell student={maggie} active="05">
      <article className="lessonV2">
        <div className="lessonTop">
          <LessonHeader label="Lesson 05 · 15 October 2026" title="From workplace words to clear sentences">
            <p>Use the language from our workplace reading to describe your own responsibilities, skills and ideas.</p>
          </LessonHeader>
          <StartHere time="about 10 minutes">
            <p>Start with <b>different methods</b> and <b>summarise</b> in step 1. Try the corrections before opening them.</p>
            <p>Then compare <b>initiative</b> with <b>initiation</b> and make one sentence with each.</p>
          </StartHere>
        </div>
        <LessonMap steps={steps} />

        <LessonSection id="speaking-patterns" number={1} kind="Fix it" title="Your sentences, naturally" lead="These are lightly tidied reconstructions of your own speech. Try the correction aloud before opening the example.">
          <FixList items={speakingFixes} layout="grid" />
        </LessonSection>

        <LessonSection id="words" number={2} kind="Words" title="Your workplace words" lead="Learn each word with its sentence partners. Start with the group you are most likely to use this week.">
          <div className="wordGroups">
            {groups.map((group) => (
              <details key={group.title}>
                <summary>{group.title}</summary>
                <dl>{group.words.map((item) => <div key={item.word}><dt>{item.word}</dt><dd>{item.meaning}<span>{item.example}</span></dd></div>)}</dl>
                <p className="groupTip">{group.tip}</p>
              </details>
            ))}
          </div>
        </LessonSection>

        <LessonSection id="word-choices" number={3} kind="Quiz · compare" title="Choose the right word" lead="Use the sentence to decide which meaning and word form fit.">
          <div className="pairCards">
            <article><p className="pairHead"><b>initiative</b><span>vs</span><b className="pairOther">initiation</b></p><p>An <b>initiative</b> is a planned effort to improve something: “Our training initiative includes mentoring.”</p><p className="pairContrast"><b>Initiation</b> is the start: “Project initiation includes agreeing on the scope.” Both words are nouns in these examples. <b>Initiate</b> is the verb.</p></article>
            <article><p className="pairHead"><b>consistent</b><span>vs</span><b className="pairOther">continuous</b></p><p><b>Consistent</b> means following the same standard: “Our teams use consistent criteria.”</p><p className="pairContrast"><b>Continuous</b> means without a break. <b>Visibility</b> means being able to see or understand information. A consistent view is the same understanding across teams.</p></article>
            <article><p className="pairHead"><b>framework</b><span>vs</span><b className="pairOther">process</b></p><p>A <b>framework</b> provides an organising structure: “The framework identifies the skills to assess.”</p><p className="pairContrast">A <b>process</b> is a sequence of steps: “The assessment process explains how to collect and review the results.”</p></article>
            <article><p className="pairHead"><b>scale</b><span>→</span><b className="pairOther">scalable</b></p><p><b>Scale</b> can be a verb: “We can scale the training to reach more teams.” It can also be a noun: “We work on a global scale.”</p><p className="pairContrast"><b>Scalable</b> is an adjective: “We need a scalable training programme.” Scaling expertise can mean sharing and applying specialist knowledge across more teams.</p></article>
          </div>
          <ChoiceQuiz id="maggie-05-words" items={wordQuiz} layout="grid" />
          <div className="split">
            <dl className="wordList">
              <div><dt>competent</dt><dd>an adjective: able to do something well<span>She is competent at handling customer requests.</span></dd></div>
              <div><dt>competency</dt><dd>a noun: an ability, often defined for a role<span>Problem-solving is a key competency.</span></dd></div>
              <div><dt>competencies</dt><dd>the plural noun<span>The framework describes the competencies needed for the role.</span></dd></div>
            </dl>
            <dl className="wordList">
              <div><dt>thorough</dt><dd>an adjective: careful and complete<span>We carried out a thorough review.</span></dd></div>
              <div><dt>thoroughly</dt><dd>an adverb: carefully and completely<span>We reviewed the document thoroughly.</span></dd></div>
              <div><dt>applicable to</dt><dd>relevant and usable in this situation<span>The procedure is applicable to all sites.</span></dd></div>
            </dl>
          </div>
        </LessonSection>

        <LessonSection id="pronunciation" number={4} kind="Listen · repeat" title="Pronunciation" lead="Bold shows the stressed syllable. Listen, say the word, then use the complete sentence.">
          <p className="hint">During the reading, we noticed missing plural endings and simplify being read as simple. Check the whole word, then its ending. The other words below are practice targets from today&apos;s vocabulary.</p>
          <ul className="soundList">
            {pronunciation.map((item) => <li key={item.word}><ListenButton text={item.word} /><div><p className="soundWord">{item.word} <span>{item.sound}</span></p><p className="soundExample">{item.example} <em>{item.tip}</em></p></div></li>)}
          </ul>
        </LessonSection>

        <LessonSection id="practice" number={5} kind="Speaking" title="Say it out loud" lead="Try using the new language in an explanation of your own. Open the example after you have spoken.">
          <ol className="speakTasks">
            <SpeakTask number={1} model="My role encompasses planning and customer communication. I work alongside the operations team, and I share updates with frontline colleagues.">Describe your responsibilities using <b>encompass</b>, <b>alongside</b> and <b>frontline</b>.</SpeakTask>
            <SpeakTask number={2} model="Communication and problem-solving are key competencies for my role. They help me understand a customer's concern and explain the next steps clearly.">Name two <b>competencies</b> you need for your role. Give an example of each.</SpeakTask>
            <SpeakTask number={3} model="I would suggest a training initiative to strengthen communication. We could use a shared framework to make our updates more consistent.">Propose an <b>initiative</b> to <b>strengthen</b> one part of your team&apos;s work.</SpeakTask>
            <SpeakTask number={4} model="Before scaling the process, we should test it thoroughly and check whether it is applicable to other locations.">Explain what you would check before <b>scaling</b> a new process. Use <b>thoroughly</b> and <b>applicable</b>.</SpeakTask>
            <SpeakTask number={5} model="Different people may use different methods to complete a task, but their work should meet the same standard. That is what I mean by consistent results.">Explain your classroom example about <b>different methods</b> and <b>consistent results</b>. Check the plural endings.</SpeakTask>
            <SpeakTask number={6} model="The training initiative is a programme to improve our skills. Its initiation is the stage when we set it up and agree on its goals.">Explain <b>initiative</b> and <b>initiation</b> using one project as an example.</SpeakTask>
          </ol>
        </LessonSection>
        <EmailWorkshop />
        <footer className="lessonClose"><p>Before starting the next article, review your earlier lesson notes. Bring one sentence you corrected and one word you used at work.</p><CompleteLessonButton studentId="maggie" lessonId="05" /></footer>
      </article>
    </StudentShell>
  );
}
