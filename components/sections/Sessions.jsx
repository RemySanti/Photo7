import React from 'react';

const Sessions = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-serif font-bold text-stone-800 mb-4 text-center">Session Types</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-stone-100 rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Studio</h3>
          <p className="text-stone-600">Classic studio sessions with professional lighting and backdrops. Perfect for headshots, portraits, and creative shoots.</p>
        </div>
        <div className="bg-stone-100 rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Outdoor</h3>
          <p className="text-stone-600">Natural light sessions in beautiful outdoor locations. Great for families, couples, and seniors.</p>
        </div>
        <div className="bg-stone-100 rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">On Location</h3>
          <p className="text-stone-600">Sessions at your home, office, or a special place. Flexible and personalized to your needs.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Sessions;
