
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "w-16 h-16", showText = true }) => {
  return (
    <div className={`flex items-center gap-4 ${className.includes('h-') ? '' : 'h-16'}`}>
      <div className={`${className} relative flex-shrink-0`}>
        <svg 
          viewBox="0 0 400 400" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Main Circle - Thin and elegant like the image */}
          <circle cx="200" cy="200" r="185" stroke="#1B4332" strokeWidth="4" />
          
          {/* Leaf Branch Accent */}
          <g transform="translate(230, 160) rotate(-5)">
            {/* Stem Path */}
            <path d="M0 0C50 -20 120 40 180 150" stroke="#1B4332" strokeWidth="2.5" fill="none" opacity="0.4" />
            
            {/* Individual Leaves following the curve of the circle as seen in the photo */}
            {/* Top Leaves */}
            <path d="M10 0C25 -15 45 -10 45 5C45 20 25 25 10 10Z" fill="#113322" transform="translate(0, -10) rotate(-35)" />
            <path d="M10 0C25 -15 45 -10 45 5C45 20 25 25 10 10Z" fill="#113322" transform="translate(35, -25) rotate(-25)" />
            <path d="M10 0C25 -15 45 -10 45 5C45 20 25 25 10 10Z" fill="#113322" transform="translate(75, -25) rotate(-10)" />
            <path d="M10 0C25 -15 45 -10 45 5C45 20 25 25 10 10Z" fill="#113322" transform="translate(115, -15) rotate(10)" />
            <path d="M10 0C25 -15 45 -10 45 5C45 20 25 25 10 10Z" fill="#113322" transform="translate(145, 10) rotate(30)" />
            
            {/* Bottom/Right Leaves */}
            <path d="M10 0C25 -15 45 -10 45 5C45 20 25 25 10 10Z" fill="#113322" transform="translate(165, 50) rotate(55)" />
            <path d="M10 0C25 -15 45 -10 45 5C45 20 25 25 10 10Z" fill="#113322" transform="translate(175, 95) rotate(75)" />
            <path d="M10 0C25 -15 45 -10 45 5C45 20 25 25 10 10Z" fill="#113322" transform="translate(170, 145) rotate(95)" />
          </g>

          {/* Internal Text - Centered Serif */}
          <g>
            <text 
              x="200" 
              y="200" 
              textAnchor="middle" 
              fill="#1B4332" 
              style={{ font: 'bold 78px "Playfair Display", serif', letterSpacing: '-1px' }}
            >
              Rejuvana
            </text>
            <text 
              x="200" 
              y="265" 
              textAnchor="middle" 
              fill="#1B4332" 
              style={{ font: '58px "Playfair Display", serif', letterSpacing: '1px' }}
            >
              Living
            </text>
          </g>
        </svg>
      </div>
      {showText && (
        <div className="flex flex-col -space-y-1.5 border-l border-slate-200 pl-4 h-full justify-center">
          <span className="text-2xl font-serif font-bold tracking-tight text-[#1B4332]">
            Rejuvana
          </span>
          <span className="text-xl font-serif text-[#1B4332] opacity-80 leading-none">
            Living
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
