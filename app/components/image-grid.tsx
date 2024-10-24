import React from "react";
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1500px] mx-auto">
      {images.map((image, index) => (
        <div key={index} className="group relative">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
            {image.href ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={image.href}
                className="block w-full h-full"
              >
                <div className="transform transition-all duration-300 group-hover:scale-[2] group-hover:z-50 origin-center h-full">
                  <Image
                    alt={image.alt}
                    src={image.src}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    className="rounded-lg object-cover"
                  />
                </div>
              </a>
            ) : (
              <div className="transform transition-all duration-300 group-hover:scale-[2] group-hover:z-50 origin-center h-full">
                <Image
                  alt={image.alt}
                  src={image.src}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="rounded-lg object-cover"
                />
              </div>
            )}
          </div>
          {showCaption && (
            <p className="mt-2 text-sm text-center text-neutral-600 dark:text-neutral-400">
              {image.alt}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
