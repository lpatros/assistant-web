import { FeatureItem } from "@/types";
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

export const FEATURES: FeatureItem[] = [
  {
    icon: { name: LuLayers, className: "text-cyan-400" }
  },
  {
    icon: { name: LuSparkles, className: "text-purple-400" }
  },
  {
    icon: { name: LuTerminal, className: "text-blue-400" }
  },
  {
    icon: { name: LuGlobe, className: "text-green-400" }
  },
  {
    icon: { name: LuZap, className: "text-yellow-400" }
  },
  {
    icon: { name: LuRefreshCw, className: "text-orange-400" }
  },
];