import React, { useState, useRef } from 'react';
import { GALLERY_PHOTOS, GALLERY_CATEGORIES } from '../constants';
import { BLOG_POSTS } from '../constants/blogPosts';

const AdminManager = ({ isActive, onClose, onSave }) => {
  const [activeTab, setActiveTab] = useState('gallery'); // 'gallery' or 'blog'
  const [editingItem, setEditingItem] = useState(null);
  const [galleryItems, setGalleryItems] = useState(GALLERY_PHOTOS || []);
  const [blogItems, setBlogItems] = useState(BLOG_POSTS || []);
  const [newCategory, setNewCategory] = useState('');
  const [editFormData, setEditFormData] = useState({});
  const imageUploadRef = useRef(null);

  if (!isActive) return null;

  const handleAddGalleryImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const newImage = {
            id: Date.now(),
            src: event.target.result,
            thumbnail: event.target.result,
            title: 'New Image',
            caption: '',
            category: 'Family Portraits',
            location: 'Allentown Studio, PA',
            equipment: '',
            description: '',
          };
          setGalleryItems([...galleryItems, newImage]);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const handleDeleteGalleryImage = (id) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      setGalleryItems(galleryItems.filter(item => item.id !== id));
    }
  };

  const handleEditGalleryImage = (item) => {
    setEditFormData({ ...item });
    setEditingItem({ type: 'gallery', data: item });
  };

  const handleAddBlogPost = () => {
    const newPost = {
      id: Date.now(),
      title: 'New Blog Post',
      slug: `new-post-${Date.now()}`,
      category: 'Stories Behind Loss',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      readTime: '5 min read',
      image: '',
      excerpt: '',
      content: '',
      author: 'Jinette Ramos',
    };
    setBlogItems([...blogItems, newPost]);
    setEditFormData({ ...newPost });
    setEditingItem({ type: 'blog', data: newPost });
  };

  const handleDeleteBlogPost = (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      setBlogItems(blogItems.filter(item => item.id !== id));
    }
  };

  const handleEditBlogPost = (item) => {
    setEditFormData({ ...item });
    setEditingItem({ type: 'blog', data: item });
  };

  const handleAddCategory = () => {
    if (newCategory.trim() && !GALLERY_CATEGORIES.includes(newCategory)) {
      alert(`Category "${newCategory}" would be added. In a full implementation, this would update the constants file.`);
      setNewCategory('');
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (editingItem.type === 'gallery') {
          setEditFormData(prev => ({
            ...prev,
            src: event.target.result,
            thumbnail: event.target.result,
          }));
        } else if (editingItem.type === 'blog') {
          setEditFormData(prev => ({
            ...prev,
            image: event.target.result,
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveEdit = () => {
    if (editingItem.type === 'gallery') {
      setGalleryItems(galleryItems.map(item => 
        item.id === editingItem.data.id ? { ...item, ...editFormData } : item
      ));
    } else if (editingItem.type === 'blog') {
      setBlogItems(blogItems.map(item => 
        item.id === editingItem.data.id ? { ...item, ...editFormData } : item
      ));
    }
    if (onSave) {
      onSave({
        gallery: galleryItems,
        blog: blogItems,
      });
    }
    setEditingItem(null);
    setEditFormData({});
  };

  if (editingItem) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[10001] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
            <h3 className="text-xl font-bold">Edit {editingItem.type === 'gallery' ? 'Gallery Image' : 'Blog Post'}</h3>
            <button
              onClick={() => {
                setEditingItem(null);
                setEditFormData({});
              }}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ✕
            </button>
          </div>
          <div className="p-6 space-y-4">
            {editingItem.type === 'gallery' ? (
              <>
                {/* Image Preview and Upload */}
                <div>
                  <label className="block text-sm font-medium mb-2">Image</label>
                  <div className="flex gap-4 items-start">
                    <img 
                      src={editFormData.src || editFormData.thumbnail || '/placeholder.jpg'} 
                      alt={editFormData.title || 'Preview'} 
                      className="w-32 h-32 object-cover rounded-lg border"
                    />
                    <div className="flex-1">
                      <button
                        onClick={() => imageUploadRef.current?.click()}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mb-2"
                      >
                        Upload New Image
                      </button>
                      <input
                        ref={imageUploadRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <p className="text-xs text-gray-500">Current: {editFormData.src?.substring(0, 50) || 'No image'}...</p>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input
                    type="text"
                    value={editFormData.title || ''}
                    onChange={(e) => setEditFormData(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>

                {/* Caption */}
                <div>
                  <label className="block text-sm font-medium mb-2">Caption</label>
                  <textarea
                    value={editFormData.caption || ''}
                    onChange={(e) => setEditFormData(prev => ({ ...prev, caption: e.target.value }))}
                    className="w-full px-4 py-2 border rounded-lg h-24"
                    placeholder="Short caption for the image..."
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select
                    value={editFormData.category || ''}
                    onChange={(e) => setEditFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-4 py-2 border rounded-lg"
                  >
                    {GALLERY_CATEGORIES.filter(c => c !== 'All').map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <input
                    type="text"
                    value={editFormData.location || ''}
                    onChange={(e) => setEditFormData(prev => ({ ...prev, location: e.target.value }))}
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="e.g., Allentown Studio, PA"
                  />
                </div>

                {/* Equipment */}
                <div>
                  <label className="block text-sm font-medium mb-2">Equipment / Gear</label>
                  <input
                    type="text"
                    value={editFormData.equipment || ''}
                    onChange={(e) => setEditFormData(prev => ({ ...prev, equipment: e.target.value }))}
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="e.g., Canon EOS R5 with Canon RF 85mm f/1.2L USM"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    value={editFormData.description || ''}
                    onChange={(e) => setEditFormData(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full px-4 py-2 border rounded-lg h-32"
                    placeholder="Detailed description of the image..."
                  />
                </div>

                {/* Save Button */}
                <div className="flex gap-2 pt-4">
                  <button
                    onClick={handleSaveEdit}
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => {
                      setEditingItem(null);
                      setEditFormData({});
                    }}
                    className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Blog Image Preview and Upload */}
                <div>
                  <label className="block text-sm font-medium mb-2">Featured Image</label>
                  <div className="flex gap-4 items-start">
                    <img 
                      src={editFormData.image || '/placeholder.jpg'} 
                      alt={editFormData.title || 'Preview'} 
                      className="w-32 h-32 object-cover rounded-lg border"
                    />
                    <div className="flex-1">
                      <button
                        onClick={() => imageUploadRef.current?.click()}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mb-2"
                      >
                        Upload New Image
                      </button>
                      <input
                        ref={imageUploadRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <input
                        type="text"
                        value={editFormData.image || ''}
                        onChange={(e) => setEditFormData(prev => ({ ...prev, image: e.target.value }))}
                        className="w-full px-4 py-2 border rounded-lg text-sm"
                        placeholder="Or enter image URL"
                      />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input
                    type="text"
                    value={editFormData.title || ''}
                    onChange={(e) => setEditFormData(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>

                {/* Slug */}
                <div>
                  <label className="block text-sm font-medium mb-2">Slug (URL-friendly)</label>
                  <input
                    type="text"
                    value={editFormData.slug || ''}
                    onChange={(e) => setEditFormData(prev => ({ ...prev, slug: e.target.value }))}
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="e.g., my-blog-post-title"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <input
                    type="text"
                    value={editFormData.category || ''}
                    onChange={(e) => setEditFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="e.g., Stories Behind Loss"
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium mb-2">Date</label>
                  <input
                    type="text"
                    value={editFormData.date || ''}
                    onChange={(e) => setEditFormData(prev => ({ ...prev, date: e.target.value }))}
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="e.g., March 8, 2025"
                  />
                </div>

                {/* Read Time */}
                <div>
                  <label className="block text-sm font-medium mb-2">Read Time</label>
                  <input
                    type="text"
                    value={editFormData.readTime || ''}
                    onChange={(e) => setEditFormData(prev => ({ ...prev, readTime: e.target.value }))}
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="e.g., 6 min read"
                  />
                </div>

                {/* Author */}
                <div>
                  <label className="block text-sm font-medium mb-2">Author</label>
                  <input
                    type="text"
                    value={editFormData.author || ''}
                    onChange={(e) => setEditFormData(prev => ({ ...prev, author: e.target.value }))}
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="e.g., Jinette Ramos"
                  />
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-sm font-medium mb-2">Excerpt</label>
                  <textarea
                    value={editFormData.excerpt || ''}
                    onChange={(e) => setEditFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                    className="w-full px-4 py-2 border rounded-lg h-24"
                    placeholder="Short excerpt/summary of the blog post..."
                  />
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-medium mb-2">Content</label>
                  <textarea
                    value={editFormData.content || ''}
                    onChange={(e) => setEditFormData(prev => ({ ...prev, content: e.target.value }))}
                    className="w-full px-4 py-2 border rounded-lg h-64"
                    placeholder="Full blog post content..."
                  />
                </div>

                {/* Save Button */}
                <div className="flex gap-2 pt-4">
                  <button
                    onClick={handleSaveEdit}
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => {
                      setEditingItem(null);
                      setEditFormData({});
                    }}
                    className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[10000] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Admin Manager</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ✕
          </button>
        </div>
        
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-6 py-3 font-semibold ${activeTab === 'gallery' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
          >
            Gallery
          </button>
          <button
            onClick={() => setActiveTab('blog')}
            className={`px-6 py-3 font-semibold ${activeTab === 'blog' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
          >
            Blog
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'gallery' ? (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Gallery Images</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="New category name"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="px-4 py-2 border rounded-lg"
                  />
                  <button
                    onClick={handleAddCategory}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                  >
                    Add Category
                  </button>
                  <button
                    onClick={handleAddGalleryImage}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    + Add Image
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryItems.map((item) => (
                  <div key={item.id} className="border rounded-lg p-2 group relative">
                    <img src={item.thumbnail || item.src} alt={item.title} className="w-full h-32 object-cover rounded" />
                    <div className="mt-2">
                      <p className="text-sm font-semibold truncate">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.category}</p>
                    </div>
                    <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => handleEditGalleryImage(item)}
                        className="bg-blue-600 text-white p-1 rounded text-xs"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteGalleryImage(item.id)}
                        className="bg-red-600 text-white p-1 rounded text-xs"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Blog Posts</h3>
                <button
                  onClick={handleAddBlogPost}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  + Add Blog Post
                </button>
              </div>
              <div className="space-y-2">
                {blogItems.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4 flex justify-between items-center group">
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.date} · {item.category}</p>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => handleEditBlogPost(item)}
                        className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteBlogPost(item.id)}
                        className="px-3 py-1 bg-red-600 text-white rounded text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminManager;
