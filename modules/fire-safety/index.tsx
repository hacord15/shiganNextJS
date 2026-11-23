import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Icon from "@/components/ui/Icon";
import Photo from "@/components/ui/Photo";
import { getFireContent } from "./data";

export default async function FireSafety() {
  const c = await getFireContent();
  return (
    <section id="fire" className="py-[60px]">
      <Container>
        <div className="mb-[26px] grid grid-cols-[1fr_1.1fr] items-center gap-5 rounded-[20px] bg-[linear-gradient(110deg,#fff_40%,#fceceb)] p-9 max-[850px]:grid-cols-1 max-[850px]:p-6">
          <div>
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h2 className="my-3 text-[clamp(32px,4.4vw,52px)] font-extrabold text-brand">{c.title}</h2>
            <p className="max-w-[400px] text-[15px] text-muted">{c.text}</p>
          </div>
          <div className="img img-ext">
            <Photo id={c.image} sizes="(max-width: 850px) 100vw, 600px" />
            <div className="ext-row">
              {[68, 82, 92, 82, 68].map((h, i) => (
                <i key={i} style={{ "--h": `${h}%` } as React.CSSProperties} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 max-[800px]:grid-cols-1">
          {c.cards.map((x) => (
            <div key={x.title} id={x.id} className="relative scroll-mt-24 overflow-hidden rounded-card border border-line bg-white shadow-card">
              <div className={`img ${x.placeholder} !rounded-none`}>
                <Photo id={x.image} sizes="(max-width: 800px) 100vw, 380px" />
              </div>
              <div className="absolute top-32 left-5 z-[3] grid size-[42px] place-items-center rounded-[10px] bg-brand text-[22px] text-white">
                <Icon name={x.icon} />
              </div>
              <div className="px-5 pt-[30px] pb-5">
                <h4 className="mb-1.5 text-[17px]">{x.title}</h4>
                <p className="text-[13px] text-muted">{x.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="my-[26px] grid grid-cols-4 gap-4 rounded-card border border-line bg-white p-[22px] shadow-card max-[850px]:grid-cols-2">
          {c.steps.map((s) => (
            <div key={s.n} className="flex items-start gap-3">
              <span className="text-[22px] font-extrabold text-brand">{s.n}</span>
              <div>
                <b className="block text-[14px] text-navy">{s.title}</b>
                <span className="text-[12.5px] text-muted">{s.text}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3.5 text-[13px] font-semibold text-navy">
          <span>{c.standardsLabel}</span>
          {c.standards.map((s) => (
            <span key={s} className="rounded-lg border-[1.5px] border-[#cdd2dd] px-[22px] py-2 text-[13px] font-extrabold">
              {s}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
