import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FAQ_DATA } from '../constants';
import PageWrapper from '../components/PageWrapper';

const AccordionItem = ({ item, isOpen, onClick }) => (
  <div className="border-b border-[#3B82F6]/30">
    <button
      className="w-full text-left py-5 flex justify-between items-center"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <h3 className="font-semibold text-lg text-[#4C4A48]">{item.question}</h3>
      <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        <svg
          className="w-5 h-5 text-[#3B82F6]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </button>
    <div
      className={`grid transition-all duration-500 ease-in-out ${
        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
      }`}
    >
      <div className="overflow-hidden">
        <p className="text-gray-600 pt-2 pb-6 leading-relaxed">{item.answer}</p>
      </div>
    </div>
  </div>
);

const PricingFaqPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageWrapper className="bg-white">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#4C4A48] mb-4">Investment & FAQs</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          Transparent pricing for timeless memories, and answers to your common questions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div>
          <h2 className="text-3xl font-serif font-bold text-[#4C4A48] mb-6">Pricing</h2>
          <div className="bg-[#FFFBF5] p-8 rounded-lg border border-[#3B82F6]/30">
            <h3 className="text-2xl font-serif font-bold text-[#4C4A48] mb-4">Portrait Session</h3>
            <p className="text-4xl font-serif font-bold text-[#3B82F6] mb-6">$450</p>
            <ul className="text-gray-600 space-y-3">
              <li className="flex items-center">
                <span className="text-[#3B82F6] mr-2">✓</span> 1-hour photo session
              </li>
              <li className="flex items-center">
                <span className="text-[#3B82F6] mr-2">✓</span> Online gallery of 50+ edited images
              </li>
              <li className="flex items-center">
                <span className="text-[#3B82F6] mr-2">✓</span> Full printing rights
              </li>
              <li className="flex items-center">
                <span className="text-[#3B82F6] mr-2">✓</span> Choice of location (studio or outdoors)
              </li>
            </ul>
          </div>
          <p className="text-gray-600 mt-6">
            For detailed pricing on weddings, events, and commercial work, please get in touch for a custom quote.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block bg-[#3B82F6] text-white font-semibold py-3 px-8 rounded-full transition-transform duration-300 ease-in-out shadow-lg hover:scale-110"
          >
            Request a Custom Quote
          </Link>
        </div>
        <div>
          <h2 className="text-3xl font-serif font-bold text-[#4C4A48] mb-6">Frequently Asked Questions</h2>
          <div>
            {FAQ_DATA.map((item, index) => (
              <AccordionItem key={item.question} item={item} isOpen={openIndex === index} onClick={() => handleToggle(index)} />
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PricingFaqPage;

