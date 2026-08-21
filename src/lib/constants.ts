import { FeatureItem } from "@/types";
import { DocsNavGroup, SearchEntry } from "@/types/docs.types";
import {
  LuGlobe,
  LuLayers,
  LuRefreshCw,
  LuSparkles,
  LuTerminal,
  LuZap,
} from "react-icons/lu";

export const SITE_CONFIG = {
  name: "Assistant CLI",
  tagline: "A lightweight, modular, and localized shell wrapper.",
  description:
    "A lightweight, modular, and localized shell wrapper for Antigravity, Codex, Copilot, Ollama, OpenCode, and Custom Engines, supporting interactive chat, repository analysis, README generation, project summaries, and more.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://assistantcli.vercel.app",
  version: process.env.NEXT_PUBLIC_VERSION || "v1.4.0",
  githubUrl: "https://github.com/lpatros/assistant-cli",
  twitterHandle: "@lpatros",
  authors: [
    {
      name: "@lpatros",
      url: "https://github.com/lpatros",
    },
  ],
  creator: "@lpatros",
  publisher: "@lpatros",
  category: "Developer Tools",
  keywords: [
    "Assistant CLI",
    "CLI",
    "terminal AI assistant",
    "AI shell wrapper",
    "Antigravity CLI",
    "Codex CLI",
    "Copilot CLI",
    "Ollama terminal",
    "OpenCode",
    "local AI models",
    "bash AI tool",
    "powershell AI wrapper",
    "curl bash installer",
    "conventional commits CLI",
    "README generator CLI",
    "developer productivity",
    "command line assistant",
    "custom AI skills",
    "multi-engine AI",
    "open source CLI",
  ],
};

export const NAV_ITEMS = [
  { href: "#install", labelKey: "nav.install" },
  { href: "#features", labelKey: "nav.features" },
  { href: "#demo", labelKey: "nav.demo" },
  { href: "#security", labelKey: "nav.security" },
  { href: "#faq", labelKey: "nav.faq" },
] as const;

export const FEATURES: FeatureItem[] = [
  {
    icon: { name: LuLayers, className: "text-cyan-400" },
  },
  {
    icon: { name: LuSparkles, className: "text-purple-400" },
  },
  {
    icon: { name: LuTerminal, className: "text-blue-400" },
  },
  {
    icon: { name: LuGlobe, className: "text-green-400" },
  },
  {
    icon: { name: LuZap, className: "text-yellow-400" },
  },
  {
    icon: { name: LuRefreshCw, className: "text-orange-400" },
  },
];

