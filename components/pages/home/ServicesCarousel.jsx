"use client";
import * as React from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  // Function to group the services into chunks of 4 for desktop and chunks of 1 for mobile
  const groupedServiciiDesktop = [];
  for (let i = 0; i < servicii.length; i += 4) {
    groupedServiciiDesktop.push(servicii.slice(i, i + 4));
  }

  const router = useRouter();

  const handleCardClick = (path) => {
    // Navigate to the specific section on the SERVICII page
    router.push(path);
  };
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
        {groupedServiciiDesktop.map((group, index) => (
          <CarouselItem key={index} className='flex-shrink-0 px-3 w-full'>
            <div className='flex flex-col xl:flex-row xl:gap-x-6 items-center justify-center gap-y-4'>
              {group.map((serviciu, serviciuIndex) => (
                <div key={serviciuIndex} className='w-[90%]'>
                  <Link href={serviciu.path}>
                    <Card
                      onClick={() => handleCardClick(serviciu.path)}
                      className='border-2  border-accent hover:bg-grey/85 '
                    >
                      <CardContent className='flex flex-col gap-y-6 items-center justify-start p-6 bg-grey/95 min-h-[310px] hover:scale-[0.98]'>
                        <div className='flex flex-col items-center justify-center gap-y-4'>
                          <div className='text-3xl'>{serviciu.icon}</div>
                          <div className='flex flex-col font-semibold text-accent text-center'>
                            <h4>{serviciu.title}</h4>
                            <h4>{serviciu.title2}</h4>
                          </div>
                        </div>
                        <p className='text-sm overflow-hidden text-ellipsis text-center xl:text-start'>
                          {serviciu.description}
                        </p>
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
