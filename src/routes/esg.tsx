import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock, IllustrativeNote, BulletList } from "@/components/page-shell";
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
  {
    titre: "Énergie et carbone",
    items: [
      "Collecte des consommations par immeuble",
      "Programme d'électrification",
      "Systèmes de chauffage",
      "Thermostats intelligents",
      "Éclairage DEL",
      "Enveloppe et étanchéité",
      "Fenêtres Energy Star",
      "Isolation",
      "Toitures",
      "Audits énergétiques",
      "Suivi des émissions de GES",
    ],
  },
  {
    titre: "Eau, matériaux et circularité",
    items: [
      "Appareils sanitaires à faible débit",
      "Matériaux durables",
      "Produits locaux lorsque pertinent",
      "Gestion des déchets de rénovation",
      "Réemploi de composantes",
      "Dons et filières de valorisation",
      "Traçabilité des rebuts",
      "Durée de vie des produits",
    ],
  },
  {
    titre: "Résilience, sécurité et conformité",
    items: [
      "Sécurité incendie",
      "Détecteurs et alarmes",
      "Issues et évacuation",
      "Inspection des façades et stationnements lorsque applicable",
      "Drainage",
      "Prévention des infiltrations",
      "Résilience à la chaleur",
      "Événements climatiques",
      "Plan d'urgence",
      "Adaptation des actifs",
    ],
  },
  {
    titre: "Locataires et communauté",
    items: [
      "Communication proactive",
      "Confort intérieur",
      "Qualité de l'air",
      "Recyclage",
      "Compost",
      "Supports à vélos",
      "Bornes de recharge électrique",
      "Verdissement",
      "Sondages de satisfaction",
    ],
  },
];

const cadres = [
  {
    titre: "Règlement montréalais 21-042",
    puces: [
      "Divulgation de la consommation énergétique et des émissions de GES",
      "Application aux bâtiments de 2 000 m² et plus ou de 25 logements et plus",
      "Registre par bâtiment",
      "Suivi annuel",
      "Utilisation possible d'ENERGY STAR Portfolio Manager",
      "Intégration des résultats au tableau de bord LIFA",
    ],
    note: "La Ville de Montréal indique que le règlement vise les bâtiments de 2 000 m² et plus ou de 25 logements et plus.",
  },
  {
    titre: "Feuille de route vers les bâtiments zéro émission",
    puces: [
      "Électrification graduelle",
      "Réduction progressive de la combustion",
      "Préparation des actifs existants",
      "Analyse des équipements à remplacer",
      "Synchronisation avec les cycles de renouvellement",
      "Scénarios de décarbonation à long terme",
    ],
    note: "Montréal poursuit une feuille de route visant des bâtiments zéro émission d'ici 2040.",
  },
  {
    titre: "Code québécois de l'efficacité énergétique",
    puces: [
      "Validation du chapitre I.1",
      "Prise en compte du CNÉB 2020 pour les projets visés",
      "Coordination avec les professionnels",
      "Vérification des exigences selon la nature des travaux",
      "Conservation des preuves de conformité",
    ],
    note: "La mise à jour québécoise du chapitre I.1 est en vigueur depuis le 13 juillet 2024, avec adoption de l'édition 2020 du CNÉB.",
  },
  {
    titre: "Codes de construction et de sécurité — RBQ",
    puces: [
      "Accessibilité",
      "Sécurité des occupants",
      "Santé et qualité de l'air",
      "Sécurité incendie",
      "Structure",
      "Conformité des projets de rénovation",
    ],
    note: "La RBQ a annoncé en 2025 une mise à jour comportant des changements en accessibilité, sécurité, santé et sécurité incendie.",
  },
];

