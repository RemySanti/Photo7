import React, { useEffect, useRef, useState } from 'react';

const VideoBackground = ({ src, opacity = 0.2 }) => {
  const videoRef = useRef(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = 'metadata';
    const handleError = () => {
      setHasError(true);
    };
    const handleLoadedMetadata = () => {
      video.play().catch(() => {});
    };
    video.addEventListener('error', handleError);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.load();
    return () => {
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      opacity: opacity,
      pointerEvents: 'none',
      overflow: 'hidden',
      background: hasError 
        ? 'linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%)'
        : 'transparent'
    }}>
      <video
        ref={videoRef}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          background: 'transparent'
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
