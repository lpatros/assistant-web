<div align="center">

# Assistant CLI — Web

**English** | [Português](README-PTBR.md) | [Español](README-ES.md)

  <p>Website for <a href="https://github.com/lpatros/assistant-cli">Assistant CLI</a>, a lightweight, modular, and localized shell wrapper for AI engines.</p>
  <div>
    <img src="https://img.shields.io/badge/Framework-Next.js%2016-000000.svg" alt="Framework: Next.js 16"/>
    <img src="https://img.shields.io/badge/Language-TypeScript-3178c6.svg" alt="Language: TypeScript"/>
    <img src="https://img.shields.io/badge/UI-React%2019-61dafb.svg" alt="UI: React 19"/>
    <img src="https://img.shields.io/badge/Styles-Tailwind%20CSS-06b6d4.svg" alt="Styles: Tailwind CSS"/>
    <img src="https://img.shields.io/badge/License-MIT-22c55e.svg" alt="License: MIT"/>
  </div>
  <br>
</div>


# Quick Links


- [Description](#description)
- [Technologies](#technologies)
- [Features](#features)
- [Project Structure](#project-structure)
- [License](#license)


## Description

This repository contains the landing website for **Assistant CLI**, a lightweight, modular, and localized shell wrapper that orchestrates AI engines.

The project exposes two **routes** (`/install.sh` and `/install.ps1`) that proxy the installation scripts hosted on GitHub, ensuring that the installation commands displayed on the site always serve the latest version of the scripts.

## Technologies

- **Next.js 16** — React framework with App Router, server-side rendering, and API routes.
- **React 19** — UI library with modern components and hooks.
- **TypeScript 5** — Static typing across the entire project codebase.
- **Tailwind CSS 4** — Utility-first styling with dark theme support and variants.
- **shadcn/ui + Base UI** — Reusable and accessible UI components.
- **i18next / react-i18next** — Internationalization with support for pt-BR, en, and es.
- **next-themes** — Light/dark theme toggle and persistence.
- **lucide-react / react-icons** — Icon sets for the interface.
- **class-variance-authority / tailwind-variants / tailwind-merge** — Composition and variants for utility classes.
- **ESLint + Prettier** — Code linting and formatting.


## Features

### Product Presentation

- **Hero section** with tagline, description, and access to the official GitHub repository.
- **Features grid** highlighting Multi-Engine, Skills, Extensibility, Multi-Language, Simple Installation, and Local Persistence.

### Direct Installation

- **OS Tabs** (Linux, macOS, Windows) with automatic visitor OS detection.
- **Copyable commands** (`curl | bash` and `irm | iex`) pointing to the application's proxy routes.
- **API Routes** `/install.sh` and `/install.ps1` that redirect the official GitHub scripts.

### Terminal Demo

- **Simulated interactive terminal** with real workflows: direct chat, semantic commit, status and diagnostics, and engine/channel switching.
- **Copy button** on all commands and example outputs.

### Transparency and Security

- **Security section** reinforcing that the installer and the CLI are 100% open source.
- Links to inspect the Bash script and PowerShell script before execution.

### Internationalization and Theme

- **Language selector** with support for Portuguese (BR), English (US), and Spanish.
- **Theme toggle** (light/dark) with preference persistence.

## Project Structure

```
.
├── public/                      # Public files
├── src/
│    ├── app/                    # Application routes
│    ├── components/             # Application components
│    ├── hooks/                  # Application hooks
│    ├── lib/                    # Utilities and configuration
│    ├── locales/                # Website translations
│    └── types/                  # Application types and interfaces
├── .gitignore                   # Files ignored by Git
├── .prettierrc                  # Prettier configuration
├── components.json              # shadcn/ui configuration
├── eslint.config.mjs            # ESLint rules (flat config)
├── LICENSE.txt                  # Project license
├── next.config.ts               # Next.js configuration
├── package-lock.json            # Project dependencies
├── package.json                 # Project manifest and scripts
├── pnpm-lock.yaml               # Project dependencies
├── pnpm-workspace.yaml          # pnpm workspace
├── postcss.config.mjs           # PostCSS configuration
├── README.md                    # Project README
└── tsconfig.json                # TypeScript configuration
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.
