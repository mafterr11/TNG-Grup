"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { SolicitatiOferta } from "./SolicitatiOferta";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        active ? "bg-black-heavy py-3 text-white" : "bg-black/95 text-white py-2"
      } fixed top-0 right-0 left-0 w-full z-50 transition-all duration-200 border-b-[2px] border-accent`}
    >
      <div>
        <div className='flex items-center justify-evenly md:max-lg:justify-between max-md:px-16 xl:gap-x-32'>
          {/* logo */}
          <Link href='/' className='flex items-center justify-center gap-x-4'>
            <Image
              src={logo}
              width={60}
              height={60}
              priority
              alt='Tng Grup logo'
              className='rounded-[50%] border-2 border-accent'
            />
            <h3>
              <span className='text-accent'>TNG</span> GRUP
            </h3>
          </Link>
          {/* nav */}
          <Nav
            containerStyles='hidden xl:flex gap-x-12'
            linkStyles=''
          />
          {/* btn */}
          <div className="hidden xl:block">
          <SolicitatiOferta customStyle={"p-3"}/>
          </div>
          {/* mobile nav */}
          <NavMobile
            containerStyles='xl:hidden'
            iconStyles='text-3xl text-accent'
            linkStyles='uppercase'
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
