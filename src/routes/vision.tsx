import { createFileRoute, Link } from "@tanstack/react-router";
import facadeImg from "@/assets/vision-facade.jpg";
import { ExecutiveNav, ExecutiveFooter } from "@/components/executive-nav";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Vision Construction 2030 | LIFA" },
      {
        name: "description",
        content:
          "Vision, mission et valeurs du futur département Construction et Gestion des Actifs de LIFA Fonds Immobilier.",
      },
    ],
  }),
  component: VisionPage,
});

const values = [
  "Excellence",
  "Transparence",
  "Responsabilisation",
  "Collaboration",
  "Innovation",
  "Durabilité",
  "Création de valeur",
  "Respect",
];

function VisionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ExecutiveNav />

      {/* En-tête de section */}
      <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:px-10 lg:py-32">
          <div>
            <div className="flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase opacity-70">
              <span className="h-px w-10 bg-accent" />
              Chapitre I — Vision
            </div>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] font-semibold tracking-tight sm:text-6xl">
              Un centre d'excellence
              <br />
              au service de la croissance.
            </h1>
            <p className="font-serif-display mt-8 max-w-xl text-2xl leading-relaxed opacity-90">
              Faire du département Construction et Gestion des Actifs un centre
              d'excellence capable de soutenir la croissance de LIFA, de protéger
              durablement ses investissements et d'améliorer l'expérience de ses
              locataires.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src={facadeImg}
              alt="Rénovation de façade et menuiserie extérieure — immeuble montréalais"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1600}
              height={1000}
            />
          </div>
        </div>
      </section>

      {/* Lettre d'intention */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
          <div className="flex items-center gap-3 text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
            <span className="h-px w-8 bg-accent" />
            Premières orientations stratégiques
          </div>
          <h2 className="mt-6 text-4xl leading-tight font-semibold tracking-tight">
            Lettre d'intention.
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/90">
            <p className="text-sm tracking-wide text-muted-foreground">
              Document préparé par{" "}
              <span className="font-semibold tracking-[0.14em] text-foreground uppercase">
                Johannes Walgenwitz
              </span>{" "}
              pour les associés de{" "}
              <span className="font-medium text-foreground">LIFA Investissements</span>,
              faisant suite à notre échange du{" "}
              <span className="font-medium text-foreground">15 juillet 2026</span>.
            </p>
            <p>
              À la suite de nos échanges, j'ai souhaité mettre sur papier une
              première vision de ce que pourrait devenir la fonction Construction
              et Gestion des Actifs chez LIFA.
            </p>
            <p>
              Ce document ne prétend pas définir une stratégie définitive avant
              d'avoir pleinement analysé le portefeuille, rencontré les équipes et
              compris les réalités opérationnelles de l'organisation.
            </p>
            <p>
              Il présente plutôt une méthode de travail, des orientations
              possibles et une vision structurée visant à transformer la fonction
              Construction en levier de création de valeur, de protection des
              actifs et de croissance durable.
            </p>
            <p className="text-muted-foreground">
              Les priorités finales devront être validées avec les associés, les
              équipes internes et les données réelles du portefeuille.
            </p>
          </div>

          <aside className="mt-14 border-l-2 border-accent bg-secondary/60 px-8 py-8">
            <div className="text-[11px] tracking-[0.28em] text-accent uppercase">
              Executive Insight
            </div>
            <p className="font-serif-display mt-3 text-2xl leading-relaxed">
              Comprendre avant de transformer. Structurer avant d'accélérer.
              Mesurer avant de décider.
            </p>
          </aside>
        </div>
      </section>

      {/* Mission */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-24 lg:grid-cols-[1fr_1.4fr] lg:gap-24 lg:px-10 lg:py-32">
          <div>
            <div className="flex items-center gap-3 text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
              <span className="h-px w-8 bg-accent" />
              Mission
            </div>
            <h2 className="mt-6 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
              Transformer l'investissement en performance.
            </h2>
          </div>
          <p className="text-xl leading-relaxed text-foreground/90 lg:pt-14">
            Transformer les orientations d'investissement en projets performants,
            prévisibles et durables — grâce à une gouvernance rigoureuse, des
            équipes compétentes, des partenaires fiables et une gestion fondée
            sur les données.
          </p>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex items-center gap-3 text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
            <span className="h-px w-8 bg-accent" />
            Valeurs
          </div>
          <h2 className="mt-6 max-w-3xl text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
            Huit principes qui guident chaque décision.
          </h2>

          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v}
                className="flex items-baseline gap-5 bg-card p-8 transition-colors hover:bg-secondary"
              >
                <div className="font-serif-display text-2xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-display text-lg font-semibold tracking-tight">
                  {v}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 border-t border-border pt-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-xl">
                <div className="text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
                  Prochain chapitre
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  Les 10 piliers stratégiques, le plan des 100 jours et la feuille
                  de route 2026-2030.
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Sections en cours de préparation. Elles seront intégrées à ce
                  portail dans les prochaines itérations.
                </p>
              </div>
              <Link
                to="/"
                className="inline-flex items-center gap-3 self-start border border-foreground/30 px-6 py-3 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors hover:border-accent hover:text-accent md:self-auto"
              >
                ← Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ExecutiveFooter />
    </div>
  );
}