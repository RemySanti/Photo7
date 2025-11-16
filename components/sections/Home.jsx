import React from 'react';

const Home = () => (
  <section className="h-screen bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('https://picsum.photos/id/1018/1920/1080')" }}>
    <div className="bg-black/50 p-12 rounded-lg text-center backdrop-blur-sm">
      <h1 className="text-6xl font-serif font-bold tracking-wider mb-4">Lens & Light</h1>
      <p className="text-xl font-light">Capturing life's precious moments, one frame at a time.</p>
      <a href="#contact" className="mt-8 inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg">
        Book a Session
      </a>
    </div>
  </section>
);

export default Home;
