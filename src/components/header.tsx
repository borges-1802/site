"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site, type Lang } from "@/content/data";
import { usePrefs } from "./providers";

export function Header() {
  const { t, lang, setLang, theme, toggleTheme, href } = usePrefs();
  const [cvOpen, setCvOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const cvRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cvOpen) return;
    const close = (e: MouseEvent) => {
      if (cvRef.current && !cvRef.current.contains(e.target as Node)) setCvOpen(false);
    };
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setCvOpen(false);
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", esc);
    };
  }, [cvOpen]);

  // Mobile: a barra some quando a página desce e volta quando a página sobe.
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)");
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (!mobile.matches || y < 80) setHidden(false);
      else if (Math.abs(y - lastY) > 4) setHidden(y > lastY);
      lastY = y;
    };
    const onResize = () => !mobile.matches && setHidden(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    mobile.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      mobile.removeEventListener("change", onResize);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, [menuOpen]);

  const nav = [
    { href: href("/#projetos"), label: t("navProj") },
    { href: href("/#design"), label: t("navDesign") },
    { href: href("/#experiencia"), label: t("navExp") },
    { href: href("/#contato"), label: t("navContact") },
  ];
  const cvs = [
    { href: site.cv.dev, label: t("cvDev") },
    { href: site.cv.design, label: t("cvDesign") },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-bg/90 shadow-[0_1px_0_var(--rule)] backdrop-blur transition-transform duration-300 ${
        hidden && !menuOpen ? "-translate-y-full" : ""
      }`}
    >
      <div className="wrap flex h-17 items-center gap-3 sm:gap-5">
        <Link
          href={href("/")}
          className="min-w-0 truncate whitespace-nowrap font-display text-sm font-bold tracking-tight min-[400px]:text-base sm:text-lg"
          onClick={() => setMenuOpen(false)}
        >
          {site.name}
        </Link>

        <nav className="ml-auto hidden gap-7 text-[15px] font-medium lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="border-b-2 border-transparent py-1 transition-colors hover:border-acc hover:text-acc"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-2.5 lg:ml-0">
          <div className="flex overflow-hidden rounded-lg bg-surface p-0.5" role="group" aria-label="Idioma / Language">
            {(["pt", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`cursor-pointer rounded-md px-2.5 py-1 text-[13px] font-medium ${
                  lang === l ? "bg-ink text-bg" : "text-ink hover:bg-soft"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t("theme")}
            className="grid size-9.5 cursor-pointer place-items-center rounded-xl hover:bg-soft"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
              {theme === "dark" ? (
                <g>
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                </g>
              ) : (
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              )}
            </svg>
          </button>

          <div ref={cvRef} className="relative hidden md:block">
            <button
              type="button"
              onClick={() => setCvOpen((o) => !o)}
              aria-expanded={cvOpen}
              className="flex h-9.5 cursor-pointer items-center gap-2 whitespace-nowrap rounded-xl bg-acc px-4 text-sm font-semibold text-on-acc hover:bg-acc2"
            >
              {t("cv")} <span className="text-[11px]">▾</span>
            </button>
            {cvOpen && (
              <div className="absolute right-0 top-11.5 min-w-62.5 overflow-hidden rounded-xl border border-rule bg-bg shadow-lg">
                {cvs.map((c, i) => (
                  <a
                    key={c.href}
                    href={c.href}
                    target="_blank"
                    rel="noopener"
                    onClick={() => setCvOpen(false)}
                    className={`flex justify-between px-4 py-3.5 text-[15px] font-medium hover:bg-soft hover:text-acc ${
                      i ? "border-t border-rule" : ""
                    }`}
                  >
                    <span>{c.label}</span>
                    <span className="text-xs text-muted">PDF</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={t("menu")}
            aria-expanded={menuOpen}
            className="grid size-9.5 cursor-pointer place-items-center rounded-xl hover:bg-soft lg:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
              {menuOpen ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-rule bg-bg lg:hidden">
          <div className="wrap pb-5 pt-2">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-rule py-3.5 font-display text-2xl font-bold"
              >
                {n.label}
              </Link>
            ))}
            {cvs.map((c) => (
              <a
                key={c.href}
                href={c.href}
                target="_blank"
                rel="noopener"
                className="block py-3 text-sm font-medium text-acc"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
