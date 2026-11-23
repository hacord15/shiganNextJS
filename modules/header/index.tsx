import AppLink from "@/components/ui/AppLink";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import Logo from "@/components/ui/Logo";
import { nav } from "@/config/site";
import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";

const topLink = "flex items-center gap-1 py-6 hover:text-brand";
const dd = "absolute top-full -left-3.5 hidden min-w-[190px] rounded-[10px] border border-line bg-white p-2 shadow-card group-hover:block";
const ddLink = "flex justify-between rounded-[7px] px-3 py-[9px] font-semibold hover:bg-brand-soft hover:text-brand";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <Container className="flex h-[68px] items-center justify-between gap-5">
        <Logo />
        <nav className="max-[1020px]:hidden" aria-label="Main">
          <ul className="flex items-center gap-[22px]">
            {nav.map((item) => (
              <li key={item.label} className="group relative text-[13.5px] font-semibold text-navy">
                <NavLink href={item.href} className={topLink}>
                  {item.label} {item.children && <Icon name="chev" className="text-[14px]" />}
                </NavLink>
                {item.children && (
                  <div className={dd}>
                    {item.children.map((c) => (
                      <AppLink key={c.label} href={c.href} className={ddLink}>
                        {c.label}
                      </AppLink>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Icon name="search" className="text-[20px]" />
          <Button href="/contact" size="sm" className="max-[1020px]:hidden">
            Get a Free Consultation
          </Button>
          <MobileMenu items={nav} />
        </div>
      </Container>
    </header>
  );
}
