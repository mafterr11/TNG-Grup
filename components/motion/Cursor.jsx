"use client";

import { useEffect, useRef } from "react";

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

const OUTLINE = "#141618";
const WHITE = "#ffffff";
const COPPER = "#e9a46c";
const COPPER_DEEP = "#b4561c";

/**
 * Excavator cursor — a detailed side-view excavator that follows the mouse.
 * The small pointer arrow at the bucket marks the exact click point.
 * Motion is kept professional: smooth glide, slight lean with velocity,
 * it lifts the arm over interactive elements and digs on click.
 */
export default function Cursor() {
  const wrapRef = useRef(null);
  const scaleRef = useRef(null);
  const tiltRef = useRef(null);
  const armRef = useRef(null);
  const stickRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const wrap = wrapRef.current;
    const scaleG = scaleRef.current;
    const tiltG = tiltRef.current;
    const armG = armRef.current;
    const stickG = stickRef.current;
    if (!wrap || !scaleG || !tiltG || !armG || !stickG) return;

    document.documentElement.classList.add("custom-cursor");

    let x = -200;
    let y = -200;
    let wx = x;
    let wy = y;
    let px = x;
    let py = y;
    let vx = 0;
    let tilt = 0;
    let scale = 1;
    let armA = 0;
    let stickA = 0;
    let hovered = false;
    let down = false;
    let raf;

    const onMove = (e) => { x = e.clientX; y = e.clientY; };
    const onOver = (e) => { if (e.target.closest("a, button, [data-cursor], select, textarea, input")) hovered = true; };
    const onOut = (e) => { if (e.target.closest("a, button, [data-cursor], select, textarea, input")) hovered = false; };
    const onDown = () => { down = true; };
    const onUp = () => { down = false; };

    const loop = () => {
      const now = performance.now() / 1000;

      // smooth glide
      wx += (x - wx) * 0.5;
      wy += (y - wy) * 0.5;
      wrap.style.transform = `translate3d(${wx}px, ${wy}px, 0)`;

      // slight lean with movement velocity
      vx += (x - px - vx) * 0.25;
      px = x;
      py = y;

      const tiltTarget = clamp(vx * 0.3, -2.5, 2.5);
      tilt += (tiltTarget - tilt) * 0.12;

      const scaleTarget = hovered ? 1.09 : 1;
      scale += (scaleTarget - scale) * 0.16;

      // digging on click, lifting over interactive elements, gentle idle bob
      const armTarget = down ? 9 : hovered ? -4.5 : Math.sin(now * 1.4) * 0.8;
      const stickTarget = down ? 13 : 0;
      armA += (armTarget - armA) * 0.14;
      stickA += (stickTarget - stickA) * 0.14;

      scaleG.setAttribute("transform", `translate(87 54) scale(${scale}) translate(-87 -54)`);
      tiltG.setAttribute("transform", `translate(52 60) rotate(${tilt}) translate(-52 -60)`);
      armG.setAttribute("transform", `translate(60 59) rotate(${armA}) translate(-60 -59)`);
      stickG.setAttribute("transform", `translate(77 30) rotate(${stickA}) translate(-77 -30)`);

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <div ref={wrapRef} className="excavator-cursor" style={{ transform: "translate3d(-200px, -200px, 0)" }} aria-hidden="true">
      <svg width="76" height="76" viewBox="0 0 100 100" fill="none">
        <g ref={scaleRef}>
          <g ref={tiltRef}>
            {/* tracks */}
            <rect x="14" y="70" width="56" height="16" rx="7" fill={WHITE} stroke={OUTLINE} strokeWidth="1.5" />
            <circle cx="27" cy="78" r="4" fill={COPPER} stroke={OUTLINE} strokeWidth="1.2" />
            <circle cx="43" cy="78" r="4" fill={COPPER} stroke={OUTLINE} strokeWidth="1.2" />
            <circle cx="59" cy="78" r="4" fill={COPPER} stroke={OUTLINE} strokeWidth="1.2" />

            {/* house */}
            <rect x="18" y="52" width="48" height="18" rx="4" fill={WHITE} stroke={OUTLINE} strokeWidth="1.5" />
            {/* counterweight */}
            <rect x="18" y="49" width="9" height="21" rx="3" fill={COPPER_DEEP} stroke={OUTLINE} strokeWidth="1.5" />
            {/* cab + window */}
            <rect x="34" y="43" width="19" height="11" rx="3" fill={WHITE} stroke={OUTLINE} strokeWidth="1.5" />
            <rect x="40.5" y="45.5" width="9.5" height="5.5" rx="1.8" fill={OUTLINE} />
            {/* exhaust */}
            <rect x="55" y="45" width="4" height="9" rx="1.5" fill={COPPER} stroke={OUTLINE} strokeWidth="1.2" />

            {/* arm: boom + cylinder + stick + bucket */}
            <g ref={armRef}>
              {/* boom hydraulic cylinder */}
              <line x1="58" y1="63" x2="70" y2="44" stroke={OUTLINE} strokeWidth="2.2" strokeLinecap="round" />
              <line x1="70" y1="44" x2="74" y2="40" stroke={OUTLINE} strokeWidth="1.8" strokeLinecap="round" />
              {/* boom */}
              <line x1="60" y1="59" x2="77" y2="30" stroke={OUTLINE} strokeWidth="10" strokeLinecap="round" />
              <line x1="60" y1="59" x2="77" y2="30" stroke={WHITE} strokeWidth="6.5" strokeLinecap="round" />
              <circle cx="60" cy="59" r="2" fill={OUTLINE} />

              <g ref={stickRef}>
                {/* stick */}
                <line x1="77" y1="30" x2="87.5" y2="42" stroke={OUTLINE} strokeWidth="8" strokeLinecap="round" />
                <line x1="77" y1="30" x2="87.5" y2="42" stroke={WHITE} strokeWidth="4.6" strokeLinecap="round" />
                <circle cx="77" cy="30" r="1.8" fill={OUTLINE} />
                {/* bucket */}
                <path
                  d="M83.5 35 V49.5 Q83.5 52.5 86.5 52.5 L91.5 47 L90.5 41 Q90.5 38.5 88 38.5 Z"
                  fill={WHITE}
                  stroke={OUTLINE}
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </g>
        </g>

        {/* pointer tip marker — small arrow at the bucket, stays fixed on the exact pointer point */}
        <path
          d="M87 54a.3.3 0 0 1 .39-.39l9.6 3.9a.3.3 0 0 1-.038.568l-3.674.948a.3.3 0 0 0-.205.204l-.948 3.674a.3.3 0 0 1-.569.037Z"
          fill={COPPER}
          stroke={OUTLINE}
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
