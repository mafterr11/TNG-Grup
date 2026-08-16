"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  nume: z.string().trim().min(2, "Introdu numele."),
  prenume: z.string().trim().min(2, "Introdu prenumele."),
  email: z.string().trim().email("Adresa de email nu este validă."),
  telefon: z.string().trim().min(10, "Introdu un număr de telefon valid."),
  constructie: z.string().optional(),
  judet: z.string().optional(),
  inceput: z.string().optional(),
  mesaj: z.string().trim().max(1000, "Mesajul poate avea maximum 1000 de caractere.").optional(),
  acord: z.boolean().refine(Boolean, { message: "Este necesar acordul pentru prelucrarea datelor." }),
  website: z.string().max(0).optional(),
});

const counties = ["București", "Ilfov", "Alba", "Arad", "Argeș", "Bacău", "Bihor", "Bistrița-Năsăud", "Botoșani", "Brăila", "Brașov", "Buzău", "Călărași", "Caraș-Severin", "Cluj", "Constanța", "Covasna", "Dâmbovița", "Dolj", "Galați", "Giurgiu", "Gorj", "Harghita", "Hunedoara", "Ialomița", "Iași", "Maramureș", "Mehedinți", "Mureș", "Neamț", "Olt", "Prahova", "Sălaj", "Satu Mare", "Sibiu", "Suceava", "Teleorman", "Timiș", "Tulcea", "Vaslui", "Vâlcea", "Vrancea"];

function FieldError({ message }) {
  return message ? <span className="mt-1.5 block text-[.72rem] text-[#ff9f9f]">{message}</span> : null;
}

async function getRecaptchaToken() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;
  if (!siteKey) throw new Error("reCAPTCHA nu este configurat. Completează NEXT_PUBLIC_RECAPTCHA_KEY în .env.local.");
  if (!window.grecaptcha) throw new Error("reCAPTCHA nu s-a încărcat încă. Încearcă din nou în câteva secunde.");

  return new Promise((resolve, reject) => {
    window.grecaptcha.ready(async () => {
      try {
        resolve(await window.grecaptcha.execute(siteKey, { action: "InquirySubmit" }));
      } catch (error) {
        reject(error);
      }
    });
  });
}

