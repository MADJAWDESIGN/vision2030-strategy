import { createFileRoute, Link } from "@tanstack/react-router";
import { Lock, ArrowRight, Download, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-cover.jpg";
import heroExisting from "@/assets/hero-building.jpg";
import { ExecutiveNav, ExecutiveFooter } from "@/components/executive-nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VISION 2030 — Construction & Gestion des Actifs | LIFA" },
      {
        name: "description",
        content:
          "Document exécutif confidentiel préparé par Johannes Walgenwitz pour les associés de LIFA Investissements. Premières orientations stratégiques pour le département Construction et Gestion des Actifs.",
      },
    ],
  }),
  component: Index,
});

const principles = [
  { n: "01", title: "Valeur", text: "Chaque dollar investi doit augmenter durablement la valeur de l'actif." },
  { n: "02", title: "Prévisibilité", text: "Des budgets, des échéanciers et une gouvernance sur lesquels les associés peuvent compter." },
  { n: "03", title: "Qualité", text: "Des standards de rénovation qui protègent l'actif et l'expérience du locataire." },
  { n: "04", title: "Durabilité", text: "Aligner chaque décision sur les engagements ESG et la longévité du parc." },
];

const journey = [
  "Acquisition", "Diagnostic", "Priorisation", "CAPEX",
  "Modernisation", "Maintenance", "Optimisation", "Croissance",
];

