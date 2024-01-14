"use client"
import { useParams } from "next/navigation";
import { proiecte } from "../../../utils/proiecte"; 

const PortofoliuDetails = () => {
  const { slug } = useParams(); 

  const proiect = proiecte.find((p) => p.slug === slug);

  if (!proiect) {
    return (
      <div className='container mx-auto py-[20rem]'>Proiect not found.</div>
    );
  }

  return (
    <div className='container mx-auto py-[20rem]'>
      <h1>Detalii Portofoliu: {proiect.nume}</h1>
    </div>
  );
};

export default PortofoliuDetails;
