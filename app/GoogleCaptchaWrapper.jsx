"use client";

import Script from "next/script";

export default function GoogleCaptchaWrapper({ children }) {
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;
  return (
    <>
      {recaptchaKey ? (
        <Script
          id="google-recaptcha-v3"
          src={`https://www.google.com/recaptcha/api.js?render=${recaptchaKey}`}
          strategy="afterInteractive"
        />
      ) : null}
      {children}
    </>
  );
}
