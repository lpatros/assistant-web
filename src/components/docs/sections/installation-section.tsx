"use client";

import * as React from "react";
import { InstallCard } from "@/components/install-card";
import { useTranslation } from "react-i18next";

export function InstallationSection() {
  const { t } = useTranslation();

  return (
    <section
      id="installation"
      className="scroll-mt-24 space-y-4 border-b border-zinc-200 py-12 dark:border-zinc-800"
    >
      <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
        <span>{t("docs.installation.badge")}</span>
      </div>
      <h2 className="text-foreground text-2xl font-bold tracking-tight">
        {t("docs.installation.heading")}
      </h2>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {t("docs.installation.description")}
      </p>

      <InstallCard showShadow={false} showDemo={false} />
    </section>
  );
}
