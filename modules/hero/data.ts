import type { IconName } from "@/components/ui/Icon";
import { getImageSrc } from "@/lib/images";

export type HeroContent = {
  eyebrow: string;
  titleAccent: string;
  titleRest: string;
  text: string;
  poster: string;
  videos: { src: string; type: string }[];
  chips: { icon: IconName; value: string; label: string }[];
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

/** Swap this body for a CMS / API call — the component stays the same. */
export async function getHeroContent(): Promise<HeroContent> {
  return {
    eyebrow: "Engineering solutions for cleaner mobility & safer facilities",
    titleAccent: "Cleaner fuel.",
    titleRest: "Safer energy.",
    text: "Advanced retrofitting and fire protection solutions for a cleaner, safer and more sustainable future.",
    poster: getImageSrc("hero.poster"),
    videos: [
      { src: "/videos/hero.webm", type: "video/webm" },
      { src: "/videos/hero.mp4", type: "video/mp4" },
    ],
    chips: [
      { icon: "truck", value: "1,000+", label: "Retrofits completed" },
      { icon: "shield", value: "ISO & PESO", label: "Industry compliant" },
    ],
    primary: { label: "Explore Our Solutions", href: "/retrofit" },
    secondary: { label: "Watch Overview", href: "#" },
  };
}
