import { FEATURES } from "@/lib/constants";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function FeaturesGrid() {
  return (
    <section
      id="features"
      className="relative border-t border-zinc-800/60 bg-zinc-950 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Desenvolvido para Máxima Eficiência
          </h2>
          <p className="mt-3 text-sm text-zinc-400 sm:text-base">
            O código dos scripts e do binário foi projetado para não poluir seu
            sistema e garantir inicialização instantânea.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, idx) => (
            <Card
              key={idx}
              className="group border-zinc-800/80 bg-zinc-900/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-700/90 hover:bg-zinc-900/70 hover:shadow-indigo-500/5"
            >
              <CardHeader className="pb-3">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700/50 bg-zinc-800/80 transition-transform group-hover:scale-105">
                    <feature.icon.name
                      size={20}
                      className={feature.icon.className}
                    />
                  </div>
                  {feature.tag && (
                    <Badge
                      variant="secondary"
                      className="font-mono text-[11px]"
                    >
                      {feature.tag}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg font-semibold text-zinc-100 group-hover:text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
