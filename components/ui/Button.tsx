import AppLink from "./AppLink";

type Variant = "red" | "line" | "white" | "lineRed";
type Size = "md" | "sm" | "hero" | "xl";

const base = "transition-quick inline-flex items-center justify-center gap-2 rounded-lg font-bold whitespace-nowrap";
const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-[14px]",
  sm: "px-4 py-[9px] text-[13px]",
  hero: "px-[22px] py-3 text-[14px]",
  xl: "h-[52px] px-5 text-[15px]",
};
const variants: Record<Variant, string> = {
  red: "bg-brand text-white shadow-[0_8px_18px_rgba(225,6,28,.25)] hover:-translate-y-px hover:bg-brand-d",
  line: "border-[1.5px] border-[#cdd2dd] bg-white text-navy hover:border-navy",
  white: "bg-white text-navy hover:-translate-y-px",
  lineRed: "border-[1.5px] border-[#f1b6bb] bg-white text-brand hover:border-brand hover:bg-brand-soft",
};

type Common = { variant?: Variant; size?: Size; className?: string; children: React.ReactNode };
type AnchorProps = Common & { href: string } & Omit<React.ComponentProps<"a">, keyof Common | "href">;
type ButtonProps = Common & { href?: undefined } & Omit<React.ComponentProps<"button">, keyof Common>;

/** Link (via AppLink) when `href` is given, otherwise <button>. */
export default function Button(props: AnchorProps | ButtonProps) {
  const { variant = "red", size = "md", className = "", children, ...rest } = props;
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`.trim();
  if (typeof rest.href === "string") {
    return <AppLink {...(rest as Omit<AnchorProps, keyof Common>)} className={cls}>{children}</AppLink>;
  }
  return <button {...(rest as Omit<ButtonProps, keyof Common>)} className={cls}>{children}</button>;
}
