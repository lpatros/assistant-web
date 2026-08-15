"use client";

import { FEATURES } from "@/lib/constants";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

export function FeaturesGrid() {
  const { t } = useTranslation();
  const rawItems = t("features.items", { returnObjects: true });
  const translatedItems = Array.isArray(rawItems)
    ? (rawItems as Array<{ title: string; description: string; tag?: string }>)
    : [];

  return (
    <section
      id="features"
      className="relative border-t border-border/60 bg-muted/20 py-16 md:py-24 dark:bg-zinc-950/50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("features.heading")}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            {t(
              "features.subheading",
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, idx) => {
            const item = translatedItems[idx];

            return (
              <Card
                key={idx}
                className="group border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:border-zinc-700/90 dark:hover:bg-zinc-900/70"
              >
                <CardHeader className="pb-3">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted/80 transition-transform group-hover:scale-105 dark:border-zinc-700/50 dark:bg-zinc-800/80">
                      <feature.icon.name
                        size={20}
                        className={feature.icon.className}
                      />
                    </div>
                    {item.tag && (
                      <Badge
                        variant="secondary"
                        className="font-mono text-[11px]"
                      >
                        {item.tag}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
