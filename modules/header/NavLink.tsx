"use client";

import { usePathname } from "next/navigation";
import AppLink from "@/components/ui/AppLink";

/** Top-level nav link that highlights itself on the current route. */
export default function NavLink({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  const path = usePathname();
  const base = href.split(/[?#]/)[0];
  const active = base === "/" ? path === "/" : path.startsWith(base);
  return (
    <AppLink href={href} className={`${className} ${active ? "text-brand" : ""}`}>
      {children}
    </AppLink>
  );
}
