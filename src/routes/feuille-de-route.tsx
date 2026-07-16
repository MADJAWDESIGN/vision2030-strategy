import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock, IllustrativeNote } from "@/components/page-shell";
import { sectionByPath } from "@/lib/sections";

export const Route = createFileRoute("/feuille-de-route")({
  head: () => ({
    meta: [
      { title: "Feuille de route 2026-2030 | Vision 2030 LIFA" },
      { name: "description", content: "Séquence des grandes étapes de la Vision 2030." },
    ],
  }),
  component: Page,
});

const jalons = [
  { annee: "2026", titre: "Structurer les fondations", items: [
    "Diagnostic complet du portefeuille",
    "Mise en place de la gouvernance",
    "Premier CAPEX 3 ans validé",
    "Bibliothèque LIFA — v1",
  ]},
  { annee: "2027", titre: "Industrialiser", items: [
    "Réseau de partenaires cadré",
    "Programme préventif déployé sur les actifs prioritaires",
    "Tableaux de bord opérationnels",
    "Premiers gains ESG mesurés",
  ]},
  { annee: "2028", titre: "Densifier la performance", items: [
    "CAPEX 5 ans en exécution",
    "Standards LIFA généralisés",
    "Reporting associés maturé",
    "Rôles cibles pourvus",
  ]},
  { annee: "2029", titre: "Consolider", items: [
    "Revue mi-parcours des grands cycles",
    "Optimisation des contrats-cadres",
    "Maturité des données de performance",
  ]},
  { annee: "2030", titre: "Positionner", items: [
    "Portefeuille conforme à la trajectoire ESG",
    "Capacité démontrée d'intégrer des acquisitions",
    "Bilan Vision 2030 et cadrage post-2030",
  ]},
];

function Page() {
  const section = sectionByPath("/feuille-de-route")!;
  return (
    <PageShell
      section={section}
      title="Cinq années, cinq jalons structurants."
      intro="La feuille de route 2026-2030 séquence les grandes étapes. Elle sera actualisée à chaque revue annuelle en fonction du portefeuille réel et des décisions d'investissement."
    >
      <SectionBlock eyebrow="Jalons annuels" title="Une progression en cinq temps.">
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-5">
          {jalons.map((j) => (
            <article key={j.annee} className="flex flex-col gap-4 bg-card p-6">
              <div className="font-serif-display text-3xl text-accent">{j.annee}</div>
              <div className="font-display text-lg font-semibold tracking-tight">{j.titre}</div>
              <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {j.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <IllustrativeNote>
          Séquence indicative. Les jalons définitifs seront validés avec les associés
          après la phase de diagnostic.
        </IllustrativeNote>
      </SectionBlock>
    </PageShell>
  );
}
