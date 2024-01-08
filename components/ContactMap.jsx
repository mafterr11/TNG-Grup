// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactMap = () => {
  return (
    <div className='lg:pt-44 py-32'>
      <div className='lg:mb-12 mb-0 text-center'>
        <h2 className='mb-2'>
          <span className="text-accent">Haideți</span> să ne <span className='text-accent'>conectăm.</span>
        </h2>
        <h1></h1>
      </div>
      <div className='w-[80%] px-5 py-12 md:py-24 mx-auto flex flex-col-reverse h-[1000px] gap-y-10'>
        <div className='w-full h-full bg-gray-300 rounded-lg overflow-hidden p-10 flex flex-col md:flex-row md:items-end md:justify-start justify-end relative pt-[56.25%]'>
          <iframe
            width='100%'
            height='100%'
            className='absolute top-0 left-0 w-full h-[85%] border-0'
            title='map'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d711.9110905301695!2d26.0682636!3d44.4609632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2021f17f0f475%3A0x44caf459818d9276!2sStrada%20Costache%20Sibiceanu%208%2C%20Bucure%C8%99ti%20011513%2C%20Rum%C3%A4nien!5e0!3m2!1sde!2sat!4v1704709423542!5m2!1sde!2sat"
            style={{ filter: "grayscale(0.4) contrast(1) opacity(0.7)" }}
          ></iframe>
          {/* Detalii */}
          <div className=' bg-grey absolute top-16 right-12 hidden md:flex flex-col flex-wrap py-8 rounded items-start justify-center'>
            <div className=' px-8'>
              <h2 className='title-font font-semibold text-gray-900 tracking-widest text-sm '>
                ADDRESS
              </h2>
              <a
                href='https://maps.app.goo.gl/p1wcRJjfmqQvtwxq8'
                target='_blank'
                className=' text-accent font-bold hover hover:underline-offset-4 hover:decoration-2'
              >
                Str. Costache Sibiceanu nr. 8,<br />
                Sector 1 București, Romania
              </a>
            </div>
            <div className='px-8 mt-4'>
              <h2 className='title-font font-semibold text-gray-900 tracking-widest text-sm'>
                EMAIL
              </h2>
              <a
                href='mailto: madinytattoo@gmail.com'
                className='text-accent mt-2 hover:underline hover:underline-offset-4 hover:decoration-2 font-bold flex items-center'
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-4 h-4 text-white" />office@tngag.ro
              </a>
              <h2 className='font-semibold text-gray-900 tracking-widest mt-4 text-sm'>
                PHONE
              </h2>
              <a
                href='tel:+40741620774'
                target='blank'
                className='text-accent mt-2 hover:underline hover:underline-offset-4 hover:decoration-2 font-bold flex items-center'
              >
                <FontAwesomeIcon icon={faPhone} className="mr-2 w-4 h-4 text-white" />+04.728.873.254
              </a>
            </div>
          </div>
          {/* Program */}
          <div className='xl:w-1/3 md:w-1/2  bg-grey z-[7] hidden md:flex flex-col  w-full p-4  rounded absolute bottom-52 left-16'>
            <h3 className='font-semibold text-xl tracking-widest mb-4'>
              Program:
            </h3>

            <div className='relative mb-4'>
              <p className='leading-relaxed text-gray-900 font-semibold flex flex-col lg:flex-row gap-x-1 text-base'>
                <span className='text-accent'>Luni-Vineri:</span> 08:00 am -
                17:00 pm
              </p>
            </div>
            <div className='relative'>
              <p className='leading-relaxed text-gray-900 font-semibold text-base'>
                <span className='text-accent'>Sâmbătă-Duminică:</span> Închis
              </p>
            </div>
          </div>
        </div>
        {/* Mobile Panel */}
        <div className="flex md:hidden flex-col gap-y-6">
          {/* Program */}
          <div className='lg:w-1/3 md:w-1/2  z-[7] flex flex-col md:ml-auto w-full p-4 mt-8 md:mt-0 mr-4 lg:mb-[24rem] rounded shadow-md'>
            <h2 className='font-semibold text-gray-900 tracking-widest mb-1'>
              Program:
            </h2>
            <div className='relative mb-4'>
              <p className='leading-relaxed text-gray-900 font-semibold flex flex-col lg:flex-row gap-x-1'>
                <span className='text-accent'>Luni-Sambata:</span> 11:00 am -
                22:00 pm
              </p>
            </div>
            <div className='relative'>
              <p className='leading-relaxed text-gray-900 font-semibold'>
                <span className='text-accent'>Duminica:</span> Inchis
              </p>
            </div>
          </div>
          {/* Detalii */}
          <div className=' relative flex flex-wrap py-4 mb-4 rounded shadow-md items-center justify-start'>
            <div className='lg:w-1/2 px-6 mb-4 lg:mt-0'>
              <h2 className='title-font font-semibold text-gray-900 tracking-widest text-sm'>
                EMAIL
              </h2>
              <a
                href='mailto: madinytattoo@gmail.com'
                className='text-accent hover:underline hover:underline-offset-4 hover:decoration-2 font-bold items-center flex'
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-4 h-4 text-white" />Madinytattoo@gmail.com
              </a>
              <h2 className='font-semibold text-gray-900 tracking-widest mt-4 text-sm'>
                PHONE
              </h2>
              <a
                href='tel:+40741620774'
                target='blank'
                className='text-accent hover:underline hover:underline-offset-4 hover:decoration-2 font-bold flex items-center'
              >
                <FontAwesomeIcon icon={faPhone} className="mr-2 w-4 h-4 text-white" />+04.741.620.774
              </a>
            </div>
            <div className='lg:w-1/2 px-6'>
              <h2 className='title-font font-semibold text-gray-900 tracking-widest text-sm'>
                ADDRESS
              </h2>
              <a
                href='https://maps.app.goo.gl/p1wcRJjfmqQvtwxq8'
                target='_blank'
                className='mt-1 text-accent font-bold hover hover:underline-offset-4 hover:decoration-2'
              >
                Șos. Pipera 61, București 077190
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
