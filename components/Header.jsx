import Link from "next/link";
import { Button } from "./ui/button";
import Logo from "@/app/public/images/logoAzul.png";
import Image from "next/image";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="bg-background py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <Image 
            src={Logo} 
            className="xl:hidden w-20"
            alt="Logo IVAA"
            />
        </Link>

        {/* desktop nav & hire me Button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Contato</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
          </div>

      </div>
    </header>
  );
};

export default Header;