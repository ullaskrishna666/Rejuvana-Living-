
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo.tsx';

interface NavbarProps {
  onNavigate: (page: 'home' | 'directory', sectionId?: string) => void;
  currentPage: 'home' | 'directory';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: 'home' | 'directory', sectionId?: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(page, sectionId);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 py-4 md:px-12 md:py-6 ${
        isScrolled || currentPage === 'directory' ? 'bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <button onClick={() => handleNavClick('home')} className="flex items-center transition-opacity hover:opacity-80">
          <Logo className="w-10 h-10 md:w-12 md:h-12" />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-14">
          <button 
            onClick={() => handleNavClick('home', 'about')} 
            className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em] hover:text-teal-600 transition-all"
          >
            About
          </button>
          <button 
            onClick={() => handleNavClick('home', 'gallery')} 
            className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em] hover:text-teal-600 transition-all"
          >
            Wellness Guides
          </button>
          <button 
            onClick={() => handleNavClick('directory')} 
            className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all ${
              currentPage === 'directory' ? 'text-teal-600' : 'text-slate-600 hover:text-teal-600'
            }`}
          >
            Social Directory
          </button>
          <button 
            onClick={() => handleNavClick('home', 'join-community')} 
            className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em] hover:text-teal-600 transition-all"
          >
            Contact
          </button>
          <button 
            onClick={() => handleNavClick('home', 'join-community')}
            className="px-10 py-3 bg-teal-600 text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:shadow-xl hover:-translate-y-0.5 transition-all shadow-lg shadow-teal-100"
          >
            Join Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d={isMobileMenuOpen ? "M18 6L6 18M6 6l12 12" : "M4 8h16M4 16h16"} />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-12 flex flex-col gap-8 shadow-2xl"
          >
            <button onClick={() => handleNavClick('home', 'about')} className="text-center text-xs font-bold text-slate-900 uppercase tracking-[0.4em]">About</button>
            <button onClick={() => handleNavClick('home', 'gallery')} className="text-center text-xs font-bold text-slate-900 uppercase tracking-[0.4em]">Wellness Guides</button>
            <button onClick={() => handleNavClick('directory')} className="text-center text-xs font-bold text-teal-600 uppercase tracking-[0.4em]">Social Directory</button>
            <button onClick={() => handleNavClick('home', 'join-community')} className="text-center text-xs font-bold text-slate-900 uppercase tracking-[0.4em]">Contact</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
