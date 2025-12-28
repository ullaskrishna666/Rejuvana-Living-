
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Gallery from './components/Gallery.tsx';
import Directory from './components/Directory.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import PrivacyPolicy from './components/PrivacyPolicy.tsx';
import TermsOfService from './components/TermsOfService.tsx';
import CookiePolicy from './components/CookiePolicy.tsx';
import CustomCursor from './components/CustomCursor.tsx';
import { motion, AnimatePresence } from 'framer-motion';
import { Page } from './types.ts';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Handle cross-page section navigation
  const handleNavigate = (page: Page, sectionId?: string) => {
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

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
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
        );
      case 'directory':
        return (
          <motion.div
            key="directory"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Directory />
          </motion.div>
        );
      case 'privacy':
        return <PrivacyPolicy key="privacy" />;
      case 'terms':
        return <TermsOfService key="terms" />;
      case 'cookies':
        return <CookiePolicy key="cookies" />;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FDFCFB]">
      <CustomCursor />
      {/* Navbar now accepts the shared Page type, fixing previous type mismatch on subpages */}
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;