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

const phase2 = [
  "Prioriser les risques critiques et les gains rapides",
  "Bâtir un premier CAPEX 3 ans par actif",
  "Structurer une bibliothèque initiale de standards",
  "Formaliser la cadence de reporting aux associés",
  "Sélectionner les partenaires stratégiques à qualifier",
  "Définir les indicateurs à suivre en priorité",
];

const phase3 = [
  "Présenter la feuille de route 2026-2030 aux associés",
  "Valider les budgets pluriannuels 3, 5 et 10 ans",
  "Fixer les jalons trimestriels de la première année",
  "Confirmer la structure d'équipe cible",
  "Officialiser les comités et les seuils d'autorité",
  "Lancer la première vague d'appels d'offres cadrés",
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

      <SectionBlock tone="muted" eyebrow="Phase 2 · Jours 31 à 60" title="Structurer et prioriser.">
        <p className="max-w-3xl text-base leading-relaxed text-foreground/85">
          La deuxième phase transforme les observations en cadre décisionnel. On
          structure les données, on fait émerger les priorités et on prépare les
          arbitrages qui seront présentés aux associés.
        </p>
        <div className="mt-10">
          <BulletList items={phase2} />
        </div>
      </SectionBlock>

      <SectionBlock eyebrow="Phase 3 · Jours 61 à 100" title="Proposer et enclencher.">
        <p className="max-w-3xl text-base leading-relaxed text-foreground/85">
          La troisième phase formalise la feuille de route, valide les budgets
          pluriannuels et lance les premières actions concrètes — sans jamais
          engager LIFA au-delà de ce qui a été validé par les associés.
        </p>
        <div className="mt-10">
          <BulletList items={phase3} />
        </div>
      </SectionBlock>
    </PageShell>
  );
}