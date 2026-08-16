import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Images, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { SolicitatiOferta } from "@/components/SolicitatiOferta";
import { proiecte } from "@/utils/proiecte";
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
        title="Proiecte care arată cum lucrăm, nu doar ce promitem."
        description="O selecție de construcții civile, proiecte industriale și amenajări în care puteți vedea concret amploarea lucrărilor și rolul echipei TNG GRUP."
        image="/portofoliu/portofoliu.jpg"
        action={{ href: "#proiecte", label: "Vezi proiectele" }}
      />

      <section className="bg-paper py-12 md:py-14">
        <div className="site-container">
          <div className="surface-card grid gap-7 p-6 md:p-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end" data-reveal>
            <div>
              <p className="page-label">În portofoliu</p>
              <h2 className="max-w-xl text-2xl font-semibold tracking-[-.035em] text-ink md:text-[2rem]">Proiecte cu cerințe, scări și contexte diferite.</h2>
              <p className="mt-3 max-w-xl text-[.92rem] leading-7 text-ink-muted">Fotografiile și datele de mai jos sunt prezentate simplu, astfel încât să puteți evalua rapid tipul de lucrări pe care le-am executat sau coordonat.</p>
            </div>
            <nav className="grid gap-2 sm:grid-cols-2" aria-label="Navigare proiecte">
              {proiecte.map((project, index) => (
                <Link key={project.id} href={`#${project.id}`} className="group flex items-center justify-between rounded-xl border border-black/9 bg-paper/55 px-4 py-3.5 text-sm font-medium text-ink transition hover:border-black/18 hover:bg-white">
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="text-[.7rem] font-semibold text-accent">0{index + 1}</span>
                    <span className="truncate">{project.nume}</span>
                  </span>
                  <ArrowRight size={14} className="shrink-0 text-black/30 transition group-hover:translate-x-0.5 group-hover:text-accent" />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section id="proiecte" className="bg-white py-16 md:py-20">
        <div className="site-container">
          <SectionHeading
            label="Proiecte selectate"
            title="Detalii suficiente pentru a înțelege proiectul dintr-o privire."
            description="Pentru fiecare lucrare prezentăm contextul, dimensiunile relevante și o selecție de imagini din execuție sau din rezultatul final."
          />

          <div className="mt-12 space-y-14 md:mt-16 md:space-y-20">
            {proiecte.map((project, projectIndex) => (
              <article key={project.id} id={project.id} className="scroll-mt-28" data-reveal>
                <div className="surface-card overflow-hidden">
                  <div className="grid lg:grid-cols-[1.38fr_.62fr]">
                    <div className="relative min-h-[360px] bg-black md:min-h-[560px]">
                      <Image
                        src={project.imagine[0]}
                        alt={`${project.nume} — imagine principală`}
                        fill
                        className="object-cover"
                        sizes="(max-width:1024px) 100vw, 68vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-transparent to-black/8" />
                      <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-7">
                        <div className="flex items-center gap-3 text-[.72rem] font-medium text-white/68">
                          <span>0{projectIndex + 1}</span>
                          <span className="h-px w-8 bg-white/30" />
                          <span>{project.categorie}</span>
                        </div>
                        <h2 className="mt-2 max-w-3xl text-xl font-semibold tracking-[-.03em] md:text-[1.75rem]">{project.nume}</h2>
                      </div>
                    </div>

                    <div className="flex flex-col bg-[#171a1b] p-5 text-white md:p-7">
                      <div>
                        <p className="text-[.74rem] font-medium text-white/50">Date proiect</p>
                        <dl className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-1">
                          {project.detalii.map((detail) => (
                            <div key={`${project.id}-${detail.id}`} className="rounded-xl border border-white/10 bg-white/[.045] p-4">
                              <dt className="text-[.7rem] leading-5 text-white/48">{detail.label}</dt>
                              <dd className="mt-1 text-lg font-semibold tracking-[-.02em] text-white">{detail.value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>

                      <div className="mt-6 border-t border-white/10 pt-5 lg:mt-auto">
                        <p className="text-sm font-semibold text-white">Ce a presupus lucrarea</p>
                        <p className="mt-3 text-[.88rem] leading-7 text-white/66">{project.descriere}</p>
                        <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-accent">
                          Discutați un proiect similar <ArrowRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-black/8 bg-paper/55 p-4 md:p-5">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                        <Images size={16} className="text-accent" />
                        Galerie proiect
                      </div>
                      <span className="text-[.72rem] text-ink-muted">{project.imagine.length - 1} imagini</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-3" data-stagger>
                      {project.imagine.slice(1).map((src, imageIndex) => (
                        <div key={`${project.id}-gallery-${imageIndex}`} className={`group relative overflow-hidden rounded-xl bg-black ${imageIndex === 0 ? "aspect-[4/3] md:col-span-2 md:row-span-2 md:aspect-auto md:min-h-[410px]" : "aspect-[4/3]"}`}>
                          <Image src={src} alt={`${project.nume} — galerie ${imageIndex + 1}`} fill className="object-cover transition duration-500 group-hover:scale-[1.025]" sizes="(max-width:768px) 50vw, 33vw" />
                          <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/8" />
                          <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-black/42 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                            <ArrowUpRight size={14} />
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

      <section className="bg-[#111314] py-14 text-white md:py-16">
        <div className="site-container" data-reveal>
          <div className="dark-card grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <p className="text-sm font-medium text-white/62">Aveți un proiect în pregătire?</p>
              <h2 className="mt-2 max-w-3xl text-xl font-semibold tracking-[-.025em] md:text-2xl">Trimiteți-ne pe scurt ce doriți să construiți și în ce etapă vă aflați.</h2>
              <p className="mt-3 max-w-2xl text-[.88rem] leading-7 text-white/64">Nu aveți nevoie de toate detaliile tehnice pentru primul contact. Putem începe cu localitatea, tipul lucrării și datele de contact.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <a href="tel:+40728873254" className="button-light"><Phone size={15} /> 0728 873 254</a>
              <SolicitatiOferta customStyle="shrink-0" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
