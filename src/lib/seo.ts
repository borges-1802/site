import type { Metadata } from "next";
import type { Lang } from "@/content/data";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "") ||
  "http://localhost:3000"
).replace(/\/$/, "");

const NAME = "João Victor Borges";

const DESCRIPTION: Record<Lang, string> = {
  pt: "Portfólio de João Victor Borges, estudante de Ciência da Computação na UFRJ, desenvolvedor full stack e UX/UI designer.",
  en: "Portfolio of João Victor Borges, Computer Science student at UFRJ, full stack developer and UX/UI designer.",
};

export function pageMeta({ lang, path, title, description }: {
  lang: Lang;
  /** caminho sem o prefixo /en, ex.: "/projetos" */
  path: string;
  title?: string;
  description?: string;
}): Metadata {
  const pt = path === "/" ? "/" : path;
  const en = path === "/" ? "/en" : `/en${path}`;
  const desc = description ?? DESCRIPTION[lang];
  return {
    ...(title ? { title } : {}),
    description: desc,
    alternates: {
      canonical: lang === "pt" ? pt : en,
      languages: { "pt-BR": pt, en, "x-default": pt },
    },
    openGraph: {
      type: "website",
      siteName: NAME,
      locale: lang === "pt" ? "pt_BR" : "en_US",
      url: lang === "pt" ? pt : en,
      title: title ? `${title} · ${NAME}` : `${NAME} - Full Stack & UX/UI Designer`,
      description: desc,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: NAME }],
    },
    twitter: { card: "summary_large_image", images: ["/og.png"] },
  };
}
