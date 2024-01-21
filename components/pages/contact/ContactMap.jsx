"use client";
// Motion
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactMap = () => {
  return (
    <div className="lg:pt-44 py-32">
      <div className="flex flex-col justify-center items-center md:gap-y-[6rem]">
        {/* Text */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="text-center px-2 max-md:mb-10"
        >
          <h2 className="mb-2">
            <span className="text-accent">Haideți</span> să ne{" "}
            <span className="text-accent">conectăm.</span>
          </h2>
          <h3 className="font-normal text-[1.7rem]">
            <span className="text-accent">Construiește</span> cu noi -{" "}
            <span className="text-accent">echipa TNG</span> îți aduce visul la{" "}
            <span className="text-accent">realitate</span>
          </h3>
        </motion.div>
        {/* Harta */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="w-[95%] xl:w-[80%] xl:px-5 mx-auto flex flex-col-reverse h-[1000px] gap-y-10"
        >
          <div className="w-full h-full bg-gray-300 overflow-hidden p-10 flex flex-col md:flex-row md:items-end md:justify-start justify-end relative pt-[56.25%]">
            <iframe
              width="100%"
              height="100%"
              className="absolute top-0 left-0 w-full h-[85%] border-0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.640508958187!2d26.065850776564165!3d44.46104219980873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2021f17f0f475%3A0x44caf459818d9276!2sStrada%20Costache%20Sibiceanu%208%2C%20Bucure%C8%99ti%20011513%2C%20Romania!5e0!3m2!1sen!2sat!4v1704713070385!5m2!1sen!2sat"
              style={{ filter: "grayscale(0.4) contrast(1) opacity(0.7)" }}
            ></iframe>
            {/* Detalii */}
            <div className="absolute xl:top-16 xl:right-12 md:top-8 md:right-8 hidden md:flex flex-col">
              {/* Adresa */}
              <div className="px-[1.8rem] bg-grey flex-wrap py-5 rounded items-start justify-center">
                <h2 className="text-sm font-semibold text-gray-900 tracking-widest uppercase">
                  Adresă
                </h2>
                <a
                  href="https://maps.app.goo.gl/1st6m75wnDy4ryyJ8"
                  target="_blank"
                  className=" text-accent font-bold hover hover:underline-offset-4 hover:decoration-2"
                >
                  Str. Costache Sibiceanu nr. 8,
                  <br />
                  Sc. 1 București, Romania
                </a>
              </div>
              {/* Email */}
              <div className="px-[1.8rem] mt-2 bg-grey flex gap-x-4 py-5 rounded items-center justify-start">
                <h2 className="text-sm font-semibold tracking-widest">EMAIL</h2>
                <a
                  href="mailto: office@tngag.ro"
                  className="text-accent  hover:underline hover:underline-offset-4 hover:decoration-2 font-bold flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="mr-2 w-4 h-4 text-white"
                  />
                  office@tngag.ro
                </a>
              </div>
              {/* Telefon */}
              <div className="px-[1.8rem] mt-2 bg-grey flex gap-x-4 py-5 rounded items-center justify-start">
                <h2 className="font-semibold tracking-widest text-sm">
                  TELEFON
                </h2>
                <a
                  href="tel:+40728873254"
                  target="blank"
                  className="text-accent  hover:underline hover:underline-offset-4 hover:decoration-2 font-bold flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="mr-2 w-4 h-4 text-white"
                  />
                  0728.873.254
                </a>
              </div>
            </div>
            {/* Program */}
            <div className=" hidden md:flex flex-col p-4 w-full md:w-[43%] lg:w-[35%] xl:w-[22%] bg-grey z-[7] rounded absolute md:bottom-44 md:left-4 xl:bottom-52 xl:left-16">
              <h3 className="font-semibold text-lg tracking-widest mb-4">
                Program:
              </h3>

              <div className="relative mb-4">
                <p className=" flex flex-col lg:flex-row gap-x-1 text-base font-semibold leading-relaxed text-gray-900">
                  <span className="text-accent">Luni-Vineri:</span> 08:00 am -
                  17:00 pm
                </p>
              </div>
              <div className="relative">
                <p className="text-base font-semibold leading-relaxed text-gray-900">
                  <span className="text-accent">Sâmbătă-Duminică:</span> Închis
                </p>
              </div>
            </div>
          </div>
          {/* Mobile Panel */}
          <div className="flex md:hidden flex-col gap-y-6">
            {/* Detalii */}
            <div className="  flex flex-col rounded text-center items-center justify-center gap-y-8">
              {/* email mobil */}
              <div>
                <h2 className="text-sm font-semibold text-gray-900 tracking-widest">
                  EMAIL
                </h2>
                <a
                  href="mailto: office@tngag.ro"
                  className="flex items-center text-accent hover:underline hover:underline-offset-4 hover:decoration-2 font-bold"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="mr-2 w-4 h-4 text-white"
                  />
                  office@tngag.ro
                </a>
              </div>
              {/* Telefon Mobil */}
              <div>
                <h2 className="font-semibold text-gray-900 tracking-widest text-sm">
                  TELEFON
                </h2>
                <a
                  href="tel:+40728873254"
                  target="blank"
                  className="flex items-center text-accent hover:underline hover:underline-offset-4 hover:decoration-2 font-bold"
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="mr-2 w-4 h-4 text-white"
                  />
                  0728.873.254
                </a>
              </div>
              <div className="">
                <h2 className="text-sm font-semibold text-gray-900 tracking-widest uppercase">
                  Adresă
                </h2>
                <a
                  href="https://maps.app.goo.gl/1st6m75wnDy4ryyJ8"
                  target="_blank"
                  className="mt-1 text-accent flex flex-col items-center justify-center font-bold hover hover:underline-offset-4 hover:decoration-2"
                >
                  <span>Str. Costache Sibiceanu</span>
                  <span>nr. 8, Sector 1 București</span>
                </a>
              </div>
            </div>
            {/* Program */}
            <div className="flex flex-col lg:w-1/3 md:w-1/2 z-[7] md:ml-auto w-full p-4 text-center md:mt-0 mr-4 lg:mb-[24rem] rounded">
              <h3 className="font-semibold text-lg text-gray-900 tracking-widest mb-4">
                Program:
              </h3>
              <div className="mb-4">
                <p className="leading-relaxed text-gray-900 font-semibold flex flex-col lg:flex-row gap-x-1">
                  <span className="text-accent">Luni-Vineri:</span> 08:00 am -
                  17:00 pm
                </p>
              </div>
              <div>
                <p className="leading-relaxed text-gray-900 font-semibold">
                  <span className="text-accent">Sâmbătă-Duminică:</span> Inchis
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactMap;
