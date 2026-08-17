"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Wraps each word in a .split-word span, preserving nested elements (e.g. <em>). */
function splitWords(el) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    const frag = document.createDocumentFragment();
    node.textContent.split(/(\s+)/).forEach((part) => {
      if (part.trim()) {
        const span = document.createElement("span");
        span.className = "split-word";
        span.textContent = part;
        frag.appendChild(span);
      } else {
        frag.appendChild(document.createTextNode(part));
      }
    });
    node.parentNode.replaceChild(frag, node);
  });
}

export default function MotionSystem() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const removers = [];
    const addCleanup = (fn) => removers.push(fn);

    const ctx = gsap.context(() => {
      // Hero copy entrance (word-split headlines animate on their own)
      const heroItems = document.querySelectorAll("[data-hero-copy] > *:not([data-split])");
      if (heroItems.length) {
        gsap.fromTo(
          heroItems,
          { autoAlpha: 0, y: 32, filter: "blur(8px)" },
          { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: .9, stagger: .09, ease: "power3.out", delay: .08 },
        );
      }

      const heroImage = document.querySelector("[data-hero-image]");
      if (heroImage) {
        gsap.fromTo(heroImage, { scale: 1.1 }, { scale: 1, duration: 1.5, ease: "power2.out" });
      }

      // Word-by-word headline reveals
      gsap.utils.toArray("[data-split]").forEach((el) => {
        if (!el.textContent.trim()) return;
        splitWords(el);
        const words = el.querySelectorAll(".split-word");
        if (!words.length) return;
        gsap.fromTo(
          words,
          { autoAlpha: 0, yPercent: 120 },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: .65,
            stagger: .04,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 86%", once: true },
          },
        );
      });

      // Reveal (blur-up)
      gsap.utils.toArray("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 28, filter: "blur(6px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: .8,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          },
        );
      });

      // Stagger children (blur-up)
      gsap.utils.toArray("[data-stagger]").forEach((group) => {
        gsap.fromTo(
          Array.from(group.children),
          { autoAlpha: 0, y: 22, filter: "blur(4px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: .68,
            stagger: .06,
            ease: "power3.out",
            scrollTrigger: { trigger: group, start: "top 86%", once: true },
          },
        );
      });

      // Parallax images (inside scaled containers)
      gsap.utils.toArray("[data-parallax]").forEach((element) => {
        gsap.to(element, {
          yPercent: 5,
          ease: "none",
          scrollTrigger: { trigger: element.parentElement, start: "top bottom", end: "bottom top", scrub: .6 },
        });
      });

      // Subpage hero image zoom-out on scroll
      gsap.utils.toArray("[data-hero-parallax]").forEach((element) => {
        gsap.fromTo(
          element,
          { scale: 1.14, yPercent: 3 },
          {
            scale: 1,
            yPercent: 0,
            ease: "none",
            scrollTrigger: { trigger: element.parentElement, start: "top top", end: "bottom top", scrub: .6 },
          },
        );
      });

      // Magnetic buttons
      const magnetEls = gsap.utils.toArray("a.button-primary, button.button-primary, a.button-light, button.button-light, a.button-secondary, button.button-secondary, .text-link");
      magnetEls.forEach((el) => {
        const xTo = gsap.quickTo(el, "x", { duration: .45, ease: "power3.out" });
        const yTo = gsap.quickTo(el, "y", { duration: .45, ease: "power3.out" });
        const onMove = (e) => {
          const r = el.getBoundingClientRect();
          const dx = e.clientX - (r.left + r.width / 2);
          const dy = e.clientY - (r.top + r.height / 2);
          xTo(dx * .22);
          yTo(dy * .3);
        };
        const onLeave = () => {
          gsap.to(el, { x: 0, y: 0, duration: .55, ease: "power3.out", overwrite: true, onComplete: () => gsap.set(el, { clearProps: "x,y" }) });
        };
        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);
        addCleanup(() => {
          el.removeEventListener("mousemove", onMove);
          el.removeEventListener("mouseleave", onLeave);
        });
      });

      // 3D tilt cards
      gsap.utils.toArray("[data-tilt]").forEach((el) => {
        const onEnter = () => gsap.set(el, { transformPerspective: 900 });
        const onMove = (e) => {
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - .5;
          const py = (e.clientY - r.top) / r.height - .5;
          gsap.to(el, { rotationY: px * 6, rotationX: -py * 6, duration: .5, ease: "power2.out", overwrite: "auto" });
        };
        const onLeave = () => {
          gsap.to(el, { rotationX: 0, rotationY: 0, duration: .7, ease: "power3.out", overwrite: "auto" });
        };
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);
        addCleanup(() => {
          el.removeEventListener("mouseenter", onEnter);
          el.removeEventListener("mousemove", onMove);
          el.removeEventListener("mouseleave", onLeave);
        });
      });
    });

    return () => {
      ctx.revert();
      removers.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}
