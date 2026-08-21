"use client";

import * as React from "react";
import { LuChevronDown, LuCircleHelp } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { CodeBlock } from "../code-block";
import { useTranslation } from "react-i18next";
import { SITE_CONFIG } from "@/lib/constants";

interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

export function TroubleshootingAccordion() {
  const { t } = useTranslation();
  const [openIds, setOpenIds] = React.useState<string[]>([]);

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const faqs: FAQItem[] = [
    {
      id: "ps-exec",
      question: t("docs.troubleshooting.faqs.psExec.question"),
      answer: (
        <div className="space-y-2 text-xs text-zinc-600 sm:text-sm dark:text-zinc-400">
          <p>{t("docs.troubleshooting.faqs.psExec.p1")}</p>
          <CodeBlock
            code="Set-ExecutionPolicy RemoteSigned -Scope CurrentUser"
            language="powershell"
          />
          <p>{t("docs.troubleshooting.faqs.psExec.p2")}</p>
        </div>
      ),
    },
    {
      id: "git-bash-path",
      question: t("docs.troubleshooting.faqs.gitBashPath.question"),
      answer: (
        <div className="space-y-2 text-xs text-zinc-600 sm:text-sm dark:text-zinc-400">
          <p>{t("docs.troubleshooting.faqs.gitBashPath.p1")}</p>
          <p>{t("docs.troubleshooting.faqs.gitBashPath.p2")}</p>
        </div>
      ),
    },
    {
      id: "quotes-rule",
      question: t("docs.troubleshooting.faqs.quotesRule.question"),
      answer: (
        <div className="space-y-2 text-xs text-zinc-600 sm:text-sm dark:text-zinc-400">
          <p>{t("docs.troubleshooting.faqs.quotesRule.p1")}</p>
          <p>{t("docs.troubleshooting.faqs.quotesRule.p2")}</p>
          <CodeBlock
            code='assistant "Explique como funciona a arquitetura event-driven em Node.js"'
            language="bash"
          />
        </div>
      ),
    },
    {
      id: "ollama-think",
      question: t("docs.troubleshooting.faqs.ollamaThink.question"),
      answer: (
        <div className="space-y-2 text-xs text-zinc-600 sm:text-sm dark:text-zinc-400">
          <p>{t("docs.troubleshooting.faqs.ollamaThink.p1")}</p>
          <CodeBlock code="assistant think off" language="bash" />
          <p>{t("docs.troubleshooting.faqs.ollamaThink.p2")}</p>
          <CodeBlock
            code='assistant --no-think "Escreva um JSON de exemplo com 3 usuários"'
            language="bash"
          />
        </div>
      ),
    },
    {
      id: "update-rollback",
      question: t("docs.troubleshooting.faqs.updateRollback.question"),
      answer: (
        <div className="space-y-2 text-xs text-zinc-600 sm:text-sm dark:text-zinc-400">
          <p>{t("docs.troubleshooting.faqs.updateRollback.p1")}</p>
          <CodeBlock
            code={`assistant update --list\nassistant update @${SITE_CONFIG.version}`}
            language="bash"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="my-6 space-y-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-xs sm:p-6 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mb-4 flex items-center gap-2">
        <LuCircleHelp className="text-primary" size={20} />
        <h3 className="text-foreground text-sm font-semibold">
          {t("docs.troubleshooting.faqTitle")}
        </h3>
      </div>

      <div className="space-y-2">
        {faqs.map((faq) => {
          const isOpen = openIds.includes(faq.id);
          return (
            <div
              key={faq.id}
              className="overflow-hidden rounded-lg border border-zinc-200/80 bg-zinc-50/40 transition-all dark:border-zinc-800 dark:bg-zinc-900/30"
            >
              <button
                type="button"
                onClick={() => toggle(faq.id)}
                aria-expanded={isOpen}
                className="text-foreground flex w-full cursor-pointer items-center justify-between p-3.5 text-left text-xs font-medium transition-colors hover:bg-zinc-100/50 sm:text-sm dark:hover:bg-zinc-800/50"
              >
                <span>{faq.question}</span>
                <LuChevronDown
                  size={16}
                  className={cn(
                    "text-muted-foreground ml-2 shrink-0 transition-transform duration-200",
                    isOpen && "text-foreground rotate-180",
                  )}
                />
              </button>

              {isOpen && (
                <div className="animate-in fade-in-50 border-t border-zinc-200/70 p-3.5 pt-2 duration-150 dark:border-zinc-800/80">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
