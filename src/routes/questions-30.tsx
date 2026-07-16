import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock } from "@/components/page-shell";
import { sectionByPath } from "@/lib/sections";

export const Route = createFileRoute("/questions-30")({
  head: () => ({
    meta: [
      { title: "Questions des 30 premiers jours | Vision 2030 LIFA" },
      { name: "description", content: "Questions structurantes à résoudre pendant la phase d'observation." },
    ],
  }),
  component: Page,
});

const STATUTS = [
  "Non analysée",
  "Données demandées",
  "En analyse",
  "Réponse obtenue",
  "Décision requise",
] as const;

type Question = { q: string; statut: (typeof STATUTS)[number] };

const groups: { titre: string; description: string; questions: Question[] }[] = [
  {
    titre: "Portefeuille",
    description: "Comprendre l'état réel des actifs avant toute décision structurelle.",
    questions: [
      { q: "Quels immeubles présentent les plus grands risques ?", statut: "Non analysée" },
      { q: "Quelles composantes arrivent en fin de vie ?", statut: "Données demandées" },
      { q: "Quel est le déficit d'entretien estimé ?", statut: "Non analysée" },
      { q: "Quels travaux sont déjà planifiés ?", statut: "En analyse" },
      { q: "Quelles données sont réellement disponibles ?", statut: "Données demandées" },
    ],
  },
  {
    titre: "Finance",
    description: "Établir la mécanique d'approbation, de suivi et d'estimation des coûts.",
    questions: [
      { q: "Comment les CAPEX sont-ils actuellement approuvés ?", statut: "En analyse" },
      { q: "Quelle est la précision des budgets actuels ?", statut: "Non analysée" },
      { q: "Comment sont suivis les engagements ?", statut: "Non analysée" },
      { q: "Existe-t-il une réserve annuelle formalisée ?", statut: "Non analysée" },
      { q: "Quel est le coût historique par type de travaux ?", statut: "Données demandées" },
    ],
  },
  {
    titre: "Organisation",
    description: "Clarifier les rôles, les décisions et les goulots d'étranglement.",
    questions: [
      { q: "Quels rôles sont clairement définis ?", statut: "En analyse" },
      { q: "Où sont les goulots d'étranglement opérationnels ?", statut: "Non analysée" },
      { q: "Quelles décisions exigent l'intervention des associés ?", statut: "Décision requise" },
      { q: "Quels outils sont utilisés au quotidien ?", statut: "Données demandées" },
      { q: "Quels besoins de développement ou de recrutement existent ?", statut: "Non analysée" },
    ],
  },
  {
    titre: "Partenaires",
    description: "Cartographier le réseau, ses forces et ses dépendances.",
    questions: [
      { q: "Quels entrepreneurs sont les plus performants ?", statut: "Données demandées" },
      { q: "Où existe-t-il une dépendance excessive ?", statut: "Non analysée" },
      { q: "Quels contrats peuvent être regroupés ?", statut: "En analyse" },
      { q: "Quelles licences et assurances doivent être mises à jour ?", statut: "Données demandées" },
      { q: "Quels fournisseurs pourraient devenir des partenaires privilégiés ?", statut: "Non analysée" },
    ],
  },
];

function StatutBadge({ statut }: { statut: (typeof STATUTS)[number] }) {
  const tone =
    statut === "Réponse obtenue"
      ? "border-accent text-accent"
      : statut === "Décision requise"
        ? "border-destructive text-destructive"
        : "border-border text-muted-foreground";
  return (
    <span className={`inline-flex items-center gap-2 border ${tone} px-2 py-1 text-[10px] tracking-[0.2em] uppercase`}>
      {statut}
    </span>
  );
}

function Page() {
  const section = sectionByPath("/questions-30")!;
  return (
    <PageShell
      section={section}
      title="Les questions à résoudre en priorité."
      intro="Cette page est le journal des questions structurantes de la phase d'observation. Chaque question porte un statut ; aucune ne doit rester silencieuse au-delà de 30 jours."
    >
      <SectionBlock eyebrow="Registre" title="Quatre catégories, vingt questions.">
        <div className="grid gap-8 lg:grid-cols-2">
          {groups.map((g) => (
            <article key={g.titre} className="border border-border bg-card p-6">
              <div className="text-[11px] tracking-[0.28em] text-accent uppercase">{g.titre}</div>
              <p className="mt-2 text-sm text-muted-foreground">{g.description}</p>
              <ul className="mt-6 space-y-4">
                {g.questions.map((qq) => (
                  <li key={qq.q} className="flex flex-col gap-2 border-t border-border pt-4">
                    <span className="text-sm leading-relaxed text-foreground/90">{qq.q}</span>
                    <StatutBadge statut={qq.statut} />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <aside className="mt-10 border-l-2 border-accent bg-secondary/60 px-6 py-5 text-sm leading-relaxed text-foreground/85">
          Statuts initiaux — à mettre à jour chaque semaine avec les associés et
          l'équipe interne.
        </aside>
      </SectionBlock>

      <SectionBlock tone="muted" eyebrow="Prochaines décisions" title="Ce qui appelle une décision des associés.">
        <ul className="grid gap-4 md:grid-cols-2">
          {[
            "Cadence et format des points d'étape hebdomadaires",
            "Périmètre exact d'accès aux données financières et techniques",
            "Sélection des trois immeubles pilotes pour le diagnostic terrain",
            "Confirmation des seuils d'autorité provisoires",
          ].map((d) => (
            <li key={d} className="border border-border bg-card p-5 text-sm">
              <div className="text-[10px] tracking-[0.28em] text-muted-foreground uppercase">
                Décision requise
              </div>
              <div className="mt-2 text-foreground/90">{d}</div>
            </li>
          ))}
        </ul>
      </SectionBlock>
    </PageShell>
  );
}