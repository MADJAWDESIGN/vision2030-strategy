import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock, CardGrid, BulletList } from "@/components/page-shell";
import { sectionByPath } from "@/lib/sections";

export const Route = createFileRoute("/fournisseurs")({
  head: () => ({
    meta: [
      { title: "Fournisseurs et entrepreneurs | Vision 2030 LIFA" },
      { name: "description", content: "Bâtir un réseau qualifié de partenaires." },
    ],
  }),
  component: Page,
});

const criteres = [
  { title: "Solidité financière", text: "Capacité à livrer sans compromis, cautionnement, historique." },
  { title: "Qualité technique", text: "Références vérifiées, standards de livraison, contrôles internes." },
  { title: "Sécurité", text: "Programme SST, formation des équipes, historique d'incidents." },
  { title: "Éthique et conformité", text: "Assurances, licences, respect des lois et des règlements." },
  { title: "Réactivité", text: "Disponibilité, délais de mobilisation, gestion des urgences." },
  { title: "Alignement stratégique", text: "Compréhension du contexte LIFA, capacité de collaboration durable." },
];

const cycle = [
  "Qualification initiale et dossier de conformité",
  "Cadrage : catégorie, volume attendu, engagement de qualité",
  "Contrat-cadre avec grille de prix et clauses de performance",
  "Exécution avec revue de chantier et contrôle qualité",
  "Évaluation périodique et notation",
  "Renouvellement, rotation ou déclassement documentés",
];

function Page() {
  const section = sectionByPath("/fournisseurs")!;
  return (
    <PageShell
      section={section}
      title="Un réseau, pas un carnet d'adresses."
      intro="Le tissu de partenaires n'est pas une variable secondaire : c'est le premier levier de qualité, de coût et de vitesse d'exécution."
    >
      <SectionBlock eyebrow="Critères" title="Six critères de qualification.">
        <CardGrid items={criteres} cols={3} />
      </SectionBlock>

      <SectionBlock tone="muted" eyebrow="Cycle de vie" title="Cycle de gestion des partenaires.">
        <BulletList items={cycle} />
      </SectionBlock>
    </PageShell>
  );
}
