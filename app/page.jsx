import { HeroCarousel } from "@/components/pages/home/HeroCarousel";
import Services from "@/components/pages/home/Services";
import WhyChooseUs from "@/components/pages/home/WhyChooseUs";
import AchievementCounter from "@/components/pages/home/AchievementCounter";

const Home = () => {
  return (
    <div className='py-[5.7rem] '>
      <HeroCarousel />
      <WhyChooseUs />
      <AchievementCounter />
      <Services />
    </div>
  );
};

export default Home;
