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

const horizon3 = [
  "Sécurité et conformité",
  "Projets critiques",
  "Enveloppe défaillante",
  "Composantes en fin de vie",
  "Interventions à fort retour",
  "Projets déjà engagés",
  "Études techniques nécessaires",
];
const horizon5 = [
  "Programmes de remplacement",
  "Regroupement des interventions",
  "Modernisation énergétique",
  "Standardisation généralisée",
  "Planification des enveloppes",
  "Optimisation des systèmes",
  "Projets de repositionnement",
];
const horizon10 = [
  "Cycle de vie complet des composantes",
  "Scénarios d'investissement",
  "Intégration des acquisitions futures",
  "Adaptation climatique",
  "Trajectoire de décarbonation",
  "Prévision des gros remplacements",
  "Résilience du portefeuille",
];

const ponderations = [
  ["Sécurité et conformité", "25 %"],
  ["Risque de défaillance", "20 %"],
  ["Protection de l'actif", "20 %"],
  ["Impact financier", "15 %"],
  ["Bien-être des locataires", "10 %"],
  ["Performance ESG", "10 %"],
];

const ficheChamps: { label: string; valeur: string }[] = [
  { label: "Immeuble", valeur: "À renseigner" },
  { label: "Projet", valeur: "À renseigner" },
  { label: "Composante", valeur: "À renseigner" },
  { label: "Justification", valeur: "À renseigner" },
  { label: "Criticité", valeur: "À évaluer" },
  { label: "Budget", valeur: "À chiffrer" },
  { label: "Contingence", valeur: "À définir selon niveau de définition" },
  { label: "Échéancier", valeur: "À planifier" },
  { label: "Impact opérationnel", valeur: "À qualifier" },
  { label: "Impact locataire", valeur: "À qualifier" },
  { label: "Risque de report", valeur: "À évaluer" },
  { label: "Économies attendues", valeur: "À estimer" },
  { label: "Statut", valeur: "À l'étude" },
  { label: "Prochaine décision", valeur: "À définir" },
];

const bienFaire = [
  "Distinguer urgence, entretien et investissement",
  "Inclure les coûts de conception et de gestion",
  "Prévoir une contingence adaptée au niveau de définition",
  "Calculer explicitement le coût du report",
  "Comparer réparation et remplacement",
  "Raisonner en coût de cycle de vie",
  "Documenter les hypothèses de chiffrage",
  "Actualiser les prévisions chaque trimestre",
  "Suivre les engagements et non uniquement les factures",
  "Conserver une réserve pour les risques non planifiés",
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
        <div className="grid gap-px bg-border lg:grid-cols-3">
          {[
            { titre: "Horizon 3 ans", sous: "Décisions immédiates", items: horizon3 },
            { titre: "Horizon 5 ans", sous: "Stabilisation et modernisation", items: horizon5 },
            { titre: "Horizon 10 ans", sous: "Protection de la valeur", items: horizon10 },
          ].map((h) => (
            <article key={h.titre} className="flex flex-col gap-4 bg-card p-6">
              <div className="text-[11px] tracking-[0.28em] text-accent uppercase">{h.sous}</div>
              <h3 className="font-display text-xl font-semibold tracking-tight">{h.titre}</h3>
              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                {h.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-accent" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock tone="muted" eyebrow="Méthodologie" title="Construire un CAPEX défendable en sept étapes.">
        <BulletList items={methodo} />
      </SectionBlock>

      <SectionBlock eyebrow="Matrice de priorisation" title="Une pondération illustrative pour arbitrer.">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] border border-border bg-card text-sm">
            <thead className="bg-secondary text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Critère</th>
                <th className="px-4 py-3 text-left font-medium">Pondération</th>
              </tr>
            </thead>
            <tbody>
              {ponderations.map(([c, p]) => (
                <tr key={c} className="border-t border-border">
                  <td className="px-4 py-3">{c}</td>
                  <td className="px-4 py-3 font-medium text-accent">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <IllustrativeNote>
          Pondération préliminaire à valider avec les associés.
        </IllustrativeNote>
      </SectionBlock>

      <SectionBlock tone="muted" eyebrow="Fiche projet CAPEX" title="Un gabarit standard par projet.">
        <div className="grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-2">
          {ficheChamps.map((f) => (
            <div key={f.label} className="flex flex-col gap-1 bg-card p-4">
              <span className="text-[10px] tracking-[0.28em] text-muted-foreground uppercase">
                {f.label}
              </span>
              <span className="text-sm text-foreground/80">{f.valeur}</span>
            </div>
          ))}
        </div>
        <IllustrativeNote>
          Champs à renseigner par projet après diagnostic terrain.
        </IllustrativeNote>
      </SectionBlock>

      <SectionBlock tone="dark" eyebrow="Executive Insight" title="Bien faire le CAPEX.">
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {bienFaire.map((t) => (
            <li key={t} className="flex gap-3 text-sm leading-relaxed opacity-95">
              <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-accent" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
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
