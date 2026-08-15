"use client";

import { useState } from "react";
import { CLI_EXAMPLES } from "@/lib/constants";
import { CopyButton } from "@/components/ui/copy-button";
import { LuChevronRight } from "react-icons/lu";

export function TerminalDemo() {
  const [activeExampleIndex, setActiveExampleIndex] = useState(0);
  const activeExample = CLI_EXAMPLES[activeExampleIndex];

  return (
    <section id="demo" className="py-16 md:py-24 border-t border-zinc-800/60 bg-zinc-950/80 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Simplicidade na Ponta dos Dedos
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Veja como é simples instalar, configurar e interagir com o Assistant CLI no seu dia a dia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 px-1 mb-1">
              Fluxos de Demonstração
            </span>
            {CLI_EXAMPLES.map((example, idx) => {
              const isSelected = activeExampleIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveExampleIndex(idx)}
                  className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? "bg-zinc-900 border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.15)] text-white"
                      : "bg-zinc-900/30 border-zinc-800 text-zinc-400 hover:bg-zinc-900/60 hover:text-zinc-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        isSelected ? "bg-indigo-400" : "bg-zinc-700"
                      }`}
                    />
                    <span className="text-sm font-medium">{example.title}</span>
                  </div>
                  <LuChevronRight
                    size={16}
                    className={`transition-transform ${
                      isSelected ? "text-indigo-400 translate-x-0.5" : "text-zinc-600"
                    }`}
                  />
                </button>
              );
            })}

          </div>

          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-zinc-700/60 bg-zinc-950 shadow-2xl overflow-hidden font-mono text-sm">
              <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/80 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-zinc-700 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-zinc-700 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-zinc-700 inline-block" />
                  <span className="ml-2 text-xs text-zinc-400">
                    user@workstation: ~ ({activeExample.title})
                  </span>
                </div>
                <CopyButton
                  textToCopy={activeExample.command}
                  label="Copiar"
                  size="sm"
                  variant="outline"
                  className="h-7 text-xs"
                />
              </div>

              <div className="p-5 space-y-3 bg-zinc-950/90 overflow-x-auto min-h-65">
                <div className="flex items-center gap-2 text-zinc-100 font-semibold">
                  <span className="text-cyan-400 select-none">$</span>
                  <span className="text-cyan-200">{activeExample.command}</span>
                </div>

                <div className="border-t border-zinc-800/60 my-2 pt-2 space-y-1.5 text-xs text-zinc-300">
                  {activeExample.output.map((line, i) => {
                    const isSuccess = line.startsWith("✔");
                    const isStep = line.startsWith("==>") || line.startsWith(">>");
                    const isTree = line.includes("├──") || line.includes("└──") || line.startsWith("●");

                    return (
                      <div
                        key={i}
                        className={`${
                          isSuccess
                            ? "text-emerald-400 font-medium"
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
