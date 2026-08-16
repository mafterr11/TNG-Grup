import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function PageHero({ eyebrow, label, title, description, image, action }) {
  return (
    <section className="relative min-h-[44vh] overflow-hidden bg-black pt-20 text-white md:min-h-[54vh] md:pt-24">
      <Image data-hero-image src={image} alt="" fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,12,13,.9)_0%,rgba(10,12,13,.72)_48%,rgba(10,12,13,.26)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,13,.12),rgba(10,12,13,.62))]" />
      <div className="site-container relative z-10 flex min-h-[calc(44vh-5rem)] items-end py-10 md:min-h-[calc(54vh-6rem)] md:py-16">
        <div className="max-w-4xl" data-hero-copy>
          <p className="mb-3 text-[.76rem] font-medium text-white/62">{label || eyebrow}</p>
          <h1 className="display-title">{title}</h1>
          {description && <p className="mt-5 max-w-2xl text-[.92rem] leading-7 text-white/72 md:mt-6 md:text-base md:leading-8">{description}</p>}
          {action && <Link href={action.href} className="button-primary mt-6 md:mt-7">{action.label}<ArrowDown size={16} /></Link>}
        </div>
      </div>
    </section>
  );
}
