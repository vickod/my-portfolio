"use client";
import Image from "next/image";
import { useState } from "react";
import LogoImg from "../../../public/p3.png";
import { Button } from "../ui/button";
import Link from "next/link";
import { ModeToggle } from "../modeToggle";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full h-24 border flex items-center justify-between">
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
        <div className="gap-6 hidden sm:flex px-5 py-1 border rounded-full bg-slate-100 ">
          <Link href="/about" className="">
            A prepos
          </Link>
          <Link href="/projects" className="">
            Projets
          </Link>
          <Link href="/stack" className="">
            Stack
          </Link>
        </div>
      </div>
      <div>
        <div className="flex gap-4">
          <div className="sm:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="h-[70%] ">
                <SheetHeader className="h-full flex flex-col justify-center items-center ">
                  <SheetTitle></SheetTitle>
                  <SheetDescription asChild>
                    <div className=" flex flex-col justify-center items-center gap-10 font-bold">
                      <Link
                        href="/about"
                        onClick={handleLinkClick}
                        className="text-4xl"
                      >
                        A propos
                      </Link>
                      <Link
                        href="/projects"
                        onClick={handleLinkClick}
                        className="text-4xl"
                      >
                        Projets
                      </Link>
                      <Link
                        href="/stack"
                        onClick={handleLinkClick}
                        className="text-4xl"
                      >
                        Stack
                      </Link>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
