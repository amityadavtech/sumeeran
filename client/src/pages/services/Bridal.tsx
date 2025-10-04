import { Link } from 'wouter';
import { ArrowRight, Crown, Heart, Sparkles, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ui/ScrollReveal';

const Bridal = () => {
  const packages = [
    {
      title: 'Pre-Bridal Package',
      duration: '6 weeks before wedding',
      description: 'Complete beauty preparation to ensure you look radiant on your special day.',
      features: ['Weekly Facials', 'Hair Spa Treatments', 'Nail Care', 'Body Treatments', 'Skin Consultation', 'Diet Guidance'],
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      price: 'From ₹25,000',
    },
    {
      title: 'Bridal Day Package',
      duration: 'Wedding day - 6 hours',
      description: 'Complete bridal transformation for your wedding day with trial sessions.',
      features: ['Hair Styling', 'Bridal Makeup', 'Draping Assistance', 'Touch-up Kit', 'Photography Support', 'Bridal Trial'],
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      price: 'From ₹35,000',
    },
    {
      title: 'Mehendi Package',
      duration: 'Mehendi ceremony - 4 hours',
      description: 'Beautiful traditional look for your mehendi celebration with vibrant colors.',
      features: ['Mehendi Makeup', 'Hair Styling', 'Floral Jewelry', 'Outfit Coordination', 'Photography Prep', 'Touch-ups'],
      image: 'https://images.unsplash.com/photo-1586297135537-5296812d4c08?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      price: 'From ₹15,000',
    },
    {
      title: 'Couple Package',
      duration: 'Wedding events - flexible',
      description: 'Coordinated beauty services for both bride and groom across all wedding events.',
      features: ['Bride Full Service', 'Groom Grooming', 'Multiple Events', 'Coordination', 'Travel Service', 'Photography Ready'],
      image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      price: 'From ₹50,000',
    },
  ];

  const bridalServices = [
    {
      icon: <Crown className="text-gold" />,
      title: 'Royal Treatment',
      description: 'Feel like royalty with our premium bridal services designed for your special day.',
    },
    {
      icon: <Heart className="text-accent" />,
      title: 'Personalized Care',
      description: 'Every bride is unique, and we customize our services to match your vision.',
    },
    {
      icon: <Sparkles className="text-primary" />,
      title: 'Trial Sessions',
      description: 'Multiple trial sessions to perfect your look before the big day.',
    },
    {
      icon: <Users className="text-secondary" />,
      title: 'Family Packages',
      description: 'Special packages for the entire bridal party and family members.',
    },
  ];

  return (
    <div className="min-h-screen pt-20" data-testid="bridal-services-page">
      {/* Hero Section */}
      <section 
        className="relative py-32 flex items-center justify-center overflow-hidden parallax"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080)'
        }}
        data-testid="bridal-hero"
      >
        <div className="hero-gradient absolute inset-0"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="mb-6">
              <Crown className="text-6xl text-gold mx-auto mb-4" />
            </div>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6" data-testid="bridal-hero-title">
              The Perfect Bridal Glow
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8" data-testid="bridal-hero-description">
              Make your special day absolutely unforgettable with our comprehensive bridal beauty services
            </p>
            <Link href="/booking">
              <Button className="btn-gradient text-lg px-8 py-4" data-testid="bridal-book-button">
                <span>Plan Your Big Day</span>
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Bridal Packages */}
      <section className="py-24 bg-white" data-testid="bridal-packages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Bridal Packages
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark" data-testid="packages-title">
                Complete Bridal Solutions
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-testid="packages-description">
                From pre-bridal preparation to wedding day perfection, we have packages for every moment
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <ScrollReveal key={pkg.title} delay={index * 100}>
                <div 
                  className="bg-bg-light rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  data-testid={`bridal-package-${index}`}
                >
                  <div className="img-zoom-container h-64">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title}
                      className="img-zoom w-full h-full object-cover"
                      data-testid={`bridal-package-image-${index}`}
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 
                          className="text-2xl font-playfair font-bold text-text-dark mb-1"
                          data-testid={`bridal-package-title-${index}`}
                        >
                          {pkg.title}
                        </h3>
                        <span 
                          className="text-sm text-gray-500"
                          data-testid={`bridal-package-duration-${index}`}
                        >
                          {pkg.duration}
                        </span>
                      </div>
                      <span 
                        className="text-primary font-semibold text-lg"
                        data-testid={`bridal-package-price-${index}`}
                      >
                        {pkg.price}
                      </span>
                    </div>
                    <p 
                      className="text-gray-600 mb-6 leading-relaxed"
                      data-testid={`bridal-package-description-${index}`}
                    >
                      {pkg.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-text-dark mb-3">Package Includes:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {pkg.features.map((feature, featureIndex) => (
                          <li 
                            key={featureIndex}
                            className="text-sm text-gray-600 flex items-center"
                            data-testid={`bridal-package-feature-${index}-${featureIndex}`}
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
                        data-testid={`bridal-package-book-${index}`}
                      >
                        Choose Package
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bridal Services Features */}
      <section className="py-24 bg-bg-light" data-testid="bridal-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark" data-testid="features-title">
                Bridal Excellence
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-testid="features-description">
                What makes our bridal services the preferred choice for discerning brides
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bridalServices.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div 
                  className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  data-testid={`bridal-feature-${index}`}
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gray-50 rounded-full flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 
                    className="text-xl font-playfair font-bold mb-4 text-text-dark"
                    data-testid={`bridal-feature-title-${index}`}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="text-gray-600 leading-relaxed"
                    data-testid={`bridal-feature-description-${index}`}
                  >
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bridal Timeline */}
      <section className="py-24 bg-white" data-testid="bridal-timeline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Planning Timeline
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark" data-testid="timeline-title">
                Your Bridal Journey
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-testid="timeline-description">
                A step-by-step guide to planning your perfect bridal beauty experience
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary opacity-20"></div>
            
            <div className="space-y-12">
              {[
                {
                  time: '8-12 weeks before',
                  title: 'Initial Consultation',
                  description: 'Discuss your vision, preferences, and create a customized beauty plan.',
                },
                {
                  time: '6-8 weeks before',
                  title: 'Pre-Bridal Treatments Begin',
                  description: 'Start weekly facials, hair treatments, and skin preparation regime.',
                },
                {
                  time: '2-4 weeks before',
                  title: 'Trial Sessions',
                  description: 'Perfect your bridal makeup and hairstyle with multiple trial sessions.',
                },
                {
                  time: '1 week before',
                  title: 'Final Preparations',
                  description: 'Last-minute touch-ups, eyebrow shaping, and final beauty treatments.',
                },
                {
                  time: 'Wedding Day',
                  title: 'Bridal Transformation',
                  description: 'Complete bridal makeover with our team attending to every detail.',
                },
              ].map((step, index) => (
                <ScrollReveal key={step.title} delay={index * 100}>
                  <div 
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                    data-testid={`timeline-step-${index}`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-bg-light rounded-2xl p-6">
                        <div 
                          className="text-sm font-bold text-primary mb-2"
                          data-testid={`timeline-time-${index}`}
                        >
                          {step.time}
                        </div>
                        <h3 
                          className="text-xl font-playfair font-bold mb-3 text-text-dark"
                          data-testid={`timeline-step-title-${index}`}
                        >
                          {step.title}
                        </h3>
                        <p 
                          className="text-gray-600"
                          data-testid={`timeline-step-description-${index}`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bridal Gallery Preview */}
      <section className="py-24 bg-bg-light" data-testid="bridal-gallery-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Our Brides
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark" data-testid="gallery-title">
                Beautiful Brides
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-testid="gallery-description">
                See how we've helped brides look absolutely stunning on their special day
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800',
              'https://images.unsplash.com/photo-1586297135537-5296812d4c08?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800',
              'https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800',
            ].map((image, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div 
                  className="img-zoom-container rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  data-testid={`bridal-gallery-${index}`}
                >
                  <img 
                    src={image} 
                    alt={`Bridal look ${index + 1}`}
                    className="img-zoom w-full h-96 object-cover"
                    data-testid={`bridal-gallery-image-${index}`}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery">
              <Button className="bg-primary text-white hover:bg-secondary px-8 py-4" data-testid="view-gallery-button">
                View More Bridal Looks
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary text-white" data-testid="bridal-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6" data-testid="bridal-cta-title">
              Plan Your Big Day With Us
            </h2>
            <p className="text-xl mb-10 text-gray-100 max-w-3xl mx-auto" data-testid="bridal-cta-description">
              Let us make your wedding day absolutely perfect with our comprehensive bridal beauty services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/booking">
                <Button 
                  className="bg-white text-secondary px-10 py-4 rounded-full font-semibold text-lg hover:bg-gold hover:text-white transition-all duration-300 shadow-xl"
                  data-testid="bridal-consultation-button"
                >
                  Book Bridal Consultation
                </Button>
              </Link>
              <Link href="/contact" className="inline-flex items-center text-white font-semibold text-lg hover:text-gold transition-colors">
                Customize Your Package <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Bridal;
