import { useEffect, useState } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import TechStack from '../components/TechStack';
import Greetings from '../components/Greetings';


function Home() {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true); 
            setTimeout(() => {
                setLoading(false);
                setFadeOut(false); 
            }, 1000); 
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {
                loading && (
                    <div className={`greetings ${fadeOut ? 'fade-out' : ''}`}>
                        <Greetings />
                    </div>
                )
            }
                <div id='home' className="home">
                        <Hero />
                        <About />
                        <TechStack />
                        <Projects />
                        <Contact />
                        <Footer />
                    </div>
            
        </div>
    );
}

export default Home;
