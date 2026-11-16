import type { MetadataRoute } from "next";
import { designProjects, devProjects } from "@/content/data";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/projetos",
    ...devProjects.filter((p) => p.case).map((p) => `/projetos/${p.slug}`),
    ...designProjects.filter((p) => p.case).map((p) => `/design/${p.slug}`),
  ];
  return paths.map((path) => ({
    url: SITE_URL + path,
    alternates: { languages: { "pt-BR": SITE_URL + path, en: SITE_URL + (path === "/" ? "/en" : `/en${path}`) } },
  }));
}
