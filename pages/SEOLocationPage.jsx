import React from 'react';
import { getAssetPath } from '../utils.js';

// SEO Location Page Data
const SEO_PAGES = {
  'family-photography': {
    'bethlehem-pa': {
      city: 'Bethlehem, PA',
      service: 'Family Photography',
      title: 'Family Photographer in Bethlehem, PA',
      metaDescription: 'Authentic family photography in Bethlehem, PA. Capturing connection, love & timeless moments with professional warmth. Book your session today.',
      intro: "Looking for a family photographer in Bethlehem, PA who understands that the best portraits aren't just posed—they're felt? I'm Jinette Ramos, and I specialize in capturing the authentic connection, laughter, and love that make your family uniquely yours.",
      locations: [
        'Historic Bethlehem\'s Main Street – Brick streets, charming architecture, and authentic character',
        'Sand Island Park – Gorgeous riverfront views and natural light',
        'Monocacy Park – Expansive fields and beautiful trees',
        'Rose Garden at Burnside Plantation – Seasonal blooms and historic charm',
        'Lehigh University Campus – Beautiful stone buildings and landscaped grounds'
      ],
      faqs: [
        { q: 'How long is a family photography session?', a: 'Most family sessions last 60-90 minutes, giving us plenty of time to capture various poses, groupings, and candid moments.' },
        { q: 'What if the weather doesn\'t cooperate?', a: 'Pennsylvania weather can be unpredictable! If conditions aren\'t ideal, we\'ll reschedule your session at no additional charge.' },
        { q: 'What should we wear?', a: 'I provide a detailed styling guide after booking. Coordinated colors (not matching) in timeless tones work beautifully.' }
      ]
    },
    'easton-pa': {
      city: 'Easton, PA',
      service: 'Family Photography',
      title: 'Family Photography in Easton, PA',
      metaDescription: 'Beautiful family photography in Easton, PA. Natural, timeless portraits that capture your family\'s authentic connection. Professional photographer near you.',
      intro: 'There\'s something special about Easton—the confluence of rivers, the rich history, and the close-knit community spirit. As a family photographer serving Easton, PA, I love helping local families preserve their most precious memories with portraits that feel genuine, warm, and timeless.',
      locations: [
        'Riverside Park along the Delaware – Sweeping water views and walking paths',
        'Centre Square in Downtown Easton – Historic architecture and charming storefronts',
        'Hugh Moore Park & Delaware Canal – Scenic towpath and waterside views',
        'Scott Park – Open fields and mature trees',
        'Easton Farmers Market area – Vibrant community atmosphere'
      ],
      faqs: [
        { q: 'What\'s the best time of day for family photos?', a: 'Golden hour—the hour before sunset—provides the most flattering, warm natural light.' },
        { q: 'Can we bring our dog to the session?', a: 'Absolutely! Pets are family too. Just let me know in advance.' },
        { q: 'How many outfit changes can we do?', a: 'One or two outfit changes work well for most sessions.' }
      ]
    },
    'whitehall-pa': {
      city: 'Whitehall, PA',
      service: 'Family Photography',
      title: 'Family Portraits in Whitehall, PA',
      metaDescription: 'Professional family photographer in Whitehall, PA capturing authentic moments and genuine connection. Beautiful, natural family portraits you\'ll love.',
      intro: 'The relationships you share with your loved ones are precious, and they deserve to be captured in images that truly reflect who you are together. As a family photographer serving Whitehall, PA and the surrounding Lehigh Valley, I create portraits that celebrate authentic connection.',
      locations: [
        'Whitehall Township Community Park – Spacious fields and walking trails',
        'Covered Bridge Park – Charming historic covered bridge and creek views',
        'Jordan Creek – Natural water features and lush vegetation',
        'MacArthur Road corridor parks – Mature trees and open spaces',
        'Nearby Lehigh Parkway – Creek views, forests, and diverse landscapes'
      ],
      faqs: [
        { q: 'How long does a typical family session last?', a: 'Most family portrait sessions run 60-90 minutes.' },
        { q: 'What if someone gets sick or we need to reschedule?', a: 'Life happens! If you need to reschedule, just let me know. We\'ll find a new date at no charge.' },
        { q: 'Do you photograph large extended families?', a: 'Yes! I love capturing multiple generations together.' }
      ]
    },
    'emmaus-pa': {
      city: 'Emmaus, PA',
      service: 'Family Photography',
      title: 'Professional Family Photography in Emmaus, PA',
      metaDescription: 'Professional family photographer in Emmaus, PA. Warm, authentic portraits that celebrate your family\'s unique connection. Book your session today.',
      intro: 'Emmaus families deserve portraits that feel as warm and welcoming as the community itself. I\'m Jinette Ramos, and I specialize in creating family photography in Emmaus, PA that goes beyond the expected—capturing genuine laughter, tender moments, and authentic connections.',
      locations: [
        'Emmaus Community Park – Open fields and mature trees',
        'Main Street Emmaus – Historic architecture and small-town character',
        'Kemmerer Park – Scenic walking paths and natural woodlands',
        'Emmaus Triangle – Iconic community gathering spot',
        'Little Lehigh Creek Parkway – Creek views and lush settings'
      ],
      faqs: [
        { q: 'How long does a family session typically take?', a: 'Sessions usually last 60-90 minutes.' },
        { q: 'What if we need to reschedule due to weather or illness?', a: 'No problem! We\'ll reschedule at no charge.' },
        { q: 'Can we include grandparents or extended family?', a: 'Absolutely! I love capturing multiple generations together.' }
      ]
    }
  },
  'maternity-newborn-photographer': {
    'bethlehem-pa': {
      city: 'Bethlehem, PA',
      service: 'Maternity & Newborn Photography',
      title: 'Maternity & Newborn Photography in Bethlehem, PA',
      metaDescription: 'Expert maternity and newborn photographer in Bethlehem, PA. Safe, gentle sessions capturing your journey into motherhood. Book your session today.',
      intro: 'Pregnancy and those first precious days with your newborn are fleeting moments that deserve to be beautifully preserved. As a maternity and newborn photographer serving Bethlehem, PA, I specialize in creating tender, timeless images that celebrate this incredible chapter.',
      locations: [
        'Lehigh University Campus – Elegant stone buildings and manicured lawns',
        'Sand Island Park – Riverside views and natural light for maternity sessions',
        'Historic Downtown Bethlehem – Brick streets and architectural charm',
        'Rose Garden at Burnside Plantation – Romantic garden settings',
        'In-Home Newborn Sessions – Comfortable, relaxed setting in your Bethlehem home'
      ],
      faqs: [
        { q: 'When should we schedule our maternity session?', a: 'The ideal time is between 30-36 weeks of pregnancy when your bump is beautifully round.' },
        { q: 'How soon after birth should we book newborn photos?', a: 'The best window is 5-14 days old when babies are sleepiest.' },
        { q: 'What if my baby won\'t settle during the session?', a: 'Completely normal! I build in extra time for feeding and soothing.' }
      ]
    }
  },
  'senior-portraits': {
    'bethlehem-pa': {
      city: 'Bethlehem, PA',
      service: 'Senior Portraits',
      title: 'Senior Portrait Photography in Bethlehem, PA',
      metaDescription: 'Modern senior portrait photographer in Bethlehem, PA. Fun, stylish graduation photos that celebrate your personality. Book your senior session now!',
      intro: 'Your senior year is a milestone worth celebrating with portraits that truly represent who you are. As a senior portrait photographer serving Bethlehem, PA, I create modern, stylish images that go beyond the traditional yearbook photo.',
      locations: [
        'Historic Main Street – Brick buildings and urban character',
        'Lehigh University Campus – Collegiate architecture',
        'SteelStacks & Arts District – Industrial-chic settings',
        'Monocacy Creek Greenway – Natural settings with water features',
        'Downtown Bethlehem Murals – Colorful street art'
      ],
      faqs: [
        { q: 'When should I schedule my senior portraits?', a: 'Many students book in late spring or summer before senior year.' },
        { q: 'Can I bring props related to my activities?', a: 'Absolutely! Bring sports equipment, instruments, or anything representing your interests.' },
        { q: 'What should I wear?', a: 'Bring 2-3 outfits that represent your style—mix casual and dressy.' }
      ]
    }
  }
};

