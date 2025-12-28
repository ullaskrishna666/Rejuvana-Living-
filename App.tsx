
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Gallery from './components/Gallery.tsx';
import Directory from './components/Directory.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import CustomCursor from './components/CustomCursor.tsx';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'directory'>('home');

  // Handle cross-page section navigation
  const handleNavigate = (page: 'home' | 'directory', sectionId?: string) => {
    setCurrentPage(page);
    
    // Scroll handling
    if (sectionId) {
      // Small delay to allow page transition before scrolling
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          const offset = 100;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="relative min-h-screen bg-[#FDFCFB]">
      <CustomCursor />
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {currentPage === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero onExplore={() => handleNavigate('home', 'gallery')} />
              <About />
              <Gallery />
              <div className="bg-slate-50">
                <Contact />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="directory"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Directory />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
