import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, Eye, ShieldCheck, Target } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Counter from "@/components/motion/Counter";
import { constructMetadata } from "@/lib/utils";
import { stats } from "@/lib/site-data";

const splitStat = (value) => {
  const m = /^(\d+)(.*)$/.exec(value);
  return m ? { n: Number(m[1]), suffix: m[2] } : { n: 0, suffix: value };
};

export const metadata = constructMetadata({
  title: "Despre TNG GRUP - Viziune și Valori",
  description: "Aflați mai multe despre TNG GRUP, companie românească de antreprenoriat general, execuție și consultanță tehnică în construcții.",
  keywords: "TNG GRUP, antreprenoriat general, construcții România, echipă tehnică",
});

const principles = [
  { icon: ShieldCheck, title: "Rigoare tehnică", text: "Respectăm proiectul, standardele și obligațiile asumate. Verificăm etapele importante înainte ca lucrările să fie închise." },
  { icon: Building2, title: "Comunicare directă", text: "Beneficiarul primește informația relevantă la timp: progres, riscuri, decizii și următorii pași." },
  { icon: Target, title: "Planificare realistă", text: "Corelăm resursele, aprovizionarea și specialitățile într-un plan care poate fi urmărit și actualizat." },
  { icon: CheckCircle2, title: "Responsabilitate", text: "Ne asumăm rolul tehnic și urmărim problemele până la rezolvare, nu doar până la semnalare." },
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
        title={<>Companie românească de construcții, <em>fondată în 2019.</em></>}
        description="Executăm și coordonăm proiecte civile și industriale, cu experiență în organizarea șantierului, controlul calității și servicii tehnice pentru beneficiar."
        image="/despre/2.jpg"
      />

      {/* CINE SUNTEM */}
      <section className="bg-white py-20 md:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
          <SectionHeading
            label="Cine suntem"
            title={<>Experiență tehnică pusă într-un mod de lucru <em>simplu și responsabil.</em></>}
          />
          <div data-stagger>
            <p className="max-w-3xl text-xl leading-9 text-ink md:text-2xl md:leading-10">
              Am construit TNG GRUP în jurul unei idei simple: beneficiarul trebuie să poată urmări proiectul fără să sacrifice calitatea, ritmul de execuție sau claritatea deciziilor.
            </p>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <p className="text-lg leading-8 text-ink-muted">Asigurăm execuție, management și servicii tehnice specializate pentru proiecte civile și industriale, adaptând echipa și modul de lucru la complexitatea investiției.</p>
              <p className="text-lg leading-8 text-ink-muted">Punem accent pe documentație, coordonare și verificare pe parcurs, astfel încât deciziile importante să fie luate înainte ca ele să devină costuri sau întârzieri.</p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-y border-black/10 py-8">
              {stats.map((item) => {
                const { n, suffix } = splitStat(item.value);
                return (
                  <div key={item.id}>
                    <div className="font-display text-3xl font-medium tracking-[-.02em] text-accent md:text-5xl">
                      <Counter value={n} suffix={suffix} />
                    </div>
                    <div className="mt-2 max-w-[12rem] text-[.74rem] leading-5 text-ink-muted md:text-[.8rem]">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPII */}
      <section className="relative overflow-hidden bg-[#0c0e0f] py-20 text-white md:py-28 on-dark">
        <div className="grain" aria-hidden="true" />
        <div className="site-container relative grid gap-12 lg:grid-cols-[1.04fr_.96fr] lg:items-center lg:gap-16">
          <div className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] bg-black md:min-h-[600px]" data-reveal>
            <Image data-parallax src="/despre/3.jpg" alt="Lucrări de construcții coordonate de TNG GRUP" fill className="scale-[1.08] object-cover" sizes="(max-width:1024px) 100vw, 54vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/15 bg-black/40 px-6 py-5 backdrop-blur-md">
              <div className="font-display text-4xl font-medium text-accent-bright">2019</div>
              <div className="mt-1 text-[.82rem] font-medium text-white/70">anul fondării TNG GRUP AG</div>
            </div>
          </div>

          <div>
            <SectionHeading
              inverse
              label="Principii de lucru"
              title={<>Principii care se văd <em>în șantier</em>, nu doar în prezentare.</>}
              description="Modul nostru de lucru se vede în organizarea șantierului, în felul în care raportăm progresul și în cât de repede sunt transformate problemele tehnice în decizii clare."
            />
            <div className="mt-8 grid gap-3" data-stagger>
              {principles.map(({ icon: Icon, title, text }) => (
                <div key={title} className="dark-card group flex gap-4 p-5 transition-colors hover:border-white/20">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-white/[.04] text-accent-bright">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{title}</h3>
                    <p className="mt-1.5 text-lg leading-8 text-white/64">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISIUNE / VIZIUNE */}
      <section className="bg-white py-20 md:py-28">
        <div className="site-container">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <div className="surface-card relative overflow-hidden p-8 md:p-10" data-reveal>
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Target size={22} />
              </div>
              <p className="mt-6 text-[.78rem] font-bold uppercase tracking-[.16em] text-ink-faint">Misiune</p>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-medium tracking-[-.02em] text-ink md:text-4xl">Execuție corectă, control tehnic și claritate pentru beneficiar.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-muted">Să transformăm proiectele bine gândite în construcții executate corect, fără să pierdem controlul asupra detaliilor, calității și etapelor care influențează costul final.</p>
            </div>

            <div className="relative overflow-hidden rounded-[1.35rem] bg-[#141618] p-8 text-white md:p-10" data-reveal>
              <div className="grain" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/12 bg-white/[.05] text-accent-bright">
                <Eye size={22} />
              </div>
              <p className="mt-6 text-[.78rem] font-bold uppercase tracking-[.16em] text-white/45">Viziune</p>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-medium tracking-[-.02em] text-white md:text-4xl">O industrie în care transparența și calitatea nu mai sunt excepții.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/66">Construim un mod de lucru în care planificarea, verificarea și comunicarea devin standard pentru fiecare proiect, nu doar promisiuni din ofertă.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3" data-stagger>
            {missionPillars.map(({ icon: Icon, title, text }) => (
              <div key={title} className="surface-card group p-6 transition-transform duration-300 hover:-translate-y-1 md:p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Icon size={19} strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-[-.015em] text-ink">{title}</h3>
                <p className="mt-2 text-lg leading-8 text-ink-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA PORTOFOLIU */}
      <section className="bg-paper py-16 md:py-20">
        <div className="site-container" data-reveal>
          <div className="surface-card overflow-hidden">
            <div className="grid gap-6 p-7 md:grid-cols-[1.2fr_.8fr] md:items-center md:p-10">
              <div>
                <p className="eyebrow">Portofoliu</p>
                <h2 className="max-w-2xl font-display text-3xl font-medium tracking-[-.02em] text-ink md:text-4xl">Vedeți cum principiile devin <em>proiecte reale.</em></h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-muted">De la locuințe și clădiri comerciale până la spații industriale și amenajări, portofoliul arată felul în care organizăm execuția și controlul calității în practică.</p>
              </div>
              <div className="md:justify-self-end">
                <Link href="/portofoliu" className="button-primary">Vezi portofoliul <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
