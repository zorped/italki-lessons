import type { Metadata } from "next";
import { ChoiceQuiz, type ChoiceItem } from "../../../../components/ChoiceQuiz";
import { FixList, LessonHeader, LessonMap, LessonSection, SpeakTask, StartHere, type FixItem } from "../../../../components/LessonBlocks";
import { CompleteLessonButton } from "../../../../components/LessonProgress";
import { ListenButton } from "../../../../components/ListenButton";
import { StudentShell } from "../../../../components/StudentShell";
import { maggie } from "../../../student-data";

export const metadata: Metadata = { title: { absolute: "Small words, clearer meaning · Maggie's English" }, description: "Food offers, small quantities, indirect questions and future forms from Maggie's sixth lesson." };

const fixes: FixItem[] = [
  { said: "I think I should more practice.", natural: <>I think I should <b>practise more</b>.</>, why: "Should needs a base verb. Also possible: 'I think I need more practice.' Here, practice is a noun." },
  { said: "Yesterday I want to ask them…", natural: <>Yesterday I <b>wanted</b> to ask them…</>, why: "Notice yesterday first, then move the verb into the past. This is the same pattern we practised in your customer-meeting story." },
  { said: "Could you want to try more?", natural: <><b>Would you like some more?</b></>, why: "Would you like…? offers something. Could you try…? asks someone to do something. Want does not fit after could you in this offer." },
  { said: "Could you check whether is available?", natural: <>Could you check whether <b>you are available</b>?</>, why: "Include the subject. For a room or a time slot, say 'whether it is available'. The subject depends on what you mean." },
  { said: "Whether you are available on 9 a.m.", natural: <>whether you are available <b>at 9 a.m.</b></>, why: "At + clock time; on + day; in + month or part of the day." },
  { said: "I will aware of this.", natural: <>I will <b>be aware</b> of this. / I will <b>keep this in mind</b>.</>, why: "Aware is an adjective. After will, use a verb: will be aware. Keep this in mind is a natural way to express your intention." },
];

const quantityQuiz: ChoiceItem[] = [
  { sentence: "I'm feeling ___ cold. Could we close the window?", options: ["a bit", "a bit of"], answers: ["a bit"], why: "Cold is an adjective here. Say a bit cold or a little cold, without of." },
  { sentence: "We need ___ time to finish this.", options: ["a bit of", "a bit"], answers: ["a bit of"], why: "Before an uncountable noun, use a bit of time. A little time also works." },
  { sentence: "Would you like some more ___?", options: ["soup", "a soup"], answers: ["soup"], why: "Soup is uncountable in this offer. A soup can mean one serving in an ordering context." },
  { sentence: "Would you like two more ___ of chicken?", options: ["piece", "pieces"], answers: ["pieces"], why: "Chicken as food is usually uncountable, but pieces are countable. Two pieces needs a plural." },
];

const questionQuiz: ChoiceItem[] = [
  { sentence: "Could you check whether ___ available at 9 a.m.?", options: ["you are", "are you"], answers: ["you are"], why: "Inside the indirect question, use statement word order: subject + verb." },
  { sentence: "We will start ___ everyone is ready.", options: ["if", "whether"], answers: ["if"], why: "This is a condition: starting depends on everyone being ready." },
  { sentence: "I wanted to ask ___ you have time today.", options: ["if", "whether"], answers: ["if", "whether"], why: "Both are correct in this indirect yes/no question. Whether is often preferred in more formal writing." },
  { sentence: "We need to decide ___ to meet online or in person.", options: ["whether", "if"], answers: ["whether"], why: "Before to + verb, use whether: whether to meet." },
];

const futureQuiz: ChoiceItem[] = [
  { sentence: "The phone is ringing. ___ answer it.", options: ["I'll", "I'd"], answers: ["I'll"], why: "Will can express a decision made now or a willingness to help." },
  { sentence: "I've already decided. ___ review the notes tonight.", options: ["I'm going to", "I would"], answers: ["I'm going to"], why: "Going to is a natural choice for an existing intention." },
  { sentence: "Yesterday I thought I ___ have time to review, but I was too busy.", options: ["would", "will"], answers: ["would"], why: "Would looks forward from a past viewpoint. It is not simply a more formal replacement for will." },
  { sentence: "If I had less work, I ___ help with the report.", options: ["would", "am going to"], answers: ["would"], why: "Would describes the result in this imagined situation." },
];

const steps = [
  { id: "speaking", title: "Your speaking checks", kind: "Fix it" },
  { id: "small-amounts", title: "A bit, a little, some more", kind: "Compare · quiz" },
  { id: "questions", title: "If or whether?", kind: "Builder · quiz" },
  { id: "future-forms", title: "Will, would, going to", kind: "Compare · quiz" },
  { id: "useful-pairs", title: "Useful pairs to keep", kind: "Review" },
  { id: "practice", title: "From knowing to saying", kind: "Speaking" },
];

