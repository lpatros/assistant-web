"use client";

import * as React from "react";
import { CodeBlock } from "@/components/code-block";
import { useTranslation } from "react-i18next";

export function ThinkModeSection() {
  const { t } = useTranslation();

  return (
    <section
      id="think-mode"
      className="scroll-mt-24 space-y-4 border-b border-zinc-200 py-12 dark:border-zinc-800"
    >
      <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
        <span>{t("docs.thinkMode.badge")}</span>
      </div>
      <h2 className="text-foreground text-2xl font-bold tracking-tight">
        {t("docs.thinkMode.heading")}
      </h2>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {t("docs.thinkMode.description")}
      </p>

      <div className="flex flex-col gap-4">
        <div className="space-y-2 rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
          <h3 className="text-foreground text-xs font-semibold tracking-wider uppercase">
            {t("docs.thinkMode.persistentTitle")}
          </h3>
          <CodeBlock
            language="bash"
            code={t("docs.thinkMode.persistentCode")}
          />
        </div>

        <div className="space-y-2 rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
          <h3 className="text-foreground text-xs font-semibold tracking-wider uppercase">
            {t("docs.thinkMode.runtimeTitle")}
          </h3>
          <CodeBlock
            language="bash"
            code={t("docs.thinkMode.runtimeCode")}
          />
        </div>
      </div>
    </section>
  );
}