function Index() {
  const [showModal, setShowModal] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ctaRef.current) return;
    const el = ctaRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCtaVisible(true);
        });
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!showModal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showModal]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ExecutiveNav />

      {/* ============ HERO — COUVERTURE EXÉCUTIVE ============ */}
      <section className="relative isolate flex min-h-screen w-full flex-col overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Immeuble résidentiel contemporain à Montréal, lumière du matin"
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--forest-deep)_78%,transparent)_0%,color-mix(in_oklab,var(--forest-deep)_70%,transparent)_45%,color-mix(in_oklab,var(--forest-deep)_92%,transparent)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,color-mix(in_oklab,var(--forest-deep)_40%,transparent)_70%,color-mix(in_oklab,var(--forest-deep)_80%,transparent)_100%)]" />
        </div>

        {/* Top bar mention */}
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 pt-10 text-primary-foreground lg:px-10">
          <div className="flex items-center gap-3 text-[10px] tracking-[0.36em] uppercase opacity-80">
            <span className="h-px w-8 bg-accent" />
            Document confidentiel
          </div>
          <div className="hidden items-center gap-2 text-[10px] tracking-[0.28em] uppercase opacity-70 md:flex">
            <Lock className="h-3 w-3" />
            Accès restreint · Comité des associés
          </div>
        </div>

        {/* Center content */}
        <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col items-center justify-center px-6 py-16 text-center text-primary-foreground lg:px-10">
          {/* Title */}
          <h1
            className="font-display font-extrabold tracking-tight text-white"
            style={{ fontSize: "clamp(48px, 8vw, 108px)", lineHeight: 1, letterSpacing: "-0.03em" }}
          >
            VISION 2030
          </h1>

          <div
            className="mt-6 font-display font-light tracking-[0.05em]"
            style={{
              fontSize: "clamp(18px, 2.6vw, 32px)",
              color: "color-mix(in oklab, var(--sage) 40%, white)",
            }}
          >
            Construction <span className="mx-3 opacity-40">•</span> Gestion des Actifs{" "}
            <span className="mx-3 opacity-40">•</span> Création de Valeur
          </div>

          <div
            className="mt-4 font-serif-display italic"
            style={{ fontSize: "clamp(16px, 1.8vw, 24px)", color: "var(--gold)" }}
          >
            Premières orientations stratégiques
          </div>

          {/* Gold separator */}
          <div className="mt-10 h-px w-24 bg-accent opacity-90" />

          {/* Document block */}
          <div className="mt-10 max-w-2xl">
            <div className="text-[11px] font-medium tracking-[0.38em] uppercase opacity-80">
              Document de réflexion stratégique
            </div>
            <div className="mt-6 text-[13px] tracking-[0.24em] uppercase opacity-75">
              Préparé pour les associés de
            </div>
            <div className="mt-2 font-display text-2xl font-semibold tracking-[0.14em] uppercase sm:text-3xl">
              LIFA Investissements
            </div>
          </div>

          {/* Author card */}
          <div
            className="mt-12 w-full max-w-[700px] rounded-2xl border border-white/15 bg-white/10 px-8 py-10 shadow-2xl backdrop-blur-md sm:px-12"
            style={{ boxShadow: "0 30px 80px -20px color-mix(in oklab, black 60%, transparent)" }}
          >
            <div className="text-[10px] tracking-[0.34em] uppercase opacity-70">Préparé par</div>
            <div
              className="font-display font-bold tracking-tight text-white"
              style={{ fontSize: "clamp(28px, 3.4vw, 40px)", lineHeight: 1.05 }}
            >
              Johannes Walgenwitz, <span className="text-accent">PMP</span>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {["Leader en construction", "Gestion des actifs", "Création de valeur"].map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-4 py-1.5 text-[11px] font-medium tracking-[0.14em] uppercase text-white/90"
                >
                  {b}
                </span>
              ))}
            </div>

            <div className="mt-8 text-[12px] tracking-[0.16em] uppercase opacity-70">
              À la suite de nos échanges du{" "}
              <span className="text-accent">15 juillet 2026</span>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 border-t border-white/15 pt-5 text-[10px] tracking-[0.32em] uppercase opacity-70">
              <Lock className="h-3 w-3" />
              Version confidentielle
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/vision"
              className="group inline-flex items-center gap-3 rounded-none border border-accent bg-accent px-8 py-4 text-[12px] font-semibold tracking-[0.24em] text-accent-foreground uppercase transition-all hover:bg-transparent hover:text-accent"
            >
              Explorer la Vision
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-3 rounded-none border border-white/40 px-8 py-4 text-[12px] font-semibold tracking-[0.24em] text-white uppercase transition-all hover:border-white hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              Télécharger le document
            </button>
          </div>
        </div>

        {/* Bottom quotation */}
        <div className="mx-auto w-full max-w-[1400px] px-6 pb-16 lg:px-10">
          <blockquote className="mx-auto max-w-4xl border-l-2 border-accent/70 pl-6 text-center">
            <p
              className="font-serif-display italic text-white/90"
              style={{ fontSize: "clamp(16px, 1.6vw, 22px)", lineHeight: 1.6 }}
            >
              « Les meilleurs départements Construction ne se distinguent pas uniquement
              par la qualité des projets qu'ils livrent, mais par leur capacité à
              transformer chaque investissement en création de valeur durable. »
            </p>
          </blockquote>
        </div>
      </section>

      {/* ============ LETTRE AUX ASSOCIÉS ============ */}
      <section id="lettre" className="bg-white">
        <div className="mx-auto max-w-[900px] px-6 py-28 lg:py-36">
          <div className="mb-10 flex items-center gap-3 text-[10px] tracking-[0.36em] text-muted-foreground uppercase">
            <span className="h-px w-10 bg-accent" />
            Lettre d'intention
          </div>

          <h2 className="font-display text-4xl leading-tight font-semibold tracking-tight text-foreground sm:text-5xl">
            Aux associés de LIFA Investissements,
          </h2>

          <div className="mt-12 space-y-7 font-serif-display text-xl leading-[1.75] text-foreground/85 not-italic sm:text-[22px]">
            <p>
              À la suite de nos échanges du 15 juillet 2026, j'ai souhaité mettre sur
              papier une première réflexion stratégique illustrant ma vision du rôle que
              pourrait jouer une direction Construction et Gestion des Actifs dans la
              prochaine phase de croissance de LIFA.
            </p>
            <p>
              Ce document n'a pas pour objectif de définir une stratégie définitive avant
              d'avoir une compréhension complète de votre organisation.
            </p>
            <p>
              Il présente plutôt une méthode de travail, des orientations structurantes
              et une vision de ce que pourrait devenir cette fonction au cours des
              prochaines années.
            </p>
            <p>
              Je suis convaincu que la Construction ne doit pas être considérée
              uniquement comme une fonction d'exécution.
            </p>
            <p>
              Elle doit devenir un véritable levier de création de valeur capable de
              protéger les actifs, d'améliorer l'expérience des locataires, de soutenir
              les décisions d'investissement et d'accompagner durablement la croissance
              du portefeuille immobilier.
            </p>
            <p>
              Les propositions présentées dans ce document reposent sur les informations
              disponibles à ce jour.
            </p>
            <p>
              Elles devront naturellement être validées, enrichies et adaptées à la
              réalité opérationnelle de LIFA durant les premières semaines d'analyse du
              portefeuille, des équipes et des processus.
            </p>
            <p>
              Mon objectif est d'apporter une vision, une méthode de travail et un cadre
              de gouvernance permettant de structurer progressivement une fonction
              Construction à la hauteur des ambitions de croissance de LIFA.
            </p>
            <p>
              J'espère que cette réflexion témoignera de mon enthousiasme à contribuer au
              développement de votre organisation et de ma volonté de bâtir avec vous une
              direction Construction reconnue comme un véritable levier stratégique.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-16 border-t border-border pt-10">
            <div
              className="font-serif-display italic text-foreground"
              style={{ fontSize: "clamp(28px, 3vw, 36px)" }}
            >
              Johannes Walgenwitz, PMP
            </div>
            <div className="mt-3 text-sm tracking-[0.16em] text-muted-foreground uppercase">
              Leader en construction <span className="mx-2 opacity-40">•</span> Gestion
              des actifs <span className="mx-2 opacity-40">•</span> Création de valeur
            </div>
          </div>

          {/* Executive Insight */}
          <aside
            className="mt-16 rounded-sm border-l-4 border-accent p-10"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--forest-deep) 96%, transparent), color-mix(in oklab, var(--forest) 92%, transparent))",
              color: "var(--primary-foreground)",
            }}
          >
            <div className="text-[11px] tracking-[0.36em] text-accent uppercase">
              Executive Insight
            </div>
            <div className="mt-5 space-y-4 text-lg leading-relaxed opacity-95">
              <p>
                Cette vision est volontairement présentée comme une réflexion stratégique
                préliminaire.
              </p>
              <p>
                Elle sera enrichie après une analyse détaillée du portefeuille
                immobilier, des données financières, des processus existants, des équipes
                et des priorités des associés.
              </p>
              <p className="font-serif-display italic">
                La stratégie finale reposera sur des faits observés, des données mesurées
                et des décisions partagées.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ============ BANDEAU FOREST ============ */}
      <section
        className="border-y"
        style={{
          background: "var(--forest-deep)",
          borderColor: "color-mix(in oklab, var(--gold) 30%, transparent)",
        }}
      >
        <div className="mx-auto max-w-[1400px] px-6 py-10 text-center lg:px-10">
          <p className="font-serif-display text-lg tracking-wide text-primary-foreground/90 sm:text-xl">
            <span>Comprendre avant de transformer.</span>
            <span className="mx-4 text-accent">·</span>
            <span>Structurer avant d'accélérer.</span>
            <span className="mx-4 text-accent">·</span>
            <span>Mesurer avant de décider.</span>
          </p>
        </div>
      </section>

      {/* ============ QUATRE PRINCIPES (conservé) ============ */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24">
            <div>
              <div className="flex items-center gap-3 text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
                <span className="h-px w-8 bg-accent" />
                I. Principes directeurs
              </div>
              <h2 className="mt-6 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
                Quatre repères pour chaque décision.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                La Construction n'est pas un centre de coûts. C'est un levier de
                création de valeur, de protection des actifs et de croissance du
                portefeuille immobilier de LIFA.
              </p>
            </div>

            <div className="grid gap-px bg-border sm:grid-cols-2">
              {principles.map((p) => (
                <article
                  key={p.n}
                  className="group bg-background p-8 transition-colors hover:bg-card"
                >
                  <div className="flex items-baseline justify-between">
                    <div className="font-serif-display text-3xl text-accent">{p.n}</div>
                    <div className="h-px w-8 bg-accent/60 transition-all group-hover:w-14" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ PARCOURS DE VALEUR (conservé) ============ */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
              <span className="h-px w-8 bg-accent" />
              II. Parcours de création de valeur
            </div>
            <h2 className="mt-6 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
              De l'acquisition à la croissance de valeur.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Une chaîne opérationnelle continue, où chaque étape alimente la suivante
              en information, en discipline et en performance.
            </p>
          </div>

          <ol className="mt-16 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((step, i) => (
              <li
                key={step}
                className="flex flex-col justify-between bg-card p-8 transition-colors hover:bg-secondary"
              >
                <div className="font-serif-display text-2xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-10">
                  <div className="font-display text-lg font-semibold tracking-tight">
                    {step}
                  </div>
                  <div className="mt-3 h-px w-6 bg-accent/60" />
                </div>
              </li>
            ))}
          </ol>

          <aside className="mt-20 border-l-2 border-accent bg-secondary/60 px-8 py-10 sm:px-12">
            <div className="text-[11px] tracking-[0.28em] text-accent uppercase">
              Executive Insight
            </div>
            <p className="font-serif-display mt-4 text-2xl leading-relaxed text-foreground sm:text-3xl">
              Comprendre avant de transformer. Structurer avant d'accélérer. Mesurer
              avant de décider.
            </p>
          </aside>
        </div>

        {/* Image de continuité */}
        <div className="mx-auto max-w-[1400px] px-6 pb-24 lg:px-10">
          <div className="relative aspect-[21/9] overflow-hidden rounded-sm">
            <img
              src={heroExisting}
              alt="Immeuble LIFA — continuité architecturale"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* ============ CTA FINAL — EXPLORER LA VISION ============ */}
        <div
          ref={ctaRef}
          className={`mx-auto flex max-w-[1400px] flex-col items-center px-6 pt-16 pb-40 text-center transition-all duration-1000 ease-out lg:px-10 ${
            ctaVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <Link
            to="/vision"
            className="group inline-flex items-center gap-3 rounded-none border border-accent bg-accent px-10 py-5 text-[12px] font-semibold tracking-[0.24em] text-accent-foreground uppercase transition-all hover:bg-transparent hover:text-accent"
          >
            Explorer la Vision
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <blockquote className="mt-16 max-w-2xl">
            <p
              className="font-serif-display italic text-foreground/60"
              style={{ fontSize: "clamp(15px, 1.4vw, 20px)", lineHeight: 1.7 }}
            >
              « Une vision n'a de valeur que lorsqu'elle se transforme en actions
              concrètes, créatrices de valeur durable. »
            </p>
          </blockquote>
        </div>
      </section>

      <ExecutiveFooter />

      {/* ============ MODALE — VERSION EN PRÉPARATION ============ */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <button
            type="button"
            aria-label="Fermer"
            onClick={() => setShowModal(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <div
            className="relative z-10 w-full max-w-md border border-border bg-background p-8 shadow-2xl sm:p-10 animate-in zoom-in-95 fade-in duration-300"
            style={{ boxShadow: "0 40px 100px -20px color-mix(in oklab, black 60%, transparent)" }}
          >
            <button
              type="button"
              onClick={() => setShowModal(false)}
              aria-label="Fermer la fenêtre"
              className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-3 text-[10px] tracking-[0.32em] text-muted-foreground uppercase">
              <span className="h-px w-8 bg-accent" />
              Document confidentiel
            </div>
            <h3
              id="modal-title"
              className="mt-5 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              Version complète en préparation
            </h3>
            <p className="mt-5 font-serif-display text-base leading-relaxed text-foreground/80 sm:text-lg">
              La version imprimable haute définition sera remise aux associés de
              LIFA Investissements dans le cadre de la prochaine étape du
              processus.
            </p>
            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="inline-flex items-center gap-2 border border-accent bg-accent px-6 py-3 text-[11px] font-semibold tracking-[0.24em] text-accent-foreground uppercase transition-all hover:bg-transparent hover:text-accent"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}