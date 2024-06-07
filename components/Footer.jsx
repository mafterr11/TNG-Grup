import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-[2] mx-auto flex w-full flex-col-reverse items-center justify-evenly gap-y-8 border-t-2 border-accent bg-black px-5 py-8 lg:flex-row xl:gap-x-20">
      {/* credits */}
      <div className="flex flex-col items-center gap-y-4 xl:items-start">
        <h3>
          <span className="text-accent">TNG</span> GRUP
        </h3>
        <div className="flex flex-col items-center xl:flex-row xl:gap-x-2">
          <div className="md:text-xl lg:text-2xl xl:text-base">
            Creat de{" "}
            <Link
              href="https://www.myriad-tech.ro"
              target="blank"
              className="hover"
            >
              <span className="text-accent">Myriad Tech</span>
            </Link>
          </div>
          <div>
            <p className="md:text-xl lg:text-2xl xl:text-base">
              © Toate drepturile rezervate
            </p>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col gap-x-12 gap-y-8 xl:flex-row">
        <div className="flex flex-col items-center justify-center gap-y-4 xl:items-start">
          <h4 className="text-lg text-accent underline decoration-accent decoration-2 underline-offset-4">
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
          <h4 className="text-lg text-accent underline decoration-accent decoration-2 underline-offset-4">
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
          <h4 className="text-lg text-accent underline decoration-accent decoration-2 underline-offset-4">
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
