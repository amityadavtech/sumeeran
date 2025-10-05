import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./carousel";
import { Button } from './button';

const TestimonialCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-bg-light via-white to-bg-light relative overflow-hidden" data-testid="testimonial-section">
      {/* Premium Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/3 to-gold/3 rounded-full blur-[120px] opacity-70"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full mb-4 md:mb-6 shadow-lg transform hover:scale-105 transition-all duration-300">
            <Star className="w-4 h-4 text-primary fill-current animate-pulse" />
            <span className="text-primary font-bold text-xs md:text-sm tracking-wider uppercase">Client Stories</span>
            <Star className="w-4 h-4 text-primary fill-current animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-4 md:mb-6 px-4 bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto px-4">
            Real experiences from real people who transformed their beauty journey with us
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.id}
                  className="px-4 sm:px-6 md:px-8"
                  data-testid={`testimonial-slide-${index}`}
                >
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.1)] border border-white relative group hover:shadow-[0_0_70px_rgba(0,0,0,0.15)] transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-gold/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Quote className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 md:w-16 md:h-16 text-gold/20 transform rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                    
                    <div className="flex items-center gap-2 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 md:w-5 md:h-5 text-gold fill-current animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                          data-testid={`star-${i}`}
                        />
                      ))}
                    </div>
                    
                    <p 
                      className="text-gray-700 text-base md:text-xl italic mb-8 leading-relaxed relative z-10"
                      data-testid={`testimonial-text-${index}`}
                    >
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-gold rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="relative w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-white shadow-xl transform group-hover:scale-105 transition-transform duration-300"
                          data-testid={`testimonial-avatar-${index}`}
                        />
                      </div>
                      <div>
                        <h4 
                          className="font-bold text-lg md:text-xl text-text-dark"
                          data-testid={`testimonial-name-${index}`}
                        >
                          {testimonial.name}
                        </h4>
                        <p 
                          className="text-gray-500 text-sm md:text-base font-medium"
                          data-testid={`testimonial-service-${index}`}
                        >
                          {testimonial.service}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Arrows */}
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 border-primary/30 hover:bg-primary/10 hover:border-primary" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-12 border-primary/30 hover:bg-primary/10 hover:border-primary" />
          </Carousel>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 md:gap-3 mt-8 md:mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`transition-all duration-500 rounded-full ${
                  index === current
                    ? 'w-8 md:w-12 h-2 md:h-3 bg-gradient-to-r from-primary to-gold shadow-lg'
                    : 'w-2 md:w-3 h-2 md:h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
