"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  LiaRulerCombinedSolid,
  LiaHardHatSolid,
  LiaSeedlingSolid,
  LiaDraftingCompassSolid,
  LiaBinocularsSolid,
  LiaToolsSolid,
  LiaToolboxSolid,
  LiaHammerSolid,
} from "react-icons/lia";
export const servicii = [
  {
    title: "EXECUȚIE",
    title2: "CONSTRUCȚII CIVILE",
    description:
      "Gama noastră de servicii este foarte diversificată. Ne ocupăm atât de locuințe unifamiliale și colective, cât și de clădiri de birouri.",
    icon: <LiaToolsSolid />,
    path: "/servicii#execuție-construcții-civile",
  },
  {
    title: "EXECUȚIE",
    title2: "CONSTRUCȚII INDUSTRIALE",
    description:
      "Dacă vrei să-ți extinzi afacerea suntem de suficient timp în domeniu încât să putem duce la bun sfârșit și proiecte industriale.",
    icon: <LiaHardHatSolid />,
    path: "/servicii#execuție-construcții-industriale",
  },
  {
    title: "EXECUȚIE",
    title2: "CONSTRUCȚII AGRICOLE",
    description:
      "Ești pasionat/ă de agricultură și vrei să-ți deschizi o afacere în domeniu? Noi îți venim în ajutor cu tot ce presupune procesul de execuție construcții agricole.",
    icon: <LiaSeedlingSolid />,
    path: "/servicii#execuție-construcții-agricole",
  },
  {
    title: "SUPERVIZARE",
    title2: "LUCRĂRI DE EXECUȚIE",
    description:
      "Deținem competențe de management și oferim servicii de supervizare lucrări de execuție pentru a optimiza rezultatele și a oferi beneficiarului avantaje diverse.",
    icon: <LiaBinocularsSolid />,
    path: "/servicii#supervizare-lucrări-de-execuție",
  },
  {
    title: "VERIFICARE CALITATE",
    title2: "LUCRĂRI ÎN EXECUȚIE",
    description:
      "Ne place să excelăm în tot ce facem, tocmai de aceea derulăm cu atenție serviciile de verificare calitate lucrări în execuție.",
    icon: <LiaHammerSolid />,
    path: "/servicii#verificare-calitate-lucrări-în-execuție",
  },
  {
    title: "PLANIFICAREA",
    title2: "EXECUȚIEI",
    description:
      "Planificarea execuției se numără printre cele mai importante etape care stau la baza succesului unui proiect.",
    icon: <LiaDraftingCompassSolid />,
    path: "/servicii#planificarea-execuției",
  },

  {
    title: "SERVICII",
    title2: "RTE",
    description:
      "Asigurăm servicii RTE, care garantează îndeplinirea obiectivelor fiecărui proiect, indiferent de complexitatea pe care o prezintă. RTE este acronimul pentru Responsabil tehnic cu execuția.",
    icon: <LiaToolboxSolid />,
    path: "/servicii#servicii-RTE",
  },
  {
    title: "DIRIGENȚIE",
    title2: "DE ȘANTIER",
    description:
      "Garantăm servicii profesionale pentru că vrem ca fiecare proiect pe care îl ducem la bun sfârșit să impresioneze prin durabilitate și siguranță, indiferent de complexitatea activităților derulate.",
    icon: <LiaRulerCombinedSolid />,
    path: "/servicii#dirigenție-de-șantier",
  },
];

export function ServicesCarousel() {
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
  const groupedServicii = [];
  for (let i = 0; i < servicii.length; i += groupSize) {
    groupedServicii.push(servicii.slice(i, i + groupSize));
  }

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: true,
        }),
      ]}
      className='w-full max-w-7xl mt-16'
    >
      <CarouselContent className='flex -ml-1'>
        {groupedServicii.map((group, index) => (
          <CarouselItem key={index} className='flex-shrink-0 px-3 w-full'>
            <div className='flex flex-col xl:flex-row xl:gap-x-6 items-center justify-center gap-y-4'>
              {group.map((serviciu, serviciuIndex) => (
                <div key={serviciuIndex} className='w-[90%]'>
                  <Link href={serviciu.path}>
                    <Card className='border-2 border-accent hover:bg-grey/85 rounded-xl relative group mx-auto md:w-[60%] xl:w-full'>
                      <CardContent className='flex flex-col gap-y-6 items-center justify-start md:max-lg:justify-center p-6 bg-grey bg-opacity-[0.93] min-h-[310px] md:min-h-[350px] xl:min-h-[310px]  hover:scale-[0.98] rounded-[3%]'>
                        <div className='flex flex-col items-center justify-center gap-y-4'>
                          <div className='text-3xl group-hover:text-accent'>{serviciu.icon}</div>
                          <div className='flex flex-col font-semibold text-accent text-center'>
                            <h4>{serviciu.title}</h4>
                            <h4>{serviciu.title2}</h4>
                          </div>
                        </div>
                        <p className='text-sm overflow-hidden text-ellipsis text-center xl:text-start'>
                          {serviciu.description}
                        </p>
                        <div className='text-5xl absolute bottom-2 right-4 font-thin'>
                          <IoIosArrowRoundForward  className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
