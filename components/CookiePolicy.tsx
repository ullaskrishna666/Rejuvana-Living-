
import React from 'react';
import { motion } from 'framer-motion';

const CookiePolicy: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-40 pb-32 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <header className="mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">Cookie Policy</h1>
          <p className="text-slate-500 font-medium uppercase tracking-[0.2em] text-xs">Last Updated: October 2023</p>
        </header>

        <div className="prose prose-slate prose-lg max-w-none space-y-12 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device that help us improve your browsing experience. At Rejuvana Living, we use cookies to understand how you interact with our wellness guides.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Types of Cookies We Use</h2>
            <div className="space-y-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Essential Cookies</h3>
                <p className="text-sm">Necessary for the platform to function, such as maintaining your session and security settings.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Performance Cookies</h3>
                <p className="text-sm">Help us understand how visitors use the site (e.g., which wellness guides are most popular) so we can improve content delivery.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Functional Cookies</h3>
                <p className="text-sm">Enable advanced features like our real-time community directory synchronization.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. Please note that disabling essential cookies may impact the functionality of our interactive wellness tools.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default CookiePolicy;
