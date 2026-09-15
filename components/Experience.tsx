import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-[color-mix(in_srgb,var(--bg-elevated)_70%,transparent)] px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Experience
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Work & education
          </h2>
        </Reveal>

        <div className="mt-14 space-y-14">
          {site.experience.map((job, index) => (
            <Reveal key={job.company} delayMs={index * 60}>
              <article className="grid gap-4 border-t border-line pt-8 md:grid-cols-[minmax(0,14rem)_1fr]">
                <div>
                  <p className="text-sm font-medium text-ink-muted">{job.dates}</p>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-accent">{job.role}</p>
                  <ul className="mt-5 space-y-3">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="relative pl-5 text-ink-muted before:absolute before:left-0 before:top-[0.65em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold text-ink md:text-3xl">
              Education
            </h3>
          </Reveal>
          <div className="mt-8 space-y-10">
            {site.education.map((edu, index) => (
              <Reveal key={edu.school} delayMs={index * 60}>
                <article className="grid gap-2 border-t border-line pt-6 md:grid-cols-[minmax(0,14rem)_1fr]">
                  <p className="text-sm font-medium text-ink-muted">{edu.dates}</p>
                  <div>
                    <h4 className="font-display text-xl font-semibold text-ink">
                      {edu.school}
                    </h4>
                    <p className="mt-1 text-ink-muted">{edu.degree}</p>
                    {edu.details ? (
                      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                        {edu.details}
                      </p>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
