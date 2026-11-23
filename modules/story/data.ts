import type { IconName } from "@/components/ui/Icon";
import type { ImageKey } from "@/lib/images";

export type StoryContent = { eyebrow: string; title: string; text: string; image: ImageKey; points: { icon: IconName; title: string; text: string }[] };

export async function getStoryContent(): Promise<StoryContent> {
  return {
    eyebrow: "Our Story",
    title: "Our Story",
    text: "Shigan TechSolutions is a specialised engineering company focused on retrofitting, fuel transformation and advanced fire detection & suppression systems for commercial, industrial and critical infrastructure.",
    image: "about.facility",
    points: [
      { icon: "target", title: "Our Mission", text: "Enable cleaner mobility and safer operations through innovative, reliable and scalable engineering solutions." },
      { icon: "eye", title: "Our Vision", text: "To be a trusted global partner in clean fuel transformation and advanced fire safety solutions." },
    ],
  };
}
