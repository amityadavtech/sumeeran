import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-bg-light via-white to-bg-light relative overflow-hidden" data-testid="testimonial-section">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full mb-4 md:mb-6">
            <Star className="w-4 h-4 text-primary fill-current" />
            <span className="text-primary font-bold text-xs md:text-sm tracking-wider uppercase">Client Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-4 md:mb-6 text-text-dark px-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto px-4">
            Real experiences from real people who transformed their beauty journey with us
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="min-w-full px-4"
                  data-testid={`testimonial-slide-${index}`}
                >
                  <div className="bg-white rounded-3xl p-6 md:p-12 shadow-2xl border border-gray-100 relative">
                    <Quote className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 md:w-16 md:h-16 text-gold/20" />
                    
                    <div className="flex items-center gap-2 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 md:w-5 md:h-5 text-gold fill-current"
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
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-gold rounded-full blur-md opacity-50"></div>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="relative w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-white"
                          data-testid={`testimonial-avatar-${index}`}
                        />
                      </div>
                      <div>
                        <h4 
                          className="font-bold text-base md:text-lg text-text-dark"
                          data-testid={`testimonial-name-${index}`}
                        >
                          {testimonial.name}
                        </h4>
                        <p 
                          className="text-gray-500 text-sm md:text-base"
                          data-testid={`testimonial-service-${index}`}
                        >
                          {testimonial.service}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 md:mt-12 gap-2 md:gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all rounded-full ${
                  index === currentSlide 
                    ? 'w-8 md:w-12 h-3 bg-gradient-to-r from-primary to-gold' 
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                data-testid={`testimonial-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
