import type { Metadata } from "next";
import { CompleteLessonButton } from "../../../../components/LessonProgress";
import { SpeakHindiButton } from "../../../../components/SpeakHindiButton";
import { StudentShell } from "../../../../components/StudentShell";
import { amanda } from "../../../student-data";

export const metadata: Metadata = {
  title: { absolute: "Hotel role-play · Amanda's Hindi" },
  description: "Guided support for Chapter 9, page 152, exercise 2.",
};

const hotelPhrases = [
  { hindi: "हमें दो लोगों के लिए एक कमरा चाहिए।", roman: "hamen do logon ke lie ek kamrā cāhie.", meaning: "We need one room for two people." },
  { hindi: "हम दो दिन रहेंगे।", roman: "ham do din rahenge.", meaning: "We will stay for two days." },
  { hindi: "आज शाम कुछ दोस्त हमसे मिलने आएँगे।", roman: "āj śām kuch dost hamse milne āenge.", meaning: "Some friends will come to meet us this evening." },
  { hindi: "नाश्ते में क्या मिलेगा?", roman: "nāśte men kyā milegā?", meaning: "What will be available for breakfast?" },
  { hindi: "क्या रात का खाना भी मिलेगा?", roman: "kyā rāt kā khānā bhī milegā?", meaning: "Will dinner be available too?" },
  { hindi: "वहाँ तक पैदल जाने में कितना समय लगेगा?", roman: "vahān tak paidal jāne men kitnā samay lagegā?", meaning: "How long will it take to walk there?" },
  { hindi: "क्या मैं कमरे से लंदन फ़ोन कर सकती हूँ?", roman: "kyā main kamre se London fon kar saktī hūn?", meaning: "Can I phone London from the room?" },
  { hindi: "क्या मेरे दोस्त आज रात मेरे साथ यहाँ खाना खा सकते हैं?", roman: "kyā mere dost āj rāt mere sāth yahān khānā khā sakte hain?", meaning: "Can my friends eat here with me tonight?" },
];

export default function AmandaChapterNine() {
  return (
    <StudentShell student={amanda} active="09">
      <section className="chapterHero">
        <p className="eyebrow">Hindi · Chapter 09 · Page 152, exercise 2</p>
        <h1>Hotel role-play</h1>
        <p className="overviewLead">First attempt the conversation directly from the book. Then use the language support below to make your second attempt smoother.</p>
      </section>

      <div className="chapterStack amandaChapter">
        <section className="chapterCard" id="scenario">
          <p className="sectionKicker">9.1</p>
          <h2>Your conversation goals</h2>
          <p className="rule">You have just arrived at a hotel. Speak to the receptionist without writing a full script first.</p>
          <div className="roleplayGoals">
            <span>Request the right room</span><span>Explain how long you will stay</span><span>Mention visitors</span><span>Ask about meals</span><span>Ask walking time</span><span>Ask about a phone call</span><span>Mention onward travel</span><span>Ask about dining with guests</span>
          </div>
        </section>

        <details className="chapterReview" id="language-support">
          <summary><span>Open language support</span><small>After your first attempt</small></summary>
          <div className="reviewContent examplePhraseList">
            {hotelPhrases.map((phrase) => (
              <article key={phrase.hindi}>
                <div><p className="devanagari" lang="hi">{phrase.hindi}</p><span>{phrase.roman}</span><p>{phrase.meaning}</p></div>
                <SpeakHindiButton text={phrase.hindi} />
              </article>
            ))}
          </div>
        </details>

        <section className="chapterCard" id="role-play">
          <p className="sectionKicker">9.3</p>
          <h2>Do it in three rounds</h2>
          <ol className="roleplayRounds">
            <li><strong>Round 1 · Book only</strong><p>Work through all eight instructions on page 152 without opening the support above.</p></li>
            <li><strong>Round 2 · Supported</strong><p>Use the phrase bank, but change at least three details so the conversation becomes your own.</p></li>
            <li><strong>Round 3 · Natural</strong><p>Close the support and act out the full exchange at normal speaking speed.</p></li>
          </ol>
        </section>

        <section className="chapterEnd">
          <p>Complete page 152, exercise 2, then repeat it once without notes.</p>
          <CompleteLessonButton studentId="amanda" lessonId="09" label="chapter" />
        </section>
      </div>
    </StudentShell>
  );
}
