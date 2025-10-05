
import { useState, useEffect } from 'react';
import { Sparkles, Clock, Gift } from 'lucide-react';
import { Button } from './button';
import { Link } from 'wouter';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./carousel";

const deals = [
  {
    title: 'Bridal Special Package',
    discount: '30% OFF',
    description: 'Complete bridal makeover with pre-bridal treatments',
    validUntil: 'Valid until Dec 31, 2024',
    bgColor: 'from-rose-500 to-pink-600',
    icon: Gift,
  },
  {
    title: 'New Year Glow',
    discount: '40% OFF',
    description: 'HydraFacial + Anti-aging treatment combo',
    validUntil: 'Limited time offer',
    bgColor: 'from-purple-500 to-indigo-600',
    icon: Sparkles,
  },
  {
    title: 'Hair Transformation',
    discount: '25% OFF',
    description: 'Hair color + Keratin treatment package',
    validUntil: 'This weekend only',
    bgColor: 'from-amber-500 to-orange-600',
    icon: Clock,
  },
  {
    title: 'Spa Retreat',
    discount: '50% OFF',
    description: 'Full body massage + aromatherapy session',
    validUntil: 'Valid for first 50 bookings',
    bgColor: 'from-emerald-500 to-teal-600',
    icon: Gift,
  },
];

const DealsCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 4000);

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
    <div className="relative">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {deals.map((deal, index) => {
            const Icon = deal.icon;
            return (
            <CarouselItem key={index} className="px-2 md:px-4">
              <div className={`relative bg-gradient-to-br ${deal.bgColor} rounded-2xl md:rounded-3xl p-6 md:p-12 text-white  group`}>
                <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-white/10 rounded-full blur-3xl transform translate-x-24 md:translate-x-32 -translate-y-24 md:-translate-y-32 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-32 md:w-48 h-32 md:h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-16 md:-translate-x-24 translate-y-16 md:translate-y-24 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center gap-6 md:gap-8">
                  <div className="w-full">
                    <div className="inline-flex items-center gap-2 bg-white/25 backdrop-blur-md px-4 py-2 rounded-full mb-4 border border-white/30">
                      <Icon className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="text-xs md:text-sm font-bold tracking-wide">{deal.validUntil}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-playfair font-bold mb-3 md:mb-4 leading-tight">{deal.title}</h3>
                    <p className="text-sm sm:text-base md:text-xl text-white/95 mb-6 max-w-2xl mx-auto leading-relaxed">{deal.description}</p>
                  </div>
                  
                  <div className="relative mb-4 md:mb-6">
                    <div className="text-6xl md:text-8xl font-bold opacity-10 absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2">{deal.discount}</div>
                    <div className="relative bg-white/25 backdrop-blur-xl border-2 md:border-4 border-white/40 rounded-2xl md:rounded-3xl px-8 md:px-12 py-6 md:py-8 transform rotate-2 hover:rotate-0 transition-all duration-300 shadow-2xl">
                      <div className="text-4xl sm:text-5xl md:text-7xl font-playfair font-bold">{deal.discount}</div>
                    </div>
                  </div>
                  
                  <Link href="/booking" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto bg-white text-primary hover:bg-gold hover:text-white px-6 md:px-10 py-4 md:py-6 text-base md:text-lg font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl">
                      Book Now & Save
                    </Button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          );
        })}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12 border-primary/30 hover:bg-primary/10 hover:border-primary" />
        <CarouselNext className="hidden md:flex -right-12 border-primary/30 hover:bg-primary/10 hover:border-primary" />
      </Carousel>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
        {deals.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`transition-all duration-300 rounded-full ${
              index === current
                ? 'w-8 md:w-12 h-2 md:h-3 bg-gradient-to-r from-primary to-gold'
                : 'w-2 md:w-3 h-2 md:h-3 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to deal ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DealsCarousel;
