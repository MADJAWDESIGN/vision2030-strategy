import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock, CardGrid, IllustrativeNote, BulletList } from "@/components/page-shell";
import { sectionByPath } from "@/lib/sections";

export const Route = createFileRoute("/donnees")({
  head: () => ({
    meta: [
      { title: "Données et tableaux de bord | Vision 2030 LIFA" },
      { name: "description", content: "Recueillir, structurer et décider — l'infrastructure de données." },
    ],
  }),
  component: Page,
});

const sources = [
  { title: "Fiches actif", text: "Identité, superficies, composantes, historique de travaux." },
  { title: "CAPEX et OPEX", text: "Budgets, engagements, factures, écarts, prévisions à terminaison." },
  { title: "Consommations", text: "Énergie, eau, gaz — par immeuble et par période." },
  { title: "Demandes locataires", text: "Motifs, délais, résolution, satisfaction." },
  { title: "Contrats et garanties", text: "Fournisseurs, échéances, seuils, clauses de performance." },
  { title: "Inspections", text: "Rapports techniques, photos, priorités, suivi." },
];

const dashboards = [
  "Vue portefeuille — santé globale et alertes",
  "Vue actif — état, projets, budgets, incidents",
  "Vue CAPEX — engagements, prévisions, écarts",
  "Vue ESG — consommations et trajectoire",
  "Vue partenaires — performance et exposition",
  "Vue projets — jalons, risques, statut",
];

function Page() {
  const section = sectionByPath("/donnees")!;
  return (
    <PageShell
      section={section}
      title="Sans données, pas de décision."
      intro="La qualité des décisions dépend de la qualité des données. Le premier livrable n'est pas un logiciel — c'est un inventaire honnête de ce que l'on sait et de ce qu'il manque."
    >
      <SectionBlock eyebrow="Sources" title="Six sources à structurer.">
        <CardGrid items={sources} cols={3} />
      </SectionBlock>

      <SectionBlock tone="muted" eyebrow="Tableaux de bord cibles" title="Six vues opérationnelles.">
        <BulletList items={dashboards} />
        <IllustrativeNote>
          Les maquettes de tableaux de bord seront élaborées après la phase de diagnostic.
        </IllustrativeNote>
      </SectionBlock>
    </PageShell>
  );
}
