import { usePathname } from "next/navigation";
import Link from "next/link";

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

const Nav = ({ containerStyles, linkStyles }) => {
  const pathname = usePathname();
  return <nav className={`${containerStyles}`}>
    {links.map((link, index)=>{
        return <Link key={index} href={link.path} className={`${linkStyles}`}><span>{link.name}</span></Link>
    })}
  </nav>;
};

export default Nav;
