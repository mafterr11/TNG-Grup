"use client";
import Link from "next/link";
import { useState } from "react";
import { BiSolidFoodMenu } from "react-icons/bi";
import { IoCloseOutline, IoHome, IoChatbubblesSharp } from "react-icons/io5";
import { MdConstruction } from "react-icons/md";
import { RiMenu2Line } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { SolicitatiOferta } from "./SolicitatiOferta";

const dropdownLinks = [
  {
    path: "/servicii",
    name: "Execuție Construcții Civile",
  },
  {
    path: "/servicii#execuție-construcții-industriale",
    name: "Execuție Construcții Industriale",
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
    name: "acasă",
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
  const [isServiciiOpen, setIsServiciiOpen] = useState(false);

  const toggleServicii = () => {
    setIsServiciiOpen((prev) => !prev);
  };
  const closeMenuAndNavigate = (path) => {
    setIsMenuOpen(false);
    setIsServiciiOpen(false);
    window.location.href = path;
  };

  return (
    <div className={`${containerStyles}`}>
      {/* nav trigger btn */}
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="cursor-pointer outline-hidden"
      >
        <RiMenu2Line className="text-4xl transition-all duration-200" />
      </div>
      <aside
        className={`${
          isMenuOpen ? "top-0" : "-top-full"
        } fixed inset-0 z-20 h-full bg-grey p-10 transition-all duration-500`}
      >
        <div className="flex h-full flex-col items-center justify-between text-white">
          {/* close btn */}
          <div
            onClick={() => setIsMenuOpen(false)}
            className="absolute right-8 top-8 flex h-10 w-10 cursor-pointer items-center justify-center text-4xl"
          >
            <IoCloseOutline />
          </div>
          {/* logo */}
          <Link href={"/"} onClick={() => setIsMenuOpen(false)}>
            <h2>
              <span className="text-accent">TNG</span> Grup
            </h2>
          </Link>
          {/* links */}
          <div className="flex flex-col gap-y-8">
            {links.map((link, index) => {
              if (link.path === "/servicii") {
                return (
                  <div key={index}>
                    <div
                      onClick={toggleServicii}
                      className="justify-base relative flex cursor-pointer items-center gap-x-3 hover:text-orange"
                    >
                      <div className={`${iconStyles}`}>{link.icon}</div>
                      <div className={`${linkStyles}`}>{link.name}</div>
                    </div>
                    {isServiciiOpen && (
                      <Drawer>
                        <DrawerTrigger className="absolute left-0 right-0">
                          Descoperiți Serviciile Noastre
                        </DrawerTrigger>
                        <DrawerContent as="div" className="rounded-t-2xl">
                          <DrawerHeader>
                            <DrawerTitle className="text-accent">
                              <div className="absolute right-[40%] top-2 h-[0.55rem] rounded-full bg-white/20 px-10"></div>
                              Servicii de Construcții Premium
                            </DrawerTitle>
                            <DrawerDescription className="text-base font-semibold">
                              Construiește cu Încredere
                              <span className="my-4 block border-t border-accent"></span>
                            </DrawerDescription>
                          </DrawerHeader>
                          {dropdownLinks.map((dropdownLink, dropdownIndex) => (
                            <div
                              key={dropdownIndex}
                              onClick={() =>
                                closeMenuAndNavigate(dropdownLink.path)
                              }
                              className="flex cursor-pointer gap-x-[4px] px-4 pb-6"
                            >
                              <span className="text-accent">&#9679;</span>
                              <div className="hover hover:scale-[0.96]">
                                <span>{dropdownLink.name}</span>
                              </div>
                            </div>
                          ))}
                          <DrawerFooter>
                            <DrawerClose
                              as="div"
                              className="mx-auto w-[50%] bg-orange px-3 py-3 text-white hover:scale-[0.98] hover:bg-orange-hover"
                            >
                              Închide
                            </DrawerClose>
                          </DrawerFooter>
                        </DrawerContent>
                        <DrawerClose />
                      </Drawer>
                    )}
                  </div>
                );
              } else {
                return (
                  <Link
                    key={index}
                    href={link.path}
                    className="justify-base flex items-center gap-x-3 hover:text-orange"
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
