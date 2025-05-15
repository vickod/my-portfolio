import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandCss3 } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { FaJava } from "react-icons/fa";
import { SiPostgresql, SiShadcnui, SiSpringboot } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { AiOutlineOpenAI } from "react-icons/ai";
import { GrGithub } from "react-icons/gr";
import { FaSquareGit } from "react-icons/fa6";
import { BsDiagram3 } from "react-icons/bs";
import { FcFlowChart } from "react-icons/fc";
import { CgFigma } from "react-icons/cg";
import { FaAward } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiIntellijidea } from "react-icons/si";
import { DiSass } from "react-icons/di";

export default function Technologies() {
  return (
    <div className="pt-10 mt-40" id="techno">
      <h1 className="text-4xl mb-20 font-bold">Technologies</h1>
      <div className="flex flex-col gap-10">
        <div className="">
          <h3 className="text-xl font-semibold">Frontend:</h3>
          <div className="flex gap-3 mt-4 flex-wrap max-lg:justify-start">
            <div className="flex items-center gap-1 dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-300 px-4 rounded-lg">
              <RiReactjsLine className="min-w-[40px] min-h-[40px] text-cyan-500" />
              <p>React</p>
            </div>
            <div className="flex items-center gap-1 dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-300 px-4 rounded-lg">
              <TbBrandTypescript className="min-w-[40px] min-h-[40px] text-blue-600" />
              <p>TypeScript</p>
            </div>
            <div className="flex items-center gap-1 dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-300 px-4 rounded-lg">
              <BiLogoTailwindCss className="min-w-[40px] min-h-[40px] text-cyan-600" />
              <p>Tailwind</p>
            </div>
            <div className="flex items-center gap-1 dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-300 px-4 rounded-lg">
              <SiShadcnui className="min-w-[30px] min-h-[30px] text-black" />
              <p>Shadcn/ui</p>
            </div>
            <div className="flex items-center gap-1 dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-300 px-4 rounded-lg">
              <RiJavascriptLine className="min-w-[40px] min-h-[40px] text-yellow-400" />
              <p>JavaScript</p>
            </div>
            <div className="flex items-center gap-1 dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-300 px-4 rounded-lg">
              <TbBrandHtml5 className="min-w-[40px] min-h-[40px] text-red-700" />
              <p>Html</p>
            </div>
            <div className="flex items-center gap-1 dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-300 px-4 rounded-lg">
              <TbBrandCss3 className="min-w-[40px] min-h-[40px] text-blue-800" />
              <p>CSS</p>
            </div>
            {/* <div className="flex items-center gap-1 dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-300 px-4 rounded-lg">
            <DiSass className="min-w-[40px] min-h-[40px] text-rose-500" />
            <p>Sass</p>
          </div> */}
          </div>
        </div>

        <div className="">
          <h3 className="text-xl font-semibold">Backend:</h3>
          <div className="flex gap-3 mt-4 flex-wrap">
            <div className="flex items-center gap-1 dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-300 px-4 rounded-lg">
              <TbBrandNextjs className="min-w-[40px] min-h-[40px] dark:text-neutral-300 text-neutral-950" />
              <p>Next</p>
            </div>
            <div className="flex items-center gap-1 dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-300 px-4 rounded-lg">
              <FaNodeJs className="min-w-[40px] min-h-[40px] text-green-600" />
              <p>Node</p>
            </div>

            {/* <div className="flex items-center gap-1 dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-300 px-4 rounded-lg">
              <FaJava className="min-w-[40px] min-h-[40px] text-orange-600" />
              <p>Java</p>
            </div> */}
            <div className="flex items-center gap-1 dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-300 px-4 rounded-lg">
              <GrMysql className="min-w-[40px] min-h-[40px] text-blue-800" />
              <p>MySQL</p>
            </div>
            {/* <div className="flex items-center gap-1 dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-300 px-4 rounded-lg">
              <SiPostgresql className="min-w-[40px] min-h-[40px] text-blue-800" />
              <p>PostgreSQL</p>
            </div> */}
          </div>
        </div>

        <div className="">
          <h3 className="text-xl font-semibold">Divers:</h3>
          <div className="flex gap-3 mt-4 flex-wrap">
            <div className="flex items-center gap-1 dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-300 px-4 rounded-lg">
              <BsDiagram3 className="min-w-[40px] min-h-[40px] text-fuchsia-700" />
              <p>UML</p>
            </div>
            <div className="flex items-center gap-1 dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-300 px-4 rounded-lg">
              <GrGithub className="min-w-[40px] min-h-[40px] dark:text-gray-300 text-neutral-800" />
              <p>GitHub</p>
            </div>
            <div className="flex items-center gap-1 dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-300 px-4 rounded-lg">
              <AiOutlineOpenAI className="min-w-[40px] min-h-[40px] text-green-400" />
              <p>Chat GPT</p>
            </div>
            <div className="flex items-center gap-1 dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-300 px-4 rounded-lg">
              <VscVscode className="min-w-[40px] min-h-[40px] text-blue-500" />
              <p>VS code</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
