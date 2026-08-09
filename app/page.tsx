import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <Link className="brand" href="/">
          <span className="brandMark">K</span>
          <span>Krishna&apos;s Lesson Room</span>
        </Link>
        <span className="topbarNote">Languages, made useful.</span>
      </header>

      <section className="homeHero">
        <div className="heroCopy">
          <p className="eyebrow">Personal lesson hub</p>
          <h1>Small notes.<br />Real progress.</h1>
          <p className="heroLead">
            A clear place to revisit useful language from our lessons, practise
            at your own pace, and arrive ready for the next conversation.
          </p>
          <a className="primaryButton" href="#students">Choose your lesson</a>
        </div>

        <aside className="heroNote" aria-label="How to use the lesson room">
          <span className="noteNumber">01</span>
          <p className="noteKicker">Your five-minute review</p>
          <ol>
            <li>Read the key language aloud.</li>
            <li>Answer the practice questions.</li>
            <li>Use one new phrase this week.</li>
          </ol>
        </aside>
      </section>

      <section className="studentsSection" id="students">
        <div className="sectionIntro">
          <p className="eyebrow">Lesson library</p>
          <h2>Choose your page</h2>
          <p>Each page contains only material from that student&apos;s lesson.</p>
        </div>

        <div className="studentGrid">
          <Link className="studentCard cardRonaldo" href="/students/ronaldo">
            <div className="studentCardTop">
              <span className="studentInitial">R</span>
              <span className="openLabel">Open review <span aria-hidden="true">↗</span></span>
            </div>
            <div>
              <p className="cardLabel">Lesson 01 · 25 July 2026</p>
              <h3>Ronaldo Rodrigues</h3>
              <p>Clear pronunciation and useful everyday vocabulary.</p>
            </div>
            <div className="topicChips" aria-label="Lesson topics">
              <span>Pronunciation</span>
              <span>Vocabulary</span>
              <span>Phrasal verbs</span>
            </div>
          </Link>

          <Link className="studentCard cardIhar" href="/students/ihar">
            <div className="studentCardTop">
              <span className="studentInitial">I</span>
              <span className="openLabel">Open review <span aria-hidden="true">↗</span></span>
            </div>
            <div>
              <p className="cardLabel">Lesson 01 · 25 July 2026</p>
              <h3>Ihar</h3>
              <p>Professional fluency and expressing complex ideas clearly.</p>
            </div>
            <div className="topicChips" aria-label="Lesson topics">
              <span>Professional English</span>
              <span>Word choice</span>
              <span>Speaking</span>
            </div>
          </Link>

          <Link className="studentCard cardSarah" href="/students/sarah">
            <div className="studentCardTop">
              <span className="studentInitial">S</span>
              <span className="openLabel">Open review <span aria-hidden="true">↗</span></span>
            </div>
            <div>
              <p className="cardLabel">Hindi · Trial lesson · 5 August 2026</p>
              <h3>Sarah</h3>
              <p>Useful phrases for moving from understanding Hindi to speaking it.</p>
            </div>
            <div className="topicChips" aria-label="Lesson topics">
              <span>Speaking</span>
              <span>Conversation</span>
              <span>Confidence</span>
            </div>
          </Link>

          <Link className="studentCard cardAmanda" href="/students/amanda">
            <div className="studentCardTop">
              <span className="studentInitial">A</span>
              <span className="openLabel">Open notebook <span aria-hidden="true">↗</span></span>
            </div>
            <div>
              <p className="cardLabel">Hindi · Chapters 07–09 · 10 August 2026</p>
              <h3>Amanda</h3>
              <p>Focused vocabulary and speaking practice alongside <em>Get Started in Hindi</em>.</p>
            </div>
            <div className="topicChips" aria-label="Chapter topics">
              <span>Past tense</span>
              <span>Vocabulary</span>
              <span>Speaking</span>
            </div>
          </Link>
        </div>
      </section>

      <footer className="siteFooter">
        <span>Krishna&apos;s Lesson Room</span>
        <span>Private local preview · 2026</span>
      </footer>
    </main>
  );
}
