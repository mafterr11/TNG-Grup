"use client";
import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { IoCloseOutline, IoHome, IoChatbubblesSharp } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb"
import { MdConstruction } from "react-icons/md";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import Link from "next/link";
import { SolicitatiOferta } from "./SolicitatiOferta";
const dropdownLinks = [
  {
    path: "/servicii#execuție-construcții-civile",
    name: "Execuție Construcții Civile",
  },
  {
    path: "/servicii#execuție-construcții-industriale",
    name: "Execuție Construcții Industriale",
  },
  {
    path: "/servicii#execuție-construcții-agricole",
    name: "Execuție Construcții Agricole",
  },
  {
    path: "/servicii#supervizare-lucrări-de-execuție",
    name: "Supervizare Lucrări De Execuție",
  },
  {
    path: "/servicii#verificare-calitate-lucrări-în-execuție",
    name: "Verificare Calitate Lucrări În Execuție",
  },
  { path: "/servicii#planificarea-execuției", name: "Planificarea Execuției" },
  { path: "/servicii#servicii-RTE", name: "Servicii RTE" },
  { path: "/servicii#dirigenție-de-șantier", name: "Dirigenție De Șantier" },
];
export const links = [
  {
    path: "/",
    name: "acasa",
    icon: <IoHome />,
  },
  {
    path: "/despre",
    name: "despre",
    icon: <TbListDetails />,
  },
  {
    path: "/servicii",
    name: "servicii",
    icon: <MdConstruction />,
  },
  {
    path: "/portofoliu",
    name: "portofoliu",
    icon: <BiSolidFoodMenu />,
  },
  {
    path: "/contact",
    name: "contact",
    icon: <IoChatbubblesSharp />,
  },
];
const NavMobile = ({ containerStyles, iconStyles, linkStyles }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiciiOpen, setIsServiciiOpen] = useState(false); // Track Servicii dropdown state

  // Function to open the Servicii dropdown
  const toggleServicii = () => {
    setIsServiciiOpen(prev => !prev); // This will toggle the state between true and false
  };
  // Function to close the menu and navigate
  const closeMenuAndNavigate = (path) => {
    setIsMenuOpen(false);
    setIsServiciiOpen(false);
    window.location.href = path;
  };

  return (
    <div className={`${containerStyles}`}>
      {/* nav trigger btn */}
      <div onClick={() => setIsMenuOpen(!isMenuOpen)} className='cursor-pointer outline-none'>
        <RiMenu2Line className='text-4xl transition-all duration-200' />
      </div>
      <aside className={`${isMenuOpen ? "right-0" : "-right-full"} bg-grey fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500`}>
        <div className='flex flex-col items-center justify-between h-full text-white'>
          {/* close btn */}
          <div onClick={() => setIsMenuOpen(false)} className='cursor-pointer text-4xl  absolute w-10 h-10 right-8 top-8 flex items-center justify-center'>
            <IoCloseOutline />
          </div>
          {/* logo */}
          <Link href={"/"}>
            <h2><span className="text-accent">TNG</span> Grup</h2>
          </Link>
          {/* links */}
          <div className="flex flex-col gap-y-8">
            {links.map((link, index) => {
              if (link.path === "/servicii") {
                return (
                  <div key={index}>
                    <div onClick={toggleServicii} className="cursor-pointer flex items-center gap-x-3 justify-base hover:text-orange relative">
                      <div className={`${iconStyles}`}>{link.icon}</div>
                      <div className={`${linkStyles}`}>{link.name}</div>
                    </div>
                    {isServiciiOpen && (
                      <Drawer>
                        <DrawerTrigger className="absolute left-0 right-0 ">Descoperiți Serviciile Noastre</DrawerTrigger>
                        <DrawerContent>
                          {dropdownLinks.map((dropdownLink, dropdownIndex) => (
                            <div
                              key={dropdownIndex}
                              onClick={() => closeMenuAndNavigate(dropdownLink.path)}
                              className='p-4 flex gap-x-[4px] cursor-pointer'
                            >
                              <span className='text-accent'>&#9679;</span>
                              <div className='hover'>
                                <span>{dropdownLink.name}</span>
                              </div>
                            </div>
                          ))}
                        </DrawerContent>
                        <DrawerClose onClick={toggleServicii} />
                      </Drawer>
                    )}
                  </div>
                );
              } else {
                return (
                  <Link
                    key={index}
                    href={link.path}
                    className="flex items-center gap-x-3 justify-base hover:text-orange"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className={`${iconStyles}`}>{link.icon}</div>
                    <div className={`${linkStyles}`}>{link.name}</div>
                  </Link>
                );
              }
            })}
          </div>
          <SolicitatiOferta />
        </div>
      </aside>
    </div>
  );
};

export default NavMobile;
