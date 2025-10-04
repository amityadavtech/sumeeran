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
        className={`bg-white rounded-2xl p-8 shadow-lg gold-border-hover transition-all duration-300 relative ${
          isPopular ? 'bg-gradient-to-br from-primary to-secondary text-white transform lg:-translate-y-4' : ''
        }`}
        data-testid={`pricing-card-${title.toLowerCase()}`}
      >
        {isPopular && (
          <div 
            className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold text-white px-6 py-1 rounded-full text-sm font-semibold"
            data-testid="popular-badge"
          >
            <Star className="inline w-4 h-4 mr-1" />
            MOST POPULAR
          </div>
        )}
        
        <h3 
          className={`text-2xl font-playfair font-bold mb-4 ${isPopular ? 'text-white' : 'text-text-dark'}`}
          data-testid={`pricing-title-${title.toLowerCase()}`}
        >
          {title}
        </h3>
        
        <div className="mb-6">
          <span 
            className={`text-4xl font-bold ${isPopular ? 'text-white' : 'text-primary'}`}
            data-testid={`pricing-price-${title.toLowerCase()}`}
          >
            ₹{price.toLocaleString()}
          </span>
          <span className={`text-sm ${isPopular ? 'text-gray-200' : 'text-gray-500'}`}>
            {period}
          </span>
        </div>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check 
                className={`mt-1 mr-3 flex-shrink-0 w-4 h-4 ${
                  feature.included 
                    ? (isPopular ? 'text-gold' : 'text-primary')
                    : 'text-gray-400'
                }`} 
              />
              <span 
                className={`text-sm ${
                  isPopular ? 'text-white' : 'text-gray-600'
                } ${!feature.included ? 'line-through opacity-50' : ''}`}
                data-testid={`pricing-feature-${title.toLowerCase()}-${index}`}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
        
        <Link href="/booking">
          <Button 
            className={`w-full ${
              isPopular 
                ? 'bg-white text-primary hover:bg-gold hover:text-white' 
                : 'bg-bg-light text-primary hover:bg-primary hover:text-white'
            } transition-all duration-300`}
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
