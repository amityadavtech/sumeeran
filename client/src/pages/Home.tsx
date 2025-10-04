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
import DealsCarousel from '@/components/ui/DealsCarousel';

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

      {/* About Preview Section - Premium Story Carousel */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white via-bg-light to-white relative overflow-hidden" data-testid="about-preview-section">
        <div className="absolute top-0 left-0 w-full h-16 sm:h-24 md:h-32 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-center">
            <ScrollReveal>
              <div className="relative text-center lg:text-left px-2 sm:px-0">
                <div className="absolute -top-4 md:-top-8 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gold/10 rounded-full blur-2xl"></div>
                <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-1.5 sm:py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full mb-4 sm:mb-6">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-primary font-bold text-xs sm:text-sm tracking-wider uppercase">Our Story</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold mb-3 sm:mb-4 md:mb-6 leading-tight bg-gradient-to-r from-primary via-secondary to-gold bg-clip-text text-transparent px-2 sm:px-0" data-testid="about-title">
                  15 Years of Excellence in Beauty
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg mb-3 sm:mb-4 md:mb-6 leading-relaxed px-2 sm:px-0" data-testid="about-description-1">
                  Luxe Beauty has been transforming lives through exceptional beauty services since 2009. Our commitment to excellence, combined with cutting-edge techniques and premium products, has made us the premier destination for beauty enthusiasts.
                </p>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 md:mb-8 leading-relaxed px-2 sm:px-0" data-testid="about-description-2">
                  We believe that true beauty comes from confidence, and our expert team is dedicated to helping you discover and enhance your natural radiance.
                </p>
                <Link href="/about" className="inline-flex items-center btn-gradient px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full group text-xs sm:text-sm md:text-base font-bold shadow-xl" data-testid="about-link">
                  <span>Discover Our Journey</span>
                  <ArrowRight className="ml-1.5 sm:ml-2 w-3.5 sm:w-4 md:w-5 h-3.5 sm:h-4 md:h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="story-carousel-container relative mt-6 sm:mt-8 lg:mt-0">
                <div className="story-slider">
                  <div className="story-slide-track">
                    {[
                      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
                      'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
                      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
                      'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
                      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
                      'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
                    ].map((img, idx) => (
                      <div key={idx} className="story-slide w-48 sm:w-56 md:w-64 lg:w-80">
                        <div className="premium-image-frame">
                          <img src={img} alt={`Story ${idx + 1}`} className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3 sm:p-4 md:p-6">
                            <p className="text-white text-xs sm:text-sm md:text-base font-semibold">Excellence Since 2009</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-3 sm:-bottom-4 md:-bottom-6 -right-3 sm:-right-4 md:-right-6 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-primary/10 rounded-full blur-3xl"></div>
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

      {/* Why Choose Us - Ultra Premium Modern Version */}
      <section className="py-16 md:py-32 bg-gradient-to-br from-gray-900 via-primary to-gray-900 text-white relative overflow-hidden" data-testid="why-choose-us-section">
        <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-gold/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-20">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold/30 to-primary/30 backdrop-blur-md border border-gold/40 rounded-full mb-6 md:mb-8">
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                <span className="text-gold font-bold text-xs md:text-sm tracking-widest uppercase">Why Choose Luxe Beauty</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-playfair font-bold mb-4 md:mb-8 bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent leading-tight px-4" data-testid="why-choose-us-title">
                Experience The Luxe Difference
              </h2>
              <p className="text-gray-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed px-4" data-testid="why-choose-us-description">
                Where innovation meets tradition, and beauty transforms into an art form. Discover why we're Mumbai's most trusted luxury beauty destination.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-2 md:px-0">
            {[
              { 
                icon: '💎', 
                title: 'Premium Luxury', 
                description: 'World-class facilities with state-of-the-art equipment and premium international products',
                stat: '5-Star',
                statLabel: 'Rated Facility'
              },
              { 
                icon: '🎓', 
                title: 'Expert Team', 
                description: 'Certified professionals with years of experience and international training from Paris & London',
                stat: '15+',
                statLabel: 'Years Experience'
              },
              { 
                icon: '🛡️', 
                title: 'Premium Hygiene', 
                description: 'Hospital-grade sterilization and safety protocols ensuring your complete peace of mind',
                stat: '100%',
                statLabel: 'Safety Standards'
              },
              { 
                icon: '✨', 
                title: 'Ultimate Comfort', 
                description: 'Luxurious ambiance designed for complete relaxation and rejuvenation of body and soul',
                stat: '50K+',
                statLabel: 'Happy Clients'
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 text-center group hover:bg-white/10 hover:border-gold/40 transition-all duration-500 hover:-translate-y-2 h-full" data-testid={`why-choose-us-item-${index}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-4xl md:text-5xl mb-4 md:mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">{item.icon}</div>
                    
                    <div className="mb-3 md:mb-4">
                      <div className="text-2xl md:text-3xl font-bold text-gold font-playfair">{item.stat}</div>
                      <div className="text-xs md:text-sm text-gray-400">{item.statLabel}</div>
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-playfair font-bold mb-3 md:mb-4 text-white group-hover:text-gold transition-colors duration-300" data-testid={`why-choose-us-item-title-${index}`}>
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed" data-testid={`why-choose-us-item-description-${index}`}>
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <CounterSection />

      {/* Deals & Offers - Premium Carousel */}
      <section className="py-24 bg-white relative overflow-hidden" data-testid="deals-section">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-6 py-2 bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-full text-primary font-semibold text-sm tracking-wider mb-6">
                EXCLUSIVE DEALS
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark">
                Limited Time Offers
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Don't miss out on our exclusive deals and premium packages designed just for you
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <DealsCarousel />
          </ScrollReveal>
        </div>
      </section>

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
