import { SITE_CONFIG } from "@/lib/constants";
import { Badge } from "./ui/badge";
import { LuTerminal } from "react-icons/lu";
import { t } from "i18next";
import { cn } from "@/lib/utils";

export function Brand({
  showVersion = true,
  showTagline = false,
  className
}: {
  showVersion?: boolean;
  showTagline?: boolean;
  className?: string;
}) {
  return (
    <a href="/" className={cn("flex items-center gap-3", className)}>
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 p-px dark:bg-white">
        <div className="bg-background flex h-full w-full items-center justify-center rounded-[7px]">
          <LuTerminal className="text-zinc-900 dark:text-white" size={18} />
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <span className="text-foreground text-lg font-bold tracking-tight">
            {SITE_CONFIG.name}
          </span>
          {showVersion && (
            <Badge variant="secondary" className="text-[10px]">
              {SITE_CONFIG.version}
            </Badge>
          )}
        </div>
        {showTagline && (
          <span className="text-muted-foreground text-xs">
            {t("footer.tagline", SITE_CONFIG.tagline)}
          </span>
        )}
      </div>
    </a>
  );
}
