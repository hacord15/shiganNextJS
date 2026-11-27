import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Icon, { type IconName } from "@/components/ui/Icon";
import ImageSlot from "@/components/ui/ImageSlot";
import { site } from "@/config/site";
import type { ImageKey } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";
import Testimonials from "@/modules/testimonials";

export const metadata = pageMetadata("/about");

/* ───────────────────────── CONTENT (edit text here) ───────────────────────── */

type TitlePart = { text: string; accent?: boolean };

const content: {
  hero: { badge: string; title: string[]; text: string; chips: { icon: IconName; label: string[] }[] };
  story: { eyebrow: string; title: TitlePart[]; paragraphs: string[]; image: ImageKey; points: { icon: IconName; title: string; text: string }[] };
  stats: { icon: IconName; value: string; label: string }[];
  whatWeDo: {
    eyebrow: string;
    title: TitlePart[];
    items: { icon: IconName; title: string; text: string; points: string[]; href: string; cta: string }[];
  };
  values: { eyebrow: string; title: TitlePart[]; text: string; items: { icon: IconName; title: string; text: string }[] };
  why: { eyebrow: string; title: TitlePart[]; text: string; points: string[]; certsTitle: string; certs: string[]; certsNote: string };
  how: { eyebrow: string; title: TitlePart[]; steps: { n: string; title: string; text: string }[] };
  cta: { title: string[]; text: string; button: { label: string; href: string } };
} = {
  hero: {
    badge: "About Us",
    title: ["Engineering cleaner mobility", "and safer facilities"],
    text: "Shigan TechSolutions is a specialised engineering company delivering fuel retrofitting and advanced fire protection for commercial, industrial and critical infrastructure.",
    chips: [
      { icon: "wrench", label: ["Retrofitting", "Solutions"] },
      { icon: "flame", label: ["Fire Detection", "& Suppression"] },
      { icon: "shield", label: ["Compliance", "First"] },
    ],
  },

  story: {
    eyebrow: "Our story",
    title: [{ text: "Engineering that makes fuel " }, { text: "cleaner", accent: true }, { text: " and facilities " }, { text: "safer", accent: true }],
    paragraphs: [
      "Shigan TechSolutions is a specialised engineering company focused on retrofitting, fuel transformation and advanced fire detection & suppression systems for commercial, industrial and critical infrastructure.",
      "We help fleet operators move existing diesel assets to cleaner, more economical fuels, and help facility owners protect high-value, high-risk assets with fire systems designed around the hazard — not a generic template.",
    ],
    image: "about.facility",
    points: [
      { icon: "target", title: "Our mission", text: "Enable cleaner mobility and safer operations through innovative, reliable and scalable engineering solutions." },
      { icon: "eye", title: "Our vision", text: "To be a trusted global partner in clean fuel transformation and advanced fire safety solutions." },
    ],
  },

  stats: [
    { icon: "truck", value: "1,000+", label: "Retrofits completed" },
    { icon: "people", value: "100+", label: "Clients served" },
    { icon: "shield", value: "ISO, PESO &", label: "Industry compliant" },
    { icon: "cal", value: "10+ Years", label: "Engineering expertise" },
  ],

  whatWeDo: {
    eyebrow: "What we do",
    title: [{ text: "Two focus areas, " }, { text: "one engineering standard", accent: true }],
    items: [
      {
        icon: "wrench",
        title: "Retrofitting & fuel transformation",
        text: "CNG, LNG and dual-fuel conversion for trucks, buses, vessels and generators — lower running cost and cleaner emissions without replacing the asset.",
        points: ["Survey, installation and calibration", "Support for approvals and registration", "After-sales maintenance and performance support"],
        href: "/retrofit-solutions",
        cta: "Explore retrofitting",
      },
      {
        icon: "flame",
        title: "Fire detection & suppression",
        text: "Specialised protection for BESS, generators and data centres, with detection and suppression engineered together.",
        points: ["Risk assessment and system design", "Early detection and clean suppression", "Integrated alarms and monitoring"],
        href: "/fire-detection",
        cta: "Explore fire protection",
      },
    ],
  },

  values: {
    eyebrow: "Our values",
    title: [{ text: "What we " }, { text: "stand for", accent: true }],
    text: "The principles behind every project we deliver.",
    items: [
      { icon: "shield", title: "Safety first", text: "Safety drives every design decision, for the people on site and the asset itself." },
      { icon: "wrench", title: "Engineering integrity", text: "Solutions are specified for the real hazard and duty — never over- or under-sold." },
      { icon: "clipboardCheck", title: "Compliance", text: "Work follows applicable regulations and recognised standards, with documentation to match." },
      { icon: "clock", title: "Reliability", text: "Systems are built to be there when needed, backed by testing and ongoing support." },
      { icon: "leaf", title: "Sustainability", text: "Cleaner fuel and safer infrastructure help operators cut emissions and risk together." },
      { icon: "people", title: "Partnership", text: "We work as an extension of your team, from the first survey to long-term service." },
    ],
  },

  why: {
    eyebrow: "Why Shigan",
    title: [{ text: "Why customers " }, { text: "choose us", accent: true }],
    text: "A focused team that treats retrofitting and fire protection as engineering problems, not product sales.",
    points: [
      "Specialist focus on two high-stakes disciplines",
      "Site survey and risk assessment before any design",
      "Certified components and documented compliance",
      "Single partner from installation to after-sales service",
      "Experience across fleets, energy storage, generators and data centres",
    ],
    certsTitle: "Certifications & compliance",
    certs: ["ISO 9001", "ISO 14001", "ISO 45001", "PESO"],
    certsNote: "Certificates and approvals available on request.",
  },

  how: {
    eyebrow: "How we work",
    title: [{ text: "From first survey to " }, { text: "long-term support", accent: true }],
    steps: [
      { n: "01", title: "Assess", text: "Understand the asset, its duty and the risks or savings at stake." },
      { n: "02", title: "Engineer", text: "Design the retrofit or protection system to the right standards." },
      { n: "03", title: "Deliver", text: "Install, test and commission with certified components." },
      { n: "04", title: "Support", text: "Maintain, monitor and improve performance over the asset's life." },
    ],
  },

  cta: {
    title: ["Let's build something", "cleaner and safer"],
    text: "Tell us about your fleet or facility and our engineers will recommend the right solution.",
    button: { label: "Talk to Our Team", href: "/contact" },
  },
};

