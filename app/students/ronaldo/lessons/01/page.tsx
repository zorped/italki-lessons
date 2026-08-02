import type { Metadata } from "next";
import { CompleteLessonButton } from "../../../../components/LessonProgress";
import { StudentShell } from "../../../../components/StudentShell";
import { ronaldo } from "../../../student-data";

export const metadata: Metadata = {
  title: { absolute: "Pronunciation and vocabulary · Ronaldo's English" },
  description: "Review journalism, castle, snow, flow, similar and get by.",
};

export default function RonaldoLessonOne() {
  return (
    <StudentShell student={ronaldo} active="01">
      <section className="chapterHero">
        <p className="eyebrow">English · Lesson 01 · 25 July 2026</p>
        <h1>Pronunciation and vocabulary</h1>
        <p className="overviewLead">Practise four useful sounds, then retrieve and use two everyday expressions.</p>
      </section>

      <div className="chapterStack">
        <section className="chapterCard">
          <h2>1. Clear pronunciation</h2>
          <p className="rule">Say each word slowly once, then use it naturally in the example sentence.</p>
          <div className="compactGrid">
            <article><h3>Journalism</h3><strong className="sound">JUR-nuh-liz-um</strong><p>Stress the first part. Keep the middle syllables light.</p><p className="example">She studied journalism at university.</p></article>
            <article><h3>Castle</h3><strong className="sound">KAH-suhl · silent T</strong><p>The written <strong>t</strong> is not pronounced.</p><p className="example">We visited an old castle.</p></article>
            <article><h3>Snow</h3><strong className="sound">SN + long O</strong><p>Join the opening sounds without adding a vowel.</p><p className="example">Heavy snow stopped the traffic.</p></article>
            <article><h3>Flow</h3><strong className="sound">FL + long O</strong><p>It ends with the same vowel sound as <strong>snow</strong>.</p><p className="example">The river began to flow faster.</p></article>
          </div>
        </section>

        <section className="chapterCard">
          <h2>2. Vocabulary to keep</h2>
          <div className="comparison">
            <div><h3>Similar</h3><p>Alike, but not exactly the same.</p><p className="example">Portuguese and Spanish are similar in some ways.</p></div>
            <div><h3>Get by</h3><p>To manage with limited knowledge, money or resources.</p><p className="example">I know enough English to get by when I travel.</p></div>
          </div>
        </section>

        <section className="chapterEnd">
          <p>Finish here, or open Review and Practice below.</p>
          <CompleteLessonButton studentId="ronaldo" lessonId="01" />
        </section>

        <details className="chapterReview">
          <summary><span>Review corrections</span><small>6 items</small></summary>
          <div className="reviewContent correctionList">
            <article><p className="wrong">unclear stress in journalism</p><p className="right">JUR-nuh-liz-um</p><p>Stress the first part and keep the middle syllables light.</p></article>
            <article><p className="wrong">castle with a pronounced t</p><p className="right">castle — silent t</p><p>The standard pronunciation does not include the written <strong>t</strong>.</p></article>
            <article><p className="wrong">an extra vowel before snow</p><p className="right">snow — begin directly with sn</p><p>Join the <strong>s</strong> and <strong>n</strong> sounds smoothly.</p></article>
            <article><p className="wrong">an extra vowel before flow</p><p className="right">flow — begin directly with fl</p><p>Join the <strong>f</strong> and <strong>l</strong> sounds, then use the same final vowel as <strong>snow</strong>.</p></article>
            <article><p className="wrong">similar — pronunciation problem</p><p className="right">similar — vocabulary recall</p><p>You knew this word; the goal is to retrieve it more quickly.</p></article>
            <article><p className="right">get by</p><p>Use it when someone manages despite limited knowledge, money or resources.</p></article>
          </div>
        </details>

        <details className="chapterReview">
          <summary><span>Practice</span><small>4 prompts</small></summary>
          <div className="reviewContent practiceSet">
            <article className="practicePrompt"><span>01</span><p>How are two cities you know similar?</p></article>
            <article className="practicePrompt"><span>02</span><p>Could you get by for one week without your phone?</p></article>
            <article className="practicePrompt"><span>03</span><p>Read aloud: “Snow fell around the castle.”</p></article>
            <article className="practicePrompt"><span>04</span><p>Read aloud: “The flow of information affects journalism.”</p></article>
          </div>
        </details>
      </div>
    </StudentShell>
  );
}
