# Kabir Kakkar

**Software Engineer** · Carnegie Mellon University (MISM)

Building reliable backend systems, data platforms, and intelligent applications.

[![Live Site](https://img.shields.io/badge/Live-kabir--kakkar.github.io-0e7c86?style=for-the-badge)](https://kabir-kakkar.github.io)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?style=flat-square&logo=github)](https://kabir-kakkar.github.io)

**[Live portfolio](https://kabir-kakkar.github.io)** · **[LinkedIn](https://www.linkedin.com/in/kabir-kakkar/)** · **[GitHub](https://github.com/kabir-kakkar)**

---

## About this repo

Personal portfolio site for Kabir Kakkar. Built with Next.js (App Router), TypeScript, and Tailwind CSS, exported as a static site and deployed to GitHub Pages. Site copy is kept in sync with the SWE resume.

## What's included

- Full-bleed hero with resume and contact CTAs
- About and skills (languages, backend, data, cloud/DevOps)
- Experience and education timeline
- Selected projects (recommendations, anomaly detection, research)
- Hire Me contact form that emails via Web3Forms

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js App Router + React |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Forms | [Web3Forms](https://web3forms.com) |
| Hosting | GitHub Pages (static export) |
| CI/CD | GitHub Actions (`.github/workflows/deploy.yml`) |

## Getting started

```bash
npm install
cp .env.example .env.local
# Add your Web3Forms access key to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form setup

The Hire Me form sends email through Web3Forms (needed because this is a static export with no server API).

1. Create a free access key at [web3forms.com](https://web3forms.com).
2. Locally: set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local`.
3. Production: add the same value as a repo secret named `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (Settings → Secrets and variables → Actions). The deploy workflow injects it at build time.

## Build and deploy

```bash
npm run build
```

This produces a static site in `out/` (`output: "export"` in `next.config.ts`).

Push to **`master`** to run [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds and deploys to GitHub Pages.

In the repo settings, set Pages source to **GitHub Actions**.

## Editing content

- Copy and structure: [`data/site.ts`](data/site.ts)
- Resume PDF and images: [`public/`](public/)
