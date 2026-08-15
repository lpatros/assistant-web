import { SITE_CONFIG } from "@/lib/constants";
import { LuTerminal } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 py-12 text-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-tr from-indigo-600 via-cyan-500 to-emerald-400 p-px">
              <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-zinc-950">
                <LuTerminal className="text-cyan-400" size={18} />
              </div>
            </div>
            <div>
              <p className="font-semibold text-zinc-200">{SITE_CONFIG.name}</p>
              <p className="text-xs text-zinc-500">{SITE_CONFIG.tagline}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <a href="#install" className="transition-colors hover:text-white">
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
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline">
              <a
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
              >
                <FaGithub size={16} />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-800/60 pt-6 text-center text-xs text-zinc-600">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Licenciado sob
            MIT.
          </p>
        </div>
      </div>
    </footer>
  );
}
