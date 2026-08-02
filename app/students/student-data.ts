export type LessonSummary = {
  id: string;
  number: string;
  title: string;
  summary: string;
  date: string;
  href: string;
};

export type StudentConfig = {
  id: string;
  name: string;
  initial: string;
  basePath: string;
  focus: string;
  lessons: LessonSummary[];
};

export const ronaldo: StudentConfig = {
  id: "ronaldo",
  name: "Ronaldo Rodrigues",
  initial: "R",
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
