import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-[2] mx-auto flex w-full flex-col-reverse items-center justify-between gap-y-8 border-t-2 border-accent bg-black py-8 lg:flex-row xl:px-12">
      {/* credits */}
      <div className="flex flex-col items-center gap-y-2 xl:items-start">
        <div className="flex max-md:flex-col items-center justify-center gap-x-2">
          <h3>
            <span className="text-accent">TNG</span> GRUP
          </h3>

          <p className="md:text-xl lg:text-2xl xl:text-base">
            © Toate drepturile rezervate
          </p>
        </div>
        <div className="md:text-xl lg:text-2xl xl:text-[15px]">
          Creat de{" "}
          <Link
            href="https://www.myriad-tech.ro"
            target="blank"
            className="hover"
          >
            <span className="text-accent">Myriad Tech</span>
          </Link>
        </div>
      </div>
      {/* ANPC */}
      <div className="flex items-center justify-center max-md:flex-col">
          <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="nofollow">
            <img
              style={{ width: "250px" }}
              src="https://wpfitness.eu/wp-content/uploads/2022/10/anpc-sal.png"
              alt="Solutionarea Alternativa a Litigiilor"
            />
          </a>
          <br />
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="nofollow"
          >
            <img
              style={{ width: "250px" }}
              src="https://wpfitness.eu/wp-content/uploads/2022/10/anpc-sol.png"
              alt="Solutionarea Online a Litigiilor"
            />
          </a>
        </div>
      {/* content */}
      <div className="flex flex-col gap-x-12 gap-y-8 xl:flex-row">
        <div className="flex flex-col items-center justify-center gap-y-4 xl:items-start">
          <h4 className="text-[17px] text-accent underline decoration-accent decoration-2 underline-offset-4">
            Vizitează-ne
          </h4>
          <a
            href="https://maps.app.goo.gl/w9r4k13rvdmXyXoQ6"
            target="_blank"
            className="text-white/85 decoration-accent decoration-2 underline-offset-4 hover:underline"
          >
            Str. Costache Sibiceanu nr. 8,
            <br /> Sector 1 București, Romania
          </a>
        </div>
        {/* Contact */}
        <div className="flex flex-col items-center justify-center gap-y-4 xl:items-start">
          <h4 className="text-[17px] text-accent underline decoration-accent decoration-2 underline-offset-4">
            Contactează-ne
          </h4>
          <div className="flex flex-col items-center justify-center text-white/85 xl:items-start">
            <a
              href="mailto: office@tngag.ro"
              className="leading-relaxed decoration-accent decoration-2 underline-offset-4 hover:underline"
            >
              Email: office@tngag.ro
            </a>
            <a
              href="tel:+40741620774"
              target="blank"
              className="leading-relaxed decoration-accent decoration-2 underline-offset-4 hover:underline"
            >
              Tel: 0728.873.254
            </a>
          </div>
        </div>
        {/* Terms */}
        <div className="flex flex-col items-center justify-center gap-y-4 xl:items-start">
          <h4 className="text-[17px] text-accent underline decoration-accent decoration-2 underline-offset-4">
            Detalii
          </h4>
          <div className="flex flex-col items-center justify-center text-white/85 xl:items-start">
            <Link
              href="/termeni-si-conditii"
              className="leading-relaxed decoration-accent decoration-2 underline-offset-4 hover:underline"
            >
              Termeni și Condiții
            </Link>
            <Link
              href="/politica-de-confidentialitate"
              target="blank"
              className="leading-relaxed decoration-accent decoration-2 underline-offset-4 hover:underline"
            >
              Politica de Confidențialitate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
