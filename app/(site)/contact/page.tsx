import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CallToAction from "@/modules/cta";
import Newsletter from "@/modules/newsletter";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to Shigan TechSolutions about your fleet or facility.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Get in touch" title="Contact Us" text="Tell us about your fleet or facility and we'll recommend the right solution." />
      <CallToAction />
      <Newsletter />
    </>
  );
}
