import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Images, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { SolicitatiOferta } from "@/components/SolicitatiOferta";
import { proiecte } from "@/utils/proiecte.js";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Portofoliu TNG GRUP - Proiecte de Construcții",
  description: "Explorați proiecte civile, industriale și amenajări realizate sau coordonate de TNG GRUP.",
  keywords: "portofoliu TNG GRUP, proiecte construcții, construcții civile, construcții industriale",
});

export default function Portofoliu() {
  return (
    <div>
      <PageHero
        label="Portofoliu"
        title={<>Proiecte care arată <em>cum lucrăm</em>, nu doar ce promitem.</>}
        description="O selecție de construcții civile, proiecte industriale și amenajări în care puteți vedea concret amploarea lucrărilor și rolul echipei TNG GRUP."
        image="/portofoliu/portofoliu.jpg"
        action={{ href: "#proiecte", label: "Vezi proiectele" }}
      />

      {/* INTRO + NAV */}
      <section className="bg-paper py-14 md:py-16">
        <div className="site-container">
          <div className="surface-card grid gap-8 p-7 md:p-9 lg:grid-cols-[.9fr_1.1fr] lg:items-end" data-reveal>
            <div>
              <p className="eyebrow">În portofoliu</p>
              <h2 className="max-w-xl font-display text-3xl font-medium tracking-[-.02em] text-ink md:text-4xl">Proiecte cu cerințe, scări și contexte diferite.</h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-ink-muted">Fotografiile și datele de mai jos sunt prezentate simplu, astfel încât să puteți evalua rapid tipul de lucrări pe care le-am executat sau coordonat.</p>
            </div>
            <nav className="grid gap-2 sm:grid-cols-2" aria-label="Navigare proiecte">
              {proiecte.map((project, index) => (
                <Link key={project.id} href={`#${project.id}`} className="group flex items-center justify-between rounded-xl border border-black/10 bg-paper/55 px-4 py-3.5 text-base font-semibold text-ink transition-colors hover:border-accent/30 hover:bg-white">
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="font-display text-sm text-accent">0{index + 1}</span>
                    <span className="truncate">{project.nume}</span>
                  </span>
                  <ArrowRight size={14} className="shrink-0 text-black/30 transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* PROIECTE */}
      <section id="proiecte" className="bg-white py-20 md:py-28">
        <div className="site-container">
          <SectionHeading
            label="Proiecte selectate"
            title={<>Detalii suficiente pentru a înțelege proiectul <em>dintr-o privire.</em></>}
            description="Pentru fiecare lucrare prezentăm contextul, dimensiunile relevante și o selecție de imagini din execuție sau din rezultatul final."
          />

          <div className="mt-14 space-y-16 md:mt-16 md:space-y-24">
            {proiecte.map((project, projectIndex) => (
              <article key={project.id} id={project.id} className="scroll-mt-28" data-reveal>
                <div className="surface-card overflow-hidden">
                  <div className="grid lg:grid-cols-[1.38fr_.62fr]">
                    <div className="relative min-h-[340px] bg-black md:min-h-[560px]">
                      <Image
                        src={project.imagine[0]}
                        alt={`${project.nume} — imagine principală`}
                        fill
                        className="object-cover"
                        sizes="(max-width:1024px) 100vw, 66vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />
                      <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                        <div className="flex items-center gap-3 text-[.74rem] font-semibold uppercase tracking-[.14em] text-white/70">
                          <span className="text-accent-bright">0{projectIndex + 1}</span>
                          <span className="h-px w-8 bg-white/30" />
                          <span>{project.categorie}</span>
                        </div>
                        <h2 className="mt-3 max-w-3xl font-display text-2xl font-medium leading-snug tracking-[-.02em] md:text-4xl">{project.nume}</h2>
                      </div>
                    </div>

                    <div className="flex flex-col bg-[#141618] p-6 text-white md:p-8">
                      <div>
                        <p className="text-[.74rem] font-bold uppercase tracking-[.16em] text-white/45">Date proiect</p>
                        <dl className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-1">
                          {project.detalii.map((detail) => (
                            <div key={`${project.id}-${detail.id}`} className="rounded-xl border border-white/10 bg-white/[.04] p-4">
                              <dt className="text-[.72rem] leading-5 text-white/45">{detail.label}</dt>
                              <dd className="mt-1.5 font-display text-xl font-medium tracking-[-.02em] text-accent-bright">{detail.value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>

                      <div className="mt-6 border-t border-white/10 pt-6 lg:mt-auto">
                        <p className="text-base font-bold text-white">Ce a presupus lucrarea</p>
                        <p className="mt-3 text-lg leading-8 text-white/66">{project.descriere}</p>
                        <Link href="/contact" className="group mt-6 inline-flex items-center gap-2 text-base font-bold text-accent-bright transition-colors hover:text-white">
                          Discutați un proiect similar <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-black/10 bg-paper/60 p-5 md:p-6">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2.5 text-base font-bold text-ink">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent"><Images size={16} /></span>
                        Galerie proiect
                      </div>
                      <span className="text-[.76rem] font-medium text-ink-muted">{project.imagine.length - 1} imagini</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-3" data-stagger>
                      {project.imagine.slice(1).map((src, imageIndex) => (
                        <div key={`${project.id}-gallery-${imageIndex}`} className={`group relative overflow-hidden rounded-xl bg-black ${imageIndex === 0 ? "aspect-[4/3] md:col-span-2 md:row-span-2 md:aspect-auto md:min-h-[420px]" : "aspect-[4/3]"}`}>
                          <Image src={src} alt={`${project.nume} — galerie ${imageIndex + 1}`} fill className="object-cover transition duration-700 group-hover:scale-[1.04]" sizes="(max-width:768px) 50vw, 33vw" />
                          <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
                          <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-black/45 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                            <ArrowUpRight size={15} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0c0e0f] py-20 text-white md:py-24 on-dark">
        <div className="grain" aria-hidden="true" />
        <div className="site-container relative" data-reveal>
          <div className="dark-card grid gap-8 p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div className="max-w-2xl">
              <p className="eyebrow eyebrow--light">Aveți un proiect în pregătire?</p>
              <h2 className="mt-2 font-display text-3xl font-medium leading-[1.06] tracking-[-.02em] md:text-4xl">Trimiteți-ne pe scurt ce doriți să construiți <em>și în ce etapă vă aflați.</em></h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/64">Nu aveți nevoie de toate detaliile tehnice pentru primul contact. Putem începe cu localitatea, tipul lucrării și datele de contact.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <a href="tel:+40728873254" className="button-light"><Phone size={15} /> 0728 873 254</a>
              <SolicitatiOferta className="shrink-0" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
