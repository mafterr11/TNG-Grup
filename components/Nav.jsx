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
    name: "acasa",
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

const Nav = ({ containerStyles, linkStyles }) => {
  const pathname = usePathname();
  return (
    <nav className={`${containerStyles} flex items-center justify-center`}>
      {links.map((link, index) => {
        if (link.path === "/servicii") {
          return (
            <NavigationMenu key={index}>
              <NavigationMenuList>
                <NavigationMenuItem as='div'>
                  <NavigationMenuTrigger as='span' className={`${linkStyles}`}>
                    {link.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent as='div'>
                    {dropdownLinks.map((dropdownLink, dropdownIndex) => (
                      <Link
                        key={dropdownIndex}
                        href={dropdownLink.path}
                        passHref
                        legacyBehavior 
                      >
                        <NavigationMenuLink>
                          <div>
                          <div className='mb-4 w-[16rem] flex  gap-x-[4px] '>
                            <span className='text-accent'>&#9679;</span>
                            <div className='hover'>
                              <span>{dropdownLink.name}</span>
                            </div>
                          </div>
                          <span className="w-full h-2 text-white"></span>
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
            <Link key={index} href={link.path} className={`${linkStyles}`}>
              <span>{link.name}</span>
            </Link>
          );
        }
      })}
    </nav>
  );
};

export default Nav;
