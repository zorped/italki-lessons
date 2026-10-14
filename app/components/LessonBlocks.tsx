import type { ReactNode } from "react";

export function LessonHeader({ label, title, children }: { label: string; title: string; children: ReactNode }) {
  return (
    <header className="lessonHeader">
      <p className="lessonLabel">{label}</p>
      <h1>{title}</h1>
      <div className="lessonIntro">{children}</div>
    </header>
  );
}

export function StartHere({ time, children }: { time: string; children: ReactNode }) {
  return (
    <aside className="startHere" aria-label="Start here">
      <p className="startHereLabel">Start here <span>{time}</span></p>
      {children}
    </aside>
  );
}

export function LessonSection({ id, title, lead, children }: { id: string; title: string; lead?: ReactNode; children: ReactNode }) {
  return (
    <section className="lessonSection" id={id}>
      <h2>{title}</h2>
      {lead && <p className="sectionLead">{lead}</p>}
      {children}
    </section>
  );
}

export type FixItem = { said: string; natural: ReactNode; why?: ReactNode };

/** Learner sentence first; the natural version stays hidden until she has tried. */
export function FixList({ items }: { items: FixItem[] }) {
  return (
    <ul className="fixList">
      {items.map((item) => (
        <li key={item.said}>
          <p className="fixSaid">{item.said}</p>
          <details>
            <summary>Say it naturally</summary>
            <p className="fixNatural">{item.natural}</p>
            {item.why && <p className="fixWhy">{item.why}</p>}
          </details>
        </li>
      ))}
    </ul>
  );
}

export function SpeakTask({ number, children, model }: { number: number; children: ReactNode; model?: ReactNode }) {
  return (
    <li className="speakTask">
      <span className="speakNumber" aria-hidden="true">{number}</span>
      <div>
        <p>{children}</p>
        {model && (
          <details>
            <summary>Compare with an example answer</summary>
            <p className="speakModel">{model}</p>
          </details>
        )}
      </div>
    </li>
  );
}
