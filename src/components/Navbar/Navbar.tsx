import Image from "next/image";
import Container from "../Container";
import logo from "@/assets/logo.png";
import { FaWhatsappSquare } from "react-icons/fa";

import Link from "next/link";
import Links from "./Links";
import { ModeToggle } from "../ui/modeToggle";
import { BsInstagram, BsTelegram, BsWhatsapp } from "react-icons/bs";
import DropdownPhone from "./DropdownPhone";
const Navbar = () => {
  return (
    <>
      <div className="w-full bg-primary/60 md:absolute md:left-0 md:top-0 z-10">
        <Container>
          <div className="flex justify-between items-center px-5">
            <Link href={"/"}>
              <div className="relative overflow-hidden h-24 aspect-square rounded-md">
                <Image
                  fill
                  src={logo}
                  alt="photo"
                  className="object-cover object-center"
                />
              </div>
            </Link>

            <div className="flex gap-4 ">
              <div className="hidden md:block">
                <ModeToggle />
              </div>
    
              <Link href={"/"}>
                <BsInstagram size={30} />
              </Link>
              <Link href={"/"}>
                {" "}
                <BsWhatsapp size={30} />
              </Link>
              <Link href={"/"}>
                {" "}
                <BsTelegram size={30} />
              </Link>
              <DropdownPhone />
            </div>
          </div>
        </Container>
        <div className="hidden md:block">
          <Links />
        </div>
      </div>
    </>
  );
};

export default Navbar;
