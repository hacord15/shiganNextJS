import { site } from "@/config/site";
import AppLink from "./AppLink";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <AppLink href="/" className={`flex items-center gap-2.5 text-[17px] leading-[1.05] font-extrabold ${light ? "mb-3.5 text-white" : "text-navy"}`}>
      <span className="grid size-[34px] place-items-center rounded-[9px] bg-brand text-[20px] font-extrabold text-white">{site.shortName[0]}</span>
      <span>
        {site.shortName}
        <b className="block text-[15px] font-semibold">{site.tagline}</b>
      </span>
    </AppLink>
  );
}
