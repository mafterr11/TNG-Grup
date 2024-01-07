"use client";
import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { IoCloseOutline, IoHome, IoChatbubblesSharp   } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb"
import { MdConstruction } from "react-icons/md";

import Link from "next/link";
import { Button } from "./ui/button";
import { SolicitatiOferta } from "./SolicitatiOferta";

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
    icon: <IoChatbubblesSharp  />,
  },
];

const NavMobile = ({ containerStyles, iconStyles, linkStyles }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen(!isOpen)} className={`${containerStyles}`}>
      {/* nav trigger btn */}
      <div className='cursor-pointer outline-none'>
        <RiMenu2Line className='text-4xl transition-all duration-200' />
      </div>
      <aside
        className={`${
          isOpen ? "right-0" : "-right-full"
        } bg-grey fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500`}
      >
        <div className='flex flex-col items-center justify-between h-full text-white'>
          {/* close btn */}
          <div
            onClick={() => setIsOpen(false)}
            className='cursor-pointer text-4xl  absolute w-10 h-10 right-8 top-8 flex items-center justify-center'
          >
            <IoCloseOutline />
          </div>
          {/* logo */}
          <Link href={"/"}>
            <h2><span className="text-accent">TNG</span> Grup</h2>
          </Link>
          {/* links */}
          <div className="flex flex-col gap-y-8">
            {links.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.path}
                  className="flex items-center gap-x-3 justify-base hover:text-orange"
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
    </div>
  );
};

export default NavMobile;
