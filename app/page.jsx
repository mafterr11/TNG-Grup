import Image from "next/image";
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
  Phone,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { SolicitatiOferta } from "@/components/SolicitatiOferta";
import { projects, services, stats } from "@/lib/site-data";

const serviceIcons = {
  "execuție-construcții-civile": Building2,
  "execuție-construcții-industriale": Factory,
  "supervizare-lucrări-de-execuție": SearchCheck,
  "verificare-calitate-lucrări-în-execuție": BadgeCheck,
  "planificarea-execuției": CalendarClock,
  "servicii-RTE": HardHat,
  "dirigenție-de-șantier": ShieldCheck,
};

const process = [
  { title: "Clarificăm proiectul", text: "Înțelegem obiectivul, documentația disponibilă, bugetul, termenul și punctele de risc înainte să pornim execuția." },
  { title: "Planificăm și coordonăm", text: "Stabilim etapele, resursele și responsabilitățile astfel încât șantierul să poată fi urmărit, nu ghicit." },
  { title: "Executăm și verificăm", text: "Urmărim calitatea, progresul și deciziile tehnice până la recepție și documentarea finală." },
];

const benefits = [
  { icon: ShieldCheck, title: "Calitate verificată pe parcurs", text: "Problemele sunt identificate în etapă, nu la final, când remedierea devine costisitoare." },
  { icon: BadgeCheck, title: "Progres comunicat clar", text: "Știți ce s-a executat, ce urmează și ce decizii sunt necesare din partea dumneavoastră." },
  { icon: HardHat, title: "Coordonare într-un singur flux", text: "Echipele, furnizorii și specialitățile sunt gestionate ca părți ale aceluiași proiect." },
];

