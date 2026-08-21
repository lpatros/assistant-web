"use client";

import * as React from "react";
import { CodeBlock } from "@/components/code-block";
import { useTranslation } from "react-i18next";

export function ModelsSection() {
  const { t } = useTranslation();

  return (
    <section
      id="models"
      className="scroll-mt-24 space-y-4 border-b border-zinc-200 py-12 dark:border-zinc-800"
    >
      <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
        <span>{t("docs.models.badge")}</span>
      </div>
      <h2 className="text-foreground text-2xl font-bold tracking-tight">
        {t("docs.models.heading")}
      </h2>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {t("docs.models.description")}
      </p>

      <CodeBlock
        language="bash"
        code={t("docs.models.code")}
      />

      <div id="config-file" className="scroll-mt-24 space-y-3 pt-4">
        <h3 className="text-foreground text-base font-semibold">
          {t("docs.models.configTitle")}
        </h3>
        <p className="text-muted-foreground text-xs">
          {t("docs.models.configDesc")}
        </p>

        <CodeBlock
          filename="data/config.txt"
          language="ini"
          code={`ASSISTANT_ENGINE="ollama"
ASSISTANT_MODEL_AGY="gemini-3.7-flash-high"
ASSISTANT_MODEL_CODEX="codex-preview"
ASSISTANT_MODEL_COPILOT="copilot-chat"
ASSISTANT_MODEL_OLLAMA="gemma4:e2b"
ASSISTANT_MODEL_OPENCODE="opencode/big-pickle"
ASSISTANT_MODEL_OLLAMA_THINK_FLAG="--think=false"
ASSISTANT_LANG="pt-br"
ASSISTANT_CHANNEL="stable"`}
        />
      </div>
    </section>
  );
}
