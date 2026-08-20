"use client";

import * as React from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/language-selector";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  LuSearch,
  LuMenu,
  LuX,
} from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useOsDetection } from "@/hooks/use-os-detection";
import { DocsSidebar } from "./docs-sidebar";
import { Brand } from "../brand";

interface DocsNavbarProps {
  onOpenSearch: () => void;
  activeId?: string;
  onSelect?: (id: string) => void;
}

export function DocsNavbar({
  onOpenSearch,
  activeId,
  onSelect,
}: DocsNavbarProps) {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const detectedOs = useOsDetection();

  return (
    <header className="border-border/80 bg-background/95 sticky top-0 z-40 w-full border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Brand className="hidden sm:flex" />
        <Brand className="flex sm:hidden" showVersion={false} />

        <div className="mx-4 flex max-w-xs flex-1 justify-center">
          <button
            type="button"
            onClick={onOpenSearch}
            className="text-muted-foreground flex h-9 w-full cursor-pointer items-center justify-between rounded-lg border border-zinc-200 bg-zinc-50/80 px-3 text-xs transition-colors hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
          >
            <div className="flex items-center gap-2">
              <LuSearch size={14} />
              <span>{t("docs.search.button")}</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="hidden items-center gap-0.5 rounded border border-zinc-200 bg-white px-1.5 py-0.5 font-mono text-[10px] shadow-2xs sm:inline-flex dark:border-zinc-800 dark:bg-zinc-950">
                {detectedOs === "macos" ? "⌘" : "Ctrl"}
              </kbd>
              <kbd className="hidden items-center gap-0.5 rounded border border-zinc-200 bg-white px-1.5 py-0.5 font-mono text-[10px] shadow-2xs sm:inline-flex dark:border-zinc-800 dark:bg-zinc-950">
                K
              </kbd>
            </div>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 lg:flex">
            <LanguageSelector side="bottom" />
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden"
            aria-label={t("nav.toggleMenu")}
          >
            {mobileMenuOpen ? <LuX size={18} /> : <LuMenu size={18} />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-border/80 bg-background animate-in fade-in-0 slide-in-from-top-2 absolute top-full left-0 right-0 max-h-[calc(100vh-4rem)] overflow-y-auto border-b px-4 py-4 shadow-2xl backdrop-blur-xl duration-200 lg:hidden">
          <div className="border-border/60 mb-4 flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-2">
              <LanguageSelector side="bottom" />
              <ThemeToggle />
            </div>
            <Button variant="outline" size="sm">
              <a
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5"
              >
                <FaGithub size={14} />
                <span>GitHub</span>
              </a>
            </Button>
          </div>

          <DocsSidebar
            activeId={activeId}
            onSelect={(id) => {
              setMobileMenuOpen(false);
              onSelect?.(id);
            }}
            className="w-full pr-0"
          />
        </div>
      )}
    </header>
  );
}
