"use client";

import React from "react";

export const BackgroundText: React.FC = () => {
  const repetitions = Array(100).fill("hi hello "); // Adjust the number as needed

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="flex flex-wrap w-full h-full leading-none">
        {repetitions.map((text, index) => (
          <span
            key={index}
            className="text-2xl font-light opacity-10 dark:text-gray-500 text-gray-700"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};
