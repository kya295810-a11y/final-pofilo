import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { useLenis } from './hooks/useLenis';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  useLenis();

  return (
    <div className="min-h-screen bg-background text-primaryText">
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <div className={`transition-opacity ${loaded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
