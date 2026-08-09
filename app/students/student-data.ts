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

export const sarah: StudentConfig = {
  id: "sarah",
  name: "Sarah",
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
