import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CallToAction from "@/modules/cta";
import FireSafety from "@/modules/fire-safety";

export const metadata: Metadata = {
  title: "Fire Detection & Suppression",
  description: "Engineered fire detection and suppression for BESS, generators and data centres.",
};

export default function FireSafetyPage() {
  return (
    <>
      <PageHero eyebrow="Solutions" title="Fire Detection & Suppression" text="Early detection and fast, clean suppression for high-risk environments." />
      <FireSafety />
      <CallToAction />
    </>
  );
}
