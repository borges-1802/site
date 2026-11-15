import type { Metadata } from "next";
import { AllProjects } from "@/components/all-projects";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  lang: "pt",
  path: "/projetos",
  title: "Projetos",
  description: "Todos os projetos de desenvolvimento de João Victor Borges.",
});

export default function Page() {
  return <AllProjects />;
}
