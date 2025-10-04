import { Link } from 'wouter';
import { ArrowRight, Scissors, Sparkles, Droplets, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ui/ScrollReveal';

const Hair = () => {
  const services = [
    {
      title: 'Hair Cutting & Styling',
      description: 'Precision cuts and contemporary styling that complements your face shape and lifestyle.',
      features: ['Consultation & Analysis', 'Precision Cutting', 'Blow Dry & Styling', 'Styling Tips'],
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      price: 'From ₹1,500',
    },
    {
      title: 'Hair Coloring',
      description: 'From subtle highlights to dramatic transformations with premium, ammonia-free colors.',
      features: ['Color Consultation', 'Balayage & Highlights', 'Full Color Service', 'Color Protection'],
      image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      price: 'From ₹3,500',
    },
    {
      title: 'Hair Spa & Treatment',
      description: 'Nourishing treatments to restore hair health, shine, and manageability.',
      features: ['Deep Conditioning', 'Scalp Massage', 'Hair Mask Treatment', 'Steam Therapy'],
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      price: 'From ₹2,000',
    },
    {
      title: 'Keratin & Smoothening',
      description: 'Advanced hair straightening and smoothening treatments for frizz-free, manageable hair.',
      features: ['Keratin Treatment', 'Brazilian Blowout', 'Hair Straightening', 'Aftercare Package'],
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      price: 'From ₹8,000',
    },
  ];

  const beforeAfter = [
    {
      before: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      after: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      treatment: 'Balayage Color Treatment',
    },
    {
      before: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      after: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      treatment: 'Keratin Smoothening',
    },
  ];

  return (
    <div className="min-h-screen pt-20" data-testid="hair-services-page">
      {/* Hero Section */}
      <section 
        className="relative py-32 flex items-center justify-center overflow-hidden parallax"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080)'
        }}
        data-testid="hair-hero"
      >
        <div className="hero-gradient absolute inset-0"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="mb-6">
              <Scissors className="text-6xl text-gold mx-auto mb-4" />
            </div>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6" data-testid="hair-hero-title">
              Transform Your Hair
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8" data-testid="hair-hero-description">
              From precision cuts to vibrant colors, discover the artistry of professional hair care
            </p>
            <Link href="/booking">
              <Button className="btn-gradient text-lg px-8 py-4" data-testid="hair-book-button">
                <span>Book Hair Service</span>
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white" data-testid="hair-services-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Hair Services
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark" data-testid="services-title">
                Expert Hair Solutions
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-testid="services-description">
                Our master stylists bring years of expertise to every cut, color, and treatment
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div 
                  className="bg-bg-light rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  data-testid={`hair-service-${index}`}
                >
                  <div className="img-zoom-container h-64">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="img-zoom w-full h-full object-cover"
                      data-testid={`hair-service-image-${index}`}
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 
                        className="text-2xl font-playfair font-bold text-text-dark"
                        data-testid={`hair-service-title-${index}`}
                      >
                        {service.title}
                      </h3>
                      <span 
                        className="text-primary font-semibold text-lg"
                        data-testid={`hair-service-price-${index}`}
                      >
                        {service.price}
                      </span>
                    </div>
                    <p 
                      className="text-gray-600 mb-6 leading-relaxed"
                      data-testid={`hair-service-description-${index}`}
                    >
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-text-dark mb-3">Service Includes:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <li 
                            key={featureIndex}
                            className="text-sm text-gray-600 flex items-center"
                            data-testid={`hair-service-feature-${index}-${featureIndex}`}
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
                        data-testid={`hair-service-book-${index}`}
                      >
                        Book This Service
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-24 bg-bg-light" data-testid="hair-before-after">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Transformations
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark" data-testid="transformations-title">
                Hair Extensions & Results
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-testid="transformations-description">
                See the incredible transformations our expert stylists achieve
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {beforeAfter.map((transformation, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div 
                  className="bg-white rounded-2xl p-6 shadow-lg"
                  data-testid={`hair-transformation-${index}`}
                >
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-500 mb-2">BEFORE</p>
                      <img 
                        src={transformation.before} 
                        alt="Before treatment"
                        className="w-full h-64 object-cover rounded-lg"
                        data-testid={`hair-before-${index}`}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gold mb-2">AFTER</p>
                      <img 
                        src={transformation.after} 
                        alt="After treatment"
                        className="w-full h-64 object-cover rounded-lg"
                        data-testid={`hair-after-${index}`}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 
                      className="font-playfair font-bold text-xl text-text-dark"
                      data-testid={`hair-treatment-name-${index}`}
                    >
                      {transformation.treatment}
                    </h4>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hair Care Tips */}
      <section className="py-24 bg-white" data-testid="hair-care-tips">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                  Expert Tips
                </span>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-text-dark" data-testid="tips-title">
                  Hair Care Essentials
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Droplets className="text-primary" />,
                      title: 'Hydration is Key',
                      description: 'Deep conditioning treatments every 2-3 weeks keep hair healthy and shiny.',
                    },
                    {
                      icon: <Wind className="text-primary" />,
                      title: 'Heat Protection',
                      description: 'Always use heat protectant before styling to prevent damage and breakage.',
                    },
                    {
                      icon: <Sparkles className="text-primary" />,
                      title: 'Regular Trims',
                      description: 'Trim every 6-8 weeks to maintain healthy ends and promote growth.',
                    },
                  ].map((tip, index) => (
                    <div 
                      key={tip.title}
                      className="flex items-start space-x-4"
                      data-testid={`hair-tip-${index}`}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        {tip.icon}
                      </div>
                      <div>
                        <h3 
                          className="text-xl font-playfair font-bold mb-2 text-text-dark"
                          data-testid={`hair-tip-title-${index}`}
                        >
                          {tip.title}
                        </h3>
                        <p 
                          className="text-gray-600 leading-relaxed"
                          data-testid={`hair-tip-description-${index}`}
                        >
                          {tip.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="img-zoom-container rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                      alt="Hair care"
                      className="img-zoom w-full h-48 object-cover"
                    />
                  </div>
                  <div className="img-zoom-container rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                      alt="Hair products"
                      className="img-zoom w-full h-64 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="img-zoom-container rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                      alt="Hair styling"
                      className="img-zoom w-full h-64 object-cover"
                    />
                  </div>
                  <div className="img-zoom-container rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                      alt="Hair color"
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
      <section className="py-24 bg-primary text-white" data-testid="hair-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6" data-testid="hair-cta-title">
              Book a Free Hair Consultation
            </h2>
            <p className="text-xl mb-10 text-gray-100 max-w-3xl mx-auto" data-testid="hair-cta-description">
              Not sure which service is right for you? Book a complimentary consultation with our expert stylists
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/booking">
                <Button 
                  className="bg-white text-primary px-10 py-4 rounded-full font-semibold text-lg hover:bg-gold hover:text-white transition-all duration-300 shadow-xl"
                  data-testid="hair-consultation-button"
                >
                  Book Consultation
                </Button>
              </Link>
              <Link href="/contact" className="inline-flex items-center text-white font-semibold text-lg hover:text-gold transition-colors">
                Call Us Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Hair;
