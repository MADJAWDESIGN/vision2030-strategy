import { createFileRoute } from "@tanstack/react-router";
import facadeImg from "@/assets/vision-facade.jpg";
import { PageShell, SectionBlock, CardGrid, IllustrativeNote } from "@/components/page-shell";
import { ExecutiveSignature } from "@/components/executive-signature";
import { sectionByPath } from "@/lib/sections";

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

const principes = [
  { title: "Protéger l'actif", text: "Prolonger la durée de vie utile des composantes et prévenir l'apparition d'un déficit d'entretien." },
  { title: "Créer de la valeur", text: "Chaque dollar investi doit contribuer à la valeur nette de l'actif et à la performance du portefeuille." },
  { title: "Réduire les risques", text: "Anticiper les risques techniques, financiers, réglementaires et réputationnels avant qu'ils ne se matérialisent." },
  { title: "Soutenir la croissance", text: "Rendre l'organisation capable d'intégrer davantage d'immeubles sans perte de discipline opérationnelle." },
];

const piliers = [
  { title: "Gouvernance", text: "Comités, seuils d'autorité, cadence de reporting et discipline de décision." },
  { title: "CAPEX", text: "Planification pluriannuelle 3, 5 et 10 ans basée sur le risque et la valeur." },
  { title: "Gestion des actifs", text: "Pilotage par actif et par portefeuille avec fiches vivantes et indicateurs." },
  { title: "Standardisation", text: "Bibliothèque LIFA des standards techniques et esthétiques." },
  { title: "Qualité", text: "Contrôle des livrables, réception structurée, garanties suivies." },
  { title: "Maintenance", text: "Transition du réactif vers un préventif planifié et outillé." },
  { title: "ESG", text: "Trajectoire énergie, matériaux, déchets et confort locataire." },
  { title: "Données", text: "Sources fiables, tableaux de bord et indicateurs de performance." },
  { title: "Partenaires", text: "Réseau qualifié d'entrepreneurs, professionnels et fournisseurs." },
  { title: "Développement des équipes", text: "Rôles clairs, formation continue et rétention des expertises." },
];

const etatActuel = [
  ["Données réparties", "Information centralisée"],
  ["Décisions réactives", "Planification pluriannuelle"],
  ["Standards variables", "Bibliothèque LIFA"],
  ["Dépendance aux urgences", "Maintenance préventive"],
  ["Suivi par projet", "Pilotage par portefeuille"],
  ["Sélection au cas par cas", "Réseau de partenaires qualifiés"],
];

function VisionPage() {
  const section = sectionByPath("/vision")!;
  return (
    <PageShell
      section={section}
      title="Un centre d'excellence au service de la croissance."
      intro="Faire de la fonction Construction et Gestion des Actifs un centre d'excellence capable de soutenir la croissance de LIFA, de protéger durablement ses investissements et d'améliorer l'vie des locataires."
    >
      {/* Image + lettre d'intention */}
      <SectionBlock eyebrow="Lettre d'intention" title="Premières orientations stratégiques.">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
            <ExecutiveSignature
              variant="premium"
              className="rounded-xl border border-border/60 bg-muted/30 p-6"
            />
            <p>
              À la suite de nos échanges, j'ai souhaité mettre sur papier une première
              vision de ce que pourrait devenir la fonction Construction et Gestion des
              Actifs chez LIFA.
            </p>
            <p>
              Ce document ne prétend pas définir une stratégie définitive avant d'avoir
              pleinement analysé le portefeuille, rencontré les équipes et compris les
              réalités opérationnelles de l'organisation.
            </p>
            <p>
              Il présente plutôt une méthode de travail, des orientations possibles et
              une vision structurée visant à transformer la fonction Construction en
              levier de création de valeur, de protection des actifs et de croissance
              durable.
            </p>
            <p className="text-muted-foreground">
              Les priorités finales devront être validées avec les associés, les
              équipes internes et les données réelles du portefeuille.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src={facadeImg}
              alt="Rénovation de façade et menuiserie extérieure — immeuble montréalais"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </SectionBlock>

      {/* Mission */}
      <SectionBlock tone="muted" eyebrow="Mission" title="Transformer l'investissement en performance.">
        <p className="max-w-3xl text-xl leading-relaxed text-foreground/90">
          Transformer les orientations d'investissement en projets prévisibles,
          performants et durables — grâce à une gouvernance rigoureuse, une équipe
          responsabilisée, des partenaires fiables et des décisions fondées sur les
          données.
        </p>
      </SectionBlock>

      {/* Principes directeurs */}
      <SectionBlock eyebrow="Principes directeurs" title="Quatre repères pour chaque décision.">
        <CardGrid items={principes} cols={4} />
      </SectionBlock>

      {/* 10 piliers */}
      <SectionBlock tone="muted" eyebrow="Les 10 piliers" title="Les dix piliers de la Vision 2030.">
        <CardGrid items={piliers} cols={4} />
      </SectionBlock>

      {/* État actuel → cible */}
      <SectionBlock eyebrow="État actuel → état cible" title="Six transitions structurantes.">
        <div className="grid gap-px overflow-hidden rounded-sm bg-border">
          <div className="grid grid-cols-2 bg-primary text-primary-foreground">
            <div className="p-4 text-[11px] tracking-[0.24em] uppercase opacity-80">
              Situation à analyser
            </div>
            <div className="p-4 text-[11px] tracking-[0.24em] uppercase opacity-80">
              Organisation cible
            </div>
          </div>
          {etatActuel.map(([a, b]) => (
            <div key={a} className="grid grid-cols-2 bg-background">
              <div className="border-r border-border p-5 text-sm text-muted-foreground">{a}</div>
              <div className="p-5 text-sm font-medium text-foreground">{b}</div>
            </div>
          ))}
        </div>
        <IllustrativeNote>
          Hypothèses de travail à valider durant les 30 premiers jours.
        </IllustrativeNote>
      </SectionBlock>

      {/* Valeurs */}
      <SectionBlock eyebrow="Valeurs" title="Huit principes qui guident chaque décision.">
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div key={v} className="flex items-baseline gap-5 bg-card p-8">
              <div className="font-serif-display text-2xl text-accent">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-display text-lg font-semibold tracking-tight">{v}</div>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* Executive insight */}
      <SectionBlock tone="dark" eyebrow="Executive Insight" title="Comprendre avant de transformer.">
        <p className="font-serif-display max-w-3xl text-2xl leading-relaxed opacity-95 sm:text-3xl">
          La vision définitive ne sera pas imposée avant l'analyse du portefeuille.
          Les 30 premiers jours serviront à écouter, observer et recueillir les
          données nécessaires pour adapter cette proposition à la réalité de LIFA.
        </p>
      </SectionBlock>
    </PageShell>
  );
}