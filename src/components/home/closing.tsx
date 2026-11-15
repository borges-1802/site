"use client";

import { contactLinks } from "@/content/data";
import { usePrefs } from "../providers";

const icons: Record<string, React.ReactNode> = {
  "E-mail": (
    <>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>
  ),
  LinkedIn: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  GitHub: (
    <path d="M9 19c-4 1.5-4-2-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.8 2.3 5.8 2.6 5.8 2.6a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.4 9c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  ),
  Lattes: <path d="M22 10L12 5 2 10l10 5 10-5zM6 12v5c3 2 9 2 12 0v-5" />,
};

export function Contact() {
  const { t } = usePrefs();
  return (
    <section id="contato" className="band py-14 md:py-16">
      <div className="wrap flex flex-col items-center gap-6 text-center">
        <h2 className="font-display text-[26px] font-bold leading-tight tracking-[-0.02em] md:text-[32px]">
          {t("contactTitle")}
        </h2>
        <div className="flex flex-wrap justify-center gap-2.5">
          {contactLinks.map((k) => (
            <a
              key={k.label}
              href={k.href}
              target={k.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl bg-bg px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-soft"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                {icons[k.label]}
              </svg>
              {k.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
