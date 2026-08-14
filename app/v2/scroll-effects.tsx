"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".v2");
    if (!root) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reducedMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    root.classList.add("v2-motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));

    let frame = 0;
    const updateParallax = () => {
      frame = 0;
      const distance = Math.min(window.scrollY, 1000);
      root.style.setProperty("--v2-parallax", `${distance * 0.07}px`);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      root.classList.remove("v2-motion-ready");
    };
  }, []);

  return null;
}
