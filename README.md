# Espresso Diaries

A warm, minimal personal journal for espresso extractions and latte art practice. Built with Astro, TypeScript, MDX, Content Collections, and plain CSS; it generates only static files.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

## Create an entry

Add an `.mdx` file to `src/content/posts/`. Its filename becomes the URL.

```mdx
---
title: A quieter pour
date: 2026-09-21
excerpt: A short summary for the journal page.
pullQuote: "A sentence worth remembering."
heroImage: /images/2026-09-21-a-quieter-pour/hero.jpg
coffee:
  beans: Ethiopia Guji
  roaster: Example Roaster
  origin: Guji, Ethiopia
  dose: 18
  yield: 38
  extractionTime: 27
  grind: "8"
milk:
  amount: 145
  type: Whole milk
  temperature: 62
equipment:
  machine: My machine
  grinder: My grinder
latteArt:
  pattern: Tulip
  notes: The second stack drifted slightly.
nextTime:
  - Add less air
  - Start the design sooner
images:
  - src: /images/2026-09-21-a-quieter-pour/pour.jpg
    alt: Milk being poured into the espresso
---

Write the story of the session here.
```

Only the title, date, excerpt, and essential coffee fields are required. Brew ratio is calculated automatically.

## Images

Place photographs under `public/images/<entry-name>/` and reference them with paths beginning at `/images/`.

## Validate and build

```bash
npm run check
npm run build
```

The static site is generated in `dist/` and can be deployed directly to Vercel.
