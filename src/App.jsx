import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Custom cursor follower
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div className="relative min-h-screen bg-dark-900 text-gray-100 selection:bg-cyan-500/40 overflow-x-hidden">
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 z-[60] origin-left"
      />

      {/* Cursor glow (desktop only) */}
      <div
        className="pointer-events-none fixed w-[400px] h-[400px] rounded-full bg-gradient-radial from-indigo-500/20 via-cyan-500/10 to-transparent blur-3xl z-0 -translate-x-1/2 -translate-y-1/2 hidden lg:block transition-opacity"
        style={{ left: cursor.x, top: cursor.y }}
      />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
