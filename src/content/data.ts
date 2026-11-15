export type Lang = "pt" | "en";
export type L = { pt: string; en: string };

export type Img = { label: L; src?: string };

/* ───────────────────────── Dados pessoais ───────────────────────── */

export const site = {
  name: "João Victor Borges",
  email: "joaovbn@ic.ufrj.br",
  github: "borges-1802",
  linkedin: "joão-victor-borges-453020272",
  lattes: "http://lattes.cnpq.br/1656015756108559",
  photo: "/images/joao.webp" as string | undefined,
  cv: {
    dev: "/cv/joao-borges-cv-desenvolvedor.pdf",
    design: "/cv/joao-borges-portfolio-design.pdf",
  },
};

export const contactLinks = [
  { label: "E-mail", href: `mailto:${site.email}` },
  { label: "LinkedIn", href: `https://www.linkedin.com/in/${site.linkedin}/` },
  { label: "GitHub", href: `https://github.com/${site.github}` },
  { label: "Lattes", href: site.lattes },
];

/* ───────────────────────── Textos da interface ───────────────────────── */

const uiPt = {
  cv: "Visualizar CV",
  cvDev: "CV Desenvolvedor",
  cvDesign: "Portfólio Design",
  hi: "Olá, eu sou",
  h1a: "Desenvolvedor ",
  h1b: "Full stack",
  h1c: " & ",
  h1d: "UX/UI Designer",
  intro:
    "Estudante de Ciência da Computação na UFRJ, com foco em engenharia de dados, IA e desenvolvimento full stack. Construo produtos do banco de dados à interface, com o mesmo cuidado em código e em design.",
  contactCta: "Entrar em contato",
  photo: "[ foto · 4:5 ]",
  print: "print",
  cover: "capa",
  navProj: "Projetos",
  navDesign: "Design",
  navExp: "Experiência",
  navContact: "Contato",
  expTitle: "Experiência",
  skillsTitle: "Conhecimentos",
  skillsSub: "Ferramentas que uso no dia a dia, do código ao design.",
  devTitle: "Projetos de Desenvolvimento",
  designTitle: "Projetos de Design",
  contactTitle: "Vamos conversar",
  view: "Ver projeto",
  code: "Código",
  demo: "Site",
  all: "Ver todos",
  allProjects: "Todos os projetos",
  allProjectsSub: "Trabalhos de faculdade, laboratórios e desafios técnicos, do mais recente ao mais antigo.",
  top: "Topo",
  foot: "Rio de Janeiro, RJ",
  result: "Resultado",
  context: "Contexto e problema",
  myRole: "Meu papel",
  stack: "Stack",
  decisions: "Decisões técnicas",
  gallery: "Galeria de telas",
  role: "Papel",
  period: "Período",
  status: "Status",
  fullPdf: "Visualizar portfólio completo",
  fAll: "Todos",
  fDev: "Dev",
  fDesign: "Design",
  fRes: "Pesquisa",
  fEns: "Ensino",
  fLead: "Liderança",
  tools: "Ferramentas",
  close: "Fechar",
  showMore: "Mostrar mais",
  showLess: "Mostrar menos",
  menu: "Menu",
  theme: "Alternar tema",
  present: "atual",
};

export type UiKey = keyof typeof uiPt;

export const ui: Record<Lang, Record<UiKey, string>> = {
  pt: uiPt,
  en: {
    cv: "View CV",
    cvDev: "Developer CV",
    cvDesign: "Design Portfolio",
    hi: "Hi, I'm",
    h1a: "",
    h1b: "Full stack",
    h1c: " Developer & ",
    h1d: " UX/UI Designer",
    intro:
      "Computer Science student at UFRJ, focused on data engineering, AI and full stack development. I build products from database to interface, with the same care in code and in design.",
    contactCta: "Get in touch",
    photo: "[ photo · 4:5 ]",
    print: "screenshot",
    cover: "cover",
    navProj: "Projects",
    navDesign: "Design",
    navExp: "Experience",
    navContact: "Contact",
    expTitle: "Experience",
    skillsTitle: "Skills",
    skillsSub: "Tools I use every day, from code to design.",
    devTitle: "Development Projects",
    designTitle: "Design Projects",
    contactTitle: "Let's talk",
    view: "View project",
    code: "Code",
    demo: "Website",
    all: "View all",
    allProjects: "All projects",
    allProjectsSub: "University work, research labs and technical challenges, newest first.",
    top: "Top",
    foot: "Rio de Janeiro, Brazil",
    result: "Result",
    context: "Context and problem",
    myRole: "My role",
    stack: "Stack",
    decisions: "Technical decisions",
    gallery: "Screen gallery",
    role: "Role",
    period: "Period",
    status: "Status",
    fullPdf: "View full portfolio",
    fAll: "All",
    fDev: "Dev",
    fDesign: "Design",
    fRes: "Research",
    fEns: "Teaching",
    fLead: "Leadership",
    tools: "Tools",
    close: "Close",
    showMore: "Show more",
    showLess: "Show less",
    menu: "Menu",
    theme: "Toggle theme",
    present: "present",
  },
};

