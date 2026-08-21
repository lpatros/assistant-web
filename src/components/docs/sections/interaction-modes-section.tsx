"use client";

import * as React from "react";
import { CodeBlock } from "@/components/code-block";
import { useTranslation } from "react-i18next";

export function InteractionModesSection() {
  const { t } = useTranslation();

  return (
    <section
      id="interaction-modes"
      className="scroll-mt-24 space-y-4 border-b border-zinc-200 py-12 dark:border-zinc-800"
    >
      <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
        <span>{t("docs.interactionModes.badge")}</span>
      </div>
      <h2 className="text-foreground text-2xl font-bold tracking-tight">
        {t("docs.interactionModes.heading")}
      </h2>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {t("docs.interactionModes.description")}
      </p>

      <div className="flex flex-col gap-6">
        <div className="space-y-3 rounded-xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-950">
          <h3 className="text-foreground flex items-center gap-2 text-sm font-semibold">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/15 text-xs text-indigo-600 dark:text-indigo-400">
              1
            </span>
            <span>{t("docs.interactionModes.repl.title")}</span>
          </h3>
          <p className="text-muted-foreground text-xs">
            {t("docs.interactionModes.repl.description")}
          </p>
          <CodeBlock code="assistant" language="bash" />
        </div>

        <div className="space-y-3 rounded-xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-950">
          <h3 className="text-foreground flex items-center gap-2 text-sm font-semibold">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/15 text-xs text-indigo-600 dark:text-indigo-400">
              2
            </span>
            <span>{t("docs.interactionModes.oneshot.title")}</span>
          </h3>
          <p className="text-muted-foreground text-xs">
            {t("docs.interactionModes.oneshot.description")}
          </p>
          <CodeBlock
            code={t("docs.interactionModes.oneshot.exampleCode")}
            language="bash"
          />
        </div>
      </div>
    </section>
  );
}
