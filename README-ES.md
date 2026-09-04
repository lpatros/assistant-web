<div align="center">

# Assistant CLI — Web

[English](README.md) | [Português](README-PTBR.md) | **Español**

  <p>Sitio web de <a href="https://github.com/lpatros/assistant-cli">Assistant CLI</a>, un wrapper de shell ligero, modular y localizado para motores de IA.</p>
  <div>
    <img src="https://img.shields.io/badge/Framework-Next.js%2016-000000.svg" alt="Framework: Next.js 16"/>
    <img src="https://img.shields.io/badge/Language-TypeScript-3178c6.svg" alt="Lenguaje: TypeScript"/>
    <img src="https://img.shields.io/badge/UI-React%2019-61dafb.svg" alt="UI: React 19"/>
    <img src="https://img.shields.io/badge/Styles-Tailwind%20CSS-06b6d4.svg" alt="Estilos: Tailwind CSS"/>
    <img src="https://img.shields.io/badge/License-MIT-22c55e.svg" alt="Licencia: MIT"/>
  </div>
  <br>
</div>

# Enlaces Rápidos

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Características](#características)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Licencia](#licencia)

## Descripción

Assistant Web es una aplicación web desarrollada con Next.js 16 que sirve como plataforma de presentación, documentación e instalación para Assistant-CLI. El proyecto ofrece una experiencia de usuario con soporte para múltiples idiomas, temas claro y oscuro, y un proceso de instalación simplificado mediante scripts de terminal.

La aplicación fue diseñada con un enfoque en rendimiento y accesibilidad, utilizando Server Components de React 19 y estilos modernos con Tailwind CSS 4. La estructura modular facilita el mantenimiento y la incorporación de nuevos idiomas o funcionalidades.

El proyecto incluye scripts de instalación para Linux/macOS (`install.sh`) y Windows (`install.ps1`), permitiendo a los usuarios instalar el asistente de terminal directamente desde la documentación.

## Tecnologías

- **Next.js 16** — Framework de React con renderizado server-side y generación estática
- **React 19** — Biblioteca de interfaz con soporte para Server Components
- **TypeScript 5** — Tipado estático para JavaScript
- **Tailwind CSS 4** — Framework de utilidades para estilos
- **shadcn/ui** — Biblioteca de componentes accesibles y personalizables
- **next-themes** — Gestión de temas (claro/oscuro)
- **i18next** — Internacionalización con soporte para EN, PT-BR y ES
- **Lucide React** — Iconos de alta calidad
- **Vercel Analytics** — Análisis de rendimiento y uso

## Características

### Soporte Multilingüe
La aplicación admite tres idiomas: inglés, portugués brasileño y español. La selección de idioma es persistente y detecta automáticamente el idioma del navegador.

### Temas Claro y Oscuro
Alternancia entre temas claro y oscuro con detección automática de la preferencia del sistema operativo.

### Instalación Simplificada
Tarjetas de instalación con scripts para Linux/macOS y Windows, incluyendo detección automática del sistema operativo del usuario.

### Documentación Interactiva
Páginas de documentación con resaltado de sintaxis, callouts informativos y navegación estructurada.

### SEO Optimizado
Metadatos completos, imágenes Open Graph y sitemap generado automáticamente.

## Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── docs/              # Páginas de documentación
│   ├── install.ps1/       # Script de instalación de Windows
│   ├── install.sh/        # Script de instalación de Linux/macOS
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout raíz de la aplicación
│   ├── manifest.ts        # Manifiesto PWA
│   ├── opengraph-image.ts # Imagen OpenGraph
│   ├── page.tsx           # Página de inicio
│   ├── robots.ts          # Robots.txt
│   ├── sitemap.ts         # Sitemap
│   └── twitter-image.tsx  # Imagen de Twitter
├── components/            # Componentes de React
├── hooks/                 # Hooks personalizados
├── lib/                   # Utilidades y configuración
├── locales/               # Archivos de traducción
└── types/                 # Definiciones de tipos TypeScript
```

## Licencia

Este proyecto está bajo la Licencia MIT - consulte el archivo [LICENSE](LICENSE.txt) para más detalles.
