"use client";
import { HeroCarousel } from "@/components/pages/home/HeroCarousel";
import Services from "@/components/pages/home/Services";
import WhyChooseUs from "@/components/pages/home/WhyChooseUs";
import AchievementCounter from "@/components/pages/home/AchievementCounter";
import HeroTextMobile from "@/components/pages/home/HeroTextMobile";

const Home = () => {
  return (
    <div className="py-[4.9rem] md:max-xl:py-[3.8rem]">
      <HeroTextMobile />
      <HeroCarousel />
      <WhyChooseUs />
      <AchievementCounter />
      <Services />
    </div>
  );
};

export default Home;
