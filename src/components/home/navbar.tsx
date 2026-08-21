"use client";

import * as React from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { Button, buttonVariants } from "../ui/button";
import { LanguageSelector } from "@/components/language-selector";
import { useTranslation } from "react-i18next";
import { ThemeToggle } from "@/components/theme-toggle";
import { Brand } from "../brand";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";

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
          <Brand />
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
          <a
            href="/docs"
            aria-label={t("nav.gettingStarted")}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            {t("nav.gettingStarted")}
          </a>
          <LanguageSelector side="bottom" />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="/docs"
            aria-label={t("nav.gettingStarted")}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            {t("nav.gettingStarted")}
          </a>
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
        <div className="border-border/80 bg-background animate-in fade-in-0 slide-in-from-top-2 absolute top-full left-0 right-0 border-b px-4 py-4 shadow-2xl backdrop-blur-xl duration-200 lg:hidden">
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
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "flex items-center gap-1.5"
              )}
            >
              <FaGithub size={14} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
