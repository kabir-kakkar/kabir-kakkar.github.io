import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            About
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            {site.about.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
            {site.about.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