/* ───────────────────────── Skills ───────────────────────── */

export const skills: { id: string; title: L; color: string; items: string[] }[] = [
  {
    id: "front",
    title: { pt: "Frontend", en: "Frontend" },
    color: "#FFB020",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind", "HTML", "CSS"],
  },
  {
    id: "back",
    title: { pt: "Backend", en: "Backend" },
    color: "#2BD67B",
    items: ["Node.js", "Express", "Python", "FastAPI", "Laravel", "PHP", "SQL"],
  },
  {
    id: "data",
    title: { pt: "Dados", en: "Data" },
    color: "#3CC8F0",
    items: ["Pandas", "NumPy", "Streamlit", "BigQuery", "Grafana", "Power BI"],
  },
  {
    id: "design",
    title: { pt: "Design", en: "Design" },
    color: "#FF5C93",
    items: ["Figma", "Photoshop", "Illustrator", "After Effects", "Canva"],
  },
  {
    id: "tools",
    title: { pt: "Ferramentas & IA", en: "Tools & AI" },
    color: "#B794F6",
    items: ["Git", "GitHub", "Docker", "Jest", "Claude", "Cursor", "Gemini"],
  },
];

/* ───────────────────────── Experiência ───────────────────────── */

export type ExpType = "dev" | "design" | "res" | "ens" | "lead";

export type Experience = {
  type: ExpType;
  role: L;
  org: string;
  start: string;
  end?: string;
  points: L[];
  award?: L;
  tags: string[];
  featured?: boolean;
};

