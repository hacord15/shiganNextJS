import { site } from "@/config/site";
import type { ImageKey } from "@/lib/images";

export type PageSeo = {
  /** omit for home (uses site.title). The "– Shigan TechSolutions" suffix is added automatically. */
  title?: string;
  description: string;
  /** OG / Twitter share image — a key from lib/images/manifest.ts */
  og: ImageKey;
};

/**
 * SEO + share image for EVERY page, in one place.
 * New page → add one entry here, then in the page file:
 *   export const metadata = pageMetadata("/your-route");
 */
export const pages = {
  "/": { description: site.description, og: "og.home" },
  "/retrofit": {
    title: "Retrofitting",
    description: "CNG, LNG and dual-fuel retrofitting for trucks, buses, vessels and generators.",
    og: "og.retrofit",
  },
  "/retrofit-solutions": {
    title: "CNG/LNG Retrofit & Dual Fuel Solutions",
    description: "Convert existing diesel assets to cleaner, more cost-efficient and compliant CNG, LNG or dual-fuel systems.",
    og: "og.retrofit-solutions",
  },
  "/fire-safety": {
    title: "Fire Detection & Suppression",
    description: "Engineered fire detection and suppression for BESS, generators and data centres.",
    og: "og.fire-safety",
  },
  "/fire-detection": {
    title: "Fire Detection & Suppression Systems",
    description:
      "Specialised fire detection and suppression for battery energy storage (BESS), generators and data centres, designed to NFPA and IS standards.",
    og: "og.fire-detection",
  },
  "/calculator": {
    title: "Savings Calculator",
    description: "Estimate fuel savings, emission reduction and ROI with CNG / LNG / dual-fuel retrofitting.",
    og: "og.calculator",
  },
  "/about": {
    title: "About Us",
    description: "Shigan TechSolutions — retrofitting, fuel transformation and fire protection engineering.",
    og: "og.about",
  },
  "/contact": {
    title: "Contact",
    description: "Talk to Shigan TechSolutions about your fleet or facility.",
    og: "og.contact",
  },
} satisfies Record<string, PageSeo>;

export type PagePath = keyof typeof pages;