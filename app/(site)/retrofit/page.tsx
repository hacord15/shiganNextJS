import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { parseAsset } from "@/lib/assets";
import CallToAction from "@/modules/cta";
import Impact from "@/modules/impact";
import Retrofit from "@/modules/retrofit";

export const metadata: Metadata = {
  title: "Retrofitting",
  description: "CNG, LNG and dual-fuel retrofitting for trucks, buses, vessels and generators.",
};

export default async function RetrofitPage({ searchParams }: { searchParams: Promise<{ asset?: string }> }) {
  const { asset } = await searchParams;
  return (
    <>
      <PageHero eyebrow="Solutions" title="Retrofitting" text="Convert existing diesel assets to cleaner, cheaper fuel with engineered retrofits." />
      <Retrofit asset={parseAsset(asset)} />
      <Impact />
      <CallToAction />
    </>
  );
}
