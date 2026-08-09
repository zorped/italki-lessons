"use client";

export function SpeakHindiButton({ text, label = "Hear" }: { text: string; label?: string }) {
  function speak() {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "hi-IN";
    utterance.rate = 0.82;
    window.speechSynthesis.speak(utterance);
  }

  return (
    <button className="speakHindiButton" type="button" onClick={speak} aria-label={`${label}: ${text}`}>
      <span aria-hidden="true">▶</span> {label}
    </button>
  );
}
