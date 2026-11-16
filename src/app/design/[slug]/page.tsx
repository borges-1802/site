import type { Metadata } from "next";
import { DesignCaseView } from "@/components/case-dev";
import { designProjects } from "@/content/data";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return designProjects.filter((p) => p.case).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/design/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = designProjects.find((d) => d.slug === slug);
  return pageMeta({ lang: "pt", path: `/design/${slug}`, title: p?.title.pt, description: p?.body.pt });
}

export default async function Page({ params }: PageProps<"/design/[slug]">) {
  const { slug } = await params;
  return <DesignCaseView slug={slug} />;
}
