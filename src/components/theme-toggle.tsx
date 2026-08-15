"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { LuSun, LuMoon, LuRotateCcw  } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const { t } = useTranslation();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        aria-label={t("theme.toggleTheme")}
        disabled
        className="opacity-50"
      >
        <LuRotateCcw size={16} />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";
  const label = isDark
    ? t("theme.lightMode")
    : t("theme.darkMode");

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
    >
      {isDark ? <LuSun size={16} /> : <LuMoon size={16} />}
    </Button>
  );
}
