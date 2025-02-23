"use client";
import Image from "next/image";
import React, { useState } from "react";
import Proj1 from "../../../public/code.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";

export default function ProjectsHomePage() {
  const [projectItem, setProjectItem] = useState("giftGiver");
  return (
    <div className="mt-36">
      <h1 className="text-4xl font-bold mb-4">Mes Projets</h1>
      <p className="dark:text-zinc-400 mb-20">
        Consultez quelques exemples de mes realisations en developpement web!
      </p>

      <div className="grid grid-cols-2 gap-8">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div>
                <Image src={Proj1} alt="" className="rounded-xl" />
              </div>
            </CarouselItem>
            <CarouselItem></CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2">
            <Button onClick={() => console.log("prev")}>P</Button>
          </CarouselPrevious>
          <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <Button onClick={() => console.log("next")}>N</Button>
          </CarouselNext>
        </Carousel>

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

{
  /* <div className="w-full my-32">
      <div className="">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold dark:text-zinc-300">Projets</h1>
            <p className="dark:text-zinc-400">
              Consultez quelques exemples de mes realisations en developpement
              web!
            </p>
          </div>

          <Carousel>
            <div className="grid grid-cols-2 gap-6 ">
              <div className="w-[460px] h-[250px] relative">
                <CarouselContent>
                  <CarouselItem>
                    <Image
                      src={Proj1}
                      alt=""
                      className="w-full h-[250px] object-cover rounded-xl bg-slate-500"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src={Proj1}
                      alt=""
                      className="w-full  h-[250px] object-cover rounded-xl bg-slate-500"
                    />
                  </CarouselItem>
                </CarouselContent>
                <Button asChild>
                  <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                </Button>
                <Button asChild>
                  <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2" />
                </Button>
              </div>
              <div className="flex flex-col justify-between gap-8">
                <div className="flex flex-col gap-4">
                  <h1 className="text-2xl font-semibold dark:text-zinc-300">
                    Gift Giver
                  </h1>
                  <p>Open Source</p>
                  <p className="dark:text-zinc-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit adipisci accusamus enim id nam et voluptate quisquam
                    architecto, totam, ducimus quaerat nesciunt qui maiores? Ea
                    sint corporis neque commodi facilis. Impedit adipisci
                  </p>

                  <div className=" flex flex-wrap dark:text-zinc-400 gap-4">
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
                </div>
                <p className="dark:text-zinc-500">2025 janvier</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div> */
}
