import React, { useEffect } from 'react';
import { useMemo } from 'react';

const BlogDetailPage = ({ blogId, onBack, onNavigate }) => {
  const blogPosts = useMemo(() => [
    {
      id: 1,
      title: 'Still Pushing Light: Reinventing the Golden Hour Portrait',
      slug: 'still-pushing-light-golden-hour-portrait',
      category: 'Portrait Diaries',
      date: 'March 8, 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1512203492609-972e58d21047?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Experimenting with mirrored reflectors, motion blur, and the delicate light between sunset and nightfall.',
      content: `Every year photographers declare the golden hour exhausted. Then the sun slips to the horizon and the world becomes a cinema once more. This season I borrowed techniques from fashion editorials—mirrored reflectors, soft fresnel kickers, and a slow shutter drag—to let each portrait bloom beyond the expected.

The process begins hours before sunset, scouting for reflective architecture that can bounce warmth back toward the subject. I pair that with transparent fabrics to introduce movement. The real magic happens when the sun is almost gone; we lean into the grain, underexpose by half a stop, and embrace the wilder shadows. Suddenly, the portrait breathes, and the golden-hour cliché becomes a fever dream.`,
    },
    {
      id: 2,
      title: 'The Familiar Fingerprints of a Forgotten Darkroom',
      slug: 'forgotten-darkroom-fingerprints',
      category: 'Analog Lab',
      date: 'March 5, 2025',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Why a decade-old roll of Tri-X brought me back to the tiny New Jersey darkroom where I learned to see.',
      content: `I found the roll of film wedged behind an enlarger, still labeled "Winter Cityscapes 2014." When I finally developed it, every frame carried the fingerprints of the mentor who first taught me to dodge and burn. There was the familiar edge fog, the way he loved a wide border, the streetlight blown out just enough to feel honest.

Rescanning those negatives reminded me that analog mistakes aren't flaws—they're signatures. The streak where I lifted the developer early now reads as motion. The dust I never spotted out feels like weather. In an era obsessed with perfection, that roll whispered: keep the fingerprints.`,
    },
    // Add all other blog posts here - using the same structure from BlogPage.jsx
  ], []);

  const post = blogPosts.find((p) => p.id === parseInt(blogId));
  const currentIndex = blogPosts.findIndex((p) => p.id === parseInt(blogId));
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogId]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <button onClick={onBack} className="text-blue-600 hover:underline">
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Blog</span>
          </button>
        </div>
      </header>

      {/* Hero Image */}
      <div className="w-full">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[60vh] object-cover"
        />
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        {/* Title and Metadata */}
        <header className="mb-12">
          <div className="mb-6">
            <span className="inline-block text-sm uppercase tracking-widest text-gray-500 font-semibold mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-500 text-sm">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-medium">
            {post.excerpt}
          </div>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-base md:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Author Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-600">JR</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-2">Jinette Ramos</h3>
              <p className="text-gray-600 mb-4">
                Professional photographer and visual storyteller based in Allentown, PA. Specializing in portrait, editorial, and fine art photography.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="mailto:info@jinetteramos.com"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid md:grid-cols-2 gap-8">
            {previousPost && (
              <div>
                <p className="text-sm text-gray-500 mb-2">Previous Article</p>
                <button
                  onClick={() => onNavigate(previousPost.id)}
                  className="text-left group"
                >
                  <h4 className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {previousPost.title}
                  </h4>
                  <p className="text-sm text-gray-500">{previousPost.date}</p>
                </button>
              </div>
            )}
            {nextPost && (
              <div className={previousPost ? 'md:text-right' : ''}>
                <p className="text-sm text-gray-500 mb-2">Next Article</p>
                <button
                  onClick={() => onNavigate(nextPost.id)}
                  className={`text-left group ${previousPost ? 'md:text-right' : ''}`}
                >
                  <h4 className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {nextPost.title}
                  </h4>
                  <p className="text-sm text-gray-500">{nextPost.date}</p>
                </button>
              </div>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetailPage;
