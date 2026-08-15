"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { LuChevronDown } from "react-icons/lu";
import { Styles } from "./faq.styles";
import { useTranslation } from "react-i18next";

export function FAQSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const rawFaqs = t("faq.items", {
    version: SITE_CONFIG.version,
    returnObjects: true,
  });

  const faqs = (
    Array.isArray(rawFaqs) ? rawFaqs : []
  ) as Array<{ question: string; answer: string }>;

  return (
    <section id="faq" className={Styles().section()}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            {t("faq.heading")}
          </h2>
          <p className="text-muted-foreground mt-3 text-sm sm:text-base">
            {t(
              "faq.subheading",
            )}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const formattedAnswer = faq?.answer?.replace(
              "{{version}}",
              SITE_CONFIG.version || "1.0.0",
            ) || "";

            return (
              <div
                key={index}
                className="border-border bg-card hover:border-primary/50 rounded-xl border backdrop-blur-sm transition-colors dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:border-zinc-700/80"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="text-foreground flex w-full cursor-pointer items-center justify-between p-5 text-left font-medium select-none focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-foreground text-base font-semibold">
                    {faq.question}
                  </span>
                  <LuChevronDown
                    size={18}
                    className={`text-muted-foreground shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 text-cyan-500 dark:text-cyan-400"
                        : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="text-muted-foreground border-border/40 mt-1 border-t px-5 pt-0 pb-5 text-sm leading-relaxed dark:border-zinc-800/40">
                    <p className="pt-3">{formattedAnswer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
