import { site } from "@/config/site";
import Image from "next/image";
import AppLink from "./AppLink";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <AppLink href="/" className={light ? "mb-3.5 flex items-center" : "flex items-center"}>
      <Image
        src="/images/logo/Shigan-tech.jpg"
        alt={site.name}
        width={227}
        height={67}
        className="h-auto w-[160px]"
      />
    </AppLink>
  );
}
