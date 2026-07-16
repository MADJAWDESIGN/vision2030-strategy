import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ExecutiveNav, ExecutiveFooter } from "@/components/executive-nav";
import { SECTIONS, siblings, type Section } from "@/lib/sections";

type Props = {
  section: Section;
  children: ReactNode;
  eyebrow?: string;
  title: string;
  intro?: string;
};

export function PageShell({ section, children, eyebrow, title, intro }: Props) {
  const { index, prev, next } = siblings(section.path);
  const progress = ((index + 1) / SECTIONS.length) * 100;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ExecutiveNav />

      {/* Barre de progression + fil d'Ariane */}
      <div className="border-b border-border bg-secondary/60">
        <div className="mx-auto max-w-[1400px] px-6 py-4 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] tracking-[0.24em] text-muted-foreground uppercase">
            <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-2">
              <Link to="/" className="hover:text-foreground">Accueil</Link>
              <span className="opacity-40">/</span>
              <span className="text-foreground">{section.chapter}</span>
              <span className="opacity-40">·</span>
              <span className="text-foreground">{section.label}</span>
            </nav>
            <span>
              {String(index + 1).padStart(2, "0")} / {String(SECTIONS.length).padStart(2, "0")}
            </span>
          </div>
          <div className="mt-3 h-[2px] w-full bg-border">
            <div className="h-full bg-accent" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      {/* En-tête de page */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
          <div className="flex items-center gap-3 text-[11px] tracking-[0.32em] text-muted-foreground uppercase">
            <span className="h-px w-10 bg-accent" />
            {eyebrow ?? section.chapter}
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="font-serif-display mt-8 max-w-3xl text-xl leading-relaxed text-foreground/85 sm:text-2xl">
              {intro}
            </p>
          )}
        </div>
      </section>

      <main>{children}</main>

      {/* Navigation précédent / suivant */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-[1400px] px-6 py-12 lg:px-10">
          <div className="grid gap-4 md:grid-cols-3 md:items-stretch">
            {prev ? (
              <Link
                to={prev.path}
                className="group flex flex-col gap-2 border border-border bg-background p-6 transition-colors hover:border-accent"
              >
                <span className="text-[10px] tracking-[0.28em] text-muted-foreground uppercase">
                  ← Précédent
                </span>
                <span className="font-display text-lg font-semibold tracking-tight">
                  {prev.label}
                </span>
                <span className="text-xs text-muted-foreground">{prev.chapter}</span>
              </Link>
            ) : (
              <div className="border border-dashed border-border p-6 text-[11px] tracking-[0.24em] text-muted-foreground uppercase">
                Début du document
              </div>
            )}

            <Link
              to="/"
              className="flex flex-col items-center justify-center gap-2 border border-border bg-primary p-6 text-center text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <span className="text-[10px] tracking-[0.28em] uppercase opacity-70">
                Tableau de bord
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                Retour à l'accueil
              </span>
            </Link>

            {next ? (
              <Link
                to={next.path}
                className="group flex flex-col items-end gap-2 border border-border bg-background p-6 text-right transition-colors hover:border-accent"
              >
                <span className="text-[10px] tracking-[0.28em] text-muted-foreground uppercase">
                  Suivant →
                </span>
                <span className="font-display text-lg font-semibold tracking-tight">
                  {next.label}
                </span>
                <span className="text-xs text-muted-foreground">{next.chapter}</span>
              </Link>
            ) : (
              <div className="border border-dashed border-border p-6 text-right text-[11px] tracking-[0.24em] text-muted-foreground uppercase">
                Fin du document
              </div>
            )}
          </div>
        </div>
      </section>

      <ExecutiveFooter />
    </div>
  );
}

// Blocs réutilisables --------------------------------------------------------

export function SectionBlock({
  eyebrow,
  title,
  children,
  tone = "default",
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  tone?: "default" | "muted" | "dark";
}) {
  const bg =
    tone === "dark"
      ? "bg-primary text-primary-foreground"
      : tone === "muted"
        ? "bg-secondary"
        : "bg-background";
  return (
    <section className={`border-b border-border ${bg}`}>
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        {eyebrow && (
          <div className="flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase opacity-80">
            <span className="h-px w-8 bg-accent" />
            {eyebrow}
          </div>
        )}
        {title && (
          <h2 className="mt-6 max-w-3xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
        )}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function IllustrativeNote({ children }: { children: ReactNode }) {
  return (
    <aside className="mt-10 border-l-2 border-accent bg-secondary/60 px-6 py-5 text-sm leading-relaxed">
      <div className="text-[10px] tracking-[0.28em] text-accent uppercase">
        Données illustratives
      </div>
      <div className="mt-2 text-muted-foreground">{children}</div>
    </aside>
  );
}

export function CardGrid({
  items,
  cols = 3,
}: {
  items: { title: string; text: string; n?: string }[];
  cols?: 2 | 3 | 4;
}) {
  const grid =
    cols === 2
      ? "sm:grid-cols-2"
      : cols === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2 lg:grid-cols-4";
  return (
    <div className={`grid gap-px bg-border ${grid}`}>
      {items.map((it, i) => (
        <article key={it.title} className="flex flex-col gap-3 bg-card p-6">
          <div className="flex items-baseline justify-between">
            <div className="font-serif-display text-2xl text-accent">
              {it.n ?? String(i + 1).padStart(2, "0")}
            </div>
            <div className="h-px w-8 bg-accent/50" />
          </div>
          <h3 className="font-display text-lg font-semibold tracking-tight">{it.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{it.text}</p>
        </article>
      ))}
    </div>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
          <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-accent" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}