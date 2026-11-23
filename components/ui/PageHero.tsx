import AppLink from "./AppLink";
import Container from "./Container";
import Eyebrow from "./Eyebrow";

/** Slim banner at the top of inner pages: breadcrumb + <h1>. */
export default function PageHero({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <section className="border-b border-line bg-[linear-gradient(100deg,#fff_0%,#f4f7fb_45%,#e3ecf7_100%)]">
      <Container className="py-12 max-[900px]:py-9">
        <nav aria-label="Breadcrumb" className="mb-3 flex items-center gap-2 text-[12.5px] text-muted">
          <AppLink href="/" className="hover:text-brand">Home</AppLink>
          <span>/</span>
          <span className="font-semibold text-navy">{title}</span>
        </nav>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="mt-3 mb-2 text-[clamp(34px,4.4vw,52px)] font-extrabold tracking-[-.03em]">{title}</h1>
        {text && <p className="max-w-[560px] text-[15px] text-muted">{text}</p>}
      </Container>
    </section>
  );
}
