import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, Eye, ShieldCheck, Target } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { constructMetadata } from "@/lib/utils";
import { stats } from "@/lib/site-data";

export const metadata = constructMetadata({
  title: "Despre TNG GRUP - Viziune și Valori",
  description: "Aflați mai multe despre TNG GRUP, companie românească de antreprenoriat general, execuție și consultanță tehnică în construcții.",
  keywords: "TNG GRUP, antreprenoriat general, construcții România, echipă tehnică",
});

const principles = [
  ["Rigoare tehnică", "Respectăm proiectul, standardele și obligațiile asumate. Verificăm etapele importante înainte ca lucrările să fie închise."],
  ["Comunicare directă", "Beneficiarul primește informația relevantă la timp: progres, riscuri, decizii și următorii pași."],
  ["Planificare realistă", "Corelăm resursele, aprovizionarea și specialitățile într-un plan care poate fi urmărit și actualizat."],
  ["Responsabilitate", "Ne asumăm rolul tehnic și urmărim problemele până la rezolvare, nu doar până la semnalare."],
];

const missionPillars = [
  { icon: ShieldCheck, title: "Control pe parcurs", text: "Verificăm calitatea și deciziile tehnice în etapele importante, nu doar la final." },
  { icon: Building2, title: "Execuție coordonată", text: "Corelăm echipele, specialitățile și furnizorii astfel încât șantierul să rămână predictibil." },
  { icon: CheckCircle2, title: "Transparență pentru beneficiar", text: "Comunicăm clar ce s-a făcut, ce urmează și unde trebuie luate decizii." },
];

export default function Despre() {
  return (
    <div>
      <PageHero
        label="Despre TNG GRUP"
        title="Companie românească de construcții, fondată în 2019."
        description="Executăm și coordonăm proiecte civile și industriale, cu experiență în organizarea șantierului, controlul calității și servicii tehnice pentru beneficiar."
        image="/despre/2.jpg"
      />

      <section className="bg-white py-16 md:py-20">
        <div className="site-container grid gap-10 lg:grid-cols-[.82fr_1.18fr]">
          <SectionHeading label="Cine suntem" title="Experiență tehnică pusă într-un mod de lucru simplu și responsabil." />
          <div data-stagger>
            <p className="max-w-3xl text-lg leading-8 text-ink">Am construit TNG GRUP în jurul unei idei simple: beneficiarul trebuie să poată urmări proiectul fără să sacrifice calitatea, ritmul de execuție sau claritatea deciziilor.</p>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <p className="text-lg leading-8 text-ink-muted">Asigurăm execuție, management și servicii tehnice specializate pentru proiecte civile și industriale, adaptând echipa și modul de lucru la complexitatea investiției.</p>
              <p className="text-lg leading-8 text-ink-muted">Punem accent pe documentație, coordonare și verificare pe parcurs, astfel încât deciziile importante să fie luate înainte ca ele să devină costuri sau întârzieri.</p>
            </div>
            <div className="mt-9 grid grid-cols-3 gap-4 border-y border-black/10 py-6">
              {stats.map((item) => (
                <div key={item.id}>
                  <div className="text-lg font-semibold tracking-[-.02em] md:text-xl">{item.value}</div>
                  <div className="mt-1.5 max-w-[10rem] text-[.7rem] leading-4 text-ink-muted md:text-[.75rem]">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#171a1b] py-16 text-white md:py-20">
        <div className="site-container grid gap-8 lg:grid-cols-[1.04fr_.96fr] lg:items-start">
          <div className="relative min-h-[430px] overflow-hidden rounded-[1.4rem] bg-black md:min-h-[600px] lg:sticky lg:top-28 lg:self-start" data-reveal>
            <Image data-parallax src="/despre/3.jpg" alt="Lucrări de construcții coordonate de TNG GRUP" fill className="object-cover scale-[1.08]" sizes="(max-width:1024px) 100vw, 56vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          </div>
          <div className="lg:pl-8">
            <SectionHeading inverse label="Principii de lucru" title="Principii care se văd în șantier, nu doar în prezentare." description="Modul nostru de lucru se vede în organizarea șantierului, în felul în care raportăm progresul și în cât de repede sunt transformate problemele tehnice în decizii clare." />
            <div className="mt-7 grid gap-3" data-stagger>
              {principles.map(([title, text]) => (
                <div key={title} className="dark-card p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-accent" />
                    <h3 className="text-base font-semibold text-white">{title}</h3>
                  </div>
                  <p className="text-lg leading-8 text-white/70">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="site-container">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_.92fr] lg:items-stretch">
            <div className="surface-card relative overflow-hidden p-7 md:p-9 border-black/40!" data-reveal>
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#aab9c8]/18 blur-3xl" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#dbe3ea] text-accent">
                  <Target size={20} />
                </div>
                <div>
                  <p className="text-[.95rem] font-semibold text-ink">Misiune</p>
                  <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-[-.03em] text-ink md:text-[2rem]">Execuție corectă, control tehnic și claritate pentru beneficiar.</h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-muted">Să transformăm proiectele bine gândite în construcții executate corect, fără să pierdem controlul asupra detaliilor, calității și etapelor care influențează costul final.</p>
                </div>
              </div>
            </div>

            <div className="surface-card relative overflow-hidden bg-[#1a1d1e] p-7 text-white md:p-9 border-black/40!" data-reveal>
              <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#aab9c8]/22 blur-3xl" />
              <div className="relative z-10 flex items-start gap-4 ">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/8 text-accent">
                  <Eye size={20} />
                </div>
                <div>
                  <p className="text-[.95rem] font-semibold text-black">Viziune</p>
                  <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-[-.03em] text-black md:text-[2rem]">O industrie în care transparența și calitatea nu mai sunt excepții.</h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-black/72">Construim un mod de lucru în care planificarea, verificarea și comunicarea devin standard pentru fiecare proiect, nu doar promisiuni din ofertă.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3" data-stagger>
            {missionPillars.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-black/40 bg-white p-5 md:p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dbe3ea] text-accent">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 text-base font-semibold tracking-[-.015em] text-ink">{title}</h3>
                <p className="mt-2 text-lg leading-8 text-ink-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#171a1b] py-12 text-white md:py-14">
        <div className="site-container" data-reveal>
          <div className="dark-card overflow-hidden">
            <div className="grid gap-6 p-6 md:grid-cols-[1.2fr_.8fr] md:items-center md:p-8 lg:p-10">
              <div>
                <p className="page-label mb-3 !text-white/58">Portofoliu</p>
                <h2 className="max-w-2xl text-2xl font-semibold tracking-[-.03em] text-accent md:text-[2rem]">Vedeți cum aceste principii se transformă în proiecte reale.</h2>
                <p className="mt-3 max-w-2xl text-lg leading-8 text-white/68">De la locuințe și clădiri comerciale până la spații industriale și amenajări, portofoliul arată felul în care organizăm execuția și controlul calității în practică.</p>
              </div>
              <div className="md:justify-self-end">
                <Link href="/portofoliu" className="button-light self-start">Vezi portofoliul <ArrowRight size={15} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
