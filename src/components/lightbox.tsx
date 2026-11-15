"use client";

import Image from "next/image";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { usePrefs } from "./providers";

type Item = { src: string; alt: string };
type Ctx = { open: (items: Item[], index: number) => void };

const LightboxContext = createContext<Ctx | null>(null);

/** Envolve uma página e permite abrir qualquer imagem em tela cheia, com zoom. */
export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const { t } = usePrefs();
  const [items, setItems] = useState<Item[]>([]);
  const [index, setIndex] = useState(-1);
  const [zoom, setZoom] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnTo = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setIndex(-1);
    setZoom(false);
  }, []);
  const go = useCallback(
    (d: number) => {
      setZoom(false);
      setIndex((i) => (i + d + items.length) % items.length);
    },
    [items.length]
  );

  const isOpen = index >= 0;

  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();
    return () => returnTo.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (index < 0) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "Tab" && dialogRef.current) {
        const els = [...dialogRef.current.querySelectorAll<HTMLElement>("button")];
        if (!els.length) return;
        const first = els[0];
        const last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, go]);

  const open = useCallback((list: Item[], i: number) => {
    returnTo.current = document.activeElement as HTMLElement | null;
    setItems(list);
    setIndex(i);
    setZoom(false);
  }, []);

  const current = index >= 0 ? items[index] : null;

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {current && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-100 flex flex-col bg-[#060a14]/92 backdrop-blur-sm"
          onClick={close}
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3 text-sm text-white/80 md:px-6">
            <span className="truncate">
              {current.alt}
              {items.length > 1 && <span className="ml-2 text-white/50">{index + 1}/{items.length}</span>}
            </span>
            <div className="flex flex-none gap-2" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={() => setZoom((z) => !z)}
                className="cursor-pointer rounded-lg bg-white/10 px-3 py-1.5 font-semibold text-white hover:bg-white/20"
              >
                {zoom ? "−" : "+"} Zoom
              </button>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label={t("close")}
                className="cursor-pointer rounded-lg bg-white/10 px-3 py-1.5 font-semibold text-white hover:bg-white/20"
              >
                ✕
              </button>
            </div>
          </div>

          <div
            className={`relative flex-1 ${zoom ? "overflow-auto" : "overflow-hidden"} px-4 pb-4 md:px-16 md:pb-8`}
            onClick={(e) => e.target === e.currentTarget && close()}
          >
            {zoom ? (
              <Image
                src={current.src}
                alt={current.alt}
                width={2400}
                height={1500}
                className="mx-auto h-auto w-[200%] max-w-none cursor-zoom-out md:w-[160%]"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoom(false);
                }}
              />
            ) : (
              <div className="flex size-full items-center justify-center" onClick={close}>
                <Image
                  src={current.src}
                  alt={current.alt}
                  width={2400}
                  height={1500}
                  sizes="100vw"
                  className="h-auto max-h-full w-auto max-w-full cursor-zoom-in rounded-lg object-contain"
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoom(true);
                  }}
                />
              </div>
            )}

          </div>
        </div>
      )}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox precisa estar dentro de <LightboxProvider>");
  return ctx;
}
