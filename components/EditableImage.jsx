import React, { useState, useRef } from 'react';

const EditableImage = ({ 
  src, 
  alt, 
  isAdmin, 
  onImageChange,
  className = '',
  style = {},
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef(null);

  const handleClick = (e) => {
    if (isAdmin && !isEditing) {
      e.stopPropagation();
      fileInputRef.current?.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newSrc = event.target.result;
        setImageSrc(newSrc);
        if (onImageChange) {
          onImageChange(newSrc, file);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`relative ${isAdmin ? 'group' : ''}`}>
      <img
        src={imageSrc}
        alt={alt}
        className={`${className} ${isAdmin ? 'cursor-pointer hover:opacity-80' : ''}`}
        style={style}
        onClick={handleClick}
        {...props}
      />
      {isAdmin && (
        <>
          <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold">
              Click to Replace Image
            </span>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </>
      )}
    </div>
  );
};

export default EditableImage;

