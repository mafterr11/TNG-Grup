import {fadeIn} from '../../../variants';
import { motion } from 'framer-motion';

const HeroTextMobile = () => {
  return (
    <motion.div
    variants={fadeIn('down', 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: true, ammount: 0.4 }}
    className="container text-center mt-8 flex flex-col md:hidden">
    <h1>
      <span className='text-accent'>TNG</span> Grup
    </h1>
    <p className='text-white my-4'>
      Înțelegem că fiabilitatea este cheia și lucrăm îndeaproape cu clienții
      noștri pentru a ne asigura că îndeplinim nevoile lor și nu îi lăsăm la
      greu.
    </p>
  </motion.div>
  )
}

export default HeroTextMobile
