import type { Metadata } from "next";
import { ChoiceQuiz, type ChoiceItem } from "../../../../components/ChoiceQuiz";
import { FixList, LessonHeader, LessonMap, LessonSection, SpeakTask, StartHere, type FixItem, type MapStep } from "../../../../components/LessonBlocks";
import { CompleteLessonButton } from "../../../../components/LessonProgress";
import { ListenButton } from "../../../../components/ListenButton";
import { StudentShell } from "../../../../components/StudentShell";
import { alex } from "../../../student-data";

export const metadata: Metadata = {
  title: { absolute: "Stories, questions and staying connected · Alex's English" },
  description: "Past-tense stories, clearer questions and useful words from Alex's first lesson.",
};

/* 1. Past story */
const storyFixes: FixItem[] = [
  { said: "Two weeks ago I wake up and download Instagram.", natural: <>Two weeks ago, I <b>woke up</b> and <b>downloaded</b> Instagram.</>, why: "Two weeks ago is the past, so every verb is past: woke up, downloaded." },
  { said: "I see reels maybe two hours and I scared about this time.", natural: <>I <b>watched</b> reels <b>for</b> about two hours, and I <b>was</b> scared about how much time I had spent.</>, why: "Watch videos and reels (see is for noticing). Use for + a length of time. Don't forget was: I was scared." },
  { said: "After that I delete up again.", natural: <>After that, I <b>deleted the app</b> again.</>, why: "Delete is a regular verb: deleted. No up after it." },
  { said: "I see a video in YouTube where foreign people visit Russian and have so many problem with internet.", natural: <>I <b>saw</b> a video <b>on</b> YouTube where foreigners <b>visited Russia</b> and had so many <b>problems</b> with the internet.</>, why: "Past: saw, visited, had. We say on YouTube. Russia is the country; Russian is the language or the people." },
  { said: "When I see them story I knew about new information about this person.", natural: <>When I see <b>their stories</b>, I <b>learn</b> something new about that person.</>, why: "Their goes before a noun (their stories). For a habit, keep both verbs in the present: see … learn." },
  { said: "I finished my university and don't go next level like PhD.", natural: <>I finished university, but I <b>didn&apos;t continue</b> to a PhD.</>, why: "A finished past event needs didn't, not don't. We say finished university, without my." },
];

const regularVerbs = ["download → downloaded", "delete → deleted", "watch → watched", "visit → visited", "finish → finished"];
const irregularVerbs = ["wake → woke", "see → saw", "go → went", "hear → heard", "have → had", "get → got"];

const pastQuiz: ChoiceItem[] = [
  { sentence: "Yesterday I ___ up at seven.", options: ["woke", "wake"], answers: ["woke"], why: "Yesterday is past. The past of wake is woke." },
  { sentence: "At the zoo we ___ two pandas.", options: ["saw", "seen", "see"], answers: ["saw"], why: "Saw is the past of see. Seen needs have: I have seen." },
  { sentence: "I ___ the app, and then I deleted it again.", options: ["downloaded", "download"], answers: ["downloaded"], why: "Both verbs are in the same story, so both are past." },
  { sentence: "She ___ about the museum before, but she never went.", options: ["heard", "hear"], answers: ["heard"], why: "Hear is irregular: hear → heard." },
];

/* 2. Questions */
const pastQuestionFixes: FixItem[] = [
  { said: "Do you visit Moscow two months ago?", natural: <><b>Did</b> you visit Moscow two months ago?</>, why: "Two months ago is the past. Did + you + base verb." },
  { said: "What kind of places you visit in Moscow?", natural: <>What kind of places <b>did you visit</b> in Moscow?</>, why: "After What kind of places, you still need did before you." },
  { said: "Where you live? (about a hotel on a trip)", natural: <>Where <b>did you stay</b>?</>, why: "Live is for your home. For a short trip, use stay." },
  { said: "Do you have any problem for VPN connection?", natural: <><b>Did</b> you have any <b>problems with</b> the VPN?</>, why: "A finished trip needs did. Use any + plural (problems), and problems with something." },
  { said: "When are you finished your bachelor's degree?", natural: <>When <b>did you finish</b> your bachelor&apos;s degree?</>, why: "Completed past event: did + subject + base verb. Did already shows the past, so finish stays in its base form." },
];

