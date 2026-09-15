import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-xl font-semibold text-ink">
            {site.name}
          </p>
          <p className="mt-2 text-sm text-ink-muted">{site.title}</p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-ink-muted md:items-end">
          <a
            href={`mailto:${site.email}`}
            className="transition hover:text-accent"
          >
            {site.email}
          </a>
          <a href={site.phoneHref} className="transition hover:text-accent">
            {site.phone}
          </a>
          <div className="mt-2 flex gap-5">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink transition hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink transition hover:text-accent"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-ink-muted/80">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
