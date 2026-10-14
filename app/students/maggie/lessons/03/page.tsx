import type { Metadata } from "next";
import { ChoiceQuiz, type ChoiceItem } from "../../../../components/ChoiceQuiz";
import { FixList, LessonHeader, LessonMap, LessonSection, SpeakTask, StartHere, type FixItem, type MapStep } from "../../../../components/LessonBlocks";
import { CompleteLessonButton } from "../../../../components/LessonProgress";
import { StudentShell } from "../../../../components/StudentShell";
import { maggie } from "../../../student-data";

export const metadata: Metadata = {
  title: { absolute: "Precise words and natural patterns · Maggie's English" },
  description: "Quantifiers, verb patterns and similar words from Maggie's third lesson.",
};

const quantityFixes: FixItem[] = [
  { said: "I work too much tasks at the same time.", natural: <>I work on <b>too many tasks</b> at the same time.</>, why: "Tasks can be counted, so: many." },
  { said: "I planned too much work and activities for today.", natural: <>I planned <b>too much work</b> and <b>too many activities</b> for today.</>, why: "Work is uncountable; activities are countable. Each noun needs its own word." },
  { said: "I spent a few time taking care of my child.", natural: <>I spent <b>a little time</b> taking care of my child.</>, why: "Time (meaning hours and minutes) is uncountable: a little time." },
];

const quantityQuiz: ChoiceItem[] = [
  { sentence: "I have too ___ meetings this week.", options: ["much", "many"], answers: ["many"], why: "Meetings is a plural countable noun." },
  { sentence: "Could you give me a ___ time to check the numbers?", options: ["few", "little"], answers: ["little"], why: "Time is uncountable here." },
  { sentence: "This month we had ___ delays than last month.", options: ["less", "fewer"], answers: ["fewer"], why: "Delays can be counted: one delay, two delays." },
  { sentence: "There isn't ___ information in the email.", options: ["much", "many"], answers: ["much"], why: "Information is always uncountable in English. Never say informations." },
  { sentence: "I've had ___ problems with this supplier.", options: ["a lot of", "much"], answers: ["a lot of"], why: "A lot of works with countable and uncountable nouns. It's your safe choice when you're not sure." },
];

const verbFixes: FixItem[] = [
  { said: "I didn't continue to learning.", natural: <>I didn&apos;t <b>continue learning</b>.</>, why: "continue + -ing. (Continue to learn is also correct, but never to + -ing.)" },
  { said: "It consumes much time for him to finish the work.", natural: <>It <b>takes him a lot of time</b> to finish the work.</>, why: "For time, use take. Consume sounds like fuel or energy being used up." },
  { said: "I crave to see my idol this year.", natural: <>I&apos;m <b>eager to see</b> my idol this year.</>, why: "Crave takes a noun: I crave the chance to see my idol. For a verb, use be eager to or long to." },
  { said: "My listening will have a breakthrough.", natural: <>I will <b>make a breakthrough in</b> my listening.</>, why: "A person makes a breakthrough in something." },
  { said: "I usually spend myself too thin.", natural: <>I usually <b>spread myself too thin</b>.</>, why: "A fixed expression: to try to do too many things at once." },
  { said: "I always confuse this word with destiny.", natural: <>I always <b>mix up</b> fate and destiny.</>, why: "Mix up A and B is the everyday way to say you confuse two things." },
];

const degreeQuiz: ChoiceItem[] = [
  { sentence: "I ___ work on Sundays. Maybe twice a year.", options: ["merely", "barely", "rarely"], answers: ["rarely"], why: "Rarely is about how often: not often." },
  { sentence: "It was ___ a suggestion, not an order.", options: ["merely", "hardly", "rarely"], answers: ["merely"], why: "Merely means only. It makes something sound less important." },
  { sentence: "I ___ caught the train. The doors closed right behind me.", options: ["barely", "rarely", "merely"], answers: ["barely"], why: "Barely means only just. It happened, but almost didn't." },
  { sentence: "The speaker was so quiet I could ___ hear her.", options: ["hardly", "merely", "rarely"], answers: ["hardly", "barely"], why: "Hardly means almost not. Barely also works here; the two are very close." },
];

