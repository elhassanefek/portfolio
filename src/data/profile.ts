// src/data/profile.ts
//
// Personal details and experience shown on the home page. Matches the resume.

export const profile = {
  name: "Fekairi Elhassane",
  title: "Software Engineer",
  pitch:
    "I build Go and PostgreSQL services that stay correct under concurrency and failure, plus React and React Native clients.",
  location: "Algiers, Algeria",
  email: "ne_fekairi@esi.dz",
  github: "https://github.com/elhassanefek",
  linkedin: "https://www.linkedin.com/in/el-hassane-fekairi-2088b0387",
  /** Drop the PDF into public/resume/ (see the README there). */
  resume: "/resume/Fekairi_Elhassane_Resume.pdf",
} as const;

export const education = {
  school: "ESI Algiers",
  program: "Computer science engineering, 2CS",
  track: "Information Systems & Technologies",
  period: "2023 – 2028 (expected)",
} as const;

export interface Experience {
  role: string;
  company: string;
  period: string;
  duration: string;
  points: string[];
  links?: { label: string; href: string }[];
}

export const experience: Experience[] = [
  {
    role: "Software Developer Intern",
    company: "DG ONE (EURL)",
    period: "Sep 2026",
    duration: "1 month",
    points: [
      "Built the admin push-notification campaigns feature for DZDash.",
      "Worked on the wholesaler dashboard and the web version of the client app.",
    ],
    links: [{ label: "dzdash.net", href: "https://dzdash.net" }],
    // TODO(elhassane): stack and outcomes
  },
];
