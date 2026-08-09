import type { Metadata } from "next";
import { CompleteLessonButton } from "../../../../components/LessonProgress";
import { SpeakHindiButton } from "../../../../components/SpeakHindiButton";
import { StudentShell } from "../../../../components/StudentShell";
import { amanda } from "../../../student-data";

export const metadata: Metadata = {
  title: { absolute: "भूत-काल · Amanda's Hindi" },
  description: "Guidance for Chapter 7, page 116, exercises 1 and 2.",
};

export default function AmandaChapterSeven() {
  return (
    <StudentShell student={amanda} active="07">
      <section className="chapterHero">
        <p className="eyebrow">Hindi · Chapter 07</p>
        <h1><span lang="hi">भूत-काल</span> · The past</h1>
        <p className="overviewLead">
          Use this guidance while working through page 116: build past routines for exercise 1, then preserve emphasis in exercise 2.
        </p>
      </section>

      <div className="chapterStack amandaChapter">
        <section className="chapterCard" id="past-forms">
          <p className="sectionKicker">7.1</p>
          <h2>Build a past routine</h2>
          <p className="rule"><strong>verb stem + <span lang="hi">ता / ती / ते</span> + <span lang="hi">था / थी / थे / थीं</span></strong> expresses “used to” or a regular past action.</p>
          <div className="compactGrid">
            <article><h3 lang="hi">वह पढ़ता था।</h3><strong className="sound">vah paṛhtā thā.</strong><p>He used to read.</p><SpeakHindiButton text="वह पढ़ता था।" /></article>
            <article><h3 lang="hi">वह पढ़ती थी।</h3><strong className="sound">vah paṛhtī thī.</strong><p>She used to read.</p><SpeakHindiButton text="वह पढ़ती थी।" /></article>
            <article><h3 lang="hi">वे पढ़ते थे।</h3><strong className="sound">ve paṛhte the.</strong><p>They used to read. — masculine or mixed group</p><SpeakHindiButton text="वे पढ़ते थे।" /></article>
            <article><h3 lang="hi">वे पढ़ती थीं।</h3><strong className="sound">ve paṛhtī thī̃.</strong><p>They used to read. — all-feminine group</p><SpeakHindiButton text="वे पढ़ती थीं।" /></article>
          </div>
          <div className="exampleLines">
            <article><p className="devanagari" lang="hi">मैं हर शाम पढ़ती हूँ।</p><span>main har shaam padhti hoon.</span><p>I study every evening.</p></article>
            <span className="exampleArrow" aria-hidden="true">→</span>
            <article><p className="devanagari" lang="hi">मैं हर शाम पढ़ती थी।</p><span>main har shaam padhti thee.</span><p>I used to study every evening.</p><SpeakHindiButton text="मैं हर शाम पढ़ती थी।" label="Hear sentence" /></article>
          </div>
          <p className="chapterNote"><strong>No <span lang="hi">ने</span> here:</strong> habitual past sentences use <span lang="hi">पढ़ता था, करती थी, बोलते थे</span> without <span lang="hi">ने</span>.</p>
        </section>

        <section className="chapterCard" id="translation-toolkit">
          <p className="sectionKicker">7.2</p>
          <h2>Translate exercise 1 step by step</h2>
          <ol className="answerSteps">
            <li><strong>1 · Subject</strong><span>Identify whether the person is masculine, feminine, plural or respectful.</span></li>
            <li><strong>2 · Details</strong><span>Build the possessive phrase and add a place, object or number.</span></li>
            <li><strong>3 · Verb</strong><span>Choose the Hindi verb stem, such as <span lang="hi">पढ़-, बोल-, खेल-</span> or <span lang="hi">रह-</span>.</span></li>
            <li><strong>4 · Ending</strong><span>Finish with the matching habitual pair: <span lang="hi">ता था, ती थी, ते थे</span> or <span lang="hi">ती थीं</span>.</span></li>
          </ol>

          <h3 className="toolkitHeading">Useful building blocks</h3>
          <div className="compactGrid translationToolkit">
            <article><h3>Possession</h3><p lang="hi">मनोज का अख़बार · मेरे भाई की कार · हमारे शिक्षक · उसके बच्चे · हमारे माता-पिता</p><small>The possessive word matches the thing possessed: <span lang="hi">का, की</span> or <span lang="hi">के</span>.</small></article>
            <article><h3>Places and objects</h3><p lang="hi">बड़े दफ़्तर में · बगीचे में · तीन भाषाएँ · मांस</p><small>Put <span lang="hi">में</span> after a place. Use <span lang="hi">कितनी</span> with the feminine plural <span lang="hi">भाषाएँ</span>.</small></article>
            <article><h3>Useful verbs</h3><p lang="hi">पढ़ना · काम करना · गाड़ी चलाना · बोलना · क्रिकेट खेलना · खाना · रहना</p><small>Remove <span lang="hi">ना</span> to find the stem before adding the habitual ending.</small></article>
            <article><h3>Questions and negatives</h3><p lang="hi">कहाँ · क्या · कितनी · नहीं</p><small>Put the question word where the missing information belongs. Put <span lang="hi">नहीं</span> immediately before the verb group.</small></article>
          </div>

          <details className="chapterReview inlineReview">
            <summary><span>See four model sentences</span><small>Different from the book</small></summary>
            <div className="reviewContent examplePhraseList">
              <article><div><p className="devanagari" lang="hi">नेहा अंग्रेज़ी पढ़ाती थी।</p><p>Neha used to teach English.</p></div><SpeakHindiButton text="नेहा अंग्रेज़ी पढ़ाती थी।" /></article>
              <article><div><p className="devanagari" lang="hi">हमारे दोस्त दिल्ली में रहते थे।</p><p>Our friends used to live in Delhi.</p></div><SpeakHindiButton text="हमारे दोस्त दिल्ली में रहते थे।" /></article>
              <article><div><p className="devanagari" lang="hi">उसकी बहन मांस नहीं खाती थी।</p><p>His sister did not use to eat meat.</p></div><SpeakHindiButton text="उसकी बहन मांस नहीं खाती थी।" /></article>
              <article><div><p className="devanagari" lang="hi">आप कहाँ काम करते थे?</p><p>Where did you use to work? — speaking respectfully to a man</p></div><SpeakHindiButton text="आप कहाँ काम करते थे?" /></article>
            </div>
          </details>
        </section>

        <section className="chapterCard" id="emphasis">
          <p className="sectionKicker">7.3</p>
          <h2>Add emphasis naturally</h2>
          <div className="emphasisGrid">
            <article><strong lang="hi">भी</strong><span>bhī · also / too</span><p lang="hi">हमारे शिक्षक हिंदी भी बोलते थे।</p><small>Our teachers used to speak Hindi too.</small><SpeakHindiButton text="हमारे शिक्षक हिंदी भी बोलते थे।" /></article>
            <article><strong lang="hi">ही</strong><span>hī · only / exactly</span><p lang="hi">वह हिंदी ही बोलता था।</p><small>He used to speak only Hindi.</small><SpeakHindiButton text="वह हिंदी ही बोलता था।" /></article>
            <article><strong lang="hi">तो</strong><span>to · contrast or emphasis</span><p lang="hi">दफ़्तर तो बड़ा था, लेकिन बहुत दूर था।</p><small>The office was big, but it was very far away.</small><SpeakHindiButton text="दफ़्तर तो बड़ा था, लेकिन बहुत दूर था।" /></article>
          </div>
          <p className="chapterNote">The position of these small words changes what receives the emphasis, so learn each example as a complete sentence.</p>
        </section>

        <section className="chapterCard" id="practice">
          <p className="sectionKicker">7.4</p>
          <h2>Your selected practice</h2>
          <div className="selectedExercises">
            <article><strong>Page 116 · Exercise 1</strong><p>Translate the ten sentences into Hindi, paying attention to past routines, gender and number.</p></article>
            <article><strong>Page 116 · Exercise 2</strong><p>Translate the ten Hindi sentences while preserving the contrast or exclusivity created by <span lang="hi">तो</span> and <span lang="hi">ही</span>.</p></article>
          </div>
          <h3 className="extraPracticeHeading">Extra speaking practice</h3>
          <ol className="amandaPractice">
            <li><span>01</span><p>Say three things you used to do in childhood. Try <strong lang="hi">मैं … करती थी</strong>.</p></li>
            <li><span>02</span><p>Describe one place where you used to live, study or work.</p></li>
            <li><span>03</span><p>Make three past-routine sentences with a masculine, feminine and plural subject.</p></li>
            <li><span>04</span><p>Turn one positive past routine into a negative sentence with <strong lang="hi">नहीं</strong>.</p></li>
            <li><span>05</span><p>Ask one question each with <strong lang="hi">कहाँ, क्या</strong> and <strong lang="hi">कितनी</strong>.</p></li>
            <li><span>06</span><p>Use the same sentence twice, changing only <strong lang="hi">तो</strong> and <strong lang="hi">ही</strong>. Explain how the focus changes.</p></li>
          </ol>
        </section>

        <section className="chapterEnd">
          <p>Finish the two book exercises and the speaking prompts when you are ready.</p>
          <CompleteLessonButton studentId="amanda" lessonId="07" label="chapter" />
        </section>
      </div>
    </StudentShell>
  );
}
