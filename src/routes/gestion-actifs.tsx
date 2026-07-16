import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock, CardGrid, BulletList } from "@/components/page-shell";
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
    </PageShell>
  );
}
