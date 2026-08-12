import type { Metadata } from "next";
import { CompleteLessonButton } from "../../../../components/LessonProgress";
import { SpeakHindiButton } from "../../../../components/SpeakHindiButton";
import { StudentShell } from "../../../../components/StudentShell";
import { sarah } from "../../../student-data";

export const metadata: Metadata = {
  title: { absolute: "Time, memories and work · Sara's Hindi" },
  description: "Everyday Delhi Hindi and Hinglish from Sara's second lesson.",
};

const pastPhrases = [
  {
    english: "My last visit to India…",
    hindi: "मेरी पिछली इंडिया ट्रिप…",
    roman: "meri pichhli India trip…",
    note: "My last… = मेरी पिछली… before a feminine word such as ट्रिप",
  },
  {
    english: "It was not very good.",
    hindi: "वह बहुत अच्छी नहीं थी।",
    roman: "woh bahut achchhi nahin thi.",
    note: "अच्छी and थी agree with the feminine word ट्रिप",
  },
  {
    english: "When I first came to New York…",
    hindi: "जब मैं पहली बार न्यू यॉर्क आई थी…",
    roman: "jab main pahli baar New York aayi thi…",
    note: "Use आई थी because Sara is speaking about herself",
  },
  {
    english: "After that…",
    hindi: "उसके बाद…",
    roman: "uske baad…",
    note: "A useful story connector",
  },
  {
    english: "Every time…",
    hindi: "हर बार…",
    roman: "har baar…",
    note: "Follow it with what regularly happens",
  },
];

const memoryPhrases = [
  { english: "I forgot.", hindi: "मैं भूल गई।", roman: "main bhool gayi." },
  { english: "I remember.", hindi: "मुझे याद है।", roman: "mujhe yaad hai." },
  { english: "I don't remember.", hindi: "मुझे याद नहीं है।", roman: "mujhe yaad nahin hai." },
  { english: "I find it interesting.", hindi: "मुझे यह इंटरेस्टिंग लगता है।", roman: "mujhe yeh interesting lagta hai." },
];

