"use client";

import { Button } from "@/components/ui/button";
import { useClipboard } from "@/hooks/use-clipboard";
import { cn } from "@/lib/utils";
import { LuCheck, LuCopy } from "react-icons/lu";

export interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
  variant?: "default" | "secondary" | "ghost" | "outline";
  size?: "default" | "sm" | "lg";
}

export function CopyButton({
  textToCopy,
  label,
  copiedLabel,
  className,
  variant = "secondary",
  size = "sm",
  ...props
}: CopyButtonProps) {
  const { copied, copy } = useClipboard(2000);

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      onClick={() => copy(textToCopy)}
      className={cn(
        "transition-all duration-200 cursor-pointer font-mono select-none",
        copied
          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30"
          : "",
        className
      )}
      {...props}
    >
      {copied ? (
        <>
          <LuCheck className="text-emerald-400 animate-in zoom-in-50 duration-150" size={15} />
          <span>{copiedLabel}</span>
        </>
      ) : (
        <>
          <LuCopy size={15} />
          <span>{label}</span>
        </>
      )}
    </Button>
  );
}
