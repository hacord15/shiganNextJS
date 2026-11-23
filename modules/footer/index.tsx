import AppLink from "@/components/ui/AppLink";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import Logo from "@/components/ui/Logo";
import { footerColumns, legalLinks, site } from "@/config/site";

const h5 = "mb-3.5 text-[14px] text-white";
const link = "hover:text-white";
const cert = "rounded-md border border-white/25 px-2 py-1 text-center text-[10px] leading-[1.2] font-extrabold";
const contactLi = "flex items-start gap-2.5";

export default function Footer() {
  return (
    <footer className="bg-navy pt-[54px] text-[13px] text-[#c3c9da]">
      <Container>
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1.3fr] gap-[30px] pb-9 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1">
          <div>
            <Logo light />
            <p className="mb-4 max-w-[260px]">
              Engineering cleaner, safer and more sustainable operations through retrofitting and advanced fire protection.
            </p>
            <div className="mb-[18px] flex gap-2.5">
              {site.socials.map((s) => (
                <a key={s.name} href={s.href} aria-label={s.name} className="grid size-8 place-items-center rounded-lg bg-white/10 text-[13px] font-extrabold text-white hover:bg-brand">
                  {s.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span>Certified | Trusted</span>
              {site.certs.map((c) => {
                const [a, b] = c.split(" ");
                return (
                  <span key={c} className={cert}>
                    {a}
                    <br />
                    {b}
                  </span>
                );
              })}
            </div>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h5 className={h5}>{col.title}</h5>
              <ul className="grid gap-[9px]">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <AppLink href={l.href} className={link}>{l.label}</AppLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h5 className={h5}>Get In Touch</h5>
            <ul className="grid gap-[9px]">
              <li className={contactLi}><Icon name="pin" className="mt-0.5 text-[16px] text-brand" />{site.address}</li>
              <li className={contactLi}><Icon name="phone" className="mt-0.5 text-[16px] text-brand" />{site.phone}</li>
              <li className={contactLi}><Icon name="mail" className="mt-0.5 text-[16px] text-brand" />{site.email}</li>
            </ul>
            <Button href="/contact" size="sm" className="mt-4">
              Request a Quote <Icon name="arrow" />
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-white/[.12] py-[18px] text-[12px]">
          <span>{site.legal}</span>
          <div className="flex gap-5">
            {legalLinks.map((l) => (
              <a key={l.label} href={l.href} className={link}>{l.label}</a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
