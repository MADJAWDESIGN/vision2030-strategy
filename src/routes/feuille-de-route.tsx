import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock, IllustrativeNote } from "@/components/page-shell";
import { sectionByPath } from "@/lib/sections";

export const Route = createFileRoute("/feuille-de-route")({
  head: () => ({
    meta: [
      { title: "Feuille de route 2026-2030 | Vision 2030 LIFA" },
      { name: "description", content: "Séquence des grandes étapes de la Vision 2030." },
    ],
  }),
  component: Page,
});

type Jalon = {
  annee: string;
  titre: string;
  objectifs: string[];
  livrables: string[];
  responsable: string;
  budget: string;
  kpi: string;
  statut: string;
  decisions: string;
};

const A_CONFIRMER = "À confirmer après diagnostic";

const jalons: Jalon[] = [
  {
    annee: "2026",
    titre: "Observer, diagnostiquer et structurer",
    objectifs: [
      "Collecte des données du portefeuille",
      "Diagnostic technique et organisationnel",
      "Gouvernance formalisée",
      "Matrice CAPEX initiale",
      "Standards pilotes",
      "Qualification des fournisseurs stratégiques",
      "Tableau de bord prototype",
      "Révision du plan ESG",
    ],
    livrables: [
      "Registre des projets",
      "Registre des garanties",
      "Structure des comités",
      "Bibliothèque LIFA — v0",
      "Plan CAPEX 3 ans — v1",
      "Prototype tableau de bord",
    ],
    responsable: A_CONFIRMER,
    budget: A_CONFIRMER,
    kpi: "Complétude des données ; nombre de risques cartographiés",
    statut: "À enclencher au jour 1",
    decisions: "Validation du diagnostic et du CAPEX 3 ans par les associés",
  },
  {
    annee: "2027",
    titre: "Standardiser et sécuriser",
    objectifs: [
      "Standards cuisines et salles de bain",
      "Programme enveloppe et menuiseries",
      "Maintenance préventive déployée",
      "Consolidation du CAPEX",
      "Premiers passeports numériques",
      "Contrats-cadres avec partenaires clés",
    ],
    livrables: [
      "Bibliothèque LIFA — v1",
      "Programme enveloppe activé",
      "Contrats-cadres signés",
      "Passeports numériques — vague 1",
    ],
    responsable: A_CONFIRMER,
    budget: A_CONFIRMER,
    kpi: "Part préventif / correctif ; % actifs sous standards",
    statut: A_CONFIRMER,
    decisions: "Approbation des contrats-cadres et des standards LIFA v1",
  },
  {
    annee: "2028",
    titre: "Numériser et mesurer",
    objectifs: [
      "Passeports numériques généralisés",
      "Tableau de bord intégré",
      "Suivi énergétique consolidé",
      "Automatisation des rapports",
      "Données fournisseurs centralisées",
      "Historique des composantes structuré",
      "Intégration projets ↔ maintenance",
    ],
    livrables: [
      "Tableau de bord intégré",
      "Base de données fournisseurs",
      "Rapports automatisés aux associés",
    ],
    responsable: A_CONFIRMER,
    budget: A_CONFIRMER,
    kpi: "Fiabilité des données ; temps de production des rapports",
    statut: A_CONFIRMER,
    decisions: "Choix des outils de gestion des actifs",
  },
  {
    annee: "2029",
    titre: "Optimiser",
    objectifs: [
      "Maintenance prédictive ciblée",
      "Analyses comparatives par catégorie",
      "Achats regroupés",
      "Optimisation énergétique fine",
      "Pilotage par coût de cycle de vie",
      "Amélioration continue formalisée",
    ],
    livrables: [
      "Rapports comparatifs annuels",
      "Programme d'achats consolidé",
      "Trajectoire énergétique révisée",
    ],
    responsable: A_CONFIRMER,
    budget: A_CONFIRMER,
    kpi: "Économies récurrentes ; intensité énergétique",
    statut: A_CONFIRMER,
    decisions: "Revalidation du CAPEX 5 ans à mi-parcours",
  },
  {
    annee: "2030",
    titre: "Centre d'excellence",
    objectifs: [
      "Gestion intégrée des actifs",
      "Décisions basées sur les données",
      "Standards LIFA reproductibles",
      "Réseau de partenaires performants",
      "Réduction mesurée des risques",
      "Meilleure prévisibilité",
      "Soutien à la croissance du portefeuille",
    ],
    livrables: [
      "Bilan Vision 2030",
      "Cadre post-2030 proposé",
    ],
    responsable: A_CONFIRMER,
    budget: A_CONFIRMER,
    kpi: "Indice de santé du portefeuille ; NPS locataires",
    statut: A_CONFIRMER,
    decisions: "Cadrage stratégique 2031-2035",
  },
];

function Page() {
  const section = sectionByPath("/feuille-de-route")!;
  return (
    <PageShell
      section={section}
      title="Cinq années, cinq jalons structurants."
      intro="La feuille de route 2026-2030 séquence les grandes étapes. Elle sera actualisée à chaque revue annuelle en fonction du portefeuille réel et des décisions d'investissement."
    >
      <SectionBlock eyebrow="Jalons annuels" title="Une progression en cinq temps.">
        <div className="space-y-10">
          {jalons.map((j) => (
            <article key={j.annee} className="border border-border bg-card p-6 lg:p-8">
              <div className="flex flex-wrap items-baseline gap-6">
                <div className="font-serif-display text-5xl text-accent">{j.annee}</div>
                <div>
                  <div className="text-[10px] tracking-[0.28em] text-muted-foreground uppercase">
                    Jalon
                  </div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    {j.titre}
                  </h3>
                </div>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div>
                  <div className="text-[10px] tracking-[0.28em] text-muted-foreground uppercase">
                    Objectifs
                  </div>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/85">
                    {j.objectifs.map((o) => (
                      <li key={o} className="flex gap-3">
                        <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-accent" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.28em] text-muted-foreground uppercase">
                    Livrables
                  </div>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/85">
                    {j.livrables.map((l) => (
                      <li key={l} className="flex gap-3">
                        <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-accent" />
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-5">
                {[
                  ["Responsable", j.responsable],
                  ["Budget", j.budget],
                  ["KPI", j.kpi],
                  ["Statut", j.statut],
                  ["Décisions requises", j.decisions],
                ].map(([k, v]) => (
                  <div key={k} className="flex flex-col gap-1 bg-background p-4">
                    <span className="text-[10px] tracking-[0.28em] text-muted-foreground uppercase">
                      {k}
                    </span>
                    <span className={`text-sm ${v === A_CONFIRMER ? "text-muted-foreground italic" : "text-foreground/90"}`}>
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <IllustrativeNote>
          Les jalons définitifs seront validés avec les associés après la phase de
          diagnostic. Les champs marqués « à confirmer » restent visibles pour ne
          rien masquer.
        </IllustrativeNote>
      </SectionBlock>
    </PageShell>
  );
}
