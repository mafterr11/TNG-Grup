"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { navigation } from "@/lib/site-data";
import { SolicitatiOferta } from "./SolicitatiOferta";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  const condensed = scrolled || open;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(1, window.scrollY / total) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "border-b border-white/10 bg-[#0c0e0f]/92 shadow-[0_12px_40px_-12px_rgba(0,0,0,.6)] backdrop-blur-xl" : "border-b border-transparent bg-gradient-to-b from-black/70 via-black/25 to-transparent"}`}>
        {/* Scroll progress */}
        <span className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-accent via-accent-bright to-accent" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />

        <div className={`site-container flex items-center justify-between transition-all duration-500 ${condensed ? "h-[3.75rem] md:h-[4.5rem]" : "h-[4.5rem] md:h-24"}`}>
          <Link href="/" className="group flex items-center gap-3.5" aria-label="TNG Grup — Acasă">
            <div className="relative h-11 w-11 overflow-hidden rounded-xl bg-white ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105 md:h-12 md:w-12">
              <Image src="/logo.png" alt="TNG Grup" fill priority sizes="48px" className="object-cover" />
            </div>
            <div className="text-white">
              <div className="text-[1rem] font-extrabold tracking-[.06em]">TNG <span className="text-accent-bright">GRUP</span></div>
              <div className="mt-0.5 text-[.66rem] font-medium uppercase tracking-[.18em] text-white/55">Antreprenoriat general</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigație principală">
            {navigation.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative py-2 text-[.98rem] font-semibold tracking-[-.01em] transition-colors ${active ? "text-white" : "text-white/64 hover:text-white"}`}
                >
                  {item.label}
                  <span className={`absolute inset-x-0 -bottom-0.5 h-[2px] origin-left rounded-full bg-gradient-to-r from-accent to-accent-bright transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a href="tel:+40728873254" className="inline-flex items-center gap-2 text-base font-semibold text-white/60 transition-colors hover:text-white" aria-label="Sună TNG GRUP la 0728 873 254">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-accent-bright"><Phone size={14} /></span>
              0728 873 254
            </a>
            <SolicitatiOferta className="min-h-11 px-6" />
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu — sibling of the header so the header's backdrop-filter
          doesn't hijack its position:fixed containing block */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-x-0 top-[3.75rem] bottom-0 z-40 overflow-y-auto bg-[#0c0e0f] transition-[opacity,visibility] duration-300 md:top-[4.5rem] lg:hidden ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="site-container flex min-h-full flex-col py-8">
          <nav className="grid gap-2" aria-label="Navigație mobilă">
            {navigation.map((item, index) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between rounded-2xl border px-5 py-4 text-lg font-semibold transition-colors ${active ? "border-accent/40 bg-accent/10 text-white" : "border-white/10 bg-white/[.03] text-white/70 hover:bg-white/[.06]"}`}
                >
                  <span className="flex items-center gap-4">
                    <span className="font-display text-sm text-accent-bright">0{index + 1}</span>
                    {item.label}
                  </span>
                  <span className={`h-2 w-2 rounded-full ${active ? "bg-accent-bright" : "bg-white/20"}`} />
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto grid gap-3 pt-8">
            <a href="tel:+40728873254" className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[.03] text-base font-semibold text-white/80">
              <Phone size={15} className="text-accent-bright" /> 0728 873 254
            </a>
            <SolicitatiOferta className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
