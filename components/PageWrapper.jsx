import React from 'react';

const PageWrapper = ({ children, className = '' }) => {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

export default PageWrapper;
