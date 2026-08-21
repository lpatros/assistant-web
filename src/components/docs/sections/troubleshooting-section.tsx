"use client";

import * as React from "react";
import { TroubleshootingAccordion } from "@/components/docs/troubleshooting-accordion";
import { useTranslation } from "react-i18next";

export function TroubleshootingSection() {
  const { t } = useTranslation();

  return (
    <section id="troubleshooting-faq" className="scroll-mt-24 space-y-4 py-12">
      <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
        <span>{t("docs.troubleshooting.badge")}</span>
      </div>
      <h2 className="text-foreground text-2xl font-bold tracking-tight">
        {t("docs.troubleshooting.heading")}
      </h2>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {t("docs.troubleshooting.description")}
      </p>

      <TroubleshootingAccordion />
    </section>
  );
}
