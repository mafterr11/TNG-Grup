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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b border-white/10 bg-[#111314]/96 shadow-lg shadow-black/10 backdrop-blur-xl" : "bg-gradient-to-b from-black/65 via-black/20 to-transparent"}`}>
      <div className="site-container flex h-20 items-center justify-between md:h-24">
        <Link href="/" className="flex items-center gap-3" aria-label="TNG Grup — Acasă">
          <div className="relative h-10 w-10 overflow-hidden rounded-md bg-white md:h-11 md:w-11">
            <Image src="/logo.png" alt="TNG Grup" fill priority sizes="44px" className="object-cover" />
          </div>
          <div className="text-white">
            <div className="text-[.95rem] font-bold tracking-[.03em]">TNG GRUP</div>
            <div className="mt-0.5 text-[.63rem] font-medium text-white/62">Antreprenoriat general</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigație principală">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-[.82rem] font-medium ${active ? "text-white" : "text-white/67 hover:text-white"}`}
              >
                {item.label}
                {active && <span className="absolute inset-x-0 -bottom-0.5 mx-auto h-[2px] w-4 rounded-full bg-accent" />}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:+40728873254" className="inline-flex items-center gap-2 text-[.78rem] font-medium text-white/65 hover:text-white" aria-label="Sună TNG GRUP la 0728 873 254">
            <Phone size={14} /> 0728 873 254
          </a>
          <SolicitatiOferta customStyle="!min-h-10 !px-4" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/16 bg-white/6 text-white lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={`overflow-hidden border-t border-white/10 bg-[#111314] transition-[max-height,opacity] duration-300 lg:hidden ${open ? "max-h-[34rem] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="site-container py-5">
          <nav className="grid gap-2" aria-label="Navigație mobilă">
            {navigation.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between rounded-xl border px-4 py-3.5 text-sm font-medium ${active ? "border-white/16 bg-white/8 text-white" : "border-white/10 bg-white/[.03] text-white/74"}`}
                >
                  <span>{item.label}</span>
                  <span className={`h-2 w-2 rounded-full ${active ? "bg-accent" : "bg-white/20"}`} />
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 grid gap-3">
            <a href="tel:+40728873254" className="flex min-h-11 items-center justify-center gap-2 rounded-[.8rem] border border-white/15 bg-white/[.03] text-sm font-medium text-white/75"><Phone size={15} /> 0728 873 254</a>
            <SolicitatiOferta customStyle="!w-full" />
          </div>
        </div>
      </div>
    </header>
  );
}
