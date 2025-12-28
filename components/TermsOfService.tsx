
import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-40 pb-32 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <header className="mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">Terms of Service</h1>
          <p className="text-slate-500 font-medium uppercase tracking-[0.2em] text-xs">Version 1.1 • December 2025</p>
        </header>

        <div className="prose prose-slate prose-lg max-w-none space-y-12 text-slate-600 leading-relaxed">
          <section className="p-8 bg-amber-50 rounded-3xl border border-amber-100 mb-12">
            <h2 className="text-xl font-bold text-amber-900 mb-2">Medical Disclaimer</h2>
            <p className="text-amber-800 text-sm">
              Rejuvana Living provides educational content regarding longevity and wellness. Our content is NOT medical advice. Always consult a licensed healthcare professional before beginning any new health, supplement, or exercise protocol.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing Rejuvana Living, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily view the materials (information or software) on Rejuvana Living for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">3. Limitations</h2>
            <p>
              In no event shall Rejuvana Living or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">4. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Rejuvana Living operates.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsOfService;
