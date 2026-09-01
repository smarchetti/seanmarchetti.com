import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { experience, site, skills } from "@/data/resume";

const nav = [
  { label: "work", href: "#work" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
];

function Crosses() {
  return (
    <>
      <span aria-hidden className="cross -left-[5px] -top-[5px]" />
      <span aria-hidden className="cross -right-[5px] -top-[5px]" />
    </>
  );
}

export default function Home() {
  return (
    <div className="flex-1">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between border-x px-6">
          <a
            href="#top"
            className="text-sm font-medium tracking-tight text-foreground"
          >
            sean marchetti
          </a>
          <nav className="flex items-center gap-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto w-full max-w-3xl border-x">
        {/* Hero */}
        <section className="px-6 pb-20 pt-24 sm:px-10 sm:pt-32">
          <h1
            className="animate-enter max-w-[22ch] text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            style={{ "--enter-index": 0 } as React.CSSProperties}
          >
            {site.tagline}
          </h1>
          <p
            className="animate-enter mt-6 max-w-[60ch] text-base leading-relaxed text-muted-foreground"
            style={{ "--enter-index": 1 } as React.CSSProperties}
          >
            {site.intro}
          </p>
          <div
            className="animate-enter mt-8 flex flex-wrap items-center gap-3"
            style={{ "--enter-index": 2 } as React.CSSProperties}
          >
            <Button render={<a href={`mailto:${site.email}`} />}>
              Get in touch
            </Button>
            {site.links.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                render={<a href={link.href} target="_blank" rel="noreferrer" />}
              >
                {link.label}
                <ArrowUpRight aria-hidden className="text-muted-foreground" />
              </Button>
            ))}
          </div>
        </section>

        {/* Work */}
        <section className="relative border-t">
          <Crosses />
          <div className="px-6 py-16 sm:px-10">
            <h2
              id="work"
              className="scroll-mt-24 text-xl font-semibold tracking-tight text-foreground"
            >
              work
            </h2>
            <div className="mt-8 -mx-3">
              {experience.map((role) => (
                <article
                  key={`${role.company}-${role.start}`}
                  className="group grid gap-1 rounded-md px-3 py-4 transition-colors hover:bg-secondary sm:grid-cols-[10rem_1fr] sm:gap-6"
                >
                  <div>
                    <p className="font-mono text-xs leading-6 text-muted-foreground">
                      {role.start} – {role.end}
                    </p>
                    {role.location && (
                      <p className="hidden font-mono text-xs leading-6 text-muted-foreground sm:block">
                        {role.location}
                      </p>
                    )}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-medium leading-6 text-foreground">
                      {role.title}
                      <span className="text-muted-foreground transition-colors group-hover:text-foreground">
                        {" "}
                        · {role.company}
                      </span>
                    </h3>
                    {role.summary && (
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {role.summary}
                      </p>
                    )}
                    {role.highlights && role.highlights.length > 0 && (
                      <ul className="mt-3 space-y-1.5">
                        {role.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                          >
                            <span
                              aria-hidden
                              className="select-none text-muted-foreground/50"
                            >
                              —
                            </span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="relative border-t">
          <Crosses />
          <div className="px-6 py-16 sm:px-10">
            <h2
              id="skills"
              className="scroll-mt-24 text-xl font-semibold tracking-tight text-foreground"
            >
              skills
            </h2>
            <dl className="mt-8 space-y-4">
              {skills.map((group) => (
                <div
                  key={group.group}
                  className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6"
                >
                  <dt className="font-mono text-xs leading-6 text-muted-foreground">
                    {group.group.toLowerCase()}
                  </dt>
                  <dd className="text-sm leading-6 text-foreground">
                    {group.items.join(" · ")}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Contact */}
        <section className="relative border-t">
          <Crosses />
          <div className="px-6 py-16 sm:px-10">
            <h2
              id="contact"
              className="scroll-mt-24 text-xl font-semibold tracking-tight text-foreground"
            >
              contact
            </h2>
            <p className="mt-4 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
              The fastest way to reach me is email — I read everything.
            </p>
            <div className="mt-6">
              <Button
                variant="outline"
                render={<a href={`mailto:${site.email}`} />}
              >
                <span className="font-mono text-[13px]">{site.email}</span>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="relative mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-2 border-x px-6 py-8 sm:px-10">
          <Crosses />
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {site.name.toLowerCase()} ·{" "}
            {site.location.toLowerCase()}
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            next.js · vercel
          </p>
        </div>
      </footer>
    </div>
  );
}
