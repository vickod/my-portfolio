import { PiCertificate } from "react-icons/pi";
import { MdOutlineWorkOutline } from "react-icons/md";
// import { BsCamera, BsPersonWorkspace } from "react-icons/bs";
// import { CiCamera } from "react-icons/ci";
import { IoCodeWorking } from "react-icons/io5";

export default function AboutHomePage() {
  return (
    <div id="about" className="pt-10 mt-40 w-full">
      <h1 className="text-4xl font-bold mb-2 dark:text-zinc-200 text-zinc-800">
        À prepos
      </h1>
      <p className="mb-8 font-semibold text-zinc-700 dark:text-zinc-300">
        Découvrez quelques détails sur moi.
      </p>
      <div className=" flex flex-col-reverse lg:grid lg:grid-cols-2 lg:grid-rows-1 gap-8 w-full ">
        <div className="  rounded-xl flex flex-col sm:grid sm:grid-rows-2 gap-4 text-zinc-700 dark:text-zinc-400">
          <div className="sm:grid sm:grid-cols-2 gap-4 flex flex-col">
            <div className="flex flex-col justify-center items-center gap-2 p-2 bg-gray-200 dark:bg-gray-800 dark:border-none rounded-xl">
              <MdOutlineWorkOutline className=" size-16 dark:text-zinc-200" />
              <p className="dark:text-zinc-400 text-sm">
                Technicien en informatique
              </p>
              <p className="dark:text-zinc-400 text-sm">et réseaux</p>
              <p className="dark:text-zinc-400 text-sm ">
                Bruxelles - de 2011 à 2018
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 p-2 bg-gray-200 dark:bg-gray-800 dark:border-none rounded-xl">
              <PiCertificate className=" size-16 dark:text-zinc-200" />
              {/* <p className="dark:text-zinc-400 text-sm">Diplomé autant que</p> */}
              <p className="dark:text-zinc-400 text-sm">
                Bachelier en informatique
              </p>
              <p className="dark:text-zinc-400 text-sm">de gestion</p>
              <p className="dark:text-zinc-400 text-sm">Bruxelles - 2023</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 p-2 bg-gray-200 dark:bg-gray-800 dark:border-none rounded-xl">
            <IoCodeWorking className=" size-16 dark:text-zinc-200" />
            <p className="dark:text-zinc-400 text-sm">Développeur web</p>

            <p className="dark:text-zinc-400 text-sm">Depuis 2023</p>
          </div>
          {/* <div className="flex flex-col justify-center items-center gap-2 p-2 bg-zinc-100 dark:bg-zinc-900 dark:border-none rounded-xl">
            <BsCamera className=" size-16 dark:text-zinc-200" />
            <p className="dark:text-zinc-400 text-sm">Photographe amateur</p>
            <p className="dark:text-zinc-400 text-sm">Depuis 2012</p>
          </div> */}
        </div>

        <div className="flex flex-col mt-2 dark:text-zinc-400 text-zinc-600">
          <h3 className="text-xl font-semibold text-zinc-700 dark:text-zinc-300 ">
            Mon Parcours
          </h3>
          <p className=" ">
            Depuis aussi longtemps que je me souvienne, l’informatique a
            toujours été une véritable passion. Mon aventure dans ce domaine
            fascinant a débuté par la maintenance hardware et software, où j’ai
            acquis une compréhension approfondie des infrastructures techniques.
            Par la suite, j’ai élargi mes compétences à la maintenance réseau,
            ce qui m’a permis de développer une vision globale et intégrée des
            systèmes informatiques.
          </p>
          <h3 className="text-xl font-semibold dark:text-zinc-300 mt-4">
            Éducation
          </h3>
          <p>
            En 2023, j’ai obtenu mon diplôme de bachelier en tant qu’analyste et
            développeur fullstack — une étape clé qui a solidifié mes
            compétences et renforcé ma détermination à exceller dans un domaine
            en constante évolution. Aujourd’hui, en tant que développeur, mon
            expertise couvre un large éventail de technologies et de langages de
            programmation, me permettant de concevoir et de développer des
            applications web robustes, performantes et innovantes.
          </p>
          <h3 className="text-xl font-semibold dark:text-zinc-300 mt-4">
            Développement Web
          </h3>
          <p>
            Depuis 2023, je me perfectionne dans les technologies web modernes
            en développant régulièrement des projets et en suivant de près
            l’évolution constante du secteur. Curieux et passionné, j’apprends
            en continu afin de renforcer mes compétences et de rester à la
            pointe des dernières tendances technologiques.
          </p>
          {/* <h3 className="text-xl font-semibold dark:text-zinc-200 mt-4">
            Centre d'interets
          </h3>
          <p>
            En dehors de mon travail de développeur, je suis également un
            photographe amateur passionné par les paysages.{" "}
            <span className="text-xl">📷🖼</span>
          </p> */}
        </div>
      </div>
    </div>
  );
}
