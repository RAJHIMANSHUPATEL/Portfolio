import { useEffect, useState } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import TechStack from '../components/TechStack';
import Greetings from '../components/Greetings';
import Experience from '../components/Experience';

const INTRO_KEY = 'portfolio-intro-seen';
const INTRO_HOLD_MS = 1600;
const INTRO_FADE_MS = 800;

function Home() {
  const [loading, setLoading] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !sessionStorage.getItem(INTRO_KEY);
  });
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!loading) return undefined;

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
      sessionStorage.setItem(INTRO_KEY, '1');
    }, INTRO_HOLD_MS);

    const hideTimer = setTimeout(() => {
      setLoading(false);
    }, INTRO_HOLD_MS + INTRO_FADE_MS);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [loading]);

  return (
    <div>
      {loading && (
        <div className={`greetings ${fadeOut ? 'fade-out' : ''}`}>
          <Greetings />
        </div>
      )}
      <div id="home" className="home">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
