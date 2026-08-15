import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getLatestRelease() {
  const githubOwner = process.env.NEXT_PUBLIC_GITHUB_OWNER;
  const githubRepo = process.env.NEXT_PUBLIC_GITHUB_REPO;

  try {
    const res = await fetch(
      `https://api.github.com/repos/${githubOwner}/${githubRepo}/releases/latest`,
      {
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) {
      throw new Error(`Falha ao buscar versão: ${res.status} - ${res.url}`);
    }

    const data = await res.json();
    return {
      version: data.tag_name,
      url: data.html_url,
    };
  } catch (error) {
    console.error("Erro ao buscar release:", error);
    return null;
  }
}
