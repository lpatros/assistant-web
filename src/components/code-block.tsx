"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { CopyButton } from "@/components/ui/copy-button";
import { LuTerminal, LuFileCode } from "react-icons/lu";

export interface CodeTab {
  id: string;
  label: string;
  code: string;
  language?: string;
  icon?: React.ReactNode;
}

export interface CodeBlockProps {
  code?: string;
  language?: string;
  filename?: string;
  tabs?: CodeTab[];
  className?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = "bash",
  filename,
  tabs,
  className,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [activeTabId, setActiveTabId] = React.useState<string>(
    tabs && tabs.length > 0 ? tabs[0].id : "",
  );

  const activeCode =
    tabs && tabs.length > 0
      ? (tabs.find((t) => t.id === activeTabId)?.code ?? tabs[0].code)
      : (code ?? "");

  const activeLanguage =
    tabs && tabs.length > 0
      ? (tabs.find((t) => t.id === activeTabId)?.language ?? language)
      : language;

  const lines = activeCode.trim().split("\n");

  return (
    <div
      className={cn(
        "group relative my-4 overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-950 text-zinc-100 shadow-lg dark:border-zinc-800/80 dark:bg-zinc-950",
        className,
      )}
    >
      <div className="flex h-11 items-center justify-between border-b border-zinc-800/80 bg-zinc-900/90 px-4 py-2 text-xs">
        {tabs && tabs.length > 0 ? (
          <div className="flex items-center gap-1 overflow-x-auto">
            <div className="mr-2 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  type="button"
                  className={cn(
                    "flex cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
                    activeTabId === tab.id
                      ? "bg-zinc-800 text-zinc-100 shadow-sm"
                      : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200",
                  )}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-zinc-400">
            <div className="mr-1 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            </div>
            {filename ? (
              <div className="flex items-center gap-1.5 font-mono text-zinc-300">
                <LuFileCode size={14} className="text-zinc-400" />
                <span>{filename}</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 font-mono text-zinc-400">
                <LuTerminal size={14} />
                <span>{activeLanguage}</span>
              </div>
            )}
          </div>
        )}

        <div className="flex items-center gap-2">
          <CopyButton
            textToCopy={activeCode}
            variant="ghost"
            size="xs"
            className="h-7 text-xs text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
          />
        </div>
      </div>

      <div className="relative overflow-x-auto p-4 font-mono text-xs leading-relaxed sm:text-sm">
        <pre className="grid">
          {lines.map((line, index) => {
            const isComment =
              line.trim().startsWith("#") || line.trim().startsWith("//");
            const isPrompt =
              line.trim().startsWith("$") || line.trim().startsWith(">");
            const isOutput =
              line.trim().startsWith("ℹ") ||
              line.trim().startsWith("✔") ||
              line.trim().startsWith("•");

            return (
              <div key={index} className="table-row">
                {showLineNumbers && (
                  <span className="table-cell pr-4 text-right text-zinc-400 select-none">
                    {index + 1}
                  </span>
                )}
                <span
                  className={cn(
                    "table-cell",
                    isComment && "text-zinc-400 italic",
                    isPrompt && "font-medium text-cyan-400",
                    isOutput && "font-medium text-emerald-400",
                    !isComment && !isPrompt && !isOutput && "text-zinc-200",
                  )}
                >
                  {line || " "}
                </span>
              </div>
            );
          })}
        </pre>
      </div>
    </div>
  );
}
