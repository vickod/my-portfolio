import { FaReact } from "react-icons/fa";
// import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { VscGithubAlt } from "react-icons/vsc";

const SkillsEffect = () => {
  return (
    <div className="relative w-full flex justify-end ">
      <span className="absolute top-96 -z-40 flex opacity-5 max-md:opacity-0  dark:opacity-10 dark:max-md:opacity-0 ">
        <FaReact className="text-black dark:text-cyan-500 size-20 " />
        <TbBrandNextjs className="text-black dark:text-white size-20 " />
        <TbBrandTypescript className="text-black dark:text-blue-500 size-20 " />
        <FaNodeJs className="text-black dark:text-green-500 size-20 " />
        <VscGithubAlt className="text-black dark:text-white size-20 " />
        <DiMysql className="text-black dark:text-blue-500 size-20 " />
      </span>
    </div>
  );
};

export default SkillsEffect;
