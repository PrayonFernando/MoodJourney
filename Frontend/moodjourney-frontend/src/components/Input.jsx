import React from "react";

const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-600 rounded-md bg-transparent text-white focus:outline-none focus:border-primary"
    />
  );
};

export default Input;
