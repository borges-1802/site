"use client";

import Link from "next/link";
import { designProjects, devProjects, site, type DesignProject } from "@/content/data";
import { usePrefs } from "../providers";
import { ProjectCard } from "../project-card";
import { Reveal, SectionHead, Shot } from "../ui";

const featured = devProjects.filter((p) => p.featured);

export function DevProjects() {
  const { t, l, href } = usePrefs();

  return (
    <section id="projetos" className="band section">
      <Reveal className="wrap">
        <SectionHead title={t("devTitle")} />

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} p={p} n={i + 1} />
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2.5">
          <Link href={href("/projetos")} className="btn btn-secondary">
            {t("all")} ({devProjects.length})
          </Link>
          <a href={l(site.cv.dev)} target="_blank" rel="noopener" className="btn btn-secondary">
            {t("cv")}
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function toneStyle(p: DesignProject) {
  if (p.tone === "acc") return { bg: "var(--acc)", fg: "var(--on-acc)" };
  if (p.tone === "ink") return { bg: "var(--ink)", fg: "var(--bg)" };
  if (p.tone === "surface") return { bg: "var(--surface)", fg: "var(--ink)" };
  return { bg: p.tone, fg: p.fg ?? "#fff" };
}

export function DesignProjects() {
  const { t, l, href } = usePrefs();

  return (
    <section id="design" className="section">
      <Reveal className="wrap">
        <SectionHead title={t("designTitle")} />

        <div className="mt-6 grid gap-5 sm:auto-rows-fr sm:grid-cols-2 lg:grid-cols-4">
          {designProjects.map((p) => {
            const { bg, fg } = toneStyle(p);
            const cover = p.images[0];
            const body = (
              <>
                <div className="relative aspect-16/10" style={{ background: bg }}>
                  <Shot
                    src={cover?.src}
                    label={cover ? l(cover.label) : l(p.title)}
                    alt={l(p.title)}
                    className="absolute inset-0"
                    stripeColor={`color-mix(in srgb, ${fg} 12%, transparent)`}
                    labelClass="border-transparent bg-black/25 text-white"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1.5 p-5">
                  <div className="flex items-center justify-between gap-3 text-[13px] font-medium text-muted">
                    <span>{l(p.kicker)}</span>
                    {p.year && <span>{p.year}</span>}
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug">{l(p.title)}</h3>
                  <p className="text-[15px] leading-snug text-muted">{l(p.body)}</p>
                  {p.case && <span className="mt-auto pt-2 text-sm font-semibold text-acc">{t("view")}</span>}
                </div>
              </>
            );
            const cls =
              "flex flex-col overflow-hidden rounded-2xl bg-bg text-ink shadow-[0_2px_14px_-6px_rgb(11_22_48/0.22)]";
            // Projetos com página própria viram link (e "sobem" no hover).
            return p.case ? (
              <Link key={p.slug} href={href(`/design/${p.slug}`)} className={`lift ${cls}`}>
                {body}
              </Link>
            ) : (
              <article key={p.slug} className={cls}>
                {body}
              </article>
            );
          })}

          <a
            href={site.cv.design}
            target="_blank"
            rel="noopener"
            className="lift flex min-h-45 flex-col items-start justify-end gap-2 rounded-2xl bg-acc p-5 text-on-acc"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span className="font-display text-lg font-bold leading-snug">{t("fullPdf")}</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
