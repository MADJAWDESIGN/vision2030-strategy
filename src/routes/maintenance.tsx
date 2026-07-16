import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock, CardGrid, BulletList } from "@/components/page-shell";
import { sectionByPath } from "@/lib/sections";

export const Route = createFileRoute("/maintenance")({
  head: () => ({
    meta: [
      { title: "Maintenance | Vision 2030 LIFA" },
      { name: "description", content: "Du réactif au préventif structuré." },
    ],
  }),
  component: Page,
});

const niveaux = [
  { title: "Correctif", text: "Interventions d'urgence sur défaillance. À contenir, jamais à éliminer." },
  { title: "Préventif", text: "Cycles planifiés, inspections périodiques, gestes récurrents documentés." },
  { title: "Prédictif", text: "Instrumentation légère, télémétrie, alertes sur dérive de comportement." },
  { title: "Améliorant", text: "Petites modernisations opportunistes qui réduisent la charge future." },
];

const chantiers = [
  "Cartographier les équipements critiques par immeuble",
  "Définir un calendrier préventif standardisé",
  "Structurer un centre d'appel unique pour les demandes locataires",
  "Suivre les temps de réponse et de résolution",
  "Standardiser les pièces et fournitures de première ligne",
  "Mesurer la part réactif / préventif dans les heures travaillées",
];

function Page() {
  const section = sectionByPath("/maintenance")!;
  return (
    <PageShell
      section={section}
      title="Passer du réactif au préventif structuré."
      intro="Une maintenance moderne réduit les urgences, préserve la valeur des actifs et améliore la relation avec les locataires. Elle se pilote, elle ne se subit pas."
    >
      <SectionBlock eyebrow="Quatre niveaux" title="Quatre niveaux de maintenance.">
        <CardGrid items={niveaux} cols={4} />
      </SectionBlock>

      <SectionBlock tone="muted" eyebrow="Chantiers" title="Six chantiers structurants.">
        <BulletList items={chantiers} />
      </SectionBlock>
    </PageShell>
  );
}