export default function MaggieLessonSix() {
  return (
    <StudentShell student={maggie} active="06"><article className="lessonV2">
      <div className="lessonTop"><LessonHeader label="Lesson 06 · 18 October 2026" title="Small words, clearer meaning"><p>You said you often notice an error after speaking. Today&apos;s goal is to make a few useful patterns easier to reach while you are talking.</p></LessonHeader><StartHere time="about 10 minutes"><p>Start with <b>Would you like some more?</b> and <b>Could you check whether you are available?</b></p><p>Say each one with three different endings, then try the quiz before reviewing the rules.</p></StartHere></div>
      <LessonMap steps={steps} />
      <LessonSection id="speaking" number={1} kind="Fix it" title="Your speaking checks" lead="These examples are lightly reconstructed from today's conversation. Say your correction first, then open the answer."><FixList items={fixes} layout="grid" /></LessonSection>

      <LessonSection id="small-amounts" number={2} kind="Compare · quiz" title="A bit, a little, some more" lead="Several of your examples were already correct. Keep them, and notice what follows each phrase.">
        <div className="split">
          <dl className="wordList">
            <div><dt>Before an adjective</dt><dd>a bit cold · a little cold · a little bit cold<span>All three mean slightly cold. A bit is conversational. No of here.</span></dd></div>
            <div><dt>Before a noun</dt><dd>a little time · a bit of time · a little bit of time<span>Use of after a bit / a little bit before a noun. A little time does not need of.</span></dd></div>
            <div><dt>With a comparison</dt><dd>a bit better · a little better · a little bit better<span>Do you feel a little better? All three patterns work.</span></dd></div>
          </dl>
          <div><h3>Offer food naturally</h3><div className="modelText"><p>Would you like some more soup?</p><p>Would you like a little more?</p><p>Would you like another piece of chicken?</p></div><p><b>Some more</b> leaves the amount open. <b>A little more</b> suggests a small amount. Both are natural offers.</p><p className="hint">A clarification from our discussion: “Would you like a little bit more?” is also correct. “Could you try a little more?” can work when you are encouraging someone to taste or try something; it is a request rather than a neutral offer.</p></div>
        </div>
        <ChoiceQuiz id="maggie-06-amounts" items={quantityQuiz} layout="grid" />
      </LessonSection>

      <LessonSection id="questions" number={3} kind="Builder · quiz" title="If or whether?" lead="First decide whether you are giving a condition or asking an indirect question.">
        <div className="split"><div><h3>A condition: if</h3><div className="modelText"><p>We&apos;ll have the meeting <mark>if everyone is available</mark>.</p></div><p>The meeting depends on that condition.</p></div><div><h3>An indirect question: if or whether</h3><div className="modelText"><p>Could you check <mark>if you are available</mark>?</p><p>Could you check <mark>whether you are available</mark>?</p></div><p>Both ask the same yes/no question. The distinction is not the number of possible answers.</p></div></div>
        <ol className="chunkRow"><li><b>Could you check</b><span>the request</span></li><li><b>whether you are available</b><span>subject + verb</span></li><li><b>at 9 a.m. on Monday?</b><span>time + day</span></li></ol>
        <p className="calloutNote"><span className="noteLabel">Keep the subject</span>Whether <b>you</b> are available · whether <b>it</b> is ready · whether <b>there</b> are any mistakes. Whether does not replace the subject. You can add <b>or not</b>, but you do not always need it.</p>
        <ChoiceQuiz id="maggie-06-questions" items={questionQuiz} layout="grid" />
      </LessonSection>

      <LessonSection id="future-forms" number={4} kind="Compare · quiz" title="Will, would, going to" lead="Choose the meaning you need. Would can be polite, but politeness is only one of its uses.">
        <dl className="wordList"><div><dt>I will…</dt><dd>a decision now, a promise, willingness or a prediction<span>“Can you help?” “Yes, I&apos;ll check it now.”</span></dd></div><div><dt>I am going to…</dt><dd>an existing intention; also a prediction based on present evidence<span>I&apos;ve planned my evening. I&apos;m going to review the lesson notes.</span></dd></div><div><dt>I would…</dt><dd>an imagined result, a polite expression, or a future viewed from the past<span>I would help if I had time. / Would you like some soup? / I thought I would have time.</span></dd></div></dl>
        <p className="hint">These are useful starting patterns, not rules that make will and going to interchangeable in every sentence. For a regular habit, use the present simple: “When I have time, I review my notes.”</p>
        <h3>One flat tyre, three viewpoints</h3>
        <ol className="timeline">
          <li><span className="timeMark">Monday morning · deciding</span><p>Sam finds that his bike has a flat tyre. “Can you fix it, Dad?” His dad decides to help: “Yes, <b>I&apos;ll fix it tonight.</b>”</p></li>
          <li><span className="timeMark">Monday afternoon · already planned</span><p>Sam&apos;s mum asks about the bike. Dad says, “<b>I&apos;m going to fix it tonight.</b> I&apos;ve already promised Sam.”</p></li>
          <li><span className="timeMark">Tuesday · looking back</span><p>Sam tells a friend, “Dad said <b>he would fix it</b> on Monday evening, and he did. I can ride it again.”</p></li>
        </ol>
        <p className="calloutNote"><span className="noteLabel">What changed?</span>The repair is the same. <b>I&apos;ll</b> shows the decision as Dad makes it. <b>I&apos;m going to</b> presents it as an existing plan. <b>He would</b> reports that future promise from a past viewpoint. Would alone does not tell us whether he actually repaired it; “and he did” supplies that information.</p>
        <ChoiceQuiz id="maggie-06-future" items={futureQuiz} layout="grid" />
        <details className="chapterReview"><summary>Three ways to talk about mistakes</summary><div className="reviewContent"><p><b>I make mistakes.</b> A general fact or habit.</p><p><b>I am making mistakes.</b> What is happening now or in the current period.</p><p><b>I have been making mistakes.</b> A repeated or continuing pattern leading up to now.</p><p>After whether, the same forms work: “I don&apos;t know whether I&apos;m making mistakes.”</p></div></details>
      </LessonSection>

      <LessonSection id="useful-pairs" number={5} kind="Review" title="Useful pairs to keep">
        <div className="wordGroups">
          <details><summary>between · among</summary><dl><div><dt>between</dt><dd>distinct things, choices or relationships<span>What is the difference between a bit and a little?</span></dd></div><div><dt>among</dt><dd>within a group or surrounded by its members<span>We shared the ideas among our colleagues.</span></dd></div></dl><p className="groupTip">It is not simply two versus three or more. Between can connect more than two distinct participants: negotiations between three companies.</p></details>
          <details><summary>brief · briefing · briefly</summary><dl><div><dt>brief</dt><dd>verb: give essential information; adjective: short<span>Could you brief me on the changes? / a brief call</span></dd></div><div><dt>briefing</dt><dd>noun: an information session<span>We had a briefing before the workshop.</span></dd></div><div><dt>briefly</dt><dd>adverb: in a short way or for a short time<span>Please explain it briefly.</span></dd></div></dl></details>
          <details><summary>recurring · ongoing</summary><dl><div><dt>recurring</dt><dd>happening repeatedly<span>This issue recurs every Friday.</span></dd></div><div><dt>ongoing</dt><dd>continuing<span>The investigation is ongoing.</span></dd></div></dl><p className="groupTip">A problem can recur daily too. The size of the break does not determine whether recurring is possible.</p></details>
          <details><summary>in · on · at · next</summary><dl><div><dt>at</dt><dd>clock time<span>at 9 a.m.</span></dd></div><div><dt>on</dt><dd>day or date<span>on Friday</span></dd></div><div><dt>in</dt><dd>month or part of the day<span>in October · in the afternoon</span></dd></div><div><dt>next / this</dt><dd>no preposition in these time expressions<span>See you next lesson. / See you this Friday.</span></dd></div></dl><p className="groupTip">“See you Friday” is also natural informal English. “Next Friday” can be understood differently, so use a date when scheduling needs precision.</p></details>
        </div>
      </LessonSection>

      <LessonSection id="practice" number={6} kind="Speaking · review" title="From knowing to saying" lead="Try once for the message, then again for one pattern. You do not need to monitor every rule at once.">
        <ol className="speakTasks"><SpeakTask number={1} model="Would you like some more soup? Would you like a little more rice? Would you like another piece of chicken?">Make three food offers. Use <b>some more</b>, <b>a little more</b> and <b>another piece</b>.</SpeakTask><SpeakTask number={2} model="Could you check whether you are available at 9 a.m. on Monday? We can move the meeting if that doesn't work for you.">Ask a colleague about availability, then add a condition using <b>if</b>.</SpeakTask><SpeakTask number={3} model="I usually ask my manager for help. My child doesn't always listen to what I say. I need to focus on the goal.">Use the examples you made with <b>ask for</b>, <b>listen to</b> and <b>focus on</b>. Keep each preposition attached to its verb.</SpeakTask><SpeakTask number={4} model="I'll check it now. I'm going to review the notes tonight. I thought I would have time yesterday, but I didn't.">Say one decision now, one existing plan and one past thought about the future.</SpeakTask></ol>
        <p className="calloutNote"><span className="noteLabel">Your own review routine</span>Try the quiz before looking up the rule. Review the examples again in three or four days. Say a fresh example rather than only rereading the old one.</p>
        <p><ListenButton text="Would you like some more? Could you check whether you are available at nine? I'm going to review my notes tonight." /> Listen to the three sentence patterns, then repeat them with your own details.</p>
      </LessonSection>
      <footer className="lessonClose"><p>Reference checks: <a href="https://dictionary.cambridge.org/grammar/british-grammar/few-a-few-little-a-little" target="_blank" rel="noreferrer">Cambridge: a little</a> · <a href="https://dictionary.cambridge.org/us/grammar/british-grammar/if-or-whether" target="_blank" rel="noreferrer">if / whether</a> · <a href="https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/future-forms-will-be-going-present-continuous" target="_blank" rel="noreferrer">British Council: future forms</a></p><CompleteLessonButton studentId="maggie" lessonId="06" /></footer>
    </article></StudentShell>
  );
}
