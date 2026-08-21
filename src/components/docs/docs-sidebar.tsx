"use client";

import * as React from "react";
import { DOCS_NAV_GROUPS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface DocsSidebarProps {
  activeId?: string;
  onSelect?: (id: string) => void;
  className?: string;
}

export function DocsSidebar({
  activeId,
  onSelect,
  className,
}: DocsSidebarProps) {
  const { t } = useTranslation();
  const activeItemRef = React.useRef<HTMLAnchorElement | null>(null);

  React.useEffect(() => {
    if (activeItemRef.current) {
      activeItemRef.current.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [activeId]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
    href: string,
  ) => {
    e.preventDefault();
    onSelect?.(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <aside
      className={cn(
        "w-64 shrink-0 scrollbar-thin space-y-5 overflow-y-auto py-6 pr-4 text-xs",
        className,
      )}
    >
      {DOCS_NAV_GROUPS.map((group) => {
        const groupTitle = group.titleKey ? t(group.titleKey, group.title) : group.title;

        return (
          <div key={group.title} className="space-y-1">
            <div className="text-muted-foreground px-3 text-[11px] font-semibold tracking-wider uppercase">
              {groupTitle}
            </div>
            <div className="space-y-0.5 pt-1">
              {group.items.map((item) => {
                const isActive = activeId === item.id;
                const itemTitle = item.titleKey ? t(item.titleKey, item.title) : item.title;

                return (
                  <a
                    key={item.id}
                    ref={isActive ? activeItemRef : undefined}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.id, item.href)}
                    className={cn(
                      "group relative flex items-center justify-between rounded-lg px-3 py-2 font-medium transition-colors",
                      isActive
                        ? "bg-zinc-100 font-semibold text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100"
                        : "text-zinc-600 hover:bg-zinc-100/70 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900/60 dark:hover:text-zinc-100",
                    )}
                  >
                    <div className="flex items-center gap-2.5">
                      {isActive && (
                        <span className="absolute left-0 top-1.5 bottom-1.5 w-1 rounded-full bg-primary" />
                      )}
                      <span>{itemTitle}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </aside>
  );
}
