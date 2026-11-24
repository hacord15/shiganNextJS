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

  // /retrofit-solutions page — drop files in /public/images/retrofit-solutions/
  "rs.hero": { src: "/images/retrofit-solutions/hero-truck.jpg", alt: "CNG tanker truck" },
  "rs.engine": { src: "/images/retrofit-solutions/engine.png", alt: "Dual-fuel engine" },
  "rs.trucks": { src: "/images/retrofit-solutions/trucks.jpg", alt: "Trucks" },
  "rs.buses": { src: "/images/retrofit-solutions/buses.jpg", alt: "Buses" },
  "rs.vessels": { src: "/images/retrofit-solutions/vessels.jpg", alt: "Vessels" },
  "rs.generators": { src: "/images/retrofit-solutions/generators.jpg", alt: "Generators" },
  "rs.cng": { src: "/images/retrofit-solutions/cng-nozzle.jpg", alt: "CNG refuelling nozzle" },

  // Open Graph / share images (1200×630) — one per page, in /public/images/og/
  "og.default": { src: "/images/og/og.jpg", alt: "Shigan TechSolutions — Cleaner fuel. Safer energy." },
  "og.home": { src: "/images/og/og-home.jpg", alt: "Shigan TechSolutions — Cleaner fuel. Safer energy." },
  "og.retrofit": { src: "/images/og/og-retrofit.jpg", alt: "Retrofitting — Shigan TechSolutions" },
  "og.retrofit-solutions": { src: "/images/og/og-retrofit-solutions.jpg", alt: "CNG/LNG Retrofit & Dual Fuel Solutions" },
  "og.fire-safety": { src: "/images/og/og-fire-safety.jpg", alt: "Fire Detection & Suppression" },
  "og.fire-detection": { src: "/images/og/og-fire-detection.jpg", alt: "Fire protection for high-risk assets" },
  "og.calculator": { src: "/images/og/og-calculator.jpg", alt: "Savings Calculator" },
  "og.about": { src: "/images/og/og-about.jpg", alt: "About Shigan TechSolutions" },
  "og.contact": { src: "/images/og/og-contact.jpg", alt: "Contact Shigan TechSolutions" },
} as const satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof IMAGES;