import { ArrowRight, Clock3, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SolicitatiOfertaForm from "@/components/SolicitatiOfertaForm";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Contact TNG GRUP - Solicitați o ofertă",
  description: "Contactați TNG GRUP pentru proiecte de construcții civile, industriale, supervizare, RTE sau dirigenție de șantier.",
  keywords: "contact TNG GRUP, ofertă construcții București, antreprenor general",
});

const contacts = [
  { id: "telefon", icon: Phone, label: "Telefon", value: "0728 873 254", href: "tel:+40728873254" },
  { id: "email", icon: Mail, label: "Email", value: "office@tngag.ro", href: "mailto:office@tngag.ro" },
  { id: "adresa", icon: MapPin, label: "Adresă", value: "Str. Costache Sibiceanu nr. 8, Sector 1, București", href: "https://maps.app.goo.gl/1st6m75wnDy4ryyJ8" },
  { id: "program", icon: Clock3, label: "Program", value: "Luni – Vineri, 09:00 – 18:00" },
];

const helpfulInfo = [
  "localitatea și tipul lucrării",
  "stadiul documentației sau al șantierului",
  "termenul orientativ pentru începere",
  "un număr de telefon la care putem reveni",
];

export default function Contact() {
  return (
    <div>
      <PageHero
        label="Contact"
        title={<>Spuneți-ne pe scurt despre proiect. <em>De aici continuăm noi.</em></>}
        description="Nu aveți nevoie de o documentație perfect pregătită pentru primul contact. Datele de contact și câteva informații despre lucrare sunt suficiente ca să începem discuția."
        image="/HeroCarousel/3.webp"
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-[.68fr_1.32fr] lg:items-start lg:gap-16">
          <div>
            <SectionHeading
              label="Date de contact"
              title={<>Alegeți varianta <em>cea mai simplă</em> pentru dumneavoastră.</>}
              description="Completați formularul, sunați-ne sau trimiteți un email. Dacă ne spuneți localitatea, tipul lucrării și stadiul proiectului, putem intra mai repede în detaliile relevante."
            />

            <div className="mt-8 grid gap-3" data-stagger>
              {contacts.map(({ id, icon: Icon, label, value, href }) => {
                const inner = (
                  <div className="group flex items-start gap-4 rounded-2xl border border-black/10 bg-white p-5 transition-colors hover:border-accent/30">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-[.74rem] font-bold uppercase tracking-[.12em] text-ink-faint">{label}</div>
                      <div className="mt-1.5 text-lg font-semibold leading-7 text-ink">{value}</div>
                    </div>
                  </div>
                );

                return href ? (
                  <a key={id} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="block transition-transform duration-300 hover:-translate-y-0.5">
                    {inner}
                  </a>
                ) : (
                  <div key={id}>{inner}</div>
                );
              })}
            </div>

            <div className="mt-6 surface-card p-6" data-reveal>
              <div className="flex items-center gap-2.5 text-base font-bold text-ink">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent"><ShieldCheck size={16} /></span>
                Ce ne ajută la primul răspuns
              </div>
              <p className="mt-3 text-lg leading-8 text-ink-muted">Nu este nevoie de un brief complicat. Dacă le aveți la îndemână, aceste informații ne ajută să înțelegem contextul din prima:</p>
              <ul className="mt-4 grid gap-2">
                {helpfulInfo.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-lg leading-8 text-ink-soft">
                    <ArrowRight size={15} className="mt-1.5 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full self-start overflow-hidden rounded-[1.5rem] bg-[#15181a] shadow-[0_24px_60px_-24px_rgba(17,19,20,.45)] lg:max-w-[780px] lg:justify-self-end" data-reveal>
            <SolicitatiOfertaForm embedded />
          </div>
        </div>
      </section>
    </div>
  );
}
