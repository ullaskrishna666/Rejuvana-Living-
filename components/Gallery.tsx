
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WELLNESS_CONTENT } from '../constants.tsx';
import { WellnessCard } from '../types.ts';

const Gallery: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<WellnessCard | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const handleReadMore = (card: WellnessCard) => {
    setIsLoading(true);
    // Simulate loading data and resources
    setTimeout(() => {
      setSelectedCard(card);
      setIsLoading(false);
    }, 600); // Slightly faster for snappier UI
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'; // Fallback
  };

  const displayedContent = showAll ? WELLNESS_CONTENT : WELLNESS_CONTENT.slice(0, 6);

  return (
    <section id="gallery" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6"
          >
            Explore the Rejuvana Guides
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600"
          >
            Curated content and tools designed to optimize every pillar of your health span.
          </motion.p>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedContent.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: showAll ? 0 : index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden bg-slate-200">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    onError={handleImageError}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                    {item.description}
                  </p>
                  <button 
                    onClick={() => handleReadMore(item)}
                    className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:gap-4 transition-all"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <button 
            onClick={() => setShowAll(!showAll)}
            className="px-12 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-lg hover:shadow-xl"
          >
            {showAll ? 'Show Fewer Resources' : 'View All Resources'}
          </button>
        </motion.div>
      </div>

      {/* Global Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white/60 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="font-bold text-teal-800 tracking-wide">Fetching data...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detailed Content Modal */}
      <AnimatePresence>
        {selectedCard && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
            >
              <button 
                onClick={() => setSelectedCard(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="h-64 md:h-80 w-full relative">
                <img 
                  src={selectedCard.image} 
                  alt={selectedCard.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <span className="inline-block px-3 py-1 bg-teal-500 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-3">
                    {selectedCard.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
                    {selectedCard.title}
                  </h2>
                </div>
              </div>

              <div className="p-8 md:p-12 overflow-y-auto">
                <div className="max-w-none prose prose-slate">
                  <h4 className="text-teal-600 font-bold text-sm uppercase tracking-widest mb-4">In-Depth Guide</h4>
                  <p className="text-xl text-slate-600 leading-relaxed font-medium mb-8">
                    {selectedCard.description}
                  </p>
                  <div className="w-full h-px bg-slate-100 mb-8" />
                  <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-wrap">
                    {selectedCard.content}
                  </p>
                </div>
                
                <div className="mt-12 flex justify-end">
                  <button 
                    onClick={() => setSelectedCard(null)}
                    className="px-8 py-3 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-100"
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
