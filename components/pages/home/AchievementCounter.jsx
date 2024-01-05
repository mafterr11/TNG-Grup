"use client"
import CountUp from "react-countup";
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';
import { useInView } from 'react-intersection-observer';

const AchievementCounter = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger only once
        threshold: 0.3, // Percentage of the element that must be visible
      });
    return (
        <div ref={ref} className="w-full bg-black/60 flex items-center justify-center p-16">
            {/* container */}
            <div className="flex flex-col xl:flex-row gap-y-12 xl:gap-y-20 items-center justify-center xl:gap-x-40 ">
                {/* Ani exp */}
                <motion.div
                    variants={fadeIn('down', 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, ammount: 0.4 }}
                    className="flex flex-col gap-y-4">
                    <div className="flex items-end text-6xl">
                        <CountUp start={0} end={inView ? 6 : 0} duration={5} />+
                        <h1 className="item-end text-accent">Ani</h1>
                    </div>
                    <h1 className="text-4xl text-accent">Experiența</h1>
                </motion.div>
                {/* Achievements */}
                <div className="flex flex-col xl:flex-row xl:gap-x-20 gap-y-12">
                    {/* first row */}
                    <motion.div
                        variants={fadeIn('down', 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, ammount: 0.4 }}
                        className="flex flex-col gap-y-12 xl:gap-y-20">
                        <div className="flex flex-col items-center">
                            <div className="text-4xl">
                                <CountUp start={0} end={inView ? 51 : 0} duration={5} />+
                            </div>
                            <div className="item-end text-accent text-xl font-semibold">
                                Construcții Civile
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-4xl">
                                <CountUp start={0} end={inView ? 121 : 0} duration={5} />+
                            </div>
                            <div className="item-end text-accent text-xl font-semibold">
                                Construcții Industriale
                            </div>
                        </div>
                    </motion.div>
                    {/* second row */}
                    <motion.div
                        variants={fadeIn('down', 0.6)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, ammount: 0.4 }}
                        className="flex flex-col gap-y-12 xl:gap-y-20">
                        <div className="flex flex-col items-center">
                            <div className="text-4xl">
                                <CountUp start={0} end={inView ? 20 : 0} duration={5} />+
                            </div>
                            <div className="item-end text-accent text-xl font-semibold">
                                Angajați Proprii
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-4xl">
                                <CountUp start={0} end={inView ? 23 : 0} duration={5} />+
                            </div>
                            <div className="item-end text-accent text-xl font-semibold">
                                Ficați Copți
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default AchievementCounter
