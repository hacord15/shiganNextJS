"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import AppLink from "@/components/ui/AppLink";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import type { NavItem } from "@/config/site";

/** Burger menu for ≤1020px (the desktop nav is server-rendered CSS). */
export default function MobileMenu({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <>
      <button className="hidden text-[26px] max-[1020px]:block" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <Icon name={open ? "x" : "menu"} />
      </button>
      {open && (
        <div className="absolute top-full right-0 left-0 border-b border-line bg-white px-6 pt-2 pb-5 shadow-card">
          <ul>
            {items.map((i) => {
              const active = i.href === "/" ? path === "/" : path.startsWith(i.href);
              return (
                <li key={i.label}>
                  <AppLink href={i.href} onClick={() => setOpen(false)} className={`block border-b border-line py-3 text-[14px] font-semibold ${active ? "text-brand" : "text-navy"}`}>
                    {i.label}
                  </AppLink>
                </li>
              );
            })}
          </ul>
          <Button href="/contact" size="sm" className="mt-4" onClick={() => setOpen(false)}>
            Get a Free Consultation
          </Button>
        </div>
      )}
    </>
  );
}
