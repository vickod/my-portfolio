"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
// import { ExternalLink } from "lucide-react";
// import Link from "next/link";
import { projects } from "@/data/projects";
// import { FaEye } from "react-icons/fa";
// import { LiaEye } from "react-icons/lia";
import { IoEyeOutline } from "react-icons/io5";
// import { FaGit } from "react-icons/fa";
import { IoIosGitBranch } from "react-icons/io";
// import { FiGithub } from "react-icons/fi";

export default function ProjectsHomePage() {
  return (
    <div className="pt-10 mt-40" id="projects">
      <h1 className="text-4xl font-bold mb-4 dark:text-zinc-300 text-zinc-800">
        Mes Projets Récents
      </h1>
      <p className="text-zinc-700 dark:text-zinc-300 md:mb-20 max-md:mb-12 ">
        Découvrez quelques exemples de mes réalisations en développement web!
      </p>

      <div className="md:grid md:grid-cols-3 max-md:flex max-md:flex-col md:gap-8 max-md:gap-6 ">
        {projects.map((project) => (
          <div key={project.id}>
            <div className="relative overflow-hidden w-full h-fit  group  border">
              <Image
                src={project.image}
                alt="project-img"
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
                    <a
                      target="_blank"
                      title="Vers le site"
                      href={project.links.site}
                      className="text-zinc-200 hover:text-white text-lg font-semibold  flex gap-1"
                    >
                      <p className="text-sm flex gap-2 items-center">
                        {" "}
                        <IoEyeOutline className="size-8" />
                      </p>
                    </a>
                  </span>
                )}

                {project.links.repo && project.links.site && (
                  <span className="w-[1px] h-full border-l border-white"></span>
                )}
                {project.links?.repo && (
                  <span className="size-fit ">
                    <a
                      target="_blank"
                      title="Vers le dépot"
                      href={project.links.repo}
                      className="text-zinc-200 hover:text-white text-lg font-semibold  flex gap-1"
                    >
                      <p className="text-sm flex gap-2 items-center">
                        {" "}
                        <IoIosGitBranch className="size-8" />
                      </p>
                    </a>
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <h1 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-300">
                {project.title}
              </h1>
              <p className="dark:text-zinc-400 text-zinc-600">
                {project.description}
              </p>
              <div className=" flex flex-wrap text-zinc-700 dark:text-zinc-300 gap-4 mb-8">
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
