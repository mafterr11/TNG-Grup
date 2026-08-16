import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";

const payloadSchema = z.object({
  nume: z.string().trim().min(2).max(80),
  prenume: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  telefon: z.string().trim().min(10).max(30),
  constructie: z.string().max(120).optional().default(""),
  judet: z.string().max(80).optional().default(""),
  inceput: z.string().max(120).optional().default(""),
  mesaj: z.string().trim().max(1000).optional().default(""),
  acord: z.literal(true),
  website: z.string().max(200).optional().default(""),
  gRecaptchaToken: z.string().min(20),
});

const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" })[char]);

function emailHtml({ nume, prenume, email, telefon, constructie, judet, inceput, mesaj }) {
  const row = (label, value) => value ? `<tr><td style="padding:7px 0;color:#707577;width:145px;vertical-align:top">${escapeHtml(label)}</td><td style="padding:7px 0;color:#1b1e1f;font-weight:600">${escapeHtml(value)}</td></tr>` : "";
  return `<!doctype html><html><body style="margin:0;background:#f3f2ef;font-family:Arial,sans-serif;color:#1b1e1f"><div style="max-width:620px;margin:0 auto;padding:28px 14px"><div style="background:#fff;border:1px solid #deddd9;border-radius:14px;overflow:hidden"><div style="background:#151819;padding:28px 32px;color:#fff"><div style="font-size:13px;color:#c9cdcf">TNG GRUP · tngag.ro</div><h1 style="font-size:24px;margin:8px 0 0">Solicitare nouă de ofertă</h1></div><div style="padding:24px 32px"><h2 style="font-size:14px;margin:0 0 10px">Date de contact</h2><table style="width:100%;border-collapse:collapse;font-size:14px">${row("Nume", `${nume} ${prenume}`)}${row("Email", email)}${row("Telefon", telefon)}</table><hr style="border:0;border-top:1px solid #e6e4df;margin:20px 0"><h2 style="font-size:14px;margin:0 0 10px">Proiect</h2><table style="width:100%;border-collapse:collapse;font-size:14px">${row("Tip proiect", constructie)}${row("Județ", judet)}${row("Începere", inceput)}${row("Mesaj", mesaj)}</table></div><div style="padding:16px 32px;background:#f8f7f4;color:#7b8082;font-size:11px;line-height:1.6">Solicitarea a fost trimisă prin formularul TNG GRUP. Utilizatorul a confirmat acordul pentru prelucrarea datelor.</div></div></div></body></html>`;
}

async function verifyRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) return { ok: false, reason: "missing_secret" };

  const body = new URLSearchParams({ secret: secretKey, response: token });
  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    cache: "no-store",
  });

  if (!response.ok) return { ok: false, reason: "verification_unavailable" };
  const result = await response.json();
  const score = typeof result.score === "number" ? result.score : 0;
  const actionMatches = result.action === "InquirySubmit";
  return { ok: Boolean(result.success && actionMatches && score >= 0.5), score, action: result.action };
}

export async function POST(request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || !process.env.RECAPTCHA_SECRET_KEY) {
      return NextResponse.json({ success: false, message: "Formularul nu este configurat complet pe server." }, { status: 503 });
    }

    const parsed = payloadSchema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ success: false, message: "Datele introduse nu sunt valide." }, { status: 400 });

    const { gRecaptchaToken, website } = parsed.data;
    if (website) return NextResponse.json({ success: true });

    const formData = {
      nume: parsed.data.nume,
      prenume: parsed.data.prenume,
      email: parsed.data.email,
      telefon: parsed.data.telefon,
      constructie: parsed.data.constructie,
      judet: parsed.data.judet,
      inceput: parsed.data.inceput,
      mesaj: parsed.data.mesaj,
    };

    const captcha = await verifyRecaptcha(gRecaptchaToken);
    if (!captcha.ok) return NextResponse.json({ success: false, message: "Verificarea anti-spam nu a reușit. Reîncercați." }, { status: 403 });

    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: "TNG GRUP <solicitari@tngag.ro>",
      to: ["office@tngag.ro"],
      replyTo: formData.email,
      subject: `Solicitare ofertă — ${formData.nume} ${formData.prenume}`,
      html: emailHtml(formData),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ success: false, message: "Emailul nu a putut fi trimis. Încercați din nou." }, { status: 502 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ success: false, message: "A apărut o eroare neașteptată. Încercați din nou." }, { status: 500 });
  }
}
