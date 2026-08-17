import "./globals.css";
import { Fraunces, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionSystem from "@/components/MotionSystem";
import Cursor from "@/components/motion/Cursor";
import { Toaster } from "@/components/ui/toaster";
import { constructMetadata } from "@/lib/utils";
import GoogleCaptchaWrapper from "./GoogleCaptchaWrapper";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata = constructMetadata();

export default function RootLayout({ children }) {
  return (
    <html lang="ro" className={`${manrope.variable} ${fraunces.variable}`} data-scroll-behavior="smooth">
      <body>
        <GoogleCaptchaWrapper>
          <MotionSystem />
          <Header />
          <main>{children}</main>
          <Footer />
        </GoogleCaptchaWrapper>
        <Toaster />
        <Cursor />
      </body>
    </html>
  );
}
