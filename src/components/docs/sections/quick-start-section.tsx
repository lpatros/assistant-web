"use client";

import * as React from "react";
import { CodeBlock } from "@/components/code-block";
import { useTranslation } from "react-i18next";

export function QuickStartSection() {
  const { t } = useTranslation();

  return (
    <section
      id="quick-start"
      className="scroll-mt-24 space-y-4 border-b border-zinc-200 py-12 dark:border-zinc-800"
    >
      <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-zinc-500 uppercase">
        <span>{t("docs.quickStart.badge")}</span>
      </div>
      <h2 className="text-foreground text-2xl font-bold tracking-tight">
        {t("docs.quickStart.heading")}
      </h2>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {t("docs.quickStart.description")}
      </p>

      <CodeBlock
        language="terminal"
        code={t("docs.quickStart.code")}
      />
    </section>
  );
}
