import React from 'react';

const StudioPage = () => {
  const amenities = [
    { icon: '💡', title: 'Professional Lighting', description: 'State-of-the-art lighting equipment for perfect exposure and mood' },
    { icon: '🎨', title: 'Multiple Backdrops', description: 'Variety of backgrounds from minimalist to elaborate' },
    { icon: '❄️', title: 'Climate Controlled', description: 'Comfortable temperature year-round' },
    { icon: '🛋️', title: 'Comfortable Seating', description: 'Lounge area for clients to relax between shots' },
    { icon: '☕', title: 'Refreshments', description: 'Coffee, tea, and water available for guests' },
    { icon: '🎭', title: 'Makeup Station', description: 'Professional makeup artist services available' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Welcome to</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">The Studio</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A light-filled, creative space designed for comfort and versatility. The perfect environment to bring your photography vision to life.
          </p>
        </div>
      </section>

      {/* Studio Spaces Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Our Spaces</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Two distinct studio environments, each designed to create stunning photography
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="group">
              <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
                <div className="relative h-96 overflow-hidden">
                  <img
                    src="/images/Pictures/DSC00207.jpg"
                    alt="Main studio"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="p-8 bg-white">
                  <h3 className="text-3xl font-bold mb-3 text-black">Main Studio</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our primary shooting space features adjustable professional lighting systems and multiple backdrop options. 
                    Perfect for portrait sessions, headshots, and commercial photography.
                  </p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
                <div className="relative h-96 overflow-hidden">
                  <img
                    src="/images/Pictures/DSC00790.jpg"
                    alt="Natural light studio"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="p-8 bg-white">
                  <h3 className="text-3xl font-bold mb-3 text-black">Natural Light Studio</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    A dedicated space featuring large north-facing windows and professional reflectors. 
                    Ideal for soft, flattering natural light photography and lifestyle sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Studio Amenities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for a comfortable and productive photography session
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {amenities.map((amenity) => (
              <div key={amenity.title} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-6xl mb-6">{amenity.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-black">{amenity.title}</h3>
                <p className="text-gray-600 leading-relaxed">{amenity.description}</p>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="inline-block">
              <button 
                className="animated-gradient-btn text-lg px-12 py-4"
                onClick={() => {
                  const contactSection = document.querySelector('[data-page="Contact"]');
                  if (contactSection) {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setTimeout(() => {
                      const event = new CustomEvent('navigate', { detail: 'Contact' });
                      window.dispatchEvent(event);
                    }, 100);
                  }
                }}
              >
                Book a Session
              </button>
            </div>
            <p className="mt-6 text-gray-600">
              Ready to create something beautiful? Let's discuss your photography needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudioPage;

