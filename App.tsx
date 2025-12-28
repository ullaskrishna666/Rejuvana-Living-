
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Directory from './components/Directory';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'directory'>('home');

  // Handle hash changes for simple routing
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#directory') {
        setCurrentPage('directory');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FDFCFB]">
      <CustomCursor />
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main>
        <AnimatePresence mode="wait">
          {currentPage === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero onExplore={() => window.location.hash = '#directory'} />
              <About />
              <Gallery />
              
              <div className="w-full overflow-hidden leading-none bg-white">
                <svg className="relative block w-full h-16 md:h-32 fill-slate-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
              </div>

              <div className="bg-slate-50">
                <Contact />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="directory"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Directory />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
