
import React from 'react';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (page: 'home' | 'directory' | 'privacy' | 'terms' | 'cookies', sectionId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const socialLinks = [
    { 
      id: 'insta', 
      name: 'Instagram',
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', 
      link: 'https://www.instagram.com/rejuvanaliving/' 
    },
    { 
      id: 'fb', 
      name: 'Facebook',
      icon: 'M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z', 
      link: 'https://www.facebook.com/rejuvanaliving' 
    },
    { 
      id: 'yt', 
      name: 'YouTube',
      icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z', 
      link: 'https://www.youtube.com/@rejuvanaliving' 
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: 'M12.525.02c1.31 0 2.59.35 3.73 1.01V6.2c-1.14-.66-2.42-1.01-3.73-1.01V.02zM21.1 11.4c-1.31 0-2.59-.35-3.73-1.01v4.81c0 4.86-3.94 8.8-8.8 8.8S0 20.06 0 15.2s3.94-8.8 8.8-8.8c.19 0 .38 0 .57.02v5.2c-.19-.01-.38-.02-.57-.02-1.99 0-3.6 1.61-3.6 3.6s1.61 3.6 3.6 3.6 3.6-1.61 3.6-3.6V0h5.2c0 3.31 2.69 6 6 6v5.4z',
      link: 'https://www.tiktok.com/@rejuvanaliving'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
      link: 'https://www.linkedin.com/company/rejuvanaliving/'
    },
    {
      id: 'pinterest',
      name: 'Pinterest',
      icon: 'M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.397 2.965 7.397 6.93 0 4.135-2.607 7.462-6.225 7.462-1.216 0-2.359-.631-2.75-1.378l-.75 2.855c-.271 1.045-1.002 2.355-1.492 3.148C9.362 23.834 10.648 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z',
      link: 'https://www.pinterest.com/rejuvanaliving/'
    }
  ];

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
              <li><button onClick={() => onNavigate('privacy')} className="text-sm hover:text-teal-600 transition-colors text-left">Privacy Policy</button></li>
              <li><button onClick={() => onNavigate('terms')} className="text-sm hover:text-teal-600 transition-colors text-left">Terms of Service</button></li>
              <li><button onClick={() => onNavigate('cookies')} className="text-sm hover:text-teal-600 transition-colors text-left">Cookie Policy</button></li>
              <li><button onClick={() => onNavigate('home', 'join-community')} className="text-sm hover:text-teal-600 transition-colors text-left">Contact Support</button></li>
            </ul>
          </div>

          {/* Social Presence */}
          <div className="col-span-1">
            <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest">Connect</h4>
            <div className="grid grid-cols-3 gap-4 max-w-[180px]">
              {socialLinks.map((social) => (
                <a 
                  key={social.id} 
                  href={social.link} 
                  title={social.name}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all shadow-sm group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="group-hover:scale-110 transition-transform">
                    <path d={social.icon}/>
                  </svg>
                </a>
              ))}
            </div>
            <p className="mt-6 text-[10px] font-bold text-slate-300 uppercase tracking-widest">Global Community Hub</p>
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
