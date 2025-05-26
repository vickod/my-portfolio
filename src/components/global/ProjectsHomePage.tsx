"use client";
import Image from "next/image";
import Proj1 from "../../../public/p4.png";
import Proj2 from "../../../public/code.jpg";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ProjectsHomePage() {
  return (
    <div className="pt-10 mt-40" id="projects">
      <h1 className="text-4xl font-bold mb-4">Mes Projets recents</h1>
      <p className="dark:text-zinc-400 md:mb-20 max-md:mb-12">
        Consultez quelques exemples de mes realisations en developpement web!
      </p>

      <div className="md:grid md:grid-cols-3 max-md:flex max-md:flex-col md:gap-8 max-md:gap-6 border">
        <div>
          <div className="relative overflow-hidden w-full h-fit  group">
            <Image
              src={Proj1}
              alt=""
              className=" w-full object-cover transform transition-transform duration-500 ease-in-out 
               hover:scale-110 hover:brightness-75"
            />

            {/* <div
            className="
              absolute inset-0 flex items-center justify-center
              opacity-0 group-hover:opacity-100
              transition-opacity duration-500
              bg-black/30
    "
          >
            <Link
              href="#"
              className="text-white text-lg font-semibold px-4 py-2 flex gap-1"
            >
              Voir projet
              <ExternalLink />
            </Link>
          </div> */}
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <h1 className="text-2xl font-semibold dark:text-zinc-300">
              Frinvoice
            </h1>
            <p className="dark:text-zinc-400">
              Application web open-source développée avec Next.js, permettant
              aux utilisateurs de créer facilement des factures personnalisées.
              L’interface intuitive offre la possibilité d’imprimer ou de
              télécharger les factures au format PDF
            </p>
            <div className=" flex flex-wrap dark:text-zinc-400 gap-4 mb-8">
              <Badge variant="outline" className="py-4 px-6">
                Next JS
              </Badge>
              <Badge variant="outline" className="py-4 px-6">
                React JS
              </Badge>
              <Badge variant="outline" className="py-4 px-6">
                TypeScript JS
              </Badge>
              <Badge variant="outline" className="py-4 px-6">
                Tailwind css
              </Badge>
            </div>
            {/* <p className="dark:text-zinc-500">2025 janvier</p> */}
          </div>
        </div>

        {/* <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold dark:text-zinc-300">
            Gift Giver
          </h1>
          <p>Open Source</p>
          <p className="dark:text-zinc-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            adipisci accusamus enim id nam et voluptate quisquam architecto,
            totam, ducimus quaerat nesciunt qui maiores? Ea sint corporis neque
            commodi facilis. Impedit adipisci
          </p>
          <div className=" flex flex-wrap dark:text-zinc-400 gap-4 mb-8">
            <Badge variant="outline" className="py-4 px-6">
              Next JS
            </Badge>
            <Badge variant="outline" className="py-4 px-6">
              React JS
            </Badge>
            <Badge variant="outline" className="py-4 px-6">
              TypeScript JS
            </Badge>
            <Badge variant="outline" className="py-4 px-6">
              Tailwind css
            </Badge>
          </div>
          <p className="dark:text-zinc-500">2025 janvier</p>
        </div> */}
      </div>
    </div>
  );
}
