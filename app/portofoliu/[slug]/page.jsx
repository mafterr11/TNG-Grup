"use client"
import { useParams } from "next/navigation";
import { projects } from "../../../utils/projects"; 

const PortofoliuDetails = () => {
  const { slug } = useParams(); 

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className='container mx-auto py-[20rem]'>Project not found.</div>
    );
  }

  return (
    <div className='container mx-auto py-[20rem]'>
      <h1>Detalii Portofoliu: {project.name}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default PortofoliuDetails;
