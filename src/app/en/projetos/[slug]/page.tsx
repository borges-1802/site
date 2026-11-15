import type { Metadata } from "next";
import { DevCaseView } from "@/components/case-dev";
import { devProjects } from "@/content/data";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return devProjects.filter((p) => p.case).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/en/projetos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = devProjects.find((d) => d.slug === slug);
  return pageMeta({ lang: "en", path: `/projetos/${slug}`, title: p?.title.en, description: p?.summary.en });
}

export default async function Page({ params }: PageProps<"/en/projetos/[slug]">) {
  const { slug } = await params;
  return <DevCaseView slug={slug} />;
}
