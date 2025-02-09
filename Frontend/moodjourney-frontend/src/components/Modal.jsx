import React from "react";

const Modal = ({ title, children, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-dark p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-bold text-primary">{title}</h2>
        {children}
        <button onClick={onClose} className="mt-4 text-primary">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
