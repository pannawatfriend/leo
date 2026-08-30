"use client";

import { useEffect } from "react";

/**
 * Wires up the interactive bits that live inside the injected handbook markup:
 * the theme toggle (#themeBtn), the print button (#printBtn) and the table-of-
 * contents scrollspy (.toc a). The markup is rendered via dangerouslySetInnerHTML
 * so its original inline <script> never runs — this component replaces it.
 */
export default function HandbookChrome({ storageKey }: { storageKey: string }) {
  useEffect(() => {
    const root = document.documentElement;

    const currentTheme = () =>
      root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    try {
      const saved = localStorage.getItem(storageKey);
      if (saved === "dark" || saved === "light") {
        root.setAttribute("data-theme", saved);
      }
    } catch {
      /* storage unavailable — ignore */
    }

    const themeBtn = document.getElementById("themeBtn");
    const onTheme = () => {
      const next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem(storageKey, next);
      } catch {
        /* ignore */
      }
    };
    themeBtn?.addEventListener("click", onTheme);

    const printBtn = document.getElementById("printBtn");
    const onPrint = () => window.print();
    printBtn?.addEventListener("click", onPrint);

    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".toc a"),
    );
    const byId = new Map<string, HTMLAnchorElement>();
    for (const a of links) {
      const id = a.getAttribute("href")?.slice(1);
      if (id && document.getElementById(id)) byId.set(id, a);
    }

    let observer: IntersectionObserver | undefined;
    if (byId.size > 0 && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            for (const a of links) a.classList.remove("active");
            byId.get((entry.target as HTMLElement).id)?.classList.add("active");
          }
        },
        { rootMargin: "-10% 0px -75% 0px", threshold: 0 },
      );
      for (const id of byId.keys()) {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      }
    }

    return () => {
      themeBtn?.removeEventListener("click", onTheme);
      printBtn?.removeEventListener("click", onPrint);
      observer?.disconnect();
    };
  }, [storageKey]);

  return null;
}
