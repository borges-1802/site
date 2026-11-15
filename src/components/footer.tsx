"use client";

import { site } from "@/content/data";
import { usePrefs } from "./providers";
import { useToday } from "@/lib/use-today";

export function Footer() {
  const { t } = usePrefs();
  const year = useToday().getFullYear();
  return (
    <footer className="bg-ink text-bg">
      <div className="wrap flex flex-wrap justify-between gap-3 py-7 text-sm">
        <span>© {year} {site.name}</span>
        <span>{t("foot")}</span>
      </div>
    </footer>
  );
}
