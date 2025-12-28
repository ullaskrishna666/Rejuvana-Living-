
import React from 'react';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (page: 'home' | 'directory', sectionId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="py-24 bg-white text-slate-500 border-t border-slate-100 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center mb-8 hover:opacity-80 transition-opacity"
            >
              <Logo className="w-16 h-16" />
            </button>
            <p className="text-sm leading-relaxed text-slate-400">
              Pioneering the future of holistic longevity and science-backed wellness for a life well-lived.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest">Platform</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('home')} className="text-sm hover:text-teal-600 transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('directory')} className="text-sm hover:text-teal-600 transition-colors">Social Directory</button></li>
              <li><button onClick={() => onNavigate('home', 'about')} className="text-sm hover:text-teal-600 transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('home', 'gallery')} className="text-sm hover:text-teal-600 transition-colors">Wellness Guides</button></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest">Knowledge</h4>
            <ul className="space-y-4">
              <li><button className="text-sm hover:text-teal-600 transition-colors text-left">Privacy Policy</button></li>
              <li><button className="text-sm hover:text-teal-600 transition-colors text-left">Terms of Service</button></li>
              <li><button className="text-sm hover:text-teal-600 transition-colors text-left">Cookie Policy</button></li>
              <li><button onClick={() => onNavigate('home', 'join-community')} className="text-sm hover:text-teal-600 transition-colors text-left">Contact Support</button></li>
            </ul>
          </div>

          {/* Social Presence */}
          <div className="col-span-1">
            <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest">Connect</h4>
            <div className="flex gap-4">
              {[
                { id: 'insta', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', link: 'https://www.instagram.com/rejuvanaliving/' },
                { id: 'fb', icon: 'M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z', link: 'https://www.facebook.com/rejuvanaliving' },
                { id: 'yt', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z', link: 'https://www.youtube.com/@rejuvanaliving' }
              ].map((social) => (
                <a 
                  key={social.id} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all shadow-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-300">
            © {new Date().getFullYear()} Rejuvana Living. Empowering through preventive wellness.
          </p>
          <div className="flex gap-8">
             <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Global Headquarters</span>
             <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Sustainability First</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
