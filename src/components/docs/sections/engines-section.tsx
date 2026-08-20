"use client";

import * as React from "react";
import { CodeBlock } from "@/components/code-block";
import { useTranslation } from "react-i18next";

export function EnginesSection() {
  const { t } = useTranslation();

  return (
    <section
      id="engines"
      className="scroll-mt-24 space-y-4 border-b border-zinc-200 py-12 dark:border-zinc-800"
    >
      <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-zinc-500 uppercase">
        <span>{t("docs.engines.badge")}</span>
      </div>
      <h2 className="text-foreground text-2xl font-bold tracking-tight">
        {t("docs.engines.heading")}
      </h2>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {t("docs.engines.description")}
      </p>

      <div className="space-y-3 pt-2">
        <h3 className="text-foreground text-base font-semibold">
          {t("docs.engines.commandsHeading")}
        </h3>
        <CodeBlock
          language="bash"
          code={t("docs.engines.code")}
        />
      </div>
    </section>
  );
}
