import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "TNG GRUP | Antreprenoriat general și construcții",
  description = "Execuție și coordonare pentru construcții civile și industriale, supervizare, RTE și dirigenție de șantier în București și în țară.",
  keywords = "TNG GRUP, antreprenoriat general, construcții civile, construcții industriale, supervizare, RTE, dirigenție de șantier",
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
    },
    metadataBase: new URL("https://tngag.ro"),
  };
}
