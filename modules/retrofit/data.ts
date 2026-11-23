import type { IconName } from "@/components/ui/Icon";
import type { AssetKey } from "@/lib/assets";
import type { ImageKey } from "@/lib/images";

export type RetrofitAsset = {
  key: AssetKey;
  desc: string;
  chips: string[];
  icon: IconName;
  /** optional photo from lib/images; falls back to the gradient + icon placeholder */
  image?: ImageKey;
};

export type RetrofitContent = { eyebrow: string; title: string; sub: string; assets: RetrofitAsset[] };

export async function getRetrofitContent(): Promise<RetrofitContent> {
  return {
    eyebrow: "Retrofitting",
    title: "Which asset do you want to convert?",
    sub: "Pick one to see what we do.",
    assets: [
      { key: "Trucks", icon: "truck", image: "retrofit.trucks", chips: ["CNG", "LNG", "Dual-fuel"], desc: "Long-haul, logistics and commercial fleets. Run heavy trucks on CNG or LNG and cut the biggest line in your cost sheet: fuel." },
      { key: "Buses", icon: "bus", chips: ["CNG", "Dual-fuel"], desc: "City, intercity and staff transport fleets. Convert diesel buses to CNG for quieter, cleaner and cheaper operations." },
      { key: "Vessels", icon: "ship", chips: ["LNG", "Dual-fuel"], desc: "Coastal, inland and harbour vessels. LNG and dual-fuel engine retrofits that lower both emissions and bunker costs." },
      { key: "Generators", icon: "bolt", chips: ["CNG", "Dual-fuel"], desc: "Standby and prime-power DG sets. Dual-fuel conversion for cleaner, lower-cost power with the same reliability." },
    ],
  };
}
