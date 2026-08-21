import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          "en-US": baseUrl,
          "pt-BR": baseUrl,
          "es-ES": baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/docs`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          "en-US": `${baseUrl}/docs`,
          "pt-BR": `${baseUrl}/docs`,
          "es-ES": `${baseUrl}/docs`,
        },
      },
    },
  ];
}