const problemQuiz: ChoiceItem[] = [
  { sentence: "The shipment arrived after a two-day ___.", options: ["delay", "failure", "obstacle"], answers: ["delay"], why: "A delay is about time: something happens later than planned." },
  { sentence: "Cost is the main ___ to opening a second warehouse.", options: ["setback", "obstacle", "delay"], answers: ["obstacle"], why: "An obstacle blocks the way before you start or while you move forward." },
  { sentence: "Losing the supplier was a ___, but we recovered within a month.", options: ["failure", "setback", "delay"], answers: ["setback"], why: "A setback slows progress for a while. You can recover from it." },
  { sentence: "The launch was a complete ___. Nobody bought the product.", options: ["setback", "obstacle", "failure"], answers: ["failure"], why: "Failure describes the final result: it did not succeed." },
];

const moreWords = [
  { group: "fate · destiny · luck · chance", lines: [["fate", "what will happen, and you can't change it", "He accepted his fate."], ["destiny", "what you are meant to do or become", "She felt teaching was her destiny."], ["luck", "good or bad things that happen by chance", "Good luck helped, but she also prepared."], ["chance", "something random, or an opportunity", "I met him by chance."]], tip: "Fate and destiny suggest a fixed future. Luck and chance don't." },
  { group: "area · field · realm", lines: [["area", "the everyday word for a topic", "Listening is one area I want to improve."], ["field", "a subject of work or study", "Logistics is her field."], ["realm", "formal; mostly in writing", "That is outside my realm of expertise."]], tip: "When unsure, use area." },
  { group: "genuine · true · genuinely · truly", lines: [["genuine", "real, sincere (adjective)", "Her interest was genuine."], ["true", "correct, a fact (adjective)", "The story is true."], ["genuinely", "really, sincerely (adverb)", "I was genuinely surprised."], ["truly", "really (adverb)", "It was a truly good result."]], tip: "Adjectives describe nouns; adverbs describe verbs and adjectives." },
  { group: "long for · crave · want · be eager to", lines: [["long for", "+ noun; want something for a long time", "I long for a change."], ["crave", "+ noun; a strong physical or emotional desire", "I crave some quiet time."], ["want", "neutral, always safe", "I want to improve my listening."], ["be eager to", "+ verb; excited to do something", "I'm eager to meet my idol."]], tip: "Long for + noun, long to + verb. Crave never takes to + verb." },
];

const steps: MapStep[] = [
  { id: "quantity", title: "Much or many?", kind: "Rule · quiz" },
  { id: "verb-patterns", title: "Words that go together", kind: "Fix it" },
  { id: "past-story", title: "A story in the past", kind: "Model" },
  { id: "similar-words", title: "Similar words", kind: "Quiz" },
  { id: "practice", title: "Say it out loud", kind: "Speaking" },
];

