import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock, BulletList } from "@/components/page-shell";
import { sectionByPath } from "@/lib/sections";

export const Route = createFileRoute("/plan-100-jours")({
  head: () => ({
    meta: [
      { title: "Plan des 100 jours | Vision 2030 LIFA" },
      { name: "description", content: "Observer, structurer et proposer — méthode de démarrage sur 100 jours." },
    ],
  }),
  component: Page,
});

const phase1 = [
  {
    n: "Semaine 1",
    titre: "Alignement avec les associés",
    items: [
      "Confirmer les attentes",
      "Définir les priorités immédiates",
      "Comprendre la stratégie d'acquisition",
      "Identifier les décisions attendues",
      "Valider les niveaux d'autorité",
      "Préciser la fréquence des rapports",
    ],
  },
  {
    n: "Semaine 2",
    titre: "Équipe et processus",
    items: [
      "Rencontrer chaque membre",
      "Comprendre les rôles",
      "Examiner la charge de travail",
      "Cartographier les processus",
      "Identifier les outils utilisés",
      "Relever les irritants opérationnels",
    ],
  },
  {
    n: "Semaine 3",
    titre: "Portefeuille et bâtiments",
    items: [
      "Visiter les immeubles prioritaires",
      "Analyser les projets actifs",
      "Relever les risques visibles",
      "Examiner les inspections existantes",
      "Inventorier les composantes majeures",
      "Identifier les urgences potentielles",
    ],
  },
  {
    n: "Semaine 4",
    titre: "Données et partenaires",
    items: [
      "Analyser les budgets",
      "Examiner les contrats",
      "Inventorier les fournisseurs",
      "Vérifier les garanties",
      "Analyser les historiques de coûts",
      "Évaluer la qualité des données",
    ],
  },
];

const livrables30 = [
  "Carte préliminaire du portefeuille",
  "Registre initial des projets",
  "Liste des risques prioritaires",
  "Inventaire des contrats",
  "Inventaire des garanties",
  "Cartographie des processus",
  "Analyse des outils",
  "Liste des données manquantes",
  "Premières possibilités de gains rapides",
];

const phase2Travaux = [
  "Classification des immeubles par typologie, âge et positionnement",
  "Analyse préliminaire du déficit d'entretien",
  "Évaluation du programme CAPEX en cours et de sa cohérence",
  "Analyse des fournisseurs actifs et de leur performance",
  "Évaluation des processus existants et de leurs irritants",
  "Première définition des standards LIFA à généraliser",
  "Validation croisée des risques identifiés",
  "Analyse des besoins d'équipe : rôles, charge, compétences",
];
const phase2Livrables = [
  "Matrice de priorisation des risques",
  "Indice préliminaire de santé des actifs",
  "Liste des projets critiques",
  "Diagnostic organisationnel",
  "Recommandations de gains rapides",
  "Structure cible proposée",
  "Liste des KPI initiaux",
];

const phase3Travaux = [
  "Cadre de gouvernance et comités",
  "Processus d'approbation et seuils d'autorité",
  "Standardisation technique et esthétique",
  "Gestion documentaire et référentiels",
  "CAPEX pluriannuel structuré",
  "Cadre fournisseurs et contrats",
  "Programme qualité et contrôles",
  "Tableau de bord prototype",
  "Programme de maintenance préventive",
  "Feuille de route ESG révisée",
];
const phase3Livrables = [
  "Plan CAPEX initial",
  "Standards pilotes",
  "Tableau de bord prototype",
  "Structure des comités",
  "Formulaire d'évaluation fournisseur",
  "Calendrier de maintenance",
  "Feuille de route ESG révisée",
  "Plan de recrutement ou de développement",
];

const phase4Travaux = [
  "Présentation aux associés",
  "Validation des priorités",
  "Sélection des projets pilotes",
  "Communication à l'équipe",
  "Calendrier d'implantation",
  "Approbation du plan annuel",
];

function Page() {
  const section = sectionByPath("/plan-100-jours")!;
  return (
    <PageShell
      section={section}
      title="Plan des 100 jours — observer, structurer, proposer."
      intro="Le plan des 100 jours ne vise pas à transformer immédiatement l'organisation. Il vise d'abord à établir une compréhension commune, à recueillir les données fiables, à identifier les risques et à proposer une feuille de route validée par les associés."
    >
      <SectionBlock eyebrow="Phase 1 · Jours 1 à 30" title="Observer et comprendre.">
        <div className="grid gap-px bg-border md:grid-cols-2">
          {phase1.map((w) => (
            <article key={w.n} className="bg-card p-6">
              <div className="text-[11px] tracking-[0.28em] text-accent uppercase">{w.n}</div>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">{w.titre}</h3>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {w.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-accent" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <div className="text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
            Livrables des 30 premiers jours
          </div>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {livrables30.map((l) => (
              <li key={l} className="flex items-start gap-3 border border-border bg-card p-4 text-sm">
                <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="mt-10 border-l-2 border-accent bg-secondary/60 px-6 py-5 text-sm leading-relaxed text-foreground/85">
          Durant cette phase, aucune transformation majeure ne sera imposée sans validation.
          Les observations serviront à ajuster le plan stratégique final.
        </aside>
      </SectionBlock>

      <SectionBlock tone="muted" eyebrow="Phase 2 · Jours 31 à 60" title="Diagnostiquer.">
        <p className="max-w-3xl text-base leading-relaxed text-foreground/85">
          Passer des observations à un diagnostic structuré : classer les
          immeubles, mesurer les écarts, croiser les risques et préparer les
          arbitrages qui seront proposés aux associés.
        </p>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <div className="text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
              Travaux menés
            </div>
            <div className="mt-4"><BulletList items={phase2Travaux} /></div>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
              Livrables
            </div>
            <ul className="mt-4 space-y-3">
              {phase2Livrables.map((l) => (
                <li key={l} className="flex items-start gap-3 border border-border bg-card p-4 text-sm">
                  <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock eyebrow="Phase 3 · Jours 61 à 90" title="Structurer.">
        <p className="max-w-3xl text-base leading-relaxed text-foreground/85">
          Formaliser les cadres qui rendront l'organisation opérante :
          gouvernance, CAPEX, standards, fournisseurs, qualité, maintenance,
          données et ESG.
        </p>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <div className="text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
              Travaux menés
            </div>
            <div className="mt-4"><BulletList items={phase3Travaux} /></div>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
              Livrables
            </div>
            <ul className="mt-4 space-y-3">
              {phase3Livrables.map((l) => (
                <li key={l} className="flex items-start gap-3 border border-border bg-card p-4 text-sm">
                  <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock tone="muted" eyebrow="Phase 4 · Jours 91 à 100" title="Mobiliser.">
        <p className="max-w-3xl text-base leading-relaxed text-foreground/85">
          Aligner les associés, l'équipe et les partenaires sur les priorités
          retenues et enclencher les projets pilotes.
        </p>
        <div className="mt-10">
          <BulletList items={phase4Travaux} />
        </div>
      </SectionBlock>

      <SectionBlock tone="dark" eyebrow="Résultat attendu au jour 100" title="Une vision adaptée à la réalité de LIFA.">
        <p className="font-serif-display max-w-3xl text-2xl leading-relaxed opacity-95 sm:text-3xl">
          Un portefeuille de projets priorisé, des responsabilités claires, un
          premier tableau de bord opérationnel et une feuille de route validée
          par les associés.
        </p>
      </SectionBlock>
    </PageShell>
  );
}