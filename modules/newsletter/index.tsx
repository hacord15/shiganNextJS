import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { getNewsletterContent } from "./data";
import NewsletterForm from "./NewsletterForm";

export default async function Newsletter() {
  const c = await getNewsletterContent();
  return (
    <section className="border-t border-line bg-[#f6f7fa]">
      <Container flush className="grid grid-cols-[1.2fr_1fr_1fr] items-center gap-[26px] py-8 max-[900px]:grid-cols-1">
        <div>
          <small className="flex items-center gap-2 text-[11px] font-extrabold tracking-[.1em] text-brand">{c.kicker}</small>
          <h3 className="my-1 text-[22px]">{c.title}</h3>
          <p className="text-[13px] text-muted">{c.text}</p>
        </div>
        <div className="flex gap-[22px]">
          {c.perks.map((p) => (
            <div key={p.label} className="flex flex-col items-center gap-1 text-center text-[11.5px] font-bold text-navy">
              <Icon name={p.icon} className="text-[26px] text-brand" />
              {p.label}
            </div>
          ))}
        </div>
        <NewsletterForm placeholder={c.placeholder} />
      </Container>
    </section>
  );
}
