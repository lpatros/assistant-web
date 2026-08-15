"use client";

import React, { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n, { detectLanguage, setAppLanguage } from "@/lib/i18n";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const initialLang = detectLanguage();
    setAppLanguage(initialLang).then(() => {
      setReady(true);
    });
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
