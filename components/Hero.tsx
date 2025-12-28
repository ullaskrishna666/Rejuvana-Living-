
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_PHRASES } from '../constants.tsx';

interface HeroProps {
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % HERO_PHRASES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToJoin = () => {
    const element = document.getElementById('join-community');
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* --- Dynamic Background System --- */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Blob 1: Teal (Top Right) */}
        <motion.div 
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -right-[5%] w-[60vw] h-[60vw] bg-teal-100/40 rounded-full blur-[120px]" 
        />
        
        {/* Blob 2: Emerald (Bottom Left) */}
        <motion.div 
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-[20%] -left-[10%] w-[70vw] h-[70vw] bg-emerald-100/30 rounded-full blur-[140px]" 
        />

        {/* Blob 3: Soft Indigo (Top Left) */}
        <motion.div 
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[10%] left-[-5%] w-[45vw] h-[45vw] bg-indigo-50/50 rounded-full blur-[100px]" 
        />

        {/* Blob 4: Soft Amber (Bottom Right) */}
        <motion.div 
          animate={{
            x: [0, -30, 0],
            y: [0, -60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[5%] right-[5%] w-[40vw] h-[40vw] bg-amber-50/60 rounded-full blur-[110px]" 
        />
      </div>

      {/* --- Content Area --- */}
      <div className="container mx-auto px-6 md:px-12 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="h-32 md:h-48 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentPhraseIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-slate-900 leading-[1.1] tracking-tight"
              >
                {HERO_PHRASES[currentPhraseIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-12 leading-relaxed"
        >
          Rejuvana Living is your companion in the pursuit of a vital, long, and balanced life. We combine ancient wisdom with modern science to help you age better, every day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center"
        >
          <button 
            onClick={scrollToJoin}
            className="group relative px-16 py-5 bg-teal-600 text-white rounded-full text-lg font-bold shadow-2xl shadow-teal-100 hover:bg-teal-700 transition-all active:scale-95 overflow-hidden"
          >
            <span className="relative z-10">Join the Community</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </button>
        </motion.div>
      </div>

      {/* Decorative Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 opacity-40">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
