import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../../constants.js';
import Lightbox from '../Lightbox.jsx';

const Photography = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['all', ...Array.from(new Set(GALLERY_PHOTOS.map(p => p.category)))];
  const filteredPhotos = selectedCategory === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(p => p.category === selectedCategory);

  const openLightbox = (index) => {
    const photoId = filteredPhotos[index].id;
    const originalIndex = GALLERY_PHOTOS.findIndex(p => p.id === photoId);
    setLightboxIndex(originalIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    const nextIndex = (lightboxIndex + 1);
    if(nextIndex < GALLERY_PHOTOS.length) {
      setLightboxIndex(nextIndex);
    }
  };
  
  const handlePrev = () => {
    if (lightboxIndex === null) return;
    const prevIndex = (lightboxIndex - 1);
    if (prevIndex >= 0) {
      setLightboxIndex(prevIndex);
    }
  };

  return (
    <section className="py-20 bg-stone-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center text-stone-800 mb-4">My Photography</h2>
        <p className="text-center text-stone-600 max-w-2xl mx-auto mb-12">
          A collection of moments frozen in time. Explore my work across different styles and stories.
        </p>

        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm md:text-base capitalize rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-white text-stone-600 hover:bg-stone-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer shadow-lg"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openLightbox(index)}
            >
              <img src={photo.thumbnail} alt={photo.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center text-white p-4">
                  <h3 className="font-bold text-lg">{photo.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {lightboxIndex !== null && (
        <Lightbox
          photos={GALLERY_PHOTOS}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
};

export default Photography;
