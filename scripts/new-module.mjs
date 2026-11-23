#!/usr/bin/env node
// Usage: npm run new:module -- pricing
import { mkdirSync, writeFileSync, existsSync } from "node:fs";

const slug = (process.argv[2] || "").toLowerCase().replace(/[^a-z0-9-]/g, "-");
if (!slug) { console.error("Usage: npm run new:module -- <module-name>"); process.exit(1); }
const Pascal = slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join("");
const dir = `modules/${slug}`;
if (existsSync(dir)) { console.error(`${dir} already exists`); process.exit(1); }
mkdirSync(dir, { recursive: true });

writeFileSync(`${dir}/data.ts`, `export type ${Pascal}Content = { eyebrow: string; title: string; text: string };

/** Replace the body with a CMS / API / DB call when ready. */
export async function get${Pascal}Content(): Promise<${Pascal}Content> {
  return { eyebrow: "${Pascal}", title: "${Pascal} title", text: "Describe this section." };
}
`);
writeFileSync(`${dir}/index.tsx`, `import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { get${Pascal}Content } from "./data";

export default async function ${Pascal}() {
  const c = await get${Pascal}Content();
  return (
    <section id="${slug}" className="py-[60px]">
      <Container>
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="mt-3 mb-2 text-[clamp(30px,4vw,44px)] font-extrabold">{c.title}</h2>
        <p className="text-[14.5px] text-muted">{c.text}</p>
      </Container>
    </section>
  );
}
`);
console.log(`Created ${dir}/ (index.tsx, data.ts)

Use it in any page, e.g. app/(site)/page.tsx:
  import ${Pascal} from "@/modules/${slug}";
  <${Pascal} />`);
