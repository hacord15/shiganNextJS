import { ASSET_KEYS } from "@/lib/assets";

/** Global site settings — edit here, no component changes needed. */
export const site = {
  name: "Shigan TechSolutions",
  shortName: "Shigan",
  tagline: "TechSolutions",
  title: "Shigan TechSolutions – Cleaner fuel. Safer energy.",
  description: "Advanced retrofitting and fire protection solutions for a cleaner, safer and more sustainable future.",
  phone: "+91 99583 63647",
  phoneHref: "tel:+919958363647",
  email: "contact@shigantechsolutions.com",
  address: "Corporate Office, Gurgaon, Haryana, India",
  legal: "© 2026 Shigan TechSolutions Pvt. Ltd.",
  socials: [
    { label: "in", href: "#", name: "LinkedIn" },
    { label: "f", href: "#", name: "Facebook" },
    { label: "▶", href: "#", name: "YouTube" },
    { label: "𝕏", href: "#", name: "X" },
  ],
  certs: ["ISO 9001", "ISO 14001", "ISO 45001"],
} as const;

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

/** Main navigation (desktop + mobile). Add a page/link here and it appears in the header. */
export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Retrofit", href: "/retrofit-solutions", children: ASSET_KEYS.map((k) => ({ label: k, href: `/retrofit?asset=${k}` })) },
  {
    label: "Fire Detection",
    href: "/fire-detection",
    children: [
      { label: "BESS", href: "/fire-safety#bess" },
      { label: "Generators", href: "/fire-safety#generators" },
      { label: "Data Centres", href: "/fire-safety#data-centres" },
    ],
  },
  { label: "Calculator", href: "/calculator" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type FooterLink = { label: string; href: string };
export const footerColumns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Solutions",
    links: [
      { label: "Retrofitting", href: "/retrofit" },
      ...ASSET_KEYS.filter((k) => k !== "Generators").map((k) => ({ label: k, href: `/retrofit?asset=${k}` })),
      { label: "Fire Detection & Suppression", href: "/fire-safety" },
      { label: "BESS", href: "/fire-safety#bess" },
      { label: "Generators", href: "/fire-safety#generators" },
      { label: "Data Centres", href: "/fire-safety#data-centres" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Savings Calculator", href: "/calculator" },
      { label: "Contact Us", href: "/contact" },
      { label: "Insights & Resources", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: ["Brochures", "Technical Datasheets", "Case Studies", "Solution Videos", "Blogs & Insights", "FAQs"].map((label) => ({ label, href: "#" })),
  },
];
export const legalLinks: FooterLink[] = ["Privacy Policy", "Terms of Use", "Cookie Policy", "Sitemap"].map((label) => ({ label, href: "#" }));
