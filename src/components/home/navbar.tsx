"use client";

import * as React from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { LuTerminal, LuMenu, LuX } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { LanguageSelector } from "@/components/language-selector";
import { useTranslation } from "react-i18next";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_ITEMS = [
  { href: "#install", labelKey: "nav.install" },
  { href: "#features", labelKey: "nav.features" },
  { href: "#demo", labelKey: "nav.demo" },
  { href: "#security", labelKey: "nav.security" },
  { href: "#faq", labelKey: "nav.faq" },
] as const;

export function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="border-border bg-background sticky top-0 z-50 w-full border-b">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-tr from-indigo-600 via-cyan-500 to-emerald-400 p-px">
            <div className="bg-background flex h-full w-full items-center justify-center rounded-[7px]">
              <LuTerminal
                className="text-cyan-500 dark:text-cyan-400"
                size={18}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-foreground text-lg font-bold tracking-tight">
              {SITE_CONFIG.name}
            </span>
            <Badge variant="secondary" className="text-[10px]">
              {SITE_CONFIG.version}
            </Badge>
          </div>
        </div>

        <nav className="text-muted-foreground hidden items-center gap-6 text-sm font-medium lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-foreground flex items-center gap-1.5 transition-colors"
            >
              {t(item.labelKey)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <LanguageSelector side="bottom" />
          <ThemeToggle />
          <Button variant="outline" size="icon">
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("nav.githubAria", "GitHub Repository")}
            >
              <FaGithub size={18} />
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button variant="outline" size="icon">
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("nav.githubAria", "GitHub Repository")}
            >
              <FaGithub size={18} />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={t("nav.toggleMenu", "Alternar menu")}
            aria-expanded={isOpen}
          >
            {isOpen ? <LuX size={18} /> : <LuMenu size={18} />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="border-border/80 bg-background/95 animate-in fade-in-0 slide-in-from-top-2 border-t px-4 py-4 shadow-xl backdrop-blur-xl duration-200 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:bg-accent hover:text-foreground flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
              >
                {t(item.labelKey)}
              </a>
            ))}
          </nav>

          <div className="border-border/60 mt-4 flex items-center justify-between border-t px-1 pt-4">
            <div className="flex items-center gap-2.5">
              <LanguageSelector side="bottom" />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
