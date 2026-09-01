// All site content lives here. Remaining PLACEHOLDER entries: project list,
// skills groups, role summaries/highlights, and the GitHub/LinkedIn URLs.

export const site = {
  name: "Sean Marchetti",
  // Shown large in the hero.
  tagline: "i build software — and the teams that ship it.",
  intro:
    "Engineering leader in New York — currently SVP of Engineering & Head of Tech at The Points Guy (Red Ventures). Two decades of building products and engineering organizations at Duolingo, Meta, Grubhub, Walmart Labs, and startups in between.",
  email: "sean.marchetti@gmail.com",
  location: "New York, NY",
  links: [
    // PLACEHOLDER: confirm/replace profile URLs.
    { label: "GitHub", href: "https://github.com/smarchetti" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/seanmarchetti/" },
  ],
};

export type Role = {
  company: string;
  title: string;
  start: string; // e.g. "Sep 2025"
  end: string; // e.g. "present"
  location?: string;
  summary?: string;
  highlights?: string[];
};

export const experience: Role[] = [
  {
    company: "Red Ventures",
    title: "SVP of Engineering & Head of Tech, The Points Guy",
    start: "Sep 2025",
    end: "present",
    location: "New York, NY",
  },
  {
    company: "Duolingo",
    title: "Director of Engineering",
    start: "Jan 2025",
    end: "Aug 2025",
    location: "New York, NY",
  },
  {
    company: "Meta",
    title: "Engineering Manager",
    start: "Dec 2020",
    end: "Jan 2025",
    location: "New York, NY",
  },
  {
    company: "Grubhub",
    title: "Director, Engineering",
    start: "Oct 2019",
    end: "Nov 2020",
    location: "New York, NY",
  },
  {
    company: "Walmart Labs",
    title: "Associate Director, Software Engineering",
    start: "Apr 2017",
    end: "Sep 2019",
    location: "Hoboken, NJ",
  },
  {
    company: "Embark Corporation",
    title: "Chief Technology Officer",
    start: "Jul 2015",
    end: "Apr 2017",
    location: "New York, NY",
  },
  {
    company: "Fino Consulting",
    title: "Consultant",
    start: "May 2013",
    end: "Jul 2015",
    location: "New York, NY",
  },
  {
    company: "Hess Corporation",
    title: "Intern to Team Lead",
    start: "May 2003",
    end: "Apr 2013",
    location: "New York, NY",
    summary:
      "Ten years across application development, enterprise architecture, and energy trading systems.",
    highlights: [
      "Team Lead, Electricity Operations Development (2012–2013)",
      "Team Lead, Enterprise Architecture (2010–2012)",
      "Development Lead, SAP HCM Implementation (2009–2010)",
      "Application Development Specialist, Programming Consultant, Systems Analyst, and Intern (2003–2008)",
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
    href: "https://github.com/smarchetti",
  },
  {
    name: "This site",
    description:
      "The site you're looking at — Next.js, Tailwind, and shadcn/ui, deployed on Vercel.",
    tech: ["Next.js", "Tailwind", "shadcn/ui"],
    href: "https://github.com/smarchetti/seanmarchetti.com",
  },
];

export const skills: { group: string; items: string[] }[] = [
  // PLACEHOLDER skills — refine groupings and items.
  {
    group: "Leadership",
    items: [
      "Engineering organizations",
      "Hiring & mentoring",
      "Product strategy",
    ],
  },
  { group: "Tools", items: ["TypeScript", "Next.js", "React", "Postgres"] },
];
