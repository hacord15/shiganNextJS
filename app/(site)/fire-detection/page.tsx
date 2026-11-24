import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Icon, { type IconName } from "@/components/ui/Icon";
import ImageSlot from "@/components/ui/ImageSlot";
import type { ImageKey } from "@/lib/images";

export const metadata: Metadata = {
  title: "Fire Detection & Suppression Systems",
  description:
    "Specialised fire detection and suppression for battery energy storage (BESS), generators and data centres, designed to NFPA and IS standards.",
};

/* ───────────────────────── CONTENT (edit text here) ───────────────────────── */

type TitlePart = { text: string; accent?: boolean };

const content: {
  hero: { badge: string; title: string[]; text: string; image: ImageKey; chips: { icon: IconName; label: string[] }[]; primary: { label: string; href: string }; secondary: { label: string; href: string } };
  why: { eyebrow: string; title: TitlePart[]; text: string; callout: string; reasons: { icon: IconName; title: string; text: string }[] };
  apps: { eyebrow: string; title: TitlePart[]; text: string; items: { id: string; icon: IconName; image: ImageKey; placeholder: string; title: string; text: string; risks: string[]; protection: string[]; href: string; }[] };
  approach: {
    eyebrow: string;
    title: TitlePart[];
    text: string;
    steps: { n: string; title: string; text: string }[];
    detection: { title: string; text: string; points: string[] };
    suppression: { title: string; text: string; points: string[] };
    integration: { title: string; text: string; chips: string[] };
  };
  standards: { eyebrow: string; title: TitlePart[]; text: string; items: { code: string; name: string; scope: string }[]; certs: { label: string; items: string[] }; note: string };
  faq: { eyebrow: string; title: string[]; text: string; items: { q: string; a: string }[] };
  cta: { title: string[]; text: string; button: { label: string; href: string } };
} = {
  hero: {
    badge: "Fire Detection & Suppression",
    title: ["Fire protection built for", "high-risk, high-value assets"],
    text: "Early detection and fast, clean suppression engineered for battery storage, generators and data centres — where a generic system isn't enough.",
    image: "fire.extinguishers",
    chips: [
      { icon: "bell", label: ["Early", "Detection"] },
      { icon: "flame", label: ["Fast", "Suppression"] },
      { icon: "shield", label: ["Standards", "Compliant"] },
    ],
    primary: { label: "Get a Fire Safety Assessment", href: "/contact" },
    secondary: { label: "See applications", href: "#applications" },
  },

  why: {
    eyebrow: "Why it matters",
    title: [{ text: "Why " }, { text: "specialised", accent: true }, { text: " fire protection matters" }],
    text: "Battery, fuel and electrical equipment don't burn — or get damaged by fire-fighting — the way ordinary buildings do. Protection has to be designed around the specific hazard, not copied from a general template.",
    callout: "The right system limits damage, downtime and risk to people — and helps the asset stay insurable and compliant.",
    reasons: [
      { icon: "flame", title: "Different fire behaviour", text: "Battery, fuel and electrical fires can spread quickly and re-ignite in ways a general-purpose system isn't designed to handle." },
      { icon: "monitor", title: "Standard systems can do harm", text: "Water can damage IT and electrical equipment, and sprinkler-only protection may be unsuitable for these hazards." },
      { icon: "clock", title: "Seconds matter", text: "Early warning gives time to isolate power, alert people and stop a small event becoming a major loss." },
      { icon: "clipboardCheck", title: "Compliance & insurance", text: "Authorities and insurers expect protection designed to recognised standards for the specific risk." },
    ],
  },

  apps: {
    eyebrow: "Applications",
    title: [{ text: "Protection for " }, { text: "critical environments", accent: true }],
    text: "One approach, tailored to the hazard in each environment.",
    items: [
  {
    id: "bess",
    icon: "bolt",
    image: "fire.bess",
    placeholder: "ph-bess",
    title: "BESS",
    text: "Battery energy storage systems need protection that responds before a single-cell fault becomes a rack-level event.",
    risks: ["Thermal runaway and cell-to-cell spread", "Off-gassing before ignition", "Re-ignition after suppression"],
    protection: ["Early gas / smoke detection at enclosure and rack level", "Suppression matched to the enclosure and battery chemistry", "Integration with BMS, alarms and shutdown"],
    href: "/fire-protection/bess", // ✅ route
  },
  {
    id: "generators",
    icon: "flame",
    image: "fire.generator",
    placeholder: "ph-gen",
    title: "Generator systems",
    text: "Standby and prime-power sets combine fuel, heat and electrical load — often in unattended enclosures.",
    risks: ["Fuel leaks and spray fires", "Overheating and exhaust hot-spots", "Electrical faults in the canopy"],
    protection: ["Heat, flame and linear detection suited to the enclosure", "Automatic suppression inside the canopy or room", "Fuel isolation and auto-shutdown on alarm"],
    href: "/fire-protection/generators", // ✅ route
  },
  {
    id: "data-centres",
    icon: "monitor",
    image: "fire.data-centre",
    placeholder: "ph-dc",
    title: "Data centres",
    text: "Uptime and data are the real assets — so detection must be very early and suppression must not harm equipment.",
    risks: ["Overheated cabling and power faults", "High-value, water-sensitive IT", "False discharges causing downtime"],
    protection: ["Very early smoke detection (aspirating / multi-sensor)", "Clean-agent gas suppression — no water damage", "Zoned, cross-checked detection to avoid false trips"],
    href: "/fire-protection/data-centres", // ✅ route
  },
],
  },

  approach: {
    eyebrow: "Our approach",
    title: [{ text: "Detection + " }, { text: "suppression", accent: true }, { text: ", engineered together" }],
    text: "Detection and suppression are designed as one system, from risk assessment through to monitoring.",
    steps: [
      { n: "01", title: "Risk assessment", text: "Find what can go wrong and how it would spread." },
      { n: "02", title: "Detection", text: "Early, reliable and zoned to the hazard." },
      { n: "03", title: "Suppression", text: "Clean, fast agents chosen for the asset." },
      { n: "04", title: "Monitoring", text: "Alarms and alerts integrated with your operations." },
    ],
    detection: {
      title: "Detection",
      text: "Sensing matched to how each hazard actually develops.",
      points: [
        "Aspirating and multi-sensor smoke detection",
        "Heat and linear heat detection cable",
        "Flame detection for fuel hazards",
        "Gas / off-gas detection for battery enclosures",
      ],
    },
    suppression: {
      title: "Suppression",
      text: "Agents selected for the asset, the space and the people in it.",
      points: [
        "Clean-agent and inert-gas systems",
        "Water-mist where it suits the hazard",
        "Aerosol and enclosure-specific options",
        "Portable extinguishers and first-response kit",
      ],
    },
    integration: {
      title: "Integrated control & monitoring",
      text: "One control panel ties detection, suppression, alarms and shutdowns together, with alerts routed to the people who need them.",
      chips: ["Alarm & notification", "Auto shutdown / isolation", "Remote alerts"],
    },
  },

  standards: {
    eyebrow: "Standards",
    title: [{ text: "Built to " }, { text: "recognised standards", accent: true }],
    text: "Designs follow the relevant international and Indian codes for the hazard in question.",
    items: [
      { code: "NFPA 72", name: "Fire alarm & signaling", scope: "Detection, alarm and notification" },
      { code: "NFPA 2001", name: "Clean agent systems", scope: "Gas suppression for data and electrical rooms" },
      { code: "NFPA 855", name: "Stationary energy storage", scope: "Installation of BESS" },
      { code: "NFPA 75", name: "Protection of IT equipment", scope: "Data centres and IT rooms" },
      { code: "NFPA 110", name: "Emergency & standby power", scope: "Generator installations" },
      { code: "IS 2189", name: "Fire detection & alarm (BIS)", scope: "Selection, installation and maintenance" },
    ],
    certs: { label: "Management systems", items: ["ISO 9001", "ISO 14001", "ISO 45001"] },
    note: "Applicable standards depend on the site, the asset and local authority requirements — we confirm them during the risk assessment.",
  },

  faq: {
    eyebrow: "FAQs",
    title: ["Fire Protection", "Questions Answered"],
    text: "Quick answers on how specialised protection works.",
    items: [
      { q: "Why isn't a normal sprinkler system enough for BESS or a data centre?", a: "These hazards behave differently from ordinary building fires, and water can damage electrical and IT equipment. The right protection depends on the asset, so we design from a risk assessment rather than a standard template." },
      { q: "What is the difference between detection and suppression?", a: "Detection senses a developing fire early — smoke, heat, flame or gas — and raises the alarm. Suppression is what acts on the fire. Both are designed together so detection triggers the right response at the right time." },
      { q: "Can you add fire protection to an existing facility?", a: "Yes. After a site survey we can retrofit detection and suppression into existing BESS, generator and data-centre spaces, working around live operations where required." },
      { q: "Which standards do your systems follow?", a: "We design to the relevant NFPA codes and Indian (BIS / IS) standards for the specific hazard, and confirm what applies to your site during the assessment." },
      { q: "Do you provide maintenance after installation?", a: "We offer periodic inspection, testing and maintenance support so the system stays ready and compliant over its life." },
    ],
  },

  cta: {
    title: ["Protect your critical", "assets with confidence"],
    text: "Tell us about your BESS, generator or data-centre site and we'll recommend the right detection and suppression approach.",
    button: { label: "Talk to a Fire Safety Expert", href: "/contact" },
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

export default function FireDetectionPage() {
  const { hero, why, apps, approach, standards, faq, cta } = content;

  return (
    <>
      {/* 1 ─ HERO */}
      <section className="relative overflow-hidden bg-[linear-gradient(100deg,#0b1432_0%,#1a1030_55%,#3a0d16_100%)] text-white">
        <div className="hero-media absolute inset-y-0 right-0 w-[52%] max-[900px]:w-full max-[900px]:opacity-35" aria-hidden="true">
          <ImageSlot
            id={hero.image}
            sizes="(max-width: 900px) 100vw, 620px"
            icon="flame"
            priority
            className="absolute inset-0 !rounded-none bg-[radial-gradient(circle_at_70%_30%,#ffb3b3,#d71929_50%,#7a0a14)]"
            iconClassName="text-[140px] text-white/20"
          />
        </div>
        <Container className="relative z-[2] py-14 max-[900px]:py-10">
          <div className="max-w-[580px]">
            <span className="inline-block bg-brand px-2.5 py-1 text-[12px] font-extrabold tracking-[.06em] text-white uppercase">{hero.badge}</span>
            <h1 className="mt-4 mb-3 text-[clamp(32px,4.4vw,54px)] leading-[1.06] font-extrabold tracking-[-.03em] text-white">
              {hero.title[0]}
              <br />
              {hero.title[1]}
            </h1>
            <p className="max-w-[480px] text-[16px] leading-[1.5] text-white/90">{hero.text}</p>
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
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={hero.primary.href} size="hero">
                {hero.primary.label} <Icon name="arrow" />
              </Button>
              <Button href={hero.secondary.href} variant="line" size="hero">
                {hero.secondary.label}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2 ─ WHY SPECIALISED FIRE PROTECTION MATTERS */}
      <section className="py-14">
        <Container className="grid grid-cols-[1fr_1.4fr] items-start gap-10 max-[1020px]:grid-cols-1">
          <div>
            <Eyebrow>{why.eyebrow}</Eyebrow>
            <h2 className="mt-3 mb-4 text-[clamp(28px,3.4vw,40px)] leading-[1.12] font-extrabold">
              <AccentTitle parts={why.title} />
            </h2>
            <p className="mb-5 text-[14.5px] leading-[1.65] text-muted">{why.text}</p>
            <p className="rounded-r-xl border-l-[3px] border-brand bg-brand-soft px-4 py-3 text-[14px] leading-[1.55] font-semibold text-navy">{why.callout}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 max-[520px]:grid-cols-1">
            {why.reasons.map((r) => (
              <div key={r.title} className="rounded-card border border-line bg-white p-5 shadow-card">
                <span className="mb-3 grid size-11 place-items-center rounded-full bg-brand-soft text-[22px] text-brand">
                  <Icon name={r.icon} />
                </span>
                <h3 className="mb-1.5 text-[16px]">{r.title}</h3>
                <p className="text-[13px] leading-[1.55] text-muted">{r.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3 ─ APPLICATION CARDS: BESS · GENERATOR · DATA CENTRE */}
     <section id="applications" className="scroll-mt-24 bg-[linear-gradient(#fff,#fafafb)] py-14">
  <Container>
    <Eyebrow>{apps.eyebrow}</Eyebrow>
    <h2 className="mt-3 mb-2 text-[clamp(28px,3.4vw,40px)] font-extrabold">
      <AccentTitle parts={apps.title} />
    </h2>
    <p className="mb-8 text-[14.5px] text-muted">{apps.text}</p>

    <div className="grid grid-cols-3 gap-5 max-[1020px]:grid-cols-1">
      {apps.items.map((a) => (
        <a
          key={a.id}
          id={a.id}
          href={a.href}
          className="group relative block scroll-mt-24 overflow-hidden rounded-card border border-line bg-white shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:outline-none"
        >
          <ImageSlot
            id={a.image}
            sizes="(max-width: 1020px) 100vw, 380px"
            icon={a.icon}
            className={`${a.placeholder} !rounded-none transition-transform duration-500 ease-out group-hover:scale-[1.04]`}
          />

          <div className="absolute top-32 left-5 z-[3] grid size-[42px] place-items-center rounded-[10px] bg-brand text-[22px] text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <Icon name={a.icon} />
          </div>

          <div className="px-5 pt-[30px] pb-6">
            <h3 className="mb-1.5 text-[20px] transition-colors duration-300 group-hover:text-brand">
              {a.title}
            </h3>
            <p className="mb-4 text-[13.5px] leading-[1.55] text-muted">{a.text}</p>

            <h4 className="mb-2 text-[11px] font-extrabold tracking-[.1em] text-brand uppercase">
              Key risks
            </h4>
            <ul className="mb-4 grid gap-1.5">
              {a.risks.map((r) => (
                <li key={r} className="flex gap-2 text-[13px] leading-[1.4] text-ink">
                  <span className="mt-[7px] size-1.5 flex-none rounded-full bg-brand" />
                  {r}
                </li>
              ))}
            </ul>

            <h4 className="mb-2 text-[11px] font-extrabold tracking-[.1em] text-leaf uppercase">
              Our protection
            </h4>
            <ul className="grid gap-2">
              {a.protection.map((p) => (
                <li key={p} className="flex gap-2 text-[13px] leading-[1.4] text-ink">
                  <Tick />
                  {p}
                </li>
              ))}
            </ul>

            {/* Hover-revealed link hint */}
            <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              Learn more
              <Icon name="arrow" className="text-[14px] transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>

          {/* subtle inner ring on hover */}
          <span className="pointer-events-none absolute inset-0 rounded-card ring-1 ring-inset ring-transparent transition-colors duration-300 group-hover:ring-brand/20" />
        </a>
      ))}
    </div>
  </Container>
</section>

      {/* 4 ─ DETECTION + SUPPRESSION APPROACH */}
      <section className="py-14">
        <Container>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-x-10 gap-y-3">
            <div>
              <Eyebrow>{approach.eyebrow}</Eyebrow>
              <h2 className="mt-3 text-[clamp(28px,3.4vw,40px)] leading-[1.12] font-extrabold">
                <AccentTitle parts={approach.title} />
              </h2>
            </div>
            <p className="max-w-[360px] border-l-2 border-brand pl-4 text-[14px] text-ink">{approach.text}</p>
          </div>

          <ol className="mb-6 grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1">
            {approach.steps.map((s) => (
              <li key={s.n} className="flex items-start gap-3 rounded-card border border-line bg-white p-5 shadow-card">
                <span className="text-[24px] leading-none font-extrabold text-brand">{s.n}</span>
                <div>
                  <b className="block text-[14.5px] text-navy">{s.title}</b>
                  <span className="text-[12.5px] leading-[1.45] text-muted">{s.text}</span>
                </div>
              </li>
            ))}
          </ol>

          <div className="grid grid-cols-2 gap-5 max-[900px]:grid-cols-1">
            {[
              { ...approach.detection, icon: "eye" as IconName },
              { ...approach.suppression, icon: "flame" as IconName },
            ].map((p) => (
              <div key={p.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
                <div className="mb-3 flex items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-full bg-brand-soft text-[26px] text-brand">
                    <Icon name={p.icon} />
                  </span>
                  <div>
                    <h3 className="text-[20px]">{p.title}</h3>
                    <p className="text-[13px] text-muted">{p.text}</p>
                  </div>
                </div>
                <ul className="grid grid-cols-1 gap-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-[13.5px] leading-[1.4]">
                      <Tick />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-4 rounded-2xl bg-[#1e2a3a] px-7 py-5 text-white">
            <Icon name="clipboardCheck" className="text-[44px] text-brand" />
            <div className="min-w-[220px] flex-1">
              <h3 className="mb-1 text-[18px] text-white">{approach.integration.title}</h3>
              <p className="text-[13px] leading-[1.5] text-white/85">{approach.integration.text}</p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {approach.integration.chips.map((c) => (
                <span key={c} className="rounded-full border border-white/25 px-3.5 py-1.5 text-[12px] font-bold">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5 ─ STANDARDS (NFPA / IS etc.) */}
      <section className="bg-[#f6f7fa] py-14">
        <Container>
          <div className="mb-8 text-center">
            <Eyebrow>{standards.eyebrow}</Eyebrow>
            <h2 className="mt-3 mb-2 text-[clamp(28px,3.4vw,40px)] font-extrabold">
              <AccentTitle parts={standards.title} />
            </h2>
            <p className="mx-auto max-w-[520px] text-[14.5px] text-muted">{standards.text}</p>
          </div>
          <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1">
            {standards.items.map((s) => (
              <div key={s.code} className="rounded-card border border-line bg-white p-5 shadow-card">
                <b className="block text-[22px] leading-none font-extrabold text-brand">{s.code}</b>
                <h3 className="mt-2 mb-1 text-[15px]">{s.name}</h3>
                <p className="text-[13px] text-muted">{s.scope}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[13px] font-semibold text-navy">
            <span>{standards.certs.label}:</span>
            {standards.certs.items.map((c) => (
              <span key={c} className="rounded-lg border-[1.5px] border-[#cdd2dd] bg-white px-5 py-2 text-[13px] font-extrabold">
                {c}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-5 max-w-[620px] text-center text-[12.5px] leading-[1.5] text-muted">{standards.note}</p>
        </Container>
      </section>

      {/* 6 ─ FAQs (native <details>: no client JS) */}
      <section className="py-14">
        <Container className="grid grid-cols-[1fr_1.7fr] items-start gap-10 max-[1020px]:grid-cols-1">
          <div className="border-l-[3px] border-brand pl-4">
            <span className="text-[16px] font-extrabold text-brand">{faq.eyebrow}</span>
            <h2 className="mt-1 mb-2 text-[clamp(26px,3vw,36px)] leading-[1.15] font-extrabold">
              {faq.title[0]}
              <br />
              {faq.title[1]}
            </h2>
            <p className="text-[14px] text-muted">{faq.text}</p>
          </div>
          <div className="grid gap-2.5">
            {faq.items.map((f) => (
              <details key={f.q} className="group rounded-lg border border-line bg-white shadow-[0_2px_8px_rgba(15,23,42,.05)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 text-[13.5px] font-semibold text-navy [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Icon name="plus" className="text-[16px] group-open:hidden" />
                  <Icon name="minus" className="hidden text-[16px] group-open:block" />
                </summary>
                <p className="px-4 pb-3.5 text-[13px] leading-[1.6] text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* 7 ─ CTA BAND */}
      <section className="pt-4 pb-14">
        <Container>
          <div className="flex flex-wrap items-center gap-6 rounded-[22px] bg-[linear-gradient(100deg,#b80416,#e1061c_60%,#c4051a)] px-8 py-7 text-white shadow-[0_18px_40px_rgba(225,6,28,.28)] max-[900px]:justify-center max-[900px]:text-center">
            <div className="flex items-center gap-6 border-r border-white/30 pr-6 max-[900px]:border-0 max-[900px]:pr-0">
              <Icon name="shield" className="text-[58px] text-white/90" />
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