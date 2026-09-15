import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Contact
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Interested in working together?
          </h2>
          <p className="mt-5 max-w-xl text-lg text-ink-muted">
            Reach out for roles, collaborations, or a quick chat about systems,
            data platforms, and product engineering.
          </p>
        </Reveal>

        <div className="mt-10 max-w-2xl">
          <Reveal delayMs={80}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
