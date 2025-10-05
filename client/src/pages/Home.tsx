import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import {
  ArrowRight,
  Scissors,
  Sparkles,
  HandHeart,
  Paintbrush,
  Leaf,
  Crown,
  ChevronLeft,
  ChevronRight,
  UserCheck, Award, ShieldCheck, Coffee,
} from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import CounterSection from '@/components/ui/CounterSection';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import ServiceCard from '@/components/ui/ServiceCard';
import ServiceCarousel from '@/components/ui/ServiceCarousel';
import GalleryGrid from '@/components/ui/GalleryGrid';
import PricingCard from '@/components/ui/PricingCard';
import HeroCarousel from '@/components/ui/HeroCarousel';
import DealsCarousel from '@/components/ui/DealsCarousel';
import ContactPopup from "@/components/ui/ContactPopup";


import StoryCarousel from '@/components/ui/StoryCarousel';


const Home = () => {
  const [autoScroll, setAutoScroll] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || !autoScroll) return;

    const imageWidth = 280; // Width of each image container
    const gap = 24; // Gap between images
    const scrollInterval = 3000; // Time between scrolls (3 seconds)
    let currentIndex = 0;

    const scrollToNextImage = () => {
      if (!scrollContainer) return;

      currentIndex = (currentIndex + 1) % 5; // 5 is the number of images
      scrollContainer.scrollTo({
        left: currentIndex * (imageWidth + gap),
        behavior: 'smooth'
      });
    };

    const interval = setInterval(scrollToNextImage, scrollInterval);

    const handleInteraction = () => setAutoScroll(false);
    const handleInteractionEnd = () => {
      setAutoScroll(true);
      // When resuming, start from the current visible image
      const currentScroll = scrollContainer.scrollLeft;
      currentIndex = Math.round(currentScroll / (imageWidth + gap));
    };

    scrollContainer.addEventListener('mouseenter', handleInteraction);
    scrollContainer.addEventListener('mouseleave', handleInteractionEnd);
    scrollContainer.addEventListener('touchstart', handleInteraction);
    scrollContainer.addEventListener('touchend', handleInteractionEnd);

    return () => {
      clearInterval(interval);
      scrollContainer.removeEventListener('mouseenter', handleInteraction);
      scrollContainer.removeEventListener('mouseleave', handleInteractionEnd);
      scrollContainer.removeEventListener('touchstart', handleInteraction);
      scrollContainer.removeEventListener('touchend', handleInteractionEnd);
    };
  }, [autoScroll]);

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
      {/* About Preview Section - Premium Story Carousel */}
      <section className="py-12 md:py-24 relative overflow-hidden bg-gradient-to-br from-white via-bg-light to-white" data-testid="about-preview-section">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-br from-gold/10 via-primary/5 to-transparent rounded-full blur-3xl animate-pulse transform rotate-45"></div>
        <div className="absolute bottom-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-tr from-primary/10 via-gold/5 to-transparent rounded-full blur-3xl animate-pulse transform -rotate-45" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,215,0,0.03)_1px,transparent_1px),linear-gradient(135deg,rgba(106,27,77,0.03)_1px,transparent_1px)] bg-[size:20px_20px] md:bg-[size:30px_30px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-2.5 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full mb-6 md:mb-8 transform hover:scale-105 transition-all duration-300">
                <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-bold text-xs md:text-sm tracking-wider uppercase">Our Love Story</span>
                <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-primary rounded-full animate-pulse"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 md:mb-6 leading-tight" data-testid="about-title">
                <span className="block bg-gradient-to-r from-text-dark to-primary bg-clip-text text-transparent">
                  Crafting Beauty with Love
                </span>
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary mt-3 md:mt-4 block font-normal">
                  For Over 15 Years
                </span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto px-4" data-testid="about-description-1">
                Every touch, every stroke, and every transformation is infused with passion and dedication, making each visit a love letter to your beauty.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-4 md:space-y-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed bg-white/50 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500">
                <p className="relative pl-4 md:pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 md:before:w-1 before:bg-primary before:rounded-full" data-testid="about-description-2">
                  Our story began with a simple dream: to create a sanctuary where beauty meets luxury, and where every client's uniqueness is celebrated and enhanced.
                </p>
                <p className="relative pl-4 md:pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 md:before:w-1 before:bg-primary before:rounded-full" data-testid="about-description-3">
                  Today, we stand as Mumbai's premier beauty destination, where artistry meets innovation, and where every treatment is a masterpiece crafted with love.
                </p>
                <div className="pt-6 md:pt-8 flex justify-start">
                  <Link href="/about" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-primary border-primary/30 hover:bg-primary/10 hover:border-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-xl transform hover:scale-105 transition-all duration-300 rounded-full"
                      data-testid="learn-more-button"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Discover Our Journey
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <div className="mt-8 lg:mt-0">
              <StoryCarousel />
            </div>
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

          {useMediaQuery('(min-width: 768px)') ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  {...service}
                  delay={index * 100}
                />
              ))}
            </div>
          ) : (
            <ServiceCarousel services={services} />
          )}
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
            <Button className="bg-gradient-to-r from-[#e4b7a0] to-[#c38370] text-white px-5 py-2 rounded-full hover:opacity-90 shadow-md" data-testid="view-gallery-button">
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
      <section className="py-16 md:py-24 bg-white" data-testid="booking-cta-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-secondary via-primary to-accent rounded-2xl md:rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
              {/* Premium Background Effects */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] opacity-50"></div>

              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm md:text-base font-semibold tracking-wider mb-6 transform hover:scale-105 transition-all duration-300">
                  EXPERIENCE LUXURY
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-4 md:mb-6" data-testid="cta-title">
                  Ready for Your Transformation?
                </h2>
                <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed" data-testid="cta-description">
                  Book your luxury beauty experience today and discover the confidence that comes with looking and feeling your absolute best
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link href="/booking">
                    <Button
                      className="w-full sm:w-auto bg-white text-primary px-8 sm:px-10 py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gold hover:text-white transform hover:scale-105 transition-all duration-300 shadow-xl"
                      data-testid="cta-book-button"
                    >
                      Book Appointment Now
                    </Button>
                  </Link>
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 sm:px-10 py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                      data-testid="cta-contact-button"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Contact Us
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
          <ContactPopup />
    </div>
  );
};

export default Home;
