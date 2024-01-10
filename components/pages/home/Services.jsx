"use client"
import Image from "next/image";
import ServicesCarouselImg from "../../../public/ServicesCarouselLogo.png";
import { ServicesCarousel } from "./ServicesCarousel";
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

const Services = () => {
  return (
    <div className='py-12 xl:py-20 w-full max-w-[1440px] mx-auto overflow-hidden'>
      <motion.div
       variants={fadeIn('down', 0.4)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: true, ammount: 0.2 }}
      className="flex flex-col items-center justify-center mb-10">
        <Image src={ServicesCarouselImg} alt='ServicesCarousel Image' className='object-contain rounded-b-[30%]' />
        <span className="w-2/3 border-b-2 border-accent mt-10"></span>
        <ServicesCarousel />
      </motion.div>

    </div>
  );
};

export default Services;
