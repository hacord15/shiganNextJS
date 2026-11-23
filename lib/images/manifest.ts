/**
 * Image registry — the ONE place that knows where images live.
 * Components never hard-code paths: they call `getImage("key")` / `<Photo id="key" />`.
 *
 * To add an image: drop the file in /public/images/<group>/ and add an entry here.
 * To swap one (or move to a CDN), change only its `src`.
 */
export type ImageAsset = { src: string; alt: string };

export const IMAGES = {
  "hero.poster": { src: "/images/hero/poster.jpg", alt: "Shigan TechSolutions" },

  "solutions.retrofitting": { src: "/images/solutions/retrofitting.jpg", alt: "Retrofitting" },
  "solutions.fire": { src: "/images/solutions/fire-suppression.jpg", alt: "Fire suppression" },

  "about.facility": { src: "/images/about/facility.jpg", alt: "Shigan facility" },

  "retrofit.trucks": { src: "/images/retrofit/trucks.jpg", alt: "Trucks retrofit" },

  "fire.extinguishers": { src: "/images/fire/extinguishers.jpg", alt: "Fire extinguishers" },
  "fire.bess": { src: "/images/fire/bess.jpg", alt: "BESS" },
  "fire.generator": { src: "/images/fire/generator.jpg", alt: "Generator" },
  "fire.data-centre": { src: "/images/fire/data-centre.jpg", alt: "Data centre" },
  "og.default": { src: "/images/og/og.jpg", alt: "Shigan TechSolutions" },
} as const satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof IMAGES;
