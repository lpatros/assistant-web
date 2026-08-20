import { OperatingSystem } from "@/types";

export function detectOS(): OperatingSystem {
  if (typeof window === "undefined") return "linux";

  const userAgent = window.navigator.userAgent.toLowerCase();
  if (userAgent.includes("win")) {
    return "windows";
  }
  if (userAgent.includes("mac") || userAgent.includes("darwin")) {
    return "macos";
  }
  return "linux";
}

export function isMac(): boolean {
  return detectOS() === "macos";
}

export function isWindows(): boolean {
  return detectOS() === "windows";
}

export function isLinux(): boolean {
  return detectOS() === "linux";
}

export function getModifierKey(): string {
  return isMac() ? "⌘" : "Ctrl";
}
