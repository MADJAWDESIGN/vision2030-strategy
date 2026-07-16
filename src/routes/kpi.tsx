import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock, IllustrativeNote } from "@/components/page-shell";
import { sectionByPath } from "@/lib/sections";

export const Route = createFileRoute("/kpi")({
  head: () => ({
    meta: [
      { title: "KPI | Vision 2030 LIFA" },
      { name: "description", content: "Indicateurs de performance suivis par le département." },
    ],
  }),
  component: Page,
});

const familles = [
  {
    famille: "Financiers",
    kpis: [
      "Écart CAPEX budget vs. réel",
      "Prévision à terminaison par projet",
      "Coût par pied carré par catégorie",
      "Ratio préventif / correctif",
    ],
  },
  {
    famille: "Techniques",
    kpis: [
      "Indice d'état par actif",
      "Nombre d'infiltrations actives",
      "Composantes en fin de vie identifiées",
      "Délai moyen de résolution technique",
    ],
  },
  {
    famille: "Locataires",
    kpis: [
      "Délai de première réponse aux demandes",
      "Taux de résolution au premier passage",
      "Satisfaction post-intervention",
      "Roulement lié à des enjeux techniques",
    ],
  },
  {
    famille: "ESG",
    kpis: [
      "Intensité énergétique (kWh/pi²)",
      "Consommation d'eau par unité",
      "Part de projets avec critères ESG",
      "Déchets valorisés en rénovation",
    ],
  },
  {
    famille: "Partenaires",
    kpis: [
      "Note qualité par entrepreneur",
      "Respect des délais contractuels",
      "Nombre de non-conformités",
      "Exposition à un fournisseur unique",
    ],
  },
];

function Page() {
  const section = sectionByPath("/kpi")!;
  return (
    <PageShell
      section={section}
      title="Ce que l'on mesure, on peut l'améliorer."
      intro="La liste ci-dessous est une base de discussion. Elle sera raffinée avec les associés pour ne conserver que les indicateurs réellement pilotables et défendables."
    >
      <SectionBlock eyebrow="Familles d'indicateurs" title="Cinq familles de KPI.">
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {familles.map((f) => (
            <article key={f.famille} className="flex flex-col gap-4 bg-card p-6">
              <div className="text-[11px] tracking-[0.28em] text-accent uppercase">
                {f.famille}
              </div>
              <ul className="space-y-2 text-sm leading-relaxed text-foreground/85">
                {f.kpis.map((k) => (
                  <li key={k} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-accent" />
                    <span>{k}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <IllustrativeNote>
          Aucune cible chiffrée n'est présentée à ce stade — les seuils seront
          établis à partir des données réelles du portefeuille.
        </IllustrativeNote>
      </SectionBlock>
    </PageShell>
  );
}
