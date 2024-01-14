import Link from "next/link";
import { projects } from '../../utils/projects'; 
import Intro from "@/components/pages/portofoliu/Intro";

const Portofoliu = () => {
  return (
    <div className='py-[6rem]'> 
    <Intro />
      <h1>Proiectele mele</h1>
      {projects.map((project) => (
        <div key={project.slug}>
          <Link href={`/portofoliu/${encodeURIComponent(project.slug)}`}>
            {project.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Portofoliu;
