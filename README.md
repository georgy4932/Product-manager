# Emmanuela Odoh — Product Management Portfolio

A production-ready portfolio website built with Next.js 15 (App Router), TypeScript, and Tailwind CSS, showcasing product management work completed during HNG Internship Cohort 14.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/         # App Router pages, layout, and global styles
├── components/  # Section components (Hero, About, Experience, etc.) and shared UI primitives
├── data/        # portfolio.ts — single source of truth for all site content
├── lib/         # Shared utilities
└── types/       # Shared TypeScript interfaces
```

All copy, metrics, work samples, case studies, and links live in `src/data/portfolio.ts`, separate from the UI components.

## Updating the Hero Photo

The Hero section currently uses a styled placeholder. To use a real headshot:

1. Add the image to `public/images/profile/headshot.jpg`
2. In `src/components/Hero.tsx`, replace `<AvatarPlaceholder />` with a Next.js `<Image>` pointing at `personal.profileImage` (already defined in `src/data/portfolio.ts`)

## Build

```bash
npm run build
npm run lint
```

## Deploy

This project is ready to deploy on [Vercel](https://vercel.com/new).
