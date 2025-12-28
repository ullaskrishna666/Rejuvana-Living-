
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import Logo from './Logo.tsx';
import { Page } from '../types.ts';

interface NavbarProps {
  onNavigate: (page: Page, sectionId?: string) => void;
  currentPage: Page;
}

// Ensure NAV_ITEMS uses the shared Page type for type safety
const NAV_ITEMS: { id: string; label: string; page: Page; sectionId?: string }[] = [
  { id: 'about', label: 'About', page: 'home' },
  { id: 'gallery', label: 'Wellness Guides', page: 'home' },
  { id: 'directory', label: 'Social Directory', page: 'directory' },
  { id: 'contact', label: 'Contact', page: 'home', sectionId: 'join-community' },
];

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  
  // Mouse tracking for the aurora glow effect
  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
    }
  };

  const handleNavClick = (page: Page, sectionId?: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(page, sectionId);
  };

  // Improved background logic: Solid for subpages or when scrolled on home
  const shouldBeSolid = isScrolled || currentPage !== 'home';

  return (
    <nav 
      ref={navRef}
      onMouseMove={handleMouseMove}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 py-4 md:px-12 md:py-5 overflow-hidden ${
        shouldBeSolid 
          ? 'bg-white/80 backdrop-blur-2xl border-b border-teal-50 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      {/* Aurora Glow Effect */}
      <motion.div 
        className="absolute top-0 h-full w-64 bg-teal-400/10 blur-[100px] pointer-events-none -z-10"
        style={{ x: smoothMouseX, translateX: '-50%' }}
      />

      <div className="max-w-[1440px] mx-auto flex items-center justify-between relative z-10">
        <motion.button 
          onClick={() => handleNavClick('home')} 
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center group"
        >
          <Logo className="w-10 h-10 md:w-12 md:h-12 transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]" />
        </motion.button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 lg:gap-6">
          <div className="flex items-center bg-slate-100/30 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/20">
            {NAV_ITEMS.map((item) => {
              const isActive = (item.id === 'directory' && currentPage === 'directory') || 
                               (item.id !== 'directory' && currentPage === 'home' && hoveredId === item.id);
              
              return (
                <button
                  key={item.id}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => handleNavClick(item.page, item.sectionId || item.id)}
                  className={`relative px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.25em] transition-colors duration-300 z-10 ${
                    isActive || hoveredId === item.id 
                      ? 'text-teal-700' 
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <span className="relative z-20">{item.label}</span>
                  {hoveredId === item.id && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white shadow-sm rounded-full -z-10 border border-teal-50"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                  {item.id === 'directory' && currentPage === 'directory' && !hoveredId && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-teal-50 rounded-full -z-10 border border-teal-100"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="h-8 w-px bg-slate-200/50 mx-2" />

          <motion.button 
            onClick={() => handleNavClick('home', 'join-community')}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(20 184 166 / 0.2)" }}
            whileTap={{ scale: 0.98 }}
            className="relative px-10 py-3 bg-teal-600 text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] overflow-hidden group shadow-lg shadow-teal-100/50"
          >
            <span className="relative z-10">Join Now</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <motion.path 
              animate={isMobileMenuOpen ? { d: "M18 6L6 18" } : { d: "M4 8h16" }}
              transition={{ duration: 0.3 }}
            />
            <motion.path 
              animate={isMobileMenuOpen ? { d: "M6 6l12 12" } : { d: "M4 16h16" }}
              transition={{ duration: 0.3 }}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-3xl border-t border-teal-50 p-8 flex flex-col gap-6 shadow-2xl overflow-hidden"
          >
            {NAV_ITEMS.map((item, idx) => (
              <motion.button 
                key={item.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => handleNavClick(item.page, item.sectionId || item.id)} 
                className="text-left text-xs font-bold text-slate-900 uppercase tracking-[0.4em] hover:text-teal-600 transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => handleNavClick('home', 'join-community')}
              className="mt-4 py-4 bg-teal-600 text-white rounded-2xl font-bold uppercase text-[10px] tracking-widest"
            >
              Join Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;