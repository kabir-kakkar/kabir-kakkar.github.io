import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Skills
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Technologies I work with
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {site.skills.map((group, index) => (
            <Reveal key={group.category} delayMs={index * 80}>
              <h3 className="font-display text-lg font-semibold text-ink">
                {group.category}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-line pb-2 text-ink-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
