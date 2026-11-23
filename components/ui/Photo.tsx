"use client";

import Image from "next/image";
import { useState } from "react";
import { getImage, type ImageKey } from "@/lib/images";

/**
 * Photo from the image registry (lib/images). Fills its `.img` placeholder; if the file is
 * missing it vanishes and the gradient behind shows.
 */
export default function Photo({ id, sizes, alt, priority }: { id: ImageKey; sizes: string; alt?: string; priority?: boolean }) {
  const [failed, setFailed] = useState(false);
  const img = getImage(id);
  if (failed) return null;
  return <Image src={img.src} alt={alt ?? img.alt} fill sizes={sizes} priority={priority} onError={() => setFailed(true)} />;
}
