import type { Metadata } from "next";
import { ContextReading, type ReadingPage } from "../../../../components/ContextReading";
import { CompleteLessonButton } from "../../../../components/LessonProgress";
import { StudentShell } from "../../../../components/StudentShell";
import { VocabularyPractice } from "../../../../components/VocabularyPractice";
import { maggie } from "../../../student-data";

export const metadata: Metadata = {
  title: { absolute: "Effort, focus and trade-offs · Maggie's English" },
  description: "Pronunciation, vocabulary and natural English from Maggie's article discussion.",
};

const pronunciation = [
  { word: "luckier", sound: "LUCK-ee-er", note: "Keep the comparative ending: lucky → luckier." },
  { word: "obsessive", sound: "ub-SESS-iv", note: "Put the main stress on SESS." },
  { word: "within", sound: "with-IN", note: "Stress the second part." },
  { word: "period", sound: "PEER-ee-uhd", note: "Keep all three syllables clear." },
  { word: "thinly", sound: "THIN-lee", note: "Begin with th, then keep the n." },
  { word: "areas", sound: "AIR-ee-uhz", note: "Finish with a /z/ sound." },
  { word: "enough", sound: "ih-NUFF", note: "The final letters gh sound like /f/." },
  { word: "ceiling", sound: "SEE-ling", note: "The first syllable sounds like see." },
  { word: "consumes", sound: "kuhn-SOOMZ", note: "Keep the final /z/ sound." },
  { word: "throws", sound: "THROHZ", note: "Keep the final /z/ sound." },
  { word: "prerequisite", sound: "pree-REK-wuh-zit", note: "Stress REK." },
  { word: "accept", sound: "uk-SEPT", note: "Stress the second syllable." },
  { word: "genuine", sound: "JEN-yoo-in", note: "Three clear syllables." },
  { word: "entirely", sound: "en-TY-er-lee", note: "Stress TY." },
  { word: "merely", sound: "MEER-lee", note: "Keep the first syllable like mere." },
  { word: "rare", sound: "RAIR", note: "Use one clear syllable." },
  { word: "rarely", sound: "RAIR-lee", note: "Build it from rare + -ly." },
  { word: "area", sound: "AIR-ee-uh", note: "Use three clear syllables; areas ends with /z/." },
];

