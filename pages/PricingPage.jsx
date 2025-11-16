import React from 'react';

const PricingPage = () => {
  const pricingPackages = [
    {
      name: 'The Signature Portrait Experience',
      price: '$675',
      duration: 'Starting at',
      description: 'Perfect for families, couples, or maternity sessions who want a complete storytelling experience.',
      features: [
        'Up to 1 hour of session time',
        '25–30 edited images delivered via online gallery',
        'Styling guidance + location planning',
      ],
      featured: true,
      popular: true,
    },
    {
      name: 'The Keepsake Collection',
      price: '$925',
      duration: 'Starting at',
      description: 'Designed for newborns and milestone sessions, capturing your family\'s newest chapter. Ideal for expecting moms, growing families, and couples wanting a deeper, more styled session.',
      features: [
        'Up to 2 hours in-studio (with flexibility for feedings + soothing)',
        '2 outfit changes',
        '30–40 edited images',
        '$50 print credit toward albums or wall art',
        'Use of studio props and wraps',
      ],
      featured: false,
      popular: false,
    },
    {
      name: 'The Mini Story Session',
      price: '$350',
      duration: 'Starting at',
      description: 'Ideal for quick updates or seasonal moments — perfect for families, kids, or couples wanting a smaller collection.',
      features: [
        '25 minutes of session time',
        '15 edited images',
        'One location',
      ],
      featured: false,
      popular: false,
    },
  ];

  const addOns = [
    {
      icon: '📸',
      title: 'Additional Images',
      price: '$25 each',
      description: 'Add more images to your gallery',
    },
    {
      icon: '🖼️',
      title: 'Photo Album',
      price: 'Starting at $350',
      description: 'Handcrafted heirloom albums',
    },
    {
      icon: '🖼️',
      title: 'Canvas Print',
      price: 'Starting at $175',
      description: 'Gallery-quality canvas prints',
    },
    {
      icon: '📍',
      title: 'Travel Outside Lehigh Valley',
      price: 'Custom quote',
      description: 'Available for destination sessions',
    },
  ];

  const includedFeatures = [
    {
      title: 'Pre-Session Consultation',
      description: 'Phone or Zoom call to plan your vision and styling',
    },
    {
      title: 'Guided Photoshoot',
      description: 'Relaxed session in studio or on location',
    },
    {
      title: 'Online Gallery',
      description: 'Private gallery of professionally edited, high-resolution images',
    },
    {
      title: 'Print Release',
      description: 'Full print release + access to professional print options',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Elegant & Modern */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-6 font-semibold">Investment</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-black leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            More Than a Photo Session
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-6 leading-relaxed max-w-3xl mx-auto">
            It's Your Legacy in Focus
          </p>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Jinette Ramos Photography, your investment goes far beyond beautiful images. It's about capturing the stories, emotions, and milestones that make your life uniquely yours.
          </p>
        </div>
      </section>

      {/* What's Included - Clean Grid */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-4 font-semibold">Every Session Includes</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              What's Included
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every portrait experience comes with these essentials
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {includedFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-black mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">Optional heirloom albums, wall art, and canvas upgrades available</p>
          </div>
        </div>
      </section>

      {/* Pricing Packages - Modern Card Design */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-4 font-semibold">Choose Your Experience</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Session Options
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
            {pricingPackages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
                  pkg.popular
                    ? 'lg:scale-105 shadow-2xl border-2 border-black'
                    : 'shadow-lg border border-gray-200 hover:shadow-xl'
                } ${pkg.popular ? 'bg-gradient-to-br from-black via-gray-900 to-black text-white' : 'bg-white text-gray-900'}`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 px-4">
                    <span className="text-xs font-bold uppercase tracking-wider">Most Popular</span>
                  </div>
                )}
                
                <div className={`p-8 sm:p-10 ${pkg.popular ? 'pt-14' : ''}`}>
                  {/* Package Header */}
                  <div className="text-center mb-8">
                    <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${pkg.popular ? 'text-white' : 'text-black'}`} style={{ fontFamily: "'Playfair Display', serif" }}>
                      {pkg.name}
                    </h3>
                    <p className={`text-sm mb-4 ${pkg.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                      {pkg.duration}
                    </p>
                    <div className="mb-6">
                      <span className={`text-5xl sm:text-6xl font-bold ${pkg.popular ? 'text-white' : 'text-black'}`} style={{ fontFamily: "'Playfair Display', serif" }}>
                        {pkg.price}
                      </span>
                    </div>
                    {pkg.description && (
                      <p className={`text-sm leading-relaxed ${pkg.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                        {pkg.description}
                      </p>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-10">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <span className={`flex-shrink-0 mt-1 ${pkg.popular ? 'text-purple-400' : 'text-black'}`}>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className={`text-sm leading-relaxed ${pkg.popular ? 'text-gray-200' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 px-6 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl hover:scale-105'
                        : 'bg-black hover:bg-gray-800 text-white shadow-md hover:shadow-lg hover:scale-105'
                    }`}
                  >
                    Book This Session
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons Section - Elegant Design */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-4 font-semibold">Enhance Your Experience</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Add-On Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Available with any package to customize your experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {addOns.map((addOn, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-start gap-5">
                  <div className="text-4xl sm:text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {addOn.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <h3 className="font-bold text-xl text-black">{addOn.title}</h3>
                      <span className="text-lg font-semibold text-black whitespace-nowrap">{addOn.price}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{addOn.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Begin Your Story?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's create something beautiful together. Contact me to discuss your vision and book your session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+14842745444"
              className="inline-block bg-white text-black font-bold py-4 px-8 sm:px-12 rounded-xl hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105"
            >
              Call (484) 274-5444
            </a>
            <a
              href="mailto:info@jinetteramos.com"
              className="inline-block border-2 border-white text-white font-bold py-4 px-8 sm:px-12 rounded-xl hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider text-sm sm:text-base"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
