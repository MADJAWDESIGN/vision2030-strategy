import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock, CardGrid, BulletList, IllustrativeNote } from "@/components/page-shell";
import { sectionByPath } from "@/lib/sections";

export const Route = createFileRoute("/gestion-actifs")({
  head: () => ({
    meta: [
      { title: "Gestion des actifs | Vision 2030 LIFA" },
      { name: "description", content: "Piloter par actif et par portefeuille avec discipline et données." },
    ],
  }),
  component: Page,
});

const fiches = [
  { title: "Identité de l'actif", text: "Adresse, année de construction, superficie, unités, contexte réglementaire." },
  { title: "État technique", text: "Enveloppe, mécanique, électricité, structure, sécurité incendie." },
  { title: "Historique financier", text: "CAPEX exécuté, OPEX, incidents, réclamations d'assurance." },
  { title: "Occupation", text: "Taux d'occupation, roulement, satisfaction locataire, doléances récurrentes." },
  { title: "Feuille de route", text: "Interventions planifiées à 3, 5 et 10 ans." },
  { title: "Indicateurs", text: "Coût par pied carré, coût par unité, indice d'état, exposition ESG." },
];

const rituels = [
  "Revue mensuelle par actif prioritaire",
  "Revue trimestrielle du portefeuille",
  "Point d'étape semestriel avec les associés",
  "Comité annuel de validation du CAPEX",
  "Rapport annuel de performance des actifs",
];

const passeportChamps = [
  "Inventaire des immeubles",
  "État des composantes",
  "Criticité par composante",
  "Garanties actives et échéances",
  "Historique des travaux",
  "Consommation énergétique",
  "Risques identifiés",
  "Travaux différés",
  "Plan CAPEX de l'immeuble",
  "Documents et plans",
  "Rapports d'inspection",
  "Fournisseurs associés",
  "Conformité réglementaire",
];

const indice = [
  { cote: "A", label: "Excellent", tone: "border-accent text-accent" },
  { cote: "B", label: "Bon", tone: "border-border text-foreground" },
  { cote: "C", label: "À surveiller", tone: "border-border text-foreground" },
  { cote: "D", label: "Prioritaire", tone: "border-destructive/60 text-foreground" },
  { cote: "E", label: "Critique", tone: "border-destructive text-destructive" },
];

function Page() {
  const section = sectionByPath("/gestion-actifs")!;
  return (
    <PageShell
      section={section}
      title="Piloter chaque actif comme une entreprise."
      intro="La gestion des actifs consolide l'information technique, financière et locative de chaque immeuble dans une fiche vivante — puis agrège ces fiches en une vue de portefeuille lisible pour les associés."
    >
      <SectionBlock eyebrow="Fiche actif" title="Six sections structurantes par immeuble.">
        <CardGrid items={fiches} cols={3} />
      </SectionBlock>

      <SectionBlock tone="muted" eyebrow="Rituels" title="Cadence de pilotage.">
        <BulletList items={rituels} />
      </SectionBlock>

      <SectionBlock eyebrow="Passeport numérique" title="Une fiche vivante par immeuble.">
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {passeportChamps.map((c) => (
            <div key={c} className="flex flex-col gap-1 bg-card p-4">
              <span className="text-[10px] tracking-[0.28em] text-muted-foreground uppercase">
                Champ
              </span>
              <span className="text-sm text-foreground/85">{c}</span>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock tone="muted" eyebrow="Indice de santé" title="Une cote lisible de A à E.">
        <div className="grid gap-4 sm:grid-cols-5">
          {indice.map((i) => (
            <div key={i.cote} className={`flex flex-col items-center gap-2 border-2 ${i.tone} bg-background p-6 text-center`}>
              <div className="font-serif-display text-4xl">{i.cote}</div>
              <div className="text-xs tracking-[0.24em] uppercase">{i.label}</div>
            </div>
          ))}
        </div>
        <IllustrativeNote>
          Évaluation à compléter après inspection et validation documentaire.
          Aucune cote réelle n'est attribuée avant la collecte des données.
        </IllustrativeNote>
      </SectionBlock>
    </PageShell>
  );
}
