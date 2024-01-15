import { proiecte } from '../../../utils/proiecte';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SolicitatiOferta } from '@/components/SolicitatiOferta';

export const Proiecte = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-accent font-normal text-3xl md:text-4xl '>
        Proiecte civile
      </h1>
      <span className='border-t-2 mt-4 mb-24 border-accent block w-2/4'></span>

      {proiecte.map((proiect, proiectIndex) => (
        <div
          className='mb-24 md:mb-32 lg:mb-44'
          key={proiectIndex}
        >
          <div className='mb-4 flex flex-col md:flex-row items-center'>
            <div className='mb-4 md:mb-0 w-full md:w-1/2'>
              <h3 className='mb-2 block md:hidden text-accent text-2xl text-center md:text-left'>
                {proiect.nume}
              </h3>
              <Image
                src={proiect.imagine}
                width={500}
                height={500}
                alt='Imagine proiect'
                className='rounded-xl'
              />
            </div>
            <div className='w-full md:w-1/2'>
              <div className='mb-4 text-center md:text-left'>
                <h3 className='mb-2 hidden md:block text-accent text-2xl '>
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
                <div className='flex flex-col items-center justify-center gap-y-1 md:border-r md:border-accent pr-2 md:pr-6'>
                  <div className='flex items-center justify-center gap-x-2'>
                    <div className='text-lg'>{proiect.detalii.numarDormitoare}</div>
                    <div className='text-3xl text-accent'>{proiect.detalii.iconDormitoare}</div>
                  </div>
                  <div className='text-sm'>Dormitoare</div>
                </div>
                {/* Bai */}
                <div className='flex flex-col items-center justify-center gap-y-1 md:border-r md:border-accent pr-2 md:pr-6'>
                  <div className='flex items-center justify-center gap-x-2'>
                    <div className='text-lg'>{proiect.detalii.numarBai}</div>
                    <div className='text-3xl text-accent'>{proiect.detalii.iconBai}</div>
                  </div>
                  <div className='text-sm'>Băi</div>
                </div>
                {/* Container 2 */}
                {/* Amp la Sol */}
                <div className='flex flex-col items-center justify-center gap-y-1 md:border-r md:border-accent pr-2 md:pr-6'>
                  <div className='flex items-center justify-center gap-x-2'>
                    <div className='text-lg'>{proiect.detalii.numarAmprentaLaSol}</div>
                    <div className='text-3xl text-accent'>{proiect.detalii.iconAmprentaLaSol}</div>
                  </div>
                  <div className='text-sm'>Ampr. Sol</div>
                </div>
                {/* MP utili */}
                <div className='flex flex-col items-center justify-center gap-y-1'>
                  <div className='flex items-center justify-center gap-x-2'>
                    <div className='text-lg'>{proiect.detalii.numarMpUtili}</div>
                    <div className='text-3xl text-accent'>{proiect.detalii.iconMpUtili}</div>
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
          <div className='mt-4'>
            <Accordion type='single' collapsible>
              <AccordionItem value={`item-${proiectIndex}`}>
                <AccordionTrigger className='text-lg text-start'>
                  Mai multe detalii:
                </AccordionTrigger>
                <AccordionContent className=''>

                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      ))}
    </div>
  );
};
