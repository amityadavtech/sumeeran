import { Link } from 'wouter';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: number;
  period?: string;
  features: PricingFeature[];
  isPopular?: boolean;
  buttonText?: string;
  delay?: number;
}

const PricingCard = ({ 
  title, 
  price, 
  period = '/month',
  features, 
  isPopular = false,
  buttonText = 'Select Plan',
  delay = 0 
}: PricingCardProps) => {
  return (
    <ScrollReveal delay={delay}>
      <div 
        className={`rounded-2xl p-8 shadow-lg transition-all duration-300 relative border ${
          isPopular 
            ? 'bg-gradient-to-br from-[#e4b7a0] to-[#c38370] text-white transform lg:-translate-y-4 shadow-2xl' 
            : 'bg-[#f6eee0] text-[#a45c40] hover:shadow-xl'
        }`}
        data-testid={`pricing-card-${title.toLowerCase()}`}
      >
        {isPopular && (
          <div 
            className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#a45c40] text-white px-6 py-1 rounded-full text-sm font-semibold flex items-center justify-center gap-1 shadow-lg"
            data-testid="popular-badge"
          >
            <Star className="inline w-4 h-4 text-gold" />
            MOST POPULAR
          </div>
        )}

        <h3 
          className={`text-2xl font-playfair font-bold mb-4 ${isPopular ? 'text-white' : 'text-[#a45c40]'}`}
          data-testid={`pricing-title-${title.toLowerCase()}`}
        >
          {title}
        </h3>

        <div className="mb-6 flex items-baseline gap-1">
          <span 
            className={`text-4xl font-bold ${isPopular ? 'text-white' : 'text-[#c38370]'}`}
            data-testid={`pricing-price-${title.toLowerCase()}`}
          >
            ₹{price.toLocaleString()}
          </span>
          <span className={`text-sm ${isPopular ? 'text-white/70' : 'text-[#a45c40]/70'}`}>
            {period}
          </span>
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check 
                className={`mt-1 mr-3 flex-shrink-0 w-4 h-4 ${
                  feature.included 
                    ? (isPopular ? 'text-gold' : 'text-[#c38370]')
                    : 'text-gray-400'
                }`} 
              />
              <span 
                className={`text-sm ${isPopular ? 'text-white' : 'text-[#5a4631]'} ${!feature.included ? 'line-through opacity-50' : ''}`}
                data-testid={`pricing-feature-${title.toLowerCase()}-${index}`}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        <Link href="/booking">
          <Button 
            className={`w-full font-semibold py-3 rounded-full transition-all duration-300 ${
              isPopular 
                ? 'bg-white text-[#a45c40] hover:bg-[#e4b7a0] hover:text-white' 
                : 'bg-[#e4b7a0] text-white hover:bg-[#c38370]'
            }`}
            data-testid={`pricing-button-${title.toLowerCase()}`}
          >
            {buttonText}
          </Button>
        </Link>
      </div>
    </ScrollReveal>
  );
};

export default PricingCard;
