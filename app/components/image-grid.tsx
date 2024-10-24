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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1500px] mx-auto relative">
      {images.map((image, index) => (
        <div 
          key={index} 
          className="relative"
          onMouseEnter={() => setExpandedIndex(index)}
          onMouseLeave={() => setExpandedIndex(null)}
        >
          <div className="relative aspect-[16/9] w-full overflow-visible rounded-lg">
            <div 
              className={`
                absolute transition-all duration-300 ease-in-out rounded-lg
                ${expandedIndex === index ? 
                  'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] z-50' : 
                  'w-full h-full'
                }
              `}
            >
              <Image
                alt={image.alt}
                src={image.src}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className={`
                  rounded-lg object-cover transition-all duration-300
                  ${expandedIndex === index ? 'shadow-2xl' : ''}
                `}
              />
            </div>
          </div>
          {showCaption && (
            <p className={`
              mt-2 text-sm text-center text-neutral-600 dark:text-neutral-400
              ${expandedIndex === index ? 'opacity-0' : 'opacity-100'}
              transition-opacity duration-300
            `}>
              {image.alt}
            </p>
          )}
        </div>
      ))}
      {expandedIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/70 z-40 transition-opacity duration-300"
          onClick={() => setExpandedIndex(null)}
        />
      )}
    </div>
  );
};