const tableInitiatives = [
  ["Électrification (chauffage)", "En cours", "Consommations réelles", "Ville de Montréal", "Élevé", "Audit ciblé", "Direction Construction", "T2 2026", "Émissions GES", "Rapports d'audit"],
  ["Fenêtres Energy Star", "Ponctuel", "Inventaire par bâtiment", "CNÉB 2020", "Moyen", "Planifier campagne", "Chargé projets", "T3 2026", "Perte thermique", "Fiches produit"],
  ["Isolation", "À évaluer", "Diagnostic thermographique", "CNÉB 2020", "Moyen", "Diagnostic ciblé", "Chargé projets", "T3 2026", "Confort / kWh", "Rapport thermo"],
  ["Toitures", "Suivi cyclique", "État par immeuble", "Assurance / conformité", "Élevé", "Registre toitures", "Gestion actifs", "T2 2026", "Durée de vie", "Rapports d'inspection"],
  ["Éclairage DEL", "En déploiement", "Taux de conversion", "—", "Faible", "Achever conversion", "Maintenance", "T4 2026", "kWh évités", "Factures"],
  ["Thermostats", "Partiel", "Modèles installés", "—", "Faible", "Standardiser modèle", "Standards LIFA", "T3 2026", "Confort", "Fiche produit"],
  ["Eau — faible débit", "Ponctuel", "Inventaire robinetterie", "—", "Faible", "Cadrer standard", "Standards LIFA", "T4 2026", "L/logement", "Fiche produit"],
  ["Matériaux responsables", "À structurer", "Fiches fournisseurs", "—", "Moyen", "Cadre d'achats", "Approvisionnement", "T1 2027", "% conformité", "Bons de commande"],
  ["Gestion des déchets", "À structurer", "Filières valorisation", "Ville / RBQ", "Moyen", "Cadrage chantier", "Chargé projets", "T2 2027", "% valorisé", "Bordereaux"],
  ["Bornes électriques", "Pilote", "Demande locataire", "Ville de Montréal", "Moyen", "Étude par immeuble", "Gestion actifs", "T3 2027", "Nb bornes", "Devis"],
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
      <SectionBlock eyebrow="ESG 2.0" title="De la liste d'initiatives au programme de performance des actifs.">
        <div className="grid gap-px bg-border md:grid-cols-2">
          {axes.map((a, i) => (
            <article key={a.titre} className="bg-card p-6">
              <div className="text-[11px] tracking-[0.28em] text-accent uppercase">
                Axe {i + 1}
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">{a.titre}</h3>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {a.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-accent" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <IllustrativeNote>
          Les cibles chiffrées seront établies après le diagnostic de portefeuille et
          l'analyse des consommations réelles.
        </IllustrativeNote>
      </SectionBlock>

      <SectionBlock tone="muted" eyebrow="Cadre réglementaire à intégrer" title="Une veille structurée par cadre.">
        <div className="grid gap-px bg-border md:grid-cols-2">
          {cadres.map((c) => (
            <article key={c.titre} className="bg-card p-6">
              <h3 className="font-display text-lg font-semibold tracking-tight">{c.titre}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {c.puces.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">
                {c.note}
              </p>
            </article>
          ))}
        </div>
        <aside className="mt-8 border-l-2 border-accent bg-background px-6 py-4 text-sm text-foreground/85">
          Les obligations applicables devront être confirmées immeuble par immeuble
          avec les professionnels et les autorités compétentes.
        </aside>
      </SectionBlock>

      <SectionBlock eyebrow="Table de mise à jour" title="Reprise du plan ESG 2024-2025 — à revalider.">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1080px] border border-border bg-card text-xs">
            <thead className="bg-secondary text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
              <tr>
                {["Initiative", "Statut actuel", "Donnée à confirmer", "Exigence réglementaire", "Impact financier", "Prochaine étape", "Responsable", "Échéance", "KPI", "Preuve"].map((h) => (
                  <th key={h} className="px-3 py-3 text-left font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableInitiatives.map((row) => (
                <tr key={row[0]} className="border-t border-border align-top">
                  {row.map((c, i) => (
                    <td key={i} className={`px-3 py-3 ${i === 0 ? "font-medium" : "text-muted-foreground"}`}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <IllustrativeNote>
          Statuts historiques tirés du plan 2024-2025 — à revalider durant les 30 premiers jours.
        </IllustrativeNote>
      </SectionBlock>

      <SectionBlock tone="muted" eyebrow="Conformité — veille continue" title="Domaines de conformité à suivre.">
        <BulletList items={conformite} />
      </SectionBlock>

      <SectionBlock eyebrow="Prochaines décisions" title="Ce que ce chapitre appelle à trancher.">
        <ul className="grid gap-3 md:grid-cols-2">
          {[
            "Valider l'inventaire des immeubles assujettis au règlement 21-042",
            "Confirmer la trajectoire de décarbonation cible d'ici 2030",
            "Prioriser les immeubles pour un premier audit énergétique",
            "Choisir l'outil de suivi des consommations (Portfolio Manager ou équivalent)",
          ].map((d) => (
            <li key={d} className="border border-border bg-card p-4 text-sm">{d}</li>
          ))}
        </ul>
      </SectionBlock>
    </PageShell>
  );
}