export default function SolicitatiOfertaForm({ onClose, embedded = false }) {
  const [success, setSuccess] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { nume: "", prenume: "", email: "", telefon: "", constructie: "", judet: "", inceput: "", mesaj: "", acord: false, website: "" },
  });

  const onSubmit = async (values) => {
    try {
      const gRecaptchaToken = await getRecaptchaToken();
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, gRecaptchaToken }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok || !payload.success) throw new Error(payload.message || "Solicitarea nu a putut fi trimisă.");

      reset();
      setSuccess(true);
      toast({ title: "Solicitarea a fost trimisă", description: "Vă vom contacta cât mai curând." });
      if (!embedded && onClose) setTimeout(onClose, 900);
    } catch (error) {
      toast({ title: "Trimiterea nu a reușit", description: error?.message || "Vă rugăm să încercați din nou." });
    }
  };

  if (success && embedded) {
    return (
      <div className="flex min-h-[520px] flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[.035] p-8 text-center text-white">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent"><CheckCircle2 size={27} /></div>
        <h3 className="mt-5 text-xl font-semibold">Solicitarea a fost trimisă.</h3>
        <p className="mt-3 max-w-md text-sm leading-7 text-white/65">Echipa TNG GRUP va reveni către dumneavoastră folosind datele de contact furnizate.</p>
        <button type="button" className="button-light mt-6" onClick={() => setSuccess(false)}>Trimite o altă solicitare</button>
      </div>
    );
  }

  const inputClass = "h-11 w-full rounded-lg border border-white/12 bg-white/[.055] px-3.5 text-[.84rem] text-white outline-none transition placeholder:text-white/34 focus:border-white/35 focus:bg-white/[.075]";
  const labelClass = "mb-1.5 block text-[.75rem] font-medium text-white/68";

  return (
    <div className={embedded ? "rounded-xl border border-white/10 bg-white/[.035] p-5 md:p-7" : "p-5 pt-8 md:p-7"}>
      <div className="mb-6">
        <p className="text-[.78rem] font-medium text-white/64">Solicitare de ofertă</p>
        <h2 className="mt-2 text-lg font-semibold tracking-[-.015em] text-white md:text-xl">Începeți cu ce știți acum despre proiect.</h2>
        <p className="mt-2.5 max-w-2xl text-[.82rem] leading-6 text-white/64">Numele și datele de contact ne permit să începem discuția. Câmpurile despre proiect sunt opționale, dar ne ajută să revenim cu întrebări mai relevante.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div className="grid gap-3.5 md:grid-cols-2">
          <label><span className={labelClass}>Nume *</span><input className={inputClass} autoComplete="family-name" placeholder="Popescu" {...register("nume")} /><FieldError message={errors.nume?.message} /></label>
          <label><span className={labelClass}>Prenume *</span><input className={inputClass} autoComplete="given-name" placeholder="Andrei" {...register("prenume")} /><FieldError message={errors.prenume?.message} /></label>
          <label><span className={labelClass}>Email *</span><input className={inputClass} type="email" autoComplete="email" placeholder="andrei@exemplu.ro" {...register("email")} /><FieldError message={errors.email?.message} /></label>
          <label><span className={labelClass}>Telefon *</span><input className={inputClass} type="tel" autoComplete="tel" placeholder="07xx xxx xxx" {...register("telefon")} /><FieldError message={errors.telefon?.message} /></label>
        </div>

        <div className="grid gap-3.5 md:grid-cols-3">
          <label><span className={labelClass}>Tip proiect <span className="text-white/38">(opțional)</span></span><select className={inputClass} {...register("constructie")}><option value="" className="text-black">Selectează</option><option className="text-black">Construcții Civile</option><option className="text-black">Construcții Industriale/Agricole</option><option className="text-black">Consultanță / Dirigenție de Șantier</option><option className="text-black">Management de proiect</option><option className="text-black">Altceva</option></select></label>
          <label><span className={labelClass}>Județ <span className="text-white/38">(opțional)</span></span><select className={inputClass} {...register("judet")}><option value="" className="text-black">Selectează</option>{counties.map((county) => <option key={county} value={county} className="text-black">{county}</option>)}</select></label>
          <label><span className={labelClass}>Începere <span className="text-white/38">(opțional)</span></span><select className={inputClass} {...register("inceput")}><option value="" className="text-black">Selectează</option><option className="text-black">Cât mai repede</option><option className="text-black">În următoarele 6 luni</option><option className="text-black">Nu m-am hotărât încă</option></select></label>
        </div>

        <label><span className={labelClass}>Mesaj <span className="text-white/38">(opțional)</span></span><textarea className="min-h-28 w-full resize-y rounded-lg border border-white/12 bg-white/[.055] px-3.5 py-3 text-[.84rem] leading-6 text-white outline-none transition placeholder:text-white/34 focus:border-white/35 focus:bg-white/[.075]" placeholder="Localitate, tipul lucrării, stadiul proiectului sau orice detaliu relevant." {...register("mesaj")} /><FieldError message={errors.mesaj?.message} /></label>

        <div className="absolute -left-[9999px]" aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" {...register("website")} /></label></div>

        <label className="flex items-start gap-2.5 text-[.72rem] leading-5 text-white/64">
          <input type="checkbox" className="mt-1 h-3.5 w-3.5 shrink-0 accent-[#ad5628]" {...register("acord")} />
          <span>Sunt de acord cu prelucrarea datelor pentru soluționarea solicitării, conform <Link href="/politica-de-confidentialitate" className="text-white underline decoration-white/30 underline-offset-2">Politicii de confidențialitate</Link>.</span>
        </label>
        <FieldError message={errors.acord?.message} />

        <div className="flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-[.64rem] leading-[1.15rem] text-white/35">Protejat de reCAPTCHA. Se aplică politicile Google de confidențialitate și termenii de utilizare.</p>
          <button type="submit" disabled={isSubmitting} className="button-primary min-w-36 disabled:cursor-not-allowed disabled:opacity-55">
            {isSubmitting ? <><LoaderCircle size={15} className="animate-spin" /> Se trimite</> : <>Trimite solicitarea <ArrowRight size={15} /></>}
          </button>
        </div>
      </form>
    </div>
  );
}
