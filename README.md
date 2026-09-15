# Kabir Kakkar — Portfolio

Personal portfolio site built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Content is synced from the SWE resume and deployed as a static export to GitHub Pages.

**Live:** [https://kabir-kakkar.github.io](https://kabir-kakkar.github.io)

## Develop

```bash
npm install
cp .env.example .env.local
# Add your Web3Forms access key to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form (Web3Forms)

The Hire Me / Contact form emails you through [Web3Forms](https://web3forms.com) (required for static GitHub Pages — no server API).

1. Create a free access key at [web3forms.com](https://web3forms.com) using `kabir.kakkar.cmu@gmail.com`.
2. Locally: set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local` (see `.env.example`).
3. Production: add the same value as a repository secret named `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (Settings → Secrets and variables → Actions). The deploy workflow injects it at build time.

## Build

```bash
npm run build
```

Produces a static site in `out/` (`output: "export"` in `next.config.ts`).

## Deploy

Push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the static export and deploys it to GitHub Pages.

In the repo settings, set Pages source to **GitHub Actions**.

## Content

Edit typed site copy in [`data/site.ts`](data/site.ts). Resume PDF and images live under [`public/`](public/).
