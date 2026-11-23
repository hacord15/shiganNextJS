import type { IconName } from "@/components/ui/Icon";
import type { ImageKey } from "@/lib/images";

export type FireContent = {
  eyebrow: string;
  title: string;
  text: string;
  image: ImageKey;
  cards: { id: string; placeholder: "ph-bess" | "ph-gen" | "ph-dc"; image: ImageKey; icon: IconName; title: string; text: string }[];
  steps: { n: string; title: string; text: string }[];
  standardsLabel: string;
  standards: string[];
};

export async function getFireContent(): Promise<FireContent> {
  return {
    eyebrow: "Fire Detection & Suppression",
    title: "Fire safety for places where failure isn't an option.",
    text: "Engineered detection and suppression for high-risk, high-value environments.",
    image: "fire.extinguishers",
    cards: [
      { id: "bess", placeholder: "ph-bess", image: "fire.bess", icon: "bolt", title: "BESS", text: "Stop thermal runaway, battery fires and spread between racks." },
      { id: "generators", placeholder: "ph-gen", image: "fire.generator", icon: "flame", title: "Generator systems", text: "Detect and suppress fire from fuel leaks, overheating and electrical faults." },
      { id: "data-centres", placeholder: "ph-dc", image: "fire.data-centre", icon: "monitor", title: "Data centres", text: "Very early smoke detection and clean-agent suppression to protect IT." },
    ],
    steps: [
      { n: "01", title: "Risk assessment", text: "Find what can go wrong." },
      { n: "02", title: "Detection", text: "Early and reliable." },
      { n: "03", title: "Suppression", text: "Clean, fast and safe." },
      { n: "04", title: "Monitoring", text: "24/7 alerts, integrated." },
    ],
    standardsLabel: "Built to recognised standards:",
    standards: ["NFPA", "BIS / IS", "ISO 9001 · 14001 · 45001"],
  };
}