export const experience: Experience[] = [
  {
    featured: true,
    type: "dev",
    role: { pt: "Estagiário de TI - Full Stack", en: "IT Intern - Full Stack" },
    org: "Destaque Gestão Documental",
    start: "2026-01",
    points: [
      {
        pt: "Desenvolvo e refatoro funcionalidades de uma plataforma usada por pesquisadores: React integrado a uma API Laravel/PHP com MySQL, incluindo migrations, queries e regras de negócio.",
        en: "Build and refactor features of a platform used by researchers: React on top of a Laravel/PHP API with MySQL, including migrations, queries and business rules.",
      },
      {
        pt: "Criei um design system que padronizou o front-end, com componentes e hooks reutilizáveis.",
        en: "Created a design system that standardized the front end, with reusable components and hooks.",
      },
      {
        pt: "Corrigi bugs de paginação, navegação e a causa raiz de um bug de imagens, com entregas via PRs revisados em git flow.",
        en: "Fixed pagination and navigation bugs and the root cause of an image bug, shipping through reviewed PRs in git flow.",
      },
    ],
    tags: ["React", "Laravel", "PHP", "MySQL", "Git"],
  },
  {
    featured: true,
    type: "dev",
    role: { pt: "Iniciação Científica", en: "Undergraduate Research" },
    org: "Lab. de Métodos de Suporte à Decisão · IM/UFRJ",
    start: "2025-09",
    points: [
      {
        pt: "Pipeline de dados que replica um fluxo de ERP corporativo (CDC com Debezium e Kafka, ingestão em Apache Iceberg), em parceria com a ExxonMobil.",
        en: "Data pipeline replicating a corporate ERP flow (CDC with Debezium and Kafka, ingestion into Apache Iceberg), in partnership with ExxonMobil.",
      },
      {
        pt: "Dashboard inicial em Streamlit, em migração para Grafana e Power BI, transformando saídas técnicas em KPIs para usuários não técnicos.",
        en: "First dashboard in Streamlit, now moving to Grafana and Power BI, turning technical output into KPIs for non-technical users.",
      },
    ],
    award: {
      pt: "Premiado em Divulgação Científica na Semana de Integração Acadêmica UFRJ 2026",
      en: "Science Communication award at UFRJ Academic Integration Week 2026",
    },
    tags: ["Python", "Streamlit", "Grafana", "Power BI"],
  },
  {
    type: "ens",
    role: { pt: "Monitor do Laboratório de Informática", en: "Computer Lab Assistant" },
    org: "Instituto de Matemática · UFRJ",
    start: "2026-04",
    points: [
      {
        pt: "Modernização do site institucional do Instituto de Matemática e suporte técnico (software, rede e sistemas) a alunos e professores.",
        en: "Modernizing the Mathematics Institute website and providing technical support (software, network and systems) to students and faculty.",
      },
    ],
    tags: ["WordPress"],
  },
  {
    type: "ens",
    role: { pt: "Monitor de Álgebra Linear Algorítmica", en: "TA - Algorithmic Linear Algebra" },
    org: "Instituto de Computação · UFRJ",
    start: "2025-08",
    end: "2026-07",
    points: [
      {
        pt: "Material computacional e laboratórios da disciplina; em 2026, gestor da equipe de monitores.",
        en: "Computational material and labs for the course; in 2026, managed the TA team.",
      },
    ],
    tags: ["Python", "Colab"],
  },
  {
    type: "dev",
    role: { pt: "Iniciação Científica", en: "Undergraduate Research" },
    org: "Lab. de Modelagem Molecular e QSAR · Farmácia/UFRJ",
    start: "2025-04",
    end: "2025-09",
    points: [
      {
        pt: "Mantive bancos PostgreSQL sobre Doenças Tropicais Negligenciadas e desenvolvi uma aplicação web para acesso aos dados e aos modelos preditivos.",
        en: "Maintained PostgreSQL databases on Neglected Tropical Diseases and built a web app to access the data and predictive models.",
      },
    ],
    tags: ["PostgreSQL", "React", "Drizzle"],
  },
  {
    type: "lead",
    role: { pt: "Presidente do Centro Acadêmico de Informática", en: "President, Informatics Student Union" },
    org: "CAInfo · Instituto de Computação/UFRJ",
    start: "2024-09",
    end: "2025-10",
    points: [
      {
        pt: "Liderei a gestão do centro acadêmico e representei os estudantes do Instituto de Computação perante a direção e outras entidades.",
        en: "Led the student union and represented Computing Institute students before the faculty board and other organizations.",
      },
    ],
    tags: [],
  },
  {
    featured: true,
    type: "ens",
    role: { pt: "Monitor de Estrutura de Dados", en: "TA - Data Structures" },
    org: "Instituto de Computação · UFRJ",
    start: "2024-08",
    end: "2025-07",
    points: [
      {
        pt: "Apoio a alunos em algoritmos, estruturas de dados e ordenação.",
        en: "Helped students with algorithms, data structures and sorting.",
      },
    ],
    tags: ["C"],
  },
  {
    featured: true,
    type: "dev",
    role: { pt: "Desenvolvedor Front-End", en: "Front-End Developer" },
    org: "EJCM · Empresa Júnior",
    start: "2024-06",
    end: "2025-02",
    points: [
      {
        pt: "Interfaces responsivas para sites e aplicativos de clientes com React e WordPress, a partir de protótipos no Figma.",
        en: "Responsive interfaces for client websites and apps with React and WordPress, built from Figma prototypes.",
      },
    ],
    tags: ["React", "WordPress"],
  },
  {
    type: "design",
    role: { pt: "Assessor de Marketing", en: "Marketing Advisor" },
    org: "Athene · Projeto de Extensão UFRJ",
    start: "2023-12",
    end: "2024-08",
    points: [
      {
        pt: "Criação de conteúdo sobre empreendedorismo sustentável para Instagram e LinkedIn.",
        en: "Content on sustainable entrepreneurship for Instagram and LinkedIn.",
      },
      {
        pt: "Capacitações de Figma e análise de insights de redes sociais para novos trainees.",
        en: "Figma and social-media insights training for new trainees.",
      },
    ],
    tags: ["Figma"],
  },
  {
    featured: true,
    type: "design",
    role: {
      pt: "UX/UI Designer, Marketing e Gestão de Pessoas",
      en: "UX/UI Designer, Marketing & People Management",
    },
    org: "EJCM · Empresa Júnior",
    start: "2023-03",
    end: "2024-05",
    points: [
      {
        pt: "Estruturei e entreguei um projeto digital com Scrum e Design Thinking, da pesquisa UX à interface no Figma.",
        en: "Structured and delivered a digital project with Scrum and Design Thinking, from UX research to the Figma UI.",
      },
      {
        pt: "Estratégia de conteúdo, copywriting e posts para redes sociais, e apoio ao departamento de gestão de pessoas.",
        en: "Content strategy, copywriting and social posts, plus support to the people-management department.",
      },
    ],
    tags: ["Figma"],
  },
];

/* ───────────────────────── Projetos de desenvolvimento ───────────────────────── */

export type DevCase = {
  lead: L;
  role: L;
  period: L;
  status: L;
  context: L;
  myRole: L;
  stack: string[];
  decisions: { title: L; body: L }[];
  gallery: Img[];
  result: L;
};

