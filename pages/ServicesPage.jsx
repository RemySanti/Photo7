import React from 'react';
import { GALLERY_PHOTOS } from '../constants.js';

const ServicesPage = () => {
  const services = [
    {
      title: 'FAMILY PORTRAITS',
      price: 'Portrait Sessions',
      description: 'Timeless, heartfelt images that capture the connection and love between your family members in a natural, relaxed setting.',
      deliverables: ['Styling guidance', 'Natural light or studio', 'Professional editing', 'Online gallery'],
    },
    {
      title: 'MATERNITY & NEWBORNS',
      price: 'Specialized Sessions',
      description: 'Celebrate the beauty and anticipation of motherhood with a styled maternity session that focuses on your glow and growing bump. For Newborn sessions they\'re typically soft and cozy sessions designed to document your baby\'s earliest days and milestones, whether at home or in a natural light setting.',
      deliverables: ['Maternity styling', 'Newborn props & wraps', 'Gentle posing', 'Timeless imagery'],
    },
    {
      title: 'SENIOR GRADS',
      price: 'Modern Senior Photos',
      description: 'A modern take on traditional senior photos—fun, stylish, and full of personality to reflect this exciting time in your teen\'s life.',
      deliverables: ['Multiple outfit changes', 'Location options', 'Personality-focused', 'Digital gallery'],
    },
    {
      title: 'COUPLES/ENGAGEMENTS',
      price: 'Love Stories',
      description: 'Romantic and intimate sessions to tell your love story in a way that feels natural, genuine, and true to who you are as a couple.',
      deliverables: ['Romantic locations', 'Natural posing', 'Editorial style', 'Heirloom quality'],
    },
    {
      title: 'SEASONAL MINI SESSIONS',
      price: 'Limited Time',
      description: 'Limited-time themed sessions offered during specific times of year like Mother\'s Day, Fall, or the Holidays—perfect for updating your portraits quickly and beautifully.',
      deliverables: ['Themed sessions', 'Quick turnaround', 'Affordable pricing', 'Perfect for gifts'],
    },
    {
      title: 'PROFESSIONAL HEADSHOTS/BRANDING',
      price: 'Business Portraits',
      description: 'Custom imagery designed to elevate your online presence with clean, professional portraits that reflect your brand and personality.',
      deliverables: ['Professional styling', 'Brand consistency', 'Multiple formats', 'Commercial use'],
    },
  ];

  const process = [
    {
      title: 'Discovery & Styling',
      description: 'We begin with a consultation to uncover your vision, craft mood boards, and curate wardrobe and locations.',
    },
    {
      title: 'The Shoot Day',
      description: 'A guided, relaxed experience where every detail is taken care of—lighting, posing, and pacing included.',
    },
    {
      title: 'Artful Delivery',
      description: 'Select from proofing galleries, then receive a hand-edited collection ready for print, web, and keepsake albums.',
    },
  ];

  const featuredWork = GALLERY_PHOTOS.slice(0, 4);

  return (
    <div className="bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-6 lg:px-10 pt-20 pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr] items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-gray-500">Services & Collections</p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-black leading-tight">Tailored photography rooted in artistry and ease</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every commission is a collaboration. Whether you’re elevating your brand, celebrating a milestone, or seeking a portrait
              that feels authentically you, we design an experience that feels intentional from concept to delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:hello@jinetteramos.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black text-white font-medium tracking-wide shadow-lg shadow-black/20 transition-transform duration-200 hover:-translate-y-0.5"
              >
                Request Availability
              </a>
              <a
                href="#collections"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-black text-black font-medium tracking-wide transition-colors duration-200 hover:bg-black hover:text-white"
              >
                View Collections
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[32px] bg-gray-100 p-1 shadow-2xl">
              <img
                src={GALLERY_PHOTOS[0].fullSize || GALLERY_PHOTOS[0].src || GALLERY_PHOTOS[0].thumbnail}
                alt="Service highlight"
                className="h-full w-full rounded-[30px] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 backdrop-blur px-6 py-5 shadow-xl shadow-black/15">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Featured Experience</p>
                <h3 className="mt-2 text-xl font-semibold text-black">Los Angeles Artist Residency Portraits</h3>
                <p className="mt-2 text-sm text-gray-600">Documenting a multi-day residency with layered lighting and painterly retouching.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-gray-500">Collections</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-black">A refined offering for every story</h2>
            </div>
            <p className="text-gray-600 max-w-xl">
              Each service is fully customizable. We can extend coverage, add creative team members, and design premium albums upon request.
              Travel fees are quoted during consultation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="group h-full rounded-[28px] border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="p-8 space-y-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-gray-500">{service.price}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-black">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <div className="rounded-2xl bg-gray-50 p-5 space-y-3">
                    <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Includes</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-black" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-black">
                    Inquire
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.4em] text-gray-500">Client Journey</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-black">A thoughtful process for album-worthy results</h2>
              <p className="text-gray-600 leading-relaxed">
                We keep the experience elevated yet effortless. Expect an art director&apos;s eye with a concierge approach—perfect
                for camera-shy clients and fast-paced teams alike.
              </p>
              <div className="space-y-4">
                {process.map((step, index) => (
                  <div key={step.title} className="rounded-3xl border border-gray-200 p-5">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white text-sm font-semibold">
                        {index + 1}
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-black">{step.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {featuredWork.map((photo) => (
                <div key={photo.id} className="relative overflow-hidden rounded-[26px] border border-gray-200 shadow-sm">
                  <img
                    src={photo.src || photo.thumbnail}
                    alt={photo.title}
                    className="h-64 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 px-4 py-3 shadow-lg shadow-black/10">
                    <p className="text-xs uppercase tracking-[0.35em] text-gray-500">{photo.category}</p>
                    <h3 className="mt-2 text-lg font-semibold text-black">{photo.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 space-y-8">
          <p className="text-sm uppercase tracking-[0.4em] text-white/70">Let&apos;s create together</p>
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight max-w-3xl">
            Ready for portraits that feel like you—or a brand campaign that feels unforgettable?
          </h2>
          <p className="max-w-2xl text-white/70 leading-relaxed">
            Send an email or schedule a creative discovery call. We’ll discuss the vision, map the production, and craft a proposal that
            supports your goals and reflects your aesthetic.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:hello@jinetteramos.com"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black font-medium tracking-wide shadow-lg shadow-white/20 transition-transform duration-200 hover:-translate-y-0.5"
            >
              hello@jinetteramos.com
            </a>
            <a
              href="tel:+13235551234"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/30 text-white font-medium tracking-wide transition-colors duration-200 hover:bg-white hover:text-black"
            >
              Call 323 · 555 · 1234
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

