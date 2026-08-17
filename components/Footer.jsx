import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { navigation, services } from "@/lib/site-data";
import { SolicitatiOferta } from "./SolicitatiOferta";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0c0e0f] text-white on-dark">
      <div className="grain" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" aria-hidden="true" />

      {/* CTA band */}
      <div className="site-container relative border-b border-white/10">
        <div className="flex flex-col gap-8 py-16 md:flex-row md:items-end md:justify-between md:py-20">
          <div>
            <p className="eyebrow eyebrow--light">Să discutăm proiectul</p>
            <h2 className="mt-2 max-w-2xl font-display text-3xl font-medium leading-[1.05] tracking-[-.02em] md:text-5xl">
              Construim împreună ce urmează <em>pentru afacerea dumneavoastră.</em>
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <SolicitatiOferta />
            <a href="tel:+40728873254" className="button-light"><Phone size={15} /> 0728 873 254</a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="site-container relative grid gap-12 py-14 md:py-16 lg:grid-cols-[1.35fr_.8fr_1fr_1.05fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3.5">
            <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white ring-1 ring-white/20">
              <Image src="/logo.png" alt="TNG Grup" fill sizes="48px" className="object-cover" />
            </div>
            <span className="text-lg font-extrabold tracking-[.06em]">TNG <span className="text-accent-bright">GRUP</span></span>
          </Link>
          <p className="mt-6 max-w-sm text-lg leading-8 text-white/60">
            Execuție, management și servicii tehnice pentru proiecte civile și industriale — cu accent pe control, comunicare și calitatea lucrărilor.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-4 py-2 text-[.8rem] font-medium text-white/55">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" /> București · România · În toată țara
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-[.78rem] font-bold uppercase tracking-[.16em] text-white/45">Navigație</h2>
          <div className="grid gap-3 text-base text-white/68">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="group inline-flex items-center gap-2 transition-colors hover:text-white">
                <span className="h-px w-0 bg-accent-bright transition-all duration-300 group-hover:w-4" />{item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-[.78rem] font-bold uppercase tracking-[.16em] text-white/45">Servicii</h2>
          <div className="grid gap-3 text-base text-white/68">
            {services.slice(0, 6).map((service) => (
              <Link key={service.id} href={`/servicii#${service.id}`} className="transition-colors hover:text-white">{service.short}</Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-[.78rem] font-bold uppercase tracking-[.16em] text-white/45">Contact</h2>
          <div className="space-y-4 text-base text-white/68">
            <a href="tel:+40728873254" className="group flex items-center gap-3 transition-colors hover:text-white">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 text-accent-bright"><Phone size={15} /></span>
              0728 873 254
            </a>
            <a href="mailto:office@tngag.ro" className="group flex items-center gap-3 transition-colors hover:text-white">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 text-accent-bright"><Mail size={15} /></span>
              office@tngag.ro
            </a>
            <a href="https://maps.app.goo.gl/1st6m75wnDy4ryyJ8" target="_blank" rel="noreferrer" className="group flex items-start gap-3 transition-colors hover:text-white">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 text-accent-bright"><MapPin size={15} /></span>
              <span>Str. Costache Sibiceanu nr. 8, Sector 1, București</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="site-container relative flex flex-col gap-4 border-t border-white/10 py-6 text-[.8rem] text-white/40 md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} TNG GRUP AG. Toate drepturile rezervate.</span>
        <div className="flex flex-wrap items-center gap-6">
          <Link href="/politica-de-confidentialitate" className="transition-colors hover:text-white">Confidențialitate</Link>
          <Link href="/termeni-si-conditii" className="transition-colors hover:text-white">Termeni</Link>
          <a href="#" className="group inline-flex items-center gap-2 transition-colors hover:text-white">Înapoi sus <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5" /></a>
        </div>
      </div>
    </footer>
  );
}
