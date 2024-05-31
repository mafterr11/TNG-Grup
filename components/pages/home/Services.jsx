"use client";
import Image from "next/image";
import ServicesCarouselImg from "../../../public/ServicesCarouselLogo.png";
import { ServicesCarousel } from "./ServicesCarousel";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const Services = () => {
  return (
    <div className="mx-auto w-full max-w-[1440px] overflow-hidden py-12 xl:py-20">
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, ammount: 0.2 }}
        className="mb-10 flex flex-col items-center justify-center"
      >
        <Image
          src={ServicesCarouselImg}
          alt="TNG Grup servicii"
          className="rounded-b-[30%] object-contain"
        />
        <span className="mt-10 w-2/3 border-b-2 border-accent"></span>
        <ServicesCarousel />
      </motion.div>
    </div>
  );
};

export default Services;
