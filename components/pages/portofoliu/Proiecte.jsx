"use client"
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
    <div className='container mx-auto'>
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial='hidden'
        whileInView={"show"}
        viewport={{ once: true, ammount: 0.4 }}
      >
        <h1 className='font-normal text-3xl md:text-4xl max-lg:text-center'>
          Proiecte civile
        </h1>
        <span className="block border-b-2 mt-4 mb-24 border-accent w-[80%] xl:w-[45%] max-lg:mx-auto"></span>
      </motion.div>

      {proiecte.map((proiect, proiectIndex) => (
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className='mb-24 md:mb-32 lg:mb-44' key={proiectIndex}>
          <div>
            {/* MD TITLE */}
            <h3 className='mb-6 xl:hidden md:block hidden text-accent text-2xl text-center'>
              {proiect.nume}
            </h3>

            <div className='mb-4 flex flex-col md:flex-row items-center md:max-lg:gap-x-4'>
              <div className='mb-4 md:mb-0 w-full md:w-1/2'>
                {/* MOBILE TITLE */}
                <h3 className='mb-2 block md:hidden text-accent text-2xl max-md:text-center'>
                  {proiect.nume}
                </h3>
                <Image
                  src={proiect.imagine}
                  width={500}
                  height={500}
                  alt='Imagine principala proiect de executie'
                  className='rounded-xl md:mb-16 lg:mb-0 object-cover w-auto'
                />
              </div>
              <div className='w-full md:w-1/2'>
                <div className='mb-4 max-md:text-center'>
                  {/* DESKTOP TITLE */}
                  <h3 className='mb-2 hidden xl:flex text-accent text-2xl '>
                    {proiect.nume}
                  </h3>
                  <p className='leading-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, itaque facilis. Id earum dignissimos deleniti eaque
                    culpa ut quam corporis tempora possimus, ipsa ab impedit
                    voluptas enim quo deserunt? Vero.
                  </p>
                </div>
                {/* Container 1 */}
                <div className='flex gap-4 justify-center md:justify-start'>
                  {/* Dormitoare */}
                  <div className='flex flex-col items-center justify-center gap-y-1 md:border-r md:border-accent pr-2 md:pr-3 lg:pr-6'>
                    <div className='flex items-center justify-center gap-x-2'>
                      <div className='text-lg'>
                        {proiect.detalii.numarDormitoare}
                      </div>
                      <div className='text-3xl text-accent'>
                        {proiect.detalii.iconDormitoare}
                      </div>
                    </div>
                    <div className='text-sm'>Dormitoare</div>
                  </div>
                  {/* Bai */}
                  <div className='flex flex-col items-center justify-center gap-y-1 md:border-r md:border-accent pr-2 md:pr-3 lg:pr-6'>
                    <div className='flex items-center justify-center gap-x-2'>
                      <div className='text-lg'>{proiect.detalii.numarBai}</div>
                      <div className='text-3xl text-accent'>
                        {proiect.detalii.iconBai}
                      </div>
                    </div>
                    <div className='text-sm'>Băi</div>
                  </div>
                  {/* Container 2 */}
                  {/* Amp la Sol */}
                  <div className='flex flex-col items-center justify-center gap-y-1 md:border-r md:border-accent pr-2 md:pr-3 lg:pr-6'>
                    <div className='flex items-center justify-center gap-x-2'>
                      <div className='text-lg'>
                        {proiect.detalii.numarAmprentaLaSol}
                      </div>
                      <div className='text-3xl text-accent'>
                        {proiect.detalii.iconAmprentaLaSol}
                      </div>
                    </div>
                    <div className='text-sm'>Ampr. Sol</div>
                  </div>
                  {/* MP utili */}
                  <div className='flex flex-col items-center justify-center gap-y-1'>
                    <div className='flex items-center justify-center gap-x-2'>
                      <div className='text-lg'>
                        {proiect.detalii.numarMpUtili}
                      </div>
                      <div className='text-3xl text-accent'>
                        {proiect.detalii.iconMpUtili}
                      </div>
                    </div>
                    <div className='text-sm'>MP utili</div>
                  </div>
                </div>
                <span className='block border-b border-accent mt-4'></span>
                <div className='flex items-center justify-between px-2 py-4'>
                  <div className='flex flex-col items-start justify-center'>
                    <h4 className='text-lg md:text-xl'>Preț execuție:</h4>
                    <span className='text-sm'>Pornind de la</span>
                  </div>
                  <SolicitatiOferta customStyle='rounded-full text-xs px-4 h-8' />
                </div>
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <Accordion type='single' collapsible>
              <AccordionItem value={`item-${proiectIndex}`}>
                <AccordionTrigger className='text-lg text-start'>
                  Mai multe detalii:
                </AccordionTrigger>
                <AccordionContent className=''>
                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-6'>
                    <Image
                      alt='Imagine proiect portofoliu 1'
                      className='object-cover w-full h-60 rounded-lg'
                      height={600}
                      src={proiect.imagine}
                      width={600}
                    />
                    <Image
                      alt='Imagine proiect portofoliu 2'
                      className='object-cover w-full h-60 rounded-lg'
                      height={600}
                      src={proiect.imagine}
                      width={600}
                    />
                    <Image
                      alt='Imagine proiect portofoliu 3'
                      className='object-cover w-full h-60 rounded-lg'
                      height={600}
                      src={proiect.imagine}
                      width={600}
                    />
                    <Image
                      alt='Imagine proiect portofoliu 4'
                      className='object-cover w-full h-60 rounded-lg'
                      height={600}
                      src={proiect.imagine}
                      width={600}
                    />
                    <Image
                      alt='Imagine proiect portofoliu 5'
                      className='object-cover w-full h-60 rounded-lg'
                      height={600}
                      src={proiect.imagine}
                      width={600}
                    />
                    <Image
                      alt='Imagine proiect portofoliu 6'
                      className='object-cover w-full h-60 rounded-lg'
                      height={600}
                      src={proiect.imagine}
                      width={600}
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
