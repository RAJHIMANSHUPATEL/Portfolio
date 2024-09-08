import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import TechStack from '../components/TechStack';

function Home() {
    return (
        <div id='home'>
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Contact />
            <Footer/>
        </div>
    )
}

export default Home