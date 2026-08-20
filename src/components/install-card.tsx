"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CopyButton } from "@/components/ui/copy-button";
import { FaLinux, FaApple, FaWindows, FaTerminal } from "react-icons/fa";
import { LuChevronRight } from "react-icons/lu";
import { useOsDetection } from "@/hooks/use-os-detection";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export function InstallCard({ showShadow = true, showDemo = true }: { showShadow?: boolean, showDemo?: boolean }) {
  const { t } = useTranslation();
  const detectedOs = useOsDetection();
  const [selectedTab, setSelectedTab] = useState<string>("linux");
  const [origin, setOrigin] = useState<string>(`https://${process.env.NEXT_PUBLIC_BASE_URL}`);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  useEffect(() => {
    if (detectedOs === "windows") {
      setSelectedTab("windows");
    } else if (detectedOs === "macos") {
      setSelectedTab("macos");
    } else {
      setSelectedTab("linux");
    }
  }, [detectedOs]);

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className={cn("absolute -inset-1 rounded-2xl opacity-75 blur-xl transition-all duration-500", showShadow ? "bg-linear-to-r from-cyan-500/20 via-indigo-500/25 to-purple-600/20" : "")} />

      <div className="relative overflow-hidden rounded-2xl border border-zinc-700/60 bg-zinc-950/90 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-zinc-800/90 bg-zinc-900/70 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block ring-1 ring-red-400/20" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block ring-1 ring-yellow-400/20" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block ring-1 ring-emerald-400/20" />
            <span className="ml-2 font-mono text-xs text-zinc-400 select-none flex items-center gap-1.5">
              <FaTerminal size={13} className="text-zinc-500" />
              {t("install.terminal", "terminal")}
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-6 lg:p-7">
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
              <TabsList className="grid grid-cols-3 w-full sm:w-auto h-auto p-1 bg-zinc-900 border border-zinc-800">
                <TabsTrigger
                  value="linux"
                  className="py-2 text-xs sm:text-sm font-medium text-zinc-400 hover:text-zinc-200 data-active:bg-zinc-800 data-active:text-white data-active:shadow-sm"
                >
                  <FaLinux size={16} />
                  <span>Linux</span>
                </TabsTrigger>
                <TabsTrigger
                  value="macos"
                  className="py-2 text-xs sm:text-sm font-medium text-zinc-400 hover:text-zinc-200 data-active:bg-zinc-800 data-active:text-white data-active:shadow-sm"
                >
                  <FaApple size={16} />
                  <span>macOS</span>
                </TabsTrigger>
                <TabsTrigger
                  value="windows"
                  className="py-2 text-xs sm:text-sm font-medium text-zinc-400 hover:text-zinc-200 data-active:bg-zinc-800 data-active:text-white data-active:shadow-sm"
                >
                  <FaWindows size={16} />
                  <span>Windows</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="linux" className="mt-0 space-y-4">
              <div className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-zinc-800 bg-zinc-900/90 p-3.5 sm:p-4 font-mono text-sm shadow-inner transition-colors hover:border-zinc-700">
                <div className="flex items-start sm:items-center gap-3 overflow-x-auto text-zinc-100 pr-2">
                  <span className="select-none text-cyan-400 font-bold">$</span>
                  <code className="text-xs sm:text-sm text-cyan-300 font-semibold tracking-wide whitespace-nowrap">
                    curl -fsSL {origin}/install.sh | bash
                  </code>
                </div>
                <div className="shrink-0 flex items-center justify-end">
                  <CopyButton
                    textToCopy={`curl -fsSL ${origin}/install.sh | bash`}
                    variant="outline"
                    size="sm"
                    className="w-full sm:w-auto border-zinc-700 bg-zinc-800/90 text-zinc-200 hover:bg-zinc-700 hover:text-white"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="macos" className="mt-0 space-y-4">
              <div className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-zinc-800 bg-zinc-900/90 p-3.5 sm:p-4 font-mono text-sm shadow-inner transition-colors hover:border-zinc-700">
                <div className="flex items-start sm:items-center gap-3 overflow-x-auto text-zinc-100 pr-2">
                  <span className="select-none text-indigo-400 font-bold">%</span>
                  <code className="text-xs sm:text-sm text-indigo-300 font-semibold tracking-wide whitespace-nowrap">
                    curl -fsSL {origin}/install.sh | bash
                  </code>
                </div>
                <div className="shrink-0 flex items-center justify-end">
                  <CopyButton
                    textToCopy={`curl -fsSL ${origin}/install.sh | bash`}
                    variant="outline"
                    size="sm"
                    className="w-full sm:w-auto border-zinc-700 bg-zinc-800/90 text-zinc-200 hover:bg-zinc-700 hover:text-white"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="windows" className="mt-0 space-y-4">
              <div className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-zinc-800 bg-zinc-900/90 p-3.5 sm:p-4 font-mono text-sm shadow-inner transition-colors hover:border-zinc-700">
                <div className="flex items-start sm:items-center gap-3 overflow-x-auto text-zinc-100 pr-2">
                  <span className="select-none text-sky-400 font-bold">PS&gt;</span>
                  <code className="text-xs sm:text-sm text-sky-300 font-semibold tracking-wide whitespace-nowrap">
                    irm {origin}/install.ps1 | iex
                  </code>
                </div>
                <div className="shrink-0 flex items-center justify-end">
                  <CopyButton
                    textToCopy={`irm ${origin}/install.ps1 | iex`}
                    variant="outline"
                    size="sm"
                    className="w-full sm:w-auto border-zinc-700 bg-zinc-800/90 text-zinc-200 hover:bg-zinc-700 hover:text-white"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-zinc-800/80 pt-4 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-zinc-300">
                {t("install.afterInstall")}
              </span>
              <code className="rounded bg-zinc-900 px-2 py-0.5 font-mono text-zinc-200 border border-zinc-800">
                assistant --version 
              </code>
            </div>
            {showDemo && (
              <a
              href="#demo"
              className="flex flex-row items-center justify-center gap-1 text-zinc-400 hover:text-zinc-100 transition-colors underline underline-offset-4"
            >
              <span>{t("install.viewDemo")}</span>
              <LuChevronRight size={15} />
            </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
