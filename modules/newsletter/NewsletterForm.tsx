"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

/** Client island. Hook `onSubmit` up to a server action / API route to persist subscribers. */
export default function NewsletterForm({ placeholder }: { placeholder: string }) {
  const [done, setDone] = useState(false);
  return (
    <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <input type="email" required placeholder={placeholder} className="min-w-0 flex-1 rounded-lg border-[1.5px] border-[#dde1ea] bg-white px-3.5 py-3 text-[13.5px] outline-none focus:border-brand" />
      <Button size="sm" type="submit">
        {done ? "Subscribed ✓" : (<>Subscribe <Icon name="arrow" /></>)}
      </Button>
    </form>
  );
}
