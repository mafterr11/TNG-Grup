import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col-reverse lg:flex-row items-center justify-evenly mx-auto w-full gap-y-8 xl:gap-x-20 px-5 py-12 border-t-2 border-accent relative z-[2] bg-black">

      {/* Credits */}
      <div className="flex flex-col items-center xl:items-start gap-y-4">
        <h3><span className="text-accent">TNG</span> GRUP</h3>
        <div className="flex flex-col xl:flex-row items-center xl:gap-x-2">
          <div className="md:text-xl lg:text-2xl xl:text-base">
            Creat de {" "}
            <Link
              href='https://www.linkedin.com/in/maftei-alexandru/'
              target='blank'
              className='hover'
            >
              <span className='text-accent'>Maftei Alexandru</span>
            </Link>
          </div>
          <div>
            <p className="md:text-xl lg:text-2xl xl:text-base">© Toate drepturile rezervate</p>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col xl:flex-row gap-x-12 gap-y-8">
        <div className="flex flex-col items-center xl:items-start justify-center gap-y-4">
          <h4 className="text-lg text-accent underline decoration-2 decoration-accent underline-offset-4">Vizitează-ne</h4>
            <a
              href='https://maps.app.goo.gl/w9r4k13rvdmXyXoQ6'
              target='_blank'
              className='text-white/85 hover:underline underline-offset-4 decoration-2 decoration-accent'
            >
              Str. Costache Sibiceanu nr. 8,<br /> Sector 1  București, Romania
            </a>
        </div>
        {/* Contact */}
        <div className="flex flex-col items-center xl:items-start justify-center gap-y-4">
          <h4 className="text-lg text-accent underline decoration-2 decoration-accent underline-offset-4">Contactează-ne</h4>
          <div className="flex flex-col items-center xl:items-start justify-center text-white/85">
            <a
              href='mailto: office@tngag.ro'
              className='leading-relaxed hover:underline underline-offset-4 decoration-2 decoration-accent'
            >
              Email: office@tngag.ro
            </a>
            <a
              href='tel:+40741620774'
              target='blank'
              className='leading-relaxed hover:underline underline-offset-4 decoration-2 decoration-accent'
            >
              Tel: 0728.873.254
            </a>
          </div>
        </div>
        {/* Terms */}
        <div className="flex flex-col items-center xl:items-start justify-center gap-y-4">
          <h4 className="text-lg text-accent underline decoration-2 decoration-accent underline-offset-4">Detalii</h4>
          <div className="flex flex-col items-center xl:items-start justify-center text-white/85">
            <Link
              href='/termeni-si-conditii'
              className='leading-relaxed hover:underline underline-offset-4 decoration-2 decoration-accent'
            >
              Termeni și Condiții
            </Link>
            <Link
              href='/politica-de-confidentialitate'
              target='blank'
              className='leading-relaxed hover:underline underline-offset-4 decoration-2 decoration-accent'
            >
              Politica de Confidențialitate
            </Link>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer