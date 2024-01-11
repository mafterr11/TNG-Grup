"use client"
import Image from "next/image";
import p1 from "../../../public/logo.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const CompanyIntro = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial='hidden'
      whileInView={"show"}
      viewport={{ once: true, ammount: 0.4 }}
      className='container mx-auto'
    >
      <div className='flex flex-col xl:flex-row items-center justify-center gap-x-12 gap-y-12 xl:gap-y-0'>
        <div className='w-full xl:w-1/2'>
          <h3 className='text-accent font-normal'>Cine suntem noi</h3>
          <span className='border-b-2 border-accent block w-2/5 mb-8 mt-4'></span>
          <p>
            TNG GRUP AG este o societate de Antreprenoriat General, cu capital
            privat integral romanesc, infiintata in anul 2019 din dorinta de a
            satisfice cerintele clientilor, prin respectarea termenelor
            contractuale agreate si a cerintelor de calitate si SSM impuse de
            legislatia in vigoare. Calitatea lucrărilor este rezultatul
            eforturilor unui colectiv tânăr şi bine pregătit, argumentul
            principal în contractarea lucrărilor fiind garantarea acestora
            precum şi predarea lucrărilor la termenele stabilite. Societatea
            deţine în acest sens personal specializat care poate asigura
            execuţia tuturor lucrărilor solicitate de către client.
          </p>
        </div>
        <div className='w-full xl:w-[40%] h-42 '>
          <Image src={p1} alt='TNG logo' className='rounded-3xl object-cover' />
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyIntro;
