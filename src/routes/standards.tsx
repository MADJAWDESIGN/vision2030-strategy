import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock, CardGrid, IllustrativeNote } from "@/components/page-shell";
import { sectionByPath } from "@/lib/sections";

export const Route = createFileRoute("/standards")({
  head: () => ({
    meta: [
      { title: "Standards de rénovation | Vision 2030 LIFA" },
      { name: "description", content: "Bibliothèque LIFA des standards techniques et esthétiques." },
    ],
  }),
  component: Page,
});

const familles = [
  { title: "Cuisines", text: "Armoires, comptoirs, quincaillerie, dosseret, électroménagers de référence." },
  { title: "Salles de bain", text: "Vanités, robinetterie, céramique, ventilation, accessoires normalisés." },
  { title: "Planchers", text: "Vinyle de luxe, ingénierie bois, céramique, sous-couches acoustiques." },
  { title: "Peinture", text: "Palette LIFA, finis par pièce, sceau qualité, fournisseurs approuvés." },
  { title: "Portes", text: "Portes d'unité, portes intérieures, quincaillerie de sécurité." },
  { title: "Quincaillerie", text: "Poignées, charnières, serrures, standard esthétique et fonctionnel." },
  { title: "Éclairage", text: "DEL basse consommation, températures de couleur, luminaires de référence." },
  { title: "Plomberie", text: "Robinetterie économe en eau, valves, raccords, chauffe-eau." },
  { title: "Électroménagers", text: "Modèles types par gamme d'immeuble, garanties suivies." },
  { title: "Rangements", text: "Placards, systèmes modulaires, standards par typologie d'unité." },
];

const benefices = [
  { title: "Prévisibilité des coûts", text: "Chiffrage plus rapide et plus fiable de chaque rénovation." },
  { title: "Qualité constante", text: "Un locataire de LIFA reconnaît la qualité LIFA d'un immeuble à l'autre." },
  { title: "Approvisionnement efficient", text: "Volume, contrats-cadres et disponibilité négociée." },
  { title: "Maintenance simplifiée", text: "Moins de références en stock, formation plus simple des techniciens." },
];

function Page() {
  const section = sectionByPath("/standards")!;
  return (
    <PageShell
      section={section}
      title="Une bibliothèque de standards LIFA."
      intro="Standardiser ne veut pas dire uniformiser à outrance. C'est fixer un socle de qualité et d'approvisionnement, tout en laissant la latitude requise selon le positionnement de chaque immeuble."
    >
      <SectionBlock eyebrow="Catégories" title="Dix familles de standards à structurer.">
        <CardGrid items={familles} cols={4} />
        <IllustrativeNote>
          La bibliothèque définitive sera co-construite avec les équipes internes et validée
          avec les partenaires stratégiques.
        </IllustrativeNote>
      </SectionBlock>

      <SectionBlock tone="muted" eyebrow="Bénéfices" title="Pourquoi standardiser.">
        <CardGrid items={benefices} cols={4} />
      </SectionBlock>
    </PageShell>
  );
}
