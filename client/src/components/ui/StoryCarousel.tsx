import { useState, useEffect, useRef, useCallback } from 'react';
import { useMediaQuery } from '@/hooks/use-media-query';

const StoryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const images = [
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400'
  ];

  const scrollToImage = useCallback((index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const imageWidth = container.offsetWidth;
    const scrollPosition = index * imageWidth;
    
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
      scrollToImage(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, scrollToImage, images.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    
    const container = scrollContainerRef.current;
    if (!container) return;

    const touch = e.touches[0];
    const delta = touchStart - touch.clientX;
    container.scrollLeft += delta;
    setTouchStart(touch.clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    const imageWidth = container.offsetWidth;
    const currentScroll = container.scrollLeft;
    const imageIndex = Math.round(currentScroll / imageWidth);
    
    setCurrentIndex(imageIndex % images.length);
    scrollToImage(imageIndex);
    
    setTouchStart(null);
    setIsPaused(false);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary/5 via-transparent to-primary/5">
      {/* Mobile-optimized container */}
      <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
        {/* Navigation dots for mobile */}
        <div className="flex justify-center  pt-2 mb-4 md:hidden">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex % images.length
                  ? 'bg-primary scale-125'
                  : 'bg-primary/30'
              }`}
              onClick={() => {
                setCurrentIndex(idx);
                scrollToImage(idx);
              }}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>

        <div className="relative">
          {/* Gradient overlays - adjusted for mobile */}
          <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div
            ref={scrollContainerRef}
            className="flex snap-x snap-mandatory overflow-x-hidden scroll-smooth"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {images.map((img, idx) => (
              <div
                key={idx}
                className="flex-none w-full snap-center"
              >
                <div className="px-4">
                  <div className="relative overflow-hidden rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-[1.02]">
                    <img
                      src={img}
                      alt={`Story Image ${idx + 1}`}
                      className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover"
                      loading={idx === 0 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll progress indicator for mobile */}
        <div className="h-1 bg-primary/10 mt-4 rounded-full overflow-hidden md:hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{
              width: `${((currentIndex % images.length) / (images.length - 1)) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StoryCarousel;