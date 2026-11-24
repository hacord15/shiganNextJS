import type { Metadata } from "next";
import { pages, type PagePath, type PageSeo } from "@/config/seo";
import { site } from "@/config/site";
import { getImage } from "@/lib/images";

/**
 * Global metadata builder: title, description, canonical, Open Graph and Twitter card
 * (with the page's share image from the image registry).
 *
 *   export const metadata = pageMetadata("/retrofit");
 *   export const metadata = pageMetadata("/retrofit", { og: "og.default" });   // override
 */
export function pageMetadata(path: PagePath, override: Partial<PageSeo> = {}): Metadata {
  const cfg: PageSeo = { ...pages[path], ...override };
  const img = getImage(cfg.og);
  const fullTitle = cfg.title ? `${cfg.title} – ${site.name}` : site.title;
  return {
    ...(cfg.title ? { title: cfg.title } : {}),
    description: cfg.description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: fullTitle,
      description: cfg.description,
      url: path,
      images: [{ url: img.src, width: 1200, height: 630, alt: img.alt }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description: cfg.description, images: [img.src] },
  };
}