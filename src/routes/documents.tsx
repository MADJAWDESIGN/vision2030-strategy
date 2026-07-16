import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock } from "@/components/page-shell";
import { sectionByPath } from "@/lib/sections";

export const Route = createFileRoute("/documents")({
  head: () => ({
    meta: [
      { title: "Documents et annexes | Vision 2030 LIFA" },
      { name: "description", content: "Références, annexes et pièces jointes du document Vision 2030." },
    ],
  }),
  component: Page,
});

const annexes = [
  { titre: "Note d'orientation stratégique", statut: "En rédaction", detail: "Document maître accompagnant ce portail." },
  { titre: "Modèle de fiche actif", statut: "Prototype", detail: "Gabarit pour la consolidation par immeuble." },
  { titre: "Cadre CAPEX 3-5-10 ans", statut: "À produire", detail: "Chiffrage et priorisation par actif." },
  { titre: "Bibliothèque LIFA — v0", statut: "À produire", detail: "Standards techniques et esthétiques." },
  { titre: "Cadre de gouvernance et seuils", statut: "À valider", detail: "Comités, autorités et cadence de reporting." },
  { titre: "Cadre ESG et trajectoire", statut: "À produire", detail: "Axes, indicateurs et cibles à venir." },
];

function Page() {
  const section = sectionByPath("/documents")!;
  return (
    <PageShell
      section={section}
      title="Documents de référence et annexes."
      intro="Cette section centralise les documents complémentaires au portail. Elle évoluera au rythme de la production et des validations avec les associés."
    >
      <SectionBlock eyebrow="Registre" title="Registre des documents.">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border border-border bg-card text-sm">
            <thead className="bg-secondary text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Document</th>
                <th className="px-4 py-3 text-left font-medium">Statut</th>
                <th className="px-4 py-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              {annexes.map((a) => (
                <tr key={a.titre} className="border-t border-border">
                  <td className="px-4 py-3 font-medium">{a.titre}</td>
                  <td className="px-4 py-3 text-muted-foreground">{a.statut}</td>
                  <td className="px-4 py-3 text-muted-foreground">{a.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Confidentiel — réservé aux associés et aux personnes autorisées de LIFA
          Investissements.
        </p>
      </SectionBlock>
    </PageShell>
  );
}
*** End Patch