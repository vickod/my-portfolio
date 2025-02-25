import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" bg-slate-600 dark:bg-zinc-800 py-4">
      <div className="w-11/12 xl:w-10/12 2xl:w-8/12 mx-auto">
        <div className="flex  justify-between items-center gap-8">
          <div className=" flex gap-10  ">
            <Link
              href="about"
              className="flex gap-1 group text-zinc-300 hover:text-white"
            >
              A prepos
              <ArrowUpRight
                size="14"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
            <Link
              href="about"
              className="flex gap-1 group text-zinc-300 hover:text-white"
            >
              Projets
              <ArrowUpRight
                size="14"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
            <Link
              href="about"
              className="flex gap-1 group text-zinc-300 hover:text-white"
            >
              stack
              <ArrowUpRight
                size="14"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
            <Link
              href="about"
              className="flex gap-1 group text-zinc-300 hover:text-white"
            >
              Contact
              <ArrowUpRight
                size="14"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
          </div>
          <div className=" flex gap-8 ">
            <Link href="">
              <FaGithub
                size="26"
                className="transition-all hover:scale-125 text-zinc-300 hover:text-white "
              />
            </Link>
            <Link href="">
              <FaLinkedin
                size="26"
                className="transition-all hover:scale-125 text-zinc-300 hover:text-white"
              />
            </Link>
          </div>
        </div>
        <div className="mt-6 text-center text-sm  text-muted-foreground">
          <h1>© Vickod 2025. Tous droits reservés.</h1>
        </div>
      </div>
    </footer>
  );
}
