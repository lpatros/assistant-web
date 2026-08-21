import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Documentation & Guides — Commands, Engines & Custom Skills",
  description:
    "Comprehensive guides and technical documentation for Assistant CLI. Learn how to configure multi-engine AI drivers (Antigravity, Codex, Copilot, Ollama, OpenCode), write custom skills, and master terminal workflows.",
  alternates: {
    canonical: "/docs",
  },
  openGraph: {
    type: "article",
    url: `${SITE_CONFIG.url}/docs`,
    title: `Documentation & Reference | ${SITE_CONFIG.name}`,
    description:
      "Explore complete guides, command reference, multi-engine architecture, custom skills creation, and troubleshooting for Assistant CLI.",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/docs/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} Documentation & Guides`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Documentation & Reference | ${SITE_CONFIG.name}`,
    description:
      "Explore complete guides, command reference, multi-engine architecture, custom skills creation, and troubleshooting for Assistant CLI.",
    site: SITE_CONFIG.twitterHandle,
    creator: SITE_CONFIG.twitterHandle,
    images: [
      {
        url: "/docs/twitter-image",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} Documentation`,
      },
    ],
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
