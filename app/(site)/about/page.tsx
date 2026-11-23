import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CallToAction from "@/modules/cta";
import Impact from "@/modules/impact";
import Stats from "@/modules/stats";
import Story from "@/modules/story";
import Testimonials from "@/modules/testimonials";

export const metadata: Metadata = {
  title: "About Us",
  description: "Shigan TechSolutions — retrofitting, fuel transformation and fire protection engineering.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Company" title="About Us" text="Engineering cleaner mobility and safer facilities." />
      <Story />
      <Stats />
      <Impact />
      <Testimonials />
      <CallToAction />
    </>
  );
}
