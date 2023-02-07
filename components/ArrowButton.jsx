import React from "react";

const ArrowButton = ({ text, onClick }) => (
  <button
    className="bg-white text-gray-900 py-2 pl-4 pr-3 rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline"
    onClick={onClick}
  >
    <div className="flex flex-row items-center justify-center">
      <span className="text-lg font-medium">{text}</span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-2"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M13.75 6.75L19.25 12L13.75 17.25"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19 12H4.75"
        />
      </svg>
    </div>
  </button>
);

export default ArrowButton;
