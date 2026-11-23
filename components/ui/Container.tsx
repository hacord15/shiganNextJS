/** Page-width wrapper (1200px). `flush` removes the 24px side gutters. */
export default function Container({
  className = "",
  flush = false,
  children,
}: {
  className?: string;
  flush?: boolean;
  children: React.ReactNode;
}) {
  return <div className={`mx-auto max-w-[1200px] ${flush ? "" : "px-6"} ${className}`.trim()}>{children}</div>;
}
