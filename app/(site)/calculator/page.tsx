import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { parseAsset } from "@/lib/assets";
import CalculatorSection from "@/modules/calculator";
import CallToAction from "@/modules/cta";

export const metadata: Metadata = {
  title: "Savings Calculator",
  description: "Estimate fuel savings, emission reduction and ROI with CNG / LNG / dual-fuel retrofitting.",
};

export default async function CalculatorPage({ searchParams }: { searchParams: Promise<{ asset?: string }> }) {
  const { asset } = await searchParams;
  return (
    <>
      <PageHero eyebrow="Tools" title="Savings Calculator" text="See what retrofitting could save your fleet every year." />
      <CalculatorSection asset={parseAsset(asset)} />
      <CallToAction />
    </>
  );
}
