import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock, CardGrid, IllustrativeNote, BulletList } from "@/components/page-shell";
import { sectionByPath } from "@/lib/sections";

export const Route = createFileRoute("/capex")({
  head: () => ({
    meta: [
      { title: "CAPEX 3-5-10 ans | Vision 2030 LIFA" },
      { name: "description", content: "Planification pluriannuelle des investissements de capital." },
    ],
  }),
  component: Page,
});

const horizons = [
  { title: "Horizon 3 ans", text: "Interventions critiques, obligations réglementaires, gains rapides et projets en cours." },
  { title: "Horizon 5 ans", text: "Modernisation planifiée, remplacement des composantes en fin de vie, standardisation." },
  { title: "Horizon 10 ans", text: "Grands cycles de renouvellement, enveloppe, systèmes mécaniques, positionnement ESG." },
];

const methodo = [
  "Inventaire des composantes majeures par actif",
  "Estimation de la durée de vie utile résiduelle",
  "Évaluation du risque : sévérité × probabilité",
  "Priorisation par la matrice de décision",
  "Regroupement par immeuble, par métier, par phase",
  "Chiffrage haut niveau avec plage de coûts",
  "Validation par les associés et intégration budgétaire",
];

const exempleLignes = [
  ["Toiture — bâtiment A", "2027", "Élevé", "Illustratif"],
  ["Fenêtres — bâtiment B", "2028", "Moyen", "Illustratif"],
  ["Chaudières — bâtiment C", "2029", "Élevé", "Illustratif"],
  ["Cuisines — vagues successives", "2027-2030", "Moyen", "Illustratif"],
  ["Balcons — inspection structurale", "2027", "À évaluer", "Illustratif"],
];

function Page() {
  const section = sectionByPath("/capex")!;
  return (
    <PageShell
      section={section}
      title="Un CAPEX priorisé, chiffré et défendable."
      intro="Le plan CAPEX 3, 5 et 10 ans articule les investissements de capital en fonction du risque, de la valeur créée et de la trajectoire ESG — sans opacifier les arbitrages."
    >
      <SectionBlock eyebrow="Trois horizons" title="Une planification étagée dans le temps.">
        <CardGrid items={horizons} cols={3} />
      </SectionBlock>

      <SectionBlock tone="muted" eyebrow="Méthodologie" title="Construire un CAPEX défendable en sept étapes.">
        <BulletList items={methodo} />
      </SectionBlock>

      <SectionBlock eyebrow="Exemple pédagogique" title="Extrait d'un plan CAPEX illustratif.">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border border-border bg-card text-sm">
            <thead className="bg-secondary text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Poste</th>
                <th className="px-4 py-3 text-left font-medium">Année cible</th>
                <th className="px-4 py-3 text-left font-medium">Niveau de risque</th>
                <th className="px-4 py-3 text-left font-medium">Statut</th>
              </tr>
            </thead>
            <tbody>
              {exempleLignes.map(([p, a, r, s]) => (
                <tr key={p} className="border-t border-border">
                  <td className="px-4 py-3">{p}</td>
                  <td className="px-4 py-3 text-muted-foreground">{a}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r}</td>
                  <td className="px-4 py-3 text-muted-foreground">{s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <IllustrativeNote>
          Données illustratives à remplacer après validation du portefeuille.
        </IllustrativeNote>
      </SectionBlock>
    </PageShell>
  );
}
*** End Patch