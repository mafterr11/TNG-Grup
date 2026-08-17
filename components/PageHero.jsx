import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import SceneBackground from "@/components/three/SceneBackground";

export default function PageHero({ eyebrow, label, title, description, image, action }) {
  return (
    <section className="relative min-h-[52vh] overflow-hidden bg-black pt-20 text-white md:min-h-[62vh] md:pt-24 on-dark">
      <Image data-hero-parallax src={image} alt="" fill priority className="object-cover" sizes="100vw" />
      <SceneBackground variant="dust" density={280} className="pointer-events-none absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,12,13,.94)_0%,rgba(10,12,13,.74)_46%,rgba(10,12,13,.28)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,13,.15)_0%,rgba(10,12,13,.05)_45%,rgba(10,12,13,.7)_100%)]" />
      <div className="grain" aria-hidden="true" />

      <div className="site-container relative z-10 flex min-h-[calc(52vh-5rem)] items-end py-12 md:min-h-[calc(62vh-6rem)] md:py-16">
        <div className="max-w-4xl" data-hero-copy>
          <p className="eyebrow eyebrow--light">{label || eyebrow}</p>
          <h1 className="display-title" data-split>{title}</h1>
          {description && <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl md:leading-9">{description}</p>}
          {action && (
            <Link href={action.href} className="button-primary mt-7 md:mt-8">
              {action.label}<ArrowDown size={16} />
            </Link>
          )}
        </div>
      </div>

      {/* bottom edge accent */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" aria-hidden="true" />
    </section>
  );
}
