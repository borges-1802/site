"use client";

import { useState } from "react";
import { TechLogo } from "../tech-logo";
import { skills } from "@/content/data";
import { usePrefs } from "../providers";
import { Reveal, SectionHead } from "../ui";

export function Skills() {
  const { t, l } = usePrefs();
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="band section">
      <Reveal className="wrap">
        <SectionHead title={t("skillsTitle")} />
        <p className="mt-4 text-lg opacity-85">{t("skillsSub")}</p>

        {/* Celular: uma caixa por categoria, que abre os logos ao clicar */}
        <div className="mt-6 flex flex-col gap-3 md:hidden">
          {skills.map((cat) => {
            const isOpen = open === cat.id;
            return (
              <div key={cat.id} className="overflow-hidden rounded-xl bg-bg text-ink">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : cat.id)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center gap-3 px-4 py-3.5 text-left"
                >
                  <span className="size-4 flex-none rounded-full" style={{ background: cat.color }} />
                  <span className="flex-1 font-display text-base font-bold tracking-[-0.02em]">{l(cat.title)}</span>
                  <span className="text-xs font-medium text-muted">{String(cat.items.length).padStart(2, "0")}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`text-muted transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
                {isOpen && (
                  <ul className="grid grid-cols-3 gap-2 px-3 pb-3 min-[420px]:grid-cols-4">
                    {cat.items.map((name) => (
                      <li
                        key={name}
                        className="flex h-18 flex-col items-center justify-center gap-1.5 rounded-lg p-2 text-center text-[#0b1630]"
                        style={{ background: cat.color }}
                      >
                        <TechLogo name={name} />
                        <span className="text-[11px] font-medium leading-tight">{name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 hidden gap-6 md:grid lg:grid-cols-[1fr_260px]">
          <ul className="order-2 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 lg:order-1">
            {skills.flatMap((cat) =>
              cat.items.map((name) => {
                const dim = active && active !== cat.id;
                const lit = active === cat.id;
                return (
                  <li
                    key={name}
                    style={{ "--cat": cat.color } as React.CSSProperties}
                    title={`${name} · ${l(cat.title)}`}
                    className={`group flex h-18 flex-col items-center justify-center gap-1.5 rounded-xl p-2 text-center transition-all duration-200 hover:-translate-y-1 hover:bg-(--cat) hover:text-[#0b1630] ${
                      lit ? "bg-(--cat) text-[#0b1630]" : "bg-white/10"
                    } ${dim ? "opacity-35" : ""}`}
                  >
                    <TechLogo name={name} />
                    <span className="text-[11px] font-medium leading-tight">{name}</span>
                  </li>
                );
              })
            )}
          </ul>

          {/* Categorias, uma em cima da outra */}
          <div className="order-1 flex flex-col gap-3 lg:order-2">
            {skills.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onMouseEnter={() => setActive(cat.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(cat.id)}
                onBlur={() => setActive(null)}
                onClick={() => setActive(cat.id)}
                className="flex cursor-pointer items-center gap-3 rounded-xl bg-bg px-4 py-3 text-left text-ink transition-transform hover:-translate-y-0.5"
              >
                <span className="size-4 flex-none rounded-full" style={{ background: cat.color }} />
                <span className="flex-1 font-display text-base font-bold tracking-[-0.02em]">{l(cat.title)}</span>
                <span className="text-xs font-medium text-muted">{String(cat.items.length).padStart(2, "0")}</span>
              </button>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
