import { Link } from "@tanstack/react-router";

const sections: { label: string; to: string; disabled?: boolean }[] = [
  { label: "Accueil", to: "/" },
  { label: "Vision", to: "/vision" },
  { label: "Création de valeur", to: "/vision", disabled: true },
  { label: "Plan 100 jours", to: "/vision", disabled: true },
  { label: "CAPEX", to: "/vision", disabled: true },
  { label: "ESG", to: "/vision", disabled: true },
  { label: "Feuille de route", to: "/vision", disabled: true },
];

export function ExecutiveNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[color-mix(in_oklab,var(--foreground)_10%,transparent)] bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <Link to="/" className="group flex items-baseline gap-3">
          <span className="text-[11px] tracking-[0.32em] text-muted-foreground uppercase">
            LIFA
          </span>
          <span className="h-3 w-px bg-accent/70" aria-hidden />
          <span className="font-display text-sm font-semibold tracking-[0.14em] text-foreground uppercase">
            Vision 2030
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {sections.map((s) =>
            s.disabled ? (
              <span
                key={s.label}
                className="cursor-not-allowed text-[12px] tracking-wide text-muted-foreground/60 uppercase"
                title="Section à venir"
              >
                {s.label}
              </span>
            ) : (
              <Link
                key={s.label}
                to={s.to}
                className="text-[12px] tracking-wide text-muted-foreground uppercase transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {s.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[10px] font-medium tracking-[0.18em] text-accent-foreground uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Confidentiel
          </span>
        </div>
      </div>
    </header>
  );
}

export function ExecutiveFooter() {
  return (
    <footer className="mt-32 border-t border-[color-mix(in_oklab,var(--foreground)_10%,transparent)] bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1400px] px-6 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-[11px] tracking-[0.32em] uppercase opacity-70">LIFA</div>
            <div className="mt-2 font-display text-xl font-semibold tracking-tight">
              Fonds Immobilier
            </div>
            <p className="font-serif-display mt-4 max-w-sm text-lg leading-relaxed opacity-80">
              « Comprendre avant de transformer. Structurer avant d'accélérer.
              Mesurer avant de décider. »
            </p>
          </div>
          <div className="text-sm opacity-80">
            <div className="text-[11px] tracking-[0.24em] uppercase opacity-60">
              Document
            </div>
            <p className="mt-3 leading-relaxed">
              Vision 2030 — Construction & Gestion des Actifs.
              <br />
              Premières orientations stratégiques.
            </p>
          </div>
          <div className="text-sm opacity-80">
            <div className="text-[11px] tracking-[0.24em] uppercase opacity-60">
              Diffusion
            </div>
            <p className="mt-3 leading-relaxed">
              Confidentiel — réservé aux associés et aux personnes autorisées de LIFA
              Investissements.
            </p>
            <p className="mt-4 leading-relaxed">
              Préparé par{" "}
              <span className="font-semibold tracking-[0.12em] uppercase">
                Johannes Walgenwitz
              </span>
              <br />
              Faisant suite à l'échange du 15 juin 2026.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[11px] tracking-[0.2em] uppercase opacity-60 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} LIFA — Tous droits réservés</span>
          <span>Document confidentiel · v0.1</span>
        </div>
      </div>
    </footer>
  );
}