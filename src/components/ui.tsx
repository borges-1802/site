"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function Shot({
  src,
  label,
  alt,
  className = "",
  stripeColor,
  labelClass = "bg-bg border-ink text-ink",
  position = "center",
  priority = false,
}: {
  src?: string;
  label: string;
  alt?: string;
  className?: string;
  stripeColor?: string;
  labelClass?: string;
  /** object-position da imagem, ex.: "50% 30%" */
  position?: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <div className={`${className.includes("absolute") ? "" : "relative"} overflow-hidden ${className}`}>
        <Image src={src} alt={alt ?? label} fill priority={priority} sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" style={{ objectPosition: position }} />
      </div>
    );
  }
  const style = stripeColor
    ? { background: `repeating-linear-gradient(135deg, transparent 0 10px, ${stripeColor} 10px 20px)` }
    : undefined;
  return (
    <div className={`flex items-end p-3 ${stripeColor ? "" : "stripes"} ${className}`} style={style} aria-hidden>
      <span className={`rounded-md border-2 px-2 py-0.5 text-xs font-medium ${labelClass}`}>{label}</span>
    </div>
  );
}

export function SectionHead({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-5">
      <h2 className="font-display text-[28px] font-bold leading-tight tracking-[-0.02em] sm:text-[34px] md:text-[44px]">{title}</h2>
      {children}
    </div>
  );
}

export function Reveal({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} id={id} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
