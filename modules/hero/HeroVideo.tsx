"use client";

import { useEffect, useRef } from "react";

/** Background clip. Drop files in /public/videos; the poster shows until it loads. */
export default function HeroVideo({ poster, sources }: { poster: string; sources: { src: string; type: string }[] }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true; // React doesn't reliably emit `muted`; autoplay needs it
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) v.pause();
    else v.play().catch(() => {});
  }, []);
  return (
    <video ref={ref} className="absolute inset-0 h-full w-full object-cover object-[30%_center]" autoPlay muted loop playsInline preload="metadata" poster={poster}>
      {sources.map((s) => (
        <source key={s.src} src={s.src} type={s.type} />
      ))}
    </video>
  );
}
