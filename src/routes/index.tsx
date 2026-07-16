import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-building.jpg";
import { ExecutiveNav, ExecutiveFooter } from "@/components/executive-nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VISION 2030 — Construction & Gestion des Actifs | LIFA" },
      {
        name: "description",
        content:
          "Document exécutif confidentiel. Premières orientations stratégiques pour le département Construction et Gestion des Actifs de LIFA Fonds Immobilier.",
      },
    ],
  }),
  component: Index,
});

const principles = [
  {
    n: "01",
    title: "Valeur",
    text: "Chaque dollar investi doit augmenter durablement la valeur de l'actif.",
  },
  {
    n: "02",
    title: "Prévisibilité",
    text: "Des budgets, des échéanciers et une gouvernance sur lesquels les associés peuvent compter.",
  },
  {
    n: "03",
    title: "Qualité",
    text: "Des standards de rénovation qui protègent l'actif et l'expérience du locataire.",
  },
  {
    n: "04",
    title: "Durabilité",
    text: "Aligner chaque décision sur les engagements ESG et la longévité du parc.",
  },
];

const journey = [
  "Acquisition",
  "Diagnostic",
  "Priorisation",
  "CAPEX",
  "Modernisation",
  "Maintenance",
  "Optimisation",
  "Croissance",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ExecutiveNav />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Immeuble résidentiel montréalais rénové au crépuscule"
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--forest-deep)_82%,transparent)_0%,color-mix(in_oklab,var(--forest-deep)_92%,transparent)_60%,var(--forest-deep)_100%)]" />
        </div>

        <div className="mx-auto flex min-h-[92vh] max-w-[1400px] flex-col justify-between px-6 pt-24 pb-16 text-primary-foreground lg:px-10 lg:pt-32">
          <div>
            <div className="flex items-center gap-3 text-[11px] tracking-[0.34em] uppercase opacity-80">
              <span className="h-px w-10 bg-accent" />
              Document confidentiel — Accès restreint
            </div>
          </div>

          <div className="max-w-4xl">
            <div className="mb-6 text-[11px] tracking-[0.34em] uppercase opacity-70">
              LIFA Fonds Immobilier · Comité des associés
            </div>
            <h1 className="font-display text-5xl leading-[1.02] font-semibold tracking-tight sm:text-7xl lg:text-[88px]">
              VISION 2030
            </h1>
            <div className="mt-6 font-display text-lg font-light tracking-[0.18em] uppercase opacity-90 sm:text-xl">
              Construction & Gestion des Actifs
            </div>
            <div className="mt-3 text-sm tracking-wide opacity-70">
              Premières orientations stratégiques
            </div>

            <div className="mt-8 max-w-xl border-t border-white/15 pt-6 text-[12px] leading-relaxed tracking-wide opacity-85">
              Document préparé par{" "}
              <span className="font-semibold tracking-[0.14em] text-accent uppercase">
                Johannes Walgenwitz
              </span>{" "}
              pour les associés de{" "}
              <span className="font-medium">LIFA Investissements</span>,
              faisant suite à notre échange du{" "}
              <span className="font-medium">15 juillet 2026</span>.
            </div>

            <p className="font-serif-display mt-10 max-w-3xl border-l border-accent/70 pl-6 text-2xl leading-relaxed opacity-95 sm:text-3xl">
              « Chaque investissement en construction doit augmenter durablement la
              valeur de l'actif, améliorer l'expérience du locataire et soutenir la
              croissance du portefeuille. »
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                to="/vision"
                className="group inline-flex items-center gap-3 rounded-none border border-accent bg-accent px-7 py-4 text-[12px] font-medium tracking-[0.22em] text-accent-foreground uppercase transition-all hover:bg-transparent hover:text-accent"
              >
                Explorer la vision
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <button
                type="button"
                className="inline-flex cursor-not-allowed items-center gap-3 rounded-none border border-white/30 px-7 py-4 text-[12px] font-medium tracking-[0.22em] uppercase opacity-70"
                title="Section à venir"
              >
                Consulter le tableau de bord
              </button>
            </div>
          </div>

          <div className="mt-16 flex items-end justify-between text-[11px] tracking-[0.28em] uppercase opacity-60">
            <span>Préparé pour les associés</span>
            <span>v0.1 — Document de réflexion</span>
          </div>
        </div>
      </section>

      {/* QUATRE PRINCIPES */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24">
            <div>
              <div className="flex items-center gap-3 text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
                <span className="h-px w-8 bg-accent" />
                I. Principes directeurs
              </div>
              <h2 className="mt-6 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
                Quatre repères pour chaque décision.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                La Construction n'est pas un centre de coûts. C'est un levier de
                création de valeur, de protection des actifs et de croissance du
                portefeuille immobilier de LIFA.
              </p>
            </div>

            <div className="grid gap-px bg-border sm:grid-cols-2">
              {principles.map((p) => (
                <article
                  key={p.n}
                  className="group bg-background p-8 transition-colors hover:bg-card"
                >
                  <div className="flex items-baseline justify-between">
                    <div className="font-serif-display text-3xl text-accent">{p.n}</div>
                    <div className="h-px w-8 bg-accent/60 transition-all group-hover:w-14" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARCOURS DE VALEUR */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
              <span className="h-px w-8 bg-accent" />
              II. Parcours de création de valeur
            </div>
            <h2 className="mt-6 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
              De l'acquisition à la croissance de valeur.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Une chaîne opérationnelle continue, où chaque étape alimente la
              suivante en information, en discipline et en performance.
            </p>
          </div>

          <ol className="mt-16 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((step, i) => (
              <li
                key={step}
                className="flex flex-col justify-between bg-card p-8 transition-colors hover:bg-secondary"
              >
                <div className="font-serif-display text-2xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-10">
                  <div className="font-display text-lg font-semibold tracking-tight">
                    {step}
                  </div>
                  <div className="mt-3 h-px w-6 bg-accent/60" />
                </div>
              </li>
            ))}
          </ol>

          {/* Executive Insight */}
          <aside className="mt-20 border-l-2 border-accent bg-secondary/60 px-8 py-10 sm:px-12">
            <div className="text-[11px] tracking-[0.28em] text-accent uppercase">
              Executive Insight
            </div>
            <p className="font-serif-display mt-4 text-2xl leading-relaxed text-foreground sm:text-3xl">
              Comprendre avant de transformer. Structurer avant d'accélérer.
              Mesurer avant de décider.
            </p>
          </aside>
        </div>
      </section>

      <ExecutiveFooter />
    </div>
  );
}
