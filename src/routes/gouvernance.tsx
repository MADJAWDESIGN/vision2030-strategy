import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock, CardGrid, BulletList } from "@/components/page-shell";
import { sectionByPath } from "@/lib/sections";

export const Route = createFileRoute("/gouvernance")({
  head: () => ({
    meta: [
      { title: "Gouvernance | Vision 2030 LIFA" },
      { name: "description", content: "Comités, seuils d'autorité et cadence de reporting." },
    ],
  }),
  component: Page,
});

const comites = [
  { title: "Comité des associés", text: "Orientations stratégiques, validation du CAPEX pluriannuel, arbitrages majeurs." },
  { title: "Comité Construction et Actifs", text: "Suivi mensuel des projets, des risques et de la performance des actifs." },
  { title: "Comité d'appel d'offres", text: "Analyse et attribution au-dessus d'un seuil défini." },
  { title: "Comité ESG et conformité", text: "Suivi de la trajectoire ESG et des obligations réglementaires." },
];

const seuils = [
  "Décisions courantes : équipe interne, dans le cadre du plan approuvé",
  "Engagements au-delà du seuil courant : validation Direction Construction",
  "Engagements stratégiques ou hors plan : validation Comité des associés",
  "Écarts significatifs sur CAPEX ou échéancier : notification immédiate",
  "Risques structurels ou réputationnels : escalade sans délai",
];

const reporting = [
  "Rapport mensuel de portefeuille",
  "Tableau de bord trimestriel aux associés",
  "Revue semestrielle des risques",
  "Rapport annuel de performance et de trajectoire",
];

function Page() {
  const section = sectionByPath("/gouvernance")!;
  return (
    <PageShell
      section={section}
      title="Décider vite, sans jamais décider seul."
      intro="La gouvernance clarifie qui décide quoi, à quel seuil, avec quelle information. Elle protège la vitesse d'exécution autant que la discipline collective."
    >
      <SectionBlock eyebrow="Comités" title="Quatre instances de décision.">
        <CardGrid items={comites} cols={4} />
      </SectionBlock>

      <SectionBlock tone="muted" eyebrow="Seuils d'autorité" title="Cinq règles d'escalade.">
        <BulletList items={seuils} />
      </SectionBlock>

      <SectionBlock eyebrow="Reporting" title="Cadence de reporting aux associés.">
        <BulletList items={reporting} />
      </SectionBlock>
    </PageShell>
  );
}
