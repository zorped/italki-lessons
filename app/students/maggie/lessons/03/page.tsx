import type { Metadata } from "next";
import { CompleteLessonButton } from "../../../../components/LessonProgress";
import { StudentShell } from "../../../../components/StudentShell";
import { maggie } from "../../../student-data";

export const metadata: Metadata = {
  title: { absolute: "Precise words and natural patterns · Maggie's English" },
  description: "Vocabulary contrasts and grammar patterns from Maggie's third lesson.",
};

const contrasts = [
  {
    title: "merely · barely · hardly · rarely",
    priority: "High priority",
    items: [
      ["merely", "only or simply", "It was merely a suggestion."],
      ["barely", "only just; almost not", "I barely had enough time."],
      ["hardly", "almost not", "I could hardly hear the speaker."],
      ["rarely", "not often", "I rarely work on Sundays."],
    ],
    note: "Barely and hardly describe degree. Rarely describes frequency. Merely makes something seem less important or complicated.",
  },
  {
    title: "fate · destiny · luck · chance",
    priority: "Useful next",
    items: [
      ["fate", "an outcome believed to be unavoidable", "He accepted his fate."],
      ["destiny", "a future or purpose someone is believed to be meant for", "She felt it was her destiny to teach."],
      ["luck", "good or bad fortune affecting a result", "Good luck helped, but she also prepared well."],
      ["chance", "random possibility—or an opportunity", "Success should not be left to chance."],
    ],
    note: "Fate and destiny can suggest that events are meant to happen. Luck and chance do not suggest a fixed future.",
  },
  {
    title: "setback · obstacle · delay · failure",
    priority: "High priority",
    items: [
      ["setback", "a problem that temporarily slows progress", "The setback delayed the project, but it did not end it."],
      ["obstacle", "something that blocks the way", "Cost was the main obstacle."],
      ["delay", "a wait or a later-than-planned event", "The shipment arrived after a short delay."],
      ["failure", "a lack of success", "One failed attempt is not a permanent failure."],
    ],
    note: "A setback is temporary. A failure describes an unsuccessful result; it does not automatically mean all future attempts will fail.",
  },
  {
    title: "area · field · realm",
    priority: "Useful next",
    items: [
      ["area", "a general subject or part of an activity", "Listening is one area I want to improve."],
      ["field", "a recognised subject or profession", "Logistics is her field."],
      ["realm", "a sphere of knowledge or activity; more formal", "That question is outside my realm of expertise."],
    ],
    note: "Area is the most flexible everyday word. Field often refers to work or study. Realm sounds more formal and usually needs extra context.",
  },
  {
    title: "genuine · true · genuinely · truly",
    priority: "Useful next",
    items: [
      ["genuine", "real, authentic or sincere", "Her interest was genuine."],
      ["true", "factually correct", "The story is true."],
      ["genuinely", "sincerely or really", "I was genuinely surprised."],
      ["truly", "really; in fact", "It was a truly remarkable result."],
    ],
    note: "Genuine and true are adjectives. Genuinely and truly are adverbs, so they describe actions, descriptions or whole ideas.",
  },
  {
    title: "long for · crave · want · be eager to",
    priority: "Extension",
    items: [
      ["long for", "want something deeply over time", "I long for a change."],
      ["crave", "feel a powerful desire for something", "I crave some quiet time."],
      ["want", "the neutral everyday choice", "I want to improve my listening."],
      ["be eager to", "strongly want to do something", "I am eager to meet my idol."],
    ],
    note: "Use long for + noun, but long to + verb. Crave normally takes a noun or an -ing form—not an infinitive with to.",
  },
];

const rewrites = [
  ["work too much tasks at the same time", "work on too many tasks at the same time"],
  ["I planned too much work and activities for today.", "I planned too much work and too many activities for today."],
  ["I spent a few time taking care of my child.", "I spent a little time taking care of my child."],
  ["It consumes much time for him to finish the work.", "It takes him a lot of time to finish the work."],
  ["I didn't continue to learning.", "I didn't continue learning."],
  ["I crave to see my idol this year.", "I am eager to see my idol this year."],
  ["I have to trade off many hobbies.", "The trade-off is having less time for my hobbies."],
  ["I always confuse this word with destiny.", "I always mix up fate and destiny."],
];

