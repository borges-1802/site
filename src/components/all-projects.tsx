"use client";

import { devProjects } from "@/content/data";
import { ProjectCard } from "./project-card";
import { usePrefs } from "./providers";

export function AllProjects() {
  const { t } = usePrefs();
  return (
    <div className="wrap page-enter pb-16 pt-8 md:pb-24 md:pt-10">
      <h1 className="font-display text-[40px] font-bold leading-none tracking-[-0.02em] md:text-[72px]">
        {t("allProjects")}
      </h1>
      <p className="mt-5 text-xl text-muted">{t("allProjectsSub")}</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {devProjects.map((p, i) => (
          <ProjectCard key={p.slug} p={p} n={i + 1} />
        ))}
      </div>
    </div>
  );
}
