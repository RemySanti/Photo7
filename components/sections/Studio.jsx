import React from 'react';

const Studio = () => (
  <section className="py-20 bg-stone-800 text-white">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-serif font-bold mb-4 text-center">The Studio</h2>
      <div className="max-w-3xl mx-auto">
        <p className="mb-6 text-stone-200 text-center">
          My studio is a creative space designed for comfort and inspiration. With professional lighting, a variety of backdrops, and a relaxed atmosphere, it's the perfect place to bring your vision to life.
        </p>
        <ul className="list-disc list-inside text-stone-300 mb-6">
          <li>Professional lighting equipment</li>
          <li>Multiple backdrops and props</li>
          <li>Changing area and refreshments</li>
          <li>Convenient location with parking</li>
        </ul>
        <p className="text-center">
          <a href="#contact" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg">
            Schedule a Studio Session
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default Studio;
