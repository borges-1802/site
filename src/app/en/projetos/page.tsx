import type { Metadata } from "next";
import { AllProjects } from "@/components/all-projects";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  lang: "en",
  path: "/projetos",
  title: "Projects",
  description: "All development projects by João Victor Borges.",
});

export default function Page() {
  return <AllProjects />;
}
