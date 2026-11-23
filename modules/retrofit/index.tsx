import AppLink from "@/components/ui/AppLink";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Icon from "@/components/ui/Icon";
import Photo from "@/components/ui/Photo";
import type { AssetKey } from "@/lib/assets";
import { getRetrofitContent } from "./data";

const tab = "transition-quick rounded-full border px-7 py-[11px] text-[14px] font-bold";
const tabOff = "border-[#d5d9e3] bg-white text-navy hover:border-brand hover:text-brand";
const tabOn = "border-brand bg-brand text-white shadow-[0_8px_18px_rgba(225,6,28,.25)]";

/**
 * Fully server-rendered: the selected asset comes from `?asset=` on whichever page renders it.
 * `basePath` = page the tabs link to (default /retrofit; "/" on the home page),
 * `calcHref` = where "Calculate Benefits" goes (default: the /calculator page).
 */
export default async function Retrofit({
  asset,
  basePath = "/retrofit",
  calcHref,
}: {
  asset: AssetKey;
  basePath?: string;
  calcHref?: string;
}) {
  const c = await getRetrofitContent();
  const cur = c.assets.find((a) => a.key === asset) ?? c.assets[0];
  return (
    <section id="retrofit" className="py-[60px]">
      <Container>
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="mt-3 mb-2 max-w-[560px] text-[clamp(30px,4vw,44px)] font-extrabold">{c.title}</h2>
        <p className="text-[14.5px] text-muted">{c.sub}</p>
        <div className="my-[26px] flex flex-wrap gap-3">
          {c.assets.map((a) => (
            <AppLink key={a.key} href={`${basePath}?asset=${a.key}#retrofit`} scroll={false} className={`${tab} ${a.key === cur.key ? tabOn : tabOff}`}>
              {a.key}
            </AppLink>
          ))}
        </div>
        <div className="grid grid-cols-[1fr_1.05fr] items-center gap-[26px] rounded-[18px] border border-line bg-white p-[26px] shadow-card max-[850px]:grid-cols-1">
          <div>
            <h3 className="mb-2 text-[28px] font-extrabold">{cur.key}</h3>
            <p className="mb-3.5 max-w-[440px] text-[14px] text-muted">{cur.desc}</p>
            <div className="mb-5 flex flex-wrap gap-2">
              {cur.chips.map((x) => (
                <span key={x} className="rounded-full bg-[#eef0f5] px-3.5 py-[5px] text-[12px] font-bold text-navy">{x}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact">Get a quote for {cur.key.toLowerCase()}</Button>
              <Button href={calcHref ?? `/calculator?asset=${cur.key}`} variant="lineRed">
                <Icon name="calc" className="text-[18px]" /> Calculate Benefits
              </Button>
            </div>
          </div>
          <div className="img img-truck min-h-[240px]">
            <Icon name={cur.icon} className="absolute top-[40%] left-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 text-[120px] text-white/80" />
            {cur.image && <Photo key={cur.key} id={cur.image} sizes="(max-width: 850px) 100vw, 560px" />}
          </div>
        </div>
      </Container>
    </section>
  );
}