export default function SaraLessonTwo() {
  return (
    <StudentShell student={sarah} active="02">
      <section className="chapterHero">
        <p className="eyebrow">Hindi · Lesson 02 · 12 August 2026</p>
        <h1>Time, memories and work</h1>
        <p className="overviewLead">
          Practise the kind of Hindi you are likely to hear in everyday Delhi conversations: Hindi structure with familiar English words where they sound natural.
        </p>
      </section>

      <div className="chapterStack amandaChapter">
        <section className="chapterCard" id="past-experiences">
          <p className="sectionKicker">2.1</p>
          <h2>Talk about past experiences</h2>
          <p className="rule">Learn each phrase as a complete speaking chunk. The English words are intentional—they are common in informal urban Hindi.</p>
          <div className="examplePhraseList">
            {pastPhrases.map((phrase) => (
              <article key={phrase.english}>
                <div>
                  <h3>{phrase.english}</h3>
                  <p className="devanagari" lang="hi">{phrase.hindi}</p>
                  <span>{phrase.roman}</span>
                  <p>{phrase.note}</p>
                </div>
                <SpeakHindiButton text={phrase.hindi} />
              </article>
            ))}
          </div>
          <aside className="chapterNote">
            Put the first two ideas together: <strong lang="hi">मेरी पिछली इंडिया ट्रिप बहुत अच्छी नहीं थी।</strong> In natural Delhi speech, <span lang="hi">इंडिया ट्रिप</span> is perfectly ordinary; a more Hindi-heavy alternative is <span lang="hi">मेरी पिछली भारत यात्रा</span>.
          </aside>
        </section>

        <section className="chapterCard" id="time-and-work">
          <p className="sectionKicker">2.2</p>
          <h2>Tell the time and describe work</h2>
          <div className="compactGrid">
            <article>
              <h3>It is 7:30.</h3>
              <p className="devanagari" lang="hi">साढ़े सात बजे हैं।</p>
              <strong className="sound">saadhe saat baje hain.</strong>
              <p className="example"><strong lang="hi">साढ़े सात</strong> is the natural way to say “half past seven.”</p>
              <SpeakHindiButton text="साढ़े सात बजे हैं।" />
            </article>
            <article>
              <h3>I work in a bar.</h3>
              <p className="devanagari" lang="hi">मैं एक बार में काम करती हूँ।</p>
              <strong className="sound">main ek bar mein kaam karti hoon.</strong>
              <p className="example">Use <strong lang="hi">में</strong> for “in” or “at” a workplace.</p>
              <SpeakHindiButton text="मैं एक बार में काम करती हूँ।" />
            </article>
            <article>
              <h3>My work starts at…</h3>
              <p className="devanagari" lang="hi">मेरा काम ___ बजे शुरू होता है।</p>
              <strong className="sound">mera kaam ___ baje shuru hota hai.</strong>
              <p className="example"><strong lang="hi">शुरू होता है</strong> = starts</p>
            </article>
            <article>
              <h3>My work ends at…</h3>
              <p className="devanagari" lang="hi">मेरा काम ___ बजे खत्म होता है।</p>
              <strong className="sound">mera kaam ___ baje khatm hota hai.</strong>
              <p className="example"><strong lang="hi">खत्म होता है</strong> = ends</p>
            </article>
            <article>
              <h3>I like working in a bar.</h3>
              <p className="devanagari" lang="hi">मुझे बार में काम करना पसंद है।</p>
              <strong className="sound">mujhe bar mein kaam karna pasand hai.</strong>
              <SpeakHindiButton text="मुझे बार में काम करना पसंद है।" />
            </article>
            <article>
              <h3>When I did not work in a bar…</h3>
              <p className="devanagari" lang="hi">जब मैं बार में काम नहीं करती थी…</p>
              <strong className="sound">jab main bar mein kaam nahin karti thi…</strong>
              <SpeakHindiButton text="जब मैं बार में काम नहीं करती थी" />
            </article>
          </div>
          <p className="chapterNote"><strong>From X to Y:</strong> <span lang="hi">मैं ___ बजे से ___ बजे तक काम करती हूँ।</span> The pattern is <strong lang="hi">X से Y तक</strong>.</p>
        </section>

        <section className="chapterCard" id="remembering">
          <p className="sectionKicker">2.3</p>
          <h2>Remembering, forgetting and reacting</h2>
          <div className="compactGrid">
            {memoryPhrases.map((phrase) => (
              <article key={phrase.english}>
                <h3>{phrase.english}</h3>
                <p className="devanagari" lang="hi">{phrase.hindi}</p>
                <strong className="sound">{phrase.roman}</strong>
                <SpeakHindiButton text={phrase.hindi} />
              </article>
            ))}
          </div>
          <p className="chapterNote">
            A Hindi-heavy alternative to <strong lang="hi">इंटरेस्टिंग</strong> is <strong lang="hi">दिलचस्प</strong>: <span lang="hi">मुझे यह दिलचस्प लगता है।</span>
          </p>
        </section>

        <section className="chapterCard" id="speaking-practice">
          <p className="sectionKicker">2.4</p>
          <h2>Put the phrases together</h2>
          <ol className="amandaPractice">
            <li><span>01</span><p>Describe your last visit to India. Begin with <strong lang="hi">मेरी पिछली इंडिया ट्रिप…</strong></p></li>
            <li><span>02</span><p>Say where you work and what time your work <strong lang="hi">शुरू होता है</strong> and <strong lang="hi">खत्म होता है</strong>.</p></li>
            <li><span>03</span><p>Tell a short New York story using <strong lang="hi">पहली बार</strong>, <strong lang="hi">उसके बाद</strong> and <strong lang="hi">हर बार</strong>.</p></li>
            <li><span>04</span><p>Say one thing you remember, one thing you forgot and one thing you find interesting.</p></li>
          </ol>
        </section>

        <section className="chapterEnd">
          <p>Use at least five of these phrases in one conversation without translating word by word.</p>
          <CompleteLessonButton studentId="sarah" lessonId="02" />
        </section>
      </div>
    </StudentShell>
  );
}
