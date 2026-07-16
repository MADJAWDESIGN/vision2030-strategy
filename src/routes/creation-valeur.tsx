import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock, CardGrid, IllustrativeNote } from "@/components/page-shell";
import { sectionByPath } from "@/lib/sections";

export const Route = createFileRoute("/creation-valeur")({
  head: () => ({
    meta: [
      { title: "Création de valeur | Vision 2030 LIFA" },
      { name: "description", content: "De la dépense de construction à la création de valeur pour le portefeuille LIFA." },
    ],
  }),
  component: Page,
});

const chaine = [
  "Acquisition",
  "Diagnostic technique",
  "Priorisation des risques",
  "Planification CAPEX",
  "Modernisation",
  "Réduction des coûts d'exploitation",
  "Amélioration de l'expérience locataire",
  "Protection du revenu",
  "Valorisation de l'actif",
];

const sources = [
  {
    title: "Protection des revenus",
    text: "Réduction des interruptions, moins de logements indisponibles, diminution des travaux d'urgence, meilleure planification des interventions.",
  },
  {
    title: "Protection de l'actif",
    text: "Entretien de l'enveloppe, gestion des infiltrations, contrôle des garanties, remplacement au bon moment, réduction du déficit d'entretien.",
  },
  {
    title: "Optimisation des CAPEX",
    text: "Priorisation par le risque, regroupement des achats, standardisation, comparaison des coûts, meilleure prévision à terminaison.",
  },
  {
    title: "Expérience locataire",
    text: "Qualité constante, meilleure communication, réduction des délais, confort, efficacité énergétique, moins d'interventions répétitives.",
  },
  {
    title: "Performance ESG",
    text: "Réduction de la consommation, modernisation énergétique, gestion des déchets, choix des matériaux, prolongation de la durée de vie.",
  },
  {
    title: "Croissance du portefeuille",
    text: "Processus reproductibles, intégration accélérée des acquisitions, accès rapide à l'information, capacité de gérer davantage d'immeubles.",
  },
];

const axes = [
  { title: "Sécurité et conformité", text: "Impact sur la conformité réglementaire et la sécurité des occupants." },
  { title: "Risque pour l'actif", text: "Probabilité et sévérité d'une dégradation en l'absence d'intervention." },
  { title: "Impact financier", text: "Effet sur les revenus, les coûts d'exploitation et la valeur nette." },
  { title: "Impact locataire", text: "Confort, satisfaction, rétention et perception du service." },
  { title: "Impact ESG", text: "Contribution à la trajectoire énergétique et environnementale." },
];

function Page() {
  const section = sectionByPath("/creation-valeur")!;
  return (
    <PageShell
      section={section}
      title="De la dépense de construction à la création de valeur."
      intro="La Construction n'est pas une ligne de coûts. Elle est un moteur financier lorsque chaque décision est priorisée, mesurée et alignée sur la stratégie d'investissement."
    >
      <SectionBlock eyebrow="Chaîne de valeur" title="Une séquence continue, de l'acquisition à la valorisation.">
        <ol className="grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-3">
          {chaine.map((step, i) => (
            <li key={step} className="flex flex-col justify-between bg-card p-6">
              <div className="font-serif-display text-2xl text-accent">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-8">
                <div className="font-display text-base font-semibold tracking-tight">{step}</div>
                <div className="mt-2 h-px w-6 bg-accent/60" />
              </div>
            </li>
          ))}
        </ol>
      </SectionBlock>

      <SectionBlock tone="muted" eyebrow="Six sources" title="Six moteurs de création de valeur.">
        <CardGrid items={sources} cols={3} />
      </SectionBlock>

      <SectionBlock eyebrow="Matrice de décision" title="Une évaluation à cinq axes pour chaque projet.">
        <CardGrid items={axes} cols={3} />
        <div className="mt-10 border border-border bg-card p-6">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <div className="text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
                Note globale illustrative
              </div>
              <div className="mt-2 font-serif-display text-4xl text-foreground">78 / 100</div>
            </div>
            <div className="text-xs text-muted-foreground">Exemple pédagogique</div>
          </div>
          <div className="mt-4 h-[6px] w-full bg-border">
            <div className="h-full bg-accent" style={{ width: "78%" }} />
          </div>
        </div>
        <IllustrativeNote>
          Données illustratives à remplacer après validation du portefeuille et
          calibrage des pondérations avec les associés.
        </IllustrativeNote>
      </SectionBlock>
    </PageShell>
  );
}