"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ImageGridProps {
  images: {
    src: string;
    alt: string;
    href?: string;
  }[];
  columns?: 2 | 3 | 4; // Accepts 2, 3, or 4 columns
  showCaption?: boolean; // Add this prop
}

export const ImageGrid: React.FC<ImageGridProps> = ({
  images,
  columns = 3,
  showCaption = false, // Default to false for backward compatibility
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1500px] mx-auto relative">
      {images.map((image, index) => (
        <div key={index} className="relative">
          <div 
            className="relative aspect-[16/9] w-full cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            {expandedIndex === index ? (
              // Expanded view (fixed position, centered)
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="relative w-[90vw] h-[80vh] max-w-[1800px]">
                  <Image
                    alt={image.alt}
                    src={image.src}
                    fill
                    priority
                    className="object-contain rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            ) : (
              // Grid view
              <div className="relative h-full w-full">
                <Image
                  alt={image.alt}
                  src={image.src}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="rounded-lg object-cover transition-all duration-300 hover:opacity-90"
                />
              </div>
            )}
          </div>
          {showCaption && !expandedIndex && (
            <p className="mt-2 text-sm text-center text-neutral-600 dark:text-neutral-400">
              {image.alt}
            </p>
          )}
        </div>
      ))}
      
      {/* Overlay */}
      {expandedIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/80 z-40 cursor-pointer"
          onClick={() => setExpandedIndex(null)}
        />
      )}
    </div>
  );
};
