"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MotionSystem() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const heroItems = document.querySelectorAll("[data-hero-copy] > *");
      if (heroItems.length) {
        gsap.fromTo(
          heroItems,
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: .7, stagger: .07, ease: "power2.out", delay: .08 },
        );
      }

      const heroImage = document.querySelector("[data-hero-image]");
      if (heroImage) {
        gsap.fromTo(heroImage, { scale: 1.035 }, { scale: 1, duration: 1.25, ease: "power2.out" });
      }

      gsap.utils.toArray("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: .66,
            ease: "power2.out",
            scrollTrigger: { trigger: element, start: "top 86%", once: true },
          },
        );
      });

      gsap.utils.toArray("[data-stagger]").forEach((group) => {
        gsap.fromTo(
          Array.from(group.children),
          { autoAlpha: 0, y: 14 },
          {
            autoAlpha: 1,
            y: 0,
            duration: .58,
            stagger: .055,
            ease: "power2.out",
            scrollTrigger: { trigger: group, start: "top 84%", once: true },
          },
        );
      });

      gsap.utils.toArray("[data-parallax]").forEach((element) => {
        gsap.to(element, {
          yPercent: 4,
          ease: "none",
          scrollTrigger: { trigger: element.parentElement, start: "top bottom", end: "bottom top", scrub: .7 },
        });
      });
    });

    return () => ctx.revert();
  }, [pathname]);

  return null;
}
