"use client";

import { usePathname, useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useSyncExternalStore } from "react";
import { ui, type L, type Lang, type UiKey } from "@/content/data";

type Theme = "light" | "dark";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: (key: UiKey) => string;
  l: (value: L) => string;
  href: (path: string) => string;
};

/** Converte um caminho interno para o idioma pedido ("/projetos" ↔ "/en/projetos"). */
export function localize(path: string, lang: Lang) {
  const base = path.replace(/^\/en(?=\/|#|$)/, "") || "/";
  if (lang === "pt") return base;
  if (base === "/") return "/en";
  if (base.startsWith("/#")) return "/en" + base.slice(1);
  return "/en" + base;
}

const PrefsContext = createContext<Ctx | null>(null);

function write(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
  }
}

// O idioma vem da URL (/en/... = inglês). O tema fica num pequeno "store":
// o HTML estático sai claro e, no navegador, a preferência salva assume.
const listeners = new Set<() => void>();
const subscribe = (fn: () => void) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};
const notify = () => listeners.forEach((fn) => fn());

const getTheme = (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "/";
  const router = useRouter();
  const lang: Lang = /^\/en(\/|$)/.test(pathname) ? "en" : "pt";
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light" as Theme);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const setLang = useCallback(
    (l: Lang) => {
      if (l === lang) return;
      router.push(localize(pathname + window.location.hash, l));
    },
    [lang, pathname, router]
  );

  const toggleTheme = useCallback(() => {
    const next = getTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    write("theme", next);
    notify();
  }, []);

  const t = useCallback((key: UiKey) => ui[lang][key], [lang]);
  const l = useCallback((value: L) => value[lang], [lang]);
  const href = useCallback((path: string) => localize(path, lang), [lang]);

  return (
    <PrefsContext.Provider value={{ lang, setLang, theme, toggleTheme, t, l, href }}>
      {children}
    </PrefsContext.Provider>
  );
}

export function usePrefs() {
  const ctx = useContext(PrefsContext);
  if (!ctx) throw new Error("usePrefs precisa estar dentro de <Providers>");
  return ctx;
}

export const themeScript = `(function(){var d=document.documentElement;d.classList.add('js');if(location.pathname==='/en'||location.pathname.indexOf('/en/')===0)d.lang='en';try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='light'}})();`;
