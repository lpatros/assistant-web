<div align="center">

# Assistant CLI — Web

[English](README.md) | **Português** | [Español](README-ES.md)

  <p>Site do <a href="https://github.com/lpatros/assistant-cli">Assistant CLI</a>, um wrapper de shell leve, modular e localizado para engines de IA.</p>
  <div>
    <img src="https://img.shields.io/badge/Framework-Next.js%2016-000000.svg" alt="Framework: Next.js 16"/>
    <img src="https://img.shields.io/badge/Language-TypeScript-3178c6.svg" alt="Linguagem: TypeScript"/>
    <img src="https://img.shields.io/badge/UI-React%2019-61dafb.svg" alt="UI: React 19"/>
    <img src="https://img.shields.io/badge/Styles-Tailwind%20CSS-06b6d4.svg" alt="Estilos: Tailwind CSS"/>
    <img src="https://img.shields.io/badge/License-MIT-22c55e.svg" alt="Licença: MIT"/>
  </div>
  <br>
</div>

# Links Rápidos

- [Descrição](#descrição)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Licença](#licença)

## Descrição

O Assistant Web é uma aplicação web desenvolvida com Next.js 16 que serve como plataforma de apresentação, documentação e instalação para o Assistant-CLI. O projeto oferece uma experiência de usuário com suporte a múltiplos idiomas, temas claro e escuro, e um processo de instalação simplificado via scripts de terminal.

A aplicação foi projetada com foco em performance e acessibilidade, utilizando Server Components do React 19 e estilização moderna com Tailwind CSS 4. A estrutura modular facilita a manutenção e a adição de novos idiomas ou funcionalidades.

O projeto inclui scripts de instalação para Linux/macOS (`install.sh`) e Windows (`install.ps1`), permitindo que os usuários instalem o assistente de terminal diretamente a partir da documentação.

## Tecnologias

- **Next.js 16** — Framework React com renderização server-side e geração estática
- **React 19** — Biblioteca de interface com suporte a Server Components
- **TypeScript 5** — Tipagem estática para JavaScript
- **Tailwind CSS 4** — Framework de utilitários para estilização
- **shadcn/ui** — Biblioteca de componentes acessíveis e personalizáveis
- **next-themes** — Gerenciamento de temas (claro/escuro)
- **i18next** — Internacionalização com suporte a EN, PT-BR e ES
- **Lucide React** — Ícones de alta qualidade
- **Vercel Analytics** — Análise de performance e uso

## Funcionalidades

### Suporte Multilíngue
A aplicação suporta três idiomas: Inglês, Português Brasileiro e Espanhol. A seleção de idioma é persistente e detecta automaticamente o idioma do navegador.

### Temas Claro e Escuro
Alternância entre temas claro e escuro com detecção automática da preferência do sistema operacional.

### Instalação Simplificada
Cards de instalação com scripts para Linux/macOS e Windows, incluindo detecção automática do sistema operacional do usuário.

### Documentação Interativa
Páginas de documentação com código destacado, callouts informativos e navegação estruturada.

### SEO Otimizado
Metadados completos, Open Graph images e sitemap gerado automaticamente.

## Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── docs/              # Páginas de documentação
│   ├── install.ps1/       # Script de instalação Windows
│   ├── install.sh/        # Script de instalação Linux/macOS
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz da aplicação
│   ├── manifest.ts        # Manifesto PWA
│   ├── opengraph-image.ts # OpenGraph image
│   ├── page.tsx           # Página inicial
│   ├── robots.ts          # Robots.txt
│   ├── sitemap.ts         # Sitemap
│   └── twitter-image.tsx  # Twitter image
├── components/            # Componentes React
├── hooks/                 # Custom hooks
├── lib/                   # Utilitários e configurações
├── locales/               # Arquivos de tradução
└── types/                 # Definições de tipos TypeScript
```

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE.txt) para mais detalhes.
