"use client";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import { useInView } from "react-intersection-observer";

const AchievementCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.3, // Percentage of the element that must be visible
  });
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial='hidden'
      whileInView={"show"}
      viewport={{ once: true, ammount: 0.4 }}
      ref={ref}
      className='w-full bg-black/60 flex items-center justify-center p-16'
    >
      {/* container */}
      <div className='flex flex-col lg:flex-row gap-y-12 xl:gap-y-20 justify-center lg:gap-x-40 '>
        <div className='flex-1'>
          <div className='text-3xl lg:text-5xl font-extrabold flex items-end xl:pt-4'>
            <CountUp start={0} end={inView ? 30 : 0} duration={5} /> +
            <div className='text-lg lg:text-base xl:text-3xl font-bold uppercase ml-[3px] tracking-[1px] leading-[1] max-w-[150px] lg:max-w-[150px] xl:max-w-[200px] text-accent'>
              Ani
            </div>
          </div>
          <div className='text-lg lg:text-base xl:text-xl font-bold uppercase tracking-[1px] leading-[1] max-w-[150px] lg:max-w-[150px] xl:max-w-[200px] text-accent'>
            Experiența
          </div>
        </div>
        <div className='flex-1'>
          <div className='text-3xl lg:text-5xl font-extrabold'>
            <CountUp start={0} end={inView ? 50 : 0} duration={5} /> +
          </div>
          <div className='text-lg lg:text-base xl:text-xl font-bold uppercase tracking-[1px] leading-[1.4] max-w-[150px] lg:max-w-[150px] xl:max-w-[200px] text-accent'>
            Construcții Civile
          </div>
        </div>
        <div className='flex-1'>
          <div className='text-3xl lg:text-5xl font-extrabold'>
            <CountUp start={0} end={inView ? 20 : 0} duration={5} /> +
          </div>
          <div className='text-lg lg:text-base xl:text-xl font-bold uppercase tracking-[1px] leading-[1.4] max-w-[150px] lg:max-w-[150px] xl:max-w-[200px] text-accent'>
            Construcții Industriale
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementCounter;
