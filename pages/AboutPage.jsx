import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Half Height */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 md:px-8 h-auto sm:h-64" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)' }}>
        <div className="max-w-6xl mx-auto h-full flex items-center justify-center text-center" style={{ border: 'clamp(20px, 5vw, 40px) solid white', padding: 'clamp(20px, 5vw, 40px)', boxSizing: 'border-box' }}>
          <p className="text-base sm:text-lg md:text-xl text-white">Professional Photographer & Visual Storyteller</p>
        </div>
      </section>
      {/* Jinette bio spotlight */}
      <section className="bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">About Me</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">Hi, I'm Jinette Ramos</h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              I'm the heart and eye behind Jinette Ramos Photography — a portrait photographer based in the Lehigh Valley, Pennsylvania. I specialize in family photography, maternity portraits, newborn sessions, couples, and senior graduates, creating timeless imagery with a subtle editorial flare.
            </p>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              As a mom of seven, I know how fast time flies and how precious it is to pause and preserve the seasons we're in. My home is full of love, laughter, and organized chaos — and that energy shapes how I photograph every client: with patience, joy, and intention.
            </p>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              My faith is the foundation of all I do. I believe photography is a gift — a way to serve others, celebrate God's creation, and remind people of their worth. Every session is more than a shoot; it's a chance to connect, encourage, and capture how beautifully you were made.
            </p>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Whether it's a maternity glow, a proud senior moment, or a joyful family hug, my goal is to create photographs that feel real, radiant, and rooted in love — just like life itself.
            </p>
          </div>
          <div className="rounded-2xl sm:rounded-3xl border border-white/20 bg-white/5 backdrop-blur px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 space-y-4 sm:space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Fun Facts About Me</p>
              <div className="mt-4 space-y-3 text-sm text-white/80 leading-relaxed">
                <p>📸 I'm obsessed with natural light and storytelling details.</p>
                <p>☕ I can't start my day without coffee.</p>
                <p>🎶 There's always music playing during sessions — it helps everyone relax and have fun.</p>
                <p>🌻 I love statement fashion, bold creativity, and photos that feel alive and full of purpose.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Experience &amp; Expertise</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">Crafted over a decade of focused practice</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              From sunrise elopements to multi-day brand productions, our studio brings structure, calm, and creativity to
              every commission.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: '10+', label: 'Years behind the lens' },
              { stat: '500+', label: 'Sessions, weddings, and campaigns' },
              { stat: '1000+', label: 'Clients guided through our workflow' },
            ].map((item) => (
              <div key={item.label} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm text-center">
                <div className="text-5xl font-semibold text-black mb-3">{item.stat}</div>
                <p className="text-gray-600 text-base tracking-wide uppercase">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-8 bg-[#f7f7f3]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400">My Philosophy</p>
          <h2 className="text-4xl font-semibold text-black">Images that feel like lived-in memories</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Photography is empathy translated into light. Sessions are designed to feel easy, collaborative, and deeply personal so every image holds true emotion. I balance intentional posing with candid storytelling, making space for laughter, stillness, and the quiet moments in between.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Every project begins with listening. I learn about your history, your future plans, and the details that matter most. Then I craft an experience—from location to wardrobe to final delivery—that honors your story.
          </p>
        </div>
      </section>

      {/* Allentown Focus */}
      <section className="relative py-20 px-8 text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #111 0%, #1f2933 50%, #0f172a 100%)' }}>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url(/images/header.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="max-w-6xl mx-auto relative z-10 space-y-8">
          <div className="text-center space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Allentown, Pennsylvania</p>
            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight">Allentown's Premier Photographer</h2>
            <p className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
              Based in Allentown, PA, I bring a unique blend of artistic vision and technical mastery to every project. My deep understanding of lighting, composition, and post-processing ensures stunning results that stand out.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="rounded-3xl bg-white/10 backdrop-blur px-8 py-10 border border-white/20 space-y-4">
              <h3 className="text-xl font-semibold text-white">Skills</h3>
              <p className="text-sm text-white/75 leading-relaxed">Expertise in diverse photography genres, advanced editing techniques, and client communication.</p>
            </div>
            <div className="rounded-3xl bg-white/10 backdrop-blur px-8 py-10 border border-white/20 space-y-4">
              <h3 className="text-xl font-semibold text-white">Knowledge</h3>
              <p className="text-sm text-white/75 leading-relaxed">Comprehensive understanding of photographic principles, industry trends, and equipment.</p>
            </div>
            <div className="rounded-3xl bg-white/10 backdrop-blur px-8 py-10 border border-white/20 space-y-4">
              <h3 className="text-xl font-semibold text-white">Qualifications</h3>
              <p className="text-sm text-white/75 leading-relaxed">Certified professional photographer with a portfolio of award-winning work and satisfied clients.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
