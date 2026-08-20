"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

interface DocsCtaProps {
  onBackToInstall?: () => void;
}

export function DocsCta({ onBackToInstall }: DocsCtaProps) {
  const { t } = useTranslation();

  return (
    <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-xl border border-zinc-200 bg-zinc-50/80 p-6 sm:flex-row dark:border-zinc-800 dark:bg-zinc-900/40">
      <div>
        <h4 className="text-foreground text-sm font-semibold">
          {t("docs.cta.title")}
        </h4>
        <p className="text-muted-foreground text-xs">
          {t("docs.cta.description")}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="default"
          onClick={() => {
            if (onBackToInstall) {
              onBackToInstall();
            }
            const element = document.getElementById("installation");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <a href="#installation">
            <span>{t("docs.cta.button")}</span>
          </a>
        </Button>
      </div>
    </div>
  );
}
