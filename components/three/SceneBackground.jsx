"use client";

import { useEffect, useRef } from "react";

const COPPER = 0xe9a46c;
const COPPER_DEEP = 0xb4561c;
const WARM = 0xf6ede2;

function makeGlowTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.35, "rgba(255,255,255,.6)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return canvas;
}

/**
 * Reusable WebGL atmosphere layer of warm construction dust.
 * variant="hero"  -> denser dust field (homepage hero)
 * variant="dust"  -> lighter dust (subpage heroes, CTA bands, footer)
 */
export default function SceneBackground({ className = "", variant = "dust", density }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const disposables = [];
    let renderer;
    let scene;
    let camera;
    let points;
    let rafId = 0;
    let disposed = false;
    let observer;

    const track = (obj) => { disposables.push(obj); return obj; };

    const onResize = () => {
      if (!renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const cleanup = () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      observer?.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      disposables.forEach((d) => {
        d?.geometry?.dispose();
        if (d?.material) {
          if (Array.isArray(d.material)) d.material.forEach((m) => m?.dispose());
          else d.material.dispose();
        }
        d?.texture?.dispose();
      });
      if (renderer) {
        renderer.setAnimationLoop(null);
        renderer.dispose();
      }
      if (renderer?.domElement?.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };

    let booted = false;

    async function boot() {
      if (booted || disposed) return;
      booted = true;
      try {
        const THREE = await import("three");
        const w = container.clientWidth;
        const h = container.clientHeight;
        if (!w || !h) return;

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setSize(w, h);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x0c0e0f, 0.045);

        camera = new THREE.PerspectiveCamera(58, w / h, 0.1, 120);
        camera.position.set(0, 0.3, 11);

        // ---- Construction dust ----
        const baseCount = density ?? (variant === "hero" ? 520 : 300);
        const count = window.innerWidth < 768 ? Math.round(baseCount * 0.6) : baseCount;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const colorA = new THREE.Color(WARM);
        const colorB = new THREE.Color(COPPER);
        const colorC = new THREE.Color(COPPER_DEEP);
        for (let i = 0; i < count; i++) {
          positions[i * 3] = (Math.random() - 0.5) * 26;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
          const pick = Math.random();
          const c = pick < 0.5 ? colorA : pick < 0.82 ? colorB : colorC;
          colors[i * 3] = c.r;
          colors[i * 3 + 1] = c.g;
          colors[i * 3 + 2] = c.b;
        }
        const pGeo = new THREE.BufferGeometry();
        pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        pGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        const glowTex = new THREE.CanvasTexture(makeGlowTexture());
        const pMat = new THREE.PointsMaterial({
          size: 0.085,
          map: glowTex,
          vertexColors: true,
          transparent: true,
          opacity: 0.8,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });
        points = new THREE.Points(pGeo, pMat);
        track(pGeo);
        track(pMat);
        track(glowTex);
        track(points);
        scene.add(points);

        if (reduced) {
          renderer.render(scene, camera);
          return;
        }

        window.addEventListener("resize", onResize);
        window.addEventListener("mousemove", onMouseMove);

        const start = performance.now();
        let visible = true;
        observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: 0 });
        observer.observe(container);

        const render = () => {
          if (disposed) return;
          if (!visible) { rafId = requestAnimationFrame(render); return; }

          const t = (performance.now() - start) / 1000;

          camera.position.x += (mouse.x * 1.1 - camera.position.x) * 0.045;
          camera.position.y += (0.3 - mouse.y * 0.7 - camera.position.y) * 0.045;
          camera.lookAt(0, 0, 0);

          points.rotation.y = t * 0.05;
          points.position.y = Math.sin(t * 0.3) * 0.6;

          renderer.render(scene, camera);
          rafId = requestAnimationFrame(render);
        };

        render();
      } catch (err) {
        console.warn("SceneBackground skipped:", err);
        cleanup();
      }
    }

    boot();

    return cleanup;
  }, [variant, density]);

  return <div ref={containerRef} className={className} aria-hidden="true" />;
}
