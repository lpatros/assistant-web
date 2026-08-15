"use client";

import { useState } from "react";
import { FAQS, SITE_CONFIG } from "@/lib/constants";
import { LuChevronDown } from "react-icons/lu";
import { Styles } from "./faq.styles";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={Styles().section()}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Perguntas & Respostas
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Tudo o que você precisa saber sobre a instalação e operação do {SITE_CONFIG.name}.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-sm transition-colors hover:border-zinc-700/80"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-5 text-left font-medium text-zinc-200 cursor-pointer select-none focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-zinc-100">{faq.question}</span>
                  <LuChevronDown
                    size={18}
                    className={`shrink-0 text-zinc-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-cyan-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/40 mt-1">
                    <p className="pt-3">{faq.answer}</p>
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
