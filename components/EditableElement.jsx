import React, { useState } from 'react';
import TextEditor from './TextEditor';

const EditableElement = ({ 
  children, 
  isAdmin, 
  onSave, 
  initialContent,
  elementType = 'text',
  className = '',
  style = {},
  ...props 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(initialContent || children);

  if (!isAdmin) {
    return <div className={className} style={style} {...props}>{children}</div>;
  }

  const handleClick = (e) => {
    if (isAdmin && !isEditing) {
      e.stopPropagation();
      setIsEditing(true);
    }
  };

  const handleSave = (newContent) => {
    setContent(newContent);
    setIsEditing(false);
    if (onSave) {
      onSave(newContent);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`${className} ${isAdmin ? 'cursor-pointer hover:outline hover:outline-2 hover:outline-blue-500 hover:outline-dashed' : ''}`}
        style={style}
        {...props}
        contentEditable={false}
      >
        {typeof content === 'string' && content.includes('<') ? (
          <div dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          content
        )}
      </div>
      {isEditing && (
        <TextEditor
          initialContent={typeof content === 'string' ? content : String(content)}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </>
  );
};

export default EditableElement;

