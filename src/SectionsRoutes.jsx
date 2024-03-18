import { BrowserRouter } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Welcome from "./sections/welcome/Welcome";
import Presentation from "./sections/presentation/Presentation";
import Realization from "./sections/realization/Realization";
import Skills from "./sections/skills/Skills";
import Contact from "./sections/contact/Contact";
import Footer from "./components/Footer/Footer";


// Set all Sections routes
function SectionsRoutes() {
    return (
        <BrowserRouter>
            <Welcome />
            <Navbar />
            <Presentation />
            <Realization />
            <Skills />
            <Contact />
            <Footer />
        </BrowserRouter>
    )
}

export default SectionsRoutes;

