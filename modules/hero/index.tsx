import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Icon from "@/components/ui/Icon";
import { getHeroContent } from "./data";
import HeroVideo from "./HeroVideo";

const chip = "flex items-center gap-3 rounded-[14px] border border-white/90 bg-white/[.88] px-[18px] py-3 shadow-[0_12px_30px_rgba(15,23,42,.18)] backdrop-blur-[10px]";

export default async function Hero() {
  const c = await getHeroContent();
  return (
    <section id="home" className="relative bg-[linear-gradient(100deg,#fff_0%,#f4f7fb_45%,#e3ecf7_100%)]">
      <div className="hero-media absolute top-0 right-0 bottom-0 z-0 w-[56%] overflow-hidden bg-[#dfe7f1] max-[900px]:w-full max-[900px]:opacity-[.55]" aria-hidden="true">
        <HeroVideo poster={c.poster} sources={c.videos} />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[image:linear-gradient(0deg,#fff_0,rgba(255,255,255,0)_20%),linear-gradient(90deg,rgba(255,255,255,.55)_0,rgba(255,255,255,0)_46%)] max-[900px]:bg-[image:linear-gradient(180deg,rgba(255,255,255,.85),rgba(255,255,255,.55))]" aria-hidden="true" />
      <div className="absolute bottom-[134px] z-[3] flex gap-3 right-[max(24px,calc((100%_-_1200px)/2_+_24px))] max-[1100px]:hidden" aria-hidden="true">
        {c.chips.map((x) => (
          <div key={x.label} className={chip}>
            <Icon name={x.icon} className="text-[28px] text-brand" />
            <div>
              <b className="block text-[17px] leading-[1.1] text-navy">{x.value}</b>
              <span className="text-[12px] text-muted">{x.label}</span>
            </div>
          </div>
        ))}
      </div>
      <Container flush className="relative z-[2] grid grid-cols-1 content-center items-center gap-5 pt-11 pb-[108px] max-[900px]:pt-10 max-[900px]:pb-[100px]">
        <div className="max-w-[540px]">
          <Eyebrow large>{c.eyebrow}</Eyebrow>
          <h1 className="my-3.5 text-[clamp(38px,4.6vw,60px)] leading-[1.02] font-extrabold tracking-[-.035em]">
            <span className="text-brand">{c.titleAccent}</span>
            <br />
            {c.titleRest}
          </h1>
          <p className="mb-[22px] max-w-[480px] text-[15.5px] leading-[1.55] text-[#3a4259]">{c.text}</p>
          <div className="flex flex-wrap gap-3">
            <Button href={c.primary.href} size="hero">
              {c.primary.label} <Icon name="arrow" />
            </Button>
            <Button href={c.secondary.href} variant="line" size="hero">
              <span className="grid size-5 place-items-center rounded-full border-[1.5px] border-current text-[8px]">▶</span> {c.secondary.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
