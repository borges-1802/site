"use client";

import { useState } from "react";
import { duration, experience, period, type ExpType, type UiKey } from "@/content/data";
import { usePrefs } from "../providers";
import { Reveal, SectionHead } from "../ui";
import { hasLogo, TechLogo } from "../tech-logo";
import { useToday } from "@/lib/use-today";

/** Ícone do círculo da linha do tempo, por tipo de experiência. */
function TypeIcon({ type }: { type: ExpType }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (type) {
    case "dev": // maleta
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
        </svg>
      );
    case "design": // caneta
      return (
        <svg {...common}>
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.6 7.6" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );
    case "res": // frasco
      return (
        <svg {...common}>
          <path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3" />
          <path d="M7 15h10" />
        </svg>
      );
    case "ens": // capelo
      return (
        <svg {...common}>
          <path d="M22 10L12 5 2 10l10 5 10-5z" />
          <path d="M6 12v5c3 2 9 2 12 0v-5" />
        </svg>
      );
    case "lead": // bandeira
      return (
        <svg {...common}>
          <path d="M4 22V4M4 4h13l-2 4 2 4H4" />
        </svg>
      );
  }
}

export function ExperienceSection() {
  const { t, l, lang } = usePrefs();
  const today = useToday();
  const [filter, setFilter] = useState<ExpType | "all">("all");
  const [expanded, setExpanded] = useState(false);
  const filtered = experience.filter((e) => filter === "all" || e.type === filter);
  const collapsible = filter === "all" && filtered.some((e) => !e.featured);
  const visible = collapsible && !expanded ? filtered.filter((e) => e.featured) : filtered;
  const hiddenCount = filtered.length - filtered.filter((e) => e.featured).length;

  // Só mostra filtros de tipos que existem nos dados.
  const allFilters: [ExpType | "all", UiKey][] = [
    ["all", "fAll"],
    ["dev", "fDev"],
    ["design", "fDesign"],
    ["res", "fRes"],
    ["ens", "fEns"],
    ["lead", "fLead"],
  ];
  const filters = allFilters.filter(([k]) => k === "all" || experience.some((e) => e.type === k));

  return (
    <section id="experiencia" className="section">
      <Reveal className="wrap">
        <SectionHead title={t("expTitle")}>
          <div className="flex flex-wrap gap-2">
            {filters.map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                aria-pressed={filter === key}
                className={`cursor-pointer rounded-lg border-2 border-ink px-3.5 py-1.5 text-[13px] font-medium ${
                  filter === key ? "bg-ink text-bg" : "hover:bg-soft"
                }`}
              >
                {t(label)}
              </button>
            ))}
          </div>
        </SectionHead>

        <ol className="relative mt-8 md:mt-10">
          <span
            className="absolute bottom-6 top-6 left-5.75 w-0.5 rounded-full bg-rule md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />
          {visible.map((e) => (
            <li
              key={`${e.org}-${e.start}`}
              className="relative grid grid-cols-[48px_1fr] gap-x-5 pb-10 last:pb-0 md:grid-cols-[1fr_56px_1fr] md:gap-x-10"
            >
              <div className="col-start-2 md:col-start-1 md:row-start-1 md:pt-2 md:text-right">
                <h3 className="font-display text-xl font-bold leading-tight tracking-[-0.02em] md:text-2xl">
                  {l(e.role)}
                </h3>
                <div className="mt-1.5 text-muted">
                  {period(e.start, e.end, lang)}
                  <span className="text-xs"> · {duration(e.start, e.end, lang, today)}</span>
                </div>
                {e.tags.some(hasLogo) && (
                  <ul className="mt-3 flex flex-wrap gap-2 md:justify-end" aria-label={t("tools")}>
                    {e.tags.filter(hasLogo).map((tg) => (
                      <li
                        key={tg}
                        className="flex items-center gap-1.5 rounded-lg bg-surface px-2.5 py-1.5 text-muted transition-colors hover:bg-acc hover:text-on-acc"
                      >
                        <TechLogo name={tg} className="size-4" />
                        <span className="text-xs font-medium">{tg}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="col-start-1 row-span-2 row-start-1 md:col-start-2 md:row-span-1">
                <span
                  className={`relative grid size-12 place-items-center rounded-full md:size-14 ${
                    e.type === "dev" ? "bg-acc text-on-acc" : "bg-ink text-bg"
                  }`}
                >
                  <TypeIcon type={e.type} />
                </span>
              </div>

              <div className="col-start-2 mt-3 md:col-start-3 md:row-start-1 md:mt-0 md:pt-2">
                <div className="font-display text-lg font-semibold text-acc md:text-xl">{e.org}</div>
                <span className="mt-3 block h-1 w-14 rounded-full bg-rule" aria-hidden />
                <ul className="mt-3 flex flex-col gap-1.5">
                  {e.points.map((pt) => (
                    <li key={pt.en} className="flex gap-2.5 leading-relaxed text-muted">
                      <span className="mt-[0.7em] size-1.5 flex-none rounded-full bg-acc" aria-hidden />
                      <span>{l(pt)}</span>
                    </li>
                  ))}
                </ul>
                {e.award && (
                  <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-soft px-3 py-1.5 text-sm font-semibold text-acc">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <circle cx="12" cy="9" r="6" />
                      <path d="M8.5 14L7 22l5-3 5 3-1.5-8" />
                    </svg>
                    {l(e.award)}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>

        {collapsible && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((x) => !x)}
              aria-expanded={expanded}
              className="btn btn-secondary px-5"
            >
              {expanded ? t("showLess") : `${t("showMore")} (${hiddenCount})`}
            </button>
          </div>
        )}
      </Reveal>
    </section>
  );
}
