import { Link } from 'wouter';
import { ArrowRight, Paintbrush, Star, Camera, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ui/ScrollReveal';

const Makeup = () => {
  const services = [
    {
      title: 'Bridal Makeup',
      description: 'Stunning bridal looks that enhance your natural beauty for your special day.',
      features: ['Pre-bridal Consultation', 'Trial Session', 'Bridal Day Makeup', 'Touch-up Kit'],
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      price: 'From ₹12,000',
      duration: '3-4 hours',
    },
    {
      title: 'Party Makeup',
      description: 'Glamorous looks for special occasions, parties, and celebrations.',
      features: ['Skin Preparation', 'Evening Glam', 'Long-lasting Formula', 'Style Consultation'],
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      price: 'From ₹4,000',
      duration: '2 hours',
    },
    {
      title: 'Editorial/Fashion',
      description: 'Creative and artistic makeup for photoshoots, fashion shows, and editorial work.',
      features: ['Concept Discussion', 'Creative Application', 'Camera-Ready Finish', 'Touch-up Service'],
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      price: 'From ₹6,000',
      duration: '2-3 hours',
    },
    {
      title: 'Makeup Lessons',
      description: 'Learn professional makeup techniques in personalized one-on-one sessions.',
      features: ['Technique Training', 'Product Recommendations', 'Practice Session', 'Follow-up Support'],
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      price: 'From ₹3,000',
      duration: '2 hours',
    },
  ];

  const beforeAfterGallery = [
    {
      before: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      after: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      occasion: 'Bridal Transformation',
    },
    {
      before: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      after: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      occasion: 'Evening Glam',
    },
  ];

  return (
    <div className="min-h-screen pt-20" data-testid="makeup-services-page">
      {/* Hero Section */}
      <section 
        className="relative py-32 flex items-center justify-center overflow-hidden parallax"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080)'
        }}
        data-testid="makeup-hero"
      >
        <div className="hero-gradient absolute inset-0"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="mb-6">
              <Paintbrush className="text-6xl text-gold mx-auto mb-4" />
            </div>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6" data-testid="makeup-hero-title">
              Be the Star of Every Moment
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8" data-testid="makeup-hero-description">
              Professional makeup artistry that enhances your natural beauty and creates unforgettable looks
            </p>
            <Link href="/booking">
              <Button className="btn-gradient text-lg px-8 py-4" data-testid="makeup-book-button">
                <span>Book Makeup Service</span>
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white" data-testid="makeup-services-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Makeup Services
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark" data-testid="services-title">
                Artistry That Speaks
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-testid="services-description">
                From bridal elegance to editorial boldness, our makeup artists create looks that tell your story
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div 
                  className="bg-bg-light rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  data-testid={`makeup-service-${index}`}
                >
                  <div className="img-zoom-container h-64">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="img-zoom w-full h-full object-cover"
                      data-testid={`makeup-service-image-${index}`}
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 
                          className="text-2xl font-playfair font-bold text-text-dark mb-1"
                          data-testid={`makeup-service-title-${index}`}
                        >
                          {service.title}
                        </h3>
                        <span 
                          className="text-sm text-gray-500"
                          data-testid={`makeup-service-duration-${index}`}
                        >
                          {service.duration}
                        </span>
                      </div>
                      <span 
                        className="text-primary font-semibold text-lg"
                        data-testid={`makeup-service-price-${index}`}
                      >
                        {service.price}
                      </span>
                    </div>
                    <p 
                      className="text-gray-600 mb-6 leading-relaxed"
                      data-testid={`makeup-service-description-${index}`}
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
                            data-testid={`makeup-service-feature-${index}-${featureIndex}`}
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
                        data-testid={`makeup-service-book-${index}`}
                      >
                        Book Session
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="py-24 bg-bg-light" data-testid="makeup-before-after">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Transformations
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark" data-testid="transformations-title">
                Before/After Showcase
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-testid="transformations-description">
                Witness the power of professional makeup artistry in our stunning transformations
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {beforeAfterGallery.map((transformation, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div 
                  className="bg-white rounded-2xl p-6 shadow-lg"
                  data-testid={`makeup-transformation-${index}`}
                >
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-500 mb-2">BEFORE</p>
                      <img 
                        src={transformation.before} 
                        alt="Before makeup"
                        className="w-full h-64 object-cover rounded-lg"
                        data-testid={`makeup-before-${index}`}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gold mb-2">AFTER</p>
                      <img 
                        src={transformation.after} 
                        alt="After makeup"
                        className="w-full h-64 object-cover rounded-lg"
                        data-testid={`makeup-after-${index}`}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 
                      className="font-playfair font-bold text-xl text-text-dark"
                      data-testid={`makeup-occasion-${index}`}
                    >
                      {transformation.occasion}
                    </h4>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Makeup Products Showcase */}
      <section className="py-24 bg-white" data-testid="makeup-products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                  Premium Products
                </span>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-text-dark" data-testid="products-title">
                  Professional Makeup Brands
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed" data-testid="products-description">
                  We use only the finest professional makeup brands to ensure long-lasting, camera-ready results that look flawless in any lighting.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Star className="text-gold" />,
                      title: 'Premium Brands',
                      description: 'MAC, Urban Decay, NARS, and other professional-grade cosmetics.',
                    },
                    {
                      icon: <Camera className="text-secondary" />,
                      title: 'HD Compatible',
                      description: 'High-definition formulas that look perfect in photos and videos.',
                    },
                    {
                      icon: <Heart className="text-accent" />,
                      title: 'Skin-Friendly',
                      description: 'Hypoallergenic and non-comedogenic products for sensitive skin.',
                    },
                  ].map((item, index) => (
                    <div 
                      key={item.title}
                      className="flex items-start space-x-4"
                      data-testid={`product-feature-${index}`}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 
                          className="text-xl font-playfair font-bold mb-2 text-text-dark"
                          data-testid={`product-feature-title-${index}`}
                        >
                          {item.title}
                        </h3>
                        <p 
                          className="text-gray-600 leading-relaxed"
                          data-testid={`product-feature-description-${index}`}
                        >
                          {item.description}
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
                      src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                      alt="Makeup products"
                      className="img-zoom w-full h-48 object-cover"
                    />
                  </div>
                  <div className="img-zoom-container rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                      alt="Professional brushes"
                      className="img-zoom w-full h-64 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="img-zoom-container rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                      alt="Makeup application"
                      className="img-zoom w-full h-64 object-cover"
                    />
                  </div>
                  <div className="img-zoom-container rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                      alt="Final result"
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
      <section className="py-24 bg-gold text-white" data-testid="makeup-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6" data-testid="makeup-cta-title">
              Book Your Glam Session
            </h2>
            <p className="text-xl mb-10 text-gray-100 max-w-3xl mx-auto" data-testid="makeup-cta-description">
              Ready to look and feel absolutely stunning? Book your professional makeup session today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/booking">
                <Button 
                  className="bg-white text-gold px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-xl"
                  data-testid="makeup-session-button"
                >
                  Book Makeup Session
                </Button>
              </Link>
              <Link href="/contact" className="inline-flex items-center text-white font-semibold text-lg hover:text-primary transition-colors">
                Discuss Your Look <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Makeup;