const readingPages: ReadingPage[] = [
  {
    number: 1,
    paragraphs: [
      {
        text: "Some people aren't smarter than you, or luckier. They just put an unreasonable amount of effort into one thing.",
        notes: [
          {
            text: "luckier",
            kind: "pronunciation",
            title: "luckier",
            pronunciation: "LUCK-ee-er",
            explanation: "The comparative form of lucky. Keep the -ier ending.",
            example: "Some people are not luckier; they simply focus their effort.",
          },
        ],
      },
    ],
  },
  {
    number: 2,
    paragraphs: [
      {
        text: 'The term "obsessive effort" sounds extreme, yet its core is simple: pour far more focus, time and energy into one single thing than the average person, until that thing is fundamentally transformed by you.',
        notes: [
          {
            text: "obsessive",
            kind: "pronunciation",
            title: "obsessive",
            pronunciation: "ub-SESS-iv",
            explanation: "Giving an unusually intense amount of attention to one thing.",
            example: "The related noun is obsession; the adverb is obsessively.",
          },
          {
            text: "extreme",
            kind: "meaning",
            title: "extreme",
            explanation: "Very great, intense or far beyond what is usual.",
            example: "Extraordinary can express a similar idea in this context.",
          },
          {
            text: "core",
            kind: "meaning",
            title: "core",
            explanation: "The central or most important part of something.",
            example: "Clear communication is at the core of effective logistics.",
          },
        ],
      },
      {
        text: "It is not about making tiny progress day by day, but going all out within a concentrated period. This kind of effort works because it breaks the normal return curve.",
        notes: [
          {
            text: "within",
            kind: "pronunciation",
            title: "within",
            pronunciation: "with-IN",
            explanation: "Inside a particular amount of time or within a limit.",
          },
          {
            text: "concentrated period",
            kind: "phrase",
            title: "a concentrated period",
            pronunciation: "PEER-ee-uhd",
            explanation: "A limited stretch of time during which your attention is highly focused.",
            example: "When that focus feels effortless and absorbing, you may be in the zone.",
          },
        ],
      },
      {
        text: "Ordinary effort yields ordinary results, while extraordinary effort may bring extraordinary outcomes. You are not competing; you are stepping beyond the realm of competition.",
        notes: [
          {
            text: "yields",
            kind: "meaning",
            title: "yield results",
            explanation: "Produce or bring results.",
            example: "Consistent practice yields better results.",
          },
          {
            text: "realm",
            kind: "meaning",
            title: "realm",
            explanation: "An area of knowledge, activity or experience.",
            example: "This issue belongs in the realm of supply-chain planning.",
          },
        ],
      },
    ],
  },
  {
    number: 3,
    paragraphs: [
      {
        text: "Most people are not lacking in effort; they spread their effort too thinly.",
        notes: [
          {
            text: "spread their effort too thinly",
            kind: "phrase",
            title: "spread yourself too thin",
            pronunciation: "THIN-lee",
            explanation: "Divide your time and attention among too many activities.",
            example: "I spread myself too thin across work, travel and several hobbies.",
          },
        ],
      },
      {
        text: "They disperse their energy across countless matters, devoting only sixty percent of their strength to each one.",
        notes: [
          {
            text: "disperse",
            kind: "meaning",
            title: "disperse",
            explanation: "Spread or scatter in different directions.",
            example: "Spread, disperse and scatter are closely connected here.",
          },
        ],
      },
      { text: "The result is that everything meets the minimum standard, yet nothing reaches perfection." },
      {
        text: "Obsessive effort follows the opposite logic. It allows you to step back temporarily from other areas and concentrate nearly all your resources on one single point. This point generates pressure, and pressure is what reshapes reality.",
        notes: [
          {
            text: "areas",
            kind: "pronunciation",
            title: "areas",
            pronunciation: "AIR-ee-uhz",
            explanation: "Finish the plural with a clear /z/ sound.",
          },
        ],
      },
    ],
  },
  {
    number: 4,
    paragraphs: [
      {
        text: 'Obsessive effort can reshape your life because it changes your position. When you dive deep enough into one thing, you enter a level that most people can never reach. Fewer people occupy that level, where there are more opportunities and different standards. You are no longer "another person doing this"; you become "the standout among those who do this". This shift in position does not come from luck, but from the accumulation of sufficient dedication.',
        notes: [
          {
            text: "dive deep enough into one thing",
            kind: "phrase",
            title: "dive deep into something",
            explanation: "Study, examine or focus on it thoroughly.",
            example: "I want to dive deep into English and technical skills.",
          },
        ],
      },
      {
        text: "It also transforms how you perceive yourself. You once believed you could only go so far. When you truly commit yourself obsessively, you discover you can reach places far beyond your imagination. This update in self-perception matters more than any external achievement.",
      },
    ],
  },
  {
    number: 5,
    paragraphs: [
      {
        text: "For once you learn your ceiling is higher than you thought, you will never return to where you were.",
        notes: [
          {
            text: "ceiling",
            kind: "meaning",
            title: "ceiling",
            pronunciation: "SEE-ling",
            explanation: "A figurative upper limit or the highest point you believe you can reach.",
          },
        ],
      },
      {
        text: "Yet obsessive effort comes with a cost. It consumes massive amounts of time and energy and temporarily throws other areas of life out of balance.",
        notes: [
          {
            text: "consumes",
            kind: "pronunciation",
            title: "consumes",
            pronunciation: "kuhn-SOOMZ",
            explanation: "Keep the final /z/ sound; do not reduce it to consume.",
          },
          {
            text: "massive amounts of time",
            kind: "phrase",
            title: "massive amounts of time",
            explanation: "Very large quantities of time.",
            example: "The project consumed massive amounts of time and energy.",
          },
          {
            text: "throws",
            kind: "pronunciation",
            title: "throws",
            pronunciation: "THROHZ",
            explanation: "Keep the final /z/ sound.",
          },
        ],
      },
      {
        text: "It requires you to accept one truth: you cannot take care of everything at once for a period of time.",
        notes: [
          {
            text: "accept",
            kind: "pronunciation",
            title: "accept",
            pronunciation: "uk-SEPT",
            explanation: "Stress the second syllable.",
          },
        ],
      },
      {
        text: "You have to make choices, set aside other affairs, and focus your resources on one goal. This is not balance, but trade-off. And trade-off itself is the prerequisite for obsessive effort.",
        notes: [
          {
            text: "trade-off",
            kind: "meaning",
            title: "trade-off",
            explanation: "A choice in which gaining one thing means giving up another.",
            example: "The trade-off is having less free time while I improve my English.",
          },
          {
            text: "prerequisite",
            kind: "pronunciation",
            title: "prerequisite",
            pronunciation: "pree-REK-wuh-zit",
            explanation: "Something that must exist or happen before something else can happen.",
          },
        ],
      },
    ],
  },
  {
    number: 6,
    paragraphs: [
      {
        text: "Many people fail to practice obsessive effort not out of laziness, but because they refuse to accept this imbalance. They long for change yet refuse to lose their existing stability. They crave breakthroughs but want to take no risks.",
        notes: [
          {
            text: "long for",
            kind: "phrase",
            title: "long for something",
            explanation: "Want something deeply, especially for a long time.",
            example: "They long for change.",
          },
          {
            text: "crave",
            kind: "meaning",
            title: "crave something",
            explanation: "Feel a powerful desire for something. Do not add for after crave.",
            example: "They crave change, but they long for change.",
          },
          {
            text: "breakthroughs",
            kind: "meaning",
            title: "breakthrough",
            explanation: "An important advance that helps overcome a difficulty.",
            example: "Understanding faster speech would be a major breakthrough.",
          },
        ],
      },
      {
        text: "But genuine breakthroughs are never products of balance. They happen when you place all your weight on one side, until that side collapses, reorganizes and reshapes itself.",
        notes: [
          {
            text: "genuine",
            kind: "pronunciation",
            title: "genuine",
            pronunciation: "JEN-yoo-in",
            explanation: "Real and sincere; not false or artificial.",
          },
        ],
      },
      {
        text: "Obsessive effort differs entirely from blind effort. Blind effort means exhausting all your strength without a clear direction, leaving you worn out with nowhere to go. Obsessive effort means confirming your direction first, then focusing all your energy along that path.",
        notes: [
          {
            text: "entirely",
            kind: "pronunciation",
            title: "entirely",
            pronunciation: "en-TY-er-lee",
            explanation: "Completely or wholly.",
          },
        ],
      },
    ],
  },
  {
    number: 7,
    paragraphs: [
      {
        text: "Direction is the prerequisite, and effort is the amplifier. Effort without direction is merely depletion. Only directed obsessive effort has the power to change your life. Therefore, you do not need to go all-in on everything. You only need to commit fully to that one thing you have confirmed.",
        notes: [
          {
            text: "amplifier",
            kind: "meaning",
            priority: "extension",
            title: "amplifier",
            explanation: "Something that makes an effect stronger. Here, effort makes the effect of a good direction stronger.",
            example: "Clear feedback can act as an amplifier for learning.",
          },
          {
            text: "merely",
            kind: "pronunciation",
            priority: "high",
            title: "merely",
            pronunciation: "MEER-lee",
            explanation: "Only or simply. Barely means only just or almost not; hardly means almost not.",
            example: "It is merely a suggestion. I barely passed. I hardly slept.",
          },
          {
            text: "depletion",
            kind: "meaning",
            priority: "extension",
            title: "depletion",
            explanation: "A serious reduction in the amount of something available.",
            example: "Working without rest can lead to energy depletion.",
          },
        ],
      },
      {
        text: "You confirm your direction not by overthinking, but by trial. Start small, and judge whether this undertaking deserves greater investment based on real feedback. Once you are certain, go all in.",
        notes: [
          {
            text: "You confirm your direction not by overthinking, but by trial. Start small, and judge whether this undertaking deserves greater investment based on real feedback. Once you are certain, go all in.",
            kind: "phrase",
            title: "Test before committing fully",
            explanation: "Try a direction on a small scale, examine real feedback, and invest more only when the evidence supports it.",
          },
        ],
      },
      {
        text: "This sequence — confirm first, then commit fully — is far more stable than rushing into total dedication at once. You are not investing irrationally. You are rationally and deliberately pushing yourself toward a higher level.",
        notes: [
          {
            text: "irrationally",
            kind: "meaning",
            priority: "extension",
            title: "irrationally",
            explanation: "In a way that is not based on clear reason or sensible judgment.",
            example: "Fear can make people react irrationally.",
          },
          {
            text: "deliberately",
            kind: "meaning",
            priority: "high",
            title: "deliberately",
            explanation: "Intentionally and with conscious thought, not by accident.",
            example: "She deliberately slowed down so everyone could follow.",
          },
        ],
      },
    ],
  },
  {
    number: 8,
    paragraphs: [
      {
        text: 'There is another psychological reason why obsessive effort can transform your life. When you invest far more effort than most people into one pursuit, you develop a deep sense of identity with it. You are no longer merely "doing this thing"; you become part of it. This identity changes how you face setbacks.',
        notes: [
          {
            text: "pursuit",
            kind: "meaning",
            priority: "medium",
            title: "pursuit",
            explanation: "An activity or goal that you spend time and energy trying to develop or achieve.",
            example: "Improving her English became a serious pursuit.",
          },
          {
            text: "merely",
            kind: "pronunciation",
            priority: "high",
            title: "merely",
            pronunciation: "MEER-lee",
            explanation: "Only or simply; it reduces the importance of what follows.",
            example: "She is not merely attending meetings; she is leading them.",
          },
          {
            text: "setbacks",
            kind: "meaning",
            priority: "high",
            title: "setback",
            explanation: "A problem or delay that temporarily slows your progress.",
            example: "A few setbacks did not stop her from continuing.",
          },
        ],
      },
      { text: "You will not give up easily, because you are not just completing a task — you are shaping yourself. Every hardship you overcome becomes part of who you are." },
      {
        text: "Those who transform their lives are rarely the most gifted. They are the ones who devote themselves to one thing far more deeply than those around them.",
        notes: [
          {
            text: "rarely",
            kind: "pronunciation",
            priority: "high",
            title: "rarely",
            pronunciation: "RAIR-lee",
            explanation: "Not often. Form it from rare + -ly; rare means uncommon.",
            example: "Such opportunities are rare; they rarely appear twice.",
          },
        ],
      },
    ],
  },
  {
    number: 9,
    paragraphs: [
      { text: "They do not win by defeating others; they win by going further. And that extra distance eventually changes their standing in this field." },
      { text: "Obsessive effort can truly change your life. This does not mean effort guarantees success. It means sufficient effort can shift you to a new space. There, the rules are different, opportunities are different, and what you are capable of becomes different." },
      { text: "You do not need to envy those who have rewritten their lives. You can choose to become one of them. Not everyone needs this level of obsession. You only need to be willing to bet everything on that one thing." },
    ],
  },
  {
    number: 10,
    paragraphs: [
      {
        text: "True life transformation never comes from waiting for fate to hand you a chance. It comes from pushing past the ordinary in one area, until a new version of yourself is created.",
        notes: [
          {
            text: "fate",
            kind: "meaning",
            priority: "medium",
            title: "fate, destiny and luck",
            explanation: "Fate is an outcome believed to be outside your control. Destiny suggests a future you are meant to have. Luck is chance affecting a particular result.",
            example: "She did not leave it to fate; she worked hard and had some good luck along the way.",
          },
          {
            text: "area",
            kind: "pronunciation",
            priority: "high",
            title: "area",
            pronunciation: "AIR-ee-uh",
            explanation: "Use three clear syllables. The plural areas ends with a /z/ sound.",
            example: "Communication is one area she wants to improve.",
          },
        ],
      },
    ],
  },
];

