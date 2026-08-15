"use client";

import { useState, useEffect } from "react";
import { OperatingSystem } from "@/types";

export function useOsDetection(): OperatingSystem {
  const [os, setOs] = useState<OperatingSystem>("linux");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes("win")) {
      setOs("windows");
    } else if (userAgent.includes("mac")) {
      setOs("macos");
    } else {
      setOs("linux");
    }
  }, []);

  return os;
}