/* ───────────────────────── HELPERS ───────────────────────── */

/** Heading with some words in brand red. */
function AccentTitle({ parts }: { parts: TitlePart[] }) {
  return (
    <>
      {parts.map((p, i) => (
        <span key={i} className={p.accent ? "text-brand" : undefined}>
          {p.text}
        </span>
      ))}
    </>
  );
}

/** Red circular check used in lists. */
function Tick() {
  return (
    <span className="mt-0.5 grid size-[18px] flex-none place-items-center rounded-full bg-brand text-[11px] text-white">
      <Icon name="check" />
    </span>
  );
}

/* ───────────────────────── PAGE ───────────────────────── */

export default function AboutPage() {
  const { hero, story, stats, whatWeDo, values, why, how, cta } = content;

  return (
    <>
      {/* 1 ─ HERO */}
      <section className="relative overflow-hidden bg-[linear-gradient(100deg,#0a111d_0%,#141f2e_55%,#26303d_100%)] text-white">
        <div className="absolute top-0 right-0 h-full w-[26%] bg-brand/85 [clip-path:polygon(60%_0,100%_0,100%_100%,10%_100%)] max-[900px]:hidden" aria-hidden="true" />
        <div className="absolute top-0 right-[18%] h-full w-[6%] bg-brand/25 [clip-path:polygon(60%_0,100%_0,40%_100%,0_100%)] max-[900px]:hidden" aria-hidden="true" />
        <Container className="relative z-[2] py-16 max-[900px]:py-11">
          <div className="max-w-[640px]">
            <span className="inline-block bg-brand px-2.5 py-1 text-[12px] font-extrabold tracking-[.06em] text-white uppercase">{hero.badge}</span>
            <h1 className="mt-4 mb-3 text-[clamp(32px,4.6vw,56px)] leading-[1.06] font-extrabold tracking-[-.03em] text-white">
              {hero.title[0]}
              <br />
              {hero.title[1]}
            </h1>
            <p className="max-w-[540px] text-[16px] leading-[1.55] text-white/90">{hero.text}</p>
            <div className="mt-7 flex flex-wrap items-center gap-y-4">
              {hero.chips.map((c) => (
                <div key={c.label.join(" ")} className="flex items-center gap-3 border-l border-white/25 px-5 first:border-0 first:pl-0">
                  <Icon name={c.icon} className="text-[32px] text-[#ff8a95]" />
                  <span className="text-[15px] leading-[1.2] font-semibold">
                    {c.label[0]}
                    <br />
                    {c.label[1]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 2 ─ OUR STORY + MISSION / VISION */}
      <section id="story" className="scroll-mt-24 py-14">
        <Container className="grid grid-cols-[1fr_1.15fr] items-center gap-10 max-[900px]:grid-cols-1">
          <ImageSlot
            id={story.image}
            sizes="(max-width: 900px) 100vw, 560px"
            icon="shield"
            className="min-h-[340px] bg-[linear-gradient(180deg,#b9d4f0,#e4eefb_55%,#9aa6b5_56%,#6f7a8b)]"
            iconClassName="text-[110px] text-white/60"
          />
          <div>
            <Eyebrow>{story.eyebrow}</Eyebrow>
            <h2 className="mt-3 mb-4 text-[clamp(26px,3.2vw,38px)] leading-[1.14] font-extrabold">
              <AccentTitle parts={story.title} />
            </h2>
            {story.paragraphs.map((p) => (
              <p key={p} className="mb-3 text-[14.5px] leading-[1.65] text-muted">
                {p}
              </p>
            ))}
            <div className="mt-5 grid grid-cols-2 gap-4 max-[520px]:grid-cols-1">
              {story.points.map((p) => (
                <div key={p.title} className="flex gap-3 rounded-card border border-line bg-white p-4 shadow-card">
                  <Icon name={p.icon} className="mt-0.5 text-[30px] text-brand" />
                  <div>
                    <b className="mb-0.5 block text-[14.5px] text-navy">{p.title}</b>
                    <span className="text-[12.5px] leading-[1.5] text-muted">{p.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3 ─ STATS BAND */}
      <section className="bg-forest bg-[image:radial-gradient(circle_at_80%_20%,#1c6b49_0,transparent_55%)] text-white">
        <Container className="grid grid-cols-4 gap-5 py-10 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4 border-l border-white/[.18] pl-5">
              <Icon name={s.icon} className="text-[36px] text-[#6ee79a]" />
              <div>
                <b className="block text-[26px] leading-none font-extrabold text-white">{s.value}</b>
                <span className="text-[12.5px] text-[#c7ddd0]">{s.label}</span>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* 4 ─ WHAT WE DO */}
      <section className="py-14">
        <Container>
          <Eyebrow>{whatWeDo.eyebrow}</Eyebrow>
          <h2 className="mt-3 mb-8 text-[clamp(28px,3.4vw,40px)] leading-[1.12] font-extrabold">
            <AccentTitle parts={whatWeDo.title} />
          </h2>
          <div className="grid grid-cols-2 gap-5 max-[900px]:grid-cols-1">
            {whatWeDo.items.map((w) => (
              <div key={w.title} className="flex flex-col rounded-2xl border border-line bg-white p-7 shadow-card">
                <span className="mb-4 grid size-14 place-items-center rounded-full bg-brand-soft text-[28px] text-brand">
                  <Icon name={w.icon} />
                </span>
                <h3 className="mb-2 text-[22px]">{w.title}</h3>
                <p className="mb-4 text-[14px] leading-[1.6] text-muted">{w.text}</p>
                <ul className="mb-6 grid gap-2.5">
                  {w.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-[13.5px] leading-[1.4]">
                      <Tick />
                      {p}
                    </li>
                  ))}
                </ul>
                <Button href={w.href} variant="lineRed" size="sm" className="mt-auto self-start">
                  {w.cta} <Icon name="arrow" />
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5 ─ CORE VALUES */}
      <section className="bg-[#f6f7fa] py-14">
        <Container>
          <div className="mb-8 text-center">
            <Eyebrow>{values.eyebrow}</Eyebrow>
            <h2 className="mt-3 mb-2 text-[clamp(28px,3.4vw,40px)] font-extrabold">
              <AccentTitle parts={values.title} />
            </h2>
            <p className="mx-auto max-w-[480px] text-[14.5px] text-muted">{values.text}</p>
          </div>
          <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1">
            {values.items.map((v) => (
              <div key={v.title} className="rounded-card border border-line bg-white p-6 shadow-card">
                <span className="mb-3 grid size-12 place-items-center rounded-full bg-brand-soft text-[24px] text-brand">
                  <Icon name={v.icon} />
                </span>
                <h3 className="mb-1.5 text-[17px]">{v.title}</h3>
                <p className="text-[13.5px] leading-[1.55] text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6 ─ WHY CHOOSE US + CERTIFICATIONS */}
      <section className="py-14">
        <Container className="grid grid-cols-[1.2fr_1fr] items-center gap-10 max-[900px]:grid-cols-1">
          <div>
            <Eyebrow>{why.eyebrow}</Eyebrow>
            <h2 className="mt-3 mb-3 text-[clamp(28px,3.4vw,40px)] leading-[1.12] font-extrabold">
              <AccentTitle parts={why.title} />
            </h2>
            <p className="mb-5 text-[14.5px] leading-[1.6] text-muted">{why.text}</p>
            <ul className="grid gap-3">
              {why.points.map((p) => (
                <li key={p} className="flex gap-3 text-[14px] leading-[1.45]">
                  <Tick />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[#1e2a3a] p-7 text-white">
            <div className="mb-5 flex items-center gap-3">
              <Icon name="clipboardCheck" className="text-[40px] text-brand" />
              <h3 className="text-[20px] text-white">{why.certsTitle}</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {why.certs.map((c) => (
                <div key={c} className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-4 py-3">
                  <span className="grid size-[26px] flex-none place-items-center rounded-full bg-[#2ecc71] text-[16px] text-white">
                    <Icon name="check" />
                  </span>
                  <span className="text-[14px] font-bold">{c}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[12.5px] text-white/70">{why.certsNote}</p>
          </div>
        </Container>
      </section>

      {/* 7 ─ HOW WE WORK */}
      <section className="bg-[linear-gradient(#fff,#fafafb)] py-14">
        <Container>
          <Eyebrow>{how.eyebrow}</Eyebrow>
          <h2 className="mt-3 mb-8 text-[clamp(28px,3.4vw,40px)] leading-[1.12] font-extrabold">
            <AccentTitle parts={how.title} />
          </h2>
          <ol className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1">
            {how.steps.map((s) => (
              <li key={s.n} className="rounded-card border border-line bg-white p-5 shadow-card">
                <span className="text-[30px] leading-none font-extrabold text-brand">{s.n}</span>
                <b className="mt-3 mb-1 block text-[16px] text-navy">{s.title}</b>
                <span className="text-[13px] leading-[1.5] text-muted">{s.text}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 8 ─ TESTIMONIALS (shared module) */}
      <Testimonials />

      {/* 9 ─ VISIT / CONTACT STRIP */}
      <section className="py-8">
        <Container>
          <div className="grid grid-cols-3 gap-4 rounded-2xl border border-line bg-white p-6 shadow-card max-[900px]:grid-cols-1">
            {[
              { icon: "pin" as IconName, label: "Corporate office", value: site.address },
              { icon: "phone" as IconName, label: "Call us", value: site.phone },
              { icon: "mail" as IconName, label: "Email us", value: site.email },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-3">
                <span className="grid size-11 flex-none place-items-center rounded-full bg-brand-soft text-[20px] text-brand">
                  <Icon name={c.icon} />
                </span>
                <div>
                  <b className="block text-[13px] text-navy">{c.label}</b>
                  <span className="text-[13.5px] break-words text-muted">{c.value}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 10 ─ CTA BAND */}
      <section className="pt-4 pb-14">
        <Container>
          <div className="flex flex-wrap items-center gap-6 rounded-[22px] bg-[linear-gradient(100deg,#b80416,#e1061c_60%,#c4051a)] px-8 py-7 text-white shadow-[0_18px_40px_rgba(225,6,28,.28)] max-[900px]:justify-center max-[900px]:text-center">
            <div className="flex items-center gap-6 border-r border-white/30 pr-6 max-[900px]:border-0 max-[900px]:pr-0">
              <Icon name="leaf" className="text-[58px] text-white/90" />
              <h2 className="text-[clamp(24px,2.6vw,32px)] leading-[1.15] font-extrabold text-white">
                {cta.title[0]}
                <br />
                {cta.title[1]}
              </h2>
            </div>
            <p className="max-w-[360px] flex-1 text-[14.5px] leading-[1.5] text-white/95">{cta.text}</p>
            <Button href={cta.button.href} variant="white" size="xl" className="!px-8 !text-[16px] font-extrabold">
              {cta.button.label} <Icon name="arrow" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}