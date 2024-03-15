import { HashLink as Link } from "react-router-hash-link";


function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="#welcome" className="Link">
                        Acceuil
                    </Link>
                </li>
                <li>
                    <Link to="#presentation" className="Link">
                        Présentation
                    </Link>
                </li>
                <li>
                    <Link to="#realization" className="Link">
                        Réalisations
                    </Link>
                </li>
                <li>
                    <Link to="#skills" className="Link">
                        Compétences
                    </Link>
                </li>
                <li>
                    <Link to="#contact" className="Link">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;