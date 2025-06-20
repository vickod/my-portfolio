import React from "react";
// import { Button } from "../ui/button";
// import { Download } from "lucide-react";
// import { DotPatternLinearGradient } from "./bg/DotPatternLinearGradient";
// import { GridPatternDashed } from "./bg/GridPatternDashed";
// import { GridPatternLinearGradient } from "./bg/GridPatternLinearGradient";
// import { AnimatedGridPatternDemo } from "./bg/AnimatedGridPatternDemo";

export default function Hero() {
  return (
    <div className="w-full  mx-auto mt-20 ">
      {/* <GridPatternDashed /> */}
      {/* <GridPatternLinearGradient /> */}
      <div className=" flex flex-col gap-5 dark:text-zinc-300 text-zinc-800">
        <h1 className=" text-4xl sm:text-5xl font-bold ">
          Développeur Web Fullstack{" "}
        </h1>

        <div className=" text-lg flex flex-col gap-8 md:w-[600px] mt-8 text-zinc-700 dark:text-zinc-300">
          <p>
            <span className="text-4xl max-sm:text-xl">👋</span> Bienvenue dans
            mon univers numérique ! Je suis
            <span className="font-bold text-blue-600"> Victor</span>, passionné
            par les technologies et avide de relever de nouveaux défis.
          </p>
          <div className="mt-8">
            <div className=" max-w-[400px] h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-8"></div>

            {/* <div className="relative max-w-[400px] h-[1px] bg-gradient-to-r from-transparent via-blue-500 via-red-500 via-purple-500 to-transparent mb-8 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full animate-[moveLight_2s_linear_infinite] bg-gradient-to-r from-transparent via-white to-transparent"></div>
            </div> */}

            <p className="">
              <span className="mr-3">
                Disponible pour des missions en
                <span className="font-semibold"> freelance</span>.
              </span>

              {/* <span className="">
                <Button
                  variant="link"
                  style={{ textDecoration: "none" }}
                  className="group text-blue-600 font-bold text-lg p-0 transition-all duration-300 hover:text-blue-700 hover:scale-105 hover:rotate-2 "
                >
                  mon CV
                  <Download className="opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </Button>
              </span> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
