"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "./language-selector";
import { Brand } from "./brand";
import { NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-border/80 bg-background border-t py-12 text-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row md:items-center">
          <Brand showTagline showVersion={false} />

          <div className="text-muted-foreground flex flex-col justify-center gap-6 text-xs md:flex-row md:flex-wrap md:items-center">
            { NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-foreground transition-colors"
              >
                {t(item.labelKey)}
              </a>
            ))}
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
