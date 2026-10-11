"use client";

import { useEffect, useState } from "react";

const practiceStorageKey = "english-lessons-maggie-01-practice";

const matches = [
  { term: "core", answer: "B" },
  { term: "realm", answer: "E" },
  { term: "disperse", answer: "C" },
  { term: "ceiling", answer: "A" },
  { term: "prerequisite", answer: "D" },
];

const definitions = [
  { id: "A", text: "the highest point or limit you can reach" },
  { id: "B", text: "the central or most important part" },
  { id: "C", text: "to spread in different directions" },
  { id: "D", text: "something required before another thing can happen" },
  { id: "E", text: "an area of knowledge, activity or experience" },
];

const closestMeaning = [
  {
    prompt: "The new routine yielded better results.",
    options: ["produced", "expected", "measured"],
    answer: "produced",
  },
  {
    prompt: "Her explanation was entirely different.",
    options: ["slightly", "completely", "unexpectedly"],
    answer: "completely",
  },
  {
    prompt: "That was a genuine breakthrough.",
    options: ["real", "temporary", "lucky"],
    answer: "real",
  },
  {
    prompt: "She craves a change in her routine.",
    options: ["avoids", "strongly desires", "plans"],
    answer: "strongly desires",
  },
];

const gaps = [
  {
    before: "When I work on too many goals at once, I",
    after: ".",
    answer: "spread myself too thin",
  },
  {
    before: "Once I am",
    after: ", I stop noticing the time.",
    answer: "in the zone",
  },
  {
    before: "The project consumed",
    after: "time and energy.",
    answer: "massive amounts of",
  },
  {
    before: "Having less free time is one",
    after: "I may have to accept.",
    answer: "trade-off",
  },
  {
    before: "I want to",
    after: "English pronunciation this month.",
    answer: "dive deep into",
  },
  {
    before: "Too much overtime can",
    after: "the rest of life.",
    answer: "throw out of balance",
  },
];

const wordBank = [
  "dive deep into",
  "in the zone",
  "massive amounts of",
  "spread myself too thin",
  "throw out of balance",
  "trade-off",
];

function normalize(value: string) {
  return value.trim().toLowerCase().replace(/[–—]/g, "-").replace(/\s+/g, " ");
}

