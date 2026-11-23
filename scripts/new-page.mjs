#!/usr/bin/env node
// Usage: npm run new:page -- pricing "Pricing"
import { mkdirSync, writeFileSync, existsSync } from "node:fs";

const slug = (process.argv[2] || "").toLowerCase().replace(/[^a-z0-9-]/g, "-");
const title = process.argv[3] || slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
if (!slug) { console.error('Usage: npm run new:page -- <slug> ["Title"]'); process.exit(1); }
const dir = `app/(site)/${slug}`;
if (existsSync(dir)) { console.error(`${dir} already exists`); process.exit(1); }
mkdirSync(dir, { recursive: true });
const Pascal = slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join("");

writeFileSync(`${dir}/page.tsx`, `import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CallToAction from "@/modules/cta";

export const metadata: Metadata = { title: "${title}", description: "" };

export default function ${Pascal}Page() {
  return (
    <>
      <PageHero title="${title}" />
      {/* add modules here */}
      <CallToAction />
    </>
  );
}
`);
console.log(`Created ${dir}/page.tsx  →  /${slug}

Add it to the header: config/site.ts → nav: { label: "${title}", href: "/${slug}" }`);
