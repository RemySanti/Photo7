import React from 'react';
import { useScale } from './ScaleProvider';
import { getAssetPath } from '../utils.js';

const Footer = ({ onAdminClick }) => {
  const { scaleFactor } = useScale();
  // Add breathing animation CSS and background movement
  const styles = `
    @keyframes breathingGlow {
      0%, 100% {
        filter: brightness(0.4) drop-shadow(0 0 8px rgba(0, 0, 0, 0.8));
      }
      50% {
        filter: brightness(0.7) drop-shadow(0 0 12px rgba(0, 0, 0, 0.9));
      }
    }
    
    .social-icon-breathing {
      animation: breathingGlow 6s ease-in-out infinite;
    }

    @keyframes moveBackground {
      0% {
        background-position: 0% 0%;
      }
      25% {
        background-position: 100% 0%;
      }
      50% {
        background-position: 100% 100%;
      }
      75% {
        background-position: 0% 100%;
      }
      100% {
        background-position: 0% 0%;
      }
    }

    .footer-animated-bg {
      animation: moveBackground 15s ease-in-out infinite;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <footer 
        className="footer-animated-bg relative w-full py-12 px-8 text-white overflow-hidden"
        style={{
          backgroundImage: `url(${getAssetPath('images/footerbg.png')})`,
          backgroundSize: '150%',
          backgroundPosition: '0% 0%',
          backgroundAttachment: 'scroll',
          backgroundColor: 'rgba(0,0,0,0.85)',
        }}
      >
        {/* Overlay to ensure text is readable - 25% opacity for 75% image visibility */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none"></div>
        
        {/* Glassmorphic overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle at top, rgba(255,255,255,0.05) 0%, transparent 70%)',
        }}></div>

        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 md:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-6">
            {/* Left - Made in America */}
            <div className="flex items-center gap-2 sm:gap-3 justify-self-center md:justify-self-start">
              <img 
                src={getAssetPath('images/american-flag.svg')}
                alt="US Flag" 
                className="w-4 h-2.5 sm:w-5 sm:h-3 object-contain"
                style={{ imageRendering: 'high-quality' }}
              />
              <div className="flex items-center gap-1 flex-wrap">
                <p className="text-xs sm:text-sm font-bold tracking-widest uppercase">
                  MADE IN <span className="text-red-600">AMERICA</span> WITH 
                </p>
                <span className="text-red-500 text-base sm:text-lg">❤</span>
              </div>
            </div>

            {/* Center - Social Icons */}
            <div className="flex justify-center gap-5 justify-self-center w-full" style={{ gap: '20px' }}>
              {[
                { href: 'https://instagram.com', src: getAssetPath('images/instagram.png'), alt: 'Instagram' },
                { href: 'https://facebook.com', src: getAssetPath('images/facebook.png'), alt: 'Facebook' },
              ].map((icon) => (
                <a
                  key={icon.alt}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-breathing transition-all duration-300"
                  style={{ display: 'inline-block', cursor: 'pointer' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'brightness(1.5) drop-shadow(0 0 18px rgba(100, 200, 255, 0.9))';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = '';
                  }}
                  title={icon.alt}
                >
                  <img src={icon.src} alt={icon.alt} className="w-9 h-9 sm:w-11 sm:h-11" />
                </a>
              ))}
            </div>

            {/* Right - Contact Info */}
            <div className="flex flex-col items-center md:items-end gap-1 text-xs sm:text-sm text-white justify-self-center md:justify-self-end">
              <a href="tel:+14842745444" className="hover:text-gray-300 transition-colors text-center md:text-right">
                (484) 274-5444
              </a>
              <a href="mailto:info@jinetteramos.com" className="hover:text-gray-300 transition-colors text-center md:text-right break-all">
                info@jinetteramos.com
              </a>
              <span className="text-white text-center md:text-right">Allentown, PA</span>
            </div>
          </div>

          {/* Divider - Removed white line */}

          {/* Service Areas Section */}
          <div className="border-t border-white/10 pt-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
              {/* Family Photography */}
              <div>
                <h3 className="font-semibold text-white mb-3">Family Photography</h3>
                <ul className="space-y-1 text-white/80">
                  <li><a href="/family-photography/bethlehem-pa/" className="hover:text-white transition-colors">Bethlehem, PA</a></li>
                  <li><a href="/family-photography/easton-pa/" className="hover:text-white transition-colors">Easton, PA</a></li>
                  <li><a href="/family-photography/whitehall-pa/" className="hover:text-white transition-colors">Whitehall, PA</a></li>
                  <li><a href="/family-photography/emmaus-pa/" className="hover:text-white transition-colors">Emmaus, PA</a></li>
                  <li><a href="/family-photography/macungie-pa/" className="hover:text-white transition-colors">Macungie, PA</a></li>
                </ul>
              </div>

              {/* Maternity & Newborn */}
              <div>
                <h3 className="font-semibold text-white mb-3">Maternity & Newborn</h3>
                <ul className="space-y-1 text-white/80">
                  <li><a href="/maternity-newborn-photographer/bethlehem-pa/" className="hover:text-white transition-colors">Bethlehem, PA</a></li>
                  <li><a href="/maternity-newborn-photographer/easton-pa/" className="hover:text-white transition-colors">Easton, PA</a></li>
                  <li><a href="/maternity-newborn-photographer/whitehall-pa/" className="hover:text-white transition-colors">Whitehall, PA</a></li>
                  <li><a href="/maternity-newborn-photographer/nazareth-pa/" className="hover:text-white transition-colors">Nazareth, PA</a></li>
                  <li><a href="/maternity-newborn-photographer/hellertown-pa/" className="hover:text-white transition-colors">Hellertown, PA</a></li>
                </ul>
              </div>

              {/* More Services */}
              <div>
                <h3 className="font-semibold text-white mb-3">More Services</h3>
                <ul className="space-y-1 text-white/80">
                  <li><a href="/senior-portraits/bethlehem-pa/" className="hover:text-white transition-colors">Senior Portraits</a></li>
                  <li><a href="/engagement-photography/bethlehem-pa/" className="hover:text-white transition-colors">Engagement Photos</a></li>
                  <li><a href="/mini-session-photography/bethlehem-pa/" className="hover:text-white transition-colors">Mini Sessions</a></li>
                  <li><a href="/professional-headshots/bethlehem-pa/" className="hover:text-white transition-colors">Professional Headshots</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="text-center text-xs sm:text-sm text-white relative pt-4">
            <p className="mb-4 md:mb-0">Jinette Ramos, the best photographer in Allentown.</p>
            {/* Admin Button - Far Right */}
            <button
              onClick={onAdminClick}
              className="absolute bottom-0 right-0 mt-4 px-3 sm:px-4 py-1 sm:py-1.5 bg-gray-800/50 hover:bg-gray-700/70 text-white text-xs font-semibold rounded-full border border-white/20 transition-all duration-300"
              style={{
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            >
              Admin
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
