import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Footer from "@/modules/footer";
import Header from "@/modules/header";

/** Global 404 (must live at the app root to catch unmatched URLs). */
export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <Container className="py-[100px] text-center">
          <h1 className="mb-3 text-[clamp(40px,6vw,72px)] font-extrabold text-brand">404</h1>
          <p className="mb-6 text-[15px] text-muted">That page doesn&apos;t exist.</p>
          <Button href="/">Back to home</Button>
        </Container>
      </main>
      <Footer />
    </>
  );
}
