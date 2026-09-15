import Image from "next/image";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={site.photo}
          alt=""
          fill
          priority
          className="animate-slow-zoom object-cover object-[center_20%]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-overlay)" }}
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-32">
        <p className="animate-fade-up font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl">
          {site.name}
        </p>
        <h1
          className="animate-fade-up mt-5 max-w-xl text-xl font-medium leading-snug text-white/95 sm:text-2xl md:text-3xl"
          style={{ animationDelay: "120ms" }}
        >
          {site.tagline}
        </h1>
        <p
          className="animate-fade-up mt-4 max-w-md text-base text-white/75 md:text-lg"
          style={{ animationDelay: "220ms" }}
        >
          {site.headlineSupport}
        </p>
        <div
          className="animate-fade-up mt-8 flex flex-wrap gap-3"
          style={{ animationDelay: "320ms" }}
        >
          <a
            href={site.resumePath}
            download
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white/90"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
