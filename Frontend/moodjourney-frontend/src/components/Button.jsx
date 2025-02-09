import React from "react";

const Button = ({ text, onClick, variant = "primary" }) => {
  const baseStyle = "px-6 py-2 rounded-lg font-semibold transition-all";
  const styles = {
    primary: "bg-primary text-white hover:bg-pink-700",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${styles[variant]}`}>
      {text}
    </button>
  );
};

export default Button;
