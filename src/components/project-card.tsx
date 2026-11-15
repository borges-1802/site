"use client";

import Link from "next/link";
import type { DevProject } from "@/content/data";
import { usePrefs } from "./providers";
import { Shot } from "./ui";

export function ProjectCard({ p, n }: { p: DevProject; n: number }) {
  const { t, l, href } = usePrefs();
  const caseHref = p.case ? href(`/projetos/${p.slug}`) : undefined;
  return (
    <article className="lift flex h-full flex-col overflow-hidden rounded-2xl bg-bg text-ink shadow-[0_2px_14px_-6px_rgb(11_22_48/0.22)]">
      <Shot
        src={p.cover}
        label={`${t("print")} · ${String(n).padStart(2, "0")}`}
        alt={l(p.title)}
        className="aspect-2/1"
        position="top"
      />
      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-lg font-bold leading-snug">
            {caseHref ? (
              <Link href={caseHref} className="hover:text-acc">
                {l(p.title)}
              </Link>
            ) : (
              l(p.title)
            )}
          </h3>
          <span className="flex-none text-xs text-muted">{p.year}</span>
        </div>
        <p className="text-[15px] leading-snug text-muted">{l(p.summary)}</p>
        <div className="flex flex-wrap gap-1.5">
          {p.tags.map((tg) => (
            <span key={tg} className="rounded-md bg-surface px-2 py-0.5 text-[11px] font-medium">
              {tg}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          {caseHref && (
            <Link href={caseHref} className="btn btn-primary px-3 py-1.5 text-[13px]">
              {t("view")}
            </Link>
          )}
          {p.repos.map((r, i) => (
            <a key={r} href={r} target="_blank" rel="noopener" className="btn btn-secondary px-3 py-1.5 text-[13px]">
              {t("code")}
              {p.repos.length > 1 ? ` ${i + 1}` : ""}
            </a>
          ))}
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noopener" className="btn btn-secondary px-3 py-1.5 text-[13px]">
              {t("demo")}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
