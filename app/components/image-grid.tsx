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
  const gridClass = {
    2: "grid-cols-2 sm:grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
  }[columns];

  return (
    <section>
      <div className={`grid ${gridClass} gap-4 my-8`}>
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
              {image.href ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={image.href}
                  className="block w-full h-full transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                >
                  <Image
                    alt={image.alt}
                    src={image.src}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    priority
                    className="rounded-lg object-cover transition-all duration-300 ease-in-out"
                  />
                </a>
              ) : (
                <div className="transform transition-transform duration-300 ease-in-out group-hover:scale-110">
                  <Image
                    alt={image.alt}
                    src={image.src}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    priority
                    className="rounded-lg object-cover transition-all duration-300 ease-in-out"
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
    </section>
  );
};
