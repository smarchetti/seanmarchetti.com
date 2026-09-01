// All site content lives here. Experience is real (LinkedIn, 2026-09).
// Skills entries are provisional — Sean refines them directly in this file.

export const site = {
  name: "Sean Marchetti",
  // Shown large in the hero.
  tagline: "i build software — and the teams that ship it.",
  intro:
    "Engineering leader in New York — currently SVP of Engineering & Head of Tech at The Points Guy (Red Ventures). Two decades of building products and engineering organizations at Duolingo, Meta, Grubhub, Walmart Labs, and startups in between.",
  email: "sean.marchetti@gmail.com",
  location: "New York, NY",
  links: [
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

// Projects section is intentionally absent until there are real projects to
// show — add a `projects` export and its section in page.tsx when ready.

export const skills: { group: string; items: string[] }[] = [
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
