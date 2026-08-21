"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  LuInfo,
  LuLightbulb,
  LuShieldAlert,
} from "react-icons/lu";
import { FiAlertTriangle } from "react-icons/fi";
import { MdOutlineDangerous } from "react-icons/md";

export type CalloutType = "note" | "tip" | "important" | "warning" | "caution";

interface DocsCalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const CALLOUT_CONFIG: Record<
  CalloutType,
  {
    icon: React.ComponentType<{ className?: string; size?: number }>;
    defaultTitle: string;
    borderClass?: string;
    bgClass?: string;
    titleColor: string;
    iconColor: string;
  }
> = {
  note: {
    icon: LuInfo,
    defaultTitle: "Note",
    titleColor: "text-blue-900 dark:text-blue-300",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  tip: {
    icon: LuLightbulb,
    defaultTitle: "Tip",
    titleColor: "text-emerald-900 dark:text-emerald-300",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  important: {
    icon: FiAlertTriangle,
    defaultTitle: "Important",
    titleColor: "text-yellow-900 dark:text-yellow-300",
    iconColor: "text-yellow-600 dark:text-yellow-400",
  },
  warning: {
    icon: LuShieldAlert,
    defaultTitle: "Warning",
    titleColor: "text-amber-900 dark:text-amber-300",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  caution: {
    icon: MdOutlineDangerous,
    defaultTitle: "Caution",
    titleColor: "text-rose-900 dark:text-rose-300",
    iconColor: "text-rose-600 dark:text-rose-400",
  },
};

export function Callout({
  type = "note",
  title,
  children,
  className,
}: DocsCalloutProps) {
  const config = CALLOUT_CONFIG[type];
  const Icon = config.icon;
  const displayTitle = title || config.defaultTitle;

  return (
    <aside
      className={cn(
        "my-4 rounded-xl border p-4 text-sm leading-relaxed transition-all shadow-xs",
        config.borderClass,
        config.bgClass,
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div className={cn("mt-0.5 shrink-0", config.iconColor)}>
          <Icon size={18} />
        </div>
        <div className="flex-1 space-y-1">
          {displayTitle && (
            <p className={cn("font-semibold tracking-tight text-xs uppercase", config.titleColor)}>
              {displayTitle}
            </p>
          )}
          <div className="text-foreground/90 dark:text-zinc-200 text-xs sm:text-sm">
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
}
