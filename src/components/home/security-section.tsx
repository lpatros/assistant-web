"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  LuShieldCheck,
  LuExternalLink,
  LuTerminal,
} from "react-icons/lu";
import { Button } from "../ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { useTranslation } from "react-i18next";

export function SecuritySection() {
  const { t } = useTranslation();

  return (
    <section
      id="security"
      className="relative border-t border-border/60 bg-muted/20 py-16 md:py-24 dark:bg-zinc-950/50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-6">
            <h2 className="text-3xl leading-tight font-bold tracking-tight text-foreground sm:text-4xl">
              {t("security.heading")}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t(
                "security.description",
              )}
            </p>

            <div className="space-y-8 pt-2">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:border-emerald-800/50 dark:bg-emerald-950/60 dark:text-emerald-400">
                  <LuShieldCheck size={14} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    {t("security.noRootTitle")}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {t(
                      "security.noRootDesc",
                    )}
                  </p>
                </div>
              </div>
              <Button className="px-5 py-3" variant="outline">
                <a
                  className="flex flex-row items-center justify-center gap-2"
                  href={SITE_CONFIG.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("security.githubBtn")}
                  <LuExternalLink size={12} />
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-6">
            <Card className="border-border bg-card dark:border-zinc-800/80 dark:bg-zinc-900/50 backdrop-blur-md">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground">
                    <LuTerminal size={16} className="text-cyan-500 dark:text-cyan-400" />
                    <span>{t("security.linuxCardTitle")}</span>
                  </div>
                  <Badge variant="secondary" className="text-[10px]">
                    Bash
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-xs">
                <p className="leading-relaxed text-muted-foreground">
                  {t(
                    "security.linuxCardDesc",
                  )}
                </p>
                <div className="rounded-lg border border-border bg-muted dark:border-zinc-800 dark:bg-zinc-950 p-2.5 font-mono text-[11px] text-cyan-600 dark:text-cyan-300">
                  curl -fsSL /install.sh | less
                </div>
                <div className="flex justify-end pt-2">
                  <a
                    href="/install.sh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-500 transition-colors hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    <span>{t("security.viewScript")}</span>
                    <LuExternalLink size={12} />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card dark:border-zinc-800/80 dark:bg-zinc-900/50 backdrop-blur-md">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground">
                    <LuTerminal size={16} className="text-sky-500 dark:text-sky-400" />
                    <span>{t("security.winCardTitle", "Windows")}</span>
                  </div>
                  <Badge variant="secondary" className="text-[10px]">
                    PowerShell
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-xs">
                <p className="leading-relaxed text-muted-foreground">
                  {t(
                    "security.winCardDesc",
                  )}
                </p>
                <div className="rounded-lg border border-border bg-muted dark:border-zinc-800 dark:bg-zinc-950 p-2.5 font-mono text-[11px] text-sky-600 dark:text-sky-300">
                  irm /install.ps1 | more
                </div>
                <div className="flex justify-end pt-2">
                  <a
                    href="/install.ps1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-500 transition-colors hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300"
                  >
                    <span>{t("security.viewScript")}</span>
                    <LuExternalLink size={12} />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
