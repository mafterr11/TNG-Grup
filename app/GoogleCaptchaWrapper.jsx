import React from "react";
import { ReCaptchaProvider } from "next-recaptcha-v3";

export default function GoogleCaptchaWrapper({ children }) {
  const recaptchaKey = process?.env?.NEXT_PUBLIC_RECAPTCHA_KEY;
  return (
    <ReCaptchaProvider  reCaptchaKey={recaptchaKey ?? "NOT DEFINED"}>
      {children}
    </ReCaptchaProvider>
  );
}
