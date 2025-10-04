import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
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
    <section className="py-24 bg-bg-light" data-testid="testimonial-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-2xl p-8 md:p-12 shadow-lg transition-all duration-500 ${
                index === currentSlide ? 'block' : 'hidden'
              }`}
              data-testid={`testimonial-slide-${index}`}
            >
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 text-gold fill-current"
                    data-testid={`star-${i}`}
                  />
                ))}
              </div>
              
              <p 
                className="text-gray-700 text-lg md:text-xl italic mb-8 leading-relaxed"
                data-testid={`testimonial-text-${index}`}
              >
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  data-testid={`testimonial-avatar-${index}`}
                />
                <div>
                  <h4 
                    className="font-semibold text-lg"
                    data-testid={`testimonial-name-${index}`}
                  >
                    {testimonial.name}
                  </h4>
                  <p 
                    className="text-gray-500"
                    data-testid={`testimonial-service-${index}`}
                  >
                    {testimonial.service}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-primary' : 'bg-gray-300'
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
