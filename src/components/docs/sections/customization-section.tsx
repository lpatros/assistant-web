"use client";

import * as React from "react";
import { CodeBlock } from "@/components/code-block";
import { useTranslation } from "react-i18next";

export function CustomizationSection() {
  const { t } = useTranslation();

  return (
    <section className="space-y-6 border-b border-zinc-200 py-12 dark:border-zinc-800">
      <div id="custom-overview" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
          <span>{t("docs.customization.badge")}</span>
        </div>
        <h2 className="text-foreground text-2xl font-bold tracking-tight">
          {t("docs.customization.heading")}
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {t("docs.customization.description")}
        </p>

        <CodeBlock
          filename={t("docs.customization.treeFilename")}
          language="bash"
          code={t("docs.customization.treeCode")}
        />
      </div>

      <div id="custom-skills" className="scroll-mt-24 space-y-3 pt-4">
        <h3 className="text-foreground flex items-center gap-2 text-base font-bold">
          <span>{t("docs.customization.skills.title")}</span>
        </h3>
        <p className="text-muted-foreground text-xs sm:text-sm">
          {t("docs.customization.skills.description")}
        </p>
        <CodeBlock
          language="bash"
          code={t("docs.customization.skills.code")}
        />
      </div>

      <div id="custom-engines" className="scroll-mt-24 space-y-3 pt-4">
        <h3 className="text-foreground flex items-center gap-2 text-base font-bold">
          <span>{t("docs.customization.engines.title")}</span>
        </h3>
        <p className="text-muted-foreground text-xs sm:text-sm">
          {t("docs.customization.engines.description")}
        </p>
        <CodeBlock
          filename="custom/engines/minha_ia.sh"
          language="bash"
          code={`# custom/engines/minha_ia.sh

_engine_minha_ia_binary() {
  echo "minha-ia-cli"
}

_engine_minha_ia_is_installed() {
  _is_installed "minha-ia-cli"
}

_engine_minha_ia_list_models() {
  minha-ia-cli models list 2>/dev/null
}

_engine_minha_ia_run_prompt() {
  local prompt="$1"
  local output_file="$2"
  shift 2 || true
  local model=$(_get_model_for_engine "minha_ia")
  
  if [[ -n "$output_file" ]]; then
    minha-ia-cli --model "$model" -p "$prompt" > "$output_file" 2>/dev/null
  else
    minha-ia-cli --model "$model" -p "$prompt"
  fi
}

_engine_minha_ia_run_interactive() {
  local model="$1"
  minha-ia-cli chat --model "$model"
}

_engine_minha_ia_default_model() {
  echo "modelo-padrao"
}`}
        />
      </div>

      <div id="custom-locales" className="scroll-mt-24 space-y-3 pt-4">
        <h3 className="text-foreground flex items-center gap-2 text-base font-bold">
          <span>{t("docs.customization.locales.title")}</span>
        </h3>
        <p className="text-muted-foreground text-xs sm:text-sm">
          {t("docs.customization.locales.description")}
        </p>
        <CodeBlock
          filename="custom/locales/fr.sh"
          language="bash"
          code={`# custom/locales/fr.sh
t_lang_changed() {
  _success "Langue modifiée en: \${BOLD}\$1\${RESET}"
}
t_engine_status() {
  _info "Moteur actuel: \${MAGENTA}\${BOLD}\$1\${RESET}"
  _info "Modèle actuel: \${GREEN}\${BOLD}\$2\${RESET}"
}`}
        />
        <CodeBlock
          language="bash"
          code={t("docs.customization.locales.code")}
        />
      </div>

      <div id="custom-init" className="scroll-mt-24 space-y-3 pt-4">
        <h3 className="text-foreground flex items-center gap-2 text-base font-bold">
          <span>{t("docs.customization.init.title")}</span>
        </h3>
        <p className="text-muted-foreground text-xs sm:text-sm">
          {t("docs.customization.init.description")}
        </p>
        <CodeBlock
          filename="custom/init.sh"
          language="bash"
          code={`# custom/init.sh
_cmd_docker_clean() {
  echo "Limpando containers não utilizados..."
  docker container prune -f
}`}
        />
        <CodeBlock
          language="bash"
          code={t("docs.customization.init.code")}
        />
      </div>

      <div id="custom-status" className="scroll-mt-24 space-y-3 pt-4">
        <h3 className="text-foreground flex items-center gap-2 text-base font-bold">
          <span>{t("docs.customization.status.title")}</span>
        </h3>
        <CodeBlock
          language="bash"
          code={t("docs.customization.status.code")}
        />
      </div>
    </section>
  );
}
