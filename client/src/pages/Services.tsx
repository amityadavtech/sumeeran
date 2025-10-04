import { useState } from 'react';
import { Link } from 'wouter';
import { Scissors, Sparkles, HandHeart, Paintbrush, Leaf, Crown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ServiceCard from '@/components/ui/ServiceCard';

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const services = [
    {
      id: 'hair',
      title: 'Hair Services',
      description: 'Transform your hair with precision cuts, vibrant colors, nourishing spa treatments, and keratin therapy by our expert stylists.',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      icon: Scissors,
      href: '/services/hair',
      iconColor: 'bg-primary/10 text-primary',
      category: 'hair',
      features: ['Hair Cutting & Styling', 'Color & Highlights', 'Hair Spa Treatments', 'Keratin & Smoothening'],
    },
    {
      id: 'skin',
      title: 'Skin Treatments',
      description: 'Rejuvenate your skin with advanced facials, laser therapy, and personalized skincare solutions for a radiant, healthy glow.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      icon: Sparkles,
      href: '/services/skin',
      iconColor: 'bg-secondary/10 text-secondary',
      category: 'skin',
      features: ['Advanced Facials', 'Laser Therapy', 'Anti-Aging Treatments', 'Acne Solutions'],
    },
    {
      id: 'nails',
      title: 'Nail Care',
      description: 'Experience perfection at your fingertips with exquisite nail art, luxurious manicures, pedicures, and nail extensions.',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      icon: HandHeart,
      href: '/services/nails',
      iconColor: 'bg-accent/10 text-accent',
      category: 'nails',
      features: ['Nail Art Design', 'Manicure & Pedicure', 'Nail Extensions', 'Gel Polish'],
    },
    {
      id: 'makeup',
      title: 'Makeup & Beauty',
      description: 'From bridal glamour to party looks, our professional makeup artists create stunning transformations that captivate.',
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      icon: Paintbrush,
      href: '/services/makeup',
      iconColor: 'bg-gold/10 text-gold',
      category: 'makeup',
      features: ['Bridal Makeup', 'Party & Event Makeup', 'Photography Makeup', 'Makeup Lessons'],
    },
    {
      id: 'spa',
      title: 'Spa & Relaxation',
      description: 'Unwind and rejuvenate with therapeutic massages, aromatherapy, and holistic wellness treatments in our serene sanctuary.',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      icon: Leaf,
      href: '/services/spa',
      iconColor: 'bg-primary/10 text-primary',
      category: 'spa',
      features: ['Therapeutic Massage', 'Aromatherapy', 'Body Treatments', 'Wellness Packages'],
    },
    {
      id: 'bridal',
      title: 'Bridal Packages',
      description: 'Comprehensive bridal beauty services including pre-bridal prep, bridal day styling, and couple packages for your perfect day.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      icon: Crown,
      href: '/services/bridal',
      iconColor: 'bg-secondary/10 text-secondary',
      category: 'bridal',
      features: ['Pre-Bridal Packages', 'Bridal Day Styling', 'Couple Packages', 'Bridal Party Services'],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Hair' },
    { id: 'skin', label: 'Skin' },
    { id: 'nails', label: 'Nails' },
    { id: 'makeup', label: 'Makeup' },
    { id: 'spa', label: 'Spa' },
    { id: 'bridal', label: 'Bridal' },
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  return (
    <div className="min-h-screen pt-20" data-testid="services-page">
      {/* Hero Section */}
      <section 
        className="relative py-32 flex items-center justify-center overflow-hidden parallax"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080)'
        }}
        data-testid="services-hero"
      >
        <div className="hero-gradient absolute inset-0"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <ScrollReveal>
            <span className="inline-block px-6 py-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full text-gold font-semibold text-sm tracking-wider mb-6">
              OUR SERVICES
            </span>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6" data-testid="services-hero-title">
              Explore Our Services
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto" data-testid="services-hero-description">
              Discover our comprehensive range of luxury beauty treatments designed to enhance your natural beauty
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Filter */}
      <section className="py-12 bg-white" data-testid="services-filter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-bg-light text-gray-600 hover:bg-primary hover:text-white'
                  }`}
                  data-testid={`filter-button-${category.id}`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-bg-light" data-testid="services-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={service.id} className="group">
                <ScrollReveal delay={index * 100}>
                  <div className="service-card bg-white rounded-2xl overflow-hidden shadow-lg h-full">
                    <div className="img-zoom-container h-64">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="img-zoom w-full h-full object-cover"
                        data-testid={`service-image-${service.id}`}
                      />
                    </div>
                    
                    <div className="p-8 flex flex-col h-full">
                      <div className={`w-14 h-14 ${service.iconColor} rounded-full flex items-center justify-center mb-4`}>
                        <service.icon className="text-2xl" />
                      </div>
                      
                      <h3 
                        className="text-2xl font-playfair font-bold mb-3 text-text-dark"
                        data-testid={`service-title-${service.id}`}
                      >
                        {service.title}
                      </h3>
                      
                      <p 
                        className="text-gray-600 mb-6 leading-relaxed flex-grow"
                        data-testid={`service-description-${service.id}`}
                      >
                        {service.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-text-dark mb-3">What's Included:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li 
                              key={featureIndex} 
                              className="text-sm text-gray-600 flex items-center"
                              data-testid={`service-feature-${service.id}-${featureIndex}`}
                            >
                              <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex gap-3">
                        <Link href={service.href} className="flex-1">
                          <Button 
                            className="w-full bg-primary text-white hover:bg-secondary"
                            data-testid={`service-details-button-${service.id}`}
                          >
                            View Details
                          </Button>
                        </Link>
                        <Link href="/booking">
                          <Button 
                            variant="outline" 
                            className="border-primary text-primary hover:bg-primary hover:text-white"
                            data-testid={`service-book-button-${service.id}`}
                          >
                            Book Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-24 bg-white" data-testid="service-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Why Choose Our Services
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark" data-testid="features-title">
                Premium Service Standards
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-testid="features-description">
                Every service is delivered with the highest standards of quality, hygiene, and customer care
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏆',
                title: 'Premium Products',
                description: 'We use only the finest, internationally acclaimed beauty products and tools for all treatments.',
              },
              {
                icon: '🧑‍⚕️',
                title: 'Expert Professionals',
                description: 'Our team consists of certified beauty experts with extensive training and years of experience.',
              },
              {
                icon: '🛡️',
                title: 'Hygiene Standards',
                description: 'Hospital-grade sterilization and safety protocols ensure your health and safety at all times.',
              },
              {
                icon: '💎',
                title: 'Luxurious Experience',
                description: 'Every visit is designed to be a luxurious, relaxing experience in our premium facilities.',
              },
              {
                icon: '📞',
                title: 'Personalized Care',
                description: 'Each treatment is customized to your unique needs, preferences, and skin/hair type.',
              },
              {
                icon: '🎯',
                title: 'Guaranteed Results',
                description: 'We stand behind our work with a satisfaction guarantee and follow-up care support.',
              },
            ].map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 100}>
                <div 
                  className="text-center p-6 rounded-2xl bg-bg-light hover:shadow-lg transition-all duration-300"
                  data-testid={`feature-${index}`}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 
                    className="text-xl font-playfair font-bold mb-3 text-text-dark"
                    data-testid={`feature-title-${index}`}
                  >
                    {feature.title}
                  </h3>
                  <p 
                    className="text-gray-600 leading-relaxed"
                    data-testid={`feature-description-${index}`}
                  >
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-secondary via-primary to-accent text-white" data-testid="services-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6" data-testid="cta-title">
              Ready to Experience Luxury?
            </h2>
            <p className="text-xl mb-10 text-gray-100 max-w-3xl mx-auto" data-testid="cta-description">
              Book your appointment today and discover why thousands of clients trust us with their beauty needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/booking">
                <Button 
                  className="bg-white text-primary px-10 py-4 rounded-full font-semibold text-lg hover:bg-gold hover:text-white transition-all duration-300 shadow-xl"
                  data-testid="cta-book-button"
                >
                  Book Your Service
                </Button>
              </Link>
              <Link href="/contact" className="inline-flex items-center text-white font-semibold text-lg hover:text-gold transition-colors">
                Have Questions? Contact Us <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Services;
