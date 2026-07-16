import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock, CardGrid, IllustrativeNote, BulletList } from "@/components/page-shell";
import { sectionByPath } from "@/lib/sections";

export const Route = createFileRoute("/esg")({
  head: () => ({
    meta: [
      { title: "ESG et conformité | Vision 2030 LIFA" },
      { name: "description", content: "Trajectoire ESG et cadre de conformité réglementaire." },
    ],
  }),
  component: Page,
});

const axes = [
  { title: "Énergie", text: "Consommation, sources, plans de réduction, modernisation des équipements." },
  { title: "Matériaux", text: "Choix bas-carbone, durabilité, provenance, gestion de la fin de vie." },
  { title: "Déchets", text: "Tri à la source, valorisation, réduction des déchets de rénovation." },
  { title: "Confort locataire", text: "Confort thermique, acoustique, qualité de l'air intérieur." },
  { title: "Eau", text: "Consommation, robinetterie économe, gestion des eaux pluviales." },
  { title: "Gouvernance ESG", text: "Rôles, indicateurs, reporting périodique aux associés." },
];

const conformite = [
  "Sécurité incendie et gicleurs",
  "Balcons et façades — inspections périodiques",
  "Ascenseurs et équipements mécaniques",
  "Amiante, plomb et matières dangereuses",
  "Salubrité et qualité de l'air",
  "Accessibilité universelle progressive",
];

function Page() {
  const section = sectionByPath("/esg")!;
  return (
    <PageShell
      section={section}
      title="Une trajectoire ESG lisible et défendable."
      intro="L'ESG n'est pas un supplément de communication : c'est un cadre de décision qui protège la valeur à long terme et anticipe l'évolution réglementaire du parc immobilier."
    >
      <SectionBlock eyebrow="Six axes" title="Six axes ESG à instrumenter.">
        <CardGrid items={axes} cols={3} />
        <IllustrativeNote>
          Les cibles chiffrées seront établies après le diagnostic de portefeuille et
          l'analyse des consommations réelles.
        </IllustrativeNote>
      </SectionBlock>

      <SectionBlock tone="muted" eyebrow="Conformité" title="Domaines de conformité à suivre.">
        <BulletList items={conformite} />
      </SectionBlock>
    </PageShell>
  );
}
*** End Patch