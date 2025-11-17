import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GALLERY_PHOTOS, GALLERY_CATEGORIES } from '../constants';
import PageWrapper from '../components/PageWrapper';
import { getAssetPath } from '../utils.js';

const PhotographyPage = ({ isAdmin = false }) => {
  const navigate = useNavigate();
  // Filter categories to only show those that have photos, and remove empty ones
  const availableCategories = GALLERY_CATEGORIES.filter(category => {
    if (category === 'All') return true;
    if (!category || category.trim() === '') return false;
    return GALLERY_PHOTOS.some(photo => photo.category === category);
  });

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPhotos = selectedCategory === 'All'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((photo) => photo.category === selectedCategory);

  const handleImageClick = (photoId) => {
    navigate(`/image/${photoId}`);
  };

  return (
    <PageWrapper className="bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="relative mb-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent"></div>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">Welcome To My Photography Portfolio</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-black to-transparent mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              A collection of moments frozen in time. Explore my work across different styles and stories.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {availableCategories.filter(category => category && category.trim() !== '').map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              aria-label={`Filter by ${category}`}
              aria-pressed={selectedCategory === category}
              className={`px-6 py-3 font-semibold transition-all duration-300 capitalize ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-gray-200 to-gray-300 text-black scale-105'
                  : 'bg-white/80 backdrop-blur-md text-black hover:bg-white border border-gray-200/50 hover:border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden h-64 cursor-pointer transition-all duration-500"
              onClick={() => handleImageClick(photo.id)}
              role="button"
              tabIndex={0}
              aria-label={`View ${photo.title} - ${photo.category}`}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  handleImageClick(photo.id);
                }
              }}
              style={{
                boxShadow: '0 8px 25px 0 rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(0, 0, 0, 0.3)',
                filter: 'brightness(0.9) contrast(1.1)',
              }}
            >
              {/* Black overlay - 20% visible */}
              <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>
              
              {/* Inside black border - 30% visible */}
              <div className="absolute inset-0 border-2 border-black/30 z-20 pointer-events-none"></div>
              
              <img 
                src={getAssetPath(photo.thumbnail || photo.src)}
                alt={photo.title || `Photography by Jinette Ramos - ${photo.category}`}
                loading="lazy"
                decoding="async"
                className="gallery-image w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                style={{ 
                  imageRendering: 'high-quality',
                  filter: 'brightness(0.85) contrast(1.15)',
                }} 
              />
              
              {/* Additional shadow and shading effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30"></div>
              
              {/* Text overlay */}
              <div className="absolute left-5 bottom-5 text-white z-40 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <h3 className="text-xl font-bold mb-1 drop-shadow-lg">{photo.title}</h3>
                <p className="text-sm text-white/90 capitalize font-medium">{photo.category}</p>
              </div>
              
              {/* Search icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 z-40">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default PhotographyPage;