export default function MaggieLessonOne() {
  return (
    <StudentShell student={maggie} active="01">
      <section className="chapterHero">
        <p className="eyebrow">English · Lesson 01 · 7 October 2026</p>
        <h1>Effort, focus and trade-offs</h1>
        <p className="overviewLead">
          Review the most useful language from <em>Obsessive Effort Can Actually Change Your Life</em>.
        </p>
      </section>

      <div className="chapterStack">
        <section className="chapterCard" id="pronunciation">
          <p className="sectionKicker">1.1</p>
          <h2>Pronunciation to revisit</h2>
          <p className="rule">Say each word slowly once, then use it in a complete sentence. Pay special attention to word endings.</p>
          <div className="compactGrid pronunciationGrid">
            {pronunciation.map((item) => (
              <article key={item.word}>
                <h3>{item.word}</h3>
                <strong className="sound">{item.sound}</strong>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
          <aside className="chapterNote">
            <strong>Final-s check:</strong> <em>areas</em>, <em>consumes</em> and <em>throws</em> finish with a clear /z/ sound. Do not let the ending disappear.
          </aside>
        </section>

        <section className="chapterCard" id="natural-english">
          <p className="sectionKicker">1.2</p>
          <h2>Make your ideas sound more natural</h2>
          <p className="rule">Learn the complete sentence patterns, then change the details to fit your own situation.</p>
          <div className="correctionList">
            <article><p className="right">I spread myself too thin across too many activities.</p><p>Use <strong>spread myself too thin</strong> when your attention is divided.</p></article>
            <article><p className="right">I&apos;m still not very good at technical skills or English.</p><p>Use <strong>be good at</strong> followed by a noun or an -ing form.</p></article>
            <article><p className="right">I want to spend less time on other activities.</p><p>Use <strong>spend time on</strong> an activity.</p></article>
            <article><p className="right">I want to devote most of my time to improving my English and developing my technical skills.</p><p>After <strong>devote time to</strong>, use a noun or an -ing form.</p></article>
            <article><p className="right">Everyone has the same twenty-four hours each day.</p><p>Use <strong>the same</strong>, and remember the verb <strong>has</strong> after <em>everyone</em>.</p></article>
          </div>
        </section>

        <section className="chapterCard readingContextCard" id="reading-in-context">
          <p className="sectionKicker">1.3</p>
          <h2>Read with help in context</h2>
          <p className="rule">Read normally. Hover over a highlight—or tap it on a phone—to open a note. Colour shows how useful the language is to learn first.</p>
          <ContextReading title="Obsessive Effort Can Actually Change Your Life" pages={readingPages} />
        </section>

        <section className="chapterCard" id="practice">
          <p className="sectionKicker">1.4</p>
          <h2>Practise the language</h2>
          <p className="rule">Return to the highlighted reading whenever you need a clue, then try again without looking.</p>
          <VocabularyPractice />
        </section>

        <section className="chapterEnd">
          <p>Pages 7–10 reviewed on 8 October 2026.</p>
          <CompleteLessonButton studentId="maggie" lessonId="01" />
        </section>
      </div>
    </StudentShell>
  );
}
