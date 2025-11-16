import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

const ScaleContext = createContext(null);

export const useScale = () => {
  const context = useContext(ScaleContext);
  return context;
};

export const ScaleProvider = ({ children }) => {
  const [scaleFactor, setScaleFactor] = useState(1);
  const baseWidth = 1440;

  const calculateScale = useCallback(() => {
    const currentWidth = window.innerWidth;
    let scale = currentWidth / baseWidth;
    
    // For desktop/large screens (>= 1440px), always use scale 1.0 to maintain quality
    // Only scale down for smaller screens
    if (scale >= 1) {
      scale = 1; // Never scale above 1.0 to maintain perfect quality on desktop
    }
    
    // Set minimum scale to prevent too small rendering
    if (scale < 0.3) {
      scale = 0.3;
    }
    
    setScaleFactor(scale);
  }, []);

  useEffect(() => {
    // Calculate initial scale
    calculateScale();

    // Debounce resize handler
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        calculateScale();
      }, 16); // ~60fps
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, [calculateScale]);

  // Calculate the actual height needed after scaling and center the container
  // Pixel-perfect scaling: transform: scale() maintains exact positions, only changes size
  useEffect(() => {
    let resizeObserver = null;
    let timer = null;
    
    const updateHeightAndPosition = () => {
      const container = document.querySelector('[data-scale-container]');
      if (container) {
        // Get the actual content height (unscaled)
        const contentHeight = container.scrollHeight;
        const wrapper = container.parentElement;
        
        if (wrapper) {
          // Calculate the visual height after scaling
          const scaledHeight = contentHeight * scaleFactor;
          
          // Set wrapper height to the scaled height to prevent extra space
          wrapper.style.height = `${scaledHeight}px`;
          wrapper.style.minHeight = `${scaledHeight}px`;
          
          // Ensure container maintains its base width for pixel-perfect scaling
          container.style.width = `${baseWidth}px`;
          container.style.height = 'auto';
        }
      }
    };
    
    // Update height and position after render and when content changes
    timer = setTimeout(updateHeightAndPosition, 50);
    
    // Use ResizeObserver if available for real-time updates
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        updateHeightAndPosition();
      });
      const container = document.querySelector('[data-scale-container]');
      if (container) {
        resizeObserver.observe(container);
      }
    }
    
    window.addEventListener('resize', updateHeightAndPosition);
    
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener('resize', updateHeightAndPosition);
      if (resizeObserver) {
        const container = document.querySelector('[data-scale-container]');
        if (container) {
          resizeObserver.unobserve(container);
        }
        resizeObserver.disconnect();
      }
    };
  }, [scaleFactor, baseWidth]);

  // Wrapper style - pixel-perfect scaling wrapper
  const wrapperStyle = {
    width: '100vw',
    height: '100vh', // Will be updated by useEffect
    overflowX: 'hidden',
    overflowY: 'auto', // Allow scrolling
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  };

  // Container style - pixel-perfect scaling with exact positioning
  const containerStyle = {
    width: `${baseWidth}px`,
    minHeight: '100vh',
    transform: `scale(${scaleFactor})`,
    transformOrigin: 'top center', // Scale from top center for perfect centering
    position: 'relative',
    backgroundColor: 'white',
    // Pixel-perfect rendering
    imageRendering: 'crisp-edges',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    textRendering: 'optimizeLegibility',
    // Performance optimization
    willChange: scaleFactor < 1 ? 'transform' : 'auto',
    // Prevent layout shifts
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
  };

  return (
    <ScaleContext.Provider value={{ scaleFactor, baseWidth }}>
      <div style={wrapperStyle}>
        <div style={containerStyle} data-scale-container>
          {children}
        </div>
      </div>
    </ScaleContext.Provider>
  );
};

export default ScaleProvider;

