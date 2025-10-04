
import { useState, useEffect } from 'react';
import { Sparkles, Clock, Gift } from 'lucide-react';
import { Button } from './button';
import { Link } from 'wouter';

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
  const [currentDeal, setCurrentDeal] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDeal((prev) => (prev + 1) % deals.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentDeal * 100}%)` }}>
        {deals.map((deal, index) => {
          const Icon = deal.icon;
          return (
            <div key={index} className="min-w-full px-4">
              <div className={`relative bg-gradient-to-br ${deal.bgColor} rounded-3xl p-8 md:p-12 text-white overflow-hidden group`}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-24 translate-y-24 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-semibold">{deal.validUntil}</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-playfair font-bold mb-4">{deal.title}</h3>
                    <p className="text-xl text-white/90 mb-6">{deal.description}</p>
                    <Link href="/booking">
                      <Button className="bg-white text-primary hover:bg-gold hover:text-white px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-300">
                        Book Now & Save
                      </Button>
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="text-8xl md:text-9xl font-bold opacity-20 absolute -top-8 -right-8">{deal.discount}</div>
                    <div className="bg-white/20 backdrop-blur-md border-4 border-white/30 rounded-3xl px-12 py-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <div className="text-7xl font-playfair font-bold">{deal.discount}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {deals.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentDeal(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentDeal
                ? 'w-12 h-3 bg-gradient-to-r from-primary to-gold'
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to deal ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DealsCarousel;
