"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BiSolidFoodMenu } from "react-icons/bi";
import { IoCloseOutline, IoHome, IoChatbubblesSharp } from "react-icons/io5";
import { MdConstruction } from "react-icons/md";
import { RiMenu2Line } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import { SolicitatiOferta } from "./SolicitatiOferta";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const dropdownLinks = [
  { path: "/servicii#execuție-construcții-civile", name: "Execuție Construcții Civile" },
  { path: "/servicii#execuție-construcții-industriale", name: "Execuție Construcții Industriale" },
  { path: "/servicii#supervizare-lucrări-de-execuție", name: "Supervizare Lucrări De Execuție" },
  { path: "/servicii#verificare-calitate-lucrări-în-execuție", name: "Verificare Calitate Lucrări În Execuție" },
  { path: "/servicii#planificarea-execuției", name: "Planificarea Execuției" },
  { path: "/servicii#servicii-RTE", name: "Servicii RTE" },
  { path: "/servicii#dirigenție-de-șantier", name: "Dirigenție De Șantier" },
];

export const links = [
  { path: "/", name: "acasă", icon: <IoHome /> },
  { path: "/despre", name: "despre", icon: <TbListDetails /> },
  { path: "/servicii", name: "servicii", icon: <MdConstruction /> },
  { path: "/portofoliu", name: "portofoliu", icon: <BiSolidFoodMenu /> },
  { path: "/contact", name: "contact", icon: <IoChatbubblesSharp /> },
];

const NavMobile = ({ containerStyles, iconStyles, linkStyles }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiciiOpen, setIsServiciiOpen] = useState(false);

  const navigateTo = (path) => {
    setIsServiciiOpen(false);
    setIsMenuOpen(false);
    router.push(path);
  };

  return (
    <div className={`${containerStyles}`}>
      <div
        onClick={() => setIsMenuOpen((v) => !v)}
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
          <div
            onClick={() => setIsMenuOpen(false)}
            className="absolute right-8 top-8 flex h-10 w-10 cursor-pointer items-center justify-center text-4xl"
          >
            <IoCloseOutline />
          </div>

          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <h2>
              <span className="text-accent">TNG</span> Grup
            </h2>
          </Link>

          <div className="flex flex-col gap-y-8">
            {links.map((link, index) => {
              if (link.path === "/servicii") {
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setIsServiciiOpen(true)}
                    className="justify-base relative flex items-center gap-x-3 hover:text-orange"
                  >
                    <div className={`${iconStyles}`}>{link.icon}</div>
                    <div className={`${linkStyles}`}>{link.name}</div>
                  </button>
                );
              }

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
            })}
          </div>

          <SolicitatiOferta />
        </div>
      </aside>

      {/* Modal meniu servicii */}
      <Dialog open={isServiciiOpen} onOpenChange={setIsServiciiOpen}>
        <DialogContent className="w-[90%] sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-accent">Serviciile noastre</DialogTitle>
            <DialogDescription>Alege o categorie și te duc direct acolo.</DialogDescription>
          </DialogHeader>

          <div className="mt-2 space-y-3">
            {dropdownLinks.map((item) => (
              <button
                key={item.path}
                type="button"
                onClick={() => navigateTo(item.path)}
                className="flex w-full items-center gap-x-3 rounded-xs border-[1px] px-2 py-3 text-left hover:bg-accent/5"
              >
                <span className="text-accent">&#9679;</span>
                <span className="font-medium text-md">{item.name}</span>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NavMobile;
