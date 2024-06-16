import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { constructMetadata } from "@/lib/utils";
import GoogleCaptchaWrapper from "./GoogleCaptchaWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = constructMetadata();

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body className={poppins.className}>
        <GoogleCaptchaWrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </GoogleCaptchaWrapper>
        <Toaster />
      </body>
    </html>
  );
}
