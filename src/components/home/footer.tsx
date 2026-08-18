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
    <footer className="border-border/80 bg-background border-t py-12 text-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 p-px dark:bg-white">
              <div className="bg-background flex h-full w-full items-center justify-center rounded-[7px]">
                <LuTerminal
                  className="text-zinc-900 dark:text-white"
                  size={18}
                />
              </div>
            </div>
            <div>
              <p className="text-foreground font-semibold">
                {SITE_CONFIG.name}
              </p>
              <p className="text-muted-foreground text-xs">
                {t("footer.tagline", SITE_CONFIG.tagline)}
              </p>
            </div>
          </div>

          <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-6 text-xs">
            <a
              href="#install"
              className="hover:text-foreground transition-colors"
            >
              {t("nav.install")}
            </a>
            <a
              href="#features"
              className="hover:text-foreground transition-colors"
            >
              {t("nav.features")}
            </a>
            <a href="#demo" className="hover:text-foreground transition-colors">
              {t("nav.demo")}
            </a>
            <a
              href="#security"
              className="hover:text-foreground transition-colors"
            >
              {t("nav.security")}
            </a>
            <a href="#faq" className="hover:text-foreground transition-colors">
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

        <div className="border-border/60 text-muted-foreground mt-8 border-t pt-6 text-center text-xs">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}.{" "}
            {t("footer.license")}
          </p>
        </div>
      </div>
    </footer>
  );
}
