import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants.js';

const MenuOverlay = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center animate-fadeIn">
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
      `}</style>
      <nav className="flex flex-col items-center justify-center text-center">
        {NAV_LINKS.map((link, index) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={onClose}
            className="text-3xl md:text-4xl font-serif text-black my-3 tracking-wider hover:opacity-60 transition-opacity duration-300"
            style={{ animation: `fadeInUp 0.5s ${index * 0.1}s ease-out forwards`, opacity: 0 }}
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default MenuOverlay;
