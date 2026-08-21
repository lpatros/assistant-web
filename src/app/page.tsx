import { Navbar } from "@/components/home/navbar";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturesGrid } from "@/components/home/features-grid";
import { TerminalDemo } from "@/components/home/terminal-demo";
import { SecuritySection } from "@/components/home/security-section";
import { FAQSection } from "@/components/home/faq/faq-section";
import { Footer } from "@/components/footer";
import { SoftwareAppJsonLd, FAQJsonLd } from "@/components/seo/json-ld";
import { tv } from "tailwind-variants";

const Styles = tv({
  slots: {
    div: "bg-background text-foreground selection:text-foreground flex min-h-screen flex-col selection:bg-indigo-500/30",
    main: "flex-1",
  },
});

export default function Home() {
  return (
    <div className={Styles().div()}>
      <SoftwareAppJsonLd />
      <FAQJsonLd />
      <Navbar />

      <main className={Styles().main()}>
        <HeroSection />
        <FeaturesGrid />
        <TerminalDemo />
        <SecuritySection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}
