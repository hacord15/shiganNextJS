import Footer from "@/modules/footer";
import Header from "@/modules/header";

/** Every page is server-rendered per request. (ISR instead? use `export const revalidate = 3600;`) */
export const dynamic = "force-dynamic";

/** Shared chrome for every page in the (site) group — new pages inherit header + footer. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
