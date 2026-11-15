import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { Skills } from "@/components/home/skills";
import { ExperienceSection } from "@/components/home/experience";
import { DesignProjects, DevProjects } from "@/components/home/projects";
import { Contact } from "@/components/home/closing";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({ lang: "en", path: "/" });

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <ExperienceSection />
      <DevProjects />
      <DesignProjects />
      <Contact />
    </>
  );
}