export type DevProject = {
  slug: string;
  title: L;
  summary: L;
  tags: string[];
  repos: string[];
  demo?: string;
  year: string;
  cover?: string;
  featured?: boolean;
  case?: DevCase;
};

const gh = (repo: string) => `https://github.com/borges-1802/${repo}`;

export const devProjects: DevProject[] = [
  {
    slug: "painel-monitoramento",
    featured: true,
    title: { pt: "Painel de monitoramento social", en: "Social monitoring dashboard" },
    summary: {
      pt: "Sistema para técnicos municipais acompanharem crianças em vulnerabilidade, cruzando dados de saúde, educação e assistência social.",
      en: "System for city case workers to follow vulnerable children, combining health, education and social-assistance data.",
    },
    tags: ["Next.js", "Express", "SQLite", "Docker", "Testes"],
    repos: [gh("desafio-painel-full-stack")],
    demo: "https://desafio-painel-prefeitura-jvborges.vercel.app/",
    year: "2026",
    cover: "/images/projetos/painel-dashboard.webp",
    case: {
      lead: {
        pt: "Painel full stack com login, filtros, mapa e revisão de casos, testado do backend ao navegador.",
        en: "Full stack dashboard with login, filters, map and case review, tested from backend to browser.",
      },
      role: { pt: "Design + Full stack", en: "Design + Full stack" },
      period: { pt: "abr/2026", en: "Apr 2026" },
      status: { pt: "No ar (Vercel + Render)", en: "Live (Vercel + Render)" },
      context: {
        pt: "Desafio técnico inspirado na Prefeitura do Rio: técnicos precisam enxergar, em um só lugar, os alertas de saúde, educação e assistência social de cada criança e marcar quais casos já foram revisados.",
        en: "Technical challenge inspired by Rio's city hall: case workers need to see each child's health, education and social-assistance alerts in one place and mark which cases were reviewed.",
      },
      myRole: {
        pt: "Fiz o projeto sozinho: modelagem do banco, API REST com autenticação, interface com mapa e gráficos, testes unitários e E2E, Docker e deploy.",
        en: "Built it solo: database model, REST API with authentication, interface with map and charts, unit and E2E tests, Docker and deployment.",
      },
      stack: ["Next.js 16", "TypeScript", "Tailwind 4", "shadcn/ui", "React Query", "Leaflet", "Recharts", "Express 5", "SQLite", "JWT", "Jest", "Vitest", "Playwright", "Docker"],
      decisions: [
        {
          title: { pt: "SQLite em vez de PostgreSQL", en: "SQLite instead of PostgreSQL" },
          body: {
            pt: "Sem servidor extra no Docker Compose e WAL ativado para leituras concorrentes. Trade-off documentado: com muitos escritores simultâneos, PostgreSQL seria a escolha.",
            en: "No extra server in Docker Compose and WAL enabled for concurrent reads. Documented trade-off: with many concurrent writers, PostgreSQL would be the choice.",
          },
        },
        {
          title: { pt: "JWT em cookie SameSite=Strict", en: "JWT in a SameSite=Strict cookie" },
          body: {
            pt: "O middleware do Next.js redireciona para o login antes de renderizar, sem piscar conteúdo protegido, e o cookie reduz o risco de CSRF.",
            en: "Next.js middleware redirects to login before rendering, with no flash of protected content, and the cookie reduces CSRF risk.",
          },
        },
        {
          title: { pt: "Resumo calculado em um único loop", en: "Summary computed in a single loop" },
          body: {
            pt: "O endpoint de métricas percorre os registros uma vez só, em O(n), independente de quantos indicadores são calculados.",
            en: "The metrics endpoint walks the records once, O(n), regardless of how many indicators are computed.",
          },
        },
        {
          title: { pt: "Testes em três camadas", en: "Tests in three layers" },
          body: {
            pt: "Jest + Supertest na API, Vitest + Testing Library nos componentes e Playwright no fluxo completo, em desktop e mobile.",
            en: "Jest + Supertest on the API, Vitest + Testing Library on components and Playwright end to end, on desktop and mobile.",
          },
        },
      ],
      gallery: [
        { label: { pt: "login", en: "login" }, src: "/images/projetos/painel-login.webp" },
        { label: { pt: "painel", en: "dashboard" }, src: "/images/projetos/painel-dashboard.webp" },
        { label: { pt: "lista de crianças", en: "children list" }, src: "/images/projetos/painel-lista.webp" },
      ],
      result: {
        pt: "Aplicação publicada, com README documentando arquitetura, decisões e trade-offs. O backend gratuito pode levar até 60 s para acordar no primeiro acesso.",
        en: "Published app, with a README documenting architecture, decisions and trade-offs. The free backend may take up to 60 s to wake up on first access.",
      },
    },
  },
  {
    slug: "svd-compressao",
    featured: true,
    title: { pt: "Compressão de imagens por SVD", en: "SVD image compression" },
    summary: {
      pt: "Aplicação que comprime imagens com SVD e verifica na prática o teorema de Eckart-Young-Mirsky.",
      en: "App that compresses images with SVD and empirically checks the Eckart-Young-Mirsky theorem.",
    },
    tags: ["FastAPI", "NumPy", "React", "KaTeX"],
    repos: [gh("trabalho-final-cocada-26-1")],
    year: "2026",
    cover: "/images/projetos/svd.webp",
    case: {
      lead: {
        pt: "Ferramenta web que mostra, passo a passo, como a decomposição em valores singulares comprime uma imagem.",
        en: "Web tool that shows, step by step, how singular value decomposition compresses an image.",
      },
      role: { pt: "Design + Desenvolvimento", en: "Design + Development" },
      period: { pt: "jul/2026", en: "Jul 2026" },
      status: { pt: "Trabalho final de disciplina", en: "Course final project" },
      context: {
        pt: "Projeto final de Computação Científica e Análise de Dados (UFRJ, 2026.1). A ideia era tornar visível o que os teoremas dizem: por que truncar a SVD nos k maiores valores singulares dá a melhor aproximação possível da imagem.",
        en: "Final project for Scientific Computing and Data Analysis (UFRJ, 2026.1). The goal was to make the theorems visible: why truncating the SVD at the k largest singular values gives the best possible approximation of the image.",
      },
      myRole: {
        pt: "Interface, API, implementação numérica e a página de teoria com as fórmulas.",
        en: "Interface, API, numerical implementation and the theory page with the formulas.",
      },
      stack: ["Python", "FastAPI", "NumPy", "SciPy", "Pillow", "React 18", "TypeScript", "Chart.js", "KaTeX"],
      decisions: [
        {
          title: { pt: "Processamento no backend", en: "Backend processing" },
          body: {
            pt: "NumPy e SciPy (SVD truncada via ARPACK) calculam a decomposição por canal RGB e devolvem a imagem reconstruída para cada k.",
            en: "NumPy and SciPy (truncated SVD via ARPACK) decompose each RGB channel and return the reconstructed image for each k.",
          },
        },
        {
          title: { pt: "Compressão por região", en: "Region-based compression" },
          body: {
            pt: "O usuário seleciona uma área com o mouse e escolhe entre SVD global com máscara ou SVD por blocos de 128×128.",
            en: "The user selects an area with the mouse and chooses between a global SVD with a mask or per-tile SVD on 128×128 blocks.",
          },
        },
        {
          title: { pt: "Teoria × medida", en: "Theory × measurement" },
          body: {
            pt: "A tela de análise compara o erro previsto pela norma de Frobenius com o medido pixel a pixel, e mostra a instabilidade de calcular σ via √λ(AᵀA).",
            en: "The analysis screen compares the error predicted by the Frobenius norm with the pixel-by-pixel measurement, and shows the instability of computing σ via √λ(AᵀA).",
          },
        },
      ],
      gallery: [
        { label: { pt: "compressor", en: "compressor" }, src: "/images/projetos/svd.webp" },
        { label: { pt: "análise", en: "analysis" }, src: "/images/projetos/svd-analise.webp" },
        { label: { pt: "teoria", en: "theory" }, src: "/images/projetos/svd-teoria.webp" },
      ],
      result: {
        pt: "Três telas (Compressor, Análise e Teoria) e sete endpoints. Nos gráficos, a SVD fica sempre abaixo das alternativas, comprovando a otimalidade do teorema.",
        en: "Three screens (Compressor, Analysis and Theory) and seven endpoints. In the charts, SVD always sits below the alternatives, confirming the theorem's optimality.",
      },
    },
  },
  {
    slug: "flowchart",
    featured: true,
    title: { pt: "Flowchart - planejador de grade curricular", en: "Flowchart - curriculum planner" },
    summary: {
      pt: "Fluxograma interativo do curso de Ciência da Computação da UFRJ, com montagem de grade de horários e créditos.",
      en: "Interactive flowchart of UFRJ's Computer Science program, with timetable planning and credit tracking.",
    },
    tags: ["React", "TypeScript", "Tailwind"],
    repos: [gh("flowchart")],
    demo: "https://borges-1802.github.io/flowchart/",
    year: "2026",
    cover: "/images/projetos/flowchart.webp",
    case: {
      lead: {
        pt: "Nova versão do fluxograma do curso: marcar disciplinas concluídas, montar grades de horário e acompanhar créditos.",
        en: "A new version of the program flowchart: mark completed courses, build timetables and track credits.",
      },
      role: { pt: "Design + Desenvolvimento", en: "Design + Development" },
      period: { pt: "set/2026", en: "Sep 2026" },
      status: { pt: "No ar (GitHub Pages)", en: "Live (GitHub Pages)" },
      context: {
        pt: "Alunos planejam o curso cruzando PDF de grade, pré-requisitos e horários de turmas. Esta versão reconstrói o fluxograma interativo criado originalmente por outro aluno, com novas funções de planejamento.",
        en: "Students plan their degree by cross-checking curriculum PDFs, prerequisites and class times. This version rebuilds the interactive flowchart originally created by another student, adding planning features.",
      },
      myRole: {
        pt: "Interface, modelagem dos dados das disciplinas e turmas em JSON, regras de pré-requisito e conflito de horário, exportação e instalação como app (PWA).",
        en: "Interface, course and class data modeled in JSON, prerequisite and schedule-conflict rules, image export and installable app (PWA).",
      },
      stack: ["React 19", "TypeScript", "Tailwind 4", "Vite", "React Router", "html-to-image"],
      decisions: [
        {
          title: { pt: "Dados em JSON versionado", en: "Data in versioned JSON" },
          body: {
            pt: "Disciplinas, eletivas, turmas e atividades complementares ficam em arquivos JSON, o que permite atualizar o período sem backend.",
            en: "Courses, electives, classes and complementary activities live in JSON files, so a new term can be updated without a backend.",
          },
        },
        {
          title: { pt: "Estado persistido no navegador", en: "State persisted in the browser" },
          body: {
            pt: "Um hook de estado persistido guarda progresso e até três grades nomeadas para comparar opções de horário.",
            en: "A persisted-state hook stores progress and up to three named timetables to compare schedule options.",
          },
        },
        {
          title: { pt: "Regras visíveis na interface", en: "Rules visible in the interface" },
          body: {
            pt: "Pré-requisitos e disciplinas destravadas são destacados ao selecionar, e conflitos de horário aparecem como selo antes de encaixar.",
            en: "Prerequisites and unlocked courses are highlighted on selection, and schedule conflicts show up as a badge before placing a class.",
          },
        },
      ],
      gallery: [
        { label: { pt: "fluxograma", en: "flowchart" }, src: "/images/projetos/flowchart.webp" },
        { label: { pt: "grade", en: "timetable" }, src: "/images/projetos/flowchart-grade.webp" },
        { label: { pt: "complementares", en: "activities" }, src: "/images/projetos/flowchart-complementares.webp" },
      ],
      result: {
        pt: "Publicado no GitHub Pages e instalável como app, com fluxograma, grade de horários, contador de créditos, atividades complementares e exportação como imagem.",
        en: "Published on GitHub Pages and installable as an app, with flowchart, timetable, credit counter, complementary activities and image export.",
      },
    },
  },
  {
    slug: "site-ala",
    title: { pt: "Site de Álgebra Linear Algorítmica", en: "Algorithmic Linear Algebra website" },
    summary: {
      pt: "Site da disciplina ICP115 do IC/UFRJ, reunindo laboratórios e materiais em Google Colab.",
      en: "Website for course ICP115 at IC/UFRJ, bringing together labs and Google Colab materials.",
    },
    tags: ["React", "TypeScript", "Tailwind"],
    repos: [gh("Site-ALA")],
    demo: "https://ic.ufrj.br/~algebralinear/",
    year: "2026",
    cover: "/images/projetos/site-ala.webp",
    case: {
      lead: {
        pt: "Site oficial da disciplina, hospedado no IC/UFRJ, com laboratórios práticos e materiais de apoio.",
        en: "The course's website, hosted at IC/UFRJ, with hands-on labs and study material.",
      },
      role: { pt: "Monitor + Desenvolvimento", en: "TA + Development" },
      period: { pt: "2025-2026", en: "2025-2026" },
      status: { pt: "No ar (ic.ufrj.br)", en: "Live (ic.ufrj.br)" },
      context: {
        pt: "Uma reformulação curricular deu à disciplina uma abordagem mais aplicada, ligada a ciência de dados e IA. Os laboratórios em Colab precisavam de um lugar único e organizado.",
        en: "A curriculum reform gave the course a more applied approach, tied to data science and AI. The Colab labs needed a single, organized home.",
      },
      myRole: {
        pt: "Como monitor, produzi parte do material computacional e construí o site que organiza os laboratórios por tema.",
        en: "As a TA, I produced part of the computational material and built the site that organizes the labs by topic.",
      },
      stack: ["React 19", "TypeScript", "Tailwind 4", "Vite", "Google Colab"],
      decisions: [
        {
          title: { pt: "Site estático", en: "Static site" },
          body: {
            pt: "Gerado com Vite e publicado no servidor do instituto, sem backend para manter.",
            en: "Built with Vite and published on the institute's server, with no backend to maintain.",
          },
        },
        {
          title: { pt: "Laboratórios no Colab", en: "Labs on Colab" },
          body: {
            pt: "Os alunos abrem cada laboratório direto no navegador, sem instalar Python.",
            en: "Students open each lab straight in the browser, without installing Python.",
          },
        },
      ],
      gallery: [
        { label: { pt: "início", en: "home" }, src: "/images/projetos/site-ala.webp" },
        { label: { pt: "laboratórios", en: "labs" }, src: "/images/projetos/site-ala-labs.webp" },
        { label: { pt: "ementa", en: "syllabus" }, src: "/images/projetos/site-ala-ementa.webp" },
      ],
      result: {
        pt: "Publicado em ic.ufrj.br/~algebralinear e usado pelos alunos da disciplina.",
        en: "Published at ic.ufrj.br/~algebralinear and used by the course's students.",
      },
    },
  },
  {
    slug: "github-dashboard",
    title: { pt: "Dashboard de repositórios do GitHub", en: "GitHub repository dashboard" },
    summary: {
      pt: "Busca o repositório mais popular para um termo e mostra estrelas, forks, commits e linguagens.",
      en: "Finds the most popular repository for a search term and shows stars, forks, commits and languages.",
    },
    tags: ["React", "FastAPI", "Recharts"],
    repos: [gh("projeto-Destaque")],
    demo: "https://projeto-destaque-frontend.vercel.app/",
    year: "2026",
    cover: "/images/projetos/github-dashboard.webp",
  },
  {
    slug: "onibus-fundao",
    title: { pt: "Atrasos dos ônibus do Fundão", en: "Fundão bus delays" },
    summary: {
      pt: "Análise e dashboard dos atrasos das linhas do campus, com clusters K-Means no BigQuery ML, PCA e mapa.",
      en: "Analysis and dashboard of campus bus delays, with K-Means clusters in BigQuery ML, PCA and a map.",
    },
    tags: ["Python", "Streamlit", "BigQuery", "Plotly"],
    repos: [gh("projeto-streamlit-cocada"), gh("projeto-final-cocada")],
    year: "2025",
    cover: "/images/projetos/atrasos.webp",
  },
  {
    slug: "lamdec",
    title: { pt: "Painel de Dívida Ativa (LAMDEC)", en: "Tax debt dashboard (LAMDEC)" },
    summary: {
      pt: "Métricas de Certidões de Dívida Ativa com busca por ano e ordenação, servidas por uma API própria.",
      en: "Metrics on tax debt certificates with search by year and sorting, served by its own API.",
    },
    tags: ["React", "FastAPI", "Recharts"],
    repos: [gh("projeto-front-lamdec")],
    year: "2025",
    cover: "/images/projetos/lamdec.webp",
  },
  {
    slug: "modmolqsar",
    title: { pt: "Site do Laboratório ModMolQSAR", en: "ModMolQSAR lab website" },
    summary: {
      pt: "Site do laboratório da Faculdade de Farmácia, com banco de compostos e previsões de mutagenicidade.",
      en: "Website for the Pharmacy School lab, with a compound database and mutagenicity predictions.",
    },
    tags: ["React", "PostgreSQL", "Drizzle"],
    repos: [gh("LabModMol")],
    year: "2025",
    cover: "/images/projetos/modmol.webp",
  },
];

