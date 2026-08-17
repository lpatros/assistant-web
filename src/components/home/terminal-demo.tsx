"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { CopyButton } from "@/components/ui/copy-button";
import { LuChevronRight } from "react-icons/lu";
import { useTranslation } from "react-i18next";

export function TerminalDemo() {
  const { t } = useTranslation();
  const [activeExampleIndex, setActiveExampleIndex] = useState(0);

  const rawExamples = t("demo.items", {
    version: SITE_CONFIG.version || "1.0.0",
    returnObjects: true,
  });

  const examples = rawExamples as Array<{
    title: string;
    command: string;
    output: string[];
  }>;

  const activeExample = examples[activeExampleIndex] || examples[0];

  return (
    <section
      id="demo"
      className="border-border/60 bg-background relative border-t py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            {t("demo.heading")}
          </h2>
          <p className="text-muted-foreground mt-3 text-sm sm:text-base">
            {t("demo.subheading")}
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
          <div className="flex flex-col gap-2.5 lg:col-span-4">
            <span className="text-muted-foreground mb-1 px-1 text-xs font-semibold tracking-wider uppercase">
              {t("demo.sidebarTitle")}
            </span>
            {examples?.map((example, idx) => {
              const isSelected = activeExampleIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveExampleIndex(idx)}
                  className={`flex cursor-pointer items-center justify-between rounded-xl border p-3.5 text-left transition-all ${
                    isSelected
                      ? "bg-card text-foreground border-zinc-900/50 shadow-[0_0_15px_rgba(99,102,241,0.12)] dark:border-white/50 dark:bg-zinc-900 dark:text-white"
                      : "bg-card/40 border-border text-muted-foreground hover:bg-card hover:text-foreground dark:border-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-400 dark:hover:bg-zinc-900/60 dark:hover:text-zinc-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        isSelected
                          ? "bg-zinc-900 dark:bg-white"
                          : "bg-muted-foreground/40"
                      }`}
                    />
                    <span className="text-sm font-medium">{example.title}</span>
                  </div>
                  <LuChevronRight
                    size={16}
                    className={`transition-transform ${
                      isSelected
                        ? "translate-x-0.5 text-zinc-900 dark:text-white"
                        : "text-muted-foreground"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-2xl border border-zinc-700/60 bg-zinc-950 font-mono text-sm shadow-2xl">
              <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/80 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-3 w-3 rounded-full bg-zinc-700" />
                  <span className="inline-block h-3 w-3 rounded-full bg-zinc-700" />
                  <span className="inline-block h-3 w-3 rounded-full bg-zinc-700" />
                  <span className="ml-2 text-xs text-zinc-400">
                    user@workstation: ~ ({activeExample?.title})
                  </span>
                </div>
                <CopyButton
                  textToCopy={activeExample?.command || ""}
                  label={t("demo.copy")}
                  copiedLabel={t("demo.copied")}
                  size="sm"
                  variant="outline"
                  className="h-7 border-zinc-700 bg-zinc-800/90 text-xs text-zinc-200 hover:bg-zinc-700 hover:text-white"
                />
              </div>

              <div className="min-h-65 space-y-3 overflow-x-auto bg-zinc-950/90 p-5">
                <div className="flex items-center gap-2 font-semibold text-zinc-100">
                  <span className="text-cyan-400 select-none">$</span>
                  <span className="text-cyan-200">{activeExample.command}</span>
                </div>

                <div className="my-2 space-y-1.5 border-t border-zinc-800/60 pt-2 text-xs text-zinc-300">
                  {activeExample.output.map((rawLine, i) => {
                    const line = rawLine.replace(
                      "{{version}}",
                      SITE_CONFIG.version || "1.0.0",
                    );
                    const isSuccess = line.startsWith("✔");
                    const isStep =
                      line.startsWith("==>") || line.startsWith(">>");
                    const isTree =
                      line.includes("├──") ||
                      line.includes("└──") ||
                      line.startsWith("●");

                    return (
                      <div
                        key={i}
                        className={`${
                          isSuccess
                            ? "font-medium text-emerald-400"
                            : isStep
                              ? "text-indigo-300"
                              : isTree
                                ? "text-zinc-300"
                                : "text-zinc-400"
                        }`}
                      >
                        {line}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
