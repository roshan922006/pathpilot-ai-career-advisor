import React from "react";

export default function Modal({ open, onClose, children }) {
  if(!open) return null;
  return (
    <div className="fixed inset-0 modal-bg flex items-center justify-center z-50">
      <div className="modal-content relative">
        <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}
