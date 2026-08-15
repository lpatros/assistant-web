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

Este repositorio contiene el sitio web de presentación de **Assistant CLI**, un wrapper de shell ligero, modular y localizado que orquesta motores de IA.

El proyecto expone dos **rutas** (`/install.sh` e `/install.ps1`) que hacen de proxy para los scripts de instalación alojados en GitHub, garantizando que los comandos de instalación mostrados en el sitio siempre sirvan la versión más reciente de los scripts.

## Tecnologías

- **Next.js 16** — Framework React con App Router, renderizado en servidor y rutas de API.
- **React 19** — Biblioteca de interfaz con componentes y hooks modernos.
- **TypeScript 5** — Tipado estático en todo el código del proyecto.
- **Tailwind CSS 4** — Estilos basados en utilidades con soporte para tema oscuro y variantes.
- **shadcn/ui + Base UI** — Componentes de UI reutilizables y accesibles.
- **i18next / react-i18next** — Internacionalización con soporte para pt-BR, en y es.
- **next-themes** — Alternancia y persistencia del tema claro/oscuro.
- **lucide-react / react-icons** — Conjuntos de iconos para la interfaz.
- **class-variance-authority / tailwind-variants / tailwind-merge** — Composición y variantes de clases utilitarias.
- **ESLint + Prettier** — Linting y formateo de código.


## Características

### Presentación del Producto

- **Hero section** con eslogan, descripción y acceso al repositorio oficial en GitHub.
- **Cuadrícula de características** destacando Multi-Engine, Skills, Extensibilidad, Multi-Idioma, Instalación sencilla y Persistencia local.

### Instalación Directa

- **Pestañas por SO** (Linux, macOS, Windows) con detección automática del sistema operativo del visitante.
- **Comandos copiables** (`curl | bash` e `irm | iex`) que apuntan a las rutas de proxy de la propia aplicación.
- **Rutas de API** `/install.sh` e `/install.ps1` que redirigen a los scripts oficiales de GitHub.

### Demostración en Terminal

- **Terminal interactivo simulado** con flujos reales: chat directo, commit semántico, estado y diagnóstico, y cambio de motor/canal.
- **Botón de copia** en todos los comandos y salidas de ejemplo.

### Transparencia y Seguridad

- **Sección de seguridad** reforzando que el instalador y el CLI son 100% de código abierto.
- Enlaces para inspeccionar el script Bash y el script PowerShell antes de su ejecución.

### Internacionalización y Tema

- **Selector de idioma** con soporte para Portugués (BR), Inglés (EE. UU.) y Español.
- **Alternancia de tema** claro/oscuro con persistencia de la preferencia.

## Estructura del Proyecto

```
.
├── public/                      # Archivos públicos
├── src/
│    ├── app/                    # Rutas de la aplicación
│    ├── components/             # Componentes de la aplicación
│    ├── hooks/                  # Hooks de la aplicación
│    ├── lib/                    # Utilidades y configuraciones
│    ├── locales/                # Traducciones del sitio
│    └── types/                  # Tipos e interfaces de la aplicación
├── .gitignore                   # Archivos ignorados por Git
├── .prettierrc                  # Configuración de Prettier
├── components.json              # Configuración de shadcn/ui
├── eslint.config.mjs            # Reglas de ESLint (flat config)
├── LICENSE.txt                  # Licencia del proyecto
├── next.config.ts               # Configuración de Next.js
├── package-lock.json            # Dependencias del proyecto
├── package.json                 # Manifiesto y scripts del proyecto
├── pnpm-lock.yaml               # Dependencias del proyecto
├── pnpm-workspace.yaml          # Workspace de pnpm
├── postcss.config.mjs           # Configuración de PostCSS
├── README.md                    # README del proyecto
└── tsconfig.json                # Configuración de TypeScript
```

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulte el archivo [LICENSE](LICENSE.txt) para más detalles.
