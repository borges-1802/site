"use client";

import { useSyncExternalStore } from "react";

const BUILD = process.env.NEXT_PUBLIC_BUILD_DATE ?? "2026-01-01";

const toMonth = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
const noop = () => () => {};

export function useToday(): Date {
  const month = useSyncExternalStore(noop, () => toMonth(new Date()), () => BUILD.slice(0, 7));
  const [y, m] = month.split("-").map(Number);
  return new Date(y, m - 1, 1);
}
