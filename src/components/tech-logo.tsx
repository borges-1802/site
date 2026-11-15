import { siC, siClaude, siCursor, siDocker, siExpress, siGithub, siGooglegemini, siJavascript, siJest, siNodedotjs, siNumpy,
  siPandas, siCss, siDrizzle, siFastapi, siFigma, siGooglebigquery, siGit, siGooglecolab, siGrafana, siHtml5, siLaravel,
  siMysql, siNextdotjs, siPhp, siPostgresql, siPython, siReact, siStreamlit, siTailwindcss, siTypescript, siWordpress } from "simple-icons";

const ICONS: Record<string, { path?: string; mono?: string }> = {
  React: { path: siReact.path },
  TypeScript: { path: siTypescript.path },
  "Next.js": { path: siNextdotjs.path },
  Tailwind: { path: siTailwindcss.path },
  HTML: { path: siHtml5.path },
  CSS: { path: siCss.path },
  Python: { path: siPython.path },
  FastAPI: { path: siFastapi.path },
  Laravel: { path: siLaravel.path },
  PHP: { path: siPhp.path },
  PostgreSQL: { path: siPostgresql.path },
  MySQL: { path: siMysql.path },
  Streamlit: { path: siStreamlit.path },
  BigQuery: { path: siGooglebigquery.path },
  Colab: { path: siGooglecolab.path },
  Drizzle: { path: siDrizzle.path },
  WordPress: { path: siWordpress.path },
  Git: { path: siGit.path },
  Grafana: { path: siGrafana.path },
  "Power BI": { mono: "BI" },
  SQL: { mono: "SQL" },
  C: { path: siC.path },
  JavaScript: { path: siJavascript.path },
  "Node.js": { path: siNodedotjs.path },
  Express: { path: siExpress.path },
  Pandas: { path: siPandas.path },
  NumPy: { path: siNumpy.path },
  GitHub: { path: siGithub.path },
  Docker: { path: siDocker.path },
  Jest: { path: siJest.path },
  Claude: { path: siClaude.path },
  Cursor: { path: siCursor.path },
  Gemini: { path: siGooglegemini.path },
  Canva: { mono: "Ca" },
  Figma: { path: siFigma.path },
  Photoshop: { mono: "Ps" },
  Illustrator: { mono: "Ai" },
  "After Effects": { mono: "Ae" },
};

export const hasLogo = (name: string) => name in ICONS;

export function TechLogo({ name, className = "size-6" }: { name: string; className?: string }) {
  const icon = ICONS[name];
  if (icon?.path) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
        <path d={icon.path} />
      </svg>
    );
  }
  return (
    <span
      className={`grid place-items-center rounded-md border-[1.5px] border-current font-display text-[10px] font-bold leading-none ${className}`}
      aria-hidden
    >
      {icon?.mono ?? name.slice(0, 2)}
    </span>
  );
}
