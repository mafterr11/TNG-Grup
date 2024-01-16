import Intro from "@/components/pages/portofoliu/Intro";
import { Proiecte } from "@/components/pages/portofoliu/Proiecte";

export const metadata = {
  title: "Portofoliu TNG GRUP - Proiecte Impresionante de Construcții",
  description: "Explorați portofoliul nostru diversificat de proiecte de construcții, care demonstrează expertiza și inovația TNG GRUP.",
  keywords: "portofoliu TNG GRUP, proiecte de construcții, expertiză, inovație în construcții, dirigenție de șantier, servicii rte"
};

const Portofoliu = () => {
  return (
    <div className='py-[6rem]'> 
    <Intro />
    <Proiecte />
    </div>
  );
};

export default Portofoliu;
