import { SITE_CONFIG } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { LuTerminal } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl supports-backdrop-filter:bg-zinc-950/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-tr from-indigo-600 via-cyan-500 to-emerald-400 p-px">
            <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-zinc-950">
              <LuTerminal className="text-cyan-400" size={18} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight text-white">
              {SITE_CONFIG.name}
            </span>
            <Badge variant="secondary" className="text-[10px]">
              {SITE_CONFIG.version}
            </Badge>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-400 md:flex">
          <a
            href="#install"
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            Instalação
          </a>
          <a href="#features" className="transition-colors hover:text-white">
            Recursos
          </a>
          <a href="#demo" className="transition-colors hover:text-white">
            Preview
          </a>
          <a href="#security" className="transition-colors hover:text-white">
            Segurança
          </a>
          <a href="#faq" className="transition-colors hover:text-white">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon">
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
              <FaGithub size={18} />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
