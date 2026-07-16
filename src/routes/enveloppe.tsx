import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock, CardGrid, BulletList } from "@/components/page-shell";
import { sectionByPath } from "@/lib/sections";

export const Route = createFileRoute("/enveloppe")({
  head: () => ({
    meta: [
      { title: "Enveloppe du bâtiment | Vision 2030 LIFA" },
      { name: "description", content: "Protéger l'enveloppe pour protéger l'actif." },
    ],
  }),
  component: Page,
});

const composantes = [
  { title: "Toiture", text: "Membranes, drains, solins, garantie et cycle de remplacement." },
  { title: "Façades", text: "Maçonnerie, joints, parements, contrôle des infiltrations." },
  { title: "Fenêtres", text: "Performance thermique, étanchéité, calfeutrage, remplacement planifié." },
  { title: "Balcons et garde-corps", text: "Inspection structurale, corrosion, sécurité des occupants." },
  { title: "Fondations", text: "Drainage, imperméabilisation, gestion des eaux pluviales." },
  { title: "Isolation et étanchéité à l'air", text: "Performance énergétique, confort intérieur, condensation." },
];

const priorites = [
  "Établir un état de référence de chaque enveloppe",
  "Documenter les garanties en vigueur et leurs échéances",
  "Prioriser les infiltrations et les risques structuraux",
  "Planifier les grands cycles de réfection dans le CAPEX 10 ans",
  "Harmoniser les cahiers des charges par typologie d'immeuble",
];

function Page() {
  const section = sectionByPath("/enveloppe")!;
  return (
    <PageShell
      section={section}
      title="L'enveloppe protège l'actif — et le revenu."
      intro="Une enveloppe négligée coûte deux fois : une fois en dégradation accélérée, une fois en litiges avec les locataires. La protéger, c'est protéger le rendement du portefeuille."
    >
      <SectionBlock eyebrow="Composantes" title="Six composantes à instrumenter.">
        <CardGrid items={composantes} cols={3} />
      </SectionBlock>

      <SectionBlock tone="muted" eyebrow="Priorités" title="Cinq chantiers pour la première année.">
        <BulletList items={priorites} />
      </SectionBlock>
    </PageShell>
  );
}
*** End Patch