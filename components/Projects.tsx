import Image from "next/image";
import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Projects
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Selected work
          </h2>
        </Reveal>

        <ol className="mt-14 space-y-16">
          {site.projects.map((project, index) => (
            <Reveal key={project.title} delayMs={index * 80}>
              <li className="grid items-start gap-8 border-t border-line pt-10 lg:grid-cols-[4rem_1fr_minmax(0,18rem)]">
                <span className="font-display text-3xl font-bold text-accent/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
                    {project.description}
                  </p>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-accent-deep"
                    >
                      View publication
                      <span aria-hidden>→</span>
                    </a>
                  ) : null}
                </div>
                {project.image ? (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm lg:mt-1">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 18rem"
                    />
                  </div>
                ) : (
                  <div
                    className="hidden aspect-[4/3] bg-gradient-to-br from-accent/15 to-ink/10 lg:block"
                    aria-hidden
                  />
                )}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