/* ───────────────────────── Projetos de design ───────────────────────── */

export type DesignProject = {
  slug: string;
  kicker: L;
  title: L;
  body: L;
  year?: string;
  hex?: string;
  tone: "acc" | "ink" | "surface" | string;
  fg?: string;
  images: Img[];
};

export const designProjects: DesignProject[] = [
  {
    slug: "katalisar",
    kicker: { pt: "Concepção Digital", en: "Digital Design" },
    title: { pt: "Katalisar", en: "Katalisar" },
    body: {
      pt: "Concepção de app para uma startup socioambiental: pesquisa UX com Double Diamond e cerca de 1000 telas prototipadas no Figma.",
      en: "App concept for a social-environmental startup: UX research with Double Diamond and about 1,000 screens prototyped in Figma.",
    },
    year: "2023-2024",
    tone: "acc",
    images: [{ label: { pt: "tela 01", en: "screen 01" }, src: "/images/design/katalisar.webp" }, { label: { pt: "tela 02", en: "screen 02" } }],
  },
  {
    slug: "paddock-news",
    kicker: { pt: "Identidade Visual", en: "Visual Identity" },
    title: { pt: "Paddock News", en: "Paddock News" },
    body: {
      pt: "Portal de notícias de automobilismo nacional e internacional. Entrei por processo seletivo em 2023 e sou o único designer.",
      en: "News portal on national and international motorsport. Joined through a selection process in 2023 and I'm its only designer.",
    },
    year: "2023",
    hex: "#0E0E0E",
    tone: "#0E0E0E",
    fg: "#ffffff",
    images: [{ label: { pt: "post 01", en: "post 01" }, src: "/images/design/paddock.webp" }],
  },
  {
    slug: "cainfo",
    kicker: { pt: "Rebranding", en: "Rebranding" },
    title: { pt: "CAInfo", en: "CAInfo" },
    body: {
      pt: "Centro Acadêmico de Informática da UFRJ. Mantive as redes ativas e repadronizei a marca com uma nova paleta, sem perder os traços atuais.",
      en: "UFRJ's Informatics Student Union. I kept its social media running and restyled the brand with a new palette, keeping its current traits.",
    },
    year: "2024",
    hex: "#8ED8F8",
    tone: "#8ED8F8",
    fg: "#0B1630",
    images: [{ label: { pt: "identidade", en: "identity" }, src: "/images/design/cainfo.webp" }],
  },
  {
    slug: "marketing",
    kicker: { pt: "Marketing", en: "Marketing" },
    title: { pt: "EJCM e Athene", en: "EJCM & Athene" },
    body: {
      pt: "Copywriting, posts, carrosséis e endomarketing para Instagram e LinkedIn.",
      en: "Copywriting, posts, carousels and internal marketing for Instagram and LinkedIn.",
    },
    year: "2023-2024",
    tone: "surface",
    images: [{ label: { pt: "carrossel", en: "carousel" }, src: "/images/design/ejcm-marketing.webp" }, { label: { pt: "Athene", en: "Athene" }, src: "/images/design/athene.webp" }],
  },
  {
    slug: "loja-galega",
    kicker: { pt: "Identidade Visual", en: "Visual Identity" },
    title: { pt: "Loja Galega", en: "Loja Galega" },
    body: {
      pt: "Salgadinhos para festa. Identidade visual e cardápio com cores que remetem ao apetite e à paixão pela comida.",
      en: "Party snacks business. Visual identity and menu with colors that evoke appetite and a passion for food.",
    },
    year: "2022",
    tone: "surface",
    images: [{ label: { pt: "cardápio", en: "menu" }, src: "/images/design/loja-galega.webp" }],
  },
  {
    slug: "esports",
    kicker: { pt: "Torneios E-sports", en: "E-sports Tournaments" },
    title: { pt: "Pacote gráfico", en: "Graphic package" },
    body: {
      pt: "Artes para campeonatos de FIFA que eu organizava, inspiradas em grandes competições de futebol, usadas em lives no meu canal.",
      en: "Artwork for FIFA tournaments I organized, inspired by major football competitions and used in livestreams on my channel.",
    },
    tone: "ink",
    images: [{ label: { pt: "arte 01", en: "artwork 01" }, src: "/images/design/esports.webp" }],
  },
  {
    slug: "manipulacao",
    kicker: { pt: "Manipulação de imagens", en: "Image manipulation" },
    title: { pt: "Ambientação e swapping", en: "Scene setting & swapping" },
    body: {
      pt: "Experimentos no Photoshop: antes e depois de composições e trocas de cenário.",
      en: "Photoshop experiments: before and after compositions and scene swaps.",
    },
    tone: "surface",
    images: [{ label: { pt: "original", en: "original" }, src: "/images/design/manipulacao.webp" }, { label: { pt: "finalizada", en: "final" } }],
  },
];

/* ───────────────────────── Utilidades ───────────────────────── */

export function duration(start: string, end: string | undefined, lang: Lang, now = new Date()) {
  const [sy, sm] = start.split("-").map(Number);
  const [ey, em] = end ? end.split("-").map(Number) : [now.getFullYear(), now.getMonth() + 1];
  const months = (ey - sy) * 12 + (em - sm) + 1;
  const y = Math.floor(months / 12);
  const m = months % 12;
  if (lang === "pt") return [y ? `${y} a` : "", m ? `${m} m` : ""].filter(Boolean).join(" ");
  return [y ? `${y} yr` : "", m ? `${m} mo` : ""].filter(Boolean).join(" ");
}

const MONTHS: Record<Lang, string[]> = {
  pt: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};

export function period(start: string, end: string | undefined, lang: Lang) {
  const f = (s: string) => {
    const [y, m] = s.split("-").map(Number);
    return lang === "pt" ? `${MONTHS.pt[m - 1]}/${y}` : `${MONTHS.en[m - 1]} ${y}`;
  };
  return `${f(start)}-${end ? f(end) : ui[lang].present}`;
}

