import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const sections = ["#acceuil", "#présentation", "#réalisation", "#compétences", "#contact"];
        const sectionElements = sections.map(section => document.querySelector(section));


        const handleScroll = () => {
            let currentSection = "";
            sectionElements.forEach((section, i) => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const distanceFromTop = window.scrollY + 75; // Ajouter 75 pixels à la position de défilement actuelle

                    if (distanceFromTop >= sectionTop) {
                        currentSection = sections[i];
                    }
                }
            });

            // Mise à jour de l'URL en scrollant
            if (currentSection !== activeSection) {
                window.history.pushState({}, "", currentSection);
                setActiveSection(currentSection);
            }

        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Vérification initiale

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [activeSection]);

    const isActive = (hash) => {
        return activeSection === hash;
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img src="./../src/assets/icons/logo/logo48x48.ico" alt="Logo" />
            </div>
            <ul>
                <li className={isActive("#acceuil") ? "active" : ""}>
                    <Link to="#acceuil" className="Link">
                        Acceuil
                    </Link>
                </li>
                <li className={isActive("#présentation") ? "active" : ""}>
                    <Link to="#présentation" className="Link">
                        Présentation
                    </Link>
                </li>
                <li className={isActive("#réalisation") ? "active" : ""}>
                    <Link to="#réalisation" className="Link">
                        Réalisations
                    </Link>
                </li>
                <li className={isActive("#compétences") ? "active" : ""}>
                    <Link to="#compétences" className="Link">
                        Compétences
                    </Link>
                </li>
                <li className={isActive("#contact") ? "active" : ""}>
                    <Link to="#contact" className="Link">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
