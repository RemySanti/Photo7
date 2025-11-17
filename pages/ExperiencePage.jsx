import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper.jsx';

const Section = ({ title, children, image, reverse = false }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div className={reverse ? 'md:order-2' : 'md:order-1'}>
      <img src={image} alt={title} className="w-full h-auto object-cover shadow-xl" />
    </div>
    <div className={`prose max-w-none text-gray-700 leading-relaxed ${reverse ? 'md:order-1' : 'md:order-2'}`}>
      <h2 className="text-4xl font-serif text-black">{title}</h2>
      {children}
    </div>
  </div>
);

const ExperiencePage = () => (
  <PageWrapper className="bg-white">
    <div className="text-center max-w-3xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-serif mb-6">The Experience</h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        Every session is a unique experience, thoughtfully tailored to capture your story. From our first chat to the final gallery delivery, I am dedicated to creating a comfortable, joyful, and seamless process for you.
      </p>
    </div>
    <div className="mt-24 space-y-24">
      <Section title="Portrait Sessions" image="https://picsum.photos/id/237/800/1000">
        <p>Individual, couple, or family portraits that capture your essence. Perfect for milestones, engagements, or just because. We'll work together to choose the perfect location that reflects your personality and style.</p>
        <ul className="mt-4 list-disc pl-5">
          <li>Pre-session consultation & style guidance</li>
          <li>Up to 90 minutes of shooting time</li>
          <li>Private online gallery for viewing and sharing</li>
        </ul>
      </Section>
      <Section title="Weddings & Events" image="https://picsum.photos/id/250/800/1000" reverse>
        <p>From intimate gatherings to large celebrations, I'll document the moments that matter, allowing you to relive them forever. My approach is to blend in, capturing candid emotions and beautiful details without being intrusive.</p>
        <ul className="mt-4 list-disc pl-5">
          <li>Custom timeline planning</li>
          <li>Coverage options from 6 hours to full day</li>
          <li>Second photographer available</li>
        </ul>
      </Section>
      <Section title="What's Included" image="https://picsum.photos/id/367/800/1000">
        <p>Beyond just taking photos, I provide a full-service experience to ensure you love your images for a lifetime.</p>
        <ul className="mt-4 list-disc pl-5 space-y-2">
          <li><strong>Digital Galleries:</strong> Receive a beautiful, private online gallery to view, share, and download your high-resolution images.</li>
          <li><strong>Professional Prints:</strong> Order high-quality prints, canvases, and albums directly from your gallery.</li>
          <li><strong>Expert Retouching:</strong> Professional, natural-looking retouching is included to ensure every photo looks its best.</li>
        </ul>
      </Section>
    </div>
    <div className="text-center mt-24">
      <Link to="/contact" className="inline-block bg-black text-white font-semibold tracking-widest uppercase py-3 px-10 transition-all duration-300 hover:bg-gray-700">
        Book Your Session
      </Link>
    </div>
  </PageWrapper>
);

export default ExperiencePage;
