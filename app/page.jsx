import { HeroCarousel } from "@/components/pages/home/HeroCarousel";
import Services from "@/components/pages/home/Services";
import WhyChooseUs from "@/components/pages/home/WhyChooseUs";
import AchievementCounter from "@/components/pages/home/AchievementCounter";

const Home = () => {
  return (
    <div className='py-[5.7rem] '>
      <div className="text-center container mt-8 flex flex-col md:hidden">
        <h1>
          <span className='text-accent'>TNG</span> Grup
        </h1>
        <p className='text-white my-4'>
          Înțelegem că fiabilitatea este cheia și lucrăm îndeaproape cu clienții
          noștri pentru a ne asigura că îndeplinim nevoile lor și nu îi lăsăm la
          greu.
        </p>
      </div>
      <HeroCarousel />
      <WhyChooseUs />
      <AchievementCounter />
      <Services />
    </div>
  );
};

export default Home;
