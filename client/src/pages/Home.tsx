import { Link } from 'wouter';
import { ArrowRight, Scissors, Sparkles, HandHeart, Paintbrush, Leaf, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import CounterSection from '@/components/ui/CounterSection';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import ServiceCard from '@/components/ui/ServiceCard';
import GalleryGrid from '@/components/ui/GalleryGrid';
import PricingCard from '@/components/ui/PricingCard';
import HeroCarousel from '@/components/ui/HeroCarousel';

const Home = () => {
  const services = [
    {
      title: 'Hair Services',
      description: 'From precision cuts to vibrant colors, hair spa to keratin treatments - transform your hair with our expert stylists.',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      icon: Scissors,
      href: '/services/hair',
      iconColor: 'bg-primary/10 text-primary',
    },
    {
      title: 'Skin Treatments',
      description: 'Rejuvenate your skin with advanced facials, laser therapy, and customized skincare solutions for radiant glow.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      icon: Sparkles,
      href: '/services/skin',
      iconColor: 'bg-secondary/10 text-secondary',
    },
    {
      title: 'Nail Care',
      description: 'Exquisite nail art, manicures, pedicures, and extensions - perfection at your fingertips with premium hygiene.',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      icon: HandHeart,
      href: '/services/nails',
      iconColor: 'bg-accent/10 text-accent',
    },
    {
      title: 'Makeup & Beauty',
      description: 'From bridal to party makeup, our artists create stunning looks that make you the center of attention.',
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      icon: Paintbrush,
      href: '/services/makeup',
      iconColor: 'bg-gold/10 text-gold',
    },
    {
      title: 'Spa & Relaxation',
      description: 'Unwind with therapeutic massages, aromatherapy, and holistic spa treatments in our tranquil sanctuary.',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      icon: Leaf,
      href: '/services/spa',
      iconColor: 'bg-primary/10 text-primary',
    },
    {
      title: 'Bridal Packages',
      description: 'Comprehensive pre-bridal and bridal services to make your special day absolutely unforgettable.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      icon: Crown,
      href: '/services/bridal',
      iconColor: 'bg-secondary/10 text-secondary',
    },
  ];

  const pricingPlans = [
    {
      title: 'Basic',
      price: 2999,
      features: [
        { text: 'Basic Hair Cut & Style', included: true },
        { text: 'Express Facial', included: true },
        { text: 'Basic Manicure', included: true },
        { text: '10% Off on Products', included: true },
      ],
    },
    {
      title: 'Classic',
      price: 4999,
      features: [
        { text: 'Premium Hair Services', included: true },
        { text: 'Advanced Facial', included: true },
        { text: 'Nail Art & Extensions', included: true },
        { text: '15% Off on Products', included: true },
      ],
    },
    {
      title: 'Elite',
      price: 7999,
      features: [
        { text: 'All Classic Services', included: true },
        { text: 'Hair Spa & Keratin', included: true },
        { text: 'Full Body Massage', included: true },
        { text: '20% Off on Products', included: true },
      ],
      isPopular: true,
    },
    {
      title: 'Royal',
      price: 12999,
      features: [
        { text: 'VIP Treatment Access', included: true },
        { text: 'Personal Beauty Consultant', included: true },
        { text: 'Unlimited Spa Access', included: true },
        { text: '30% Off on Everything', included: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen" data-testid="home-page">
      {/* Hero Section with Auto-Sliding Carousel */}
      <section 
        className="relative h-screen overflow-hidden"
        data-testid="hero-section"
      >
        <HeroCarousel />
        
        {/* CTA Buttons */}
        <div className="absolute bottom-24 md:bottom-32 left-1/2 -translate-x-1/2 z-20 flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <Link href="/booking">
            <Button className="btn-gradient text-base md:text-lg px-6 md:px-8 py-3 md:py-4 shadow-2xl" data-testid="hero-book-button">
              <span>Book Your Experience</span>
            </Button>
          </Link>
          <Link href="/services">
            <Button 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-gold/30 hover:border-gold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 shadow-xl"
              data-testid="hero-explore-button"
            >
              Explore Services
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20 hidden md:block">
          <ArrowRight className="rotate-90 text-2xl" />
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white" data-testid="about-preview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                  Our Story
                </span>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark" data-testid="about-title">
                  15 Years of Excellence in Beauty
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed" data-testid="about-description-1">
                  Luxe Beauty has been transforming lives through exceptional beauty services since 2009. Our commitment to excellence, combined with cutting-edge techniques and premium products, has made us the premier destination for beauty enthusiasts.
                </p>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed" data-testid="about-description-2">
                  We believe that true beauty comes from confidence, and our expert team is dedicated to helping you discover and enhance your natural radiance.
                </p>
                <Link href="/about" className="inline-flex items-center text-primary font-semibold text-lg hover:text-secondary transition-colors" data-testid="about-link">
                  Discover Our Journey <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="img-zoom-container rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" alt="Salon team" className="img-zoom w-full h-64 object-cover" />
                </div>
                <div className="img-zoom-container rounded-lg overflow-hidden mt-8">
                  <img src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" alt="Salon interior" className="img-zoom w-full h-64 object-cover" />
                </div>
                <div className="img-zoom-container rounded-lg overflow-hidden -mt-8">
                  <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" alt="Beauty treatment" className="img-zoom w-full h-64 object-cover" />
                </div>
                <div className="img-zoom-container rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" alt="Beauty products" className="img-zoom w-full h-64 object-cover" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Premium Services Preview */}
      <section className="py-24 bg-bg-light" data-testid="services-preview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Our Expertise
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark" data-testid="services-title">
                Premium Services
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-testid="services-description">
                Discover our comprehensive range of luxury beauty treatments designed to bring out your best
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="py-24 bg-white" data-testid="before-after-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Transformations
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark" data-testid="transformations-title">
                See the Magic Happen
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-testid="transformations-description">
                Real results from real clients - witness the transformative power of our expert services
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-bg-light rounded-2xl p-6" data-testid="before-after-hair">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-2">BEFORE</p>
                    <img src="https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" alt="Before hair treatment" className="w-full h-64 object-cover rounded-lg" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gold mb-2">AFTER</p>
                    <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" alt="After hair treatment" className="w-full h-64 object-cover rounded-lg" />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-playfair font-bold text-xl mb-2">Hair Color Transformation</h4>
                  <p className="text-gray-600">Balayage + Keratin Treatment</p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <div className="bg-bg-light rounded-2xl p-6" data-testid="before-after-skin">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-2">BEFORE</p>
                    <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" alt="Before skin treatment" className="w-full h-64 object-cover rounded-lg" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gold mb-2">AFTER</p>
                    <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" alt="After skin treatment" className="w-full h-64 object-cover rounded-lg" />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-playfair font-bold text-xl mb-2">Skin Brightening</h4>
                  <p className="text-gray-600">HydraFacial + Vitamin C Treatment</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden" data-testid="why-choose-us-section">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-gold font-semibold text-sm tracking-wider uppercase mb-4 block">
                Why Luxe Beauty
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6" data-testid="why-choose-us-title">
                The Luxe Difference
              </h2>
              <p className="text-gray-200 text-lg max-w-3xl mx-auto" data-testid="why-choose-us-description">
                Experience unparalleled luxury and expertise that sets us apart from the rest
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '💎', title: 'Premium Luxury', description: 'World-class facilities with state-of-the-art equipment and premium products' },
              { icon: '🎓', title: 'Expert Team', description: 'Certified professionals with years of experience and international training' },
              { icon: '🛡️', title: 'Premium Hygiene', description: 'Hospital-grade sterilization and safety protocols for your peace of mind' },
              { icon: '🛋️', title: 'Ultimate Comfort', description: 'Luxurious ambiance designed for relaxation and rejuvenation' },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="text-center" data-testid={`why-choose-us-item-${index}`}>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-playfair font-bold mb-3" data-testid={`why-choose-us-item-title-${index}`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed" data-testid={`why-choose-us-item-description-${index}`}>
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <CounterSection />

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Gallery Highlights */}
      <section className="py-24 bg-white" data-testid="gallery-highlights-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Our Work
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark" data-testid="gallery-title">
                Gallery Showcase
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8" data-testid="gallery-description">
                Explore our portfolio of stunning transformations and beautiful spaces
              </p>
            </div>
          </ScrollReveal>
          
          <GalleryGrid limit={6} />
          
          <div className="text-center mt-12">
            <Link href="/gallery">
              <Button className="btn-gradient text-lg px-8 py-4" data-testid="view-gallery-button">
                <span>View Full Gallery</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 bg-bg-light" data-testid="pricing-preview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Packages
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark" data-testid="pricing-title">
                Choose Your Perfect Package
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-testid="pricing-description">
                Premium beauty packages tailored to your needs and preferences
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.title}
                {...plan}
                delay={index * 100}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/pricing" className="inline-flex items-center text-primary font-semibold text-lg hover:text-secondary transition-colors" data-testid="view-pricing-link">
              View Detailed Pricing <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 bg-white" data-testid="booking-cta-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-secondary via-primary to-accent rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6" data-testid="cta-title">
                  Ready for Your Transformation?
                </h2>
                <p className="text-xl mb-10 text-gray-100 max-w-3xl mx-auto" data-testid="cta-description">
                  Book your luxury beauty experience today and discover the confidence that comes with looking and feeling your absolute best
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/booking">
                    <Button 
                      className="bg-white text-primary px-10 py-4 rounded-full font-semibold text-lg hover:bg-gold hover:text-white transition-all duration-300 shadow-xl"
                      data-testid="cta-book-button"
                    >
                      Book Appointment Now
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button 
                      variant="outline" 
                      className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300"
                      data-testid="cta-contact-button"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
