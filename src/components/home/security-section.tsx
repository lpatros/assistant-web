"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { LuShieldCheck, LuExternalLink, LuTerminal } from "react-icons/lu";
import { buttonVariants } from "../ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export function SecuritySection() {
  const { t } = useTranslation();

  return (
    <section
      id="security"
      className="border-border/60 bg-muted/20 relative border-t py-16 md:py-24 dark:bg-zinc-950/50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-6">
            <h2 className="text-foreground text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
              {t("security.heading")}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
              {t("security.description")}
            </p>

            <div className="space-y-8 pt-2">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border">
                  <LuShieldCheck size={14} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-foreground text-sm font-semibold">
                    {t("security.noRootTitle")}
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    {t("security.noRootDesc")}
                  </p>
                </div>
              </div>
              <a
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "inline-flex items-center justify-center gap-2 px-5 py-3 h-auto min-h-9"
                )}
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{t("security.githubBtn")}</span>
                <LuExternalLink size={12} />
              </a>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-6">
            <Card className="border-border bg-card backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="text-foreground flex items-center gap-2 font-mono text-sm font-semibold">
                    <LuTerminal size={16} className="" />
                    <span>{t("security.linuxCardTitle")}</span>
                  </div>
                  <Badge variant="secondary" className="text-[10px]">
                    Bash
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-xs">
                <p className="text-muted-foreground leading-relaxed">
                  {t("security.linuxCardDesc")}
                </p>
                <div className="border-border bg-muted rounded-lg border p-2.5 font-mono text-[11px] dark:border-zinc-800 dark:bg-zinc-950">
                  curl -fsSL /install.sh | less
                </div>
                <div className="flex justify-end pt-2">
                  <a
                    href="/install.sh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "inline-flex items-center gap-1.5 text-xs font-medium h-auto py-1 px-1.5 min-h-[24px]"
                    )}
                  >
                    <span>{t("security.viewScript")}</span>
                    <LuExternalLink size={12} />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="text-foreground flex items-center gap-2 font-mono text-sm font-semibold">
                    <LuTerminal size={16} className="" />
                    <span>{t("security.winCardTitle", "Windows")}</span>
                  </div>
                  <Badge variant="secondary" className="text-[10px]">
                    PowerShell
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-xs">
                <p className="text-muted-foreground leading-relaxed">
                  {t("security.winCardDesc")}
                </p>
                <div className="border-border bg-muted rounded-lg border p-2.5 font-mono text-[11px] dark:border-zinc-800 dark:bg-zinc-950">
                  irm /install.ps1 | more
                </div>
                <div className="flex justify-end pt-2">
                  <a
                    href="/install.ps1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "inline-flex items-center gap-1.5 text-xs font-medium h-auto py-1 px-1.5 min-h-[24px]"
                    )}
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
