import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-media-query';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  href: string;
  iconColor: string;
}

const ServiceCarousel = ({ services }: { services: ServiceCardProps[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const scrollToService = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const serviceWidth = container.offsetWidth;
    const scrollPosition = index * serviceWidth;
    
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (!isMobile || isPaused) return;

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % services.length;
      setCurrentIndex(nextIndex);
      scrollToService(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, services.length, isMobile]);

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

    const serviceWidth = container.offsetWidth;
    const currentScroll = container.scrollLeft;
    const serviceIndex = Math.round(currentScroll / serviceWidth);
    
    setCurrentIndex(serviceIndex % services.length);
    scrollToService(serviceIndex);
    
    setTouchStart(null);
    setIsPaused(false);
  };

  const nextService = () => {
    const nextIndex = (currentIndex + 1) % services.length;
    setCurrentIndex(nextIndex);
    scrollToService(nextIndex);
  };

  const prevService = () => {
    const prevIndex = (currentIndex - 1 + services.length) % services.length;
    setCurrentIndex(prevIndex);
    scrollToService(prevIndex);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-2xl">
      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mb-4 p-2">
        {services.map((_, idx) => (
          <button
            key={idx}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex % services.length
                ? 'bg-primary scale-125 '
                : 'bg-white border border-primary/30 hover:bg-primary/20'
            }`}
            onClick={() => {
              setCurrentIndex(idx);
              scrollToService(idx);
            }}
            aria-label={`Go to service ${idx + 1}`}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevService}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary/5 rounded-full p-2.5 shadow-lg transition-all duration-300 hover:scale-110 border border-primary/10"
        aria-label="Previous service"
      >
        <ChevronLeft className="w-6 h-6 text-primary" />
      </button>
      <button
        onClick={nextService}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Next service"
      >
        <ChevronRight className="w-6 h-6 text-primary" />
      </button>

      <div
        ref={scrollContainerRef}
        className="flex snap-x snap-mandatory overflow-x-hidden scroll-smooth"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div key={idx} className="flex-none w-full snap-center">
              <div className="px-2 py-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                  
                  <div className={`${service.iconColor} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <a
                    href={service.href}
                    className="inline-flex items-center text-primary hover:text-secondary transition-colors"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-white/50 mt-2 mb-4 rounded-full overflow-hidden mx-4">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{
            width: `${((currentIndex % services.length) / (services.length - 1)) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default ServiceCarousel;