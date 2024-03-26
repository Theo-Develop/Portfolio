import Navbar from "./components/Navbar/Navbar";
import Welcome from "./sections/welcome/Welcome";
import Presentation from "./sections/presentation/Presentation";
import Realization from "./sections/realization/Realization";
import Skills from "./sections/skills/Skills";
import Contact from "./sections/contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollUp from "./components/ScrollUp/ScrollUp";


// Set all Sections routes
function HomePage() {
    return (
        <>
            <Welcome />
            <Navbar />
            <Presentation />
            <Realization />
            <Skills />
            <Contact />
            <Footer />
            <ScrollUp />
        </>
    )
}

export default HomePage;

