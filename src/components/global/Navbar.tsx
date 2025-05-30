"use client";
import Image from "next/image";
import { useState } from "react";
import LogoImg from "../../../public/p3.png";
import { Button } from "../ui/button";
import Link from "next/link";
import { ModeToggle } from "../modeToggle";
import { Menu } from "lucide-react";

import { MdOutlineClose } from "react-icons/md";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className={
          isOpen
            ? "w-full h-[80%] transition-transform ease-in-out transform translate-y-0 duration-500 bg-black absolute z-50 "
            : "w-full h-[-80%] transition-all absolute -translate-y-full"
        }
      >
        <div className="w-full h-full relative">
          <Button
            variant="ghost"
            className="text-white right-6 top-7 absolute "
            onClick={() => setIsOpen(false)}
          >
            <MdOutlineClose />
          </Button>
          <div className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-8 text-3xl text-white">
              <Link
                href="#about"
                className=" font-semibold transition-all duration-300 hover:text-blue-600 hover:scale-110"
                onClick={() => setIsOpen(false)}
              >
                A prepos
              </Link>
              <Link
                href="#projects"
                className="font-semibold transition-all duration-300 hover:text-blue-600 hover:scale-110"
                onClick={() => setIsOpen(false)}
              >
                Projets
              </Link>
              <Link
                href="#techno"
                className="font-semibold transition-all duration-300 hover:text-blue-600 hover:scale-110"
                onClick={() => setIsOpen(false)}
              >
                Stack
              </Link>
              <Link
                href="#contact"
                className="font-semibold transition-all duration-300 hover:text-blue-600 hover:scale-110"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      <nav className="w-11/12 xl:w-10/12 2xl:w-8/12 mx-auto h-24 flex items-center justify-between">
        <div className="flex items-center gap-24">
          <div>
            <Link href="/">
              <Image
                src={LogoImg}
                alt=""
                className="size-16 rounded-full object-"
                priority
              />
            </Link>
          </div>
          <div className="gap-6 hidden sm:flex px-5 py-1 dark:text-stone-300">
            <Link
              href="#about"
              className=" font-semibold transition-all duration-300 hover:text-blue-600 hover:scale-110"
            >
              A prepos
            </Link>
            <Link
              href="#projects"
              className="font-semibold transition-all duration-300 hover:text-blue-600 hover:scale-110"
            >
              Projets
            </Link>
            <Link
              href="#techno"
              className="font-semibold transition-all duration-300 hover:text-blue-600 hover:scale-110"
            >
              Stack
            </Link>
            <Link
              href="#contact"
              className="font-semibold transition-all duration-300 hover:text-blue-600 hover:scale-110"
            >
              Contact
            </Link>
          </div>
        </div>
        <div>
          <div className="flex gap-4">
            <ModeToggle />
            <div className="sm:hidden">
              <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
                <Menu />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
