"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const links = [
  {
    path: "/",
    name: "acasă",
  },
  {
    path: "/despre",
    name: "despre",
  },
  {
    path: "/servicii",
    name: "servicii",
  },
  {
    path: "/portofoliu",
    name: "portofoliu",
  },
  {
    path: "/contact",
    name: "contact",
  },
];

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

const Nav = ({ containerStyles, linkStyles }) => {
  const currentRoute = usePathname();
  return (
    <nav className={`${containerStyles} flex items-center justify-center`}>
      {links.map((link, index) => {
        if (link.path === "/servicii") {
          return (
            <NavigationMenu key={index}>
              <NavigationMenuList>
                <NavigationMenuItem as="div" className={`${linkStyles}`}>
                  <NavigationMenuTrigger as="span">
                    <Link
                      href="/servicii"
                      className={`${currentRoute === link.path ? "decoration-accent text-base capitalize underline decoration-2 underline-offset-[0.5rem] hover:scale-[0.97]" : "hover text-base capitalize hover:scale-[0.97]"}`}
                    >
                      <span>{link.name}</span>
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent as="div" className="py-2">
                    {dropdownLinks.map((dropdownLink, dropdownIndex) => (
                      <Link
                        key={dropdownIndex}
                        href={dropdownLink.path}
                        passHref
                        legacyBehavior
                      >
                        <NavigationMenuLink>
                          <div className="my-6 flex w-[21rem] gap-x-[4px] text-center">
                            <span className="text-accent">&#9679;</span>
                            <div className="hover">
                              <span>{dropdownLink.name}</span>
                            </div>
                          </div>
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          );
        } else {
          return (
            <Link
              key={index}
              href={link.path}
              className={`${linkStyles} ${currentRoute === link.path ? "decoration-accent text-base capitalize underline decoration-2 underline-offset-[0.5rem] hover:scale-[0.97]" : "hover text-base capitalize hover:scale-[0.97]"}`}
            >
              <span>{link.name}</span>
            </Link>
          );
        }
      })}
    </nav>
  );
};

export default Nav;
