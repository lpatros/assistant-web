import { FeatureItem, FAQItem, CliCommandExample } from "@/types";
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
  version:  process.env.NEXT_PUBLIC_VERSION,
  githubUrl: "https://github.com/lpatros/assistant-cli",
  authors: [{ name: "@lpatros" }],
  keywords: [
    "cli",
    "terminal",
    "bash",
    "powershell",
    "curl",
    "ie",
    "shell",
    "assistant",
    "shell wrapper",
    "lightweight",
    "modular",
    "ai",
    "skill",
  ],
};

export const INSTALL_METHODS = [
  {
    id: "linux",
    os: "linux" as const,
    name: "Linux",
    shell: "Bash / Zsh / Fish",
    commandTemplate: "curl -fsSL {ORIGIN}/install.sh | bash",
    altCommandTemplate: "wget -qO- {ORIGIN}/install.sh | bash",
    scriptEndpoint: "/install.sh",
    scriptFileName: "install.sh",
    badge: "curl / wget",
    recommended: true,
  },
  {
    id: "macos",
    os: "macos" as const,
    name: "macOS",
    shell: "Zsh / Bash / Fish",
    commandTemplate: "curl -fsSL {ORIGIN}/install.sh | bash",
    altCommandTemplate: "wget -qO- {ORIGIN}/install.sh | bash",
    scriptEndpoint: "/install.sh",
    scriptFileName: "install.sh",
    badge: "curl / wget",
    recommended: false,
  },
  {
    id: "windows",
    os: "windows" as const,
    name: "Windows",
    shell: "PowerShell",
    commandTemplate: "irm {ORIGIN}/install.ps1 | iex",
    altCommandTemplate: "iwr -useb {ORIGIN}/install.ps1 | iex",
    scriptEndpoint: "/install.ps1",
    scriptFileName: "install.ps1",
    badge: "irm / iex",
    recommended: false,
  },
];

export const FEATURES: FeatureItem[] = [
  {
    icon: { name: LuLayers, className: "text-cyan-400" },
    title: "Suporte Multi-Engine",
    description:
      "Integração nativa com Antigravity, Codex, Copilot, Ollama e OpenCode, além de suporte para integrar outras engines via scripts customizados.",
    tag: "Versátil",
  },
  {
    icon: { name: LuSparkles, className: "text-purple-400" },
    title: "Skills Especializadas",
    description:
      'Gere mensagens de commit semânticas com "assistant commit", resumos de projetos com "assistant resume" e arquivos README completos com "assistant readme".',
    tag: "Prático",
  },
  {
    icon: { name: LuTerminal, className: "text-blue-400" },
    title: "Extensibilidade Total",
    description:
      'Crie novas skills a partir de arquivos Markdown com "assistant create skill" e defina funções dinâmicas em shell personalizadas dentro de custom/init.sh.',
    tag: "Customizável",
  },
  {
    icon: { name: LuGlobe, className: "text-green-400" },
    title: "Suporte Multi-Language",
    description:
      "Interface localizada em Português, Inglês e Espanhol, com suporte a idiomas personalizados em custom/locales/ e fallback automático.",
    tag: "Global",
  },
  {
    icon: { name: LuZap, className: "text-yellow-400" },
    title: "Instalação Simples",
    description:
      "Configuração automática de perfil em Bash, Zsh e Fish, e execução transparente e integrada no PowerShell do Windows.",
    tag: "Multi-Plataforma",
  },
  {
    icon: { name: LuRefreshCw, className: "text-orange-400" },
    title: "Persistência Local",
    description:
      "Modelos preferidos por engine, última engine utilizada,idioma da interface, controle de think mode, alternância entre canais stable/beta, são persistidos localmente.",
    tag: "Gerenciável",
  },
];

