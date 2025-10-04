import { Link } from 'wouter';
import { Sparkles, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  const serviceLinks = [
    { href: '/services/hair', label: 'Hair Services' },
    { href: '/services/skin', label: 'Skin Treatments' },
    { href: '/services/nails', label: 'Nail Care' },
    { href: '/services/makeup', label: 'Makeup & Beauty' },
    { href: '/services/spa', label: 'Spa & Relaxation' },
    { href: '/services/bridal', label: 'Bridal Packages' },
  ];

  const socialLinks = [
    { href: '#', icon: Facebook, label: 'Facebook' },
    { href: '#', icon: Instagram, label: 'Instagram' },
    { href: '#', icon: Twitter, label: 'Twitter' },
    { href: '#', icon: Youtube, label: 'YouTube' },
  ];

  return (
    <footer className="bg-text-dark text-gray-300" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div data-testid="footer-brand">
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="text-3xl text-gold" />
              <span className="text-2xl font-playfair font-bold text-white">Sumeeran Salon and Academy</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your destination for premium beauty and wellness services. Experience luxury that transforms.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
                  data-testid={`social-link-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div data-testid="footer-quick-links">
            <h3 className="text-white font-playfair font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="hover:text-gold transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div data-testid="footer-services">
            <h3 className="text-white font-playfair font-bold text-xl mb-6">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="hover:text-gold transition-colors"
                    data-testid={`footer-service-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div data-testid="footer-contact">
            <h3 className="text-white font-playfair font-bold text-xl mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-gold mt-1 mr-3 flex-shrink-0" size={16} />
                <span className="text-sm">123 Beauty Boulevard, Luxury District, Mumbai 400001</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-gold mr-3 flex-shrink-0" size={16} />
                <a 
                  href="tel:+911234567890" 
                  className="hover:text-gold transition-colors text-sm"
                  data-testid="footer-phone-link"
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-gold mr-3 flex-shrink-0" size={16} />
                <a 
                  href="mailto:info@luxebeauty.com" 
                  className="hover:text-gold transition-colors text-sm"
                  data-testid="footer-email-link"
                >
                  info@luxebeauty.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="text-gold mt-1 mr-3 flex-shrink-0" size={16} />
                <div className="text-sm">
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Map Placeholder */}
        <div className="mb-12" data-testid="footer-map">
          <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="text-gold text-4xl mb-4 mx-auto" />
              <p className="text-gray-400">Google Maps Integration</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0" data-testid="footer-copyright">
            &copy; 2024 Sumeeran Salon and Academy. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-gray-500 hover:text-gold transition-colors text-sm"
              data-testid="footer-privacy-link"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-500 hover:text-gold transition-colors text-sm"
              data-testid="footer-terms-link"
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="text-gray-500 hover:text-gold transition-colors text-sm"
              data-testid="footer-sitemap-link"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
