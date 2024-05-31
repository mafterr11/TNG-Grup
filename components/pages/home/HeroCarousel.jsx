"use client";
// Next Components
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
// ShadeUI
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "../../ui/button";
import Autoplay from "embla-carousel-autoplay";
// Data
export const pictures = [
  { image: "/HeroCarousel/1.webp" },
  { image: "/HeroCarousel/2.webp" },
  { image: "/HeroCarousel/3.webp" },
  { image: "/HeroCarousel/4.webp" },
];

export function HeroCarousel() {
  return (
    <div className="relative overflow-x-hidden border-b border-accent">
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {pictures.map((picture, index) => (
            <CarouselItem
              key={index}
              className="relative flex h-60 md:h-screen"
            >
              {" "}
              <Image
                src={picture.image}
                fill
                priority={true}
                alt="TNG Grup imagini intro home page"
                className="object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute left-0 top-0 z-20 flex h-full w-full max-w-4xl flex-col items-center justify-center gap-y-2 text-white lg:max-w-6xl xl:max-w-4xl xl:items-start xl:pb-40 xl:pl-60">
        <motion.h2
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="hidden md:block"
        >
          <span className="text-accent">TNG</span> Grup
        </motion.h2>
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="flex flex-col items-center capitalize md:flex-row md:items-start md:gap-x-2"
        >
          Construcții<span className="text-accent"> România</span>
        </motion.h1>
        <motion.p
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="my-4 hidden text-white md:flex md:px-12 md:text-center xl:px-0 xl:text-left"
        >
          Avem o viziune a unui viitor sustenabil. Înțelegem că fiabilitatea
          este cheia și lucrăm îndeaproape cu clienții noștri pentru a ne
          asigura că îndeplinim nevoile lor.
        </motion.p>
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
        >
          <Link href="/portofoliu">
            <Button variant="orange" size="lg">
              Portofoliu
            </Button>
          </Link>
        </motion.div>
      </div>

      <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/70"></div>
    </div>
  );
}
