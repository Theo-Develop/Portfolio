import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



function Footer() {
    return (
        <section id="footer" className="footer">
            <div className="footer-container">
                <ul>
                    <li><a href="https://github.com/Theo-Develop" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareGithub} /></a></li>
                    <li><a href="email:theo.dev.lop@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                    <li><FontAwesomeIcon icon={faLinkedin} /></li>
                </ul>
                <p>
                    © 2024 Théo DRESSY, Tous droits réservés.
                </p>
            </div>
        </section >
    )
}

export default Footer;