export const DOCS_NAV_GROUPS: DocsNavGroup[] = [
  {
    title: "Começando",
    titleKey: "docs.navGroups.gettingStarted.title",
    items: [
      {
        id: "intro",
        title: "Visão Geral",
        titleKey: "docs.navGroups.gettingStarted.items.intro",
        href: "#intro",
      },
      {
        id: "installation",
        title: "Instalação & Setup",
        titleKey: "docs.navGroups.gettingStarted.items.installation",
        href: "#installation",
      },
      {
        id: "quick-start",
        title: "Início Rápido",
        titleKey: "docs.navGroups.gettingStarted.items.quickStart",
        href: "#quick-start",
      },
    ],
  },
  {
    title: "Conceitos Centrais",
    titleKey: "docs.navGroups.coreConcepts.title",
    items: [
      {
        id: "interaction-modes",
        title: "Modos de Interação",
        titleKey: "docs.navGroups.coreConcepts.items.interactionModes",
        href: "#interaction-modes",
      },
      {
        id: "engines",
        title: "Arquitetura de Engines",
        titleKey: "docs.navGroups.coreConcepts.items.engines",
        href: "#engines",
      },
      {
        id: "models",
        title: "Modelos & Persistência",
        titleKey: "docs.navGroups.coreConcepts.items.models",
        href: "#models",
      },
      {
        id: "think-mode",
        title: "Think Mode (Ollama)",
        titleKey: "docs.navGroups.coreConcepts.items.thinkMode",
        href: "#think-mode",
      },
    ],
  },
  {
    title: "Habilidades Integradas",
    titleKey: "docs.navGroups.builtInSkills.title",
    items: [
      {
        id: "skill-commit",
        title: "Commit Assistant",
        titleKey: "docs.navGroups.builtInSkills.items.skillCommit",
        href: "#skill-commit",
      },
      {
        id: "skill-resume",
        title: "Resume Generator",
        titleKey: "docs.navGroups.builtInSkills.items.skillResume",
        href: "#skill-resume",
      },
      {
        id: "skill-readme",
        title: "README Generator",
        titleKey: "docs.navGroups.builtInSkills.items.skillReadme",
        href: "#skill-readme",
      },
    ],
  },
  {
    title: "Customização",
    titleKey: "docs.navGroups.customization.title",
    items: [
      {
        id: "custom-overview",
        title: "Estrutura Extensível",
        titleKey: "docs.navGroups.customization.items.customOverview",
        href: "#custom-overview",
      },
      {
        id: "custom-skills",
        title: "Custom Skills",
        titleKey: "docs.navGroups.customization.items.customSkills",
        href: "#custom-skills",
      },
      {
        id: "custom-engines",
        title: "Custom Engines",
        titleKey: "docs.navGroups.customization.items.customEngines",
        href: "#custom-engines",
      },
      {
        id: "custom-locales",
        title: "Custom Locales",
        titleKey: "docs.navGroups.customization.items.customLocales",
        href: "#custom-locales",
      },
      {
        id: "custom-init",
        title: "Comandos Dinâmicos",
        titleKey: "docs.navGroups.customization.items.customInit",
        href: "#custom-init",
      },
      {
        id: "custom-status",
        title: "Inspecionar Status",
        titleKey: "docs.navGroups.customization.items.customStatus",
        href: "#custom-status",
      },
    ],
  },
  {
    title: "Suporte",
    titleKey: "docs.navGroups.support.title",
    items: [
      {
        id: "troubleshooting-faq",
        title: "Troubleshooting & FAQ",
        titleKey: "docs.navGroups.support.items.troubleshootingFaq",
        href: "#troubleshooting-faq",
      },
    ],
  },
];

