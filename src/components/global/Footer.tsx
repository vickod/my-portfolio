import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" bg-gray-500 dark:bg-gray-900 pt-10 mt-40 pb-6 ">
      <div className="w-11/12 xl:w-10/12 2xl:w-8/12 mx-auto">
        <div className="flex   sm:justify-between sm:items-start sm:gap-8 max-sm:justify-between max-sm:px-2 ">
          <div className="flex sm:gap-10 max-sm:gap-6 max-sm:flex-col  ">
            <Link
              href="#about"
              className="flex gap-1 group text-zinc-200 dark:text-zinc-300 "
            >
              À prepos
              <ArrowUpRight
                size="14"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
            <Link
              href="#projects"
              className="flex gap-1 group text-zinc-200 dark:text-zinc-300 "
            >
              Projets
              <ArrowUpRight
                size="14"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
            <Link
              href="#techno"
              className="flex gap-1 group text-zinc-200 dark:text-zinc-300 "
            >
              Technologies
              <ArrowUpRight
                size="14"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
            <Link
              href="#contact"
              className="flex gap-1 group text-zinc-200 dark:text-zinc-300 "
            >
              Contact
              <ArrowUpRight
                size="14"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
          </div>
          <div className=" flex gap-8 ">
            <Link href="https://github.com/vickod" target="_blank">
              <FaGithub
                size="26"
                className="transition-all hover:scale-125 text-zinc-200 dark:text-zinc-300 hover:text-white "
              />
            </Link>
            <Link
              href="https://be.linkedin.com/in/victor-odin-dev"
              target="_blank"
            >
              <FaLinkedin
                size="26"
                className="transition-all hover:scale-125 text-zinc-200 dark:text-zinc-300 hover:text-white"
              />
            </Link>
          </div>
        </div>
        <div className="mt-14  text-sm  text-black dark:text-zinc-700">
          <h1>© Vickod 2025. Tous droits reservés.</h1>
        </div>
      </div>
    </footer>
  );
}
