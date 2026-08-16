# TNG GRUP

Website pentru TNG GRUP AG — antreprenoriat general, execuție și servicii tehnice în construcții.

## Stack

- Next.js 16.2.12
- React 19.2.8
- Tailwind CSS 4.3.3
- GSAP 3.15.0 + ScrollTrigger
- React Hook Form + Zod
- Resend
- Google reCAPTCHA v3

## Pornire locală

```bash
npm install
npm run dev
```

Aplicația rulează implicit pe `http://localhost:3000`.

## Variabile de mediu

Fișierul `.env.local` este inclus în arhivă. Completează valorile reale înainte de a testa formularul:

```env
RESEND_API_KEY=
RECAPTCHA_SECRET_KEY=
NEXT_PUBLIC_RECAPTCHA_KEY=
SITE_URL=https://tngag.ro
```

- `RESEND_API_KEY` — cheia API Resend.
- `RECAPTCHA_SECRET_KEY` — cheia secretă Google reCAPTCHA v3.
- `NEXT_PUBLIC_RECAPTCHA_KEY` — site key Google reCAPTCHA v3.
- `SITE_URL` — URL-ul public folosit pentru sitemap.

Formularul trimite de la `TNG GRUP <solicitari@tngag.ro>` către `office@tngag.ro`. Domeniul `tngag.ro` trebuie verificat în Resend pentru ca expeditorul să funcționeze în producție.

## Formularul de contact

Fluxul este:

1. Validare în browser cu React Hook Form + Zod.
2. Generare token reCAPTCHA v3 la submit, cu acțiunea `InquirySubmit`.
3. Trimitere către `/api/send`.
4. Validare din nou pe server.
5. Verificare reCAPTCHA pe server, inclusiv `action` și scor minim `0.5`.
6. Trimitere prin Resend numai după validarea anti-spam.

Este inclus și un câmp honeypot. Endpoint-ul de email validează direct captcha-ul, deci protecția nu poate fi ocolită prin apelarea directă a rutei de trimitere.

## Verificări

```bash
npm run lint
npm run build
```

Sitemap-ul se poate regenera cu:

```bash
npm run sitemap
```
