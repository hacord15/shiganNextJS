import Icon, { type IconName } from "./Icon";
import Photo from "./Photo";
import type { ImageKey } from "@/lib/images";

/**
 * `.img` box = gradient + big icon placeholder, with the registry photo on top.
 * Until the image file exists in /public, the placeholder is what you see.
 */
export default function ImageSlot({
  id,
  sizes,
  icon,
  className = "",
  iconClassName = "text-navy/20",
  fit = "cover",
  priority,
}: {
  id: ImageKey;
  sizes: string;
  icon: IconName;
  className?: string;
  iconClassName?: string;
  fit?: "cover" | "contain";
  priority?: boolean;
}) {
  return (
    <div className={`img ${className}`}>
      <Icon name={icon} className={`absolute top-1/2 left-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 text-[64px] ${iconClassName}`} />
      <Photo id={id} sizes={sizes} fit={fit} priority={priority} />
    </div>
  );
}