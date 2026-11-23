import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { site } from "@/config/site";

export default function CallToAction() {
  return (
    <section id="contact" className="bg-navy bg-[image:radial-gradient(circle_at_20%_0,#1a2a5e,transparent_55%)] py-[60px] text-center text-white">
      <Container>
        <h2 className="mx-auto mb-3 max-w-[620px] text-[clamp(28px,3.8vw,44px)] font-extrabold text-white">
          Let&apos;s make your operations <span className="text-brand">cleaner</span> and safer.
        </h2>
        <p className="mb-[26px] text-[15px] text-[#b6bdd0]">Tell us about your fleet or facility. We&apos;ll recommend the right solution.</p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <Button href={site.phoneHref} variant="white">
            <Icon name="phone" className="text-[18px]" /> Call {site.phone}
          </Button>
          <Button href={`mailto:${site.email}`}>
            <Icon name="mail" className="text-[18px]" /> Email us
          </Button>
        </div>
      </Container>
    </section>
  );
}
