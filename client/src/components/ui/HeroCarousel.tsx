
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
    title: 'Where Beauty Meets Luxury',
    subtitle: 'Experience world-class beauty treatments in pure elegance',
  },
  {
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
    title: 'Transform Your Look',
    subtitle: 'Expert stylists bringing your beauty vision to life',
  },
  {
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
    title: 'Indulge in Perfection',
    subtitle: 'Premium treatments crafted just for you',
  },
  {
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
    title: 'Relax & Rejuvenate',
    subtitle: 'Escape to our sanctuary of beauty and wellness',
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-secondary/85 to-gold/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
          {/* Animated particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-2 h-2 bg-gold/30 rounded-full animate-float" style={{ top: '20%', left: '10%', animationDelay: '0s' }} />
            <div className="absolute w-3 h-3 bg-gold/20 rounded-full animate-float" style={{ top: '60%', left: '80%', animationDelay: '1s' }} />
            <div className="absolute w-2 h-2 bg-gold/40 rounded-full animate-float" style={{ top: '40%', left: '30%', animationDelay: '2s' }} />
            <div className="absolute w-3 h-3 bg-gold/25 rounded-full animate-float" style={{ top: '80%', left: '60%', animationDelay: '1.5s' }} />
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-5xl mx-auto">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === currentSlide
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8 absolute'
              }`}
            >
              <div className="mb-6">
                <span className="inline-block px-6 py-2 bg-gold/30 backdrop-blur-sm border border-gold/50 rounded-full text-gold font-semibold text-sm tracking-wider">
                  PREMIUM BEAUTY EXPERIENCE
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto">
                {slide.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md hover:bg-gold/30 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-gold transition-colors" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md hover:bg-gold/30 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-gold transition-colors" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-8 md:w-12 h-2 md:h-3 bg-gold shadow-lg shadow-gold/50'
                : 'w-2 md:w-3 h-2 md:h-3 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
