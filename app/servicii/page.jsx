import Link from "next/link";
import { ArrowRight, Check, ClipboardCheck, HardHat, Layers3, ShieldCheck } from "lucide-react";
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

const serviceBenefits = [
  {
    icon: HardHat,
    title: "Execuție și coordonare",
    text: "Intervenim direct în șantier sau preluăm coordonarea etapelor și a responsabilităților tehnice.",
  },
  {
    icon: ClipboardCheck,
    title: "Controlul calității",
    text: "Verificăm documentația, materialele și etapele importante pentru un rezultat conform și predictibil.",
  },
  {
    icon: Layers3,
    title: "Servicii adaptate proiectului",
    text: "Puteți contracta un singur serviciu sau un pachet complet, în funcție de stadiul investiției.",
  },
];

export default function Servicii() {
  return (
    <div>
      <PageHero
        label="Servicii"
        title="De la execuție la control tehnic, alegem nivelul corect de implicare."
        description="Aveți nevoie de execuție completă, supervizare sau un rol tehnic punctual? Pornim de la stadiul real al proiectului și definim clar unde putem interveni."
        image="/HeroCarousel/7.webp"
        action={{ href: "#servicii", label: "Vezi serviciile" }}
      />

      <section id="servicii" className="bg-paper py-16 md:py-20">
        <div className="site-container grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              label="Capabilități"
              title="Nu toate proiectele au nevoie de același tip de intervenție."
              description="Spuneți-ne unde se află proiectul acum. Vă ajutăm să separați ce este necesar de ce este doar opțional și stabilim rolul potrivit pentru echipa noastră."
            />

            <div className="mt-7 grid gap-3" data-stagger>
              {serviceBenefits.map(({ icon: Icon, title, text }) => (
                <div key={title} className="surface-card p-4 md:p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold tracking-[-.015em] text-ink">{title}</h3>
                      <p className="mt-1.5 text-[.82rem] leading-6 text-ink-muted">{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <nav className="mt-7 hidden rounded-2xl border border-black/10 bg-white p-3 lg:block" aria-label="Servicii TNG GRUP">
              <p className="px-3 pb-2 text-[.74rem] font-medium text-ink-muted">Navigare rapidă</p>
              {services.map((service) => (
                <Link key={service.id} href={`#${service.id}`} className="flex items-center justify-between rounded-xl px-3 py-3 text-[.82rem] font-medium text-ink-muted transition hover:bg-paper hover:text-ink">
                  <span>{service.short}</span>
                  <ArrowRight size={14} className="text-black/28" />
                </Link>
              ))}
            </nav>
          </aside>

          <div className="grid gap-4" data-stagger>
            {services.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className={`scroll-mt-28 rounded-2xl border p-5 md:p-6 ${index === 0 ? "border-[#1d2021] bg-[#171a1b] text-white shadow-[0_20px_40px_rgba(17,19,20,.12)]" : "border-black/10 bg-white"}`}
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-3xl">
                    <div className={`mb-3 inline-flex rounded-full border px-2.5 py-1 text-[.7rem] font-medium ${index === 0 ? "border-white/12 bg-white/6 text-white/62" : "border-black/10 bg-paper text-ink-muted"}`}>
                      {service.short}
                    </div>
                    <h2 className={`text-xl font-semibold tracking-[-.025em] md:text-[1.4rem] ${index === 0 ? "text-white" : "text-ink"}`}>{service.title}</h2>
                    <p className={`mt-3 text-[.91rem] leading-7 md:text-[.95rem] ${index === 0 ? "text-white/72" : "text-ink-muted"}`}>{service.details}</p>
                  </div>

                  <div className={`shrink-0 rounded-2xl border px-4 py-3 text-sm ${index === 0 ? "border-white/12 bg-white/5 text-white/74" : "border-black/10 bg-paper/65 text-ink-soft"}`}>
                    <div className="flex items-center gap-2 font-medium">
                      <ShieldCheck size={15} className="text-accent" />
                      Serviciu potrivit pentru
                    </div>
                    <p className="mt-2 max-w-[18rem] text-[.8rem] leading-6">Proiecte noi, șantiere în curs sau investiții care au nevoie de mai mult control tehnic.</p>
                  </div>
                </div>

                <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
                  {service.bullets.map((bullet) => (
                    <div key={bullet} className={`flex items-start gap-2.5 rounded-xl border px-3.5 py-3 text-[.8rem] leading-6 ${index === 0 ? "border-white/10 bg-white/[.04] text-white/76" : "border-black/8 bg-paper/55 text-ink-soft"}`}>
                      <Check size={14} strokeWidth={2.2} className="mt-1 shrink-0 text-accent" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className={`mt-5 flex flex-col gap-3 border-t pt-4 sm:flex-row sm:items-center sm:justify-between ${index === 0 ? "border-white/10" : "border-black/10"}`}>
                  <p className={`text-[.78rem] leading-6 ${index === 0 ? "text-white/58" : "text-ink-muted"}`}>
                    Serviciul poate rămâne punctual sau poate fi integrat într-un flux mai amplu de execuție și coordonare.
                  </p>
                  <Link href="/contact" className={`inline-flex items-center gap-2 text-sm font-semibold ${index === 0 ? "text-white hover:text-white/80" : "text-ink hover:text-accent"}`}>
                    Discutați serviciul cu noi <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111314] py-14 text-white md:py-16">
        <div className="site-container" data-reveal>
          <div className="dark-card flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <p className="text-sm font-medium text-white/66">Nu știți exact ce serviciu vă trebuie?</p>
              <h2 className="mt-2 max-w-3xl text-xl font-semibold tracking-[-.025em] md:text-2xl">Descrieți-ne situația actuală. Identificăm împreună punctul în care putem aduce cea mai multă valoare.</h2>
              <p className="mt-3 max-w-2xl text-[.9rem] leading-7 text-white/66">Pentru început sunt suficiente tipul lucrării, localitatea și stadiul proiectului. Restul detaliilor le clarificăm după ce înțelegem contextul.</p>
            </div>
            <SolicitatiOferta customStyle="shrink-0" />
          </div>
        </div>
      </section>
    </div>
  );
}
