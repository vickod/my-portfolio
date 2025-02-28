"use client";
import Image from "next/image";
import Proj1 from "../../../public/code.jpg";
import { Badge } from "@/components/ui/badge";

export default function ProjectsHomePage() {
  return (
    <div className="pt-10 mt-40">
      <h1 className="text-4xl font-bold mb-4">Mes Projets recents</h1>
      <p className="dark:text-zinc-400 md:mb-20 max-md:mb-12">
        Consultez quelques exemples de mes realisations en developpement web!
      </p>

      <div className="md:grid md:grid-cols-2 max-md:flex max-md:flex-col md:gap-8 max-md:gap-6">
        <div>
          <Image src={Proj1} alt="" className="rounded-xl" />
        </div>

        <div className="flex flex-col gap-4">
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
        </div>
      </div>
    </div>
  );
}
