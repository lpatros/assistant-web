import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptBR from "@/locales/pt-BR.json";
import es from "@/locales/es.json";
import en from "@/locales/en.json";

export type SupportedLanguage = "pt-BR" | "es" | "en";

export const SUPPORTED_LANGUAGES: {
  code: SupportedLanguage;
  name: string;
  shortName: string;
}[] = [
  { code: "pt-BR", name: "Português (Brasil)", shortName: "PT-BR" },
  { code: "es", name: "Español", shortName: "ES" },
  { code: "en", name: "English (US)", shortName: "EN"},
];

export const DEFAULT_LANGUAGE: SupportedLanguage = "en";
export const LANGUAGE_STORAGE_KEY = "assistant_lang";

export const resources = {
  "pt-BR": { translation: ptBR },
  es: { translation: es },
  en: { translation: en },
} as const;

export function normalizeLanguage(lang: string | null | undefined): SupportedLanguage | null {
  if (!lang) return null;
  const lower = lang.toLowerCase().trim();
  if (lower === "pt-br" || lower === "pt" || lower.startsWith("pt-") || lower.startsWith("pt_")) {
    return "pt-BR";
  }
  if (lower === "es" || lower.startsWith("es-") || lower.startsWith("es_")) {
    return "es";
  }
  if (lower === "en" || lower.startsWith("en-") || lower.startsWith("en_")) {
    return "en";
  }
  return null;
}

export function detectLanguage(): SupportedLanguage {
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      const normalizedStored = normalizeLanguage(stored);
      if (normalizedStored) {
        return normalizedStored;
      }
    } catch {
    }

    if (typeof navigator !== "undefined") {
      const navLangs = navigator.languages && navigator.languages.length > 0
        ? navigator.languages
        : [navigator.language];

      for (const l of navLangs) {
        const normalized = normalizeLanguage(l);
        if (normalized) {
          return normalized;
        }
      }
    }
  }

  return DEFAULT_LANGUAGE;
}

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: "pt-BR",
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });
}

export async function setAppLanguage(lang: SupportedLanguage) {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch {
    }
    document.documentElement.lang = lang;
  }
  return i18n.changeLanguage(lang);
}

export default i18n;
