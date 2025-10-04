import { Link } from 'wouter';
import { ArrowRight, Sparkles, Shield, Sun, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ui/ScrollReveal';

const Skin = () => {
  const services = [
    {
      title: 'HydraFacial',
      description: 'Advanced multi-step facial treatment that cleanses, exfoliates, and hydrates for instant results.',
      features: ['Deep Cleansing', 'Gentle Exfoliation', 'Hydration Infusion', 'LED Light Therapy'],
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      price: 'From ₹4,500',
      duration: '60 min',
    },
    {
      title: 'Anti-Aging Facial',
      description: 'Targeted treatment using peptides and antioxidants to reduce fine lines and boost collagen.',
      features: ['Peptide Infusion', 'Collagen Boost', 'Fine Line Reduction', 'Firming Massage'],
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      price: 'From ₹6,000',
      duration: '75 min',
    },
    {
      title: 'Acne Treatment',
      description: 'Comprehensive acne solution with deep cleansing, extraction, and healing therapy.',
      features: ['Deep Pore Cleansing', 'Safe Extractions', 'Antibacterial Treatment', 'Healing Mask'],
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      price: 'From ₹3,500',
      duration: '90 min',
    },
    {
      title: 'Brightening Facial',
      description: 'Vitamin C enriched treatment to reduce pigmentation and achieve a radiant glow.',
      features: ['Vitamin C Infusion', 'Pigmentation Reduction', 'Brightening Serum', 'Glow Enhancement'],
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      price: 'From ₹4,000',
      duration: '60 min',
    },
  ];

  const skinConcerns = [
    {
      concern: 'Aging & Fine Lines',
      solution: 'Anti-aging facials with peptides and retinol therapy',
      icon: <Shield className="text-secondary" />,
    },
    {
      concern: 'Acne & Breakouts',
      solution: 'Deep cleansing treatments with antibacterial therapy',
      icon: <Zap className="text-accent" />,
    },
    {
      concern: 'Pigmentation',
      solution: 'Brightening treatments with vitamin C and kojic acid',
      icon: <Sun className="text-gold" />,
    },
    {
      concern: 'Dull Skin',
      solution: 'Hydrating facials with hyaluronic acid and exfoliation',
      icon: <Sparkles className="text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen pt-20" data-testid="skin-services-page">
      {/* Hero Section */}
      <section 
        className="relative py-32 flex items-center justify-center overflow-hidden parallax"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080)'
        }}
        data-testid="skin-hero"
      >
        <div className="hero-gradient absolute inset-0"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="mb-6">
              <Sparkles className="text-6xl text-gold mx-auto mb-4" />
            </div>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6" data-testid="skin-hero-title">
              Glow that Speaks for You
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8" data-testid="skin-hero-description">
              Advanced skincare treatments for healthy, radiant, and youthful-looking skin
            </p>
            <Link href="/booking">
              <Button className="btn-gradient text-lg px-8 py-4" data-testid="skin-book-button">
                <span>Book Skin Treatment</span>
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white" data-testid="skin-services-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Skin Treatments
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark" data-testid="services-title">
                Advanced Facial Therapies
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-testid="services-description">
                Experience cutting-edge skincare technology combined with luxurious spa treatments
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div 
                  className="bg-bg-light rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  data-testid={`skin-service-${index}`}
                >
                  <div className="img-zoom-container h-64">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="img-zoom w-full h-full object-cover"
                      data-testid={`skin-service-image-${index}`}
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 
                          className="text-2xl font-playfair font-bold text-text-dark mb-1"
                          data-testid={`skin-service-title-${index}`}
                        >
                          {service.title}
                        </h3>
                        <span 
                          className="text-sm text-gray-500"
                          data-testid={`skin-service-duration-${index}`}
                        >
                          {service.duration}
                        </span>
                      </div>
                      <span 
                        className="text-primary font-semibold text-lg"
                        data-testid={`skin-service-price-${index}`}
                      >
                        {service.price}
                      </span>
                    </div>
                    <p 
                      className="text-gray-600 mb-6 leading-relaxed"
                      data-testid={`skin-service-description-${index}`}
                    >
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-text-dark mb-3">Treatment Includes:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <li 
                            key={featureIndex}
                            className="text-sm text-gray-600 flex items-center"
                            data-testid={`skin-service-feature-${index}-${featureIndex}`}
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
                        data-testid={`skin-service-book-${index}`}
                      >
                        Book Treatment
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skin Concerns & Solutions */}
      <section className="py-24 bg-bg-light" data-testid="skin-concerns">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Skin Solutions
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark" data-testid="concerns-title">
                Targeted Skin Solutions
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-testid="concerns-description">
                Every skin concern has a solution. Our experts customize treatments for your specific needs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skinConcerns.map((item, index) => (
              <ScrollReveal key={item.concern} delay={index * 100}>
                <div 
                  className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  data-testid={`skin-concern-${index}`}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 
                    className="text-xl font-playfair font-bold mb-3 text-text-dark"
                    data-testid={`skin-concern-title-${index}`}
                  >
                    {item.concern}
                  </h3>
                  <p 
                    className="text-gray-600 text-sm leading-relaxed"
                    data-testid={`skin-concern-solution-${index}`}
                  >
                    {item.solution}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skincare Consultation */}
      <section className="py-24 bg-white" data-testid="skin-consultation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                  Personalized Care
                </span>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-text-dark" data-testid="consultation-title">
                  Skincare Consultation
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed" data-testid="consultation-description">
                  Our skin experts analyze your skin type, concerns, and lifestyle to create a personalized treatment plan that delivers real results.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    'Comprehensive skin analysis',
                    'Customized treatment recommendations',
                    'Home care routine guidance',
                    'Progress tracking and adjustments',
                  ].map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-center"
                      data-testid={`consultation-benefit-${index}`}
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-4"></span>
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Link href="/booking">
                  <Button className="bg-primary text-white hover:bg-secondary px-8 py-4" data-testid="consultation-book-button">
                    Book Free Consultation
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="img-zoom-container rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                      alt="Skin analysis"
                      className="img-zoom w-full h-48 object-cover"
                    />
                  </div>
                  <div className="img-zoom-container rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                      alt="Facial treatment"
                      className="img-zoom w-full h-64 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="img-zoom-container rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                      alt="Glowing skin"
                      className="img-zoom w-full h-64 object-cover"
                    />
                  </div>
                  <div className="img-zoom-container rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                      alt="Skincare products"
                      className="img-zoom w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary text-white" data-testid="skin-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6" data-testid="skin-cta-title">
              Let Your Skin Shine Naturally
            </h2>
            <p className="text-xl mb-10 text-gray-100 max-w-3xl mx-auto" data-testid="skin-cta-description">
              Ready to transform your skin? Book a personalized consultation and discover the perfect treatment for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/booking">
                <Button 
                  className="bg-white text-primary px-10 py-4 rounded-full font-semibold text-lg hover:bg-gold hover:text-white transition-all duration-300 shadow-xl"
                  data-testid="skin-treatment-button"
                >
                  Book Skin Treatment
                </Button>
              </Link>
              <Link href="/contact" className="inline-flex items-center text-white font-semibold text-lg hover:text-gold transition-colors">
                Call for Expert Advice <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Skin;
