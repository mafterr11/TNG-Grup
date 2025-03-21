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
        active
          ? "bg-black-heavy py-3 text-white"
          : "bg-black/95 py-2 text-white"
      } fixed left-0 right-0 top-0 z-50 w-full border-b-[2px] border-accent transition-all duration-200`}
    >
      <div>
        <div className="flex items-center justify-between px-10 md:px-16 md:max-lg:justify-between xl:gap-x-32">
          {/* logo */}
          <Link href="/" className="flex items-center justify-center gap-x-4">
            <Image
              src={logo}
              width={60}
              height={60}
              priority
              alt="Tng Grup logo"
              className="hidden rounded-md border-2 border-accent xl:flex"
            />
            <h3>
              <span className="text-accent">TNG</span> GRUP
            </h3>
          </Link>
          {/* nav */}
          <Nav containerStyles="hidden xl:flex gap-x-12" linkStyles="" />
          {/* btn */}
          <div className="hidden xl:block">
            <SolicitatiOferta customStyle={"p-3"} />
          </div>
          {/* mobile nav */}
          <NavMobile
            containerStyles="xl:hidden"
            iconStyles="text-3xl text-accent"
            linkStyles="uppercase"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
