"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { proiecte } from "../../../utils/proiecte";

export const Proiecte = () => {
  const [groupSize, setGroupSize] = useState(4); // Default to 4 for desktop

  // Update group size based on screen width
  useEffect(() => {
    const updateGroupSize = () => {
      setGroupSize(window.innerWidth < 768 ? 1 : 4);
    };

    window.addEventListener("resize", updateGroupSize);
    updateGroupSize();

    return () => window.removeEventListener("resize", updateGroupSize);
  }, []);
  // Group the services based on groupSize
  const groupedProiecte = [];
  for (let i = 0; i < proiecte.length; i += groupSize) {
    groupedProiecte.push(proiecte.slice(i, i + groupSize));
  }

  return (
    <div className='container mx-auto max-w-[1400px]'>
      <div>
        <h1 className='text-accent'>Proiecte civile</h1>
        <span className='border-t-2 mt-4 border-accent block w-2/4'></span>
      </div>
      <div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
            }),
          ]}
          className='w-full mt-10'
        >
          <CarouselContent className='flex -ml-1'>
            {groupedProiecte.map((group, index) => (
              <CarouselItem key={index} className='flex-shrink-0 px-3 w-full '>
                <div className='flex flex-col xl:flex-row xl:gap-x-6 items-center justify-center gap-y-4 '>
                  {group.map((proiect, proiectIndex) => (
                    <div key={proiectIndex} className='w-full'>
                      {" "}
                      <Link
                        href={`/portofoliu/${encodeURIComponent(proiect.slug)}`}
                      >
                        <Card className='rounded-xl'>
                          <CardContent className='bg-grey px-0  rounded-xl'>
                            <div className='w-full'>
                              <Image
                                src={proiect.imagine}
                                width={500}
                                height={500}
                                alt='Imagine proiect'
                                className=' rounded-t-xl border-b border-accent'
                              />
                            </div>
                            <div>
                              <h4 className='p-4 text-lg'>{proiect.nume}</h4>
                              {/* Details */}
                              <div className="flex gap-x-4 items-center justify-center ">
                                {/* Dormitoare */}
                                <div className="flex flex-col items-center justify-center gap-y-1 border-r border-accent xl:pr-6 pr-[0.6rem]">
                                  <div className='flex items-center justify-center gap-x-1'>
                                    <div className="text-xs xl:text-sm">{proiect.detalii.numarDormitoare}</div>
                                    <div className="text-xl xl:text-2xl text-accent">{proiect.detalii.iconDormitoare}</div>
                                  </div>
                                  <div className="text-xs">Dormitoare</div>
                                </div>
                                {/* Bai */}
                                <div className="flex flex-col items-center justify-center gap-y-1 border-r border-accent xl:pr-6 pr-[0.6rem]">
                                  <div className='flex items-center justify-center gap-x-1'>
                                    <div className="text-xs xl:text-sm">{proiect.detalii.numarBai}</div>
                                    <div className="text-xl xl:text-2xl text-accent">{proiect.detalii.iconBai}</div>
                                  </div>
                                  <div className="text-xs">Băi</div>
                                </div>
                                  {/* Amprenta Sol */}
                                  <div className="flex flex-col items-center justify-center gap-y-1 border-r border-accent xl:pr-6 pr-[0.6rem]">
                                  <div className='flex items-center justify-center gap-x-1'>
                                    <div className="text-xs xl:text-sm">{proiect.detalii.numarAmprentaLaSol}</div>
                                    <div className="text-xl xl:text-2xl text-accent">{proiect.detalii.iconAmprentaLaSol}</div>
                                  </div>
                                  <div className="text-xs">Ampr. la Sol</div>
                                </div>
                                  {/* MP utili */}
                                  <div className="flex flex-col items-center justify-center gap-y-1">
                                  <div className='flex items-center justify-center gap-x-1'>
                                    <div className="text-xs xl:text-sm">{proiect.detalii.numarMpUtili}</div>
                                    <div className="text-xl xl:text-2xl text-accent">{proiect.detalii.iconMpUtili}</div>
                                  </div>
                                  <div className="text-xs">MP utili</div>
                                </div>
                              </div>
                              <span className="border-b border-accent block mt-4"></span>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
