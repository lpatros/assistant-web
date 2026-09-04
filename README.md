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

Assistant Web is a web application built with Next.js 16 that serves as a showcase, documentation, and installation platform for Assistant-CLI. The project provides a user experience with multi-language support, light and dark themes, and a simplified installation process via terminal scripts.

The application was designed with a focus on performance and accessibility, utilizing React 19 Server Components and modern styling with Tailwind CSS 4. The modular structure makes maintenance and adding new languages or features easy.

The project includes installation scripts for Linux/macOS (`install.sh`) and Windows (`install.ps1`), allowing users to install the terminal assistant directly from the documentation.

## Technologies

- **Next.js 16** — React framework with server-side rendering and static site generation
- **React 19** — UI library with Server Components support
- **TypeScript 5** — Static typing for JavaScript
- **Tailwind CSS 4** — Utility-first CSS framework
- **shadcn/ui** — Accessible and customizable component library
- **next-themes** — Theme management (light/dark)
- **i18next** — Internationalization with support for EN, PT-BR, and ES
- **Lucide React** — High-quality icons
- **Vercel Analytics** — Performance and usage analytics

## Features

### Multi-language Support
The application supports three languages: English, Brazilian Portuguese, and Spanish. Language selection is persistent and automatically detects the browser's language.

### Light and Dark Themes
Toggle between light and dark themes with automatic detection of operating system preferences.

### Simplified Installation
Installation cards with scripts for Linux/macOS and Windows, including automatic detection of the user's operating system.

### Interactive Documentation
Documentation pages with syntax-highlighted code, informative callouts, and structured navigation.

### SEO Optimized
Comprehensive metadata, Open Graph images, and automatically generated sitemap.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── docs/              # Documentation pages
│   ├── install.ps1/       # Windows installation script
│   ├── install.sh/        # Linux/macOS installation script
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Application root layout
│   ├── manifest.ts        # PWA manifest
│   ├── opengraph-image.ts # OpenGraph image
│   ├── page.tsx           # Home page
│   ├── robots.ts          # Robots.txt
│   ├── sitemap.ts         # Sitemap
│   └── twitter-image.tsx  # Twitter image
├── components/            # React components
├── hooks/                 # Custom hooks
├── lib/                   # Utilities and configuration
├── locales/               # Translation files
└── types/                 # TypeScript type definitions
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.
