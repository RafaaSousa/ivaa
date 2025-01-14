"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

import Logo from "@/app/public/images/logoBege.png";
import Image from "next/image";
import SocialMediaLinks from "./ui/SocialMediaLinks";


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

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-10 mb-10 flex justify-center">
          <Link href="/">
            <Image 
            src={Logo} 
            className="xl:hidden w-20"
            alt="Logo IVAA"
            />
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <a
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-primary border-b-2 border-accent"
                } text-xl capitalize hover:text-primary transition-all`}
              >
                {link.name}
              </a>
            );
          })}
          <div>
          <SocialMediaLinks />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
