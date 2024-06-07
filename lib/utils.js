import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "TNG GRUP - Lider în Construcții și Dezvoltare Durabilă",
  description = "Descoperiți inovația și calitatea în construcții cu TNG GRUP. Oferim soluții de top pentru proiecte civile, industriale și agricole.",
  keywords = "TNG GRUP, construcții România, dezvoltare durabilă, proiecte civile, industriale, agricole, servicii de construcții, proiecte de construcții",
  image = "/logo.png",
} = {}) {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      site: "https://tngag.ro",
      description,
      images: [image],
      creator: "@myriad-tech",
    },
    metadataBase: new URL("https://tngag.ro"),
  };
}
