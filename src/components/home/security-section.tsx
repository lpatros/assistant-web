import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  LuShieldCheck,
  LuLock,
  LuExternalLink,
  LuTerminal,
} from "react-icons/lu";
import { Button } from "../ui/button";
import { SITE_CONFIG } from "@/lib/constants";

export function SecuritySection() {
  return (
    <section
      id="security"
      className="relative border-t border-zinc-800/60 bg-zinc-950 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-6">
            <h2 className="text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl">
              Totalmente de código aberto
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
              O instalador e o assistant são 100% de código aberto. Você pode
              inspecionar todo o código antes de executar, garantindo total
              transparência e controle sobre o processo de instalação.
            </p>

            <div className="space-y-8 pt-2">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-emerald-800/50 bg-emerald-950/60 text-emerald-400">
                  <LuShieldCheck size={14} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-200">
                    Sem Modificações no Sistema Raiz
                  </h4>
                  <p className="text-xs text-zinc-400">
                    O script instala estritamente no diretório de usuário
                  </p>
                </div>
              </div>
              <Button className="px-5 py-3" variant="outline">
                <a
                  className="flex flex-row items-center justify-center gap-2"
                  href={SITE_CONFIG.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Acessar no GitHub
                  <LuExternalLink size={12} />
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-6">
            <Card className="border-zinc-800/80 bg-zinc-900/50 backdrop-blur-md">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-sm font-semibold text-zinc-200">
                    <LuTerminal size={16} className="text-cyan-400" />
                    <span>Linux e macOS</span>
                  </div>
                  <Badge variant="secondary" className="text-[10px]">
                    Bash
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-xs">
                <p className="leading-relaxed text-zinc-400">
                  Para inspecionar o script Bash antes de executar:
                </p>
                <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 font-mono text-[11px] text-cyan-300">
                  curl -fsSL /install.sh | less
                </div>
                <div className="flex justify-end pt-2">
                  <a
                    href="/install.sh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                  >
                    <span>Ver script</span>
                    <LuExternalLink size={12} />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-zinc-800/80 bg-zinc-900/50 backdrop-blur-md">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-sm font-semibold text-zinc-200">
                    <LuTerminal size={16} className="text-sky-400" />
                    <span>Windows</span>
                  </div>
                  <Badge variant="secondary" className="text-[10px]">
                    PowerShell
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-xs">
                <p className="leading-relaxed text-zinc-400">
                  Para inspecionar o script PowerShell antes de executar:
                </p>
                <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 font-mono text-[11px] text-sky-300">
                  irm /install.ps1 | more
                </div>
                <div className="flex justify-end pt-2">
                  <a
                    href="/install.ps1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-400 transition-colors hover:text-sky-300"
                  >
                    <span>Ver script</span>
                    <LuExternalLink size={12} />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