const otherQuestionFixes: FixItem[] = [
  { said: "Why only you in this room now?", natural: <>Why <b>are you the only person</b> in this room now?</>, why: "This question needs are. Compare: You are alone → Why are you alone?" },
  { said: "How many year people learn in school?", natural: <>How many <b>years do people spend</b> at school?</>, why: "How many + plural noun. For a general question in the present, use do." },
  { said: "What kind of animals was new for you?", natural: <>What kind of animals <b>were</b> new for you?</>, why: "Animals is plural, so use were." },
  { said: "I can you tell about my city?", natural: <><b>Can I tell you</b> about my city?</>, why: "In a question, the helper verb comes first: Can I tell you…?" },
  { said: "You need to pay for visit this place or no?", natural: <><b>Do</b> you need to pay <b>to visit</b> it, <b>or is it free</b>?</>, why: "Pay to + verb. Start with do for a general question, and finish with or is it free, not or no." },
];

const questionQuiz: ChoiceItem[] = [
  { sentence: "___ you usually share reels with friends?", options: ["Do", "Are"], answers: ["Do"], why: "For a present habit with share, use do + subject + base verb." },
  { sentence: "Where ___ you stay when you visited Moscow?", options: ["did", "were"], answers: ["did"], why: "Stay is the base verb. Did makes the question past." },
  { sentence: "How long ___ a PhD usually take?", options: ["does", "is"], answers: ["does"], why: "How long asks about duration. With a PhD (singular), use does + take." },
  { sentence: "Why ___ you alone in the lab?", options: ["are", "do"], answers: ["are"], why: "Alone describes your situation, so use be: you are alone → why are you alone?" },
  { sentence: "___ you have any problems with the internet on your trip?", options: ["Did", "Do"], answers: ["Did"], why: "The trip is finished, so the question is past: did." },
  { sentence: "What kind of animals ___ new for you?", options: ["was", "were"], answers: ["were"], why: "Animals is plural, so use were." },
];

/* 3. Small words */
const smallFixes: FixItem[] = [
  { said: "In Russia we study nine year and go to college or 11 year and go to university.", natural: <>In Russia we study <b>for nine years</b> and then go to college, or <b>for eleven years</b> and then go to university.</>, why: "After a number, add -s: nine years. Use for with a length of time." },
  { said: "I finished in 2021 year, plus two year master's degree.", natural: <>I finished in <b>2021</b>, plus <b>a two-year</b> master&apos;s degree.</>, why: "Say the year alone: in 2021. Before a noun, the number part stays singular: a two-year degree, but two years." },
  { said: "And you was in Russia around two weeks.", natural: <>And you <b>were</b> in Russia <b>for</b> around two weeks.</>, why: "You takes were. Use for before a length of time." },
  { said: "My wife want to visit it.", natural: <>My wife <b>wants</b> to visit it.</>, why: "With he, she or one person (my wife), add -s: she wants." },
  { said: "I can talking about my experience. We can discuss about history.", natural: <>I can <b>talk about</b> my experience. We can <b>discuss history</b>.</>, why: "After can, use a base verb. Talk about a topic, but discuss a topic without about." },
  { said: "You recommend visit this place?", natural: <>Do you recommend <b>visiting</b> this place?</>, why: "After recommend, use -ing: recommend visiting. Start with do for the question." },
  { said: "I was on second course in bachelor's degree.", natural: <>I was <b>in the second year of</b> my bachelor&apos;s degree.</>, why: "In Russian, курс means a year of study. In English, say the second year. A course is a subject or a programme." },
];

