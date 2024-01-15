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
                  <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                      <div class="flex flex-wrap -m-4">
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                          <div class="flex relative">
                            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/>
                              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                              </div>
                          </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                          <div class="flex relative">
                            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/601x361"/>
                              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                              </div>
                          </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                          <div class="flex relative">
                            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/603x363"/>
                              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                              </div>
                          </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                          <div class="flex relative">
                            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/602x362"/>
                              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
                              </div>
                          </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                          <div class="flex relative">
                            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/605x365"/>
                              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                              </div>
                          </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                          <div class="flex relative">
                            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/606x366"/>
                              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      ))}
    </div>
  );
};
