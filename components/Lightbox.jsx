import React, { useEffect } from 'react';

const Lightbox = ({ photos, currentIndex, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onPrev, onNext]);

  if (currentIndex < 0 || currentIndex >= photos.length) {
    return null;
  }
  const photo = photos[currentIndex];
  const isFirstImage = currentIndex === 0;
  const isLastImage = currentIndex === photos.length - 1;

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-hidden flex flex-col">
      <style>{`
        @keyframes fadeInScaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .lightbox-button { transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); }
        .lightbox-button:hover { transform: scale(1.1); }
        .lightbox-button:active { transform: scale(0.95); }
        .animate-fadeIn { animation: fadeInScaleUp 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .animate-slideInLeft { animation: slideInLeft 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .animate-slideInRight { animation: slideInRight 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
      `}</style>
      <button
        onClick={onClose}
        className="fixed top-8 right-8 z-60 bg-black text-white hover:bg-gray-800 rounded-full transition-all duration-300 w-12 h-12 flex items-center justify-center lightbox-button shadow-lg animate-fadeIn"
        aria-label="Close gallery"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <button
        onClick={onClose}
        className="fixed top-8 left-8 z-60 bg-black text-white hover:bg-gray-800 rounded-lg transition-all duration-300 w-12 h-12 flex items-center justify-center lightbox-button shadow-lg animate-fadeIn"
        aria-label="Back to gallery"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4z"></path>
        </svg>
      </button>
      <div className="flex-1 flex items-center justify-center px-8 py-8">
        <div className="w-full h-full flex gap-12 items-center justify-center animate-fadeIn">
          <div className="flex-1 h-full flex items-center justify-center min-w-0">
            <img 
              src={photo.src} 
              alt={photo.title} 
              className="max-h-full max-w-full w-auto h-auto object-contain shadow-lg animate-slideInLeft"
            />
          </div>
          <div className="w-96 h-full flex flex-col justify-center space-y-8 overflow-y-auto pr-4 animate-slideInRight">
            <div>
              <h1 className="text-5xl font-bold text-black mb-2">{photo.title}</h1>
              <p className="text-gray-500 text-sm uppercase tracking-widest">{currentIndex + 1} of {photos.length}</p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">Category</h3>
                <p className="text-lg text-black">{photo.category || 'Photography'}</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">Title</h3>
                <p className="text-lg text-black">{photo.title}</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">Description</h3>
                <p className="text-base text-gray-700 leading-relaxed">{photo.caption || 'Professional photography'}</p>
              </div>
            </div>
            <div className="flex-1"></div>
            <div className="text-xs text-gray-400 uppercase tracking-widest">
              Use arrow keys or buttons to navigate • ESC to close
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-8 z-50">
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className={`text-black bg-gray-200 hover:bg-gray-300 p-4 rounded-lg transition-all duration-300 lightbox-button shadow-lg ${isFirstImage ? 'opacity-30 cursor-not-allowed' : ''}`}
          aria-label="Previous image"
          disabled={isFirstImage}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <div className="text-center min-w-[100px]">
          <p className="text-sm font-semibold text-black">{currentIndex + 1} / {photos.length}</p>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className={`text-black bg-gray-200 hover:bg-gray-300 p-4 rounded-lg transition-all duration-300 lightbox-button shadow-lg ${isLastImage ? 'opacity-30 cursor-not-allowed' : ''}`}
          aria-label="Next image"
          disabled={isLastImage}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
