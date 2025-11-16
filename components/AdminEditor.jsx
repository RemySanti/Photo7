import React, { useState, useEffect, useRef } from 'react';
import TextEditor from './TextEditor';

const AdminEditor = ({ isActive }) => {
  const [editingElement, setEditingElement] = useState(null);
  const [draggedElement, setDraggedElement] = useState(null);
  const [dragOverElement, setDragOverElement] = useState(null);

  useEffect(() => {
    if (!isActive) {
      setEditingElement(null);
      return;
    }

    // Wrap content in editable containers
    const wrapContentInContainers = () => {
      // Find all text-containing elements that should be editable
      const selectors = [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'p', 'span', 'li', 'td', 'th',
        'div[class*="text"]', 'div[class*="title"]',
        'section > div', 'article > div'
      ];

      selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
          // Skip if already wrapped or is admin UI
          if (el.closest('.admin-ui-element') || 
              el.closest('button') || 
              el.closest('nav') ||
              el.closest('header') ||
              el.closest('footer') ||
              el.hasAttribute('data-editable-container')) {
            return;
          }

          // Skip if it's an image or empty
          if (el.tagName === 'IMG' || el.tagName === 'SVG' || !el.textContent?.trim()) {
            return;
          }

          // Mark as editable container
          el.setAttribute('data-editable-container', 'true');
          el.setAttribute('data-draggable', 'true');
          el.setAttribute('draggable', 'true');
          el.style.cursor = 'pointer';
          el.style.position = 'relative';
          el.style.minHeight = '20px';
          
          // Add hover indicator
          el.addEventListener('mouseenter', function() {
            if (!this.querySelector('.admin-edit-indicator')) {
              const indicator = document.createElement('div');
              indicator.className = 'admin-edit-indicator';
              indicator.style.cssText = 'position: absolute; top: -24px; left: 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 4px 8px; font-size: 11px; border-radius: 4px; pointer-events: none; z-index: 10000; white-space: nowrap; box-shadow: 0 2px 8px rgba(0,0,0,0.2);';
              indicator.textContent = 'Click to edit | Drag to reorder';
              if (getComputedStyle(this).position === 'static') {
                this.style.position = 'relative';
              }
              this.appendChild(indicator);
            }
          });
          
          el.addEventListener('mouseleave', function() {
            const indicator = this.querySelector('.admin-edit-indicator');
            if (indicator) indicator.remove();
          });
        });
      });
    };

    const handleClick = (e) => {
      // Don't edit if clicking on admin UI elements
      if (e.target.closest('.admin-ui-element') || 
          e.target.closest('button') || 
          e.target.closest('a') ||
          e.target.closest('input') ||
          e.target.closest('textarea') ||
          e.target.closest('select')) {
        return;
      }

      // Find the editable container
      let target = e.target.closest('[data-editable-container]');
      
      if (target) {
        // Get the full HTML content of the container (including nested elements)
        const html = target.innerHTML;
        const text = target.textContent?.trim() || '';
        
        if (text.length > 0) {
          setEditingElement({
            element: target,
            originalText: text,
            html: html,
          });
          e.stopPropagation();
          e.preventDefault();
        }
      }
    };

    const handleDragStart = (e) => {
      if (!isActive) return;
      const target = e.target.closest('[data-draggable]');
      if (target && target.hasAttribute('data-editable-container')) {
        setDraggedElement(target);
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', target.outerHTML);
        target.style.opacity = '0.5';
        target.style.transform = 'rotate(2deg)';
      }
    };

    const handleDragOver = (e) => {
      if (!isActive || !draggedElement) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      const target = e.target.closest('[data-draggable]');
      if (target && target !== draggedElement && target.hasAttribute('data-editable-container')) {
        setDragOverElement(target);
        target.style.borderTop = '3px solid #667eea';
      }
    };

    const handleDragLeave = (e) => {
      const target = e.target.closest('[data-draggable]');
      if (target && target !== draggedElement) {
        target.style.borderTop = '';
      }
    };

    const handleDragEnd = (e) => {
      if (draggedElement) {
        draggedElement.style.opacity = '1';
        draggedElement.style.transform = '';
        setDraggedElement(null);
        setDragOverElement(null);
      }
      // Remove all border highlights
      document.querySelectorAll('[data-draggable]').forEach(el => {
        el.style.borderTop = '';
      });
    };

    const handleDrop = (e) => {
      e.preventDefault();
      if (!draggedElement || !dragOverElement) return;

      const allElements = Array.from(document.querySelectorAll('[data-editable-container]'));
      const draggedIndex = allElements.indexOf(draggedElement);
      const dropIndex = allElements.indexOf(dragOverElement);

      if (draggedIndex !== -1 && dropIndex !== -1 && draggedIndex !== dropIndex) {
        const parent = dragOverElement.parentNode;
        if (parent) {
          if (draggedIndex < dropIndex) {
            parent.insertBefore(draggedElement, dragOverElement.nextSibling);
          } else {
            parent.insertBefore(draggedElement, dragOverElement);
          }
        }
      }

      setDraggedElement(null);
      setDragOverElement(null);
      // Remove all border highlights
      document.querySelectorAll('[data-draggable]').forEach(el => {
        el.style.borderTop = '';
      });
    };

    // Initialize containers
    setTimeout(wrapContentInContainers, 100);

    document.addEventListener('click', handleClick, true);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('dragover', handleDragOver);
    document.addEventListener('dragleave', handleDragLeave);
    document.addEventListener('dragend', handleDragEnd);
    document.addEventListener('drop', handleDrop);

    return () => {
      document.removeEventListener('click', handleClick, true);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('dragover', handleDragOver);
      document.removeEventListener('dragleave', handleDragLeave);
      document.removeEventListener('dragend', handleDragEnd);
      document.removeEventListener('drop', handleDrop);
      
      // Clean up
      document.querySelectorAll('[data-editable-container]').forEach(el => {
        el.removeAttribute('data-editable-container');
        el.removeAttribute('data-draggable');
        el.removeAttribute('draggable');
        el.style.cursor = '';
        el.style.position = '';
        el.style.minHeight = '';
        el.style.opacity = '';
        el.style.transform = '';
        el.style.borderTop = '';
        const indicator = el.querySelector('.admin-edit-indicator');
        if (indicator) indicator.remove();
      });
    };
  }, [isActive, draggedElement, dragOverElement]);

  const handleSaveEdit = (newContent) => {
    if (editingElement && editingElement.element) {
      editingElement.element.innerHTML = newContent;
      setEditingElement(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingElement(null);
  };

  return (
    <>
      {editingElement && (
        <TextEditor
          initialContent={editingElement.html || editingElement.originalText}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      )}
    </>
  );
};

export default AdminEditor;
