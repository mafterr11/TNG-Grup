import Image from "next/image";
import p1 from '../../../public/despre/2.jpg';

const Intro = () => {
  return (
    <div className="w-full h-[30rem] relative">
      <Image src={p1} fill className=" object-cover" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 z-50 flex flex-col items-center justify-center">
        <h2 className="text-accent">TNG GRUP</h2>
        <h3>Afla mai multe despre noi</h3>
      </div>
    </div>
  )
}

export default Intro
