import React from 'react';

const Services = () => (
  <section className="py-20 bg-stone-100">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-serif font-bold text-stone-800 mb-4 text-center">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Portraits</h3>
          <p className="text-stone-600">Individual, family, and group portraits in studio or on location. Capturing your unique personality and style.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Events</h3>
          <p className="text-stone-600">Weddings, parties, and special occasions. Documenting your most important moments with creativity and care.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Commercial</h3>
          <p className="text-stone-600">Branding, product, and business photography to help your brand stand out and connect with your audience.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
