"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { InstallCard } from "@/components/home/install-card";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-28 min-h-screen">
      <div className="pointer-events-none absolute top-0 left-1/2 h-125 w-200 -translate-x-1/2 -translate-y-1/2" />
      <div className="pointer-events-none absolute top-1/3 right-10 h-100 w-100 " />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h1 className="text-4xl leading-[1.15] font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t("hero.title", SITE_CONFIG.name)}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("hero.description", SITE_CONFIG.description)}
          </p>
        </div>

        <div id="install" className="scroll-mt-24">
          <InstallCard />
        </div>
      </div>
    </section>
  );
}
