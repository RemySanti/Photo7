import React, { useState } from 'react';

const SessionsPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const packages = [
    {
      id: 'starter',
      name: 'Starter',
      price: 299,
      duration: '1 hour',
      sessions: 1,
      images: '20-30',
      features: ['One location', 'Digital gallery access', 'Professional editing', 'Print rights included'],
      popular: false,
    },
    {
      id: 'professional',
      name: 'Professional',
      price: 599,
      duration: '2 hours',
      sessions: 1,
      images: '50-75',
      features: [
        'Two locations',
        'Private online gallery',
        'Professional editing',
        'Print rights included',
        'Complimentary prints',
      ],
      popular: true,
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 999,
      duration: '4 hours',
      sessions: 1,
      images: '100-150',
      features: [
        'Unlimited locations',
        'Private online gallery',
        'Premium editing',
        'Print rights included',
        'Complimentary prints & canvas',
        'Video highlights reel',
      ],
      popular: false,
    },
  ];

  const sessionTypes = [
    {
      title: 'Portrait Sessions',
      description: 'Capture timeless portraits that showcase your personality and beauty.',
      image: '👤',
      includes: ['Individual or couple portraits', 'Professional makeup touch-ups', 'Outfit changes', 'Editing included'],
    },
    {
      title: 'Family Sessions',
      description: 'Create lasting memories with your loved ones in a comfortable, fun atmosphere.',
      image: '👨‍👩‍👧‍👦',
      includes: ['Full family coverage', 'Candid & posed shots', 'Multiple outfit changes', 'Professional editing'],
    },
    {
      title: 'Event Coverage',
      description: 'Professional photography for your special events and celebrations.',
      image: '🎉',
      includes: ['Full event coverage', 'Candid moments', 'Group photos', 'Fast turnaround delivery'],
    },
    {
      title: 'Engagement Sessions',
      description: 'Romantic photos to celebrate your upcoming wedding with an engaged couple.',
      image: '💍',
      includes: ['Multiple locations', 'Romantic setting guidance', 'Engagement album', 'Discount on wedding package'],
    },
    {
      title: 'Headshot Sessions',
      description: 'Professional headshots for LinkedIn, headshot reels, and professional branding.',
      image: '💼',
      includes: ['Multiple wardrobe options', 'Professional retouching', 'Digital gallery', 'Print-ready files'],
    },
    {
      title: 'Maternity Sessions',
      description: 'Celebrate your pregnancy with beautiful maternity photos.',
      image: '🤰',
      includes: ['Comfortable styling', 'Partner/family included', 'Beautiful backdrops', 'Professional editing'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-black text-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Photography Sessions</h1>
          <p className="text-xl text-gray-300">
            Professional photo sessions and pricing packages tailored to your needs
          </p>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Session Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sessionTypes.map((session) => (
              <div key={session.title} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-5xl mb-4">{session.image}</div>
                <h3 className="text-2xl font-bold mb-2">{session.title}</h3>
                <p className="text-gray-600 mb-4">{session.description}</p>
                <ul className="space-y-2">
                  {session.includes.map((item) => (
                    <li key={item} className="flex items-center text-sm text-gray-700">
                      <span className="mr-2 text-green-600">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Pricing Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-lg overflow-hidden transition-all duration-300 ${
                  pkg.popular ? 'shadow-2xl transform md:scale-105 ring-2 ring-black' : 'shadow-lg'
                } ${selectedPlan === pkg.id ? 'ring-2 ring-black' : ''}`}
              >
                {pkg.popular && <div className="bg-black text-white text-center py-2 font-bold">MOST POPULAR</div>}
                <div className="bg-white p-8">
                  <h3 className="text-3xl font-bold mb-2">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold">${pkg.price}</span>
                    <p className="text-gray-600 text-sm">{pkg.duration} session</p>
                  </div>

                  <div className="mb-8 space-y-3 text-gray-700">
                    <p>
                      <strong>{pkg.images}</strong> edited photos
                    </p>
                    <p>
                      <strong>{pkg.sessions}</strong> session included
                    </p>
                    <div className="border-t border-gray-200 pt-4 space-y-2">
                      {pkg.features.map((feature) => (
                        <div key={feature} className="flex items-start">
                          <span className="mr-2 text-green-600">✓</span>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedPlan(pkg.id)}
                    className={`w-full py-3 rounded-lg font-bold transition-colors ${
                      pkg.popular ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-100 text-black hover:bg-gray-200'
                    }`}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Extended Hours</h3>
              <p className="text-gray-600 mb-4">Need more time? Add extra hours to any session.</p>
              <p className="text-2xl font-bold">$150/hour</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Extra Photos</h3>
              <p className="text-gray-600 mb-4">Additional edited photos beyond your package.</p>
              <p className="text-2xl font-bold">$10/photo</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Drone Photography</h3>
              <p className="text-gray-600 mb-4">Aerial shots for events, real estate, or creative sessions.</p>
              <p className="text-2xl font-bold">$250+</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Makeup Artist</h3>
              <p className="text-gray-600 mb-4">Professional makeup for portrait and event sessions.</p>
              <p className="text-2xl font-bold">$100</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Book Your Session?</h2>
          <p className="text-lg text-gray-300 mb-8">Get in touch to schedule your photography session today!</p>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Contact Me
          </button>
        </div>
      </section>
    </div>
  );
};

export default SessionsPage;

