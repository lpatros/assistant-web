import { Navbar } from "@/components/home/navbar";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturesGrid } from "@/components/home/features-grid";
import { TerminalDemo } from "@/components/home/terminal-demo";
import { SecuritySection } from "@/components/home/security-section";
import { FAQSection } from "@/components/home/faq/faq-section";
import { Footer } from "@/components/home/footer";
import { tv } from "tailwind-variants";

const Styles = tv({
  slots: {
    div: "flex min-h-screen flex-col bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30 selection:text-white",
    main: "flex-1"
  },
});

export default function Home() {
  return (
    <div className={Styles().div()}>
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