export default function MaggieLessonThree() {
  return (
    <StudentShell student={maggie} active="03">
      <section className="chapterHero">
        <p className="eyebrow">English · Lesson 03 · 11 October 2026</p>
        <h1>Precise words and natural patterns</h1>
        <p className="overviewLead">Compare similar words, then practise the sentence patterns that will make your explanations clearer and more natural.</p>
      </section>

      <div className="chapterStack">
        <section className="chapterCard" id="word-contrasts">
          <p className="sectionKicker">3.1</p>
          <h2>Words that are close—but not identical</h2>
          <p className="rule">Learn the difference through the example, not through a synonym alone.</p>
          <div className="contrastStack">
            {contrasts.map((group) => (
              <article className="contrastGroup" key={group.title}>
                <header><h3>{group.title}</h3><span>{group.priority}</span></header>
                <div className="contrastWords">
                  {group.items.map(([word, meaning, example]) => (
                    <div key={word}>
                      <strong>{word}</strong>
                      <p>{meaning}</p>
                      <small>{example}</small>
                    </div>
                  ))}
                </div>
                <p className="contrastNote">{group.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="chapterCard" id="grammar-patterns">
          <p className="sectionKicker">3.2</p>
          <h2>Four grammar patterns to keep</h2>
          <div className="compactGrid grammarGrid">
            <article>
              <h3>Countable or uncountable?</h3>
              <p><strong>many / few / fewer</strong> + plural countable noun</p>
              <p className="example">many tasks · a few classes · fewer activities</p>
              <p><strong>much / little / less</strong> + uncountable noun</p>
              <p className="example">much work · a little time · less English</p>
            </article>
            <article>
              <h3>Verb patterns</h3>
              <p><strong>spend time + -ing</strong>: I spent time practising.</p>
              <p><strong>continue + -ing</strong>: I continued learning.</p>
              <p><strong>long for + noun</strong>: I long for a change.</p>
              <p><strong>be eager + to</strong>: I am eager to improve.</p>
            </article>
            <article>
              <h3>Tell a past story in the past</h3>
              <p className="example">Five years ago, I enrolled in several English classes. After a few months, I realised I had made a breakthrough in my English listening.</p>
              <p>Anchor the story with a past time, then keep the main events in the past.</p>
            </article>
            <article>
              <h3>Useful noun partnerships</h3>
              <p><strong>make a breakthrough in</strong> listening</p>
              <p><strong>enrol in</strong> a course</p>
              <p><strong>a bachelor&apos;s degree</strong></p>
              <p><strong>work on holidays</strong></p>
            </article>
          </div>
        </section>

        <section className="chapterCard" id="natural-rewrites">
          <p className="sectionKicker">3.3</p>
          <h2>Turn the idea into natural English</h2>
          <p className="rule">Focus on the reusable pattern. These are polished versions of ideas from our conversation, not a test.</p>
          <div className="correctionList">
            {rewrites.map(([before, after]) => (
              <article key={before}>
                <p className="wrong">{before}</p>
                <p className="right">{after}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="chapterCard" id="practice">
          <p className="sectionKicker">3.4</p>
          <h2>Use the distinctions aloud</h2>
          <div className="practiceSet">
            <article className="practicePrompt"><span>01</span><p>Explain why <strong>merely</strong> cannot replace <strong>rarely</strong> in “I rarely work on Sundays.”</p></article>
            <article className="practicePrompt"><span>02</span><p>Describe a work <strong>setback</strong>. Was it an obstacle, a delay or a complete failure?</p></article>
            <article className="practicePrompt"><span>03</span><p>Make four short sentences using <strong>fate</strong>, <strong>destiny</strong>, <strong>luck</strong> and <strong>chance</strong>.</p></article>
            <article className="practicePrompt"><span>04</span><p>Describe one trade-off of improving English quickly. Use <strong>less</strong> once and <strong>fewer</strong> once.</p></article>
            <article className="practicePrompt"><span>05</span><p>Tell your breakthrough story again using <strong>enrolled</strong>, <strong>realised</strong> and <strong>had made</strong>.</p></article>
            <article className="practicePrompt"><span>06</span><p>Choose naturally: “I <strong>long for / crave / want / am eager to</strong> improve my listening.” Explain your choice.</p></article>
          </div>
        </section>

        <section className="chapterEnd">
          <p>Aim for accurate patterns first; speed will follow with repeated speaking.</p>
          <CompleteLessonButton studentId="maggie" lessonId="03" />
        </section>
      </div>
    </StudentShell>
  );
}
