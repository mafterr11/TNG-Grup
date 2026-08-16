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
        title="Spuneți-ne pe scurt despre proiect. De aici continuăm noi."
        description="Nu aveți nevoie de o documentație perfect pregătită pentru primul contact. Datele de contact și câteva informații despre lucrare sunt suficiente ca să începem discuția."
        image="/HeroCarousel/3.webp"
      />

      <section className="bg-paper py-16 md:py-20">
        <div className="site-container grid gap-10 lg:grid-cols-[.68fr_1.32fr] lg:items-start">
          <div>
            <SectionHeading
              label="Date de contact"
              title="Alegeți varianta cea mai simplă pentru dumneavoastră."
              description="Completați formularul, sunați-ne sau trimiteți un email. Dacă ne spuneți localitatea, tipul lucrării și stadiul proiectului, putem intra mai repede în detaliile relevante."
            />

            <div className="mt-7 grid gap-3" data-stagger>
              {contacts.map(({ id, icon: Icon, label, value, href }) => {
                const inner = (
                  <div className="flex items-start gap-3 rounded-2xl border border-black/40 bg-white p-4 md:p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#dbe3ea] text-accent">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-[.74rem] font-medium text-ink-muted">{label}</div>
                      <div className="mt-1.5 text-lg font-medium leading-7 text-ink">{value}</div>
                    </div>
                  </div>
                );

                return href ? (
                  <a key={id} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="block transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(22,24,25,.05)]">
                    {inner}
                  </a>
                ) : (
                  <div key={id}>{inner}</div>
                );
              })}
            </div>

            <div className="mt-6 surface-card p-5 md:p-6" data-reveal>
              <div className="flex items-center gap-2 text-base font-semibold text-ink">
                <ShieldCheck size={16} className="text-accent" />
                Ce ne ajută la primul răspuns
              </div>
              <p className="mt-2 text-lg leading-8 text-ink-muted">Nu este nevoie de un brief complicat. Dacă le aveți la îndemână, aceste informații ne ajută să înțelegem contextul din prima:</p>
              <ul className="mt-4 grid gap-2">
                {helpfulInfo.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-lg leading-8 text-ink-soft">
                    <ArrowRight size={14} className="mt-1 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full self-start overflow-hidden rounded-2xl bg-[#151819] shadow-[0_22px_55px_rgba(17,19,20,.14)] lg:max-w-[780px] lg:justify-self-end" data-reveal>
            <SolicitatiOfertaForm embedded />
          </div>
        </div>
      </section>
    </div>
  );
}