export default function Home() {
  return (
    <div className="overflow-clip">
      {/* ---------------- HERO ---------------- */}
      <section className="relative min-h-screen bg-black text-white on-dark">
        <Image data-hero-image src="/HeroCarousel/1.webp" alt="Șantier de construcții TNG GRUP" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,12,13,.94)_0%,rgba(10,12,13,.72)_46%,rgba(10,12,13,.24)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.22)_0%,rgba(0,0,0,0)_42%,rgba(0,0,0,.78)_100%)]" />
        <div className="grain" aria-hidden="true" />

        <div className="site-container relative z-10 flex min-h-screen flex-col justify-end pb-12 pt-28 md:pb-16 lg:justify-center lg:pb-0">
          <div className="max-w-5xl" data-hero-copy>
            <p className="eyebrow eyebrow--light">Antreprenoriat general · București · România</p>
            <h1 className="display-title">Construcții coordonate cu <em>rigoare</em>, de la prima etapă până la recepție.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl md:leading-9">
              TNG GRUP execută și coordonează proiecte civile și industriale, cu un singur flux pentru echipe, termene, calitate și deciziile tehnice care contează.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <SolicitatiOferta />
              <Link href="/portofoliu" className="button-light">Vezi proiectele <ArrowUpRight size={16} /></Link>
            </div>
          </div>

          <div className="mt-14 grid max-w-3xl grid-cols-3 gap-6 border-t border-white/15 pt-7 md:gap-12">
            {stats.map((item) => (
              <div key={item.id}>
                <div className="font-display text-3xl font-medium tracking-[-.02em] text-white md:text-4xl">
                  {item.value}
                </div>
                <div className="mt-2 max-w-[12rem] text-[.74rem] leading-5 text-white/58 md:text-[.8rem]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 right-0 z-10 hidden text-white/40 md:block">
          <div className="site-container flex justify-end pb-8">
            <a href="#despre" className="group flex items-center gap-3 text-[.8rem] font-medium uppercase tracking-[.18em]">
              Derulează
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors group-hover:border-accent-bright group-hover:text-accent-bright">
                <ArrowRight size={16} className="rotate-90" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- DESPRE / INTRO ---------------- */}
      <section id="despre" className="bg-white py-20 md:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              label="Despre TNG GRUP"
              title={<>Mai puține necunoscute în șantier. <em>Un singur partener tehnic.</em></>}
              description="TNG GRUP AG este o companie românească de antreprenoriat general, fondată în 2019, care organizează proiectele astfel încât responsabilitățile, termenele și calitatea să poată fi urmărite clar."
            />
            <div className="mt-8" data-reveal>
              <Link href="/despre" className="text-link">Despre companie <ArrowRight size={16} /></Link>
            </div>
          </div>

          <div className="grid gap-5" data-stagger>
            {[
              { icon: ShieldCheck, title: "Control tehnic", text: "Calitatea, documentația și etapele importante sunt urmărite pe parcurs, nu doar la final." },
              { icon: BadgeCheck, title: "Comunicare directă", text: "Știți din timp ce se întâmplă în șantier și ce decizii trebuie luate." },
              { icon: HardHat, title: "Execuție coordonată", text: "Echipele, furnizorii și specialitățile lucrează ca părți ale aceluiași proiect." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="group surface-card flex gap-5 p-6 transition-transform duration-300 hover:-translate-y-1 md:p-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Icon size={21} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-[-.015em] text-ink">{title}</h3>
                  <p className="mt-2 text-lg leading-8 text-ink-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SERVICII ---------------- */}
      <section className="relative overflow-hidden bg-[#0c0e0f] py-20 text-white md:py-28 on-dark">
        <div className="grain" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" aria-hidden="true" />

        <div className="site-container relative">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              inverse
              label="Servicii"
              title={<>Nivelul de implicare <em>de care proiectul are nevoie.</em></>}
              description="De la execuție completă la supervizare, planificare, RTE sau dirigenție de șantier — putem interveni punctual sau într-un flux integrat."
            />
            <div className="shrink-0" data-reveal>
              <Link href="/servicii" className="button-light">Toate serviciile <ArrowRight size={16} /></Link>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3" data-stagger>
            {services.map((service, index) => {
              const Icon = serviceIcons[service.id] || Building2;
              return (
                <Link
                  key={service.id}
                  href={`/servicii#${service.id}`}
                  className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 md:p-7 ${index === 0 ? "border-accent/40 bg-gradient-to-b from-accent/15 to-transparent" : "border-white/10 bg-white/[.03] hover:border-white/20 hover:bg-white/[.05]"}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/12 bg-white/[.04] text-accent-bright transition-colors group-hover:border-accent/40 group-hover:bg-accent/15">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>
                    <span className="font-display text-sm text-white/30">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold tracking-[-.02em] text-white">{service.title}</h3>
                  <p className="mt-3 text-lg leading-8 text-white/60">{service.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-[.95rem] font-bold text-accent-bright">
                    Detalii <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}

            {/* CTA card fills the grid */}
            <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-accent to-accent-dark p-6 md:p-7">
              <div>
                <p className="eyebrow eyebrow--light">Proiect în pregătire?</p>
                <h3 className="mt-2 font-display text-2xl font-medium leading-tight tracking-[-.02em]">Spuneți-ne de ce aveți nevoie.</h3>
                <p className="mt-3 text-lg leading-8 text-white/80">Revenim cu întrebările tehnice și pașii următori.</p>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <SolicitatiOferta className="bg-white text-ink shadow-[0_12px_28px_-10px_rgba(0,0,0,.45)] hover:bg-paper hover:shadow-[0_16px_32px_-10px_rgba(0,0,0,.5)]" />
                <a href="tel:+40728873254" className="inline-flex items-center justify-center gap-2 text-[.95rem] font-bold text-white/90 hover:text-white"><Phone size={15} /> 0728 873 254</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- DE CE NOI ---------------- */}
      <section className="bg-white py-20 md:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <div className="relative">
            <div className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] md:min-h-[560px]" data-reveal>
              <Image data-parallax src="/HeroCarousel/5.webp" alt="Echipă de construcții în timpul lucrărilor" fill className="scale-[1.08] object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-white/10 bg-[#141618] px-6 py-5 text-white shadow-2xl md:block lg:-right-8" data-reveal>
              <div className="font-display text-4xl font-medium text-accent-bright">30+</div>
              <div className="mt-1 text-[.8rem] font-medium text-white/60">ani de experiență cumulată</div>
            </div>
          </div>

          <div>
            <SectionHeading
              label="De ce TNG GRUP"
              title={<>Ce primiți concret <em>în colaborarea cu noi.</em></>}
              description="Colaborarea rămâne clară pentru beneficiar: șantierul este urmărit, deciziile sunt comunicate, iar problemele sunt tratate la timp."
            />
            <div className="mt-8 space-y-1" data-stagger>
              {benefits.map(({ icon: Icon, title, text }) => (
                <div key={title} className="group flex gap-5 rounded-2xl p-4 transition-colors hover:bg-paper md:p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold tracking-[-.015em] text-ink">{title}</h3>
                    <p className="mt-1.5 text-lg leading-8 text-ink-muted">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PROCES ---------------- */}
      <section className="bg-paper py-20 md:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            label="Cum lucrăm"
            title={<>Ce se întâmplă <em>după ce ne contactați.</em></>}
            description="Clarificăm cerințele, stabilim responsabilitățile și urmărim execuția până la recepție. Fără etape ascunse sau termeni inutil de complicați."
          />

          <div data-stagger>
            {process.map((item, index) => (
              <div key={item.title} className="group relative grid gap-5 border-t border-black/10 py-8 first:border-t-0 first:pt-0 sm:grid-cols-[64px_1fr] md:py-9">
                <span className="font-display text-2xl font-medium text-accent md:text-3xl">0{index + 1}</span>
                <div>
                  <h3 className="text-xl font-bold tracking-[-.02em] text-ink md:text-2xl">{item.title}</h3>
                  <p className="mt-3 max-w-2xl text-lg leading-8 text-ink-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PORTOFOLIU ---------------- */}
      <section className="bg-white py-20 md:py-28">
        <div className="site-container">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              label="Proiecte selectate"
              title={<>Lucrări reale, <em>în contexte și dimensiuni diferite.</em></>}
              description="Vedeți proiectele înainte de a lua o decizie și înțelegeți mai ușor felul în care lucrăm."
            />
            <div className="shrink-0" data-reveal>
              <Link href="/portofoliu" className="button-secondary">Portofoliu complet <ArrowRight size={16} /></Link>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2" data-stagger>
            {projects.map((project, index) => (
              <Link
                href={project.href}
                key={project.id}
                className={`group relative min-h-[320px] overflow-hidden rounded-[1.35rem] border border-black/10 ${index === 0 ? "md:min-h-[520px]" : index === 3 ? "md:min-h-[520px]" : "md:min-h-[400px]"}`}
              >
                <Image src={project.image} alt={project.title} fill className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]" sizes="(max-width:768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={17} />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
                  <p className="text-[.74rem] font-semibold uppercase tracking-[.14em] text-accent-bright">{project.category}</p>
                  <div className="mt-2 flex items-end justify-between gap-4">
                    <h3 className="max-w-md font-display text-xl font-medium leading-snug tracking-[-.02em] md:text-2xl">{project.title}</h3>
                    <ArrowUpRight size={18} className="shrink-0 text-white/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="relative overflow-hidden bg-[#141618] py-20 text-white md:py-24 on-dark">
        <div className="grain" aria-hidden="true" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-accent/10 to-transparent" aria-hidden="true" />
        <div className="site-container relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between" data-reveal>
          <div className="max-w-2xl">
            <p className="eyebrow eyebrow--light">Aveți un proiect în pregătire?</p>
            <h2 className="mt-2 font-display text-3xl font-medium leading-[1.06] tracking-[-.02em] md:text-5xl">
              Trimiteți-ne datele de bază. <em>Revenim cu pașii următori.</em>
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-white/66">Pentru început sunt suficiente tipul lucrării, localitatea și stadiul proiectului.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <SolicitatiOferta className="min-h-14 px-8 text-base" />
          </div>
        </div>
      </section>
    </div>
  );
}