/* 4. Experience */
const experienceFixes: FixItem[] = [
  { said: "I hear about it, but I don't visit.", natural: <>I&apos;<b>ve heard</b> about it, but I&apos;<b>ve never been</b> there.</>, why: "For experience in your life, use have + past participle. Never goes between have and been." },
  { said: "In past I visit, but I'm not sure it's ballet.", natural: <>I <b>went once</b>, but I&apos;m not sure it <b>was</b> ballet.</>, why: "A finished event in the past: went. Don't use in past; say once, last year or two years ago." },
  { said: "I don't visit ballet dance.", natural: <>I&apos;<b>ve never been to</b> a ballet.</>, why: "Say have never been to a place or an event. Say a ballet, not ballet dance." },
];

const experienceQuiz: ChoiceItem[] = [
  { sentence: "I've heard about the museum, but I've never ___ there.", options: ["been", "went"], answers: ["been"], why: "After have, use been. Went is only for a finished past trip: I went there last year." },
  { sentence: "I ___ to Moscow two years ago.", options: ["went", "have been"], answers: ["went"], why: "Two years ago is a specific time in the past, so use the past simple." },
  { sentence: "___ you ever seen a sea lion?", options: ["Have", "Do"], answers: ["Have"], why: "Ever asks about your whole life, with no exact time. Use have + seen." },
];

/* 5. Words */
const pairs = [
  { word: "story", meaning: "a temporary post that disappears after 24 hours, or a tale about events", partner: "history", partnerMeaning: "the past of a country, city or person", note: "In Russian, история can mean both. In English they are different words." },
  { word: "convenient", meaning: "easy to use or suitable for your situation", partner: "comfortable", partnerMeaning: "pleasant to sit or sleep in", note: "In Russian, удобный can mean both. A group chat is convenient; a chair is comfortable." },
  { word: "feel guilty", meaning: "feel bad because you think you did something wrong", partner: "blame", partnerMeaning: "say that someone else is responsible: blame someone for something", note: "" },
  { word: "sold out", meaning: "all the tickets are sold", partner: "occupied", partnerMeaning: "a seat or a place that someone is using now", note: "" },
];

const words = [
  { word: "a queue", meaning: "a line of people waiting for something; also called a line", example: "There was a long queue to see the pandas." },
  { word: "a sea lion", meaning: "a sea animal with flippers; it is not the same as a seal", example: "We saw sea lions at the zoo." },
  { word: "a giraffe", meaning: "a tall animal with a very long neck", example: "I saw a giraffe for the first time." },
  { word: "addictive", meaning: "so interesting that it is hard to stop", example: "Short videos can be addictive." },
  { word: "stay updated", meaning: "continue to know the latest information", example: "Stories help me stay updated on my friends' lives." },
  { word: "stay connected", meaning: "keep in touch or keep a relationship", example: "We stay connected even though we don't meet often." },
  { word: "expire", meaning: "stop being available after a set time", example: "Stories expire after 24 hours." },
  { word: "traditional", meaning: "in an old style or following old customs", example: "It was a traditional restaurant, not a modern one." },
  { word: "a sweet spot", meaning: "the best amount or point: not too much, not too little", example: "Ten minutes of videos is my sweet spot." },
  { word: "a postdoc", meaning: "a research job after finishing a PhD", example: "She is looking for a postdoc in Europe." },
  { word: "ballet", meaning: "a style of dance, often in a theatre with music and no words", example: "My wife would like to see a ballet." },
];

