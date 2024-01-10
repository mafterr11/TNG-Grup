"use client";
// Next Components
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';
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
    <div className='relative overflow-x-hidden border-b border-accent'>
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
              className='flex relative h-60 md:h-screen'
            >
              {" "}
              <Image
                src={picture.image}
                fill
                priority={true}
                alt='Hero Carousel Images'
                className='object-cover'
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className='absolute top-0 left-0 w-full max-w-4xl h-full xl:pl-60 xl:pb-40 flex flex-col items-center xl:items-start justify-center z-20 text-white gap-y-2'>
        <motion.h2
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, ammount:0.4}}
        className="hidden md:block"
        >
          <span className='text-accent'>TNG</span> Grup
        </motion.h2>
        <motion.h1
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, ammount:0.4}}
        className='flex flex-col items-center xl:items-start xl:flex-row xl:gap-x-2'>
          Construcții<span className='text-accent'> România.</span>
        </motion.h1>
        <motion.p
        variants={fadeIn('down', 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, ammount:0.4}}
        className='text-white my-4 hidden md:flex'>
          Avem o viziune a unui viitor sustenabil. Înțelegem că fiabilitatea
          este cheia și lucrăm îndeaproape cu clienții noștri pentru a ne
          asigura că îndeplinim nevoile lor și nu îi lăsăm la greu.
        </motion.p>
        <motion.div
        variants={fadeIn('down', 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, ammount:0.4}}
        >
        <Link href='/portofoliu'>
          <Button variant='orange' size='xl'>
            Portofoliu
          </Button>
        </Link>
        </motion.div>
      </div>

      <div className='absolute top-0 left-0 w-full h-full bg-black/70 z-10'></div>
    </div>
  );
}
