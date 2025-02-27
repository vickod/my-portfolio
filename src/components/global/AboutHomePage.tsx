import Image from "next/image";
import React from "react";
import ImgProfile2 from "../../../public/me.jpeg";
import { PiCertificate } from "react-icons/pi";

export default function AboutHomePage() {
  return (
    <div className="mt-36 w-full">
      <h1 className="text-4xl font-bold mb-2">A prepos</h1>
      <p className="mb-10">Decouvrez quelques details sur moi.</p>

      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-8 w-full ">
        <div className="  rounded-xl  bg-zinc-100 dark:bg-zinc-900 dark:border-none ">
          <div className="grid grid-cols-2 grid-rows-2">
            <div className="flex justify-center items-center border">
              <div className="flex flex-col justify-center items-center gap-2 ">
                <PiCertificate className=" size-20 dark:text-zinc-200" />
                <h2 className="dark:text-zinc-400">Bruxelles, 2023</h2>
                <p className="dark:text-zinc-400">
                  Bachelier en informatique de gestion
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-2 dark:text-zinc-400">
          <h1 className="text-2xl font-semibold dark:text-zinc-200">
            Mon Parcours
          </h1>
          <p className="">
            Je m'appelle <span className="font-bold">Victor</span>, et depuis
            aussi longtemps que je me souvienne, l'informatique a toujours été
            ma passion. Mon parcours dans ce domaine fascinant a commencé par la
            maintenance hardware et software, où j'ai acquis une compréhension
            approfondie des infrastructures techniques. J'ai également travaillé
            dans la maintenance réseau, ce qui m'a permis de développer une
            vision globale et intégrée des systèmes informatiques.
          </p>
          <p>
            En 2023, j'ai obtenu mon diplôme de bachelier en tant qu'analyste et
            développeur fullstack, une étape cruciale qui a solidifié mes
            compétences et renforcé ma détermination à exceller dans ce domaine
            en constante évolution. Aujourd'hui, en tant que développeur web
            fullstack, mon expertise englobe une large gamme de technologies et
            de langages de programmation, me permettant de concevoir et de
            développer des applications web robustes et innovantes.
          </p>
          <p>
            En dehors de mon travail de développeur, je suis également un
            photographe amateur passionné par les paysages. Capturer la beauté
            naturelle à travers l'objectif de mon appareil photo me permet de
            nourrir ma créativité et de trouver l'inspiration dans le monde qui
            m'entoure.
          </p>
        </div>
      </div>
    </div>
  );
}
