import img1 from "../../public/p4.png";
import img2 from "../../public/p5.png";
export const projects = [
  {
    id: 1,
    image: img1,
    title: "Frinvoice",
    description:
      "Application web open-source développée avec Next.js, permettant aux utilisateurs de créer facilement des factures personnalisées. L’interface intuitive offre la possibilité d’imprimer ou de télécharger les factures au format PDF",
    stack: ["Next JS", "React JS", "TypeScript JS", "Tailwind css"],
    links: { site: "/", repo: "/" },
  },
  {
    id: 2,
    image: img2,
    title: "Vbijouterie",
    description:
      "Application web open-source développée avec Next.js, permettant aux utilisateurs de créer facilement des factures personnalisées. L’interface intuitive offre la possibilité d’imprimer ou de télécharger les factures au format PDF",
    stack: ["React JS", "EXPRESS", "MySQL", "Bootstrap"],
    links: { site: "", repo: "/" },
  },
];