const wordQuiz: ChoiceItem[] = [
  { sentence: "My chair is very ___. I can sit in it for hours.", options: ["comfortable", "convenient"], answers: ["comfortable"], why: "Comfortable describes how something feels." },
  { sentence: "A group chat is ___ because I can message everyone at once.", options: ["convenient", "comfortable"], answers: ["convenient"], why: "Convenient means easy to use or suitable for what you need." },
  { sentence: "I felt ___ after wasting my whole morning on my phone.", options: ["guilty", "blame"], answers: ["guilty"], why: "Feel guilty describes your feeling. Blame is a verb: blame someone for something." },
  { sentence: "We couldn't buy tickets. The performance was ___.", options: ["sold out", "occupied"], answers: ["sold out"], why: "Sold out is about ticket availability. Occupied is a seat that someone is using." },
  { sentence: "Instagram ___ disappear after 24 hours.", options: ["stories", "history"], answers: ["stories"], why: "A story is a temporary post. History is the past, such as the history of a city." },
];

/* 7. Sounds */
const sounds = [
  { word: "queue", sound: <><b>KYOO</b></>, note: "One syllable, like the letter Q. The extra letters do not add syllables." },
  { word: "giraffe", sound: <>juh-<b>RAAF</b></>, note: "Stress the second syllable. The first sound is j, as in job." },
  { word: "guilty", sound: <><b>GIL</b>-tee</>, note: "Two syllables. Start with a hard g, as in go." },
  { word: "addictive", sound: <>uh-<b>DIK</b>-tiv</>, note: "Stress the middle syllable." },
  { word: "algorithm", sound: <><b>AL</b>-guh-rith-um</>, note: "Stress the first syllable. The ending is -rith-um, not -rhythm." },
  { word: "ballet", sound: <><b>BAL</b>-ay</>, note: "A common British pronunciation. The final t is silent. American English also commonly stresses the last syllable: bal-AY." },
];

const steps: MapStep[] = [
  { id: "past-story", title: "A story in the past", kind: "Model · fix it" },
  { id: "questions", title: "Past questions", kind: "Fix it · quiz" },
  { id: "small-words", title: "Small words, big difference", kind: "Fix it" },
  { id: "experience", title: "Have you ever been?", kind: "Rule · quiz" },
  { id: "vocabulary", title: "Words to learn", kind: "Words · quiz" },
  { id: "your-ideas", title: "Say what you meant", kind: "Models" },
  { id: "sounds", title: "Listen and repeat", kind: "Pronunciation" },
  { id: "practice", title: "Keep talking", kind: "Speaking" },
];

