import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

const SEOLandingPage = ({ serviceType }) => {
  const { city } = useParams();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Map service types to display names
  const serviceDisplayNames = {
    'family-photography': 'Family Photography',
    'maternity-newborn-photographer': 'Maternity & Newborn Photography',
    'senior-portraits': 'Senior Portrait Photography',
    'engagement-photography': 'Engagement & Couples Photography',
    'mini-session-photography': 'Seasonal Mini Session Photography',
    'professional-headshots': 'Professional Headshots & Branding Photography',
  };

  const serviceName = serviceDisplayNames[serviceType] || serviceType;
  
  // Format city name for display (e.g., "bethlehem-pa" -> "Bethlehem, PA")
  const formatCityName = (citySlug) => {
    if (!citySlug) return '';
    const parts = citySlug.split('-');
    if (parts.length < 2) return citySlug;
    
    const cityName = parts.slice(0, -1).map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    const state = parts[parts.length - 1].toUpperCase();
    
    return `${cityName}, ${state}`;
  };

  const cityName = formatCityName(city);

  useEffect(() => {
    // In a production app, you would fetch the markdown content here
    // For now, we'll create a placeholder
    const loadContent = async () => {
      try {
        setLoading(false);
        // Placeholder content - in production, you'd parse the markdown file
        setContent({
          h1: `${serviceName} in ${cityName}`,
          metaDescription: `Professional ${serviceName.toLowerCase()} in ${cityName}. Capturing authentic moments with warmth and artistry. Book your session with Jinette Ramos Photography today.`,
        });
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadContent();
  }, [serviceType, city]);

  if (loading) {
    return (
      <PageWrapper>
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </PageWrapper>
    );
  }

  if (error) {
    return (
      <PageWrapper>
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">{error}</p>
          <Link to="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {content?.h1 || `${serviceName} in ${cityName}`}
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-gray-800 via-gray-600 to-transparent mb-8"></div>
        </div>

        {/* Intro Section */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            When you're looking for a {serviceName.toLowerCase()} in {cityName}, you want someone who sees beyond the surface—someone who captures emotion, connection, and the authentic beauty of your story. That's what I do. I'm Jinette Ramos, a portrait photographer serving {cityName} and the surrounding Lehigh Valley with warmth, professionalism, and a modern artistic approach.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Your session should feel natural, comfortable, and even fun. I'll handle all the technical details while creating space for genuine moments to unfold. From the first inquiry to final gallery delivery, you'll experience attentive, personalized service every step of the way.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Ready to book your session?{' '}
            <Link to="/contact" className="text-blue-600 hover:underline font-semibold">
              Get in touch
            </Link>{' '}
            and let's start planning your perfect {serviceName.toLowerCase()} experience in {cityName}.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Why Choose Us for {serviceName} in {cityName}
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">✓</span>
              <div>
                <strong className="text-gray-900">Modern, timeless style</strong> – Images that feel current and beautiful today, but won't look dated in twenty years.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">✓</span>
              <div>
                <strong className="text-gray-900">Location expertise</strong> – I'll recommend the perfect {cityName} locations based on your style, season, and what you hope to achieve.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">✓</span>
              <div>
                <strong className="text-gray-900">Comfortable, relaxed sessions</strong> – My approach makes everyone feel at ease, from shy kids to camera-wary partners.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">✓</span>
              <div>
                <strong className="text-gray-900">Full-service experience</strong> – From planning to printing recommendations, I'm here to support you throughout the entire process.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">✓</span>
              <div>
                <strong className="text-gray-900">Exceptional value</strong> – Professional quality, complete galleries with print rights, and personal service that exceeds expectations.
              </div>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Ready to Capture Your Story?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Let's create beautiful, authentic portraits that you'll treasure for years to come.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-black text-white font-semibold tracking-widest uppercase py-3 px-10 transition-all duration-300 hover:bg-gray-700"
          >
            Book Your Session
          </Link>
        </div>

        {/* Back to Services Link */}
        <div className="mt-12 text-center">
          <Link to="/services" className="text-blue-600 hover:underline">
            ← View All Photography Services
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
};

export default SEOLandingPage;
