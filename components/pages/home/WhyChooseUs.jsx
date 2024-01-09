"use client"
import Image from "next/image"
import p1 from '../../../public/HeroCarousel/7.webp'
import p2 from '../../../public/HeroCarousel/6.webp'
import p3 from '../../../public/HeroCarousel/5.webp'
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

const WhyChooseUs = () => {
  return (
  <section className="container py-12 xl:py-24 overflow-x-hidden text-center xl:text-start">
      <motion.div
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:true, ammount:0.4}}
      className=" mb-12">
        <h3 className="text-accent">De ce să ne alegeți</h3>
        <h4 className="text-lg text-white/95">Un pas în direcția cea bună!</h4>
      </motion.div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <motion.div
      variants={fadeIn('down', 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:true, ammount:0.4}}
      className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden ">
          <Image alt="content" className="object-cover object-center h-full w-full" width={800} height={800} src={p1}/>
        </div>
        <h2 className="text-xl font-medium mt-6 text-accent ">Excelentă</h2>
        <p className="text-base leading-relaxed mt-4">Punem în practică un standard de excelență în fiecare proiect pe care îl întreprindem, urmărind nu doar să satisfacem, ci să impresionăm și să inovăm în mod constant.</p>

      </motion.div>
      <motion.div
      variants={fadeIn('down', 0.6)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:true, ammount:0.4}}
      className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image alt="content" className="object-cover object-center h-full w-full" width={800} height={800} src={p2}/>
        </div>
        <h2 className="text-xl font-medium mt-6 text-accent ">Profesionalism</h2>
        <p className="text-base leading-relaxed mt-4">Profesionalismul nostru se manifestă prin angajamentul neclintit de a satisface și depăși așteptările clienților. Fiecare membru al echipei noastre este instruit să ofere soluții eficiente, cu o atenție meticuloasă la detalii.</p>

      </motion.div>
      <motion.div
      variants={fadeIn('down', 0.8)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:true, ammount:0.4}}
      className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image alt="content" className="object-cover object-center h-full w-full" width={800} height={800}  src={p3}/>
        </div>
        <h2 className="text-xl font-medium mt-6 text-accent ">Expertiză</h2>
        <p className="text-base leading-relaxed mt-4">Cunoașterea noastră intimă a industriei ne permite să identificăm și să anticipăm nevoile specifice ale afacerii voastre, creând soluții personalizate care se aliniază perfect cu viziunea și obiectivele dvs.</p>
 
      </motion.div>
    </div>
  </section>
  )
}

export default WhyChooseUs
