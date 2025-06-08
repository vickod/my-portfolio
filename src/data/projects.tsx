import img1 from "../../public/project1.png";
import img2 from "../../public/project2.png";
export const projects = [
  {
    id: 1,
    image: img1,
    title: "Frinvoice",
    description:
      "Application web open-source développée avec Next.js, permettant aux utilisateurs de créer facilement des factures personnalisées. L’interface intuitive offre la possibilité d’imprimer ou de télécharger les factures au format PDF",
    stack: ["Next JS", "React JS", "TypeScript JS", "Tailwind css"],
    links: {
      site: "https://frinvoice.vercel.app/",
      repo: "https://github.com/vickod/frinvoice",
    },
  },
  {
    id: 2,
    image: img2,
    title: "Vbijouterie",
    description:
      "Développement fullstack d’une plateforme e-commerce dédiée à la vente de bijoux. Le site intègre de nombreuses fonctionnalités tel que le filtrage des articles, gestion des produits et des utilisateurs, système sécurisé (JWT, hashage...), intégration de paiement, réductions, et plus encore.",
    stack: ["React JS", "EXPRESS", "MySQL", "Bootstrap"],
    links: {
      site: "",
      repo: "https://github.com/vickod/tfe-bijouterie-app-react",
    },
  },
];
