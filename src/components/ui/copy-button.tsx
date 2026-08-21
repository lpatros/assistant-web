"use client";

import { Button } from "@/components/ui/button";
import { useClipboard } from "@/hooks/use-clipboard";
import { cn } from "@/lib/utils";
import { LuCheck, LuCopy } from "react-icons/lu";
import { useTranslation } from "react-i18next";

export interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
  variant?: "default" | "secondary" | "ghost" | "outline";
  size?: "default" | "sm" | "lg" | "icon" | "xs";
  "aria-label"?: string;
}

export function CopyButton({
  textToCopy,
  label,
  copiedLabel,
  className,
  variant = "secondary",
  size = "sm",
  "aria-label": customAriaLabel,
  ...props
}: CopyButtonProps) {
  const { t } = useTranslation();
  const { copied, copy } = useClipboard(2000);

  const resolvedCopiedLabel =
    copiedLabel || (label ? t("install.copied", "Copiado!") : undefined);

  const defaultLabel = copied
    ? resolvedCopiedLabel || t("install.copied", "Copiado!")
    : label || t("install.copy", "Copiar");

  const ariaLabel =
    customAriaLabel ||
    (typeof defaultLabel === "string" ? defaultLabel : t("install.copy", "Copiar"));

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      aria-label={ariaLabel}
      onClick={() => copy(textToCopy)}
      className={cn(
        "transition-all duration-200 cursor-pointer font-mono select-none gap-1.5",
        copied
          ? "!bg-emerald-500/20 !text-emerald-400 !border-emerald-500/40 hover:!bg-emerald-500/30"
          : "",
        className
      )}
      {...props}
    >
      {copied ? (
        <>
          <LuCheck className="text-emerald-400 animate-in zoom-in-50 duration-150" size={15} />
          {resolvedCopiedLabel ? <span>{resolvedCopiedLabel}</span> : null}
        </>
      ) : (
        <>
          <LuCopy size={15} />
          {label && <span>{label}</span>}
        </>
      )}
    </Button>
  );
}
