import React, { useState, useEffect } from 'react';
import AdminManager from './AdminManager';

const AdminPanel = ({ isActive, onExit, onSave }) => {
  const [changes, setChanges] = useState({});

  useEffect(() => {
    if (isActive) {
      document.body.classList.add('admin-mode-active');
    } else {
      document.body.classList.remove('admin-mode-active');
    }
    return () => {
      document.body.classList.remove('admin-mode-active');
    };
  }, [isActive]);

  if (!isActive) return null;

  const handleSave = () => {
    localStorage.setItem('adminChanges', JSON.stringify(changes));
    onSave(changes);
    setChanges({});
  };

  return (
    <>
      {/* Admin Panel Overlay */}
      <div className="fixed top-0 left-0 w-full bg-blue-600 text-white py-2 px-4 z-[9999] flex items-center justify-between admin-ui-element">
        <div className="flex items-center gap-4">
          <span className="font-bold">ADMIN MODE ACTIVE</span>
        </div>
        <div className="flex gap-2 items-center">
          <button
            onClick={handleSave}
            className="px-4 py-1.5 rounded bg-green-500 text-white hover:bg-green-600 font-semibold text-sm flex items-center gap-1 admin-ui-element"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Save Changes
          </button>
          <button
            onClick={onExit}
            className="px-4 py-1.5 rounded bg-red-500 text-white hover:bg-red-600 font-semibold text-sm flex items-center gap-1 admin-ui-element"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Exit Admin
          </button>
        </div>
      </div>

      {/* Admin Manager Modal - Opens automatically on login */}
      <AdminManager
        isActive={isActive}
        onClose={onExit}
        onSave={(savedChanges) => {
          setChanges(prev => ({ ...prev, ...savedChanges }));
        }}
      />
    </>
  );
};

export default AdminPanel;

