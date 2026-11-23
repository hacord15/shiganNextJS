import Link from "next/link";

type Props = React.ComponentProps<"a"> & { href: string; scroll?: boolean };

/** next/link for in-app routes ("/…"); plain <a> for #hash, tel:, mailto:, external. */
export default function AppLink({ href, scroll, ...rest }: Props) {
  if (href.startsWith("/")) return <Link href={href} scroll={scroll} {...rest} />;
  return <a href={href} {...rest} />;
}
