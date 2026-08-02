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
  assert.match(html, /\/students\/ronaldo/);
  assert.match(html, /\/students\/ihar/);
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
