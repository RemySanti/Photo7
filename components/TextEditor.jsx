import React, { useState, useRef, useEffect } from 'react';

const TextEditor = ({ initialContent, onSave, onCancel }) => {
  const [content, setContent] = useState(initialContent || '');
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = content;
    }
  }, []);

  const handleFormat = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current.focus();
  };

  const handleSave = () => {
    const htmlContent = editorRef.current.innerHTML;
    onSave(htmlContent);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[10001] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Toolbar */}
        <div className="border-b border-gray-200 p-3 flex flex-wrap gap-2 bg-gray-50">
          <button
            onClick={() => handleFormat('bold')}
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 font-bold"
            title="Bold"
          >
            B
          </button>
          <button
            onClick={() => handleFormat('italic')}
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 italic"
            title="Italic"
          >
            I
          </button>
          <button
            onClick={() => handleFormat('underline')}
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 underline"
            title="Underline"
          >
            U
          </button>
          <div className="border-l border-gray-300 mx-2"></div>
          <button
            onClick={() => handleFormat('justifyLeft')}
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200"
            title="Align Left"
          >
            ⬅
          </button>
          <button
            onClick={() => handleFormat('justifyCenter')}
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200"
            title="Align Center"
          >
            ⬌
          </button>
          <button
            onClick={() => handleFormat('justifyRight')}
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200"
            title="Align Right"
          >
            ➡
          </button>
          <div className="border-l border-gray-300 mx-2"></div>
          <select
            onChange={(e) => handleFormat('formatBlock', e.target.value)}
            className="px-2 py-1 border border-gray-300 rounded"
          >
            <option value="p">Paragraph</option>
            <option value="h1">Heading 1</option>
            <option value="h2">Heading 2</option>
            <option value="h3">Heading 3</option>
          </select>
          <input
            type="color"
            onChange={(e) => handleFormat('foreColor', e.target.value)}
            className="w-10 h-8 border border-gray-300 rounded cursor-pointer"
            title="Text Color"
          />
        </div>

        {/* Editor */}
        <div
          ref={editorRef}
          contentEditable
          className="flex-1 p-6 overflow-y-auto border border-gray-200 focus:outline-none min-h-[400px]"
          style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '14px',
            lineHeight: '1.6',
          }}
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Footer */}
        <div className="border-t border-gray-200 p-4 flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;

