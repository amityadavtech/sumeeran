import { Link } from 'wouter';
import { ArrowRight, LucideIcon } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  href: string;
  iconColor: string;
  delay?: number;
}

const ServiceCard = ({ 
  title, 
  description, 
  image, 
  icon: Icon, 
  href, 
  iconColor,
  delay = 0 
}: ServiceCardProps) => {
  return (
    <ScrollReveal delay={delay}>
      <div 
        className="service-card bg-white rounded-2xl overflow-hidden shadow-lg group"
        data-testid={`service-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="img-zoom-container h-64">
          <img 
            src={image} 
            alt={title}
            className="img-zoom w-full h-full object-cover"
            data-testid={`service-image-${title.toLowerCase().replace(/\s+/g, '-')}`}
          />
        </div>
        
        <div className="p-8">
          <div className={`w-14 h-14 ${iconColor} rounded-full flex items-center justify-center mb-4`}>
            <Icon className="text-2xl" />
          </div>
          
          <h3 
            className="text-2xl font-playfair font-bold mb-3 text-text-dark"
            data-testid={`service-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {title}
          </h3>
          
          <p 
            className="text-gray-600 mb-6 leading-relaxed"
            data-testid={`service-description-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {description}
          </p>
          
          <Link 
            href={href}
            className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors group-hover:translate-x-1 transition-transform"
            data-testid={`service-link-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            Explore {title} <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ServiceCard;
