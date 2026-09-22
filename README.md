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
titlePt: Um desenho mais tranquilo
date: 2026-09-21
excerpt: A short summary for the journal page.
excerptPt: Um pequeno resumo para a página do diário.
pullQuote: "A sentence worth remembering."
pullQuotePt: "Uma frase da sessão que vale lembrar."
storyPt:
  - Primeiro parágrafo do relato em português.
  - Segundo parágrafo do relato em português.
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
nextTimePt:
  - Incorporar menos ar
  - Começar o desenho mais cedo
images:
  - src: /images/2026-09-21-a-quieter-pour/pour.jpg
    alt: Milk being poured into the espresso
---

Write the story of the session here.
```

The interface is bilingual. Portuguese is the default language and English can be selected from the navigation. New entries keep the English story in the MDX body and the Portuguese version in `storyPt`. Titles, excerpts, quotes, and next steps use the corresponding `*Pt` fields. Brew ratio is calculated automatically.

## Images

Place photographs under `public/images/<entry-name>/` and reference them with paths beginning at `/images/`.

## Validate and build

```bash
npm run check
npm run build
```

The static site is generated in `dist/` and can be deployed directly to Vercel.
