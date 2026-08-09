import type { Metadata } from "next";
import { CompleteLessonButton } from "../../../../components/LessonProgress";
import { SpeakHindiButton } from "../../../../components/SpeakHindiButton";
import { StudentShell } from "../../../../components/StudentShell";
import { amanda } from "../../../student-data";

export const metadata: Metadata = {
  title: { absolute: "Chapter 8 practice · Amanda's Hindi" },
  description: "Guided practice for the exercises on pages 135 and 136.",
};

const continuousExamples = [
  { before: "मैं चाय बनाती हूँ।", after: "मैं चाय बना रही हूँ।", meaning: "I am making tea." },
  { before: "वे किताब पढ़ते हैं।", after: "वे किताब पढ़ रहे हैं।", meaning: "They are reading a book." },
  { before: "पानी नहीं आता है।", after: "पानी नहीं आ रहा है।", meaning: "The water is not coming." },
];

export default function AmandaChapterEight() {
  return (
    <StudentShell student={amanda} active="08">
      <section className="chapterHero">
        <p className="eyebrow">Hindi · Chapter 08 · Pages 135–136</p>
        <h1><span lang="hi">क्या हो रहा है?</span> · Practice</h1>
        <p className="overviewLead">Work through all four exercises in the book, using these short reminders before you begin.</p>
      </section>

      <div className="chapterStack amandaChapter">
        <aside className="bookPracticeBanner">
          <div><p className="eyebrow">Selected book work</p><h2>Pages 135 and 136</h2></div>
          <ol>
            <li>Build phrases with postpositions.</li>
            <li>Translate comparisons into Hindi.</li>
            <li>Rewrite sentences in the continuous tense.</li>
            <li>Answer the speaking questions aloud.</li>
          </ol>
        </aside>

        <section className="chapterCard" id="postpositions">
          <p className="sectionKicker">8.1 · Page 135, exercise 1</p>
          <h2>Before a postposition</h2>
          <p className="rule">A noun or pronoun often changes to its oblique form before words such as <span lang="hi">के लिए</span>, <span lang="hi">के बाद</span> and <span lang="hi">के पीछे</span>.</p>
          <div className="compactGrid">
            <article><h3 lang="hi">मेरा दोस्त → मेरे दोस्त के लिए</h3><p>for my friend</p><SpeakHindiButton text="मेरे दोस्त के लिए" /></article>
            <article><h3 lang="hi">यह होटल → इस होटल के पीछे</h3><p>behind this hotel</p><SpeakHindiButton text="इस होटल के पीछे" /></article>
            <article><h3 lang="hi">तुम्हारा घर → तुम्हारे घर के नज़दीक</h3><p>near your house</p><SpeakHindiButton text="तुम्हारे घर के नज़दीक" /></article>
            <article><h3 lang="hi">वे लोग → उन लोगों के बाद</h3><p>after those people</p><SpeakHindiButton text="उन लोगों के बाद" /></article>
          </div>
          <p className="chapterNote">In the book exercise, make the first item oblique before joining it to a phrase from the second column.</p>
        </section>

        <section className="chapterCard" id="comparisons">
          <p className="sectionKicker">8.2 · Page 135, exercise 2</p>
          <h2>Comparisons with <span lang="hi">से</span></h2>
          <p className="rule"><strong>X + Y से + adjective</strong> compares X with Y. Use <strong lang="hi">सबसे</strong> for “the most.”</p>
          <div className="examplePhraseList">
            <article><div><p className="devanagari" lang="hi">मेरी बहन मुझसे छोटी है।</p><span>merī bahan mujhse choṭī hai.</span><p>My sister is younger than me.</p></div><SpeakHindiButton text="मेरी बहन मुझसे छोटी है।" /></article>
            <article><div><p className="devanagari" lang="hi">यह घर उस घर से बड़ा है।</p><span>yah ghar us ghar se baṛā hai.</span><p>This house is bigger than that house.</p></div><SpeakHindiButton text="यह घर उस घर से बड़ा है।" /></article>
            <article><div><p className="devanagari" lang="hi">रीना सबसे होशियार है।</p><span>Rīnā sabse hośiyār hai.</span><p>Reena is the cleverest.</p></div><SpeakHindiButton text="रीना सबसे होशियार है।" /></article>
          </div>
        </section>

        <section className="chapterCard" id="continuous">
          <p className="sectionKicker">8.3 · Pages 135–136, exercise 3</p>
          <h2>What is happening now?</h2>
          <p className="rule">Use the verb stem + <span lang="hi">रहा / रही / रहे</span> + <span lang="hi">है / हैं</span>. Match <span lang="hi">रहा, रही</span> or <span lang="hi">रहे</span> to the subject.</p>
          <div className="continuousList">
            {continuousExamples.map((example) => (
              <article key={example.before}>
                <div><span>Routine</span><p lang="hi">{example.before}</p></div>
                <strong aria-hidden="true">→</strong>
                <div><span>Happening now</span><p lang="hi">{example.after}</p><small>{example.meaning}</small></div>
                <SpeakHindiButton text={example.after} />
              </article>
            ))}
          </div>
        </section>

        <section className="chapterCard" id="speaking">
          <p className="sectionKicker">8.4 · Page 136, exercise 4</p>
          <h2>Answer in complete sentences</h2>
          <p className="rule">Answer every question aloud. Add one reason or example so each answer lasts two or three sentences.</p>
          <ol className="amandaPractice">
            <li><span>01</span><p lang="hi">अपने खाली समय में आप क्या करती हैं?</p></li>
            <li><span>02</span><p lang="hi">आप हिंदी क्यों सीख रही हैं?</p></li>
            <li><span>03</span><p lang="hi">आज आप क्या कर रही हैं?</p></li>
            <li><span>04</span><p lang="hi">आप छुट्टियों में कहाँ जाना पसंद करती हैं?</p></li>
            <li><span>05</span><p lang="hi">क्या आपके दोस्त भी हिंदी बोलते हैं?</p></li>
            <li><span>06</span><p lang="hi">अभी आप क्या सोच रही हैं?</p></li>
          </ol>
        </section>

        <section className="chapterEnd">
          <p>Complete all four numbered exercises across pages 135 and 136.</p>
          <CompleteLessonButton studentId="amanda" lessonId="08" label="chapter" />
        </section>
      </div>
    </StudentShell>
  );
}
