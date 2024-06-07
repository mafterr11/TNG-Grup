import Intro from "@/components/pages/despre/Intro";
import CompanyIntro from "@/components/pages/despre/CompanyIntro";
import Team from "@/components/pages/despre/Team";

export const metadata = constructMetadata({
  title: "Despre TNG GRUP - Viziune și Valori",
  description:
    "Aflați mai multe despre istoria și valorile TNG GRUP, un nume de încredere în industria construcțiilor din România.",
  keywords: "istoria TNG GRUP, valori, construcții România",
});

const Despre = () => {
  return (
    <div className="py-[3.7rem]">
      <Intro />
      <CompanyIntro />
      {/* <Team /> */}
    </div>
  );
};

export default Despre;
