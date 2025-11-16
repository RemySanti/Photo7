import React from 'react';

const PricingFAQ = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-serif font-bold text-stone-800 mb-4 text-center">Pricing & FAQ</h2>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">How much do sessions cost?</h3>
          <p className="text-stone-600">Session pricing starts at $250. Packages vary based on session type, location, and duration. Contact me for a custom quote!</p>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">What is included in a session?</h3>
          <p className="text-stone-600">All sessions include a pre-session consultation, the photo shoot, and a private online gallery for viewing and downloading your images.</p>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">How do I book?</h3>
          <p className="text-stone-600">Simply fill out the contact form or email me directly. We'll discuss your needs and find the perfect time for your session.</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">What is your cancellation policy?</h3>
          <p className="text-stone-600">Cancellations made at least 48 hours in advance will receive a full refund. Please contact me as soon as possible if you need to reschedule.</p>
        </div>
      </div>
    </div>
  </section>
);

export default PricingFAQ;
