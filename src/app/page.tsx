import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { experience, projects, site, skills } from "@/data/resume";

const nav = [
  { label: "work", href: "#work" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
];

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 font-heading text-3xl italic tracking-tight text-foreground"
    >
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <div className="flex-1">
      <header className="sticky top-0 z-10 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-2xl items-center justify-between px-6">
          <a href="#top" className="font-mono text-sm text-foreground">
            sm
          </a>
          <nav className="flex items-center gap-5">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto w-full max-w-2xl px-6">
        {/* Hero */}
        <section className="pb-16 pt-20 sm:pt-28">
          <p className="font-mono text-sm text-primary">{site.name.toLowerCase()}</p>
          <h1 className="mt-4 font-heading text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
            <em>{site.tagline}</em>
          </h1>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-muted-foreground">
            {site.intro}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button render={<a href={`mailto:${site.email}`} />}>
              Get in touch
            </Button>
            {site.links.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                size="sm"
                render={<a href={link.href} target="_blank" rel="noreferrer" />}
              >
                {link.label}
                <ArrowUpRight aria-hidden />
              </Button>
            ))}
          </div>
        </section>

        <Separator />

        {/* Experience */}
        <section className="py-16">
          <SectionHeading id="work">work</SectionHeading>
          <div className="mt-10 space-y-12">
            {experience.map((role) => (
              <article key={`${role.company}-${role.start}`} className="grid gap-2 sm:grid-cols-[7rem_1fr] sm:gap-6">
                <p className="font-mono text-xs leading-6 text-muted-foreground">
                  {role.start} — {role.end}
                </p>
                <div>
                  <h3 className="text-base font-medium text-foreground">
                    {role.title}
                    <span className="text-muted-foreground"> · {role.company}</span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {role.summary}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {role.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-relaxed text-foreground/80"
                      >
                        <span aria-hidden className="select-none text-primary">
                          —
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <Separator />

        {/* Projects */}
        <section className="py-16">
          <SectionHeading id="projects">projects</SectionHeading>
          <div className="mt-10 space-y-10">
            {projects.map((project) => (
              <article key={project.name}>
                <h3 className="text-base font-medium text-foreground">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 transition-colors hover:text-primary"
                    >
                      {project.name}
                      <ArrowUpRight aria-hidden className="size-4 text-muted-foreground" />
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>
                <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-mono text-xs font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <Separator />

        {/* Skills */}
        <section className="py-16">
          <SectionHeading id="skills">skills</SectionHeading>
          <dl className="mt-10 space-y-6">
            {skills.map((group) => (
              <div key={group.group} className="grid gap-2 sm:grid-cols-[7rem_1fr] sm:gap-6">
                <dt className="font-mono text-xs leading-6 text-muted-foreground">
                  {group.group.toLowerCase()}
                </dt>
                <dd className="text-sm leading-relaxed text-foreground/80">
                  {group.items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <Separator />

        {/* Contact */}
        <section className="py-16">
          <SectionHeading id="contact">contact</SectionHeading>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-muted-foreground">
            The fastest way to reach me is email — I read everything.
          </p>
          <div className="mt-6">
            <Button variant="outline" render={<a href={`mailto:${site.email}`} />}>
              {site.email}
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex w-full max-w-2xl flex-wrap items-center justify-between gap-2 px-6 py-8">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {site.name} · {site.location}
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            built with next.js — deployed on vercel
          </p>
        </div>
      </footer>
    </div>
  );
}
