"use client";

import Link from "next/link";
import { site } from "@/content/data";
import { usePrefs } from "../providers";
import { Shot } from "../ui";

export function Hero() {
  const { t, l, href } = usePrefs();
  return (
    <section className="wrap grid items-center gap-10 pb-16 pt-10 md:gap-16 md:pb-24 md:pt-16 lg:grid-cols-[1.25fr_1fr]">
      <div className="page-enter">
        <p className="mb-4 font-display text-lg font-semibold text-muted md:text-xl">
          {t("hi")} <span className="text-ink">{site.name}</span>
        </p>
        <h1 className="font-display text-[clamp(36px,9vw,56px)] font-bold leading-[1.02] tracking-[-0.02em] lg:text-[clamp(48px,4.6vw,68px)]">
          {t("h1a")}
          <span className="text-acc">{t("h1b")}</span>
          {t("h1c")}
          <span className="text-acc">{t("h1d")}</span>
        </h1>
        <p className="mt-6 text-lg text-muted">{t("intro")}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={href("/#contato")} className="btn btn-primary px-5">
            {t("contactCta")}
          </Link>
          <a href={l(site.cv.dev)} target="_blank" rel="noopener" className="btn btn-secondary px-5">
            {t("cv")}
          </a>
        </div>
      </div>

      <div className="relative w-full max-w-[320px] justify-self-center md:max-w-95 lg:max-w-105">
        <div className="absolute inset-[18px_-18px_-18px_18px] rounded-2xl bg-acc" />
        <Shot
          src={site.photo}
          label={t("photo")}
          alt={site.name}
          className="relative aspect-4/5 overflow-hidden rounded-2xl"
          position="50% 35%"
          priority
        />
      </div>
    </section>
  );
}
