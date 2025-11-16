import React from 'react';

const About = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2">
        <img src="https://picsum.photos/id/1027/600/800" alt="Photographer portrait" className="rounded-lg shadow-2xl w-full" />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-4xl font-serif font-bold text-stone-800 mb-4">Who I Am</h2>
        <p className="text-stone-600 mb-4 leading-relaxed">
          Hello! I'm Alex, a passionate photographer with a love for storytelling. My journey began with a simple film camera, and since then, I've been captivated by the power of a photograph to preserve a fleeting moment, evoke emotion, and tell a story without words.
        </p>
        <p className="text-stone-600 mb-6 leading-relaxed">
          I believe in creating a comfortable and fun atmosphere during my sessions, allowing your true personality to shine through. My goal is to create not just beautiful pictures, but cherished memories that you'll look back on for a lifetime.
        </p>
        <a href="#photography" className="bg-stone-800 hover:bg-stone-900 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300">
          See My Work
        </a>
      </div>
    </div>
  </section>
);

export default About;
