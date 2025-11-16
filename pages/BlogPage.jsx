import React, { useState, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { BLOG_POSTS } from '../constants/blogPosts';

const BlogPage = ({ isAdmin = false }) => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  // Filter out Portrait Diaries and get all posts
  const filteredBlogPosts = useMemo(() => 
    BLOG_POSTS.filter(post => post.category !== 'Portrait Diaries'),
    []
  );
  
  // Featured post (most recent)
  const featuredPost = filteredBlogPosts.length > 0 ? filteredBlogPosts[0] : null;
  
  // Regular posts (excluding featured)
  const regularPosts = useMemo(() => filteredBlogPosts.slice(1), [filteredBlogPosts]);
  
  // Pagination
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = regularPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePostClick = useCallback((post) => {
    if (post) {
      setSelectedPost(post);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedPost(null);
    document.body.style.overflow = 'auto';
  }, []);

  const handleNextPost = useCallback(() => {
    if (!selectedPost) return;
    const currentIndex = filteredBlogPosts.findIndex(p => p.id === selectedPost.id);
    if (currentIndex < filteredBlogPosts.length - 1) {
      setSelectedPost(filteredBlogPosts[currentIndex + 1]);
    }
  }, [selectedPost, filteredBlogPosts]);

  const handlePrevPost = useCallback(() => {
    if (!selectedPost) return;
    const currentIndex = filteredBlogPosts.findIndex(p => p.id === selectedPost.id);
    if (currentIndex > 0) {
      setSelectedPost(filteredBlogPosts[currentIndex - 1]);
    }
  }, [selectedPost, filteredBlogPosts]);

  // Keyboard navigation
  React.useEffect(() => {
    if (!selectedPost) return;
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      } else if (e.key === 'ArrowRight') {
        handleNextPost();
      } else if (e.key === 'ArrowLeft') {
        handlePrevPost();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPost, handleCloseModal, handleNextPost, handlePrevPost]);

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* NYT-Style Header */}
        <header className="border-b-2 border-black bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Photography Journal
              </h1>
              <p className="text-sm text-gray-600 hidden md:block">Exploring the Art of Light</p>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Featured Article - NYT Style */}
          {currentPage === 1 && featuredPost && (
            <section className="mb-16 border-b-2 border-black pb-12">
              <article
                onClick={() => handlePostClick(featuredPost)}
                className="group cursor-pointer"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative overflow-hidden aspect-[16/10] bg-gray-100">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      loading="eager"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-4">
                    <span className="inline-block text-xs uppercase tracking-widest text-gray-500 font-semibold">
                      {featuredPost.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight group-hover:underline" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {featuredPost.title}
                    </h2>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          )}

          {/* Articles Grid - Newspaper Style */}
          <section>
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                {currentPage === 1 ? 'Latest Articles' : `Page ${currentPage}`}
              </h2>
              <div className="w-24 h-0.5 bg-black"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {currentPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => handlePostClick(post)}
                  className="group cursor-pointer border-b border-gray-200 pb-6 hover:border-gray-400 transition-colors"
                >
                  <div className="relative overflow-hidden aspect-[16/10] bg-gray-100 mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-3">
                    <span className="inline-block text-xs uppercase tracking-widest text-gray-500 font-semibold">
                      {post.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold leading-tight group-hover:underline" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    currentPage === 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-black hover:underline'
                  }`}
                >
                  Previous
                </button>
                <div className="flex gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`px-3 py-2 text-sm font-medium transition-colors ${
                          currentPage === pageNum
                            ? 'bg-black text-white'
                            : 'text-black hover:bg-gray-100'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    currentPage === totalPages
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-black hover:underline'
                  }`}
                >
                  Next
                </button>
              </div>
            </nav>
          )}
        </main>
      </div>

      {/* Article Modal - NYT Style Reading Experience - Rendered via Portal */}
      {selectedPost && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 bg-white overflow-y-auto"
          style={{ 
            zIndex: 99999,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseModal();
          }}
        >
          {/* Modal Header */}
          <header className="sticky top-0 bg-white border-b border-gray-200" style={{ zIndex: 100000 }}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                <button
                  onClick={handleCloseModal}
                  className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
                  aria-label="Close article"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="font-medium">Close</span>
                </button>
                <div className="flex items-center gap-4">
                  <button
                    onClick={handlePrevPost}
                    disabled={filteredBlogPosts.findIndex(p => p.id === selectedPost.id) === 0}
                    className="p-2 text-gray-700 hover:text-black disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
                    aria-label="Previous article"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNextPost}
                    disabled={filteredBlogPosts.findIndex(p => p.id === selectedPost.id) === filteredBlogPosts.length - 1}
                    className="p-2 text-gray-700 hover:text-black disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
                    aria-label="Next article"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            {/* Hero Image */}
            <div className="mb-8">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>

            {/* Article Header */}
            <header className="mb-8 pb-6 border-b border-gray-200">
              <span className="inline-block text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4">
                {selectedPost.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                {selectedPost.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>
            </header>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <div className="text-lg md:text-xl leading-relaxed text-gray-800 space-y-6" style={{ fontFamily: "'Hind', sans-serif" }}>
                {selectedPost.content && typeof selectedPost.content === 'string' ? (
                  selectedPost.content.split('\n\n').map((paragraph, index) => (
                    paragraph.trim() && (
                      <p key={index} className="mb-6">
                        {paragraph.trim()}
                      </p>
                    )
                  )).filter(Boolean)
                ) : (
                  <p className="mb-6">{selectedPost.content}</p>
                )}
              </div>
            </div>

            {/* Article Footer */}
            <footer className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <button
                  onClick={handlePrevPost}
                  disabled={filteredBlogPosts.findIndex(p => p.id === selectedPost.id) === 0}
                  className="flex items-center gap-2 text-gray-700 hover:text-black disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-sm font-medium">Previous</span>
                </button>
                <button
                  onClick={handleCloseModal}
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Back to Articles
                </button>
                <button
                  onClick={handleNextPost}
                  disabled={filteredBlogPosts.findIndex(p => p.id === selectedPost.id) === filteredBlogPosts.length - 1}
                  className="flex items-center gap-2 text-gray-700 hover:text-black disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  <span className="text-sm font-medium">Next</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </footer>
          </article>
        </div>,
        document.body
      )}
    </>
  );
};

export default BlogPage;
