"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { LuTerminal } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "../language-selector";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border/80 bg-background py-12 text-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-tr from-indigo-600 via-cyan-500 to-emerald-400 p-px">
              <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-background">
                <LuTerminal className="text-cyan-500 dark:text-cyan-400" size={18} />
              </div>
            </div>
            <div>
              <p className="font-semibold text-foreground">{SITE_CONFIG.name}</p>
              <p className="text-xs text-muted-foreground">
                {t("footer.tagline", SITE_CONFIG.tagline)}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <a href="#install" className="transition-colors hover:text-foreground">
              {t("nav.install")}
            </a>
            <a href="#features" className="transition-colors hover:text-foreground">
              {t("nav.features")}
            </a>
            <a href="#demo" className="transition-colors hover:text-foreground">
              {t("nav.demo")}
            </a>
            <a href="#security" className="transition-colors hover:text-foreground">
              {t("nav.security")}
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground">
              {t("nav.faq")}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <LanguageSelector side="top" />
            <ThemeToggle />
            <Button variant="outline" size="icon">
              <a
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("nav.githubAria", "GitHub Repository")}
              >
                <FaGithub size={16} />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. {t("footer.license")}
          </p>
        </div>
      </div>
    </footer>
  );
}
