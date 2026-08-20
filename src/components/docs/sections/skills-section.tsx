"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Callout } from "@/components/callout";
import { CodeBlock } from "@/components/code-block";
import { useTranslation } from "react-i18next";

export function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section className="space-y-6 border-b border-zinc-200 py-12 dark:border-zinc-800">
      <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-zinc-500 uppercase">
        <span>{t("docs.skills.badge")}</span>
      </div>
      <h2 className="text-foreground text-2xl font-bold tracking-tight">
        {t("docs.skills.heading")}
      </h2>

      <div
        id="skill-commit"
        className="scroll-mt-24 space-y-3 rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-foreground flex items-center gap-2 text-base font-bold">
            <span>{t("docs.skills.commit.title")}</span>
          </h3>
          <Badge variant="outline" className="text-xs">
            {t("docs.skills.commit.badge")}
          </Badge>
        </div>
        <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
          {t("docs.skills.commit.description")}
        </p>

        <Callout type="note" title={t("docs.skills.commit.calloutTitle")}>
          {t("docs.skills.commit.calloutText")}
        </Callout>

        <CodeBlock
          filename={t("docs.skills.commit.codeFilename")}
          language="bash"
          code={t("docs.skills.commit.code")}
        />
      </div>

      <div
        id="skill-resume"
        className="scroll-mt-24 space-y-3 rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-foreground flex items-center gap-2 text-base font-bold">
            <span>{t("docs.skills.resume.title")}</span>
          </h3>
          <Badge variant="outline" className="text-xs">
            {t("docs.skills.resume.badge")}
          </Badge>
        </div>
        <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
          {t("docs.skills.resume.description")}
        </p>

        <CodeBlock
          language="bash"
          code={t("docs.skills.resume.code")}
        />
      </div>

      <div
        id="skill-readme"
        className="scroll-mt-24 space-y-3 rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-foreground flex items-center gap-2 text-base font-bold">
            <span>{t("docs.skills.readme.title")}</span>
          </h3>
          <Badge variant="outline" className="text-xs">
            {t("docs.skills.readme.badge")}
          </Badge>
        </div>
        <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
          {t("docs.skills.readme.description")}
        </p>

        <CodeBlock
          language="bash"
          code={t("docs.skills.readme.code")}
        />
      </div>
    </section>
  );
}
