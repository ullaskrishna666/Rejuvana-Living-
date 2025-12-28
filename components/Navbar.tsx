
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

interface NavbarProps {
  onNavigate: (page: 'home' | 'directory') => void;
  currentPage: 'home' | 'directory';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: 'home' | 'directory', sectionId?: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    
    if (page === 'home' && sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          const offset = 100;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
      window.location.hash = sectionId;
    } else if (page === 'directory') {
      window.location.hash = 'directory';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentPage === 'directory' ? 'bg-white/95 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <button onClick={() => handleNavClick('home')} className="flex items-center group transition-transform active:scale-95">
          <Logo className="w-16 h-16 md:w-20 md:h-20" />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <button onClick={() => handleNavClick('home', 'about')} className="text-sm font-bold text-slate-600 hover:text-teal-600 transition-colors uppercase tracking-widest">About</button>
          <button onClick={() => handleNavClick('home', 'gallery')} className="text-sm font-bold text-slate-600 hover:text-teal-600 transition-colors uppercase tracking-widest">Wellness Guides</button>
          <button 
            onClick={() => handleNavClick('directory')} 
            className={`text-sm font-bold transition-colors uppercase tracking-widest ${currentPage === 'directory' ? 'text-teal-600' : 'text-slate-600 hover:text-teal-600'}`}
          >
            Social Directory
          </button>
          <button onClick={() => handleNavClick('home', 'join-community')} className="text-sm font-bold text-slate-600 hover:text-teal-600 transition-colors uppercase tracking-widest">Contact</button>
          
          <button 
            onClick={() => handleNavClick('home', 'join-community')}
            className="px-8 py-3 bg-teal-600 text-white rounded-full text-sm font-bold hover:bg-teal-700 transition-all active:scale-95 shadow-lg shadow-teal-100"
          >
            Join Community
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              <button onClick={() => handleNavClick('home', 'about')} className="text-left text-sm font-bold text-slate-600 uppercase tracking-widest">About</button>
              <button onClick={() => handleNavClick('home', 'gallery')} className="text-left text-sm font-bold text-slate-600 uppercase tracking-widest">Wellness Guides</button>
              <button onClick={() => handleNavClick('directory')} className="text-left text-sm font-bold text-slate-600 uppercase tracking-widest">Social Directory</button>
              <button onClick={() => handleNavClick('home', 'join-community')} className="text-left text-sm font-bold text-slate-600 uppercase tracking-widest">Contact</button>
              <button 
                onClick={() => handleNavClick('home', 'join-community')}
                className="w-full py-4 bg-teal-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-teal-100"
              >
                Join Community
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Fix: Added missing default export to satisfy App.tsx import
export default Navbar;
