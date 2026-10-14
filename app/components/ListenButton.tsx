"use client";

export function ListenButton({ text, lang = "en-IN" }: { text: string; lang?: string }) {
  function speak() {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.85;
    const voice = window.speechSynthesis.getVoices().find((item) => item.lang.replace("_", "-") === lang);
    if (voice) utterance.voice = voice;
    window.speechSynthesis.speak(utterance);
  }

  return (
    <button className="listenButton" type="button" onClick={speak} aria-label={`Listen: ${text}`}>
      <span aria-hidden="true">▶</span>
    </button>
  );
}
