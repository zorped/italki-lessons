import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const outputFile =
    path === "/" ? "index.html" : `${path.replace(/^\//, "")}.html`;
  return readFile(new URL(`../out/${outputFile}`, import.meta.url), "utf8");
}

test("renders the student chooser", async () => {
  const html = await render();
  assert.match(html, /Krishna(?:&apos;|&#x27;|'|’|\u2019)s Lesson Room/i);
  assert.match(html, /Ronaldo Rodrigues/);
  assert.match(html, /Ihar/);
  assert.match(html, /Sara/);
  assert.match(html, /Amanda/);
  assert.match(html, /\/students\/ronaldo/);
  assert.match(html, /\/students\/ihar/);
  assert.match(html, /\/students\/sarah/);
  assert.match(html, /\/students\/amanda/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
});

test("renders Ronaldo's isolated lesson overview", async () => {
  const html = await render("/students/ronaldo");
  assert.match(html, /Ronaldo/);
  assert.match(html, /Rodrigues/);
  assert.match(html, /Your English notebook/);
  assert.match(html, /href="\/students\/ronaldo\/lessons\/01"/);
  assert.match(html, /aria-label="Hide sidebar"/);
  assert.doesNotMatch(html, /href="\/"/);
  assert.doesNotMatch(html, /\/students\/ihar/);
});

test("renders Ronaldo's first chapter", async () => {
  const html = await render("/students/ronaldo/lessons/01");
  assert.match(html, /Journalism/);
  assert.match(html, /Get by/);
  assert.match(html, /25 July 2026/);
  assert.match(html, /Review corrections/);
  assert.match(html, /Mark lesson complete/);
  assert.match(html, /6 items/);
  assert.match(html, /begin directly with sn/);
  assert.match(html, /begin directly with fl/);
  assert.match(html, /aria-label="Hide sidebar"/);
  assert.doesNotMatch(html, /href="\/"/);
  assert.doesNotMatch(html, /\/students\/ihar/);
});

test("renders Ihar's isolated lesson overview", async () => {
  const html = await render("/students/ihar");
  assert.match(html, /Ihar/);
  assert.match(html, /Your English notebook/);
  assert.match(html, /href="\/students\/ihar\/lessons\/01"/);
  assert.match(html, /aria-label="Hide sidebar"/);
  assert.doesNotMatch(html, /href="\/"/);
  assert.doesNotMatch(html, /\/students\/ronaldo/);
});

test("renders Ihar's first chapter", async () => {
  const html = await render("/students/ihar/lessons/01");
  assert.match(html, /Blood donation vocabulary/);
  assert.match(html, /Survey results can be/);
  assert.match(html, /25 July 2026/);
  assert.match(html, /Review corrections/);
  assert.match(html, /Mark lesson complete/);
  assert.match(html, /aria-label="Hide sidebar"/);
  assert.match(html, /blood drive/i);
  assert.match(html, /altruistic/i);
  assert.match(html, /Emergency, not extreme/);
  assert.match(html, /9 prompts/);
  assert.match(html, /Should blood donors be paid/);
  assert.match(html, /present perfect, past simple and future perfect/i);
  assert.match(html, /two-minute explanation of a data-science topic/i);
  assert.match(html, /One possible explanation is/);
  assert.match(html, /by the time/);
  assert.doesNotMatch(html, /href="\/"/);
  assert.doesNotMatch(html, /\/students\/ronaldo/);
});

test("renders Sarah's isolated Hindi lesson overview", async () => {
  const html = await render("/students/sarah");
  assert.match(html, /Sara/);
  assert.match(html, /Your Hindi notebook/);
  assert.match(html, /href="\/students\/sarah\/lessons\/01"/);
  assert.match(html, /href="\/students\/sarah\/lessons\/02"/);
  assert.match(html, /aria-label="Hide sidebar"/);
  assert.doesNotMatch(html, /href="\/"/);
  assert.doesNotMatch(html, /\/students\/ronaldo/);
  assert.doesNotMatch(html, /\/students\/ihar/);
});

test("renders Sara's second everyday Hinglish lesson", async () => {
  const html = await render("/students/sarah/lessons/02");
  assert.match(html, /Time, memories and work/);
  assert.match(html, /12 August 2026/);
  assert.match(html, /मेरी पिछली इंडिया ट्रिप/);
  assert.match(html, /वह बहुत अच्छी नहीं थी/);
  assert.match(html, /साढ़े सात बजे हैं/);
  assert.match(html, /मैं एक बार में काम करती हूँ/);
  assert.match(html, /शुरू होता है/);
  assert.match(html, /खत्म होता है/);
  assert.match(html, /जब मैं पहली बार न्यू यॉर्क आई थी/);
  assert.match(html, /मुझे याद नहीं है/);
  assert.match(html, /मुझे यह इंटरेस्टिंग लगता है/);
  assert.match(html, /Mark lesson complete/);
  assert.doesNotMatch(html, /Thursday|Friday|Saturday|Hyderabad/i);
  assert.doesNotMatch(html, /\/students\/ronaldo|\/students\/ihar|\/students\/amanda/);
});

test("renders Sarah's first Hindi chapter", async () => {
  const html = await render("/students/sarah/lessons/01");
  assert.match(html, /Keep speaking in Hindi/);
  assert.match(html, /5 August 2026/);
  assert.match(html, /मुझे लगता है कि/);
  assert.match(html, /हम सब/);
  assert.match(html, /जब भी मैं बोलती हूँ/);
  assert.match(html, /मुझे समझ नहीं आ रहा है/);
  assert.match(html, /इसे हिंदी में कैसे कहूँ/);
  assert.match(html, /4 speaking rounds/);
  assert.match(html, /Mark lesson complete/);
  assert.doesNotMatch(html, /href="\/"/);
  assert.doesNotMatch(html, /\/students\/ronaldo/);
  assert.doesNotMatch(html, /\/students\/ihar/);
});

test("renders Amanda's isolated Hindi notebook", async () => {
  const html = await render("/students/amanda");
  assert.match(html, /Amanda/);
  assert.match(html, /Your Hindi notebook/);
  assert.match(html, /href="\/students\/amanda\/chapters\/07"/);
  assert.match(html, /href="\/students\/amanda\/chapters\/08"/);
  assert.match(html, /href="\/students\/amanda\/chapters\/09"/);
  assert.match(html, /10 August 2026/);
  assert.doesNotMatch(html, /Building confident Hindi/);
  assert.doesNotMatch(html, /Learn → Listen → Practise/);
  assert.doesNotMatch(html, /\/students\/ronaldo/);
  assert.doesNotMatch(html, /\/students\/ihar/);
  assert.doesNotMatch(html, /\/students\/sarah/);
});

test("renders Amanda's Chapter 7 review without publishing source files", async () => {
  const html = await render("/students/amanda/chapters/07");
  assert.match(html, /भूत-काल/);
  assert.match(html, /Build a past routine/);
  assert.match(html, /Translate exercise 1 step by step/);
  assert.match(html, /verb stem/);
  assert.match(html, /No.*ने.*here/);
  assert.match(html, /मनोज का अख़बार/);
  assert.match(html, /Questions and negatives/);
  assert.match(html, /Page 116 · Exercise 1/);
  assert.match(html, /Page 116 · Exercise 2/);
  assert.match(html, /Mark chapter complete/);
  assert.match(html, /\/students\/amanda\/chapters\/07#translation-toolkit/);
  assert.doesNotMatch(html, /Starter vocabulary/);
  assert.doesNotMatch(html, /Useful.*मुझे.*patterns/);
  assert.doesNotMatch(html, /\.pdf/i);
  assert.doesNotMatch(html, /\.png/i);
  assert.doesNotMatch(html, /\/students\/ronaldo/);
  assert.doesNotMatch(html, /\/students\/ihar/);
  assert.doesNotMatch(html, /\/students\/sarah/);
});

test("renders Amanda's selected Chapter 8 exercises", async () => {
  const html = await render("/students/amanda/chapters/08");
  assert.match(html, /Pages 135 and 136/);
  assert.match(html, /Build phrases with postpositions/);
  assert.match(html, /Comparisons with/);
  assert.match(html, /continuous tense/i);
  assert.match(html, /Answer in complete sentences/);
  assert.match(html, /Mark chapter complete/);
  assert.doesNotMatch(html, /\.pdf|\.png/i);
  assert.doesNotMatch(html, /\/students\/ronaldo|\/students\/ihar|\/students\/sarah/);
});

test("renders the corrected Chapter 9 hotel role-play", async () => {
  const html = await render("/students/amanda/chapters/09");
  assert.match(html, /Chapter 09 · Page 152, exercise 2/);
  assert.match(html, /Hotel role-play/);
  assert.match(html, /Open language support/);
  assert.match(html, /क्या मैं कमरे से लंदन फ़ोन कर सकती हूँ/);
  assert.match(html, /Mark chapter complete/);
  assert.doesNotMatch(html, /\.pdf|\.png/i);
  assert.doesNotMatch(html, /\/students\/ronaldo|\/students\/ihar|\/students\/sarah/);
});
