import { Link } from 'wouter';
import { Check, Star, ArrowRight, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import ScrollReveal from '@/components/ui/ScrollReveal';
import PricingCard from '@/components/ui/PricingCard';
import { pricingPlans } from '../data/services';

const Pricing = () => {
  const addOnServices = [
    { name: 'Hair Extensions', price: 3000, description: 'Premium quality extensions' },
    { name: 'Eyebrow Threading', price: 500, description: 'Precision shaping' },
    { name: 'Lash Extensions', price: 2000, description: 'Volume or classic style' },
    { name: 'Deep Conditioning', price: 1500, description: 'Intensive hair treatment' },
    { name: 'Makeup Touch-up', price: 800, description: 'Event day refresh' },
    { name: 'Nail Art (per nail)', price: 200, description: 'Custom designs' },
  ];

  return (
    <div className="min-h-screen pt-20" data-testid="pricing-page">
      {/* Hero Section */}
      <section 
        className="relative py-32 flex items-center justify-center overflow-hidden parallax"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080)'
        }}
        data-testid="pricing-hero"
      >
        <div className="hero-gradient absolute inset-0"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <ScrollReveal>
            <span className="inline-block px-6 py-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full text-gold font-semibold text-sm tracking-wider mb-6">
              PACKAGES & PRICING
            </span>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6" data-testid="pricing-hero-title">
              Luxury That Fits Your Budget
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto" data-testid="pricing-hero-description">
              Choose from our carefully crafted packages designed to give you the perfect beauty experience
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 bg-white" data-testid="pricing-plans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Choose Your Plan
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark" data-testid="plans-title">
                Membership Packages
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-testid="plans-description">
                Enjoy regular beauty treatments with exclusive member benefits and significant savings
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.id}
                title={plan.title}
                price={plan.price}
                period={plan.period}
                features={plan.features}
                isPopular={plan.popular}
                buttonText={plan.buttonText}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Individual Services Pricing */}
      <section className="py-24 bg-bg-light" data-testid="individual-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                A La Carte
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark" data-testid="services-title">
                Individual Services
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-testid="services-description">
                Book individual treatments when you need them most
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Hair Services',
                services: [
                  { name: 'Hair Cut & Style', price: '₹1,500 - ₹3,000' },
                  { name: 'Hair Color', price: '₹3,500 - ₹8,000' },
                  { name: 'Hair Spa', price: '₹2,000 - ₹4,000' },
                  { name: 'Keratin Treatment', price: '₹8,000 - ₹15,000' },
                ]
              },
              {
                category: 'Skin Treatments',
                services: [
                  { name: 'Basic Facial', price: '₹2,000 - ₹3,000' },
                  { name: 'HydraFacial', price: '₹4,500 - ₹6,000' },
                  { name: 'Anti-Aging Treatment', price: '₹6,000 - ₹8,000' },
                  { name: 'Acne Treatment', price: '₹3,500 - ₹5,000' },
                ]
              },
              {
                category: 'Nail Care',
                services: [
                  { name: 'Manicure', price: '₹800 - ₹1,200' },
                  { name: 'Pedicure', price: '₹1,000 - ₹1,500' },
                  { name: 'Gel Manicure', price: '₹1,500 - ₹2,000' },
                  { name: 'Nail Extensions', price: '₹2,500 - ₹4,000' },
                ]
              },
              {
                category: 'Makeup Services',
                services: [
                  { name: 'Party Makeup', price: '₹4,000 - ₹6,000' },
                  { name: 'Bridal Makeup', price: '₹12,000 - ₹25,000' },
                  { name: 'Makeup Lesson', price: '₹3,000 - ₹5,000' },
                  { name: 'Photography Makeup', price: '₹6,000 - ₹8,000' },
                ]
              },
              {
                category: 'Spa Services',
                services: [
                  { name: 'Body Massage', price: '₹3,500 - ₹5,000' },
                  { name: 'Hot Stone Therapy', price: '₹4,500 - ₹6,000' },
                  { name: 'Aromatherapy', price: '₹3,500 - ₹4,500' },
                  { name: 'Body Wrap', price: '₹4,000 - ₹5,500' },
                ]
              },
              {
                category: 'Bridal Packages',
                services: [
                  { name: 'Pre-Bridal Package', price: '₹25,000 - ₹40,000' },
                  { name: 'Bridal Day Package', price: '₹35,000 - ₹50,000' },
                  { name: 'Mehendi Package', price: '₹15,000 - ₹25,000' },
                  { name: 'Couple Package', price: '₹50,000 - ₹75,000' },
                ]
              },
            ].map((category, index) => (
              <ScrollReveal key={category.category} delay={index * 100}>
                <Card 
                  className="h-full hover:shadow-xl transition-all duration-300"
                  data-testid={`service-category-${index}`}
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-playfair text-primary">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.services.map((service, serviceIndex) => (
                        <div 
                          key={service.name}
                          className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                          data-testid={`service-item-${index}-${serviceIndex}`}
                        >
                          <span className="text-gray-700">{service.name}</span>
                          <span className="font-semibold text-primary">{service.price}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-24 bg-white" data-testid="addon-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Enhance Your Experience
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-dark" data-testid="addon-title">
                Add-On Services
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-testid="addon-description">
                Complete your beauty transformation with our premium add-on services
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOnServices.map((addon, index) => (
              <ScrollReveal key={addon.name} delay={index * 100}>
                <div 
                  className="bg-bg-light rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                  data-testid={`addon-service-${index}`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-playfair font-bold text-text-dark">
                      {addon.name}
                    </h3>
                    <span className="text-xl font-bold text-primary">
                      ₹{addon.price.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{addon.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package Request */}
      <section className="py-24 bg-bg-light" data-testid="custom-package">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                  Personalized Service
                </span>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-text-dark" data-testid="custom-title">
                  Create Your Custom Package
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed" data-testid="custom-description">
                  Have specific needs or special requirements? Let us create a personalized package that perfectly fits your beauty goals and budget.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    'Personalized consultation with our beauty experts',
                    'Custom service combinations based on your needs',
                    'Flexible scheduling and payment options',
                    'Special pricing for bulk bookings',
                  ].map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-center"
                      data-testid={`custom-benefit-${index}`}
                    >
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button className="bg-primary text-white hover:bg-secondary px-8 py-3">
                      <Phone className="w-4 h-4 mr-2" />
                      Call to Discuss
                    </Button>
                  </Link>
                  <Link href="/booking">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-playfair text-center">
                    Request Custom Quote
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6" data-testid="custom-package-form">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input 
                          placeholder="Your full name"
                          data-testid="custom-name-input"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input 
                          placeholder="Your phone number"
                          data-testid="custom-phone-input"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input 
                        type="email" 
                        placeholder="your.email@example.com"
                        data-testid="custom-email-input"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Services Interested In *
                      </label>
                      <Input 
                        placeholder="e.g., Bridal package, Hair + Makeup combo"
                        data-testid="custom-services-input"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <Input 
                        placeholder="e.g., ₹10,000 - ₹20,000"
                        data-testid="custom-budget-input"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Requirements
                      </label>
                      <Textarea 
                        placeholder="Tell us about your specific needs, timeline, or any special requirements..."
                        rows={4}
                        data-testid="custom-requirements-input"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-primary text-white hover:bg-secondary py-3"
                      data-testid="custom-submit-button"
                    >
                      Request Custom Quote
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary text-white" data-testid="pricing-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6" data-testid="pricing-cta-title">
              Ready to Begin Your Beauty Journey?
            </h2>
            <p className="text-xl mb-10 text-gray-100 max-w-3xl mx-auto" data-testid="pricing-cta-description">
              Choose your perfect package and experience the luxury you deserve
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/booking">
                <Button 
                  className="bg-white text-secondary px-10 py-4 rounded-full font-semibold text-lg hover:bg-gold hover:text-white transition-all duration-300 shadow-xl"
                  data-testid="pricing-book-button"
                >
                  Book Your Package
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

export default Pricing;
