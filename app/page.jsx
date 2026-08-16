import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ClipboardCheck, HardHat, Phone, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { SolicitatiOferta } from "@/components/SolicitatiOferta";
import { projects, services, stats } from "@/lib/site-data";

const process = [
  { title: "Clarificăm proiectul", text: "Înțelegem obiectivul, documentația disponibilă, bugetul, termenul și punctele de risc înainte să pornim execuția." },
  { title: "Planificăm și coordonăm", text: "Stabilim etapele, resursele și responsabilitățile astfel încât șantierul să poată fi urmărit, nu ghicit." },
  { title: "Executăm și verificăm", text: "Urmărim calitatea, progresul și deciziile tehnice până la recepție și documentarea finală." },
];

const benefits = [
  [ShieldCheck, "Calitatea este verificată pe parcurs", "Problemele sunt identificate în etapă, nu la final, când remedierea devine costisitoare."],
  [ClipboardCheck, "Progresul este comunicat clar", "Știți ce s-a executat, ce urmează și ce decizii sunt necesare din partea dumneavoastră."],
  [HardHat, "Coordonarea rămâne într-un singur flux", "Echipele, furnizorii și specialitățile sunt gestionate ca părți ale aceluiași proiect."],
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="relative min-h-[88vh] bg-black pt-20 text-white md:min-h-[94vh] md:pt-24">
        <Image data-hero-image src="/HeroCarousel/1.webp" alt="Șantier de construcții TNG GRUP" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,12,13,.92)_0%,rgba(10,12,13,.75)_48%,rgba(10,12,13,.28)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.05)_25%,rgba(0,0,0,.62)_100%)]" />

        <div className="site-container relative z-10 flex min-h-[calc(88vh-5rem)] flex-col justify-end pb-10 pt-14 md:min-h-[calc(94vh-6rem)] md:pb-12 lg:justify-center lg:pb-0" data-hero-copy>
          <h1 className="display-title">Construcții bine coordonate, de la prima etapă până la recepție.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">TNG GRUP execută și coordonează proiecte civile și industriale, cu un singur flux pentru echipe, termene, calitate și deciziile tehnice care contează.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <SolicitatiOferta />
            <Link href="/portofoliu" className="button-light">Vezi proiectele <ArrowUpRight size={16} /></Link>
          </div>

          <div className="mt-11 grid max-w-2xl grid-cols-3 gap-5 border-t border-white/18 pt-6 md:mt-12 md:gap-10">
            {stats.map((item) => (
              <div key={item.id}>
                <div className="text-lg font-semibold tracking-[-.02em] md:text-xl">{item.value}</div>
                <div className="mt-1 max-w-[10rem] text-[.7rem] leading-4 text-white/66 md:text-[.76rem]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="site-container">
          <div className="surface-card overflow-hidden border-black/20!" data-reveal>
            <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[.95fr_1.05fr] lg:gap-10 lg:p-10 ">
              <div className="flex h-full flex-col justify-between">
                <SectionHeading label="Despre TNG GRUP" title="Mai puține necunoscute în șantier. Un singur partener tehnic." />
                <div className="mt-6 grid gap-4 sm:grid-cols-2" data-stagger>
                  {[
                    ["Comunicare directă", "Știți din timp ce se întâmplă în șantier și ce decizii trebuie luate."],
                    ["Control tehnic", "Calitatea, documentația și etapele importante sunt urmărite pe parcurs."],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-2xl border border-black/40 bg-white p-5 shadow-[0_10px_24px_rgba(22,24,25,.04)]">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="h-[2px] w-8 rounded-full bg-accent" />
                        <p className="text-[.95rem] font-semibold text-ink">{title}</p>
                      </div>
                      <p className="text-lg leading-8 text-ink-muted">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 lg:grid-cols-[1.05fr_.95fr]" data-stagger>
                <div className="rounded-2xl border border-black/40 bg-white p-5 shadow-[0_10px_24px_rgba(22,24,25,.03)] md:p-6">
                  <p className="text-lg leading-8 text-ink-soft">TNG GRUP AG este o companie românească de antreprenoriat general, fondată în 2019. Lucrăm cu o echipă tehnică experimentată și organizăm proiectele astfel încât responsabilitățile, termenele și calitatea să poată fi urmărite clar.</p>
                </div>
                <div className="rounded-2xl bg-[#161819] p-5 text-white md:p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-[2px] w-8 rounded-full bg-accent" />
                    <p className="text-[.95rem] font-semibold text-white">Abordare</p>
                  </div>
                  <p className="text-lg leading-8 text-white/74">Punem problemele importante pe masă devreme, când încă pot fi rezolvate eficient. Progresul, riscurile și următorii pași rămân vizibili pe parcurs.</p>
                </div>
                <div className="rounded-2xl border border-black/40 bg-white p-5 lg:col-span-2 md:p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <p className="max-w-2xl text-lg leading-8 text-ink-soft">Pentru dumneavoastră, asta înseamnă mai puține surprize și un proiect mai ușor de urmărit: știți ce s-a făcut, ce urmează și unde este nevoie de o decizie.</p>
                    <Link href="/despre" className="button-secondary !min-h-11 !px-5 shrink-0 border-black/25!">Mai multe <ArrowRight size={15} /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111314] py-16 text-white md:py-20">
        <div className="site-container grid gap-8 lg:grid-cols-[1.02fr_.98fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-[1.3rem] bg-black md:min-h-[540px]" data-reveal>
            <Image data-parallax src="/HeroCarousel/5.webp" alt="Echipă de construcții în timpul lucrărilor" fill className="object-cover scale-[1.08]" sizes="(max-width:1024px) 100vw, 54vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>
          <div className="lg:pl-8">
            <SectionHeading inverse label="De ce TNG GRUP" title="Ce primiți concret în colaborarea cu noi." description="Colaborarea rămâne clară pentru beneficiar: șantierul este urmărit, deciziile sunt comunicate, iar problemele sunt tratate la timp." />
            <div className="mt-7 space-y-5" data-stagger>
              {benefits.map(([Icon, title, text]) => (
                <div key={title} className="flex gap-4 border-b border-white/10 pb-5 last:border-0">
                  <Icon size={20} strokeWidth={1.7} className="mt-1 shrink-0 text-accent" />
                  <div>
                    <h3 className="text-base font-semibold text-white">{title}</h3>
                    <p className="mt-1.5 text-lg leading-8 text-white/68">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="site-container grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
          <div className="rounded-[1.5rem] bg-[#171a1b] p-6 text-white shadow-[0_22px_48px_rgba(17,19,20,.16)] md:p-8">
            <SectionHeading inverse label="Servicii" title="Alegeți nivelul de implicare de care proiectul are nevoie." description="De la execuție completă la supervizare, planificare, RTE sau dirigenție de șantier. Putem interveni punctual sau într-un flux integrat." />
            <div className="mt-7 grid gap-3" data-stagger>
              {services.slice(0, 4).map((service) => (
                <div key={service.id} className="rounded-2xl border border-white/10 bg-white/[.04] p-4 md:p-5">
                  <h3 className="text-base font-semibold text-white">{service.title}</h3>
                  <p className="mt-1.5 text-lg leading-8 text-white/72">{service.details}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-3">
              <Link href="/servicii" className="button-light w-full !justify-between">Toate serviciile <ArrowRight size={15} /></Link>
              <div className="hidden lg:grid grid-cols-[1fr_auto] items-center gap-3 rounded-[.95rem] border border-white/10 bg-white/[.04] p-3">
                <a href="tel:+40728873254" className="inline-flex min-h-[2.8rem] items-center gap-2 whitespace-nowrap rounded-xl border border-white/10 bg-white/[.035] px-4 text-[.95rem] font-medium text-white/85"><Phone size={16} /> 0728 873 254</a>
                <SolicitatiOferta customStyle="!min-h-[2.8rem] !px-4 whitespace-nowrap" />
              </div>
            </div>
          </div>

          <div className="grid gap-4" data-stagger>
            {services.slice(0, 5).map((service, index) => (
              <Link key={service.id} href={`/servicii#${service.id}`} className={`group rounded-2xl border p-5 transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(22,24,25,.08)] md:p-6 ${index === 0 ? "border-[#1d2021] bg-[#f3f6f8]" : "border-black/40 bg-white"}`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-3 inline-flex rounded-full border border-black/10 bg-white px-2.5 py-1 text-[.76rem] font-medium text-ink-muted">{service.short}</div>
                    <h3 className="text-lg font-semibold tracking-[-.02em] text-ink">{service.title}</h3>
                    <p className="mt-2 max-w-2xl text-lg leading-8 text-ink-muted">{service.details}</p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-[.88rem] leading-6 text-ink-soft">
                          <Check size={14} className="mt-0.5 shrink-0 text-accent" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ArrowUpRight size={18} className="mt-1 shrink-0 text-black/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111314] py-16 text-white md:py-20">
        <div className="site-container grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <SectionHeading inverse label="Cum lucrăm" title="Ce se întâmplă după ce ne contactați." description="Clarificăm cerințele, stabilim responsabilitățile și urmărim execuția până la recepție. Fără etape ascunse sau termeni inutil de complicați." />
          <div className="border-t border-white/10" data-stagger>
            {process.map((item, index) => (
              <div key={item.title} className="grid gap-3 border-b border-white/10 py-6 sm:grid-cols-[44px_1fr]">
                <span className="text-xs font-semibold text-accent">0{index + 1}</span>
                <div>
                  <h3 className="text-base font-semibold tracking-[-.015em] text-white md:text-lg">{item.title}</h3>
                  <p className="mt-2 max-w-2xl text-lg leading-8 text-white/68">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="site-container">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading label="Proiecte selectate" title="Lucrări reale, în contexte și dimensiuni diferite." description="Vedeți proiectele înainte de a lua o decizie și înțelegeți mai ușor felul în care lucrăm." />
            <Link href="/portofoliu" className="button-secondary self-start md:self-auto">Portofoliu complet <ArrowRight size={15} /></Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2" data-stagger>
            {projects.map((project, index) => (
              <Link href={project.href} key={project.id} className={`group relative min-h-[330px] overflow-hidden rounded-xl border border-black/40 ${index === 0 ? "md:min-h-[470px]" : index === 3 ? "md:min-h-[470px]" : "md:min-h-[390px]"}`}>
                <Image src={project.image} alt={project.title} fill className="object-cover transition duration-700 group-hover:scale-[1.025]" sizes="(max-width:768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/8 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-white">
                  <p className="text-[.72rem] font-medium text-white/60">{project.category}</p>
                  <div className="mt-1.5 flex items-end justify-between gap-4">
                    <h3 className="max-w-lg text-base font-semibold tracking-[-.015em] md:text-lg">{project.title}</h3>
                    <ArrowUpRight size={17} className="shrink-0 text-white/70" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#171a1b] py-12 text-white md:py-14">
        <div className="site-container flex flex-col gap-6 md:flex-row md:items-center md:justify-between" data-reveal>
          <div>
            <p className="text-sm font-medium text-white/78">Aveți un proiect în pregătire?</p>
            <h2 className="mt-2 max-w-3xl text-xl font-semibold tracking-[-.025em] md:text-2xl">Trimiteți-ne datele de bază ale proiectului. Revenim cu întrebările tehnice și pașii următori.</h2>
          </div>
          <SolicitatiOferta customStyle="shrink-0" />
        </div>
      </section>
    </div>
  );
}
