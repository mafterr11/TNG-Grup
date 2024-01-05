"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { Button } from "./ui/button";
import Image from "next/image";
import logo from "../public/logo.png";

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
        active ? "bg-black-heavy py-4 text-white" : "bg-black/95 text-white py-3"
      } fixed top-0 right-0 left-0 w-full z-50 transition-all duration-200 border-b-[2px] border-accent`}
    >
      <div className=''>
        <div className='flex items-center justify-evenly'>
          {/* logo */}
          <Link href='/' className='flex items-center justify-center gap-x-4'>
            <Image
              src={logo}
              width={70}
              height={70}
              alt='Tng Grup Logo'
              className='rounded-[50%] border-2 border-accent'
            />
            <h3>
              <span className='text-accent'>TNG</span> GRUP
            </h3>
          </Link>
          {/* nav */}
          <Nav
            containerStyles='hidden xl:flex gap-x-12'
            linkStyles='capitalize text-lg hover'
          />
          {/* btn */}
          <Link href='/contact' className='hidden xl:flex'>
            <Button variant='orange'>Contacteaza-ne</Button>
          </Link>
          {/* mobile nav */}
          <NavMobile
            containerStyles='xl:hidden'
            iconStyles='text-3xl'
            linkStyles='uppercase'
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
