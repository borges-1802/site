"use client";

import { devProjects } from "@/content/data";
import { LightboxProvider, useLightbox } from "./lightbox";
import { usePrefs } from "./providers";
import { Shot } from "./ui";

function Label({ children }: { children: React.ReactNode }) {
  return <div className="kicker">{children}</div>;
}

function Zoomable({ onOpen, enabled, children, label }: { onOpen: () => void; enabled: boolean; children: React.ReactNode; label: string }) {
  if (!enabled) return <>{children}</>;
  return (
    <button type="button" onClick={onOpen} aria-label={label} className="block w-full cursor-zoom-in text-left transition-opacity hover:opacity-90">
      {children}
    </button>
  );
}

export function DevCaseView({ slug }: { slug: string }) {
  return (
    <LightboxProvider>
      <CaseContent slug={slug} />
    </LightboxProvider>
  );
}

function CaseContent({ slug }: { slug: string }) {
  const { t, l } = usePrefs();
  const { open } = useLightbox();
  const withCase = devProjects.filter((p) => p.case);
  const i = withCase.findIndex((p) => p.slug === slug);
  const p = withCase[i];
  const c = p.case!;

  const images = c.gallery.filter((g) => g.src).map((g) => ({ src: g.src!, alt: l(g.label) }));
  const openAt = (src?: string) => {
    const k = images.findIndex((im) => im.src === src);
    if (k >= 0) open(images, k);
  };

  const meta = [
    [t("role"), l(c.role)],
    [t("period"), l(c.period)],
    [t("stack"), p.tags.slice(0, 3).join(" · ")],
    [t("status"), l(c.status)],
  ];

  return (
    <div className="wrap page-enter grid gap-10 pb-16 pt-8 md:pb-24 md:pt-10 lg:grid-cols-[320px_1fr] lg:gap-12">
      <aside className="flex flex-col gap-6 lg:sticky lg:top-22 lg:self-start">
        <h1 className="font-display text-[36px] font-bold leading-[1.02] tracking-[-0.02em] md:text-[44px]">{l(p.title)}</h1>
        <p className="text-muted">{l(c.lead)}</p>

        <dl className="overflow-hidden rounded-2xl bg-surface">
          {meta.map(([k, v], j) => (
            <div key={k} className={`flex justify-between gap-4 px-4 py-3 ${j ? "border-t border-rule" : ""}`}>
              <dt className="text-xs font-medium text-muted">{k}</dt>
              <dd className="text-right text-sm font-semibold">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-col gap-2.5">
          {p.repos.map((r, k) => (
            <a key={r} href={r} target="_blank" rel="noopener" className="btn btn-primary w-full">
              {t("code")}
              {p.repos.length > 1 ? ` ${k + 1}` : ""}
            </a>
          ))}
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noopener" className="btn btn-secondary w-full">
              {t("demo")}
            </a>
          )}
        </div>
      </aside>

      <div className="flex min-w-0 flex-col gap-14">
        <Shot
          src={p.cover}
          label={`${t("print")} · ${t("cover")}`}
          alt={l(p.title)}
          className="aspect-16/10 overflow-hidden rounded-2xl shadow-[0_2px_14px_-6px_rgb(11_22_48/0.22)]"
          position="top"
          priority
        />

        <section id="contexto" className="scroll-mt-24">
          <Label>{t("context")}</Label>
          <p className="mt-3 font-display text-xl font-medium leading-snug md:text-[26px]">{l(c.context)}</p>
        </section>

        <div className="grid gap-10 md:grid-cols-2 md:gap-8">
          <section id="papel" className="scroll-mt-24">
            <Label>{t("myRole")}</Label>
            <p className="mt-3">{l(c.myRole)}</p>
          </section>
          <section id="stack" className="scroll-mt-24">
            <Label>{t("stack")}</Label>
            <div className="mt-3 flex flex-wrap gap-2">
              {c.stack.map((s) => (
                <span key={s} className="rounded-lg bg-surface px-2.5 py-1 text-xs font-medium">
                  {s}
                </span>
              ))}
            </div>
          </section>
        </div>

        <section id="decisoes" className="scroll-mt-24">
          <Label>{t("decisions")}</Label>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {c.decisions.map((d, j) => (
              <div key={d.title.en} className="rounded-2xl bg-surface p-6">
                <div className="font-display text-[32px] font-bold leading-none text-acc">{String(j + 1).padStart(2, "0")}</div>
                <h3 className="mb-1.5 mt-3 font-display text-lg font-bold">{l(d.title)}</h3>
                <p className="text-muted">{l(d.body)}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="telas" className="scroll-mt-24">
          <Label>{t("gallery")}</Label>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {c.gallery.map((g) => (
              <figure key={g.label.en}>
                <Zoomable enabled={!!g.src} onOpen={() => openAt(g.src)} label={l(g.label)}>
                  <Shot
                    src={g.src}
                    label={l(g.label)}
                    position="top"
                    className="aspect-16/10 overflow-hidden rounded-xl shadow-[0_2px_14px_-6px_rgb(11_22_48/0.22)]"
                  />
                </Zoomable>
                <figcaption className="mt-2 text-sm text-muted">{l(g.label)}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="resultado" className="scroll-mt-24">
          <Label>{t("result")}</Label>
          <p className="mt-3 text-lg">{l(c.result)}</p>
        </section>

      </div>
    </div>
  );
}
