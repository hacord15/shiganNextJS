import type { IconName } from "@/components/ui/Icon";
import type { ImageKey } from "@/lib/images";

export type SolutionCard = { icon: IconName; title: string; text: string; href: string; image: ImageKey; tone: "a" | "b" };

export async function getSolutionCards(): Promise<SolutionCard[]> {
  return [
    { icon: "wrench", title: "Retrofitting Solutions", text: "CNG/LNG conversion, dual-fuel integration and engine upgrades for existing assets.", href: "/retrofit", image: "solutions.retrofitting", tone: "a" },
    { icon: "flame", title: "Fire Detection & Suppression", text: "Early detection and advanced suppression systems for BESS, data centres, generators and critical infrastructure.", href: "/fire-safety", image: "solutions.fire", tone: "b" },
  ];
}
