import React from 'react';

const WhatToExpectPage = () => {
  return (
    <div className="min-h-screen bg-[#f8f8f5] text-[#111]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-[#111] to-[#1f1f1f] text-white">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url(/images/header.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 py-24 space-y-10">
          <div className="space-y-6 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.45em] text-white/60">The JRP Studio Experience</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              More Than Photos — It's a Moment to Remember
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              At Jinette Ramos Photography, I believe your session should feel just as meaningful as the images themselves. Every detail — from our first conversation to your final gallery — is intentionally crafted to reflect your story, your connection, and the beauty in your life.
            </p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              My approach blends warm storytelling with a subtle editorial touch, creating portraits that feel natural, elevated, and timeless — the kind you'll cherish for generations.
            </p>
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20 space-y-12">
        <div className="text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Your Journey</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-black">Three chapters from booking to final delivery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We map out your experience so you know exactly what’s next. Here’s how it feels from the moment you inquire until the
            artwork is in your hands.
          </p>
        </div>

        <div className="relative border-l-2 border-gray-200 pl-10 space-y-12">
          {[
            {
              title: 'I. Before Your Session',
              time: 'Pre-session planning',
              points: [
                'It all starts with connection. Once you inquire, we\'ll discuss your vision, location ideas, and wardrobe styling to ensure every detail feels like you.',
                'Whether it\'s coordinating outfits for a family or helping an expecting mom feel radiant and at ease, I\'m here to make the process simple and joyful from the very beginning.',
                'You\'ll receive guidance on what to wear, how to prepare, and what to expect — so when the day arrives, all you need to do is show up and be fully present.',
              ],
              image: 'https://images.unsplash.com/photo-1465255165265-3c3584315570?auto=format&fit=crop&w=900&q=80',
            },
            {
              title: 'II. During Your Session',
              time: 'The magic happens',
              points: [
                'I\'ll gently guide you through movement and prompts that create authentic, joy-filled moments — the laughter, the connection, the stillness in between.',
                'My sessions are relaxed and uplifting, filled with music, conversation, and genuine emotion.',
                'Whether outdoors in golden light or in my studio\'s soft glow, every image is captured with care, creativity, and intention — bringing together warmth, grace, and a touch of editorial elegance.',
              ],
              image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80',
            },
            {
              title: 'III. After Your Session',
              time: 'Delivery & keepsakes',
              points: [
                'Once your session is complete, I\'ll carefully curate your images — hand-editing each one with precision and artistry.',
                'Your final gallery will be delivered via a private online link, allowing you to download your images and share them with loved ones.',
                'You\'ll also have the option to purchase prints, wall canvases, or heirloom albums — turning your session into tangible keepsakes that tell your story beautifully.',
              ],
              image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
            },
            {
              title: 'IV. My Promise to You',
              time: 'Your legacy',
              points: [
                'Every person who steps in front of my lens is more than a client — you\'re part of the JRP family.',
                'My hope is that when you see your images, you feel seen, valued, and reminded of the beauty that is placed within you.',
                'Because these aren\'t just photographs. They\'re your memories, & your legacy — preserved for generations to come.',
              ],
              image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
            },
          ].map((phase, index) => (
            <div key={phase.title} className="relative grid gap-8 lg:grid-cols-[1.1fr,0.9fr] items-center">
              <div className="absolute -left-[26px] top-6 h-5 w-5 rounded-full bg-black border-4 border-white"></div>
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 space-y-4">
                <p className="text-xs uppercase tracking-[0.35em] text-gray-400">{phase.time}</p>
                <h3 className="text-2xl font-semibold text-black">{phase.title}</h3>
                <ul className="space-y-3 text-sm text-gray-600 leading-relaxed">
                  {phase.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-black"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`rounded-3xl overflow-hidden shadow-lg ${index % 2 === 1 ? 'order-first lg:order-last' : ''}`}>
                <img src={phase.image} alt={phase.title} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Studio experience */}
      <section className="bg-white py-20 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Inside the studio</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-black">A space designed for comfort and creativity</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our Allentown studio features daylight shooting bays, fully rigged strobe stations, and a lounge stocked with
              refreshments. Each set is arranged before you arrive so we spend more time photographing and less time waiting on
              logistics.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-600">
              <div className="rounded-2xl border border-gray-200 p-6 space-y-3">
                <h3 className="text-lg font-semibold text-black">Amenities</h3>
                <p>Private wardrobe suite, makeup station, Sonos audio, climate control, and accessible ground-floor entry.</p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 space-y-3">
                <h3 className="text-lg font-semibold text-black">For families & teams</h3>
                <p>Kid-friendly props, remote workstation for laptops, and flexible scheduling for corporate or extended shoots.</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 space-y-6">
            <h3 className="text-xl font-semibold text-black">What clients say it feels like</h3>
            <blockquote className="text-gray-600 leading-relaxed">
              “It’s like stepping into a film set, but with someone guiding you like a friend. From playlists tailored to our mood
              to the way Jinette adjusts a pose, there’s a sense of ease you can’t fake.”
            </blockquote>
            <p className="text-sm text-gray-500 uppercase tracking-[0.35em]">— Editorial couple session, Hamilton Street</p>
          </div>
        </div>
      </section>

      {/* Pro tips */}
      <section className="bg-[#f0f0eb] py-20 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Session prep</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-black">Quick tips to arrive feeling confident</h2>
        </div>
        <div className="max-w-5xl mx-auto mt-12 grid gap-6 md:grid-cols-2">
          {[
            { title: 'Rest & reset', description: 'Sleep well and hydrate the day before. Your energy shows up in every frame.' },
            { title: 'Bring options', description: 'Pack an outfit variety: one elevated, one relaxed, and accessories that feel personal.' },
            { title: 'Light meal', description: 'Eat something that keeps you comfortable and energized. We always have snacks on hand.' },
            { title: 'Inspiration folder', description: 'Share a handful of photos, music, or art that inspires you—we’ll weave it into the set.' },
            { title: 'Arrive early', description: 'Plan on arriving 10–15 minutes before your slot so you can settle in, steam garments, and breathe.' },
            { title: 'Trust the process', description: 'We’ll direct every pose and prompt. Your only job is to be present and enjoy the experience.' },
          ].map((tip) => (
            <div key={tip.title} className="rounded-2xl bg-white border border-gray-200 p-6 text-left space-y-2">
              <h3 className="text-lg font-semibold text-black">{tip.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold">Ready to Begin?</h2>
          <p className="text-lg text-white/75 leading-relaxed">
            Let's create something beautiful together.
          </p>
          <button
            onClick={() => {
              const event = new CustomEvent('navigate', { detail: { page: 'Contact' } });
              window.dispatchEvent(event);
            }}
            className="inline-block bg-white text-black font-bold py-4 px-12 rounded-none hover:bg-gray-200 transition-colors duration-200 uppercase tracking-widest text-lg border-2 border-white hover:border-gray-200"
          >
            Book Your Session
          </button>
        </div>
      </section>
    </div>
  );
};

export default WhatToExpectPage;

