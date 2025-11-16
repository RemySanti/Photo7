import React, { useState, useRef, useEffect } from 'react';

const ImageEditor = ({ isActive, onImageChange }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!isActive) {
      setSelectedImage(null);
      return;
    }

    const handleImageClick = (e) => {
      // Don't edit if clicking on admin UI elements
      if (e.target.closest('.admin-ui-element') || 
          e.target.closest('button') || 
          e.target.closest('a') ||
          e.target.closest('nav') ||
          e.target.closest('header') ||
          e.target.closest('footer')) {
        return;
      }

      // Check if clicked element is an image
      let target = e.target;
      if (target.tagName === 'IMG') {
        setSelectedImage({
          element: target,
          src: target.src,
          alt: target.alt || '',
        });
        e.stopPropagation();
        e.preventDefault();
      }
    };

    const handleImageHover = (e) => {
      if (e.target.tagName === 'IMG' && !e.target.closest('.admin-ui-element')) {
        const img = e.target;
        const parent = img.parentElement;
        if (parent && !parent.querySelector('.admin-image-overlay')) {
          const overlay = document.createElement('div');
          overlay.className = 'admin-image-overlay';
          overlay.style.cssText = 'position: absolute; inset: 0; background: rgba(0, 0, 0, 0.6); display: flex; align-items: center; justify-content: center; color: white; font-size: 12px; font-weight: bold; pointer-events: none; z-index: 10000; border: 2px dashed rgba(255, 255, 255, 0.8);';
          overlay.textContent = 'Click to change image';
          if (getComputedStyle(parent).position === 'static') {
            parent.style.position = 'relative';
          }
          parent.appendChild(overlay);
        }
      }
    };

    const handleImageLeave = (e) => {
      if (e.target.tagName === 'IMG') {
        const parent = e.target.parentElement;
        if (parent) {
          const overlay = parent.querySelector('.admin-image-overlay');
          if (overlay) overlay.remove();
        }
      }
    };

    document.addEventListener('click', handleImageClick, true);
    document.addEventListener('mouseenter', handleImageHover, true);
    document.addEventListener('mouseleave', handleImageLeave, true);

    return () => {
      document.removeEventListener('click', handleImageClick, true);
      document.removeEventListener('mouseenter', handleImageHover, true);
      document.removeEventListener('mouseleave', handleImageLeave, true);
    };
  }, [isActive]);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && selectedImage) {
      const reader = new FileReader();
      reader.onload = (event) => {
        selectedImage.element.src = event.target.result;
        if (onImageChange) {
          onImageChange({
            oldSrc: selectedImage.src,
            newSrc: event.target.result,
            element: selectedImage.element,
          });
        }
        setSelectedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!selectedImage) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[10002] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <h3 className="text-xl font-bold mb-4">Change Image</h3>
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">Current Image:</p>
          <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full h-32 object-contain border rounded" />
        </div>
        <div className="space-y-4">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Upload New Image
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;

