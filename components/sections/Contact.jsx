import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Message sent successfully!');
      e.target.reset();
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-stone-800 text-stone-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center mb-4">Contact Me</h2>
        <p className="text-center text-stone-300 max-w-2xl mx-auto mb-12">
          Ready to capture some beautiful memories? I'd love to hear from you. Fill out the form below or reach out via email.
        </p>
        <div className="max-w-2xl mx-auto bg-stone-900/50 p-8 rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input type="text" placeholder="Your Name" required className="w-full bg-stone-700 text-stone-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition" />
              <input type="email" placeholder="Your Email" required className="w-full bg-stone-700 text-stone-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition" />
            </div>
            <div className="mb-6">
              <input type="text" placeholder="Subject" required className="w-full bg-stone-700 text-stone-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition" />
            </div>
            <div className="mb-6">
              <textarea placeholder="Your Message" rows={5} required className="w-full bg-stone-700 text-stone-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-12 rounded-full transition-all duration-300 shadow-lg">
                Send Message
              </button>
            </div>
          </form>
          {status && <p className="text-center mt-4 text-amber-400">{status}</p>}
        </div>
        <div className="text-center mt-12 text-stone-400">
          <p>Email: <a href="mailto:hello@lensandlight.com" className="hover:text-amber-400 transition">hello@lensandlight.com</a></p>
          <p>Phone: (555) 123-4567</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