export default function MaggieLessonThree() {
  return (
    <StudentShell student={maggie} active="03">
      <article className="lessonV2">
        <div className="lessonTop">
          <LessonHeader label="Lesson 03 · 11 October 2026" title="Precise words and natural patterns">
            <p>You talked about your English study, your work and your free time. These are the patterns that came up most, in the order I&apos;d practise them.</p>
          </LessonHeader>
          <StartHere time="about 10 minutes">
            <p><b>Much or many? Little or few?</b> This came up more than anything else in our conversation.</p>
            <p>Do step 1, then say the five quiz sentences aloud.</p>
          </StartHere>
        </div>

        <LessonMap steps={steps} />

        <LessonSection id="quantity" number={1} kind="Rule · fix · quiz" title="Much or many? Little or few?" lead="First ask: can I count it? One task, two tasks: yes. One information, two informations: no.">
          <div className="split">
            <div>
              <div className="ruleTiles">
                <div className="ruleTile tileCount">
                  <p className="tileHead">Can count</p>
                  <p className="tileNouns">tasks · meetings · delays</p>
                  <ul><li><b>many</b> tasks</li><li><b>a few</b> tasks</li><li><b>fewer</b> meetings</li></ul>
                </div>
                <div className="ruleTile tileMass">
                  <p className="tileHead">Can&apos;t count</p>
                  <p className="tileNouns">work · time · information</p>
                  <ul><li><b>much</b> work</li><li><b>a little</b> time</li><li><b>less</b> time</li></ul>
                </div>
                <div className="ruleTile tileBoth"><b>a lot of</b> works with both: a lot of tasks, a lot of work.</div>
              </div>
            </div>
            <div>
              <h3 className="panelTitle">Your sentences</h3>
              <p className="hint">Correct each one out loud, then open it.</p>
              <FixList items={quantityFixes} />
            </div>
          </div>
          <ChoiceQuiz id="maggie-03-quantity" title="Check yourself" items={quantityQuiz} layout="grid" />
        </LessonSection>

        <LessonSection id="verb-patterns" number={2} kind="Fix it" title="Words that go together" lead="Some verbs need -ing after them, some need a noun, and some always take the same partner. Learn them as one piece.">
          <FixList items={verbFixes} layout="grid" />
        </LessonSection>

        <LessonSection id="past-story" number={3} kind="Model" title="Telling a story about the past" lead="When you described how you started learning English, you moved between present and past. Put a time phrase at the start, then keep every verb in the past.">
          <ol className="timeline">
            <li><span className="timeMark">Five years ago</span><p>I <b>enrolled</b> in several English classes.</p></li>
            <li><span className="timeMark">After a few months</span><p>I <b>realised</b> I <b>had made</b> a breakthrough in my English listening.</p></li>
            <li><span className="timeMark">Later</span><p>I <b>didn&apos;t continue</b> learning regularly.</p></li>
          </ol>
          <p className="calloutNote"><b>Had made</b> shows something happened <i>before</i> another past moment: the breakthrough came first, then you realised it.</p>
        </LessonSection>

        <LessonSection id="similar-words" number={4} kind="Quiz" title="Similar words" lead="Choose the word that fits. The explanation appears after you answer.">
          <div className="split">
            <ChoiceQuiz id="maggie-03-degree" title="merely · barely · hardly · rarely" items={degreeQuiz} />
            <ChoiceQuiz id="maggie-03-problems" title="setback · obstacle · delay · failure" items={problemQuiz} />
          </div>
          <h3>More groups from this lesson</h3>
          <p className="hint">For reference. Read the example, not just the meaning.</p>
          <div className="wordGroups">
            {moreWords.map((group) => (
              <details key={group.group}>
                <summary>{group.group}</summary>
                <dl>
                  {group.lines.map(([word, meaning, example]) => (
                    <div key={word}><dt>{word}</dt><dd>{meaning}<span>{example}</span></dd></div>
                  ))}
                </dl>
                <p className="groupTip">{group.tip}</p>
              </details>
            ))}
          </div>
        </LessonSection>

        <LessonSection id="practice" number={5} kind="Speaking" title="Say it out loud" lead="Speak for 30–60 seconds on each. Record yourself if you can, then listen for much/many and past tense.">
          <ol className="speakTasks">
            <SpeakTask number={1} model="Last week I had too many meetings and too much paperwork, so I had only a little time to plan. Next week I want fewer meetings.">Describe a busy week at work. Use <b>many</b>, <b>much</b>, <b>a little</b> and <b>fewer</b>.</SpeakTask>
            <SpeakTask number={2} model="Five years ago, I enrolled in an English class. After a few months, I realised I had made a breakthrough in my listening. Later, I got busy and didn't continue learning regularly.">Tell your English-learning story again. Start with <b>Five years ago</b> and keep it in the past.</SpeakTask>
            <SpeakTask number={3} model="Last year a key supplier closed. It was a setback, not a failure: the main obstacle was finding a new one quickly, and it caused a two-week delay.">Describe a problem at work. Was it a <b>setback</b>, an <b>obstacle</b>, a <b>delay</b> or a <b>failure</b>? Why?</SpeakTask>
            <SpeakTask number={4} model="I tend to spread myself too thin. I'm eager to improve my English, but I have too many other projects.">What are you <b>eager to</b> do this year? Do you ever <b>spread yourself too thin</b>?</SpeakTask>
          </ol>
        </LessonSection>

        <footer className="lessonClose">
          <p>Before our next lesson: open step 1 again and redo the quiz without looking at the rule.</p>
          <CompleteLessonButton studentId="maggie" lessonId="03" />
        </footer>
      </article>
    </StudentShell>
  );
}
