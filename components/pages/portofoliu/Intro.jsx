"use client";
import Image from "next/image";
import p1 from "../../../public/portofoliu/portofoliu.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const Intro = () => {
  return (
    <div className="mb-12 xl:mb-24">
      <div className="relative h-64 w-full overflow-hidden xl:h-[28rem]">
        <Image
          src={p1}
          alt="Imagine portofoliu TNG Grup"
          fill={true}
          priority={true}
          className="object-cover"
        />
        <div className="absolute inset-0 border-b border-accent bg-black/60" />
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-y-4"
        >
          <h3 className="flex flex-col items-start justify-center gap-y-2 text-4xl text-accent xl:flex-row xl:gap-x-2">
            Portofoliul Nostru
          </h3>
          <h3 className="flex flex-row items-center justify-center text-xl font-normal text-white/80 xl:text-2xl">
            <div>
              Eficiență<span className="text-2xl text-accent">.</span>
            </div>
            <div>
              Sustenabilitate<span className="text-2xl text-accent">.</span>
            </div>
            <div>Calitate</div>
          </h3>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
