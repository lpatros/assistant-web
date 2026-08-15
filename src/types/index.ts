import { ComponentType } from "react";

export type OperatingSystem = "linux" | "macos" | "windows";

export interface InstallMethod {
  id: string;
  os: OperatingSystem;
  name: string;
  command: string;
  altCommand?: string;
  shell: string;
  scriptUrl: string;
  scriptFileName: string;
  badge: string;
}

type Icon = ComponentType<{
  className?: string;
  size?: string | number;
}>;

export interface FeatureItem {
  icon: {
    name: Icon;
    className?: string;
    size?: string | number;
  };
  title: string;
  description: string;
  tag?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CliCommandExample {
  title: string;
  command: string;
  output: string[];
}
