import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretUp } from '@fortawesome/free-solid-svg-icons';

function ScrollUp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            const welcomeSection = document.querySelector('.welcome');
            const isInWelcomeSection = welcomeSection && welcomeSection.getBoundingClientRect().top >= 0;
            setIsVisible(!isInWelcomeSection);
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Fonction pour revenir en haut de la page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <section id="scrollUp" className={`scrollUp ${isVisible ? '' : 'rotate'}`} onClick={scrollToTop}>
            <FontAwesomeIcon icon={faSquareCaretUp} />
        </section>
    );
}

export default ScrollUp;