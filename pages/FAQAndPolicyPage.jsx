import React, { useState } from 'react';

const FAQAndPolicyPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'When should I book my session?',
      answer: 'The sooner, the better! Most sessions are booked 4–6 weeks in advance. For newborn or maternity sessions, I recommend booking early in your pregnancy to secure your preferred date.'
    },
    {
      question: 'Where do sessions take place?',
      answer: 'Sessions can be held in my Lehigh Valley studio or at an outdoor location of your choice. I\'ll help you choose a setting that reflects your story, whether it\'s cozy and intimate indoors or light-filled and natural outdoors.'
    },
    {
      question: 'Do you offer wardrobe or styling help?',
      answer: 'Absolutely! Every session includes styling guidance. I\'ll help you choose colors, textures, and outfits that photograph beautifully and match the tone of your session — especially if you love that subtle editorial feel.'
    },
    {
      question: 'How do I book a session?',
      answer: 'Simply click "Book Your Session" on the site or fill out the inquiry form. Once your session details are confirmed, a retainer and signed agreement are required to secure your date.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'All payments are handled securely through my booking platform. I accept major credit cards and digital payments. Your non-refundable retainer is due at booking, with the remaining balance due one day before your session.'
    },
    {
      question: 'What happens if it rains or I need to reschedule?',
      answer: 'Life happens — and weather doesn\'t always cooperate! Outdoor sessions will be rescheduled at no cost due to inclement weather. If you need to reschedule for personal reasons, please do so at least 48 hours in advance so we can move your session without penalty.'
    },
    {
      question: 'What if I\'m running late?',
      answer: 'I completely understand that things come up! However, out of respect for other clients, your session will end at the originally scheduled time. If you\'re running more than 15 minutes late, your session may need to be rescheduled and a rescheduling fee may apply.'
    },
    {
      question: 'When will I receive my images?',
      answer: 'You\'ll receive your online gallery within 1–2 weeks after your session. Each image is hand-edited with care to ensure quality and consistency that reflects my editorial style.'
    },
    {
      question: 'How many photos do I get?',
      answer: 'Each package includes a set number of images (see the Investment page for details). You\'ll also have the option to purchase additional images, albums, or wall art.'
    },
    {
      question: 'Can I share my photos on social media?',
      answer: 'Yes! I love when clients share their images. I only ask that you credit @jinetteramosphotography when posting. For commercial use or publications, please contact me for a release or licensing agreement.'
    },
    {
      question: 'What\'s your cancellation policy?',
      answer: 'Retainers are non-refundable since they reserve your session date and time. If you need to cancel, your payment can be transferred to a future session within 90 days, as long as you notify me in advance.'
    },
    {
      question: 'Do you photograph events or weddings?',
      answer: 'I currently specialize in portrait photography — families, maternity, newborns, couples, and graduates. However, I occasionally accept intimate weddings and elopements (under 80 guests) upon request.'
    },
    {
      question: 'What makes your work different?',
      answer: 'My photography blends authenticity, and editorial artistry. Each session is more than a shoot, it\'s an experience meant to uplift, connect, and remind you that you are wonderfully made.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden bg-white">
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <p className="text-xs uppercase tracking-[0.4em] text-black mb-4 font-semibold">Studio Policies</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-black max-w-2xl mx-auto">
            Because every great experience starts with clarity and care.
          </p>
        </div>
      </section>

      {/* FAQ Section - Collapsible Accordion */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
              Common Questions
            </h2>
            <p className="text-black">Click on any question to reveal the answer</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left group hover:bg-gray-50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-black pr-4 group-hover:text-gray-800 transition-colors">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-black transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 sm:px-8 pb-5 sm:pb-6 pt-0">
                    <p className="text-black leading-relaxed text-base sm:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-white">
        <div className="relative max-w-4xl mx-auto z-10">
          <div className="bg-gray-50 p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
              Final Note
            </h2>
            <p className="text-base sm:text-lg text-black leading-relaxed">
              Every session is personal to me — it's not just about taking pictures but about telling your story through emotion. My goal is that when you look at your photos, you feel seen, valued, and reminded of God's goodness in your life.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQAndPolicyPage;
