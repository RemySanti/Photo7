import React, { useState, forwardRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants.js';
import MenuOverlay from './MenuOverlay.jsx';

const Navbar = forwardRef((props, ref) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header ref={ref} className="fixed top-[10px] left-[10px] right-[10px] z-50 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="flex items-center justify-between bg-white/30 backdrop-blur-2xl rounded-2xl shadow-lg shadow-black/10 border border-white/50 px-6 py-6">
            <Link to="/" className="flex items-center gap-4 pl-4">
              <div className="relative camera-icon-wrapper">
                <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-black" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h4.05l1.83-2h4.24l1.83 2H20v12z"/>
                    <path fill="currentColor" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/>
                  </svg>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full opacity-0 camera-flash pointer-events-none"></div>
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[0.4375rem] md:w-[0.5625rem] opacity-0 polaroid-drop pointer-events-none z-[-1]">
                  <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                      <path d="M0 5C0 2.23858 2.23858 0 5 0H95C97.7614 0 100 2.23858 100 5V115C100 117.761 97.7614 120 95 120H5C2.23858 120 0 117.761 0 115V5Z" fill="white"/>
                      <rect x="10" y="10" width="80" height="80" fill="#a0aec0"/>
                  </svg>
                </div>
              </div>
              <span className="text-3xl font-serif tracking-widest text-black hidden sm:inline">Jinette Ramos</span>
              <span className="text-3xl font-serif tracking-widest text-black hidden md:inline">&nbsp;Photography</span>
            </Link>
            <nav className="hidden lg:flex items-center gap-x-2">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-semibold tracking-wider uppercase px-5 py-5 rounded-full ${
                      isActive ? 'bg-black text-white' : 'text-gray-600'
                    }`
                  }
                >
                  {link.title}
                </NavLink>
              ))}
            </nav>
            <div className="lg:hidden pr-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-3 rounded-full"
                aria-label="Open menu"
                aria-expanded={isMenuOpen}
              >
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      {isMenuOpen && <MenuOverlay onClose={() => setIsMenuOpen(false)} />}
    </>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
