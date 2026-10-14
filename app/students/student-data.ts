export type LessonSummary = {
  id: string;
  number: string;
  title: string;
  summary: string;
  date: string;
  href: string;
  sections?: {
    id: string;
    number: string;
    title: string;
  }[];
};

export type StudentConfig = {
  id: string;
  name: string;
  initial: string;
  language: string;
  basePath: string;
  focus?: string;
  navigationLabel?: string;
  lessons: LessonSummary[];
};

export const ronaldo: StudentConfig = {
  id: "ronaldo",
  name: "Ronaldo Rodrigues",
  initial: "R",
  language: "English",
  basePath: "/students/ronaldo",
  focus: "Clear pronunciation and useful everyday vocabulary.",
  lessons: [
    {
      id: "01",
      number: "01",
      title: "Pronunciation and vocabulary",
      summary: "Journalism, castle, snow, flow, similar and get by.",
      date: "25 July 2026",
      href: "/students/ronaldo/lessons/01",
    },
  ],
};

export const ihar: StudentConfig = {
  id: "ihar",
  name: "Ihar",
  initial: "I",
  language: "English",
  basePath: "/students/ihar",
  focus: "Professional fluency and expressing complex ideas clearly.",
  lessons: [
    {
      id: "01",
      number: "01",
      title: "Professional fluency",
      summary: "Blood donation, natural phrasing and complex answers.",
      date: "25 July 2026",
      href: "/students/ihar/lessons/01",
    },
  ],
};

export const maggie: StudentConfig = {
  id: "maggie",
  name: "Maggie",
  initial: "M",
  language: "English",
  basePath: "/students/maggie",
  focus: "Listening confidently to Indian English and expressing ideas with precise, natural vocabulary.",
  lessons: [
    {
      id: "01",
      number: "01",
      title: "Effort, focus and trade-offs",
      summary: "Pronunciation, vocabulary and natural English from lessons 1 and 2, held on 7 and 8 October.",
      date: "7–8 October 2026",
      href: "/students/maggie/lessons/01",
      sections: [
        { id: "pronunciation", number: "1.1", title: "Pronunciation" },
        { id: "natural-english", number: "1.2", title: "Natural English" },
        { id: "reading-in-context", number: "1.3", title: "Reading in context" },
        { id: "practice", number: "1.4", title: "Practice" },
      ],
    },
    {
      id: "03",
      number: "03",
      title: "Precise words and natural patterns",
      summary: "Word contrasts, quantifiers, verb patterns and clearer sentences from our third lesson.",
      date: "11 October 2026",
      href: "/students/maggie/lessons/03",
      sections: [
        { id: "quantity", number: "1", title: "Much or many? Little or few?" },
        { id: "verb-patterns", number: "2", title: "Words that go together" },
        { id: "past-story", number: "3", title: "Telling a story about the past" },
        { id: "similar-words", number: "4", title: "Similar words" },
        { id: "practice", number: "5", title: "Say it out loud" },
      ],
    },
    {
      id: "04",
      number: "04",
      title: "Understanding workplace emails",
      summary: "Briefing, beyond, recurring, spillover and workplace pronunciation.",
      date: "13 October 2026",
      href: "/students/maggie/lessons/04",
      sections: [
        { id: "speaking-checks", number: "1", title: "Two things to check when you speak" },
        { id: "highlighted-words", number: "2", title: "The words you highlighted" },
        { id: "bandwidth", number: "3", title: "Saying no politely: bandwidth" },
        { id: "workplace-wording", number: "4", title: "Everyday words, work words" },
        { id: "sentence-starts", number: "5", title: "Starting a sentence" },
        { id: "pronunciation", number: "6", title: "Pronunciation" },
        { id: "practice", number: "7", title: "Say it out loud" },
      ],
    },
  ],
};

export const sarah: StudentConfig = {
  id: "sarah",
  name: "Sara",
  initial: "S",
  language: "Hindi",
  basePath: "/students/sarah",
  focus: "Turning strong Hindi understanding into comfortable, spontaneous speech.",
  lessons: [
    {
      id: "01",
      number: "01",
      title: "Keep speaking in Hindi",
      summary: "Conversation bridges and rescue phrases for speaking without switching to English.",
      date: "5 August 2026",
      href: "/students/sarah/lessons/01",
    },
    {
      id: "02",
      number: "02",
      title: "Time, memories and work",
      summary: "Natural Delhi Hindi for talking about time, past experiences, work and remembering.",
      date: "12 August 2026",
      href: "/students/sarah/lessons/02",
      sections: [
        { id: "past-experiences", number: "2.1", title: "Past experiences" },
        { id: "time-and-work", number: "2.2", title: "Time and work" },
        { id: "remembering", number: "2.3", title: "Remembering" },
        { id: "speaking-practice", number: "2.4", title: "Practice" },
      ],
    },
  ],
};

export const amanda: StudentConfig = {
  id: "amanda",
  name: "Amanda",
  initial: "A",
  language: "Hindi",
  basePath: "/students/amanda",
  navigationLabel: "Your chapters",
  lessons: [
    {
      id: "07",
      number: "07",
      title: "भूत-काल · The past",
      summary: "Past routines, translation support, questions, negatives and emphasis.",
      date: "10 August 2026",
      href: "/students/amanda/chapters/07",
      sections: [
        { id: "past-forms", number: "7.1", title: "Past routines" },
        { id: "translation-toolkit", number: "7.2", title: "Translation toolkit" },
        { id: "emphasis", number: "7.3", title: "Emphasis" },
        { id: "practice", number: "7.4", title: "Practice" },
      ],
    },
    {
      id: "08",
      number: "08",
      title: "क्या हो रहा है? · Practice",
      summary: "Postpositions, comparisons, continuous tense and speaking.",
      date: "10 August 2026",
      href: "/students/amanda/chapters/08",
      sections: [
        { id: "postpositions", number: "8.1", title: "Postpositions" },
        { id: "comparisons", number: "8.2", title: "Comparisons" },
        { id: "continuous", number: "8.3", title: "Continuous tense" },
        { id: "speaking", number: "8.4", title: "Speaking" },
      ],
    },
    {
      id: "09",
      number: "09",
      title: "Hotel role-play",
      summary: "A practical hotel conversation based on page 152, exercise 2.",
      date: "10 August 2026",
      href: "/students/amanda/chapters/09",
      sections: [
        { id: "scenario", number: "9.1", title: "Scenario" },
        { id: "language-support", number: "9.2", title: "Language support" },
        { id: "role-play", number: "9.3", title: "Role-play" },
      ],
    },
  ],
};
