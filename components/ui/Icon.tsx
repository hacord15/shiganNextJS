import { icons, type IconName } from "./icons";

export type { IconName };

/** Sized in `em` (set size with `text-[..px]`), colour via `currentColor`. */
export default function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const Cmp = icons[name];
  return <Cmp aria-hidden size="1em" strokeWidth={1.8} className={`shrink-0 ${className}`} />;
}
