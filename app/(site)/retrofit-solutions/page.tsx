import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Icon, { type IconName } from "@/components/ui/Icon";
import ImageSlot from "@/components/ui/ImageSlot";
import type { ImageKey } from "@/lib/images";

export const metadata: Metadata = {
  title: "CNG/LNG Retrofit & Dual Fuel Solutions",
  description: "Convert existing diesel assets to cleaner, more cost-efficient and compliant CNG, LNG or dual-fuel systems.",
};

/* ───────────────────────── CONTENT (edit text here) ───────────────────────── */

type TitlePart = { text: string; accent?: boolean };

const content: {
  hero: { badge: string; title: string[]; text: string; image: ImageKey; benefits: { icon: IconName; tone: "red" | "green"; label: string[] }[] };
  intro: { image: ImageKey; title: TitlePart[]; text: string; card: { title: TitlePart[]; points: string[] } };
  assets: { eyebrow: string; title: TitlePart[]; items: { icon: IconName; image: ImageKey; title: string; text: string; href: string; }[] };
  compliance: { title: string[]; text: string; badges: string[][] };
  process: { eyebrow: string; title: TitlePart[]; text: string; steps: { icon: IconName; title: string; text: string }[] };
  faq: { eyebrow: string; title: string[]; image: ImageKey; items: { q: string; a: string }[] };
  cta: { title: string[]; text: string; button: { label: string; href: string } };
} = {
  hero: {
    badge: "Retrofitting Solutions",
    title: ["CNG/LNG Retrofit", "& Dual Fuel Solutions"],
    text: "Convert your existing diesel assets to cleaner, more cost-efficient and compliant fuel systems.",
    image: "rs.hero",
    benefits: [
      { icon: "coins", tone: "red", label: ["Lower", "Fuel Cost"] },
      { icon: "leaf", tone: "green", label: ["Reduced", "Emissions"] },
      { icon: "shield", tone: "green", label: ["Regulatory", "Compliant"] },
    ],
  },
  intro: {
    image: "rs.engine",
    title: [{ text: "What is " }, { text: "CNG/LNG Retrofit", accent: true }, { text: " & Dual " }, { text: "Fuel?", accent: true }],
    text: "A proven conversion solution that modifies existing diesel assets to run on Compressed Natural Gas (CNG), Liquefied Natural Gas (LNG) or a Dual Fuel (Diesel + CNG/LNG) system — delivering lower operating costs and cleaner emissions without replacing your assets.",
    card: {
      title: [{ text: "Fuel-Cost Savings & " }, { text: "Emission Benefits", accent: true }],
      points: [
        "Up to 30–50% lower fuel cost",
        "Significant reduction in CO₂, NOx and PM",
        "Supports cleaner & greener operations",
        "Helps meet current and future emission norms",
      ],
    },
  },
  assets: {
  eyebrow: "Assets we retrofit",
  title: [{ text: "Versatile Retrofitting for " }, { text: "Multiple Assets", accent: true }],
  items: [
    { icon: "truck", image: "rs.trucks", title: "Trucks", text: "Lower running cost, cleaner & compliant fleet", href: "/retrofit/trucks" },
    { icon: "bus", image: "rs.buses", title: "Buses", text: "Cost-efficient, low-emission public & private transport", href: "/retrofit/buses" },
    { icon: "ship", image: "rs.vessels", title: "Vessels", text: "Cleaner combustion for marine operations", href: "/retrofit/vessels" },
    { icon: "bolt", image: "rs.generators", title: "Generators", text: "Economical, reliable and lower emission power", href: "/retrofit/generators" },
  ],
},
  compliance: {
    title: ["Approval &", "Compliance"],
    text: "Our retrofitting solutions are designed and delivered as per applicable government and regulatory standards, ensuring safe and legal operation.",
    badges: [["ICAT / ARAI", "Approved"], ["RTO", "Compliant"], ["Emission Norms Compliant", "(BS-VI / Equivalent)"]],
  },
  process: {
    eyebrow: "Our process",
    title: [{ text: "How It " }, { text: "Works", accent: true }],
    text: "A simple, end-to-end process for a safe, compliant and reliable retrofit.",
    steps: [
      { icon: "search", title: "1. Survey & Assessment", text: "Evaluate asset, usage profile and feasibility" },
      { icon: "wrench", title: "2. Installation", text: "Retrofit approved CNG/LNG or dual fuel kit with certified components" },
      { icon: "clipboardList", title: "3. Testing & Calibration", text: "Ensure performance, safety and emission compliance" },
      { icon: "shield", title: "4. Approval & Registration", text: "Support for statutory inspection, certification and RTO approval" },
      { icon: "headset", title: "5. After-Sales Service", text: "Periodic check-ups, maintenance and performance support" },
    ],
  },
  faq: {
    eyebrow: "FAQs",
    title: ["Frequently", "Asked Questions"],
    image: "rs.cng",
    items: [
      { q: "What is the difference between CNG, LNG and Dual Fuel?", a: "CNG and LNG are natural-gas fuels: CNG is stored as compressed gas, LNG as a liquid with higher energy density (suited to long-haul and marine use). Dual Fuel keeps your diesel system and replaces a share of the diesel with CNG or LNG, so the asset can still run on diesel alone." },
      { q: "Can my existing vehicle/asset be retrofitted?", a: "Most diesel engines in sound condition can be evaluated for retrofit. Our survey looks at the engine type, age, condition and how the asset is used, and we confirm feasibility before any work begins." },
      { q: "How much fuel cost can I save?", a: "Savings depend on your running distance, fuel efficiency and the price gap between diesel and gas. Many operators target up to 30–50% lower fuel cost — use our savings calculator to estimate it for your own fleet." },
      { q: "Is the retrofit approved by regulatory authorities?", a: "Retrofits use certified kits and components and follow applicable regulations. We support the statutory inspection, certification and RTO approval steps so the asset can operate legally." },
      { q: "What maintenance is required after retrofitting?", a: "Periodic check-ups cover the gas system, cylinders, hoses, filters and calibration, along with regular engine servicing. Our after-sales team provides scheduled maintenance and performance support." },
    ],
  },
  cta: {
    title: ["Ready to Retrofit", "Your Fleet or Assets?"],
    text: "Reduce fuel costs, meet emission norms and extend the life of your assets with Shigan's retrofitting solutions.",
    button: { label: "Talk to Our Experts", href: "/contact" },
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

/* ───────────────────────── PAGE ───────────────────────── */

export default function RetrofitSolutionsPage() {
  const { hero, intro, assets, compliance, process, faq, cta } = content;

  return (
    <>
      {/* 1 ─ HERO */}
      <section className="relative overflow-hidden bg-[linear-gradient(100deg,#0a111d_0%,#141f2e_55%,#26303d_100%)] text-white">
        <div className="absolute top-0 right-0 h-full w-[20%] bg-brand/85 [clip-path:polygon(60%_0,100%_0,100%_100%,10%_100%)] max-[900px]:hidden" aria-hidden="true" />
        <div className="hero-media absolute inset-y-0 right-0 w-[55%] max-[900px]:w-full max-[900px]:opacity-40" aria-hidden="true">
          <ImageSlot
            id={hero.image}
            sizes="(max-width: 900px) 100vw, 660px"
            icon="truck"
            priority
            className="absolute inset-0 !rounded-none bg-[linear-gradient(135deg,#243247,#3a4a63)]"
            iconClassName="text-[140px] text-white/15"
          />
        </div>
        <Container className="relative z-[2] py-14 max-[900px]:py-10">
          <div className="max-w-[560px]">
            <span className="inline-block bg-brand px-2.5 py-1 text-[12px] font-extrabold tracking-[.06em] text-white uppercase">{hero.badge}</span>
            <h1 className="mt-4 mb-3 text-[clamp(34px,4.6vw,58px)] leading-[1.05] font-extrabold tracking-[-.03em] text-white">
              {hero.title[0]}
              <br />
              {hero.title[1]}
            </h1>
            <p className="max-w-[460px] text-[17px] leading-[1.4] text-white/90">{hero.text}</p>
            <div className="mt-7 flex flex-wrap items-center gap-y-4">
              {hero.benefits.map((b) => (
                <div key={b.label.join(" ")} className="flex items-center gap-3 border-l border-white/25 px-5 first:border-0 first:pl-0">
                  <Icon name={b.icon} className={`text-[34px] ${b.tone === "red" ? "text-brand" : "text-[#4cd27a]"}`} />
                  <span className="text-[15px] leading-[1.2] font-semibold">
                    {b.label[0]}
                    <br />
                    {b.label[1]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 2 ─ INTRO + BENEFITS CARD */}
      <section className="py-12">
        <Container className="grid grid-cols-[.9fr_1.1fr_1.1fr] items-center gap-8 max-[1020px]:grid-cols-1">
          <div className="relative min-h-[220px]">
            <div className="absolute inset-y-0 left-0 w-[78%] bg-brand [clip-path:polygon(25%_0,100%_0,62%_100%,0_100%)]" aria-hidden="true" />
            <ImageSlot
              id={intro.image}
              sizes="(max-width: 1020px) 100vw, 320px"
              icon="wrench"
              fit="contain"
              className="absolute inset-0 !rounded-none !bg-transparent"
              iconClassName="text-white/40"
            />
          </div>
          <div className="border-r border-line pr-8 max-[1020px]:border-0 max-[1020px]:pr-0">
            <h2 className="mb-3 text-[clamp(26px,3vw,34px)] leading-[1.15] font-extrabold">
              <AccentTitle parts={intro.title} />
            </h2>
            <p className="text-[14px] leading-[1.6] text-ink">{intro.text}</p>
          </div>
          <div className="rounded-2xl border border-[#f9dcdc] bg-[linear-gradient(135deg,#fdeeee,#fdf3f3)] p-6 shadow-card">
            <div className="mb-4 flex items-center gap-3">
              <Icon name="leaf" className="text-[40px] text-leaf" />
              <h3 className="text-[22px] leading-[1.15] font-extrabold">
                <AccentTitle parts={intro.card.title} />
              </h3>
            </div>
            <ul className="grid gap-2.5">
              {intro.card.points.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-[13.5px]">
                  <span className="grid size-[18px] flex-none place-items-center rounded-full bg-brand text-[11px] text-white">
                    <Icon name="check" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* 3 ─ ASSETS WE RETROFIT */}
    {/* 3 ─ ASSETS WE RETROFIT */}
<section className="py-10">
  <Container>
    <Eyebrow>{assets.eyebrow}</Eyebrow>
    <h2 className="mt-2 text-[clamp(28px,3.4vw,40px)] font-extrabold">
      <AccentTitle parts={assets.title} />
    </h2>
    <span className="mt-3 mb-7 block h-[3px] w-[60px] bg-brand" />

    <div className="grid grid-cols-4 gap-5 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1">
      {assets.items.map((a) => (
        <a
          key={a.title}
          href={a.href}
          className="group relative block overflow-hidden rounded-xl bg-white shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-brand/30 focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:outline-none"
        >
          <ImageSlot
            id={a.image}
            sizes="(max-width: 900px) 50vw, 280px"
            icon={a.icon}
            className="h-[130px] !rounded-none bg-[linear-gradient(135deg,#cfd8e4,#eef1f6)] transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          />

          <div className="flex gap-3 p-4">
            <Icon
              name={a.icon}
              className="mt-0.5 text-[34px] text-brand transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
            />
            <div>
              <h3 className="text-[17px] transition-colors duration-300 group-hover:text-brand">
                {a.title}
              </h3>
              <p className="text-[13px] leading-[1.4] text-muted">{a.text}</p>
            </div>
          </div>

          {/* Hover-revealed link hint */}
          <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-[11px] font-bold text-white opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            View
            <Icon name="arrow" className="text-[12px] transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </a>
      ))}
    </div>
  </Container>
</section>

      {/* 4 ─ APPROVAL & COMPLIANCE BAR */}
      <section className="py-6">
        <Container>
          <div className="flex flex-wrap items-center gap-6 rounded-2xl bg-[#1e2a3a] px-7 py-5 text-white max-[1020px]:gap-4">
            <Icon name="clipboardCheck" className="text-[54px] text-brand" />
            <h2 className="border-r border-white/20 pr-6 text-[24px] leading-[1.15] font-extrabold text-white max-[1020px]:border-0">
              {compliance.title[0]}
              <br />
              {compliance.title[1]}
            </h2>
            <p className="max-w-[330px] flex-1 text-[13px] leading-[1.5] text-white/90">{compliance.text}</p>
            <div className="flex flex-wrap gap-6 border-l border-white/20 pl-6 max-[1020px]:border-0 max-[1020px]:pl-0">
              {compliance.badges.map((b) => (
                <div key={b[0]} className="flex items-center gap-2.5">
                  <span className="grid size-[30px] flex-none place-items-center rounded-full bg-[#2ecc71] text-[18px] text-white">
                    <Icon name="check" />
                  </span>
                  <span className="text-[13px] leading-[1.25] font-semibold">
                    {b[0]}
                    <br />
                    <span className="text-[12px] font-medium">{b[1]}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5 ─ HOW IT WORKS */}
      <section className="py-10">
        <Container>
          <div className="mb-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            <div>
              <Eyebrow>{process.eyebrow}</Eyebrow>
              <h2 className="mt-1 text-[clamp(28px,3.4vw,40px)] font-extrabold">
                <AccentTitle parts={process.title} />
              </h2>
            </div>
            <p className="max-w-[300px] border-l-2 border-brand pl-4 text-[14px] text-ink">{process.text}</p>
          </div>
          <ol className="grid grid-cols-5 gap-5 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1">
            {process.steps.map((s, i) => (
              <li key={s.title} className="relative pt-7">
                <span className="absolute top-0 left-1/2 z-[1] grid size-[60px] -translate-x-1/2 place-items-center rounded-full bg-brand-soft text-[28px] text-brand shadow-[0_6px_16px_rgba(225,6,28,.12)]">
                  <Icon name={s.icon} />
                </span>
                <div className="h-full rounded-xl bg-white px-4 pt-10 pb-5 text-center shadow-card">
                  <h3 className="mb-2 text-[15px] leading-[1.25]">{s.title}</h3>
                  <p className="text-[13px] leading-[1.4] text-muted">{s.text}</p>
                </div>
                {i < process.steps.length - 1 && (
                  <Icon name="chevR" className="absolute top-1/2 -right-[19px] z-[2] text-[18px] text-brand max-[900px]:hidden" />
                )}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 6 ─ FAQ (native <details>: no client JS) */}
      <section className="py-10">
        <Container className="grid grid-cols-[1fr_1.5fr] items-center gap-8 max-[1020px]:grid-cols-1">
          <div className="flex items-center gap-6">
            <ImageSlot
              id={faq.image}
              sizes="220px"
              icon="fuel"
              className="h-[200px] w-[44%] flex-none !rounded-none bg-[linear-gradient(135deg,#b9c7b9,#e3ebe3)] [clip-path:polygon(0_0,100%_0,82%_100%,0_100%)]"
            />
            <div className="border-l-[3px] border-brand pl-4">
              <span className="text-[16px] font-extrabold text-brand">{faq.eyebrow}</span>
              <h2 className="mt-1 text-[clamp(24px,2.6vw,32px)] leading-[1.15] font-extrabold">
                {faq.title[0]}
                <br />
                {faq.title[1]}
              </h2>
            </div>
          </div>
          <div className="grid gap-2.5">
            {faq.items.map((f) => (
              <details key={f.q} className="group rounded-lg border border-line bg-white shadow-[0_2px_8px_rgba(15,23,42,.05)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-2.5 text-[13.5px] font-semibold text-navy [&::-webkit-details-marker]:hidden">
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
      <section className="pt-6 pb-14">
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