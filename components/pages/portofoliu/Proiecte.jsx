"use client";
import { proiecte } from "../../../utils/proiecte";
// Motion
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SolicitatiOferta } from "@/components/SolicitatiOferta";

export const Proiecte = () => {
  return (
    <div className="container mx-auto">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, ammount: 0.4 }}
      >
        <h1 className="text-3xl font-normal max-lg:text-center md:text-4xl">
          Proiecte civile
        </h1>
        <span className="mb-24 mt-4 block w-[80%] border-b-2 border-accent max-lg:mx-auto xl:w-[45%]"></span>
      </motion.div>

      {proiecte.map((proiect, proiectIndex) => (
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="mb-24 md:mb-32 lg:mb-44"
          key={proiectIndex}
        >
          <div>
            {/* MD TITLE */}
            <h3 className="mb-6 hidden text-center text-2xl text-accent md:block xl:hidden">
              {proiect.nume}
            </h3>

            <div className="mb-4 flex flex-col items-center md:flex-row md:max-lg:gap-x-4">
              <div className="mb-4 w-full md:mb-0 md:w-1/2">
                {/* MOBILE TITLE */}
                <h3 className="mb-2 block text-2xl text-accent max-md:text-center md:hidden">
                  {proiect.nume}
                </h3>
                <Image
                  src={proiect.imagine.prezentare}
                  width={800}
                  height={800}
                  alt="Imagine principala proiect de executie"
                  className="h-96 w-full rounded-xl object-cover md:mb-16 md:w-[90%] lg:mb-0"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="mb-4 max-md:text-center">
                  {/* DESKTOP TITLE */}
                  <h3 className="mb-2 hidden text-2xl text-accent xl:flex">
                    {proiect.nume}
                  </h3>
                  <p className="leading-6 text-balance">{proiect.detalii.descriere}</p>
                </div>
                {/* Container 1 */}
                <div className="flex justify-center gap-x-4 md:justify-start">
                  {/* Dormitoare */}
                  <div className="flex flex-col items-center justify-center pr-1 lg:pr-4 xl:gap-y-1">
                    <div className="flex flex-col-reverse items-center justify-center gap-x-[0.5rem] gap-y-2 md:flex-row">
                      <div className="text-[0.9rem]">
                        {proiect.detalii.numarDormitoare}
                      </div>
                      <div className="text-3xl text-accent">
                        {proiect.detalii.iconDormitoare}
                      </div>
                    </div>
                    <div className="text-sm">
                      {proiect.detalii.tipDormitoare}
                    </div>
                  </div>
                  {/* Bai */}
                  <div className="flex flex-col items-center justify-center pr-1 lg:pr-4 xl:gap-y-1">
                    <div className="flex flex-col-reverse items-center justify-center gap-x-[0.5rem] gap-y-2 md:flex-row">
                      <div className="text-[0.9rem]">
                        {proiect.detalii.numarBai}
                      </div>
                      <div className="text-3xl text-accent">
                        {proiect.detalii.iconBai}
                      </div>
                    </div>
                    <div className="text-sm">{proiect.detalii.tipBai}</div>
                  </div>
                  {/* Container 2 */}
                  {/* Amp la Sol */}
                  <div className="flex flex-col items-center justify-center pr-1 lg:pr-4 xl:gap-y-1">
                    <div className="flex flex-col-reverse items-center justify-center gap-x-[0.2rem] gap-y-2 md:flex-row">
                      <div className="text-[0.9rem]">
                        {proiect.detalii.numarAmprentaLaSol}
                      </div>
                      <div className="text-3xl text-accent">
                        {proiect.detalii.iconAmprentaLaSol}
                      </div>
                    </div>
                    <div className="text-sm">Ampr. Sol</div>
                  </div>
                  {/* MP utili */}
                  <div className="flex flex-col items-center justify-center xl:gap-y-1">
                    <div className="flex flex-col-reverse items-center justify-center gap-x-[0.2rem] gap-y-2 md:flex-row">
                      <div className="text-[0.9rem]">
                        {proiect.detalii.numarMpUtili}
                      </div>
                      <div className="text-3xl text-accent">
                        {proiect.detalii.iconMpUtili}
                      </div>
                    </div>
                    <div className="text-sm">MP utili</div>
                  </div>
                </div>
                <span className="mt-4 block border-b border-accent"></span>
                <div className="flex items-center justify-between px-2 py-4">
                  <div className="flex flex-col items-start justify-center">
                    <h4 className="text-lg md:text-xl">Preț execuție:</h4>
                    <span className="text-sm">Pornind de la</span>
                  </div>
                  <SolicitatiOferta customStyle="rounded text-xs px-4 h-8" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Accordion type="single" collapsible>
              <AccordionItem value={`item-${proiectIndex}`}>
                <AccordionTrigger className="text-start text-lg">
                  Mai multe detalii:
                </AccordionTrigger>
                <AccordionContent className="">
                  <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:p-6 lg:grid-cols-3">
                    <Image
                      alt="Imagine proiect portofoliu 1"
                      className="h-96 w-full rounded-lg object-cover"
                      height={600}
                      src={proiect.imagine.extra1}
                      width={600}
                      priority
                    />
                    <Image
                      alt="Imagine proiect portofoliu 2"
                      className="h-96 w-full rounded-lg object-cover"
                      height={600}
                      src={proiect.imagine.extra2}
                      width={600}
                      priority
                    />
                    <Image
                      alt="Imagine proiect portofoliu 3"
                      className="h-96 w-full rounded-lg object-cover"
                      height={600}
                      src={proiect.imagine.extra3}
                      width={600}
                      priority
                    />
                    <Image
                      alt="Imagine proiect portofoliu 4"
                      className="h-96 w-full rounded-lg object-cover"
                      height={600}
                      src={proiect.imagine.extra4}
                      width={600}
                      priority
                    />
                    <Image
                      alt="Imagine proiect portofoliu 5"
                      className="h-96 w-full rounded-lg object-cover"
                      height={600}
                      src={proiect.imagine.extra5}
                      width={600}
                      priority
                    />
                    <Image
                      alt="Imagine proiect portofoliu 6"
                      className="h-96 w-full rounded-lg object-cover"
                      height={600}
                      src={proiect.imagine.extra6}
                      width={600}
                      priority
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
