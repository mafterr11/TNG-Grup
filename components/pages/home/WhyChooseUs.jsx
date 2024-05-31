"use client";
import Image from "next/image";
import p1 from "../../../public/HeroCarousel/7.webp";
import p2 from "../../../public/HeroCarousel/6.webp";
import p3 from "../../../public/HeroCarousel/5.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const WhyChooseUs = () => {
  return (
    <section className="container overflow-x-hidden py-12 text-center xl:py-24 xl:text-start">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, ammount: 0.4 }}
        className="mb-12"
      >
        <h3 className="text-accent">De ce să ne alegeți</h3>
        <h4 className="text-lg text-white/95">Un pas în direcția cea bună!</h4>
        <span className="mt-4 inline-block w-[90%] border-b-2 border-accent md:w-[80%] xl:w-[50%]"></span>
      </motion.div>
      <div className="-mx-4 -mb-10 -mt-4 flex flex-wrap sm:-m-4">
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="mb-6 p-4 sm:mb-0 md:w-1/3"
        >
          <div className="h-64 overflow-hidden rounded-lg">
            <Image
              alt="De ce sa alegeti TNG Grup"
              className="h-full w-full object-cover object-center"
              width={800}
              height={800}
              src={p1}
            />
          </div>
          <h2 className="mt-6 text-xl font-medium capitalize text-accent">
            Excelentă
          </h2>
          <p className="mt-4 text-base leading-relaxed text-balance">
            Punem în practică un standard de excelență în fiecare proiect pe
            care îl întreprindem, urmărind nu doar să satisfacem, ci să
            impresionăm și să inovăm în mod constant.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="mb-6 p-4 sm:mb-0 md:w-1/3"
        >
          <div className="h-64 overflow-hidden rounded-lg">
            <Image
              alt="De ce sa alegeti TNG Grup"
              className="h-full w-full object-cover object-center"
              width={800}
              height={800}
              src={p2}
            />
          </div>
          <h2 className="mt-6 text-xl font-medium capitalize text-accent">
            Profesionalism
          </h2>
          <p className="mt-4 text-base leading-relaxed text-balance">
            Profesionalismul nostru se manifestă prin angajamentul neclintit de
            a satisface și depăși așteptările clienților. Fiecare membru al
            echipei noastre este instruit să ofere soluții eficiente, cu o
            atenție meticuloasă la detalii.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="mb-6 p-4 sm:mb-0 md:w-1/3"
        >
          <div className="h-64 overflow-hidden rounded-lg">
            <Image
              alt="De ce sa alegeti TNG Grup"
              className="h-full w-full object-cover object-center"
              width={800}
              height={800}
              src={p3}
            />
          </div>
          <h2 className="mt-6 text-xl font-medium capitalize text-accent">
            Expertiză
          </h2>
          <p className="mt-4 text-base leading-relaxed text-balance">
            Cunoașterea noastră intimă a industriei ne permite să identificăm și
            să anticipăm nevoile specifice ale proiectului, creând soluții
            personalizate care se aliniază perfect cu viziunea și obiectivele
            dvs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
