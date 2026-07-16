import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock, CardGrid, BulletList } from "@/components/page-shell";
import { sectionByPath } from "@/lib/sections";

export const Route = createFileRoute("/organisation")({
  head: () => ({
    meta: [
      { title: "Organisation et équipe | Vision 2030 LIFA" },
      { name: "description", content: "Structure cible du département Construction et Gestion des Actifs." },
    ],
  }),
  component: Page,
});

const roles = [
  { title: "Direction Construction et Actifs", text: "Vision, arbitrages majeurs, interface avec les associés." },
  { title: "Gestion des actifs", text: "Pilotage par actif, plans pluriannuels, coordination transverse." },
  { title: "Projets et CAPEX", text: "Chargés de projets, contrôle des coûts, échéanciers et qualité." },
  { title: "Maintenance et opérations", text: "Préventif, correctif, techniciens, gestion des demandes locataires." },
  { title: "Approvisionnement et contrats", text: "Qualification des partenaires, cadrage contractuel, appels d'offres." },
  { title: "Données et performance", text: "Outils, indicateurs, tableaux de bord, rapports aux associés." },
];

const principes = [
  "Des rôles clairs avant des postes supplémentaires",
  "Un principe de subsidiarité : décider au bon niveau",
  "Une charge de travail soutenable, non un empilement",
  "Une redondance sur les fonctions critiques",
  "Une trajectoire de développement pour chaque poste",
];

function Page() {
  const section = sectionByPath("/organisation")!;
  return (
    <PageShell
      section={section}
      title="Une équipe conçue pour tenir la promesse."
      intro="La structure cible se construit sur les rôles avant les titres. On formalise d'abord ce que l'organisation doit produire — puis on ajuste les postes et les recrutements."
    >
      <SectionBlock eyebrow="Rôles cibles" title="Six fonctions structurantes.">
        <CardGrid items={roles} cols={3} />
      </SectionBlock>

      <SectionBlock tone="muted" eyebrow="Principes" title="Cinq principes d'organisation.">
        <BulletList items={principes} />
      </SectionBlock>
    </PageShell>
  );
}
