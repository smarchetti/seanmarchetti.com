// All site content lives here. Replace every PLACEHOLDER entry with the real
// thing — the components render whatever this file contains.

export const site = {
  name: "Sean Marchetti",
  // Shown large in the hero. Written in your voice — edit freely.
  tagline: "i build software — and the teams that ship it.",
  // A short paragraph under the tagline. PLACEHOLDER: replace with your own intro.
  intro:
    "This is where a two-or-three sentence introduction goes — who you are, what you work on, and what you care about. Keep it plain and specific.",
  email: "sean.marchetti@gmail.com",
  // PLACEHOLDER: set your real location, or remove it in page.tsx.
  location: "United States",
  links: [
    // PLACEHOLDER: fill in your real profiles, add or remove as needed.
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ],
};

export type Role = {
  company: string;
  title: string;
  start: string; // e.g. "2021"
  end: string; // e.g. "present"
  summary: string;
  highlights: string[];
};

export const experience: Role[] = [
  // PLACEHOLDER roles — replace with your real history, most recent first.
  {
    company: "Company name",
    title: "Your most recent role",
    start: "2022",
    end: "present",
    summary:
      "One sentence on what this role was — the team, the product, the scope.",
    highlights: [
      "A thing you shipped, and what changed because of it.",
      "A thing you led — team size, outcome, what you'd point to.",
      "A thing you improved — before and after, in concrete terms.",
    ],
  },
  {
    company: "Previous company",
    title: "The role before that",
    start: "2018",
    end: "2022",
    summary:
      "One sentence on what this role was — the team, the product, the scope.",
    highlights: [
      "A highlight worth a hiring manager's attention.",
      "Another one — numbers help when they're real.",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  tech: string[];
  href?: string;
};

export const projects: Project[] = [
  // PLACEHOLDER projects — replace with real work you want to show.
  {
    name: "Project one",
    description:
      "What it is, who it's for, and why you built it — two sentences at most.",
    tech: ["TypeScript", "Next.js"],
    href: "https://github.com/",
  },
  {
    name: "Project two",
    description:
      "What it is, who it's for, and why you built it — two sentences at most.",
    tech: ["Postgres", "Drizzle"],
  },
  {
    name: "This site",
    description:
      "The site you're looking at — Next.js, Tailwind, and shadcn/ui, deployed on Vercel.",
    tech: ["Next.js", "Tailwind", "shadcn/ui"],
    href: "https://github.com/",
  },
];

export const skills: { group: string; items: string[] }[] = [
  // PLACEHOLDER skills — group however makes sense for you.
  { group: "Languages", items: ["TypeScript", "SQL"] },
  { group: "Tools", items: ["Next.js", "React", "Postgres", "Vercel"] },
  { group: "Practices", items: ["Team leadership", "Code review", "Mentoring"] },
];
