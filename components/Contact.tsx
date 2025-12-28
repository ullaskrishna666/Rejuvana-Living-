
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactFormData } from '../types.ts';

/**
 * REJUVANA INTEGRATION SETTINGS
 * Optimized for Hostinger Reach / MailerLite V2 compatibility.
 */
const INTEGRATION_SETTINGS = {
  USE_MOCK_SERVICE: false, 
  REACH_API_ENDPOINT: 'https://developers.hostinger.com/api/reach/v1/contacts',
  API_KEY: 'EKznBzSVA7U5lRwIECSZjAN9Fe9SArBnnmGprn3m99e1b1f4', 
  TEAM_EMAIL: 'hello@rejuvanaliving.com'
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'syncing' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('syncing');

    try {
      // Split name into First Name (name) and Last Name (surname)
      const nameParts = formData.name.trim().split(/\s+/);
      const firstName = nameParts[0] || '';
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '-'; 

      /**
       * OPTIMIZED PAYLOAD STRUCTURE
       * We provide root-level keys AND a fields object to ensure the Hostinger 
       * Dashboard maps the data correctly to its UI cards.
       */
      const payload = {
        email: formData.email,
        name: firstName,         
        surname: lastName,      
        note: formData.message,
        fields: {
          name: firstName,
          last_name: lastName,
          surname: lastName,
          note: formData.message
        },
        status: 'subscribed'
      };

      if (INTEGRATION_SETTINGS.USE_MOCK_SERVICE) {
        await new Promise(resolve => setTimeout(resolve, 1500));
      } else {
        const response = await fetch(INTEGRATION_SETTINGS.REACH_API_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${INTEGRATION_SETTINGS.API_KEY}`
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const errorInfo = await response.json().catch(() => ({}));
          console.error('API Error details:', errorInfo);
          throw new Error('Connection failed.');
        }
      }

      setStatus('success');
      setShowModal(true);
      setFormData({ name: '', email: '', message: '' });

    } catch (error: any) {
      console.error("Sync Error:", error.message);
      setStatus('error');
      setErrorMessage('Could not complete your request. Please try again or reach out via email.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const getButtonText = () => {
    if (status === 'syncing') return 'Processing...';
    if (status === 'error') return 'Try Again';
    return 'Begin Your Wellness Journey';
  };

  return (
    <section id="join-community" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          {/* Brand Panel */}
          <div className="md:w-5/12 p-12 lg:p-16 text-white bg-teal-600 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 tracking-tight">Join the Circle</h2>
              <p className="text-teal-50 text-lg mb-12 opacity-90 leading-relaxed">
                Start your personalized longevity protocol. Once you reach out, our wellness directory is updated and our team is alerted to your goals.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-teal-100 font-bold mb-1">Direct Communication</p>
                    <span className="text-lg font-medium">{INTEGRATION_SETTINGS.TEAM_EMAIL}</span>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-teal-100 font-bold mb-1">Privacy First</p>
                    <span className="text-lg font-medium">Encrypted Data Sync</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-white/10 hidden md:block">
              <p className="text-xs text-teal-100/60 italic leading-relaxed">
                "We use secure wellness directories to process your aspirations with zero latency and absolute privacy."
              </p>
            </div>
          </div>

          {/* Form Panel */}
          <div className="md:w-7/12 p-12 lg:p-16 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Your Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all text-slate-800"
                  placeholder="e.g. John Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all text-slate-800"
                  placeholder="hello@rejuvanaliving.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Your Message</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all text-slate-800 resize-none"
                  placeholder="Tell us about your wellness journey..."
                />
              </div>
              <button 
                type="submit" 
                disabled={status === 'syncing'}
                className={`w-full py-5 rounded-2xl font-bold text-white transition-all shadow-lg active:scale-95 ${
                  status === 'error' ? 'bg-rose-500' : 'bg-teal-600 hover:bg-teal-700'
                }`}
              >
                {getButtonText()}
              </button>
            </form>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative bg-white p-12 rounded-[2.5rem] max-w-md w-full text-center shadow-2xl"
            >
              <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Message Received</h3>
              <p className="text-slate-600 mb-10 leading-relaxed">Thank you for joining our community. We've synchronized your data and our team will reach out shortly.</p>
              <button 
                onClick={() => setShowModal(false)}
                className="w-full py-4 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition-all shadow-lg shadow-teal-100"
              >
                Return to Site
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Fixed: Added missing default export
export default Contact;
