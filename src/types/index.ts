import { ComponentType } from "react";

export type OperatingSystem = "linux" | "macos" | "windows";

type Icon = ComponentType<{
  className?: string;
  size?: string | number;
}>;

export interface FeatureItem {
  icon: {
    name: Icon;
    className?: string;
    size?: string | number;
  }
}
