
import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-40 pb-32 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <header className="mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">Privacy Policy</h1>
          <p className="text-slate-500 font-medium uppercase tracking-[0.2em] text-xs">Last Updated: December 2025</p>
        </header>

        <div className="prose prose-slate prose-lg max-w-none space-y-12 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              At Rejuvana Living, your privacy is paramount. This policy explains how we collect, use, and protect your personal information when you interact with our wellness platform, community directory, and AI-powered services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">2. Information We Collect</h2>
            <p>We collect information to provide a more personalized longevity experience:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Direct Identifiers:</strong> Name, email address, and wellness goals provided via our contact forms.</li>
              <li><strong>Social Integration:</strong> Public social media data fetched via our AI-powered Social Directory to curate community insights.</li>
              <li><strong>Technical Data:</strong> IP addresses and browser characteristics for performance optimization.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">3. How We Use Data</h2>
            <p>Your data is used strictly for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Customizing your wellness journey and providing relevant guides.</li>
              <li>Syncing our community directory with real-time health-span insights.</li>
              <li>Improving our AI models' ability to surface high-fidelity longevity content.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">4. Data Sharing</h2>
            <p>
              Rejuvana Living does not sell your data. We only share information with trusted service providers necessary for platform operation (e.g., Google Gemini API for real-time data grounding) or when required by law.
            </p>
          </section>

          <section className="p-8 bg-teal-50 rounded-3xl border border-teal-100">
            <h3 className="text-xl font-bold text-teal-900 mb-3">Questions?</h3>
            <p className="text-teal-800 text-sm">
              If you have any questions regarding your data rights, please reach out to our privacy officer at <a href="mailto:privacy@rejuvanaliving.com" className="underline font-bold">privacy@rejuvanaliving.com</a>.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
