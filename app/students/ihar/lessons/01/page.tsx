import type { Metadata } from "next";
import { CompleteLessonButton } from "../../../../components/LessonProgress";
import { StudentShell } from "../../../../components/StudentShell";
import { ihar } from "../../../student-data";

export const metadata: Metadata = {
  title: { absolute: "Professional fluency · Ihar's English" },
  description: "Review blood-donation vocabulary, natural phrasing and structured professional answers.",
};

export default function IharLessonOne() {
  return (
    <StudentShell student={ihar} active="01">
      <section className="chapterHero">
        <p className="eyebrow">English · Lesson 01 · 25 July 2026</p>
        <h1>Professional fluency</h1>
        <p className="overviewLead">Build precise vocabulary and organise complex answers so professional ideas are easier to express.</p>
      </section>

      <div className="chapterStack">
        <section className="chapterCard">
          <h2>1. Blood donation vocabulary</h2>
          <div className="compactGrid">
            <article><h3>Donor / donate / donation</h3><p>A <strong>blood donor</strong> is a person who <strong>donates</strong> or gives blood. The act is a <strong>blood donation</strong>.</p><p className="example">The donor gave blood at a local blood bank.</p></article>
            <article><h3>Donor and recipient</h3><p>A <strong>donor donates blood</strong>. A patient or blood recipient <strong>receives blood</strong>.</p><p className="example">The patient received blood in an emergency.</p></article>
            <article><h3>Donation camp / blood drive</h3><p><strong>Blood donation camp</strong> is common in Indian English. <strong>Blood drive</strong> is common in American English.</p></article>
            <article><h3>Selfless / altruistic / altruist</h3><p>A <strong>selfless</strong> or <strong>altruistic</strong> action helps others. An <strong>altruist</strong> is a person who acts this way.</p></article>
            <article><h3>Temporary</h3><p>Something that lasts for a limited time and is not permanent.</p><p className="example">This is only a temporary solution.</p></article>
            <article><h3>Blood bank</h3><p>A place that collects, tests and stores blood for patients who need it.</p></article>
            <article><h3>Emergency, not extreme</h3><p><strong>Extreme</strong> usually describes a very great degree, such as <em>extreme heat</em>. An <strong>emergency</strong> is a dangerous situation requiring immediate action.</p><p className="example">The patient needed blood in an emergency.</p></article>
          </div>
        </section>

        <section className="chapterCard">
          <h2>2. Organise a complex answer</h2>
          <p className="rule">Use four parts: position → reason → example → qualification.</p>
          <ol className="answerSteps">
            <li><strong>Position</strong><span>I do not think donors should normally be paid.</span></li>
            <li><strong>Reason</strong><span>Payment could change people&apos;s motivation.</span></li>
            <li><strong>Example</strong><span>Some donors may hide health information.</span></li>
            <li><strong>Qualification</strong><span>However, compensation for travel costs may be reasonable.</span></li>
          </ol>
        </section>

        <section className="chapterCard">
          <h2>3. Describe past events and future plans</h2>
          <p className="rule">Choose the tense by meaning: life experience, a finished event, or something completed before a future point.</p>
          <div className="tenseGrid">
            <article><strong>Present perfect</strong><p>Use it for experience without a finished past time.</p><p className="example">I have attended several professional events.</p></article>
            <article><strong>Past simple</strong><p>Use it for a finished event at a known time.</p><p className="example">I attended a conference recently.</p></article>
            <article><strong>Future perfect</strong><p>Use it for something completed before a future deadline.</p><p className="example">By Friday, I will have prepared my presentation.</p></article>
          </div>
          <div className="timelineFlow" aria-label="Useful sequence words">
            <span>first</span><span>after that</span><span>by the time</span><span>eventually</span>
          </div>
        </section>

        <section className="chapterCard">
          <h2>4. Explain a professional idea</h2>
          <p className="rule">For a two-minute answer, use: context → main point → example → conclusion.</p>
          <div className="phraseBank">
            <p><strong>Introduce a possibility</strong><span>One possible explanation is…</span></p>
            <p><strong>Make a cautious claim</strong><span>The evidence suggests…, although…</span></p>
            <p><strong>Clarify</strong><span>In other words…</span></p>
            <p><strong>Name a limitation</strong><span>The main limitation is…</span></p>
          </div>
        </section>

        <section className="chapterEnd">
          <p>Finish here, or open Review and Practice below.</p>
          <CompleteLessonButton studentId="ihar" lessonId="01" />
        </section>

        <details className="chapterReview">
          <summary><span>Review corrections</span><small>4 items</small></summary>
          <div className="reviewContent correctionList">
            <article><p className="wrong">extreme</p><p className="right">emergency</p><p><strong>Extreme</strong> describes a great degree. An <strong>emergency</strong> needs immediate action.</p></article>
            <article><p className="wrong">people himself</p><p className="right">people themselves</p><p><strong>People</strong> is plural, so use <strong>themselves</strong>.</p></article>
            <article><p className="right">Survey results can be misleading.</p><p>A concise professional way to say that findings may give a false impression.</p></article>
            <article><p className="wrong">Perhaps because of I never had time, or maybe time is just an excuse.</p><p className="right">I have never donated blood, perhaps because I have never had time—or maybe not having time is just an excuse.</p><p>An <strong>excuse</strong> can suggest that a reason is not completely convincing.</p></article>
          </div>
        </details>

        <details className="chapterReview">
          <summary><span>Practice</span><small>9 prompts</small></summary>
          <div className="reviewContent practiceSet">
            <article className="practicePrompt"><span>01</span><div><p>Should blood donors be paid?</p><small>Explain one possible benefit, one risk and your conclusion.</small></div></article>
            <article className="practicePrompt"><span>02</span><div><p>Explain the difference between a donor and a recipient.</p><small>Use donate, donation, receives and blood bank.</small></div></article>
            <article className="practicePrompt"><span>03</span><div><p>Describe a temporary problem in a data-science project and a permanent solution.</p></div></article>
            <article className="practicePrompt"><span>04</span><div><p>Retell a professional or conference experience.</p><small>Use first, after that, by the time and eventually.</small></div></article>
            <article className="practicePrompt"><span>05</span><div><p>Give a two-minute explanation of a data-science topic.</p><small>Use context, main point, example and conclusion.</small></div></article>
            <article className="practicePrompt"><span>06</span><div><p>Describe your experience, one finished event and a future deadline.</p><small>Use present perfect, past simple and future perfect.</small></div></article>
            <article className="practicePrompt"><span>07</span><div><p>Explain when survey results can be misleading.</p><small>Use “The evidence suggests…, although…” or “One possible explanation is…”</small></div></article>
            <article className="practicePrompt"><span>08</span><div><p>Practise a professional interview answer.</p><small>Explain a difficult project, what happened and what you learned.</small></div></article>
            <article className="practicePrompt"><span>09</span><div><p>Contrast extreme and emergency.</p><small>Make one sentence with “extreme” and another with “emergency.”</small></div></article>
          </div>
        </details>
      </div>
    </StudentShell>
  );
}
