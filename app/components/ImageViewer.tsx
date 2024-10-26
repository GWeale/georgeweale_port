import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ImageViewer = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
        >
          <button onClick={handlePrev} className="absolute left-4 text-white">Previous</button>
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          <button onClick={handleNext} className="absolute right-4 text-white">Next</button>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white"
          >
            Close
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
