
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Simulating connection to Hostinger Reach via mock API
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: `Wellness Journey Lead: ${formData.name}`,
          body: formData.message,
          email: formData.email,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (response.ok) {
        setTimeout(() => {
          setStatus('success');
          setShowModal(true);
          setFormData({ name: '', email: '', message: '' });
        }, 1500);
      } else {
        throw new Error('Connection timed out');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('We encountered a temporary connection issue. Please try again.');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="join-community" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          {/* Left Panel */}
          <div className="md:w-5/12 p-12 lg:p-16 text-white bg-teal-600 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 tracking-tight">Join the Community</h2>
              <p className="text-teal-50 text-lg mb-12 opacity-90 leading-relaxed">
                Your path to longevity starts with a single conversation. Connect with our dedicated support team via our Hostinger Reach channel.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-teal-100 font-bold mb-1">Expert Support</p>
                    <span className="text-lg font-medium">hello@rejuvanaliving.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-white/10 hidden md:block">
              <p className="text-sm text-teal-100/60 italic leading-relaxed">
                "The secret of health for both mind and body is not to mourn for the past, but to live the present moment wisely and earnestly."
              </p>
            </div>
          </div>

          {/* Form Panel */}
          <div className="md:w-7/12 p-12 lg:p-16 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"
                  placeholder="How should we address you?"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"
                  placeholder="Where can we reach you?"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all resize-none"
                  placeholder="Tell us about your wellness aspirations..."
                />
              </div>
              
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-5 bg-teal-600 text-white rounded-2xl font-bold text-lg hover:bg-teal-700 transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70 shadow-lg shadow-teal-100 group overflow-hidden relative"
              >
                <AnimatePresence mode="wait">
                  {status === 'loading' ? (
                    <motion.div 
                      key="loading"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      className="flex items-center gap-3"
                    >
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Preparing your path...
                    </motion.div>
                  ) : (
                    <motion.span 
                      key="idle"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                    >
                      Begin Your Wellness Journey
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              {status === 'error' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-red-500 font-bold text-sm"
                >
                  {errorMessage}
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { setShowModal(false); setStatus('idle'); }}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white rounded-[3rem] p-10 md:p-16 max-w-xl w-full text-center shadow-2xl"
            >
              <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-8 text-teal-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                Your Journey Begins Today
              </h3>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                Great! You have taken your first significant step in Longevity and Healthier living. 
                Our experts have received your inquiry via Hostinger Reach and will connect with you shortly.
              </p>
              
              <button 
                onClick={() => {
                  setShowModal(false);
                  setStatus('idle');
                }}
                className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all active:scale-95 shadow-xl"
              >
                Continue Your Path
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
