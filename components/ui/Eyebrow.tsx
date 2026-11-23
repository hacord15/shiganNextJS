export default function Eyebrow({ children, large = false }: { children: React.ReactNode; large?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-extrabold tracking-[.12em] text-brand uppercase before:h-0.5 before:w-[22px] before:bg-brand before:content-[''] ${
        large ? "text-[11.5px]" : "text-[11px]"
      }`}
    >
      {children}
    </span>
  );
}
