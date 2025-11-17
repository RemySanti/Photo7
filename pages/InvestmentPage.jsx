import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FAQ_DATA } from '../constants';
import PageWrapper from '../components/PageWrapper';

const AccordionItem = ({ item, isOpen, onClick }) => (
  <div className="border-b border-gray-200 py-4">
    <button
      className="w-full text-left flex justify-between items-start text-lg"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <h3 className="font-semibold text-black pr-4">{item.question}</h3>
      <span className="text-xl text-gray-500 transform transition-transform duration-300 flex-shrink-0">
        {isOpen ? '−' : '+'}
      </span>
    </button>
    <div
      className={`grid transition-all duration-500 ease-in-out ${
        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
      }`}
    >
      <div className="overflow-hidden">
        <p className="text-gray-700 pt-4 leading-relaxed pr-8">{item.answer}</p>
      </div>
    </div>
  </div>
);

const InvestmentPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageWrapper className="bg-white">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif mb-6">Investment</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Investing in professional photography is an investment in your memories. I offer several packages and am
          happy to create a custom collection to perfectly fit your needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-20 items-start mt-24">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-serif mb-6">Session Pricing</h2>
          <div className="border border-gray-200 p-8">
            <h3 className="text-2xl font-serif mb-2">Portrait Collections</h3>
            <p className="text-gray-700 mb-4">Starting at</p>
            <p className="text-5xl font-serif mb-6">$450</p>
            <p className="text-gray-700 mt-6 mb-6">
              For detailed pricing on weddings and events, please get in touch for my full investment guide.
            </p>
            <Link
              to="/contact"
              className="inline-block text-black font-semibold tracking-widest uppercase border-b-2 border-black pb-1 hover:opacity-70 transition-opacity"
            >
              Request a Quote
            </Link>
          </div>
        </div>
        <div className="md:col-span-3">
          <h2 className="text-3xl font-serif mb-6">Frequently Asked Questions</h2>
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

export default InvestmentPage;

