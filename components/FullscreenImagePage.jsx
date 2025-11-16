import React, { useEffect } from 'react';

const FullscreenImagePage = ({ photo, onClose, onPrev, onNext, isFirstImage, isLastImage }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev && !isFirstImage) onPrev();
      if (e.key === 'ArrowRight' && onNext && !isLastImage) onNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, onPrev, onNext, isFirstImage, isLastImage]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f8f8f8]"
      style={{
        border: '20px solid #fff',
        boxSizing: 'border-box',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        padding: 0,
      }}
      onClick={handleOverlayClick}
    >
      <img
        src={photo.src}
        alt={photo.title}
        className="object-contain"
        style={{
          display: 'block',
          margin: 'auto',
          maxHeight: 'calc(100vh - 40px)',
          maxWidth: 'calc(100vw - 40px)',
          width: 'auto',
          height: 'auto',
          cursor: 'zoom-in',
          background: '#f8f8f8',
        }}
        draggable={false}
        onClick={e => {
          e.stopPropagation();
          window.open(photo.src, '_blank', 'noopener');
        }}
        title="Open full size in new tab"
      />
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-8 right-8 text-[#222] bg-white bg-opacity-95 hover:bg-opacity-100 border border-gray-200 rounded-full shadow-lg"
        style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 700,
          fontSize: '3.5rem',
          width: 80,
          height: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10001,
          boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)',
          transition: 'background 0.2s',
        }}
      >
        ×
      </button>
    </div>
  );
};

export default FullscreenImagePage;
