import { HashLink as Link } from "react-router-hash-link";


function Navbar() {
    return (
        <nav>
            <div className="logo">
                Logo
            </div>
            <ul>
                <li>
                    <Link to="#acceuil" className="Link">
                        Acceuil
                    </Link>
                </li>
                <li>
                    <Link to="#présentation" className="Link">
                        Présentation
                    </Link>
                </li>
                <li>
                    <Link to="#réalisation" className="Link">
                        Réalisations
                    </Link>
                </li>
                <li>
                    <Link to="#compétences" className="Link">
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