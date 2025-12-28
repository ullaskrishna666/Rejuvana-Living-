
import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, icon, delay }: { title: string; description: string; icon: React.ReactNode; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
  >
    <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
              Why Rejuvana Living Matters for Your Future
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We believe that longevity isn't just about adding years to your life, but adding life to your years. Preventive health is the most powerful tool we have.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Our approach focuses on the small, compounding habits that create radical transformations. From the air you breathe to the thoughts you think, Rejuvana Living guides you toward your peak biological potential.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200" 
                alt="Mindfulness practice" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-teal-50 rounded-[4rem] -z-10" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            delay={0.1}
            title="Evidence-Based"
            description="We bridge the gap between clinical research and daily lifestyle, ensuring our recommendations are backed by science."
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18" /></svg>}
          />
          <FeatureCard 
            delay={0.2}
            title="Personalized Paths"
            description="Every body is unique. We provide the frameworks for you to discover the specific habits that work for your biology."
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>}
          />
          <FeatureCard 
            delay={0.3}
            title="Sustainable Growth"
            description="No crash diets or extreme regimes. Just small, consistent adjustments that lead to long-term health and vitality."
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
