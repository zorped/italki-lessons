import type { Metadata } from "next";
import { CompleteLessonButton } from "../../../../components/LessonProgress";
import { StudentShell } from "../../../../components/StudentShell";
import { sarah } from "../../../student-data";

export const metadata: Metadata = {
  title: { absolute: "Keep speaking in Hindi · Sara's Hindi" },
  description: "Twelve useful Hindi phrases for keeping a conversation moving.",
};

export default function SarahLessonOne() {
  return (
    <StudentShell student={sarah} active="01">
      <section className="chapterHero">
        <p className="eyebrow">Hindi · Trial lesson · 5 August 2026</p>
        <h1>Keep speaking in Hindi</h1>
        <p className="overviewLead">
          You already understand a lot. These short phrases will help you stay in Hindi while you think, connect ideas and ask for help.
        </p>
      </section>

      <div className="chapterStack">
        <section className="chapterCard">
          <h2>1. Connect your thoughts</h2>
          <p className="rule">Learn these as complete chunks. Say the Hindi first; do not build each sentence word by word.</p>
          <div className="compactGrid">
            <article>
              <h3>I think…</h3>
              <p className="devanagari" lang="hi">मुझे लगता है कि…</p>
              <strong className="sound">mujhe lagta hai ki…</strong>
              <p className="example" lang="hi">मुझे लगता है कि यह अच्छी फ़िल्म है।</p>
            </article>
            <article>
              <h3>All of us</h3>
              <p className="devanagari" lang="hi">हम सब</p>
              <strong className="sound">hum sab</strong>
              <p className="example" lang="hi">हम सब हिंदी समझते हैं।</p>
            </article>
            <article>
              <h3>When we talk…</h3>
              <p className="devanagari" lang="hi">जब हम बात करते हैं…</p>
              <strong className="sound">jab hum baat karte hain…</strong>
              <p className="example" lang="hi">जब हम बात करते हैं, मुझे सब समझ आता है।</p>
            </article>
            <article>
              <h3>Sometimes…</h3>
              <p className="devanagari" lang="hi">कभी-कभी…</p>
              <strong className="sound">kabhi-kabhi…</strong>
              <p className="example" lang="hi">कभी-कभी मुझे सही शब्द याद नहीं आता।</p>
            </article>
            <article>
              <h3>Whenever I speak…</h3>
              <p className="devanagari" lang="hi">जब भी मैं बोलती हूँ…</p>
              <strong className="sound">jab bhi main bolti hoon…</strong>
              <p className="example" lang="hi">जब भी मैं हिंदी बोलती हूँ, मैं थोड़ा घबरा जाती हूँ।</p>
            </article>
            <article>
              <h3>This is so bad.</h3>
              <p className="devanagari" lang="hi">यह तो बहुत बुरा है।</p>
              <strong className="sound">yeh to bahut bura hai.</strong>
              <p className="example">Use <strong>तो</strong> here to add emphasis.</p>
            </article>
          </div>
        </section>

        <section className="chapterCard">
          <h2>2. Keep the conversation moving</h2>
          <p className="rule">Use one of these instead of switching fully to English.</p>
          <div className="compactGrid">
            <article>
              <h3>I don&apos;t understand.</h3>
              <p className="devanagari" lang="hi">मुझे समझ नहीं आ रहा है।</p>
              <strong className="sound">mujhe samajh nahin aa raha hai.</strong>
            </article>
            <article>
              <h3>How do I say this in Hindi?</h3>
              <p className="devanagari" lang="hi">इसे हिंदी में कैसे कहूँ?</p>
              <strong className="sound">ise Hindi mein kaise kahoon?</strong>
            </article>
            <article>
              <h3>What does this mean?</h3>
              <p className="devanagari" lang="hi">इसका क्या मतलब है?</p>
              <strong className="sound">iska kya matlab hai?</strong>
            </article>
            <article>
              <h3>Please say that again.</h3>
              <p className="devanagari" lang="hi">फिर से कहिए, कृपया।</p>
              <strong className="sound">phir se kahiye, kripya.</strong>
            </article>
            <article>
              <h3>Please speak a little slowly.</h3>
              <p className="devanagari" lang="hi">थोड़ा धीरे बोलिए, कृपया।</p>
              <strong className="sound">thoda dheere boliye, kripya.</strong>
            </article>
            <article>
              <h3>Give me a moment.</h3>
              <p className="devanagari" lang="hi">मुझे एक मिनट दीजिए।</p>
              <strong className="sound">mujhe ek minute dijiye.</strong>
            </article>
          </div>
        </section>

        <section className="chapterEnd">
          <p>Read each phrase aloud twice, then use three of them in one short conversation.</p>
          <CompleteLessonButton studentId="sarah" lessonId="01" />
        </section>

        <details className="chapterReview">
          <summary><span>Practice</span><small>4 speaking rounds</small></summary>
          <div className="reviewContent practiceSet">
            <article className="practicePrompt"><span>01</span><div><p>Explain how Bollywood films helped you understand Hindi.</p><small>Use मुझे लगता है कि… and कभी-कभी…</small></div></article>
            <article className="practicePrompt"><span>02</span><div><p>Talk about a conversation you had during a visit to India.</p><small>Begin with जब हम बात करते हैं…</small></div></article>
            <article className="practicePrompt"><span>03</span><div><p>Speak in Hindi for one minute without stopping.</p><small>If you get stuck, use मुझे एक मिनट दीजिए or इसे हिंदी में कैसे कहूँ?</small></div></article>
            <article className="practicePrompt"><span>04</span><div><p>Finish four sentences aloud.</p><small>मुझे लगता है कि… · कभी-कभी… · हम सब… · जब भी मैं बोलती हूँ…</small></div></article>
          </div>
        </details>
      </div>
    </StudentShell>
  );
}
