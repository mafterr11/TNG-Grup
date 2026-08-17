import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CalendarClock,
  Check,
  Factory,
  HardHat,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { SolicitatiOferta } from "@/components/SolicitatiOferta";
import { services } from "@/lib/site-data";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Servicii de Construcții Oferite de TNG GRUP",
  description: "Execuție construcții civile și industriale, supervizare, controlul calității, planificare, RTE și dirigenție de șantier.",
  keywords: "servicii construcții, execuție, RTE, dirigenție de șantier, supervizare lucrări",
});

const serviceIcons = {
  "execuție-construcții-civile": Building2,
  "execuție-construcții-industriale": Factory,
  "supervizare-lucrări-de-execuție": SearchCheck,
  "verificare-calitate-lucrări-în-execuție": BadgeCheck,
  "planificarea-execuției": CalendarClock,
  "servicii-RTE": HardHat,
  "dirigenție-de-șantier": ShieldCheck,
};

export default function Servicii() {
  return (
    <div>
      <PageHero
        label="Servicii"
        title={<>De la execuție la control tehnic, <em>alegem nivelul corect de implicare.</em></>}
        description="Aveți nevoie de execuție completă, supervizare sau un rol tehnic punctual? Pornim de la stadiul real al proiectului și definim clar unde putem interveni."
        image="/HeroCarousel/7.webp"
        action={{ href: "#servicii", label: "Vezi serviciile" }}
      />

      <section id="servicii" className="bg-paper py-20 md:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              label="Capabilități"
              title={<>Nu toate proiectele au nevoie de <em>același tip de intervenție.</em></>}
              description="Spuneți-ne unde se află proiectul acum. Vă ajutăm să separați ce este necesar de ce este doar opțional și stabilim rolul potrivit pentru echipa noastră."
            />

            <nav className="mt-8 rounded-[1.35rem] border border-black/10 bg-white p-4 shadow-[0_16px_40px_-20px_rgba(20,22,24,.14)]" aria-label="Servicii TNG GRUP">
              <div className="mb-3 px-2 pt-1 text-[.78rem] font-bold uppercase tracking-[.16em] text-ink-faint">Navigare rapidă</div>
              <div className="grid gap-1.5">
                {services.map((service, index) => (
                  <Link key={service.id} href={`#${service.id}`} className="group flex items-center justify-between rounded-xl px-3 py-3 text-base font-semibold text-ink-muted transition-colors hover:bg-paper hover:text-ink">
                    <span className="flex items-center gap-3">
                      <span className="font-display text-sm text-accent">0{index + 1}</span>
                      {service.short}
                    </span>
                    <ArrowRight size={14} className="text-black/25 transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
                  </Link>
                ))}
              </div>
            </nav>

            <div className="mt-6 rounded-[1.35rem] bg-[#141618] p-6 text-white">
              <div className="flex items-center gap-3 text-[.95rem] font-bold">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent-bright"><ShieldCheck size={17} /></span>
                Cum alegem serviciul potrivit
              </div>
              <p className="mt-4 text-lg leading-8 text-white/66">Ne uităm la stadiul proiectului, la riscurile existente și la nivelul de control de care aveți nevoie. Apoi vă propunem varianta potrivită, fără pachete inutile.</p>
            </div>
          </aside>

          <div className="grid gap-6" data-stagger>
            {services.map((service, index) => {
              const Icon = serviceIcons[service.id] || Building2;
              const featured = index === 0;
              return (
                <article
                  key={service.id}
                  id={service.id}
                  className={`scroll-mt-28 overflow-hidden rounded-[1.5rem] border p-6 md:p-8 ${featured ? "border-accent/30 bg-[#141618] text-white shadow-[0_24px_60px_-24px_rgba(20,22,24,.4)]" : "border-black/10 bg-white shadow-[0_16px_40px_-24px_rgba(20,22,24,.14)]"}`}
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-3xl">
                      <div className="flex items-center gap-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${featured ? "border border-white/12 bg-white/[.04] text-accent-bright" : "bg-accent-soft text-accent"}`}>
                          <Icon size={21} strokeWidth={1.8} />
                        </div>
                        <span className={`font-display text-sm ${featured ? "text-white/35" : "text-ink-faint"}`}>0{index + 1}</span>
                      </div>
                      <h2 className={`mt-6 font-display text-2xl font-medium tracking-[-.02em] md:text-[1.9rem] ${featured ? "text-white" : "text-ink"}`}>{service.title}</h2>
                      <p className={`mt-4 text-lg leading-8 ${featured ? "text-white/66" : "text-ink-muted"}`}>{service.details}</p>
                    </div>

                    <div className={`shrink-0 rounded-2xl border px-5 py-4 ${featured ? "border-white/12 bg-white/[.04] text-white/70" : "border-black/10 bg-paper text-ink-soft"}`}>
                      <div className="flex items-center gap-2 text-sm font-bold">
                        <ShieldCheck size={15} className={featured ? "text-accent-bright" : "text-accent"} />
                        Serviciu potrivit pentru
                      </div>
                      <p className="mt-2 max-w-[17rem] text-lg leading-8">Proiecte noi, șantiere în curs sau investiții care au nevoie de mai mult control tehnic.</p>
                    </div>
                  </div>

                  <div className="mt-7 grid gap-2.5 sm:grid-cols-3">
                    {service.bullets.map((bullet) => (
                      <div key={bullet} className={`flex items-start gap-2.5 rounded-xl border px-4 py-3.5 text-base leading-7 ${featured ? "border-white/10 bg-white/[.03] text-white/72" : "border-black/10 bg-paper/60 text-ink-soft"}`}>
                        <Check size={15} strokeWidth={2.4} className={`mt-1 shrink-0 ${featured ? "text-accent-bright" : "text-accent"}`} />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className={`mt-7 flex flex-col gap-4 border-t pt-5 sm:flex-row sm:items-center sm:justify-between ${featured ? "border-white/10" : "border-black/10"}`}>
                    <p className={`text-base leading-7 ${featured ? "text-white/50" : "text-ink-muted"}`}>
                      Serviciul poate rămâne punctual sau poate fi integrat într-un flux mai amplu de execuție și coordonare.
                    </p>
                    <Link href="/contact" className={`group inline-flex items-center gap-2 text-base font-bold transition-colors ${featured ? "text-accent-bright hover:text-white" : "text-accent hover:text-accent-dark"}`}>
                      Discutați serviciul cu noi <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0c0e0f] py-20 text-white md:py-24 on-dark">
        <div className="grain" aria-hidden="true" />
        <div className="site-container relative" data-reveal>
          <div className="dark-card flex flex-col gap-8 p-7 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="max-w-2xl">
              <p className="eyebrow eyebrow--light">Nu știți exact ce serviciu vă trebuie?</p>
              <h2 className="mt-2 font-display text-3xl font-medium leading-[1.06] tracking-[-.02em] md:text-4xl">Descrieți-ne situația actuală. <em>Identificăm împreună punctul potrivit.</em></h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/64">Pentru început sunt suficiente tipul lucrării, localitatea și stadiul proiectului. Restul detaliilor le clarificăm după ce înțelegem contextul.</p>
            </div>
            <SolicitatiOferta className="shrink-0" />
          </div>
        </div>
      </section>
    </div>
  );
}
