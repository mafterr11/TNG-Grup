"use client";
// Image
import Image from "next/image";
import p1 from "../../../public/despre/2.jpg";
// Motion
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const Intro = () => {
  return (
    <div className="mb-12 xl:mb-24">
      <div className="relative h-64 w-full overflow-hidden xl:h-[28rem]">
        <Image
          src={p1}
          alt="Despre TNG imagine intro"
          fill
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
          <div className="flex flex-col items-start justify-center space-x-0 text-4xl font-bold text-white xl:flex-row xl:justify-start xl:space-x-2">
            <span className="inline-block tracking-wide">
              <span className="text-accent text-[44px] xl:text-[52px]">T</span>he
            </span>
            <span className="inline-block tracking-wide">
              <span className="text-accent text-[44px] xl:text-[52px]">N</span>ew
            </span>
            <span className="inline-block tracking-wide">
              {" "}
              <span className="text-accent text-[44px] xl:text-[52px]">G</span>eneration
            </span>
          </div>

          <h3 className="flex flex-row items-center justify-center text-xl font-normal text-white/80 xl:text-2xl">
            <div>
              Inovație<span className="text-2xl text-accent">.</span>
            </div>
            <div>
              Durabilitate<span className="text-2xl text-accent">.</span>
            </div>
            <div>Eficiență</div>
          </h3>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
