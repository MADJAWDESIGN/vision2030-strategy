import { cn } from "@/lib/utils";

type Variant = "stacked" | "premium";

interface ExecutiveSignatureProps {
  variant?: Variant;
  className?: string;
  /** Force muted palette (e.g. on dark backgrounds where the default forest green is invisible). */
  tone?: "default" | "onDark";
}

/**
 * Signature exécutive uniformisée pour tout le portail Vision 2030.
 * Ne jamais ré-écrire ce bloc localement : utiliser ce composant.
 */
export function ExecutiveSignature({
  variant = "stacked",
  className,
  tone = "default",
}: ExecutiveSignatureProps) {
  const isDark = tone === "onDark";

  const eyebrowCls = cn(
    "text-[11px] font-medium uppercase tracking-[0.32em]",
    isDark ? "text-white/60" : "text-muted-foreground",
  );
  const bodyCls = isDark ? "text-white/85" : "text-foreground/85";
  const lifaCls = cn(
    "font-semibold tracking-tight",
    isDark ? "text-accent" : "text-primary",
  );
  const nameCls = cn(
    "font-display font-bold tracking-tight",
    isDark ? "text-white" : "text-foreground",
  );
  const italicCls = cn(
    "italic",
    isDark ? "text-white/55" : "text-muted-foreground/90",
  );

  if (variant === "premium") {
    return (
      <div
        className={cn(
          "grid gap-8 md:grid-cols-2 md:gap-14",
          className,
        )}
      >
        <div className="space-y-2">
          <div className={eyebrowCls}>Document de réflexion stratégique</div>
          <p className={cn("text-sm leading-relaxed", bodyCls)}>
            Préparé à l'intention des associés de{" "}
            <span className={lifaCls}>LIFA Investissements</span>
          </p>
        </div>
        <div className="space-y-2 md:text-right">
          <div className={cn(nameCls, "text-lg sm:text-xl")}>
            Johannes Walgenwitz, PMP
          </div>
          <div className={cn("text-[11px] uppercase tracking-[0.24em]", isDark ? "text-white/55" : "text-muted-foreground")}>
            Vision proposée pour le développement d'une direction
          </div>
          <div className={cn("text-[11px] uppercase tracking-[0.18em]", isDark ? "text-white/70" : "text-foreground/70")}>
            Construction · Gestion des Actifs · Création de valeur
          </div>
          <div className={cn("text-xs", italicCls)}>Juillet 2026</div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("space-y-3", className)}>
      <div className={eyebrowCls}>Document de réflexion stratégique</div>
      <p className={cn("text-sm leading-relaxed", bodyCls)}>
        Préparé à l'intention des associés de
        <br />
        <span className={lifaCls}>LIFA Investissements</span>
      </p>
      <div className={cn(nameCls, "pt-1 text-base sm:text-lg")}>
        Johannes Walgenwitz, PMP
      </div>
      <div className={cn("text-xs", italicCls)}>
        À la suite de nos échanges du 15 juillet 2026
      </div>
    </div>
  );
}