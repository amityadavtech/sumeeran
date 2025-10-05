import { Link } from 'wouter';
import { ArrowRight, Leaf, Waves, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Spa = () => {
   const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const images = containerRef.current.querySelectorAll(".img-zoom-container");

      gsap.from(images, {
        opacity: 0,
        y: 50,
        stagger: 0.3, // delay between each image
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // start when container top hits 80% of viewport
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, []);
  const services = [
    {
      title: 'Aromatherapy Massage',
      description: 'Full body relaxation with essential oils to rejuvenate mind, body and soul.',
      features: ['Essential Oil Selection', 'Full Body Massage', 'Scalp Treatment', 'Meditation Music'],
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      price: 'From ₹3,500',
      duration: '90 min',
    },
    {
      title: 'Hot Stone Therapy',
      description: 'Ancient healing technique using heated stones to relieve muscle tension.',
      features: ['Heated Basalt Stones', 'Deep Muscle Relief', 'Stress Reduction', 'Energy Balance'],
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      price: 'From ₹4,500',
      duration: '120 min',
    },
    {
      title: 'Body Detox Wrap',
      description: 'Purifying body wrap treatment to eliminate toxins and nourish skin.',
      features: ['Clay & Seaweed Wrap', 'Toxin Elimination', 'Skin Nourishment', 'Hydration Boost'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      price: 'From ₹4,000',
      duration: '75 min',
    },
    {
      title: 'Couples Spa Package',
      description: 'Romantic spa experience designed for two with synchronized treatments.',
      features: ['Side-by-Side Massage', 'Champagne Service', 'Private Suite', 'Extended Time'],
      image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      price: 'From ₹8,000',
      duration: '150 min',
    },
  ];

  const spaFeatures = [
    {
      icon: <Leaf className="text-primary" />,
      title: 'Natural Ingredients',
      description: 'Organic oils, herbs, and botanicals sourced from nature.',
    },
    {
      icon: <Waves className="text-secondary" />,
      title: 'Tranquil Environment',
      description: 'Peaceful ambiance with soft music and aromatherapy.',
    },
    {
      icon: <Zap className="text-accent" />,
      title: 'Energy Healing',
      description: 'Holistic treatments that restore your natural energy.',
    },
    {
      icon: <Heart className="text-gold" />,
      title: 'Wellness Focus',
      description: 'Complete mind-body wellness for lasting rejuvenation.',
    },
  ];

  return (
    <div className="min-h-screen pt-20" data-testid="spa-services-page">
      {/* Hero Section */}
      <section 
        className="relative py-32 flex items-center justify-center overflow-hidden parallax"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080)'
        }}
        data-testid="spa-hero"
      >
        <div className="hero-gradient absolute inset-0"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="mb-6">
              <Leaf className="text-6xl text-text-dark mx-auto mb-4" />
            </div>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-text-dark" data-testid="spa-hero-title">
              Relax. Refresh. Rejuvenate.
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8" data-testid="spa-hero-description">
              Escape to our tranquil sanctuary and experience the ultimate in relaxation and wellness
            </p>
            <Link href="/booking">
              <Button className="btn-gradient text-lg px-8 py-4" data-testid="spa-book-button">
                <span>Book Spa Treatment</span>
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white" data-testid="spa-services-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Spa Treatments
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark" data-testid="services-title">
                Wellness & Relaxation
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-testid="services-description">
                Immerse yourself in our world of tranquility with treatments designed to restore harmony
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div 
                  className="bg-bg-light rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  data-testid={`spa-service-${index}`}
                >
                  <div className="img-zoom-container h-64">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="img-zoom w-full h-full object-cover"
                      data-testid={`spa-service-image-${index}`}
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 
                          className="text-2xl font-playfair font-bold text-text-dark mb-1"
                          data-testid={`spa-service-title-${index}`}
                        >
                          {service.title}
                        </h3>
                        <span 
                          className="text-sm text-gray-500"
                          data-testid={`spa-service-duration-${index}`}
                        >
                          {service.duration}
                        </span>
                      </div>
                      <span 
                        className="text-primary font-semibold text-lg"
                        data-testid={`spa-service-price-${index}`}
                      >
                        {service.price}
                      </span>
                    </div>
                    <p 
                      className="text-gray-600 mb-6 leading-relaxed"
                      data-testid={`spa-service-description-${index}`}
                    >
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-text-dark mb-3">Experience Includes:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <li 
                            key={featureIndex}
                            className="text-sm text-gray-600 flex items-center"
                            data-testid={`spa-service-feature-${index}-${featureIndex}`}
                          >
                            <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href="/booking">
                      <Button 
                        className="w-full bg-primary text-white hover:bg-secondary"
                        data-testid={`spa-service-book-${index}`}
                      >
                        Book Experience
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Spa Features */}
      <section className="py-24 bg-bg-light" data-testid="spa-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Spa Experience
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark" data-testid="features-title">
                What Makes Us Special
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-testid="features-description">
                Our spa combines ancient wisdom with modern luxury to create truly transformative experiences
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {spaFeatures.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 100}>
                <div 
                  className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  data-testid={`spa-feature-${index}`}
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gray-50 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 
                    className="text-xl font-playfair font-bold mb-4 text-text-dark"
                    data-testid={`spa-feature-title-${index}`}
                  >
                    {feature.title}
                  </h3>
                  <p 
                    className="text-gray-600 leading-relaxed"
                    data-testid={`spa-feature-description-${index}`}
                  >
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Spa Ambiance Gallery */}
      <section className="py-24 bg-white" data-testid="spa-ambiance">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Our Sanctuary
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark" data-testid="ambiance-title">
                Spa Ambiance
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-testid="ambiance-description">
                Step into our peaceful oasis designed to transport you to a world of serenity and calm
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
                title: 'Treatment Rooms',
                description: 'Private, serene spaces for ultimate relaxation',
              },
              {
                image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
                title: 'Meditation Area',
                description: 'Quiet space for mindfulness and reflection',
              },
              {
                image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
                title: 'Relaxation Lounge',
                description: 'Comfortable area to unwind before and after treatments',
              },
            ].map((space, index) => (
              <ScrollReveal key={space.title} delay={index * 100}>
                <div 
                  className="bg-bg-light rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  data-testid={`spa-space-${index}`}
                >
                  <div className="img-zoom-container h-64">
                    <img 
                      src={space.image} 
                      alt={space.title}
                      className="img-zoom w-full h-full object-cover"
                      data-testid={`spa-space-image-${index}`}
                    />
                  </div>
                  <div className="p-6">
                    <h3 
                      className="text-xl font-playfair font-bold mb-2 text-text-dark"
                      data-testid={`spa-space-title-${index}`}
                    >
                      {space.title}
                    </h3>
                    <p 
                      className="text-gray-600"
                      data-testid={`spa-space-description-${index}`}
                    >
                      {space.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Tips */}
      <section className="py-24 bg-primary text-white" data-testid="wellness-tips">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-gold font-semibold text-sm tracking-wider uppercase mb-4 block">
                  Wellness Guide
                </span>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8" data-testid="wellness-title">
                  Daily Wellness Tips
                </h2>
                <p className="text-gray-100 text-lg mb-8 leading-relaxed" data-testid="wellness-description">
                  Extend your spa experience at home with these simple wellness practices that nurture your mind, body, and spirit.
                </p>
                <div className="space-y-6">
                  {[
                    'Start your day with 5 minutes of deep breathing',
                    'Create a calming bedtime routine with essential oils',
                    'Practice gratitude and mindfulness daily',
                    'Stay hydrated and nourish your body with wholesome foods',
                  ].map((tip, index) => (
                    <div 
                      key={index}
                      className="flex items-center"
                      data-testid={`wellness-tip-${index}`}
                    >
                      <span className="w-2 h-2 bg-gold rounded-full mr-4"></span>
                      <span className="text-gray-100">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

           <ScrollReveal delay={200}>
              <div ref={containerRef} className="grid grid-cols-2 gap-4 md:gap-6 order-1 lg:order-2">
                {/* Left Column */}
                <div className="space-y-4 md:space-y-6">
                  <div className="img-zoom-container rounded-2xl overflow-hidden shadow-xl transition-shadow duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                      alt="Salon interior"
                      className="img-zoom w-full h-32 md:h-48 object-cover"
                    />
                  </div>
                  <div className="img-zoom-container rounded-2xl overflow-hidden shadow-xl transition-shadow duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                      alt="Beauty treatment"
                      className="img-zoom w-full h-48 md:h-64 object-cover"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4 md:space-y-6 pt-4 md:pt-8">
                  <div className="img-zoom-container rounded-2xl overflow-hidden shadow-xl transition-shadow duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                      alt="Beauty products"
                      className="img-zoom w-full h-48 md:h-64 object-cover"
                    />
                  </div>
                  <div className="img-zoom-container rounded-2xl overflow-hidden shadow-xl transition-shadow duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                      alt="Team working"
                      className="img-zoom w-full h-32 md:h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
        
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white" data-testid="spa-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark" data-testid="spa-cta-title">
              Schedule a Relaxation Session
            </h2>
            <p className="text-xl mb-10 text-gray-600 max-w-3xl mx-auto" data-testid="spa-cta-description">
              Treat yourself to the ultimate spa experience and discover the peace you deserve
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/booking">
                <Button 
                  className="bg-primary text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-secondary transition-all duration-300 shadow-xl"
                  data-testid="spa-relaxation-button"
                >
                  Book Spa Session
                </Button>
              </Link>
              <Link href="/contact" className="inline-flex items-center text-primary font-semibold text-lg hover:text-secondary transition-colors">
                Create Custom Package <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Spa;
