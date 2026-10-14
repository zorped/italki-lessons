"use client";

import { useEffect, useId, useRef, useState, type RefObject } from "react";

type OutlineEntry = { id: string; title: string; level: number; element: HTMLElement };

export function PageOutline({ contentRef }: { contentRef: RefObject<HTMLDivElement | null> }) {
  const [entries, setEntries] = useState<OutlineEntry[]>([]);
  const [activeId, setActiveId] = useState("");
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;
    const headings = Array.from(content.querySelectorAll<HTMLElement>("h2"));
    const outline = headings.map((element, index) => {
      const section = element.parentElement;
      let id = element.id || (element.tagName === "H2" ? section?.id : "");
      if (!id) {
        id = `outline-${index + 1}-${(element.textContent || "section").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
        element.id = id;
      }
      return { id, title: element.textContent?.trim() || "Section", level: Number(element.tagName[1]) - 2, element };
    });
    let frame = 0;
    function updatePosition() {
      const atBottom = window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current = outline[0]?.id || "";
      for (const entry of outline) {
        if (entry.element.getBoundingClientRect().top <= 120) current = entry.id;
      }
      if (atBottom) current = outline.at(-1)?.id || current;
      setActiveId(current);
    }
    function scheduleUpdate() {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updatePosition);
    }
    frame = window.requestAnimationFrame(() => {
      setEntries(outline);
      updatePosition();
    });
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(content);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      observer.disconnect();
    };
  }, [contentRef]);

  useEffect(() => {
    if (!open) return;
    rootRef.current?.querySelector('[aria-current="location"]')?.scrollIntoView({ block: "nearest", behavior: "instant" });
    function onOutside(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("pointerdown", onOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("pointerdown", onOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  if (entries.length < 2) return null;

  return (
    <div
      className={`pageOutline${open ? " isOpen" : ""}`}
      ref={rootRef}
      onPointerEnter={(event) => { if (event.pointerType === "mouse") setOpen(true); }}
      onPointerLeave={(event) => { if (event.pointerType === "mouse" && !rootRef.current?.contains(document.activeElement)) setOpen(false); }}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}
    >
      <button
        className="pageOutlineTrigger"
        ref={triggerRef}
        type="button"
        aria-label="Page outline"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="pageOutlineBars" aria-hidden="true" style={{ gap: Math.min(6, 120 / entries.length) }}>
          {entries.map((entry) => <span key={entry.id} className={`outlineBar outlineLevel-${entry.level}${entry.id === activeId ? " isCurrent" : ""}`} />)}
        </span>
        <span className="pageOutlineMobileLabel">On this page</span>
      </button>
      <nav className="pageOutlinePanel" id={panelId} aria-label="On this page" hidden={!open}>
        <p>On this page</p>
        <div className="pageOutlineLinks">
          {entries.map((entry) => (
            <a
              key={entry.id}
              className={`outlineLevel-${entry.level}`}
              href={`#${entry.id}`}
              aria-current={entry.id === activeId ? "location" : undefined}
              onClick={() => setOpen(false)}
            >{entry.title}</a>
          ))}
        </div>
      </nav>
    </div>
  );
}
