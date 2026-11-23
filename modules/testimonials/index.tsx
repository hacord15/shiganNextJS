import Container from "@/components/ui/Container";
import { getTestimonialsContent } from "./data";

export default async function Testimonials() {
  const c = await getTestimonialsContent();
  return (
    <section className="pt-[50px] pb-[30px]">
      <Container>
        <h2 className="mb-1 text-[28px] font-extrabold">{c.title}</h2>
        <p className="mb-[22px] text-[14px] text-muted">{c.sub}</p>
        <div className="grid grid-cols-3 gap-5 max-[800px]:grid-cols-1">
          {c.items.map((t) => (
            <div key={t.name} className="t-card flex flex-col gap-[18px] rounded-card border border-line bg-white p-[22px] shadow-card">
              <q className="text-[14px] leading-[1.6] text-ink">{t.quote}</q>
              <div className="mt-auto flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-full bg-[linear-gradient(135deg,#ffb3ba,#e1061c)] text-[15px] font-extrabold text-white">{t.initials}</div>
                <div>
                  <b className="block text-[14px] text-navy">{t.name}</b>
                  <span className="text-[12px] text-muted">{t.role}</span>
                </div>
                <span className="ml-auto rounded-md border border-line px-2.5 py-1 text-[13px] font-extrabold text-[#1b4aa6]" style={t.companyColor ? { color: t.companyColor } : undefined}>
                  {t.company}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[34px] text-center">
          <small className="mb-4 block text-[12.5px] text-muted">{c.trustedLabel}</small>
          <div className="flex flex-wrap items-center justify-center gap-10 text-[22px] font-extrabold">
            {c.logos.map((l) => <span key={l.name} className={l.className}>{l.name}</span>)}
          </div>
        </div>
      </Container>
    </section>
  );
}
