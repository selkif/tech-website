import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link
      to="/contact"
      className="bg-red-200 text-gray-400  px-6 py-2 rounded-full"
    >
      Contact Us
    </Link>
  );
};

export default Button;
