import Image from "next/image";
import p1 from '../../../public/despre/2.jpg';

const Intro = () => {
  return (
    <div className="py-[6rem]"> 
    <div className="w-full h-[28rem] relative overflow-hidden">
      <Image src={p1} alt="imagine despre TNG" fill className="object-cover" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 z-50 flex flex-col items-center justify-center">
        <h2 className="text-accent">TNG GRUP</h2>
        <h3 className="font-normal">Afla mai multe despre noi</h3>
      </div>
    </div>
    </div>
  )
}

export default Intro
