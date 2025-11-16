import React, { useEffect } from 'react';
import { GALLERY_PHOTOS } from '../constants';

const ImageDetailPage = ({ photoId, onBack, onNavigate }) => {
  // Handle both string and number photoId
  const photoIdNum = typeof photoId === 'string' ? parseInt(photoId, 10) : photoId;
  const photo = GALLERY_PHOTOS.find((p) => p.id === photoIdNum);
  const currentIndex = GALLERY_PHOTOS.findIndex((p) => p.id === photoIdNum);
  const previousPhoto = currentIndex > 0 ? GALLERY_PHOTOS[currentIndex - 1] : null;
  const nextPhoto = currentIndex < GALLERY_PHOTOS.length - 1 ? GALLERY_PHOTOS[currentIndex + 1] : null;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onBack();
      } else if (e.key === 'ArrowLeft' && previousPhoto) {
        onNavigate(previousPhoto.id);
      } else if (e.key === 'ArrowRight' && nextPhoto) {
        onNavigate(nextPhoto.id);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previousPhoto, nextPhoto, onBack, onNavigate]);

  if (!photo) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Image not found</h1>
          <button onClick={onBack} className="text-blue-600 hover:underline">
            Back to Gallery
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              aria-label="Back to gallery"
              className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Back to Gallery</span>
            </button>
            <div className="text-sm text-gray-500">
              {currentIndex + 1} of {GALLERY_PHOTOS.length}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-12">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="sticky top-24">
              <img
                src={photo.src}
                alt={photo.title || `Photography by Jinette Ramos - ${photo.category || 'Gallery'}`}
                className="w-full h-auto object-contain rounded-lg shadow-lg"
                loading="eager"
                decoding="async"
                style={{ imageRendering: 'high-quality' }}
              />
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              {/* Title */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                  {photo.title}
                </h1>
              </div>

              {/* Category */}
              <div>
                <h2 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
                  Category
                </h2>
                <p className="text-lg text-black capitalize">{photo.category}</p>
              </div>

              {/* Location */}
              <div>
                <h2 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
                  Location
                </h2>
                <p className="text-lg text-black">{photo.location}</p>
              </div>

              {/* Gear */}
              <div>
                <h2 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
                  Gear
                </h2>
                <p className="text-lg text-black">{photo.equipment}</p>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
                  Description
                </h2>
                <p className="text-lg text-black leading-relaxed">{photo.description}</p>
              </div>

              {/* Photographer Info */}
              <div className="pt-8 border-t border-gray-200">
                <h2 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
                  Photographer
                </h2>
                <p className="text-lg font-semibold text-black">Jinette Ramos</p>
                <div className="mt-4 flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="mailto:info@jinetteramos.com"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Navigation Footer */}
      <footer className="border-t border-gray-200 bg-white sticky bottom-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => previousPhoto && onNavigate(previousPhoto.id)}
              disabled={!previousPhoto}
              className={`flex items-center gap-2 font-medium transition-colors ${
                previousPhoto
                  ? 'text-gray-700 hover:text-black'
                  : 'text-gray-300 cursor-not-allowed'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Previous</span>
            </button>

            <div className="text-sm text-gray-500">
              Use arrow keys to navigate • ESC to close
            </div>

            <button
              onClick={() => nextPhoto && onNavigate(nextPhoto.id)}
              disabled={!nextPhoto}
              className={`flex items-center gap-2 font-medium transition-colors ${
                nextPhoto
                  ? 'text-gray-700 hover:text-black'
                  : 'text-gray-300 cursor-not-allowed'
              }`}
            >
              <span>Next</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ImageDetailPage;
