import Container from "@/components/ui/Container";
import { getImpactContent } from "./data";

export default async function Impact() {
  const c = await getImpactContent();
  return (
    <section className="bg-forest bg-[image:radial-gradient(circle_at_80%_20%,#1c6b49_0,transparent_55%)] text-white">
      <Container flush className="grid grid-cols-[1.1fr_repeat(4,1fr)] items-center gap-5 py-[46px] max-[900px]:grid-cols-2">
        <h2 className="text-[clamp(28px,3.4vw,40px)] font-extrabold text-white max-[900px]:col-span-full">
          {c.titleTop}
          <br />
          <span className="text-[#7bf0a6]">{c.titleAccent}</span>
        </h2>
        {c.items.map((i) => (
          <div key={i.value} className="border-l border-white/[.18] pl-5">
            <b className="mb-1.5 block text-[34px] leading-none font-extrabold text-[#6ee79a]">{i.value}</b>
            <span className="text-[12px] text-[#c7ddd0]">{i.label}</span>
          </div>
        ))}
      </Container>
    </section>
  );
}
