"use client";

import * as React from "react";
import { LuSearch, LuX, LuCornerDownLeft } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { SEARCH_INDEX } from "@/lib/constants";
import { SearchEntry } from "@/types/docs.types";
import { useTranslation } from "react-i18next";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect?: (id: string) => void;
}

export function SearchDialog({ isOpen, onClose, onSelect }: SearchDialogProps) {
  const { t } = useTranslation();
  const [query, setQuery] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const searchItems: SearchEntry[] = React.useMemo(() => {
    const raw = t("docs.search.items", { returnObjects: true });
    return Array.isArray(raw) && raw.length > 0 ? (raw as SearchEntry[]) : SEARCH_INDEX;
  }, [t]);

  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  const results = React.useMemo(() => {
    if (!query.trim()) return searchItems.slice(0, 7);

    const q = query.toLowerCase().trim();
    return searchItems.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchSnippet = item.snippet.toLowerCase().includes(q);
      const matchCategory = item.category.toLowerCase().includes(q);
      const matchKeywords = item.keywords?.some((k) =>
        k.toLowerCase().includes(q),
      );
      return matchTitle || matchSnippet || matchCategory || matchKeywords;
    });
  }, [query, searchItems]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      e.preventDefault();
      handleSelect(results[selectedIndex].anchor);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  const handleSelect = (anchor: string) => {
    onClose();
    const id = anchor.replace("#", "");
    onSelect?.(id);
    const element = document.getElementById(id) || document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", anchor);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="animate-in fade-in-0 fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 pt-16 backdrop-blur-xs duration-150 sm:pt-24"
      onClick={onClose}
    >
      <div
        className="animate-in zoom-in-95 w-full max-w-2xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl duration-150 dark:border-zinc-800 dark:bg-zinc-950"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex items-center border-b border-zinc-200 px-4 dark:border-zinc-800">
          <LuSearch
            className="mr-3 shrink-0 text-zinc-400 dark:text-zinc-500"
            size={18}
          />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder={t("docs.search.placeholder")}
            className="text-foreground placeholder:text-muted-foreground h-14 w-full bg-transparent text-sm focus:outline-hidden"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label={t("docs.search.close", "Fechar busca")}
            className="cursor-pointer rounded-md p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-900 dark:hover:text-zinc-200"
          >
            <LuX size={18} />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto p-2">
          {results.length === 0 ? (
            <div className="text-muted-foreground py-12 text-center text-xs">
              {t("docs.search.noResults", { query, defaultValue: `No results found for "${query}".` })}
            </div>
          ) : (
            results.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item.anchor)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={cn(
                    "flex cursor-pointer items-start justify-between gap-3 rounded-xl p-3 text-left transition-colors",
                    isSelected
                      ? "bg-primary/90 text-primary-foreground"
                      : "text-foreground hover:bg-zinc-50 dark:hover:bg-zinc-900/60",
                  )}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold sm:text-sm">
                        {item.title}
                      </span>
                      <span
                        className={cn(
                          "rounded-md px-1.5 py-0.5 text-[10px] font-medium tracking-wider uppercase",
                          isSelected
                            ? "bg-primary-foreground/90 text-primary"
                            : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
                        )}
                      >
                        {item.category}
                      </span>
                    </div>
                    <p className={cn("line-clamp-1 text-xs", isSelected ? "text-primary-foreground/80" : "text-foreground/50")}>
                      {item.snippet}
                    </p>
                  </div>

                  {isSelected && (
                    <LuCornerDownLeft
                      size={15}
                      className="mt-1 shrink-0 text-primary-foreground"
                    />
                  )}
                </div>
              );
            })
          )}
        </div>

        <div className="text-muted-foreground flex items-center justify-between border-t border-zinc-200 bg-zinc-50/80 px-4 py-2.5 text-[11px] dark:border-zinc-800 dark:bg-zinc-900/40">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-zinc-200 bg-white px-1.5 py-0.5 font-mono shadow-2xs dark:border-zinc-800 dark:bg-zinc-950">
                ↑
              </kbd>
              <kbd className="rounded border border-zinc-200 bg-white px-1.5 py-0.5 font-mono shadow-2xs dark:border-zinc-800 dark:bg-zinc-950">
                ↓
              </kbd>{" "}
              {t("docs.search.navigate")}
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-zinc-200 bg-white px-1.5 py-0.5 font-mono shadow-2xs dark:border-zinc-800 dark:bg-zinc-950">
                ↵
              </kbd>{" "}
              {t("docs.search.select")}
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-zinc-200 bg-white px-1.5 py-0.5 font-mono shadow-2xs dark:border-zinc-800 dark:bg-zinc-950">
                esc
              </kbd>{" "}
              {t("docs.search.close")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