const SEOLocationPage = ({ service, city }) => {
  const pageData = SEO_PAGES[service]?.[city];

  if (!pageData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-gray-600">The requested location page could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
            {pageData.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {pageData.intro}
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Book Your Session
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-black">
            Why Choose Us for {pageData.service} in {pageData.city}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">Authentic Storytelling</h3>
              <p className="text-gray-600">Capturing real moments and genuine connections that reflect who you truly are.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">Local Expertise</h3>
              <p className="text-gray-600">Deep knowledge of the best locations and lighting throughout {pageData.city}.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">Professional Quality</h3>
              <p className="text-gray-600">Expertly crafted images with warm, attentive service from consultation to delivery.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">Complete Experience</h3>
              <p className="text-gray-600">Full gallery delivery with print rights—no hidden fees or restricted downloads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Locations */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-black">
            Popular Locations in {pageData.city}
          </h2>
          <p className="text-center text-gray-600 mb-8">
            {pageData.city} offers incredible variety for beautiful {pageData.service.toLowerCase()} sessions.
          </p>
          <ul className="space-y-4 max-w-3xl mx-auto">
            {pageData.locations.map((location, index) => (
              <li key={index} className="flex items-start">
                <span className="text-2xl mr-3">📍</span>
                <span className="text-lg text-gray-700">{location}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-black">
            What's Included in Your Session
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">📸</div>
              <h3 className="font-semibold text-xl mb-2">Full Gallery</h3>
              <p className="text-gray-600">Every beautifully edited image from your session</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">👔</div>
              <h3 className="font-semibold text-xl mb-2">Styling Guidance</h3>
              <p className="text-gray-600">Expert wardrobe and color coordination advice</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="font-semibold text-xl mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">Images delivered within 2-3 weeks</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-black">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {pageData.faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-black">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your {pageData.service} Session?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's create beautiful, timeless portraits in {pageData.city} that you'll treasure for generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@jinetteramos.com"
              className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              Email Us
            </a>
            <a
              href="tel:+14842745444"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors"
            >
              Call (484) 274-5444
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOLocationPage;