export function VocabularyPractice() {
  const [matching, setMatching] = useState<Record<string, string>>({});
  const [choices, setChoices] = useState<Record<number, string>>({});
  const [fillIns, setFillIns] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState({ matching: false, choices: false, gaps: false });
  const [storageReady, setStorageReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const saved = JSON.parse(localStorage.getItem(practiceStorageKey) || "null");
        if (saved?.matching) setMatching(saved.matching);
        if (saved?.choices) setChoices(saved.choices);
        if (saved?.fillIns) setFillIns(saved.fillIns);
        if (saved?.checked) setChecked(saved.checked);
      } catch {
        // Practice still works if saved browser data is unavailable or malformed.
      }
      setStorageReady(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!storageReady) return;
    try {
      localStorage.setItem(practiceStorageKey, JSON.stringify({ matching, choices, fillIns, checked }));
    } catch {
      // Keep the exercise usable for the current visit if storage is unavailable.
    }
  }, [matching, choices, fillIns, checked, storageReady]);

  return (
    <div className="vocabularyPractice">
      <section className="practiceBlock">
        <div className="practiceHeading">
          <span>01</span>
          <div>
            <h3>Match the word to the idea</h3>
            <p>Choose a letter from the definition bank.</p>
          </div>
        </div>
        <ol className="definitionBank" aria-label="Definition bank">
          {definitions.map((definition) => (
            <li key={definition.id}><strong>{definition.id}</strong>{definition.text}</li>
          ))}
        </ol>
        <div className="matchingRows">
          {matches.map((item) => {
            const isCorrect = matching[item.term] === item.answer;
            return (
              <label className="matchingRow" key={item.term}>
                <strong>{item.term}</strong>
                <select
                  aria-label={`Definition for ${item.term}`}
                  value={matching[item.term] ?? ""}
                  onChange={(event) => {
                    setMatching((current) => ({ ...current, [item.term]: event.target.value }));
                    setChecked((current) => ({ ...current, matching: false }));
                  }}
                >
                  <option value="">Choose</option>
                  {definitions.map((definition) => <option key={definition.id} value={definition.id}>{definition.id}</option>)}
                </select>
                {checked.matching && <span className={isCorrect ? "answerCorrect" : "answerWrong"}>{isCorrect ? "Correct" : `Try ${item.answer}`}</span>}
              </label>
            );
          })}
        </div>
        <button className="checkPractice" type="button" onClick={() => setChecked((current) => ({ ...current, matching: true }))}>Check matching</button>
      </section>

      <section className="practiceBlock">
        <div className="practiceHeading">
          <span>02</span>
          <div>
            <h3>Pick the closest meaning</h3>
            <p>Use the whole sentence as your clue.</p>
          </div>
        </div>
        <div className="meaningQuestions">
          {closestMeaning.map((question, index) => (
            <fieldset key={question.prompt}>
              <legend>{question.prompt}</legend>
              <div className="choiceRow">
                {question.options.map((option) => (
                  <label key={option} className={choices[index] === option ? "isSelected" : ""}>
                    <input
                      type="radio"
                      name={`meaning-${index}`}
                      value={option}
                      checked={choices[index] === option}
                      onChange={() => {
                        setChoices((current) => ({ ...current, [index]: option }));
                        setChecked((current) => ({ ...current, choices: false }));
                      }}
                    />
                    {option}
                  </label>
                ))}
              </div>
              {checked.choices && (
                <p className={choices[index] === question.answer ? "answerCorrect" : "answerWrong"}>
                  {choices[index] === question.answer ? "Correct" : `Answer: ${question.answer}`}
                </p>
              )}
            </fieldset>
          ))}
        </div>
        <button className="checkPractice" type="button" onClick={() => setChecked((current) => ({ ...current, choices: true }))}>Check meanings</button>
      </section>

      <section className="practiceBlock">
        <div className="practiceHeading">
          <span>03</span>
          <div>
            <h3>Complete the sentences</h3>
            <p>Use every expression in the word bank once.</p>
          </div>
        </div>
        <div className="practiceWordBank" aria-label="Word bank">
          {wordBank.map((phrase) => <span key={phrase}>{phrase}</span>)}
        </div>
        <ol className="gapQuestions">
          {gaps.map((gap, index) => {
            const isCorrect = normalize(fillIns[index] ?? "") === normalize(gap.answer);
            return (
              <li key={gap.answer}>
                <label>
                  <span>{gap.before}</span>
                  <input
                    type="text"
                    aria-label={`Missing phrase ${index + 1}`}
                    value={fillIns[index] ?? ""}
                    onChange={(event) => {
                      setFillIns((current) => ({ ...current, [index]: event.target.value }));
                      setChecked((current) => ({ ...current, gaps: false }));
                    }}
                  />
                  <span>{gap.after}</span>
                </label>
                {checked.gaps && <small className={isCorrect ? "answerCorrect" : "answerWrong"}>{isCorrect ? "Correct" : `Answer: ${gap.answer}`}</small>}
              </li>
            );
          })}
        </ol>
        <button className="checkPractice" type="button" onClick={() => setChecked((current) => ({ ...current, gaps: true }))}>Check sentences</button>
      </section>

      <section className="practiceBlock speakingChallenge">
        <div className="practiceHeading">
          <span>04</span>
          <div>
            <h3>Make the language yours</h3>
            <p>Answer aloud without reading from the article.</p>
          </div>
        </div>
        <ol>
          <li>
            <details className="speakingAnswer">
              <summary>Describe a time you <strong>spread yourself too thin</strong>.</summary>
              <div>
                <p>I often spread myself too thin. I make lots of plans and schedule too many activities, trying to fit in time for my family, my friends and myself.</p>
                <small>Useful pattern: <strong>spread myself too thin by trying to do too many things</strong>.</small>
              </div>
            </details>
          </li>
          <li>
            <details className="speakingAnswer">
              <summary>Name one <strong>trade-off</strong> you may need to accept to reach a goal.</summary>
              <div>
                <p>When I have free time, I usually arrange activities with my friends or go out with them. Now I am choosing to prioritise English. The trade-off of spending more time learning English is that I have less time to spend with my friends.</p>
                <small>Another way: <strong>Spending more time learning English means having less time for my friends.</strong></small>
              </div>
            </details>
          </li>
          <li>
            <details className="speakingAnswer">
              <summary>Describe a genuine <strong>breakthrough</strong> in your work or learning.</summary>
              <div>
                <p>About five years ago, I took around fifty English classes with a teacher from the Philippines, usually three classes a week. After three or four months of focused study, I made a real breakthrough in my listening. I could understand my customers much better in meetings. Later, I stopped practising regularly, and my listening became rusty. Now I want to practise more than three times a week so I can improve my listening and spoken English again.</p>
                <small>Useful patterns: <strong>make a breakthrough in</strong> something; <strong>become rusty</strong> when you stop practising.</small>
              </div>
            </details>
          </li>
          <li>
            <details className="speakingAnswer">
              <summary>Make one sentence with <strong>crave</strong> and another with <strong>long for</strong>.</summary>
              <div>
                <p><strong>Long for:</strong> I long for a change to my room.</p>
                <p><strong>Crave:</strong> I crave the chance to see my idol this year.</p>
                <small><strong>Crave + noun:</strong> “the chance to see my idol.” In everyday conversation, you could also say, “I really want to see my idol this year.”</small>
              </div>
            </details>
          </li>
        </ol>
      </section>
    </div>
  );
}
