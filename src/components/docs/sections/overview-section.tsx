"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";

export function OverviewSection() {
  const { t } = useTranslation();

  return (
    <section
      id="intro"
      className="scroll-mt-24 space-y-4 border-b border-zinc-200 pb-12 dark:border-zinc-800"
    >
      <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
        <span>{t("docs.overview.badge")}</span>
      </div>
      <h1 className="text-foreground text-2xl font-bold tracking-tight sm:text-3xl">
        {t("docs.overview.heading")}
      </h1>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {t("docs.overview.description")}
      </p>

      <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
        <div className="space-y-1.5 rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
          <div className="text-foreground flex items-center gap-2 text-xs font-semibold sm:text-sm">
            <span>{t("docs.overview.cards.multiEngine.title")}</span>
          </div>
          <p className="text-muted-foreground text-xs">
            {t("docs.overview.cards.multiEngine.description")}
          </p>
        </div>

        <div className="space-y-1.5 rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
          <div className="text-foreground flex items-center gap-2 text-xs font-semibold sm:text-sm">
            <span>{t("docs.overview.cards.persistence.title")}</span>
          </div>
          <p className="text-muted-foreground text-xs">
            {t("docs.overview.cards.persistence.description")}
          </p>
        </div>

        <div className="space-y-1.5 rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
          <div className="text-foreground flex items-center gap-2 text-xs font-semibold sm:text-sm">
            <span>{t("docs.overview.cards.skills.title")}</span>
          </div>
          <p className="text-muted-foreground text-xs">
            {t("docs.overview.cards.skills.description")}
          </p>
        </div>

        <div className="space-y-1.5 rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
          <div className="text-foreground flex items-center gap-2 text-xs font-semibold sm:text-sm">
            <span>{t("docs.overview.cards.extensible.title")}</span>
          </div>
          <p className="text-muted-foreground text-xs">
            {t("docs.overview.cards.extensible.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
