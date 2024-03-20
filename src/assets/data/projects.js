import Booki1 from "../images/booki-mockup.webp";
import Booki2 from "../images/Booki-screenshot.webp";
import Sophie_Bluel1 from "../images/Sophie-bluel-Mockup.webp";
import Sophie_Bluel2 from "../images/Sophie-Bluel-screenshot.webp";
import Nina_Carducci1 from "../images/nina-mockup.webp";
import Nina_Carducci2 from "../images/Nina-Carducci-screenshot.webp";
import Kasa1 from "../images/kasa-mockup.webp";
import Kasa2 from "../images/Kasa-screenshot.webp";
import grimoire1 from "../images/grimoire-mockup.webp";
import grimoire2 from "../images/Mon-Vieux-Grimoire-screenshot.webp";




const projectsData = [
    {
        id: "1",
        title: "Booki, site d'agence immobilière",
        pictureLeft: Booki1,
        pictureRight: Booki2,
        listSKills: ["Implémenter une interface responsive avec HTML et CSS", "Intégrer du contenu conformément à une maquette avec HTML et CSS", "Etudier et découper une maquette", "Versionner son projet avec Git et Github", "Vérifier la qualité de son code à l'aide de validateur tels que le W3C", "Travailler en collaboration avec un UI Designer", "Installer un environnement de développement front-end"],
        resume: "Pour ce premier projet de formation, le but était de créer une page web statique et responsive en partant d'une maquette Figma et des photos fournis.",
        siteUrl: "",
        codeUrl: "https://github.com/Theo-Develop/OCProject2",
    },
    {
        id: "2",
        title: "Sophie Bluel, portefolio d’une architecte",
        pictureLeft: Sophie_Bluel1,
        pictureRight: Sophie_Bluel2,
        listSKills: ["Récupérer les données utilisateurs dans le JavaScript via des formulaires", "Manipuler les éléments du DOM avec JavaScript", "Développer du front-end sur un back-end déjà existant", "Gérer les événements utilisateurs avec JavaScript", "Accomplir des tâches selon la méthode Agile", "Communiquer avec une API REST"],
        resume: "Dans ce second projet de formation, nous sommes initiés à JavaScript. En partant d'une page statique, nous devons permettre à la cliente de pouvoir se connecter, accéder à ses projets via une modale d'où elle pourra les gérer.",
        siteUrl: "",
        codeUrl: "https://github.com/Theo-Develop/OCProject3",
    },
    {
        id: "3",
        title: "Nina Carducci, site de photographe",
        pictureLeft: Nina_Carducci1,
        pictureRight: Nina_Carducci2,
        listSKills: ["Optimiser les performances d’un site web", "Débugger un site web grâce aux Chrome DevTools", "Rédiger un cahier de recette pour tester un site", "Améliorer le référencement d'un site (SEO)", "Améliorer l'accessibilité d'un site", "Capacité à expliquer les modifications de manière claire et compréhensible", "Livrer un rapport d'intervention"],
        resume: "Peu de code à proprement parler pour ce projet, mais une découverte de beaucoup de notions importantes. Ce projet s'organise autour de 2 axes, le débug et l'optimisation. En partant d'un audit préalable réalisé sur le site mis à disposition pour le projet, nous devions corriger un bug de navigation dans la modale, un bug de sélection de filtre et optimiser le site pour améliorer les notes de performances, accessibilité et référencement.",
        siteUrl: "",
        codeUrl: "https://github.com/Theo-Develop/OCProject5",
    },
    {
        id: "4",
        title: "Kasa, site de location immobilière",
        pictureLeft: Kasa1,
        pictureRight: Kasa2,
        listSKills: ["Configurer la navigation entre les pages de l'application avec React Router", "Initialiser une application avec Create React App", "Développer des éléments de l'interface d'un site web grâce à des composants React", "Développer l'ensemble d'une application React responsive en suivant une maquette", "Mettre en œuvre des animations CSS", "Développer une interface web avec Sass"],
        resume: "Découverte de React avec cet avant dernier projet de la formation. Avec le code du back-end, les codings guidelines du projet et des logements regroupés dans un fichier JSON, nous devions coder l'application en React pour obtenir un résultat fonctionnel, responsive et conforme à la maquette fournit.",
        siteUrl: "",
        codeUrl: "https://github.com/Theo-Develop/OCProject6",
    },
    {
        id: "5",
        title: "Mon vieux grimoire, site de notation de livres",
        pictureLeft: grimoire1,
        pictureRight: grimoire2,
        listSKills: ["Créer un serveur avec Node.js et Express", "Implémenter un modèle logique de données conformément à la réglementation", "Mettre en œuvre des opérations CRUD de manière sécurisée", "Gérer des données d'une base de données MongoDB avec Node, Express et Mongoose", "Stocker des données de manière sécurisée", "Respecter des normes de Green Code", "Travailler en collaboration avec un développeur front-end"],
        resume: "Initiation au back-end pour ce dernier projet du parcours OpenClassrooms ! Après avoir récupéré le front-end codé en React, les spécifications fonctionnelles, la maquette et les spécifications techniques de l'API, notre rôle était de développer la partie back-end de l'application qui devra permettre de s'enregistrer sur le site, pouvoir poster un livre, le modifier où le supprimer, mais également d'accéder aux livres postés par d'autres utilisateurs et pouvoir les noter.",
        siteUrl: "",
        codeUrl: "https://github.com/Theo-Develop/OCProject7",
    },
];

export default projectsData;
