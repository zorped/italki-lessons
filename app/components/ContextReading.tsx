"use client";

import { useEffect, useState, type ReactNode } from "react";

export type ReadingNote = {
  text: string;
  kind: "pronunciation" | "meaning" | "phrase";
  title: string;
  explanation: string;
  pronunciation?: string;
  example?: string;
};

export type ReadingPage = {
  number: number;
  paragraphs: {
    text: string;
    notes?: ReadingNote[];
  }[];
};

const kindLabels: Record<ReadingNote["kind"], string> = {
  pronunciation: "Pronunciation",
  meaning: "Meaning",
  phrase: "Phrase and idea",
};

function AnnotatedParagraph({
  text,
  notes = [],
  pageNumber,
  paragraphNumber,
  openNote,
  setOpenNote,
}: {
  text: string;
  notes?: ReadingNote[];
  pageNumber: number;
  paragraphNumber: number;
  openNote: string | null;
  setOpenNote: (key: string | null) => void;
}) {
  const matches = notes
    .map((note, noteNumber) => ({
      note,
      noteNumber,
      start: text.indexOf(note.text),
    }))
    .filter((match) => match.start >= 0)
    .sort((a, b) => a.start - b.start);

  const output: ReactNode[] = [];
  let cursor = 0;

  for (const match of matches) {
    if (match.start < cursor) continue;
    if (match.start > cursor) output.push(text.slice(cursor, match.start));

    const key = `${pageNumber}-${paragraphNumber}-${match.noteNumber}`;
    const popupId = `reading-note-${key}`;
    const location = match.start / Math.max(text.length, 1);
    const side = location > 0.62 ? "right" : location > 0.28 ? "centre" : "left";
    const isOpen = openNote === key;

    output.push(
      <span
        className={`readingMarkWrap readingMark-${match.note.kind} readingPopup-${side}${isOpen ? " isOpen" : ""}`}
        key={key}
      >
        <button
          className="readingMark"
          type="button"
          aria-expanded={isOpen}
          aria-describedby={popupId}
          onClick={() => setOpenNote(isOpen ? null : key)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setOpenNote(null);
          }}
        >
          {match.note.text}
        </button>
        <span className="readingPopover" id={popupId} role="tooltip">
          <small>{kindLabels[match.note.kind]}</small>
          <strong>{match.note.title}</strong>
          {match.note.pronunciation ? <b>{match.note.pronunciation}</b> : null}
          <span>{match.note.explanation}</span>
          {match.note.example ? <em>{match.note.example}</em> : null}
        </span>
      </span>,
    );
    cursor = match.start + match.note.text.length;
  }

  if (cursor < text.length) output.push(text.slice(cursor));
  return <p>{output}</p>;
}

export function ContextReading({ title, pages }: { title: string; pages: ReadingPage[] }) {
  const [openNote, setOpenNote] = useState<string | null>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (!(event.target as Element).closest(".readingMarkWrap")) setOpenNote(null);
    }
    document.addEventListener("click", closeOnOutsideClick);
    return () => document.removeEventListener("click", closeOnOutsideClick);
  }, []);

  return (
    <div className="contextReading">
      <div className="readingLegend" aria-label="Annotation key">
        <span className="legendPronunciation">Pronunciation</span>
        <span className="legendMeaning">Meaning</span>
        <span className="legendPhrase">Phrase or idea</span>
      </div>

      <article className="readingPaper">
        <h3>{title}</h3>
        {pages.map((page) => (
          <section className="readingPage" key={page.number} aria-labelledby={`reading-page-${page.number}`}>
            <h4 id={`reading-page-${page.number}`}>Page {page.number}</h4>
            {page.paragraphs.map((paragraph, paragraphNumber) => (
              <AnnotatedParagraph
                key={`${page.number}-${paragraphNumber}`}
                text={paragraph.text}
                notes={paragraph.notes}
                pageNumber={page.number}
                paragraphNumber={paragraphNumber}
                openNote={openNote}
                setOpenNote={setOpenNote}
              />
            ))}
          </section>
        ))}
      </article>
    </div>
  );
}
