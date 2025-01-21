"use client";

import { InfiniteSlider } from "./ui/infinite-slider";
import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(-1);

  const firstSliderImages = [
    '/image1.jpeg',
    '/image2.jpeg',
    '/image3.jpeg',
    '/image4.jpeg',
    '/image5.jpeg',
    '/image6.jpeg',
    '/image7.jpeg',
    '/image8.jpeg',
    '/image9.jpeg',
    '/image10.jpeg'
  ];

  const secondSliderImages = [
    '/image11.jpeg',
    '/image12.jpeg',
    '/image13.jpeg',
    '/image14.jpeg',
    '/image15.jpeg',
    '/image16.jpeg',
    '/image17.jpeg',
    '/image18.jpeg',
    '/image19.jpeg'
  ];

  const allImages = firstSliderImages.concat(secondSliderImages);

  const handlePrevImage = useCallback(() => {
    setSelectedImageIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : allImages.length - 1;
      console.log('Previous clicked, new index:', newIndex);
      return newIndex;
    });
  }, [allImages]);

  const handleNextImage = useCallback(() => {
    setSelectedImageIndex((prevIndex) => {
      const newIndex = prevIndex < allImages.length - 1 ? prevIndex + 1 : 0;
      console.log('Next clicked, new index:', newIndex);
      return newIndex;
    });
  }, [allImages]);

  const handleImageClick = (src: string) => {
    const index = allImages.indexOf(src);
    console.log('Image clicked, index:', index);
    setSelectedImageIndex(index);
  };

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrevImage();
    } else if (e.key === 'ArrowRight') {
      handleNextImage();
    } else if (e.key === 'Escape') {
      setSelectedImageIndex(-1);
    }
  }, [handlePrevImage, handleNextImage]);

  // Add and remove event listener for keyboard navigation
  useEffect(() => {
    if (selectedImageIndex >= 0) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedImageIndex, handleKeyDown]);

  return (
    <section id="gallery" className="py-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
      <div className="w-screen">
        {/* First slider - Left to Right */}
        <InfiniteSlider gap={24} duration={30} durationOnHover={75} className="h-[400px]">
          {firstSliderImages.map((src, index) => (
            <div 
              key={index} 
              className="relative aspect-square h-full cursor-pointer"
              onClick={() => handleImageClick(src)}
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                width={300}
                height={300}
                className="rounded-xl object-cover"
              />
            </div>
          ))}
        </InfiniteSlider>

        {/* Second slider - Right to Left */}
        <InfiniteSlider 
          gap={24} 
          duration={30} 
          durationOnHover={75} 
          className="h-[400px]"
          reverse={true}
        >
          {secondSliderImages.map((src, index) => (
            <div 
              key={`reverse-${index}`} 
              className="relative aspect-square h-full cursor-pointer"
              onClick={() => handleImageClick(src)}
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                width={300}
                height={300}
                className="rounded-xl object-cover"
              />
            </div>
          ))}
        </InfiniteSlider>
      </div>

      {/* Modal/Lightbox */}
      {selectedImageIndex >= 0 && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedImageIndex(-1);
            }
          }}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <button
              onClick={() => setSelectedImageIndex(-1)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 text-xl"
            >
              ✕
            </button>
            
            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors z-50"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors z-50"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <div className="relative w-full h-full">
              <Image
                src={allImages[selectedImageIndex]}
                alt={`Gallery Image ${selectedImageIndex + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}