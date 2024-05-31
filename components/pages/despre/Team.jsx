"use client";
// Image
import Image from "next/image";
// Motion
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

export const angajati = [
  {
    nume: "Munteanu Mihai",
    rol: "Inginer Pleb",
    descriere:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Dolor, eveniet labore aut nisi perspiciatis non alias molestiae nemo a libero!",
    image: "/despre/4.jpeg",
  },
  {
    nume: "Munteanu Bogdan",
    rol: "Inginer Sef",
    descriere:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Dolor, eveniet labore aut nisi perspiciatis non alias molestiae nemo a libero!",
    image: "/despre/5.jpeg",
  },
  {
    nume: "Vladimir",
    rol: "Are ciobanesc",
    descriere:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Dolor, eveniet labore aut nisi perspiciatis non alias molestiae nemo a libero!",
    image: "/despre/6.jpeg",
  },
  {
    nume: "Marius",
    rol: "Pare rau de mailuri",
    descriere:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Dolor, eveniet labore aut nisi perspiciatis non alias molestiae nemo a libero!",
    image: "/despre/7.jpeg",
  },
];
const Team = () => {
  return (
    <section className="xl:mt-24">
      <div className="container mx-auto px-5 py-24">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="mb-20 flex w-full flex-col text-center"
        >
          <h3 className="mb-8 font-normal text-accent">Echipa de Management</h3>
          <p className="mx-auto text-base leading-relaxed lg:w-full">
            Inovarea și adaptabilitatea sunt calitățile cheie ale echipei TNG
            Grup. Tinerii noștri profesioniști sunt mereu la curent cu ultimele
            tendințe și tehnologii din domeniu, îmbrățișând noi metode și
            soluții pentru a optimiza procesele de construcție. Această abordare
            proactivă asigură că suntem mereu un pas înainte în industrie,
            oferind clienților noștri cele mai eficiente și sustenabile soluții.
          </p>
        </motion.div>
        <div className="-m-4 flex flex-wrap">
          {angajati.map((angajat, index) => (
            <motion.div
              key={index}
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, ammount: 0.4 }}
              className="p-4 lg:w-1/2"
            >
              <div className="mb-12 flex h-full flex-col items-center justify-center text-center sm:flex-row sm:justify-start sm:text-left">
                <Image
                  alt="Membrii echipei TNG Grup"
                  height={800}
                  width={800}
                  className="mb-4 h-48 w-48 flex-shrink-0 rounded-lg object-cover object-center sm:mb-0"
                  src={angajat.image}
                />
                {/* Text */}
                <div className="flex-grow sm:pl-8">
                  <h2 className="text-lg font-medium">{angajat.nume}</h2>
                  <h3 className="mb-6 font-normal text-accent">
                    {angajat.rol}
                  </h3>
                  <p className="-m-2">{angajat.descriere}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
