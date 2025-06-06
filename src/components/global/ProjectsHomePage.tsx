"use client";
import Image from "next/image";
import Proj1 from "../../../public/p4.png";
import Proj2 from "../../../public/p5.png";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsHomePage() {
  return (
    <div className="pt-10 mt-40" id="projects">
      <h1 className="text-4xl font-bold mb-4">Mes Projets recents</h1>
      <p className="dark:text-zinc-400 md:mb-20 max-md:mb-12">
        Consultez quelques exemples de mes realisations en developpement web!
      </p>

      <div className="md:grid md:grid-cols-3 max-md:flex max-md:flex-col md:gap-8 max-md:gap-6 ">
        {projects.map((project) => (
          <div key={project.id}>
            <div className="relative overflow-hidden w-full h-fit  group border">
              <Image
                src={project.image}
                alt=""
                className=" w-full object-cover transform transition-transform duration-500 ease-in-out 
               hover:scale-110  h-[200px]"
              />

              <div
                className="
              absolute inset-0 flex items-center justify-center gap-4
              opacity-0 group-hover:opacity-100
              transition-opacity duration-700
              bg-black/60
    "
              >
                {project.links?.site && (
                  <span className="size-fit ">
                    <Link
                      href="#"
                      className="text-zinc-200 hover:text-white text-lg font-semibold  flex gap-1"
                    >
                      <p className="text-sm flex gap-2 items-center">
                        {" "}
                        Visiter le site <ExternalLink className="size-4" />
                      </p>
                    </Link>
                  </span>
                )}

                {project.links.repo && project.links.site && (
                  <span className="w-[1px] h-full border-l border-white"></span>
                )}
                {project.links?.repo && (
                  <span className="size-fit ">
                    <Link
                      href="#"
                      className="text-zinc-200 hover:text-white text-lg font-semibold  flex gap-1"
                    >
                      <p className="text-sm flex gap-2 items-center">
                        {" "}
                        Visiter le depot <ExternalLink className="size-4" />
                      </p>
                    </Link>
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <h1 className="text-2xl font-semibold dark:text-zinc-300">
                {project.title}
              </h1>
              <p className="dark:text-zinc-400">{project.description}</p>
              <div className=" flex flex-wrap dark:text-zinc-400 gap-4 mb-8">
                {project.stack.map((techno, index) => (
                  <Badge key={index} variant="outline" className="py-4 px-6">
                    {techno}
                  </Badge>
                ))}
              </div>
              {/* <p className="dark:text-zinc-500">2025 janvier</p> */}
            </div>
          </div>
        ))}
        {/* <div className="flex justify-center items-center">
          <Link className="flex" href="/">
            Voir plus <ExternalLink className="ml-2" />
          </Link>
        </div> */}
      </div>
    </div>
  );
}
