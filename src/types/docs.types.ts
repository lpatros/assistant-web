export type OsType = "linux" | "macos" | "windows-ps" | "windows-bash";

export type CalloutType = "note" | "tip" | "important" | "warning" | "caution";

export interface DocSection {
  id: string;
  title: string;
  category: string;
  description?: string;
  subsections?: { id: string; title: string }[];
}

export type CommandCategory =
  | "all"
  | "core"
  | "engines"
  | "models"
  | "skills"
  | "custom"
  | "updates"
  | "system";

export interface CommandItem {
  id: string;
  command: string;
  args?: string;
  descriptionKey: string;
  defaultDescription: string;
  category: CommandCategory;
  example?: string;
  flags?: { flag: string; desc: string }[];
  tags?: string[];
}

export interface EngineItem {
  name: string;
  id: string;
  binary: string;
  description: string;
  defaultModel: string;
  thinkSupport: boolean;
  offlineSupport: boolean;
  installGuide?: string;
}

export type TemplateType = "engine" | "skill" | "locale" | "command";

export interface DocsNavGroup {
  title: string;
  titleKey?: string;
  items: {
    id: string;
    title: string;
    titleKey?: string;
    href: string;
  }[];
}

export interface SearchEntry {
  id: string;
  title: string;
  category:
    | "Getting Started"
    | "Core Concepts"
    | "Engines"
    | "Skills"
    | "Customization"
    | "Commands"
    | "FAQ";
  snippet: string;
  anchor: string;
  keywords?: string[];
}