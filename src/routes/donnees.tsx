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

      <SectionBlock eyebrow="Tableau de bord de démonstration" title="Structure proposée avant intégration des données LIFA.">
        <div className="mb-6 inline-flex items-center gap-2 border border-accent/40 bg-accent/10 px-3 py-1 text-[10px] tracking-[0.24em] text-accent-foreground uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Données de démonstration
        </div>
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Projets actifs", "24"],
            ["Budget approuvé", "12,4 M$"],
            ["Engagements", "7,9 M$"],
            ["Dépenses", "4,2 M$"],
            ["Prévision à terminaison", "12,8 M$"],
            ["Variance", "+3 %"],
            ["Projets à risque", "3"],
            ["Coût moyen par logement", "18 700 $"],
            ["Délai moyen", "142 jours"],
            ["Déficiences ouvertes", "57"],
            ["Indice santé portefeuille", "B-"],
            ["Garanties < 12 mois", "9"],
            ["Performance fournisseurs", "82 / 100"],
            ["Consommation énergie", "163 kWh/m²"],
            ["Émissions GES", "22 kg CO₂/m²"],
            ["Avancement ESG", "38 %"],
          ].map(([label, val]) => (
            <div key={label} className="flex flex-col gap-2 bg-card p-5">
              <div className="text-[10px] tracking-[0.28em] text-muted-foreground uppercase">
                {label}
              </div>
              <div className="font-serif-display text-2xl text-foreground">{val}</div>
              <div className="text-[10px] tracking-[0.2em] text-accent uppercase">Illustratif</div>
            </div>
          ))}
        </div>
      </SectionBlock>
    </PageShell>
  );
}
