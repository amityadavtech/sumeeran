import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Menu, Sparkles, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { 
      href: '/services', 
      label: 'Services',
      hasDropdown: true,
      subLinks: [
        { href: '/services/hair', label: 'Hair Services' },
        { href: '/services/skin', label: 'Skin Treatments' },
        { href: '/services/nails', label: 'Nail Care' },
        { href: '/services/makeup', label: 'Makeup & Beauty' },
        { href: '/services/spa', label: 'Spa & Relaxation' },
        { href: '/services/bridal', label: 'Bridal Packages' },
      ]
    },
    { href: '/pricing', label: 'Pricing' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? 'navbar-scrolled' : ''
        }`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3" data-testid="logo-link">
              <Sparkles className="text-3xl text-primary" />
              <span className="text-2xl font-playfair font-bold text-text-dark">Sumeeran Salon and Academy</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.href} className="relative group">
                  <Link 
                    href={link.href}
                    className={`text-text-dark hover:text-primary transition-colors font-medium flex items-center ${
                      location === link.href ? 'text-primary' : ''
                    }`}
                    data-testid={`nav-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {link.hasDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      {link.subLinks?.map((subLink) => (
                        <Link 
                          key={subLink.href}
                          href={subLink.href}
                          className="block px-4 py-3 hover:bg-bg-light transition-colors text-text-dark hover:text-primary"
                          data-testid={`nav-sublink-${subLink.label.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/booking">
                <Button className="btn-gradient" data-testid="book-appointment-button">
                  <span>Book Appointment</span>
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="lg:hidden hover:bg-primary/10"
                  data-testid="mobile-menu-button"
                >
                  <Menu className="h-6 w-6 text-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] sm:w-[400px] bg-gradient-to-br from-white via-bg-light to-white border-l-2 border-gold/20">
                <div className="flex items-center justify-center gap-3 mb-10 pb-6 border-b border-gold/20">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-gold rounded-full blur-md opacity-30"></div>
                    <Sparkles className="relative text-3xl text-primary" />
                  </div>
                  <span className="text-2xl font-playfair font-bold bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">Sumeeran Salon and Academy</span>
                </div>
                
                <div className="space-y-2">
                  {navLinks.map((link, idx) => (
                    <div key={link.href}>
                      <Link 
                        href={link.href}
                        className={`block text-base font-medium px-4 py-3 rounded-xl transition-all duration-300 ${
                          location === link.href 
                            ? 'bg-gradient-to-r from-primary to-gold text-white shadow-lg' 
                            : 'text-text-dark hover:bg-primary/10 hover:text-primary'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{link.label}</span>
                          {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                        </div>
                      </Link>
                      {link.hasDropdown && (
                        <div className="pl-6 mt-2 space-y-1 mb-3">
                          {link.subLinks?.map((subLink) => (
                            <Link 
                              key={subLink.href}
                              href={subLink.href}
                              className="block text-sm text-gray-600 hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-primary/5"
                              onClick={() => setIsMobileMenuOpen(false)}
                              data-testid={`mobile-nav-sublink-${subLink.label.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              • {subLink.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="pt-6 mt-6 border-t border-gold/20">
                    <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full btn-gradient py-6 text-base font-bold shadow-xl" data-testid="mobile-book-appointment-button">
                        <span>Book Appointment</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
