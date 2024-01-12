import Link from "next/link";

const Portofoliu = () => {
  const projects = [
    { name: "Project One", slug: "project-one" },
    { name: "Project Two", slug: "project-two" },
    { name: "Project Three", slug: "project-three" },
  ];

  return (
    <div className="py-[20rem] container mx-auto">
      <h1>Proiectele mele</h1>
      {projects.map((project) => (
        <div key={project.slug}>
          <Link href={`/portofoliu/${project.slug}`}>{project.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Portofoliu;
