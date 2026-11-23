import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import type { AssetKey } from "@/lib/assets";
import Calculator from "./Calculator";
import { getCalculatorContent } from "./data";

export default async function CalculatorSection({ asset }: { asset?: AssetKey }) {
  const c = await getCalculatorContent();
  return (
    <section id="calculator" className="bg-[linear-gradient(#fff,#fafafb)] py-[60px]">
      <Container>
        <div className="mb-[30px] text-center">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2 className="mt-3 mb-2.5 text-[clamp(34px,5vw,56px)] font-extrabold">
            {c.titleLead} <span className="text-brand">{c.titleAccent}</span>
          </h2>
          <p className="mx-auto max-w-[480px] text-[14.5px] text-muted">{c.text}</p>
        </div>
        <div className="rounded-[20px] border border-line bg-white p-[26px] shadow-card">
          <Calculator initialAsset={asset} />
        </div>
      </Container>
    </section>
  );
}
