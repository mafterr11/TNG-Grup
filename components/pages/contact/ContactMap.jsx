"use client";
// Motion
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactMap = () => {
  return (
    <div className="py-32 lg:pt-44">
      <div className="flex flex-col items-center justify-center md:gap-y-[6rem] xxl:gap-y-[15rem]">
        {/* Text */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="px-2 text-center max-md:mb-10"
        >
          <h2 className="mb-2">
            <span className="text-accent">Haideți</span> să ne{" "}
            <span className="text-accent">conectăm.</span>
          </h2>
          <h3 className="text-[1.7rem] font-normal">
            Construiește cu noi - echipa TNG îți aduce visul la realitate
          </h3>
        </motion.div>
        {/* Harta */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="mx-auto flex h-[1000px] w-[95%] flex-col-reverse gap-y-10 xl:w-[80%] xl:px-5"
        >
          <div className="bg-gray-300 relative flex h-full w-full flex-col justify-end overflow-hidden p-10 pt-[56.25%] md:flex-row md:items-end md:justify-start">
            <iframe
              width="100%"
              height="100%"
              className="absolute left-0 top-0 h-[85%] w-full border-0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.640508958187!2d26.065850776564165!3d44.46104219980873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2021f17f0f475%3A0x44caf459818d9276!2sStrada%20Costache%20Sibiceanu%208%2C%20Bucure%C8%99ti%20011513%2C%20Romania!5e0!3m2!1sen!2sat!4v1704713070385!5m2!1sen!2sat"
              style={{ filter: "grayscale(0.4) contrast(1) opacity(0.7)" }}
            ></iframe>
            {/* Detalii */}
            <div className="absolute hidden flex-col md:right-8 md:top-8 md:flex xl:right-12 xl:top-16">
              {/* Adresa */}
              <div className="flex-wrap items-start justify-center rounded bg-grey px-[1.8rem] py-5">
                <h2 className="text-gray-900 text-sm font-semibold uppercase tracking-widest">
                  Adresă:
                </h2>
                <a
                  href="https://maps.app.goo.gl/1st6m75wnDy4ryyJ8"
                  target="_blank"
                  className="hover font-bold text-accent hover:decoration-2 hover:underline-offset-4"
                >
                  Str. Costache Sibiceanu nr. 8,
                  <br />
                  Sc. 1 București, Romania
                </a>
              </div>
              {/* Email */}
              <div className="mt-2 flex items-center justify-start gap-x-2 rounded bg-grey px-[1.8rem] py-5">
                <h2 className="text-sm font-semibold tracking-widest">
                  EMAIL:
                </h2>
                <a
                  href="mailto: office@tngag.ro"
                  className="flex items-center font-bold text-accent hover:underline hover:decoration-2 hover:underline-offset-4"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="mr-2 h-4 w-4 text-white"
                  />
                  office@tngag.ro
                </a>
              </div>
              {/* Telefon */}
              <div className="mt-2 flex items-center justify-start gap-x-2 rounded bg-grey px-[1.8rem] py-5">
                <h2 className="text-sm font-semibold tracking-widest">
                  TELEFON:
                </h2>
                <a
                  href="tel:+40728873254"
                  target="blank"
                  className="flex items-center font-bold text-accent hover:underline hover:decoration-2 hover:underline-offset-4"
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="mr-2 h-4 w-4 text-white"
                  />
                  0728.873.254
                </a>
              </div>
            </div>
            {/* Program */}
            <div className="absolute z-[7] hidden w-full flex-col rounded bg-grey p-4 md:bottom-44 md:left-4 md:flex md:w-[43%] lg:w-[35%] xl:bottom-52 xl:left-16 xl:w-[22%]">
              <h3 className="mb-4 text-lg font-semibold tracking-widest">
                Program:
              </h3>

              <div className="relative mb-4">
                <p className="text-gray-900 flex flex-col gap-x-1 text-base font-semibold leading-relaxed lg:flex-row">
                  <span className="text-accent">Luni-Vineri:</span> 08:00 am -
                  17:00 pm
                </p>
              </div>
              <div className="relative">
                <p className="text-gray-900 text-base font-semibold leading-relaxed">
                  <span className="text-accent">Sâmbătă-Duminică:</span> Închis
                </p>
              </div>
            </div>
          </div>
          {/* Mobile Panel */}
          <div className="flex flex-col gap-y-6 md:hidden">
            {/* Detalii */}
            <div className="flex flex-col items-center justify-center gap-y-8 rounded text-center">
              {/* email mobil */}
              <div>
                <h2 className="text-gray-900 text-sm font-semibold tracking-widest">
                  EMAIL:
                </h2>
                <a
                  href="mailto: office@tngag.ro"
                  className="flex items-center font-bold text-accent hover:underline hover:decoration-2 hover:underline-offset-4"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="mr-2 h-4 w-4 text-white"
                  />
                  office@tngag.ro
                </a>
              </div>
              {/* Telefon Mobil */}
              <div>
                <h2 className="text-gray-900 text-sm font-semibold tracking-widest">
                  TELEFON:
                </h2>
                <a
                  href="tel:+40728873254"
                  target="blank"
                  className="flex items-center font-bold text-accent hover:underline hover:decoration-2 hover:underline-offset-4"
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="mr-2 h-4 w-4 text-white"
                  />
                  0728.873.254
                </a>
              </div>
              <div className="">
                <h2 className="text-gray-900 text-sm font-semibold uppercase tracking-widest">
                  Adresă
                </h2>
                <a
                  href="https://maps.app.goo.gl/1st6m75wnDy4ryyJ8"
                  target="_blank"
                  className="hover mt-1 flex flex-col items-center justify-center font-bold text-accent hover:decoration-2 hover:underline-offset-4"
                >
                  <span>Str. Costache Sibiceanu</span>
                  <span>nr. 8, Sector 1 București</span>
                </a>
              </div>
            </div>
            {/* Program */}
            <div className="z-[7] mr-4 flex w-full flex-col rounded p-4 text-center md:ml-auto md:mt-0 md:w-1/2 lg:mb-[24rem] lg:w-1/3">
              <h3 className="text-gray-900 mb-4 text-lg font-semibold tracking-widest">
                Program:
              </h3>
              <div className="mb-4">
                <p className="text-gray-900 flex flex-col gap-x-1 font-semibold leading-relaxed lg:flex-row">
                  <span className="text-accent">Luni-Vineri:</span> 08:00 am -
                  17:00 pm
                </p>
              </div>
              <div>
                <p className="text-gray-900 font-semibold leading-relaxed">
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