export default function AlexLessonOne() {
  return (
    <StudentShell student={alex} active="01">
      <article className="lessonV2">
        <div className="lessonTop">
          <LessonHeader label="Lesson 01 · 15 October 2026" title="Stories, questions and staying connected">
            <p>We talked about social media, education and visiting Moscow. Here are your own sentences, lightly tidied, with the patterns that make stories and questions clearer. They are useful in interviews too.</p>
          </LessonHeader>
          <StartHere time="about 10 minutes">
            <p><b>Past story, past verbs.</b> Do step 1, then retell your Instagram story aloud with every verb in the past.</p>
            <p>Then try the five &ldquo;Did you…?&rdquo; questions in step 2.</p>
          </StartHere>
        </div>

        <LessonMap steps={steps} />

        <LessonSection id="past-story" number={1} kind="Model · fix it" title="Tell a story in the past" lead="When you told us about downloading Instagram, some verbs were in the present. Say when it happened first. Then keep every verb in the past.">
          <ol className="timeline">
            <li><span className="timeMark">Two weeks ago</span><p>I <b>woke up</b> and <b>downloaded</b> Instagram.</p></li>
            <li><span className="timeMark">For about two hours</span><p>I <b>watched</b> reels.</p></li>
            <li><span className="timeMark">After that</span><p>I <b>was</b> scared about the time, so I <b>deleted</b> the app.</p></li>
          </ol>
          <div className="ruleTiles">
            <div className="ruleTile tileCount">
              <p className="tileHead">Add -ed (regular)</p>
              <p className="tileNouns">most verbs</p>
              <ul>{regularVerbs.map((verb) => <li key={verb}>{verb}</li>)}</ul>
            </div>
            <div className="ruleTile tileMass">
              <p className="tileHead">Different form (irregular)</p>
              <p className="tileNouns">learn these as pairs</p>
              <ul>{irregularVerbs.map((verb) => <li key={verb}>{verb}</li>)}</ul>
            </div>
          </div>
          <h3>Your sentences</h3>
          <p className="hint">Try to say each one in the past out loud. Then open the natural version.</p>
          <FixList items={storyFixes} layout="grid" />
          <ChoiceQuiz id="alex-01-past" title="Check yourself" items={pastQuiz} layout="grid" />
        </LessonSection>

        <LessonSection id="questions" number={2} kind="Fix it · patterns · quiz" title="Ask questions in the past" lead="You asked many follow-up questions, and your ideas were clear. Adding did, was or were makes each one sound much more natural.">
          <div className="split">
            <div className="checkCard">
              <p className="checkLabel">Pattern 1</p>
              <h3>Past event → did + base verb</h3>
              <FixList items={pastQuestionFixes} />
            </div>
            <div className="checkCard">
              <p className="checkLabel">Pattern 2</p>
              <h3>Other questions</h3>
              <FixList items={otherQuestionFixes} />
            </div>
          </div>
          <dl className="wordList">
            <div><dt>Present habit</dt><dd>Do / does + person + base verb?<span>Do you share reels with your friends? What does your friend usually share?</span></dd></div>
            <div><dt>Past event</dt><dd>Did + person + base verb?<span>Did you visit Moscow? Where did you stay? When did you finish university?</span></dd></div>
            <div><dt>A situation</dt><dd>Am / is / are / was / were + person?<span>Are you at home? Why are you alone? Were you in Russia for two weeks?</span></dd></div>
            <div><dt>Duration</dt><dd>How long…?<span>How long does a PhD take? How long did you stay in Moscow?</span></dd></div>
          </dl>
          <p className="calloutNote"><span className="noteLabel">Your school question</span>&ldquo;How many years do people spend at school?&rdquo; asks for a number of years. &ldquo;How long do people spend at school?&rdquo; asks about duration. Both work. After <b>did</b>, use <b>finish</b>, not <b>finished</b>.</p>
          <ChoiceQuiz id="alex-01-questions" title="Check yourself" items={questionQuiz} layout="grid" />
        </LessonSection>

        <LessonSection id="small-words" number={3} kind="Fix it" title="Small words, big difference" lead="These small changes are easy to miss when you speak fast: -s on numbers, was or were, for, and verb partners.">
          <FixList items={smallFixes} layout="grid" />
        </LessonSection>

        <LessonSection id="experience" number={4} kind="Rule · quiz" title="Have you ever been…?" lead="When you talked about places you know about but haven't visited, you used the present. For experience in your life, English uses have.">
          <div className="split">
            <div className="ruleTiles">
              <div className="ruleTile tileCount">
                <p className="tileHead">One time in the past</p>
                <p className="tileNouns">use the past simple, with or without a time</p>
                <ul><li>I <b>went</b> there once.</li><li>We <b>visited</b> in September.</li></ul>
              </div>
              <div className="ruleTile tileMass">
                <p className="tileHead">Experience in your life</p>
                <p className="tileNouns">have + been / seen / heard</p>
                <ul><li>I&apos;<b>ve never been</b> there.</li><li><b>Have</b> you ever <b>seen</b> a sea lion?</li></ul>
              </div>
            </div>
            <FixList items={experienceFixes} />
          </div>
          <ChoiceQuiz id="alex-01-experience" title="Check yourself" items={experienceQuiz} layout="grid" />
        </LessonSection>

        <LessonSection id="vocabulary" number={5} kind="Words · quiz" title="Words to learn and revisit" lead="Some words you checked, some are useful phrases from the conversation. First the pairs that are easy to mix up.">
          <div className="pairCards">
            {pairs.map((item) => (
              <article key={item.word}>
                <p className="pairHead"><b>{item.word}</b><span>vs</span><b className="pairOther">{item.partner}</b></p>
                <p>{item.meaning}</p>
                <p className="pairContrast"><b>{item.partner}</b>: {item.partnerMeaning}</p>
                {item.note && <p className="hint">{item.note}</p>}
              </article>
            ))}
          </div>
          <ChoiceQuiz id="alex-01-review" title="Check yourself" items={wordQuiz} layout="grid" />
          <h3>More words from the conversation</h3>
          <dl className="wordList">{words.map((word) => <div key={word.word}><dt><ListenButton text={word.word} /> {word.word}</dt><dd>{word.meaning}<span>{word.example}</span></dd></div>)}</dl>
        </LessonSection>

        <LessonSection id="your-ideas" number={6} kind="Your ideas · models" title="Say what you meant" lead="You asked for clearer versions of your ideas. Try each one yourself first, then open the example.">
          <ol className="speakTasks">
            <SpeakTask number={1} model="Do you share reels with your friends, or do you only watch the ones they send you?">Ask whether someone shares reels or only watches the reels their friends send.</SpeakTask>
            <SpeakTask number={2} model="I don't talk to these friends much in real life, but I watch their stories to stay updated on their lives.">Explain why you used to watch stories from people you no longer saw often.</SpeakTask>
            <SpeakTask number={3} model="Two weeks ago, I downloaded Instagram after I woke up. I watched reels for about two hours. I was worried about how much time I had spent, so I deleted the app again.">Retell your story about downloading Instagram and deleting it again.</SpeakTask>
            <SpeakTask number={4} model="When we visited Moscow, I played tennis with my friends while my wife and some friends went to the zoo. There was a long queue to see the pandas.">Tell the story of your Moscow visit. Explain what different people did.</SpeakTask>
          </ol>
        </LessonSection>

        <LessonSection id="sounds" number={7} kind="Listen · repeat" title="Listen and repeat" lead="Press ▶ to hear each word (in an Indian English voice if your device has one), say it twice, then read the note. These are listening reminders, not a list of mistakes.">
          <ul className="soundList">{sounds.map((item) => <li key={item.word}><ListenButton text={item.word} /><div><p className="soundWord">{item.word} <span>{item.sound}</span></p><p className="soundExample">{item.note}</p></div></li>)}</ul>
        </LessonSection>

        <LessonSection id="practice" number={8} kind="Speaking" title="Keep the conversation going" lead="Speak first, then open the example. Record yourself if you can and listen for past verbs.">
          <p className="calloutNote"><span className="noteLabel">Interview link</span>Interviewers often say, &ldquo;Tell me about a time when…&rdquo; Answer in the past: what happened, what you did, and what the result was. It is the same skill as your Instagram story.</p>
          <ol className="speakTasks">
            <SpeakTask number={1}>Tell me about your experience in Moscow. Ask me two follow-up questions about mine.</SpeakTask>
            <SpeakTask number={2}>Introduce your home city to someone who has never visited. Describe one place and one part of its history.</SpeakTask>
            <SpeakTask number={3} model="Last year I had to learn something new quickly. I watched tutorials every evening and asked friends for help. After two weeks, I could do it by myself.">Tell a story about a time you learned something new quickly. Use three sentences, all in the past.</SpeakTask>
          </ol>
          <p className="hint">If you need a moment, say &ldquo;Let me think&rdquo; or &ldquo;How can I put this?&rdquo; If you lose the word, describe what it does or what it looks like.</p>
        </LessonSection>

        <footer className="lessonClose">
          <p>For our next conversation, prepare a short story about Moscow or an introduction to your city. Practise once for the meaning, then again for past-tense verbs.</p>
          <CompleteLessonButton studentId="alex" lessonId="01" />
        </footer>
      </article>
    </StudentShell>
  );
}
