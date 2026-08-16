import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navigation } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-[#111314] text-white">
      <div className="site-container py-14 md:py-16">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.2fr_.7fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-md bg-white"><Image src="/logo.png" alt="TNG Grup" fill sizes="44px" className="object-cover" /></div>
              <span className="text-base font-bold tracking-[.03em]">TNG GRUP</span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/62">Execuție, management și servicii tehnice pentru proiecte civile și industriale, cu accent pe control, comunicare și calitatea lucrărilor.</p>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-white">Navigație</h2>
            <div className="grid gap-2.5 text-sm text-white/62">
              {navigation.map((item) => <Link key={item.href} href={item.href} className="hover:text-white">{item.label}</Link>)}
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-white">Contact</h2>
            <div className="space-y-3.5 text-sm text-white/62">
              <a href="tel:+40728873254" className="flex items-center gap-3 hover:text-white"><Phone size={15} className="text-white/45" />0728 873 254</a>
              <a href="mailto:office@tngag.ro" className="flex items-center gap-3 hover:text-white"><Mail size={15} className="text-white/45" />office@tngag.ro</a>
              <a href="https://maps.app.goo.gl/1st6m75wnDy4ryyJ8" target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-white"><MapPin size={15} className="mt-0.5 shrink-0 text-white/45" />Str. Costache Sibiceanu nr. 8, Sector 1, București</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-[.72rem] text-white/42 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} TNG GRUP AG. Toate drepturile rezervate.</span>
          <div className="flex gap-5">
            <Link href="/politica-de-confidentialitate" className="hover:text-white">Confidențialitate</Link>
            <Link href="/termeni-si-conditii" className="hover:text-white">Termeni</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
