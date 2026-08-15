"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  SUPPORTED_LANGUAGES,
  SupportedLanguage,
  setAppLanguage,
  normalizeLanguage,
} from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { IoIosArrowDown } from "react-icons/io";

interface LanguageSelectorProps {
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  alignItemWithTrigger?: boolean;
  className?: string;
}

export function LanguageSelector({
  side,
  align = "end",
  sideOffset = 4,
  alignItemWithTrigger = false,
  className,
}: LanguageSelectorProps = {}) {
  const { i18n, t } = useTranslation();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const currentCode = (normalizeLanguage(i18n.language) || "en") as SupportedLanguage;

  const handleValueChange = (value: string | null) => {
    if (!value) return;
    const normalized = normalizeLanguage(value);
    if (normalized) {
      setAppLanguage(normalized);
    }
  };

  if (!mounted) {
    return (
      <div className={cn("flex h-8 items-center gap-1.5 rounded-lg border border-input bg-transparent px-2.5 py-1 text-xs font-medium text-muted-foreground opacity-60", className)}>
        <span>EN</span>
        <IoIosArrowDown />
      </div>
    );
  }

  const activeLang =
    SUPPORTED_LANGUAGES.find((lang) => lang.code === currentCode) ||
    SUPPORTED_LANGUAGES[0];

  return (
    <Select
      value={currentCode}
      onValueChange={handleValueChange}
    >
      <SelectTrigger
        size="sm"
        className={cn("h-8 gap-2 border-border/80 bg-background/50 hover:bg-accent/40 text-xs font-medium px-2.5 shadow-xs", className)}
        aria-label={t("languages.selectLanguage")}
      >
        <div className="flex items-center gap-1.5">
          <SelectValue>
            <span className="font-semibold">{activeLang.shortName}</span>
          </SelectValue>
        </div>
      </SelectTrigger>
      <SelectContent
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        className="min-w-44 border-border/80 bg-popover/95 backdrop-blur-md"
      >
        {SUPPORTED_LANGUAGES.map((lang) => (
          <SelectItem
            key={lang.code}
            value={lang.code}
            className="cursor-pointer text-xs py-1.5 flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span className="font-medium">{lang.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