export const CLI_EXAMPLES: CliCommandExample[] = [
  {
    title: "Chat Direto & Interativo",
    command:
      'assistant "Explique como funciona o gerenciamento de estados no React"',
    output: [
      "ℹ  Engine: opencode",
      "ℹ  Modelo: opencode/big-pickle",
      "No React, o gerenciamento de estado controla dados dinâmicos da aplicação:",
      "• Estado Local: useState / useReducer para componentes individuais.",
      "• Estado Global: Context API, Redux ou Zustand para compartilhar dados.",
      "• Estado de Servidor: React Query / SWR para cache e sincronização de APIs.",
    ],
  },
  {
    title: "Commit Semântico Inteligente",
    command: "assistant commit",
    output: [
      "Analisando repositório com big-pickle (opencode)...",
      "Suggested git commands:",
      "git add engine.sh loader.sh",
      "git commit -m \"feat(engine): add custom engine loader support\"",
      "git add README.md",
      "git commit -m \"docs(readme): update installation guide for Windows PowerShell\"",
    ],
  },
  {
    title: "Status e Diagnóstico Geral",
    command: "assistant status",
    output: [
      "Status",
      "  Engine atual: opencode",
      "  Modelo atual: opencode/big-pickle",
      "  Idioma atual: pt-br",
      "  Canal de release atual: stable",
      `  Assistant CLI ${SITE_CONFIG.version}`,
    ],
  },
  {
    title: "Troca Rápida de Engine e Canal",
    command: "assistant engine opencode && assistant channel beta",
    output: [
      "✔ Engine alterada para: opencode",
      "ℹ Alternando para o canal de release: beta...",
      "Atualizando o assistente...",
      "[====================] 100%",
      `ℹ  Assistant CLI ${SITE_CONFIG.version}`,
    ],
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "O que o script de instalação faz exatamente no meu sistema?",
    answer:
      "O instalador interativo clona o repositório em ~/.config/assistant-cli (no Linux/macOS) ou %LOCALAPPDATA%\\assistant-cli (no Windows), detecta o shell utilizado (Bash, Zsh, Fish ou PowerShell) e adiciona o carregamento do script init.sh ao perfil do seu terminal (~/.bashrc, ~/.zshrc, config.fish ou $PROFILE). Tudo é feito em espaço de usuário, sem necessidade de privilégios de root/administrador.",
  },
  {
    question: "Quais engines de IA são suportadas nativamente?",
    answer:
      "O Assistant CLI vem com suporte nativo ao Antigravity, GitHub Copilot, Ollama, OpenAI Codex e OpenCode. Além disso, você pode integrar qualquer outro provedor ou modelo criando um script .sh dentro de custom/engines/.",
  },
  {
    question: "Como o Assistant CLI funciona no Windows via PowerShell?",
    answer:
      `No Windows, o instalador PowerShell cria uma função wrapper transparente no seu perfil ($PROFILE) que invoca o bash (via Git Bash) por baixo dos panos. Isso permite executar o comando "assistant" diretamente no PowerShell ou Windows Terminal com suporte total a argumentos, cores e interatividade, sem precisar abrir o Git Bash manualmente.`,
  },
  {
    question: "O que são as Skills integradas e como criar novas?",
    answer:
      `Skills são módulos especializados com prompts e rotinas focadas em tarefas específicas: "assistant commit" analisa o git diff e gera commits semânticos; "assistant resume" mapeia a árvore e arquivos de manifesto para resumir a arquitetura do projeto; "assistant readme" gera documentação completa no idioma escolhido. Você pode criar novas skills facilmente usando "assistant create skill <nome> <arquivo.md>".`,
  },
  {
    question:
      "Como funcionam a persistência de configurações e a troca de modelos?",
    answer:
      "Todas as preferências (engine ativa, modelo selecionado para cada engine, idioma da interface e canal de release) são salvas em data/config.txt. Cada engine mantém sua própria memória de modelo configurado, permitindo alternar livremente entre provedores sem perder as configurações anteriores.",
  },
  {
    question:
      "Como atualizar o assistente ou alternar entre canais estáveis e beta?",
    answer:
      `Para atualizar para a versão mais recente do canal atual, execute "assistant update". Para fixar ou testar uma versão específica, use "assistant update @${SITE_CONFIG.version}". Para alternar entre as versões em desenvolvimento e estáveis, utilize "assistant channel beta" ou "assistant channel stable".`,
  },
];
