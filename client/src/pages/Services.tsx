import { useState } from 'react';
import { Link } from 'wouter';
import { Scissors, Sparkles, HandHeart, Paintbrush, Leaf, Crown, ArrowRight, UserCheck, Award, ShieldCheck, Coffee } from 'lucide-react';
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
            <span className="inline-block px-6 py-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full text-text-dark font-semibold text-sm tracking-wider mb-6">
              OUR SERVICES
            </span>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-text-dark" data-testid="services-hero-title">
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
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === category.id
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
      <section className="py-16 sm:py-20 bg-bg-light" data-testid="services-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((service, index) => (
              <div key={service.id} className="group">
                <ScrollReveal delay={index * 100}>
                  <div className="service-card bg-white rounded-2xl overflow-hidden shadow-lg h-full flex flex-col">
                    {/* Image */}
                    <div className="img-zoom-container h-48 sm:h-56 md:h-64 lg:h-64">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="img-zoom w-full h-full object-cover"
                        data-testid={`service-image-${service.id}`}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-1">
                      {/* Icon */}
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 ${service.iconColor} rounded-full flex items-center justify-center mb-3 sm:mb-4`}>
                        <service.icon className="text-xl sm:text-2xl" />
                      </div>

                      {/* Title */}
                      <h3
                        className="text-xl sm:text-2xl font-playfair font-bold mb-2 sm:mb-3 text-text-dark"
                        data-testid={`service-title-${service.id}`}
                      >
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed flex-grow"
                        data-testid={`service-description-${service.id}`}
                      >
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mb-4 sm:mb-6">
                        <h4 className="font-semibold text-text-dark mb-2 sm:mb-3 text-sm sm:text-base">What's Included:</h4>
                        <ul className="space-y-1 text-sm sm:text-base">
                          {service.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center"
                              data-testid={`service-feature-${service.id}-${featureIndex}`}
                            >
                              <span className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
                        <Link href={service.href} className="flex-1">
                          <Button
                            className="w-full sm:w-auto bg-primary text-white hover:bg-secondary"
                            data-testid={`service-details-button-${service.id}`}
                          >
                            View Details
                          </Button>
                        </Link>
                        <Link href="/booking" className="flex-1 sm:flex-none">
                          <Button
                            variant="outline"
                            className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white"
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
      <section
        className="relative py-20 bg-[#f6eee0] overflow-hidden"
        data-testid="why-choose-us-section"
      >
        {/* Decorative motion blobs */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-[#e4b7a0]/50 to-[#c38370]/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-br from-[#a45c40]/40 to-[#e4b7a0]/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

        {/* Main Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Section Header */}
          <div className="mb-12">
            <span className="inline-block px-6 py-2 mb-4 text-xs md:text-sm font-bold tracking-widest uppercase text-[#a45c40] bg-[#e4b7a0]/30 rounded-full animate-pulse-slow">
              Why Choose Sumeeran Salon & Academy
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-[#a45c40] mb-4 leading-tight">
              Experience The Luxe Difference
            </h2>
            <p className="text-[#5a4631] text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Where innovation meets tradition and beauty transforms into an art form. Discover why we're Mumbai's most trusted luxury destination.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {[
              {
                icon: <Award className="mx-auto text-[#c38370] w-12 h-12 md:w-16 md:h-16" />,
                title: 'Premium Luxury',
                description: 'World-class facilities with state-of-the-art equipment and premium international products.',
              },
              {
                icon: <UserCheck className="mx-auto text-[#c38370] w-12 h-12 md:w-16 md:h-16" />,
                title: 'Expert Team',
                description: 'Certified professionals with years of experience and international training from Paris & London.',
              },
              {
                icon: <ShieldCheck className="mx-auto text-[#c38370] w-12 h-12 md:w-16 md:h-16" />,
                title: 'Hygiene & Safety',
                description: 'Hospital-grade sterilization and safety protocols ensuring your complete peace of mind.',
              },
              {
                icon: <Coffee className="mx-auto text-[#c38370] w-12 h-12 md:w-16 md:h-16" />,
                title: 'Ultimate Comfort',
                description: 'Luxurious ambiance designed for complete relaxation and rejuvenation of body and soul.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 text-center group hover:-translate-y-2 hover:shadow-xl transition-transform duration-500"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#e4b7a0]/0 via-[#c38370]/10 to-[#a45c40]/0 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <div className="transform group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-playfair font-bold text-[#c38370] mb-2 group-hover:text-[#a45c40] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#5a4631] text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom animated underline */}
                <div className="absolute bottom-4 left-1/2 w-0 h-1 bg-gradient-to-r from-[#e4b7a0] via-[#c38370] to-[#a45c40] rounded-full group-hover:w-3/4 transition-all duration-700 -translate-x-1/2"></div>
              </div>
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
