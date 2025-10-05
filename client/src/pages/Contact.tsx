import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useToast } from '@/hooks/use-toast';

import { ChevronDown } from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  // After
const [activeIndex, setActiveIndex] = useState<number | null>(null);

const toggleFAQ = (index: number) => {
  setActiveIndex(activeIndex === index ? null : index);
};

  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const updateFormData = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const faqs = [
    {
      question: 'What are your cancellation policies?',
      answer: 'You can cancel or reschedule appointments up to 24 hours in advance without any charges.',
    },
    {
      question: 'Do you offer group booking discounts?',
      answer: 'Yes! We offer discounts for group bookings of 3 or more clients. Contact us for details.',
    },
    {
      question: 'Can I reschedule my appointment?',
      answer: 'Absolutely! Rescheduling is possible up to 12 hours before your scheduled appointment.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, credit/debit cards, and all major UPI methods for your convenience.',
    },
    {
      question: 'Do you provide custom packages?',
      answer: 'Yes! You can create personalized packages based on your needs. Contact our team for assistance.',
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Beauty Boulevard', 'Luxury District, Mumbai 400001'],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 123 456 7890', '+91 987 654 3210'],
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@luxebeauty.com', 'bookings@luxebeauty.com'],
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      details: ['Mon - Sat: 9:00 AM - 8:00 PM', 'Sunday: 10:00 AM - 6:00 PM'],
      color: 'text-gold',
      bgColor: 'bg-gold/10',
    },
  ];

  return (
    <div className="min-h-screen pt-20" data-testid="contact-page">
      {/* Hero Section */}
      <section
        className="relative py-32 flex items-center justify-center overflow-hidden parallax"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080)'
        }}
        data-testid="contact-hero"
      >
        <div className="hero-gradient absolute inset-0"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <ScrollReveal>
            <span className="inline-block px-6 py-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full text-text-dark font-semibold text-sm tracking-wider mb-6">
              GET IN TOUCH
            </span>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-text-dark" data-testid="contact-hero-title">
              Let's Connect
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto" data-testid="contact-hero-description">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-bg-light" data-testid="contact-info-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={info.title} delay={index * 100}>
                <Card
                  className="text-center hover:shadow-xl transition-all duration-300 h-full"
                  data-testid={`contact-info-${index}`}
                >
                  <CardContent className="pt-8">
                    <div className={`w-16 h-16 ${info.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <info.icon className={`w-8 h-8 ${info.color}`} />
                    </div>
                    <h3 className="text-xl font-playfair font-bold mb-4 text-text-dark">
                      {info.title}
                    </h3>
                    <div className="space-y-2">
                      {info.details.map((detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className="text-gray-600"
                          data-testid={`contact-detail-${index}-${detailIndex}`}
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-white" data-testid="contact-form-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollReveal>
              <div>
                <div className="mb-8">
                  <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                    Send us a Message
                  </span>
                  <h2 className="text-4xl font-playfair font-bold mb-6 text-text-dark" data-testid="contact-form-title">
                    We're Here to Help
                  </h2>
                  <p className="text-gray-600 leading-relaxed" data-testid="contact-form-description">
                    Have questions about our services, want to book an appointment, or need a custom beauty package?
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>

                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-playfair">
                      Contact Form
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-text-dark mb-2 block">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => updateFormData('name', e.target.value)}
                            placeholder="Enter your full name"
                            required
                            data-testid="contact-name-input"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-text-dark mb-2 block">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => updateFormData('phone', e.target.value)}
                            placeholder="Your phone number"
                            data-testid="contact-phone-input"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-text-dark mb-2 block">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateFormData('email', e.target.value)}
                          placeholder="your.email@example.com"
                          required
                          data-testid="contact-email-input"
                        />
                      </div>

                      <div>
                        <Label htmlFor="subject" className="text-text-dark mb-2 block">
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => updateFormData('subject', e.target.value)}
                          placeholder="What is this regarding?"
                          required
                          data-testid="contact-subject-input"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-text-dark mb-2 block">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => updateFormData('message', e.target.value)}
                          placeholder="Tell us how we can help you..."
                          rows={6}
                          required
                          data-testid="contact-message-input"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-white hover:bg-secondary py-3 text-lg"
                        data-testid="contact-submit-button"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-3"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-3" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>

            {/* Map & Additional Info */}
            <ScrollReveal delay={200}>
              <div className="space-y-8">
                {/* Google Map Placeholder */}
                <Card className="overflow-hidden">
                  <div className="h-96 bg-gray-200 flex items-center justify-center" data-testid="contact-map">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-playfair font-bold text-gray-600 mb-2">
                        Find Us Here
                      </h3>
                      <p className="text-gray-500">
                        Interactive map integration would be implemented here
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Quick Contact Options */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-playfair text-center md:text-left">
                      Quick Contact Options
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-bg-light rounded-lg gap-4">
                      <div>
                        <h4 className="font-semibold text-text-dark">Emergency Bookings</h4>
                        <p className="text-sm text-gray-600">For same-day appointments</p>
                      </div>
                      <a
                        href="tel:+911234567890"
                        className="flex items-center justify-center md:w-auto bg-primary text-white px-4 py-2 rounded-full font-semibold hover:bg-secondary transition-colors"
                        data-testid="emergency-call-button"
                      >
                        <Phone className="w-4 h-4 inline mr-2" />
                        Call Now
                      </a>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-bg-light rounded-lg gap-4">
                      <div>
                        <h4 className="font-semibold text-text-dark">WhatsApp Support</h4>
                        <p className="text-sm text-gray-600">Quick questions & booking</p>
                      </div>
                      <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center md:w-auto bg-green-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors"
                        data-testid="whatsapp-button"
                      >
                        <MessageCircle className="w-4 h-4 inline mr-2" />
                        Chat Now
                      </a>
                    </div>
                  </CardContent>
                </Card>


                {/* FAQ Quick Links */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-playfair text-center md:text-left mb-2">
                      Frequently Asked Questions
                    </CardTitle>
                    <p className="text-gray-600 text-center md:text-left">
                      Everything you need to know about our services
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div
                          key={index}
                          className="bg-bg-light rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                          <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center p-4 md:p-5 text-left text-gray-700 font-medium hover:text-primary transition-colors"
                          >
                            <span>{faq.question}</span>
                            <ChevronDown
                              className={`w-5 h-5 transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-primary' : ''
                                }`}
                            />
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-96 p-4 md:p-5' : 'max-h-0 p-0'
                              }`}
                          >
                            <p className="text-gray-600">{faq.answer}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-white" data-testid="newsletter-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-playfair font-bold mb-4" data-testid="newsletter-title">
              Stay Updated
            </h2>
            <p className="text-gray-100 mb-8" data-testid="newsletter-description">
              Subscribe to our newsletter for beauty tips, special offers, and updates on new services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white text-text-dark"
                data-testid="newsletter-email-input"
              />
              <Button
                className="bg-white btn-gradient text-primary hover:bg-gold hover:text-white transition-colors px-8"
                data-testid="newsletter-subscribe-button"
              >
                Subscribe
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
