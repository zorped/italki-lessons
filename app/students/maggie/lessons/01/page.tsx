import type { Metadata } from "next";
import { ContextReading, type ReadingPage } from "../../../../components/ContextReading";
import { CompleteLessonButton } from "../../../../components/LessonProgress";
import { StudentShell } from "../../../../components/StudentShell";
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
];

const usefulLanguage = [
  {
    phrase: "obsessive",
    meaning: "giving an unusually intense amount of attention to one thing",
    example: "The article uses obsessive effort to mean extreme, concentrated dedication.",
  },
  {
    phrase: "core",
    meaning: "the central or most important part of something",
    example: "Clear communication is at the core of effective logistics.",
  },
  {
    phrase: "yield results",
    meaning: "produce or bring results",
    example: "Consistent practice usually yields better results than occasional study.",
  },
  {
    phrase: "realm",
    meaning: "an area of knowledge, activity or experience",
    example: "This problem belongs in the realm of supply-chain planning.",
  },
  {
    phrase: "disperse",
    meaning: "spread or scatter in different directions",
    example: "Do not disperse your attention across too many goals.",
  },
  {
    phrase: "in the zone",
    meaning: "deeply focused and fully absorbed in an activity",
    example: "Once I am in the zone, I stop noticing the time.",
  },
  {
    phrase: "spread yourself too thin",
    meaning: "try to give time and energy to too many things",
    example: "I spread myself too thin across work, travel and several hobbies.",
  },
  {
    phrase: "ceiling",
    meaning: "a figurative upper limit, not only the top of a room",
    example: "The experience showed me that my ceiling was higher than I thought.",
  },
  {
    phrase: "dive deep into something",
    meaning: "study, examine or focus on it thoroughly",
    example: "I want to dive deep into English and technical skills.",
  },
  {
    phrase: "massive amounts of",
    meaning: "very large quantities of something",
    example: "The project consumed massive amounts of time and energy.",
  },
  {
    phrase: "trade-off",
    meaning: "a choice in which gaining one thing means giving up another",
    example: "The trade-off is having less free time while I improve my English.",
  },
  {
    phrase: "prerequisite",
    meaning: "something required before something else can happen",
    example: "Clear communication is a prerequisite for effective teamwork.",
  },
  {
    phrase: "throw something out of balance",
    meaning: "disturb its normal or healthy balance",
    example: "Too much overtime can throw the rest of life out of balance.",
  },
  {
    phrase: "long for something",
    meaning: "want something deeply, especially for a long time",
    example: "Many people long for meaningful change.",
  },
  {
    phrase: "crave something",
    meaning: "feel a powerful desire for something",
    example: "They crave a breakthrough but do not want to take risks.",
  },
  {
    phrase: "breakthrough",
    meaning: "an important advance that helps you overcome a difficulty",
    example: "Understanding faster speech would be a major breakthrough.",
  },
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
      },
    ],
  },
  {
    number: 8,
    paragraphs: [
      {
        text: 'There is another psychological reason why obsessive effort can transform your life. When you invest far more effort than most people into one pursuit, you develop a deep sense of identity with it. You are no longer merely "doing this thing"; you become part of it. This identity changes how you face setbacks.',
      },
      { text: "You will not give up easily, because you are not just completing a task — you are shaping yourself. Every hardship you overcome becomes part of who you are." },
      { text: "Those who transform their lives are rarely the most gifted. They are the ones who devote themselves to one thing far more deeply than those around them." },
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
      { text: "True life transformation never comes from waiting for fate to hand you a chance. It comes from pushing past the ordinary in one area, until a new version of yourself is created." },
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
          Review the most useful language from pages 1–6 of <em>Obsessive Effort Can Actually Change Your Life</em>.
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

        <section className="chapterCard" id="useful-language">
          <p className="sectionKicker">1.2</p>
          <h2>Useful language from the reading</h2>
          <div className="examplePhraseList">
            {usefulLanguage.map((item) => (
              <article key={item.phrase}>
                <div>
                  <h3>{item.phrase}</h3>
                  <p>{item.meaning}</p>
                  <p className="example">{item.example}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="phraseBank connectionBank">
            <p><strong>Word family</strong><span>obsessive · obsession · obsessively</span></p>
            <p><strong>Put energy into</strong><span>pour into · devote to · concentrate on</span></p>
            <p><strong>Produce</strong><span>yield · produce · bring</span></p>
            <p><strong>Spreading</strong><span>spread · disperse · scatter</span></p>
            <p><strong>Commitment</strong><span>dedication · devotion · commitment</span></p>
            <p><strong>Strong desire</strong><span>crave something · long for something</span></p>
            <p><strong>Completely</strong><span>entirely · completely · wholly</span></p>
          </div>
          <aside className="chapterNote">
            <strong>Pattern check:</strong> say <em>crave change</em>, but <em>long for change</em>. Use <em>for</em> after <strong>long</strong>, not after <strong>crave</strong>.
          </aside>
        </section>

        <section className="chapterCard" id="natural-english">
          <p className="sectionKicker">1.3</p>
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
          <p className="sectionKicker">1.4</p>
          <h2>Read with help in context</h2>
          <p className="rule">Read normally. Hover over a highlight—or tap it on a phone—to open pronunciation help, meaning or a useful language note.</p>
          <ContextReading title="Obsessive Effort Can Actually Change Your Life" pages={readingPages} />
        </section>

        <section className="chapterCard" id="practice">
          <p className="sectionKicker">1.5</p>
          <h2>Speak without reading</h2>
          <ol className="amandaPractice">
            <li><span>01</span><p>Explain why this article inspired you. Use <strong>in the zone</strong> and <strong>devote</strong>.</p></li>
            <li><span>02</span><p>Describe a time when you <strong>spread yourself too thin</strong>.</p></li>
            <li><span>03</span><p>Name one <strong>trade-off</strong> you may need to make to reach a goal.</p></li>
            <li><span>04</span><p>Describe a genuine <strong>breakthrough</strong> in your work or learning.</p></li>
            <li><span>05</span><p>Summarise pages 1–6 in one minute using four expressions from this page.</p></li>
            <li><span>06</span><p>Compare <strong>crave change</strong> with <strong>long for change</strong>, then make one sentence with each pattern.</p></li>
          </ol>
        </section>

        <section className="chapterEnd">
          <p>Next time: continue the article after page 6.</p>
          <CompleteLessonButton studentId="maggie" lessonId="01" />
        </section>
      </div>
    </StudentShell>
  );
}
