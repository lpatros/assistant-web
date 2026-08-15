<div align="center">

# Assistant CLI — Web

[English](README.md) | Português | [Español](README-ES.md)

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
- [Recursos](#recursos)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Licença](#licença)


## Descrição

Este repositório contém o site de apresentação do **Assistant CLI**, um wrapper de shell leve, modular e localizado que orquestra engines de IA.

O projeto expõe duas **rotas** (`/install.sh` e `/install.ps1`) que fazem proxy dos scripts de instalação hospedados no GitHub, garantindo que os comandos de instalação exibidos no site sempre sirvam a versão mais recente dos scripts.

## Tecnologias

- **Next.js 16** — Framework React com App Router, renderização no servidor e rotas de API.
- **React 19** — Biblioteca de interface com componentes e hooks modernos.
- **TypeScript 5** — Tipagem estática em todo o código do projeto.
- **Tailwind CSS 4** — Estilização utilitária com suporte a tema escuro e variantes.
- **shadcn/ui + Base UI** — Componentes de UI reutilizáveis e acessíveis.
- **i18next / react-i18next** — Internacionalização com suporte a pt-BR, en e es.
- **next-themes** — Alternância e persistência do tema claro/escuro.
- **lucide-react / react-icons** — Conjuntos de ícones para a interface.
- **class-variance-authority / tailwind-variants / tailwind-merge** — Composição e variantes de classes utilitárias.
- **ESLint + Prettier** — Linting e formatação de código.


## Recursos

### Apresentação do Produto

- **Hero section** com tagline, descrição e acesso ao repositório oficial no GitHub.
- **Grade de recursos** destacando Multi-Engine, Skills, Extensibilidade, Multi-Linguagem, Instalação simples e Persistência local.

### Instalação Direta

- **Abas por SO** (Linux, macOS, Windows) com detecção automática do sistema operacional do visitante.
- **Comandos copiáveis** (`curl | bash` e `irm | iex`) apontando para as rotas de proxy da própria aplicação.
- **Rotas de API** `/install.sh` e `/install.ps1` que redirecionam os scripts oficiais do GitHub.

### Demonstração no Terminal

- **Terminal interativo simulado** com fluxos reais: chat direto, commit semântico, status e diagnóstico, e troca de engine/canal.
- **Botão de cópia** em todos os comandos e saídas de exemplo.

### Transparência e Segurança

- **Seção de segurança** reforçando que o instalador e o CLI são 100% open source.
- Links para inspecionar o script Bash e o script PowerShell antes da execução.

### Internacionalização e Tema

- **Seletor de idioma** com suporte a Português (BR), Inglês (EUA) e Espanhol.
- **Alternância de tema** claro/escuro com persistência da preferência.

## Estrutura do Projeto

```
.
├── public/                      # Arquivos públicos
├── src/
│    ├── app/                    # Rotas da aplicação
│    ├── components/             # Componentes da aplicação
│    ├── hooks/                  # Hooks da aplicação
│    ├── lib/                    # Utilitários e configurações
│    ├── locales/                # Traduções do site
│    └── types/                  # Tipos e interfaces da aplicação
├── .gitignore                   # Arquivos ignorados pelo Git
├── .prettierrc                  # Configuração do Prettier
├── components.json              # Configuração do shadcn/ui
├── eslint.config.mjs            # Regras do ESLint (flat config)
├── LICENSE.txt                  # Licença do projeto
├── next.config.ts               # Configuração do Next.js
├── package-lock.json            # Dependências do projeto
├── package.json                 # Manifesto e scripts do projeto
├── pnpm-lock.yaml               # Dependências do projeto
├── pnpm-workspace.yaml          # Workspace do pnpm
├── postcss.config.mjs           # Configuração do PostCSS
├── README.md                    # README do projeto
└── tsconfig.json                # Configuração do TypeScript
```

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE.txt) para mais detalhes.
