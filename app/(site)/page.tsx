import { parseAsset } from "@/lib/assets";
import CalculatorSection from "@/modules/calculator";
import CallToAction from "@/modules/cta";
import FireSafety from "@/modules/fire-safety";
import Hero from "@/modules/hero";
import Impact from "@/modules/impact";
import Newsletter from "@/modules/newsletter";
import Retrofit from "@/modules/retrofit";
import Solutions from "@/modules/solutions";
import Stats from "@/modules/stats";
import Story from "@/modules/story";
import Testimonials from "@/modules/testimonials";

/**
 * Home — the full one-page flow (same section order as the original site).
 * Add/remove/reorder modules here; the inner pages reuse the same modules.
 */
export default async function HomePage({ searchParams }: { searchParams: Promise<{ asset?: string }> }) {
  const { asset } = await searchParams;
  return (
    <>
      <Hero />
      <Solutions />
      <Story />
      <Stats />
      <Retrofit asset={parseAsset(asset)} basePath="/" calcHref="#calculator" />
      <Impact />
      <FireSafety />
      <CalculatorSection />
      <Testimonials />
      <CallToAction />
      <Newsletter />
    </>
  );
}
