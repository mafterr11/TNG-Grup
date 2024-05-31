import { ServiciiContent } from "@/components/pages/servicii/ServiciiContent";

export const metadata = {
  title: "Servicii de Construcții Oferite de TNG GRUP",
  description:
    "Descoperiți gama largă de servicii de construcții oferite de TNG GRUP, adaptate nevoilor clientului.",
  keywords:
    "servicii construcții TNG GRUP, soluții personalizate, expertiză în construcții",
};

const Servicii = () => {
  return (
    <div className="pt-[8rem]">
      <ServiciiContent />
    </div>
  );
};

export default Servicii;
