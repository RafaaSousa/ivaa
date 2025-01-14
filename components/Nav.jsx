"use client";

import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "Sobre",
    path: "#sobre",
  },
  {
    name: "Missão",
    path: "#missao",
  },
  {
    name: "Soluções",
    path: "#solucao",
  },
  {
    name: "Depoimentos",
    path: "#depoimentos",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8 ">
      {links.map((link, index) => {
        return (
          <a
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "font-adventures font-bold text-accent border-b-2 border-accent"
            }capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
