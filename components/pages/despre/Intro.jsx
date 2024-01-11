import Image from "next/image";
import p1 from '../../../public/despre/2.jpg';

const Intro = () => {
  return (
    <div className="mb-12 xl:mb-24">
      <div className="w-full xl:h-[28rem] h-64 relative overflow-hidden">
        <Image src={p1} alt="imagine despre TNG" fill priority={true} className="object-cover" />
        <div className="absolute inset-0 bg-black/60 border-b border-accent" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
          <h2 className="text-accent mb-4">TNG GRUP</h2>
          <h3 className="font-normal text-white/80 flex flex-col xl:flex-row items-center justify-center">
            <div>Inovație<span className="text-accent hidden xl:inline-block">.</span></div>
            <div>Durabilitate<span className="text-accent hidden xl:inline-block">.</span></div>
            <div>Eficiență<span className="text-accent hidden xl:inline-block">.</span></div>
            <div>Profesionalism</div></h3>
        </div>
      </div>
    </div>
  )
}

export default Intro
