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
          { autoAlpha: 0, y: 28 },
          { autoAlpha: 1, y: 0, duration: .8, stagger: .09, ease: "power3.out", delay: .08 },
        );
      }

      const heroImage = document.querySelector("[data-hero-image]");
      if (heroImage) {
        gsap.fromTo(heroImage, { scale: 1.08 }, { scale: 1, duration: 1.4, ease: "power2.out" });
      }

      gsap.utils.toArray("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 26 },
          {
            autoAlpha: 1,
            y: 0,
            duration: .72,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          },
        );
      });

      gsap.utils.toArray("[data-stagger]").forEach((group) => {
        gsap.fromTo(
          Array.from(group.children),
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: .62,
            stagger: .06,
            ease: "power3.out",
            scrollTrigger: { trigger: group, start: "top 86%", once: true },
          },
        );
      });

      gsap.utils.toArray("[data-parallax]").forEach((element) => {
        gsap.to(element, {
          yPercent: 5,
          ease: "none",
          scrollTrigger: { trigger: element.parentElement, start: "top bottom", end: "bottom top", scrub: .6 },
        });
      });
    });

    return () => ctx.revert();
  }, [pathname]);

  return null;
}
