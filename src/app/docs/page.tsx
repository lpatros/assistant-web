"use client";

import * as React from "react";
import { DOCS_NAV_GROUPS } from "@/lib/constants";
import { DocsNavbar } from "@/components/docs/docs-navbar";
import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { SearchDialog } from "@/components/docs/search-dialog";
import { Footer } from "@/components/footer";
import {
  OverviewSection,
  InstallationSection,
  QuickStartSection,
  InteractionModesSection,
  EnginesSection,
  ModelsSection,
  ThinkModeSection,
  SkillsSection,
  CustomizationSection,
  TroubleshootingSection,
  DocsCta,
} from "@/components/docs/sections";

export default function DocsPage() {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [activeSectionId, setActiveSectionId] = React.useState<string>("intro");
  const isManualNavRef = React.useRef(false);
  const manualNavTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const navItemIds = React.useMemo(
    () =>
      DOCS_NAV_GROUPS.flatMap((group) => group.items.map((item) => item.id)),
    [],
  );

  const handleManualSelect = React.useCallback((id: string) => {
    setActiveSectionId(id);
    isManualNavRef.current = true;
    if (manualNavTimeoutRef.current) {
      clearTimeout(manualNavTimeoutRef.current);
    }
    manualNavTimeoutRef.current = setTimeout(() => {
      isManualNavRef.current = false;
    }, 800);
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      if (navItemIds.includes(hashId)) {
        setActiveSectionId(hashId);
      }
    }

    let rafId: number | null = null;

    const handleScroll = () => {
      if (isManualNavRef.current) return;

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (isManualNavRef.current) return;

        const scrollY = window.scrollY;
        const innerHeight = window.innerHeight;
        const scrollHeight = document.documentElement.scrollHeight;

        if (scrollY < 80) {
          setActiveSectionId(navItemIds[0] || "intro");
          return;
        }

        if (innerHeight + scrollY >= scrollHeight - 50) {
          setActiveSectionId(
            navItemIds[navItemIds.length - 1] || "troubleshooting-faq",
          );
          return;
        }

        const offsetThreshold = 140;
        let matchedId = navItemIds[0] || "intro";

        for (const id of navItemIds) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= offsetThreshold) {
              matchedId = id;
            } else {
              break;
            }
          }
        }

        setActiveSectionId(matchedId);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
      if (manualNavTimeoutRef.current)
        clearTimeout(manualNavTimeoutRef.current);
    };
  }, [navItemIds]);

  return (
    <div className="bg-background text-foreground selection:text-foreground flex min-h-screen flex-col selection:bg-indigo-500/30">
      <DocsNavbar
        onOpenSearch={() => setSearchOpen(true)}
        activeId={activeSectionId}
        onSelect={handleManualSelect}
      />

      <SearchDialog
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelect={handleManualSelect}
      />

      <div className="mx-auto flex w-full max-w-7xl flex-1 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block">
          <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
            <DocsSidebar
              activeId={activeSectionId}
              onSelect={handleManualSelect}
            />
          </div>
        </div>

        <main className="min-w-0 flex-1 py-8 lg:px-8 xl:px-12">
          <OverviewSection />
          <InstallationSection />
          <QuickStartSection />
          <InteractionModesSection />
          <EnginesSection />
          <ModelsSection />
          <ThinkModeSection />
          <SkillsSection />
          <CustomizationSection />
          <TroubleshootingSection />
          <DocsCta onBackToInstall={() => handleManualSelect("installation")} />
        </main>
      </div>

      <Footer />
    </div>
  );
}
