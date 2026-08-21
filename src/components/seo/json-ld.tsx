import { SITE_CONFIG } from "@/lib/constants";

interface FAQItem {
  question: string;
  answer: string;
}

export function SoftwareAppJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_CONFIG.name,
    operatingSystem: "Linux, macOS, Windows",
    applicationCategory: "DeveloperApplication",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    downloadUrl: SITE_CONFIG.githubUrl,
    softwareVersion: SITE_CONFIG.version,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: "@lpatros",
      url: "https://github.com/lpatros",
    },
    publisher: {
      "@type": "Person",
      name: "@lpatros",
      url: "https://github.com/lpatros",
    },
    featureList: [
      "Multi-Engine AI Drivers (Antigravity, Codex, Copilot, Ollama, OpenCode)",
      "Interactive Terminal REPL and Direct One-Shot Prompts",
      "Conventional Commits Assistant",
      "Markdown Project Resume Generator",
      "README Generator with Shields.io Badges",
      "Custom Skills and Modular Shell Drivers",
      "Think Mode Control for Ollama and Reasoning Models",
      "Native Shell Support: Bash, Zsh, Fish, and PowerShell",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQJsonLd({ faqs }: { faqs?: FAQItem[] }) {
  const defaultFaqs: FAQItem[] = [
    {
      question: "What is Assistant CLI?",
      answer:
        "Assistant CLI is a lightweight, modular, and localized shell wrapper for Antigravity, Codex, Copilot, Ollama, OpenCode, and Custom Engines.",
    },
    {
      question: "How do I install Assistant CLI?",
      answer:
        "On Linux & macOS, run: curl -fsSL https://assistantcli.vercel.app/install.sh | bash. On Windows PowerShell, run: irm https://assistantcli.vercel.app/install.ps1 | iex.",
    },
    {
      question: "Does Assistant CLI require heavy dependencies?",
      answer:
        "No. Assistant CLI is built with pure shell scripts (POSIX Bash / PowerShell) with zero heavy runtime overhead, ensuring instant startup.",
    },
    {
      question: "Which AI engines are supported?",
      answer:
        "Antigravity, Codex, Copilot, Ollama, and OpenCode, plus fully customizable custom engines created with shell scripts.",
    },
    {
      question: "How do I create custom skills?",
      answer:
        "Run 'assistant create skill <name>' to scaffold a new skill in custom/skills/ using standard Markdown prompt templates.",
    },
  ];

  const items = faqs && faqs.length > 0 ? faqs : defaultFaqs;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function DocsJsonLd() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_CONFIG.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Documentation",
        item: `${SITE_CONFIG.url}/docs`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Assistant CLI Documentation, Commands & Architecture",
    description:
      "Comprehensive technical reference for Assistant CLI: Installation, Multi-Engine Drivers, Custom Skills, Ollama Think Mode, and Cheat Sheet.",
    url: `${SITE_CONFIG.url}/docs`,
    author: {
      "@type": "Person",
      name: "@lpatros",
      url: "https://github.com/lpatros",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/terminal.svg`,
      },
    },
    proficiencyLevel: "Beginner, Intermediate, Advanced",
    inLanguage: ["en", "pt-BR", "es"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
