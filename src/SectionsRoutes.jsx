import { BrowserRouter } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Welcome from "./sections/welcome/Welcome";
import Presentation from "./sections/presentation/Presentation";
import Realization from "./sections/realization/Realization";
import Skills from "./sections/skills/Skills";
import Contact from "./sections/contact/Contact";


// Set all Sections routes
function SectionsRoutes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Welcome />
            <Presentation />
            <Realization />
            <Skills />
            <Contact />
        </BrowserRouter>
    )
}

export default SectionsRoutes;

