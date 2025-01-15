"use client";

import React from "react";
import SocialMediaLinks from "./ui/SocialMediaLinks";
import Logo from "@/app/public/images/logoBege.png";
import Link from "next/link";
import Image from "next/image";
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
  {
    name: "Contato",
    path: "/contato",
  },
];

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="bg-accent">
      <div className="container py-8">
        <div className="flex flex-col items-center pt-6 pb-6">
            <Image 
              src={Logo} 
              className="py-4" 
              alt="Logo IVAA" 
              width={160} 
              height={60} 
              />
          <h2 className="font-adventures text-2xl text-center text-primary py-4">Sua consultoria de carreira e desenvolvimento</h2>
        </div>

        <div className="flex flex-row justify-between items-center px-4 py-4">
          <div className="flex flex-col sm:flex-row gap-4 ">
            {links.map((link, index) => {
              return (
                <a
                  href={link.path}
                  key={index}
                  className="text-primary border-b-2 border-accent capitalize font-light hover:font- transition-all">
                  {link.name}
                </a>
              );
            })}
          </div>

          <div>
            <SocialMediaLinks />
          </div>
        </div>

        <div className="flex justify-center text-primary pb-8">
          <h6 className="font-light">© 2024 Camila Pedra. Todos os direitos reservados.</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
