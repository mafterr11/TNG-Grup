"use client";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import { useInView } from "react-intersection-observer";

const AchievementCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, ammount: 0.4 }}
      ref={ref}
      className="flex w-full items-center justify-center bg-black/60 p-16"
    >
      {/* container */}
      <div className="flex flex-col justify-center gap-y-12 lg:flex-row lg:gap-x-40 xl:gap-y-20">
        <div className="flex-1">
          <div className="flex items-end text-3xl lg:text-[2.8rem] xl:pt-4">
            <CountUp start={0} end={inView ? 30 : 0} duration={5} />+
            <div className="ml-[3px] max-w-[150px] text-lg font-bold uppercase leading-[1.4] tracking-[1px] text-accent lg:text-base xl:max-w-[200px] xl:text-3xl ">
              Ani
            </div>
          </div>
          <div className="max-w-[150px] text-lg font-bold uppercase tracking-[1px] leading-none text-accent lg:text-base xl:max-w-[200px] xl:text-xl xl:-mt-1">
            Experiența
          </div>
        </div>
        <div className="flex-1">
          <div className="text-3xl lg:text-[2.8rem]">
            <CountUp start={0} end={inView ? 50 : 0} duration={5} />+
          </div>
          <div className="max-w-[150px] text-lg font-bold uppercase leading-[1.4] tracking-[1px] text-accent lg:text-base xl:max-w-[200px] xl:text-xl xl:-mt-2">
            Construcții Civile
          </div>
        </div>
        <div className="flex-1">
          <div className="text-3xl lg:text-[2.8rem]">
            <CountUp start={0} end={inView ? 20 : 0} duration={5} />+
          </div>
          <div className="max-w-[150px] text-lg font-bold uppercase leading-[1.4] tracking-[1px] text-accent lg:text-base xl:max-w-[200px] xl:text-xl xl:-mt-2">
            Construcții Industriale
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementCounter;
