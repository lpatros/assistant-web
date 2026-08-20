"use client";

import { useState, useEffect } from "react";
import { OperatingSystem } from "@/types";
import { detectOS } from "@/lib/detect-os";

export function useOsDetection(): OperatingSystem {
  const [os, setOs] = useState<OperatingSystem>("linux");

  useEffect(() => {
    setOs(detectOS());
  }, []);

  return os;
}

export * from "@/lib/detect-os";
