"use client";
// Image
import Image from "next/image";
import p1 from "../../../public/despre/2.jpg";
// Motion
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const Intro = () => {
  return (
    <div className='mb-12 xl:mb-24'>
      <div className='w-full xl:h-[28rem] h-64 relative overflow-hidden'>
        <Image
          src={p1}
          alt='Despre TNG imagine'
          fill
          priority={true}
          className='object-cover'
        />
        <div className='absolute inset-0 bg-black/60 border-b border-accent' />
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className='absolute inset-0 z-10 flex flex-col gap-y-4 items-center justify-center'
        >
          <div className='text-4xl font-bold gap-y-2 text-white/80 flex flex-col xl:flex-row items-start justify-center xl:gap-x-2'>
            <div className='text-accent'>
              T<span className='text-white'>he</span>
            </div>
            <div className='text-accent'>
              N<span className='text-white'>ew</span>
            </div>
            <div className='text-accent'>
              G<span className='text-white'>eneration</span>
            </div>
          </div>
          <h3 className='flex flex-row items-center justify-center font-normal text-xl xl:text-2xl text-white/80'>
            <div>
              Inovație<span className='text-accent text-2xl'>.</span>
            </div>
            <div>
              Durabilitate<span className='text-accent text-2xl'>.</span>
            </div>
            <div>Eficiență</div>
          </h3>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
