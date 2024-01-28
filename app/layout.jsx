import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "TNG GRUP - Lider în Construcții și Dezvoltare Durabilă",
  description:
    "Descoperiți inovația și calitatea în construcții cu TNG GRUP. Oferim soluții de top pentru proiecte civile, industriale și agricole.",
  keywords:
    "TNG GRUP, construcții România, dezvoltare durabilă, proiecte civile, industriale, agricole, servicii de construcții, proiecte de construcții",
};

export default function RootLayout({ children }) {
  return (
    <html lang='ro'>
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
