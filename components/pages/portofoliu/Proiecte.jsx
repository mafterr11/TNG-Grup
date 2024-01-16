import { proiecte } from "../../../utils/proiecte";
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
      <h1 className='text-accent font-normal text-3xl md:text-4xl text-center xl:text-left '>
        Proiecte civile
      </h1>
      <span className="block border-b-2 mt-4 mb-24 border-accent w-[90%] md:w-[80%] xl:w-[50%] mx-auto xl:mx-0"></span>

      {proiecte.map((proiect, proiectIndex) => (
        <div className='mb-24 md:mb-32 lg:mb-44' key={proiectIndex}>
          <div>
            {/* MD TITLE */}
            <h3 className='mb-6 xl:hidden md:block hidden text-accent text-2xl text-center'>
              {proiect.nume}
            </h3>

            <div className='mb-4 flex flex-col md:flex-row items-center md:gap-x-4 xl:gap-x-0'>
              <div className='mb-4 md:mb-0 w-full md:w-1/2'>
                {/* MOBILE TITLE */}
                <h3 className='mb-2 block md:hidden text-accent text-2xl text-center md:text-left'>
                  {proiect.nume}
                </h3>
                <Image
                  src={proiect.imagine}
                  width={500}
                  height={500}
                  alt='Imagine principala proiect de executie'
                  className='rounded-xl md:mb-16 lg:mb-0'
                />
              </div>
              <div className='w-full md:w-1/2'>
                <div className='mb-4 text-center md:text-left'>
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
                <div className='flex gap-4 justify-center md:justify-start'>
                  {/* Container 1 */}
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
        </div>
      ))}
    </div>
  );
};
