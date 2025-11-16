import React, { useState, useEffect } from 'react';
import { GALLERY_PHOTOS } from '../constants.js';

const GalleryDetailPage = ({ photoId = 1, onNavigate, onPhotoSelect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (photoId) {
      const index = GALLERY_PHOTOS.findIndex(p => p.id === photoId);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [photoId]);

  const currentPhoto = GALLERY_PHOTOS[currentIndex];
  const previousPhoto = currentIndex > 0 ? GALLERY_PHOTOS[currentIndex - 1] : null;
  const nextPhoto = currentIndex < GALLERY_PHOTOS.length - 1 ? GALLERY_PHOTOS[currentIndex + 1] : null;

  const handlePrevious = () => {
    if (previousPhoto) {
      setCurrentIndex(currentIndex - 1);
      onPhotoSelect?.(previousPhoto.id);
    }
  };

  const handleNext = () => {
    if (nextPhoto) {
      setCurrentIndex(currentIndex + 1);
      onPhotoSelect?.(nextPhoto.id);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ...existing JSX content, remove types */}
    </div>
  );
};

export default GalleryDetailPage;