export const SEARCH_INDEX: SearchEntry[] = [
  {
    id: "install-linux",
    title: "Instalação no Linux & macOS",
    category: "Getting Started",
    snippet: "Instalação via Bash/cURL com autodetecção de Zsh, Bash e Fish.",
    anchor: "#installation",
    keywords: ["curl", "bash", "zsh", "fish", "install", "linux", "macos"],
  },
  {
    id: "install-windows",
    title: "Instalação no Windows (PowerShell)",
    category: "Getting Started",
    snippet: "Instalação com wrapper nativo em PowerShell e Git Bash.",
    anchor: "#installation",
    keywords: [
      "powershell",
      "windows",
      "profile",
      "executionpolicy",
      "irm",
      "iex",
    ],
  },
  {
    id: "interaction-modes",
    title: "Modos de Interação: Chat REPL & Pergunta Direta",
    category: "Core Concepts",
    snippet:
      'Diferença entre modo interativo (assistant) e perguntas diretas (assistant "...").',
    anchor: "#interaction-modes",
    keywords: ["repl", "chat", "interativo", "aspas", "one-shot", "prompt"],
  },
  {
    id: "engines-matrix",
    title: "Suporte Multi-Engine & Drivers Modulares",
    category: "Engines",
    snippet:
      "Drivers para Antigravity (agy), Codex, Copilot, Ollama, OpenCode e Custom.",
    anchor: "#engines",
    keywords: [
      "engines",
      "antigravity",
      "codex",
      "copilot",
      "ollama",
      "opencode",
      "drivers",
    ],
  },
  {
    id: "model-persistence",
    title: "Persistência Independente de Modelos",
    category: "Engines",
    snippet: "Como cada engine salva seu modelo favorito no data/config.txt.",
    anchor: "#models",
    keywords: [
      "modelos",
      "config.txt",
      "persistencia",
      "ASSISTANT_MODEL",
      "set",
    ],
  },
  {
    id: "think-mode",
    title: "Controle de Raciocínio (Think Mode — Ollama)",
    category: "Core Concepts",
    snippet:
      "Gerenciamento de flags de pensamento (--think, --no-think, --hide-think).",
    anchor: "#think-mode",
    keywords: [
      "think",
      "raciocinio",
      "deepseek",
      "qwq",
      "pensamento",
      "ollama",
    ],
  },
  {
    id: "skill-commit",
    title: "Skill: Assistente de Commit Semântico",
    category: "Skills",
    snippet:
      "Análise inteligente de git diff staged e sugestão de Conventional Commits.",
    anchor: "#skill-commit",
    keywords: [
      "commit",
      "git",
      "conventional commits",
      "staging",
      "diff",
      "seguranca",
    ],
  },
  {
    id: "skill-resume",
    title: "Skill: Gerador de Resumos de Projetos",
    category: "Skills",
    snippet:
      "Escaneamento de manifestos (package.json, Cargo.toml) para portfólio em Markdown.",
    anchor: "#skill-resume",
    keywords: [
      "resume",
      "resumo",
      "portfolio",
      "curriculo",
      "manifestos",
      "paralelo",
    ],
  },
  {
    id: "skill-readme",
    title: "Skill: Gerador de README Profissional",
    category: "Skills",
    snippet:
      "Geração de README.md com badges shields.io, setup e internacionalização.",
    anchor: "#skill-readme",
    keywords: ["readme", "documentacao", "shields", "badges", "gerador"],
  },
  {
    id: "custom-skills",
    title: "Criando Custom Skills (*-assistant.md)",
    category: "Customization",
    snippet: "Como registrar novas habilidades e personas em custom/skills/.",
    anchor: "#custom-skills",
    keywords: ["custom", "skills", "create skill", "prompt", "persona"],
  },
  {
    id: "custom-engines",
    title: "Criando Custom Engines (.sh)",
    category: "Customization",
    snippet:
      "Contrato de funções Shell para criar drivers de novas IAs em custom/engines/.",
    anchor: "#custom-engines",
    keywords: ["custom engines", "drivers", "bash", "integrar", "api"],
  },
  {
    id: "custom-locales",
    title: "Criando Custom Locales (Novo Idioma)",
    category: "Customization",
    snippet:
      "Adicionando novos idiomas em custom/locales/ sobrescrevendo funções t_*.",
    anchor: "#custom-locales",
    keywords: ["i18n", "idioma", "traducao", "locales", "lingua"],
  },
  {
    id: "custom-init",
    title: "Comandos Shell Dinâmicos (custom/init.sh)",
    category: "Customization",
    snippet:
      "Criando funções com prefixo _cmd_<nome> para execução direta no CLI.",
    anchor: "#custom-init",
    keywords: ["init.sh", "cmd", "funcoes", "atalhos", "alias"],
  },
  {
    id: "template-builder",
    title: "Gerador Interativo de Templates",
    category: "Customization",
    snippet:
      "Ferramenta visual para gerar código de Engines, Skills e Locales.",
    anchor: "#template-generator",
    keywords: ["gerador", "template", "builder", "hub", "download"],
  },
  {
    id: "release-channels",
    title: "Canais de Release & Auto-Atualização",
    category: "Core Concepts",
    snippet:
      "Canais stable (main) e beta (dev), pinagem por versão e changelog.",
    anchor: "#release-channels",
    keywords: ["update", "channel", "stable", "beta", "changelog", "versao"],
  },
  {
    id: "cheat-sheet-ref",
    title: "Tabela Completa de Comandos (Cheat Sheet)",
    category: "Commands",
    snippet:
      "Guia de referência rápida de todos os comandos e parâmetros do CLI.",
    anchor: "#cheat-sheet",
    keywords: ["cheat sheet", "comandos", "referencia", "sintaxe", "tabela"],
  },
  {
    id: "faq-troubleshooting",
    title: "Troubleshooting & FAQ",
    category: "FAQ",
    snippet: "Resolução de problemas no PowerShell, Git Bash, aspas e Ollama.",
    anchor: "#troubleshooting-faq",
    keywords: ["erro", "problema", "powershell", "faq", "ajuda"],
  },
];
