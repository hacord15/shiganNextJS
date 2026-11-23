# Shigan TechSolutions — Next.js (App Router · TypeScript · Tailwind v4 · SSR)

```bash
npm install
npm run dev            # http://localhost:3000
npm run build && npm start
```

## Pages (all server-rendered per request)

| Route | Modules |
|---|---|
| `/` | full one-page flow: hero, solutions, story, stats, retrofit, impact, fire-safety, calculator, testimonials, cta, newsletter |
| `/retrofit?asset=Trucks` | retrofit, impact, cta |
| `/fire-safety` | fire-safety, cta |
| `/calculator?asset=Buses` | calculator, cta |
| `/about` | story, stats, impact, testimonials, cta |
| `/contact` | cta, newsletter |

## Structure

```
app/
  layout.tsx              fonts, <html>, title template
  not-found.tsx           global 404
  (site)/layout.tsx       shared Header + Footer, `dynamic = "force-dynamic"` (SSR)
  (site)/<route>/page.tsx a page = PageHero + modules (+ metadata)
config/site.ts            site info, nav, footer links
modules/<feature>/        index.tsx (async Server Component) + data.ts (+ client islands)
components/ui/            AppLink, Button, Container, Eyebrow, Icon, Logo, PageHero, Photo
lib/images/               image registry  ← all image paths live here
lib/assets.ts             retrofit asset types + ?asset= parsing
public/images/<group>/    image files, grouped by area
```

Client islands (everything else is server-rendered): `HeroVideo`, `MobileMenu`, `NavLink`, `Calculator`, `NewsletterForm`, `Photo`.

## Images — `lib/images`

Components never hard-code paths:

```ts
// lib/images/manifest.ts
"fire.bess": { src: "/images/fire/bess.jpg", alt: "BESS" },

// anywhere
<Photo id="fire.bess" sizes="380px" />      // component
getImage("fire.bess")                        // → { src, alt }
```
Keys are type-checked (`ImageKey`). Add a file to `public/images/<group>/`, add a line to the manifest. Moving to a CDN = edit `src` there only.

## Add things

```bash
npm run new:module -- pricing            # modules/pricing/{index.tsx,data.ts}
npm run new:page   -- pricing "Pricing"  # app/(site)/pricing/page.tsx  → /pricing
```
Then put `<Pricing />` in a page and add the link to `nav` in `config/site.ts`.

## Other edits
- Copy/content → each module's `data.ts` (async: swap for CMS/API/DB later)
- Nav / footer / contact → `config/site.ts`
- Icons (lucide, open source) → `components/ui/icons.ts`, use `<Icon name="…" />`
- Calculator maths → `modules/calculator/rules.ts`
- Hero video → `public/videos/hero.mp4` (+ optional `hero.webm`)
- Static/ISR instead of per-request SSR → in `app/(site)/layout.tsx` replace `dynamic = "force-dynamic"` with `revalidate = 3600`
