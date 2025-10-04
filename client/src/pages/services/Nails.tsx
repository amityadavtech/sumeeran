import { Link } from 'wouter';
import { ArrowRight, HandHeart, Palette, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ui/ScrollReveal';

const Nails = () => {
  const services = [
    {
      title: 'Classic Manicure',
      description: 'Traditional nail care with cuticle treatment, shaping, and premium polish application.',
      features: ['Cuticle Care', 'Nail Shaping', 'Hand Massage', 'Polish Application'],
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      price: 'From ₹800',
      duration: '45 min',
    },
    {
      title: 'Gel Manicure',
      description: 'Long-lasting gel polish with UV curing for 2-3 weeks of chip-free nails.',
      features: ['Prep & Base Coat', 'Gel Polish Application', 'UV Curing', '3 Week Durability'],
      image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      price: 'From ₹1,500',
      duration: '60 min',
    },
    {
      title: 'Nail Art Design',
      description: 'Creative nail art with intricate designs, patterns, and embellishments.',
      features: ['Custom Designs', 'Hand-painted Art', 'Embellishments', 'Sealing & Protection'],
      image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      price: 'From ₹2,000',
      duration: '90 min',
    },
    {
      title: 'Nail Extensions',
      description: 'Acrylic or gel extensions for length and strength with natural-looking results.',
      features: ['Length Customization', 'Shape Selection', 'Strength Enhancement', 'Natural Finish'],
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      price: 'From ₹2,500',
      duration: '120 min',
    },
  ];

  const nailArtGallery = [
    {
      design: 'French Ombre',
      image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    },
    {
      design: 'Floral Art',
      image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    },
    {
      design: 'Geometric Patterns',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    },
    {
      design: 'Marble Effect',
      image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    },
  ];

  return (
    <div className="min-h-screen pt-20" data-testid="nail-services-page">
      {/* Hero Section */}
      <section 
        className="relative py-32 flex items-center justify-center overflow-hidden parallax"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080)'
        }}
        data-testid="nail-hero"
      >
        <div className="hero-gradient absolute inset-0"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="mb-6">
              <HandHeart className="text-6xl text-gold mx-auto mb-4" />
            </div>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6" data-testid="nail-hero-title">
              Nail Perfection, Redefined
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8" data-testid="nail-hero-description">
              Exquisite nail art and care services that showcase your unique style and personality
            </p>
            <Link href="/booking">
              <Button className="btn-gradient text-lg px-8 py-4" data-testid="nail-book-button">
                <span>Book Nail Service</span>
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white" data-testid="nail-services-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Nail Services
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark" data-testid="services-title">
                Perfect Nails, Every Time
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-testid="services-description">
                From classic elegance to creative artistry, our nail technicians deliver perfection at your fingertips
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div 
                  className="bg-bg-light rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  data-testid={`nail-service-${index}`}
                >
                  <div className="img-zoom-container h-64">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="img-zoom w-full h-full object-cover"
                      data-testid={`nail-service-image-${index}`}
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 
                          className="text-2xl font-playfair font-bold text-text-dark mb-1"
                          data-testid={`nail-service-title-${index}`}
                        >
                          {service.title}
                        </h3>
                        <span 
                          className="text-sm text-gray-500"
                          data-testid={`nail-service-duration-${index}`}
                        >
                          {service.duration}
                        </span>
                      </div>
                      <span 
                        className="text-primary font-semibold text-lg"
                        data-testid={`nail-service-price-${index}`}
                      >
                        {service.price}
                      </span>
                    </div>
                    <p 
                      className="text-gray-600 mb-6 leading-relaxed"
                      data-testid={`nail-service-description-${index}`}
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
                            data-testid={`nail-service-feature-${index}-${featureIndex}`}
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
                        data-testid={`nail-service-book-${index}`}
                      >
                        Book Service
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nail Art Gallery */}
      <section className="py-24 bg-bg-light" data-testid="nail-art-gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Nail Art Gallery
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark" data-testid="gallery-title">
                Creative Nail Designs
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-testid="gallery-description">
                Explore our stunning collection of nail art designs, from subtle elegance to bold statements
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-6">
            {nailArtGallery.map((item, index) => (
              <ScrollReveal key={item.design} delay={index * 100}>
                <div 
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                  data-testid={`nail-art-${index}`}
                >
                  <div className="img-zoom-container h-64">
                    <img 
                      src={item.image} 
                      alt={item.design}
                      className="img-zoom w-full h-full object-cover"
                      data-testid={`nail-art-image-${index}`}
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 
                      className="text-lg font-playfair font-bold text-text-dark group-hover:text-primary transition-colors"
                      data-testid={`nail-art-title-${index}`}
                    >
                      {item.design}
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hygiene Promise */}
      <section className="py-24 bg-white" data-testid="nail-hygiene">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                  Safety First
                </span>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-text-dark" data-testid="hygiene-title">
                  Our Hygiene Promise
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed" data-testid="hygiene-description">
                  Your safety and health are our top priorities. We maintain the highest standards of cleanliness and sterilization for all our nail services.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Shield className="text-primary" />,
                      title: 'Sterilized Tools',
                      description: 'All tools are professionally sterilized using hospital-grade autoclaves.',
                    },
                    {
                      icon: <Star className="text-gold" />,
                      title: 'Premium Products',
                      description: 'We use only high-quality, non-toxic polishes and treatments.',
                    },
                    {
                      icon: <Palette className="text-secondary" />,
                      title: 'Fresh Supplies',
                      description: 'New files, buffers, and disposable items for every client.',
                    },
                  ].map((item, index) => (
                    <div 
                      key={item.title}
                      className="flex items-start space-x-4"
                      data-testid={`hygiene-item-${index}`}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 
                          className="text-xl font-playfair font-bold mb-2 text-text-dark"
                          data-testid={`hygiene-item-title-${index}`}
                        >
                          {item.title}
                        </h3>
                        <p 
                          className="text-gray-600 leading-relaxed"
                          data-testid={`hygiene-item-description-${index}`}
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
                      src="https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                      alt="Clean nail station"
                      className="img-zoom w-full h-48 object-cover"
                    />
                  </div>
                  <div className="img-zoom-container rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1610992015732-2449b76344bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h-400" 
                      alt="Sterilized tools"
                      className="img-zoom w-full h-64 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="img-zoom-container rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                      alt="Premium nail products"
                      className="img-zoom w-full h-64 object-cover"
                    />
                  </div>
                  <div className="img-zoom-container rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                      alt="Clean workspace"
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
      <section className="py-24 bg-accent text-white" data-testid="nail-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6" data-testid="nail-cta-title">
              Book Nail Appointment
            </h2>
            <p className="text-xl mb-10 text-gray-100 max-w-3xl mx-auto" data-testid="nail-cta-description">
              Ready for perfect nails? Choose from our range of services and let our experts create the look you love
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/booking">
                <Button 
                  className="bg-white text-accent px-10 py-4 rounded-full font-semibold text-lg hover:bg-gold hover:text-white transition-all duration-300 shadow-xl"
                  data-testid="nail-appointment-button"
                >
                  Book Now
                </Button>
              </Link>
              <Link href="/gallery" className="inline-flex items-center text-white font-semibold text-lg hover:text-gold transition-colors">
                View More Designs <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Nails;
