export type Section = {
  slug: string;
  path: string;
  label: string;
  short?: string;
  chapter: string;
  summary: string;
};

export const SECTIONS: Section[] = [
  { slug: "accueil", path: "/", label: "Accueil", chapter: "Ouverture", summary: "Portail exécutif — orientations Vision 2030." },
  { slug: "vision", path: "/vision", label: "Vision 2030", chapter: "Chapitre I", summary: "Vision, mission, principes, dix piliers." },
  { slug: "creation-valeur", path: "/creation-valeur", label: "Création de valeur", chapter: "Chapitre II", summary: "De la dépense de construction à la création de valeur." },
  { slug: "plan-100-jours", path: "/plan-100-jours", label: "Plan des 100 jours", chapter: "Chapitre III", summary: "Observer, structurer, proposer." },
  { slug: "capex", path: "/capex", label: "CAPEX 3-5-10 ans", chapter: "Chapitre IV", summary: "Planification pluriannuelle des investissements." },
  { slug: "gestion-actifs", path: "/gestion-actifs", label: "Gestion des actifs", chapter: "Chapitre V", summary: "Pilotage par portefeuille et par actif." },
  { slug: "standards", path: "/standards", label: "Standards de rénovation", chapter: "Chapitre VI", summary: "Bibliothèque LIFA des standards techniques." },
  { slug: "enveloppe", path: "/enveloppe", label: "Enveloppe du bâtiment", chapter: "Chapitre VII", summary: "Protection long terme de l'enveloppe." },
  { slug: "maintenance", path: "/maintenance", label: "Maintenance", chapter: "Chapitre VIII", summary: "Du réactif au préventif structuré." },
  { slug: "esg", path: "/esg", label: "ESG et conformité", chapter: "Chapitre IX", summary: "Trajectoire ESG et cadre réglementaire." },
  { slug: "donnees", path: "/donnees", label: "Données et tableaux de bord", chapter: "Chapitre X", summary: "Recueillir, structurer, décider." },
  { slug: "fournisseurs", path: "/fournisseurs", label: "Fournisseurs et entrepreneurs", chapter: "Chapitre XI", summary: "Réseau qualifié et gestion des contrats." },
  { slug: "organisation", path: "/organisation", label: "Organisation et équipe", chapter: "Chapitre XII", summary: "Structure cible du département." },
  { slug: "gouvernance", path: "/gouvernance", label: "Gouvernance", chapter: "Chapitre XIII", summary: "Comités, seuils d'autorité, reporting." },
  { slug: "feuille-de-route", path: "/feuille-de-route", label: "Feuille de route 2026-2030", chapter: "Chapitre XIV", summary: "Séquence des grandes étapes." },
  { slug: "kpi", path: "/kpi", label: "KPI", chapter: "Chapitre XV", summary: "Indicateurs de performance suivis." },
  { slug: "documents", path: "/documents", label: "Documents et annexes", chapter: "Chapitre XVI", summary: "Références et pièces jointes." },
];

export function sectionByPath(pathname: string): Section | undefined {
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  return SECTIONS.find((s) => s.path === normalized);
}

export function siblings(pathname: string) {
  const idx = SECTIONS.findIndex((s) => s.path === pathname);
  return {
    index: idx,
    prev: idx > 0 ? SECTIONS[idx - 1] : undefined,
    next: idx >= 0 && idx < SECTIONS.length - 1 ? SECTIONS[idx + 1] : undefined,
  };
}