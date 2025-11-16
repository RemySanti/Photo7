import React, { useState } from 'react';

const ContactPage = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => {
      setStatus("Thank you! Your message has been sent. I'll get back to you soon!");
      e.target.reset();
      setTimeout(() => setStatus(''), 4000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-[50vh] sm:min-h-[60vh] bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Phone and Email - Above Get In Touch */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
            {/* Direct Call */}
            <div className="text-center">
              <div className="mb-4 sm:mb-6 flex justify-center">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-black">Call Me</h3>
              <a href="tel:+14842745444" className="text-xl sm:text-2xl font-bold text-black hover:text-gray-600 transition-colors">
                (484) 274-5444
              </a>
              <p className="text-gray-500 text-xs sm:text-sm mt-2">Mon-Fri, 9am-5pm</p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="mb-4 sm:mb-6 flex justify-center">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-black">Email Me</h3>
              <a href="mailto:info@jinetteramos.com" className="text-lg sm:text-xl font-bold text-black hover:text-gray-600 transition-colors break-all">
                info@jinetteramos.com
              </a>
              <p className="text-gray-500 text-xs sm:text-sm mt-2">I respond within 24 hours</p>
            </div>
          </div>

          {/* Get In Touch Section */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-widest font-semibold mb-4 sm:mb-6">Get In Touch</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-black">
              Let's <span className="italic">Connect</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
              Ready to capture your story? I'd love to hear about your photography needs and discuss how we can create something beautiful together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 space-y-3 sm:space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Start the conversation</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">Tell me about your vision</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Share the details of your session, timeline, or creative brief. I respond to every inquiry within one business day.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-0 py-3 sm:py-4 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-black transition-colors text-base sm:text-lg placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-0 py-3 sm:py-4 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-black transition-colors text-base sm:text-lg placeholder-gray-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full px-0 py-3 sm:py-4 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-black transition-colors text-base sm:text-lg placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Preferred Session Date"
                  className="w-full px-0 py-3 sm:py-4 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-black transition-colors text-base sm:text-lg placeholder-gray-400"
                />
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="What can I help you with?"
                required
                className="w-full px-0 py-3 sm:py-4 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-black transition-colors text-base sm:text-lg placeholder-gray-400"
              />
            </div>

            <div>
              <textarea
                placeholder="Share your story, inspiration, or project details..."
                rows={6}
                required
                className="w-full px-0 py-3 sm:py-4 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-black transition-colors text-base sm:text-lg placeholder-gray-400 resize-none"
              ></textarea>
            </div>

            <div className="pt-6 sm:pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-black text-white font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-none hover:bg-gray-900 transition-colors duration-200 uppercase tracking-widest text-sm sm:text-base md:text-lg border-2 border-black hover:border-gray-900 w-full md:w-auto"
              >
                Send Message
              </button>
              {status && (
                <p
                  className={`text-center md:text-left font-semibold text-base ${
                    status.includes('Thank you') ? 'text-green-600' : 'text-blue-600'
                  }`}
                >
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Location Section */}
      <section className="pb-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-black">Location</h3>
              <p className="text-xl font-bold text-black flex items-center gap-2 justify-center">
                Allentown, Pennsylvania<br />
                <img 
                  src="/images/american-flag.svg" 
                  alt="US Flag" 
                  className="w-6 h-4 object-contain inline-block"
                  style={{ imageRendering: 'high-quality' }}
                />
                <span className="text-red-600 font-semibold">US</span>
              </p>
              <p className="text-gray-500 text-sm mt-2">Available for travel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Tell Your Story Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Let's Tell Your Story</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Every story is different — and every season is sacred. Whether you're celebrating new life, family milestones, or simply wanting to remember this chapter you're in, I'd be honored to capture it.
          </p>
          <button
            onClick={() => {
              const event = new CustomEvent('navigate', { detail: { page: 'Contact' } });
              window.dispatchEvent(event);
            }}
            className="inline-block bg-black text-white font-bold py-4 px-12 rounded-none hover:bg-gray-800 transition-colors duration-200 uppercase tracking-widest text-lg border-2 border-black hover:border-gray-800"
          >
            Book Your Session
          </button>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Something Beautiful?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Whether you have questions or want to book a session, I'm here to help. Let's start a conversation about your photography vision.
          </p>
          <a 
            href="tel:+14842745444"
            className="inline-block bg-white text-black font-bold py-4 px-12 rounded-none hover:bg-gray-200 transition-colors duration-200 uppercase tracking-widest text-lg border-2 border-white hover:border-gray-200"
          >
            Call Now: (484) 274-5444
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
