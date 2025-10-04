import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Sparkles, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md' 
            : 'bg-white/95 backdrop-blur-sm'
        }`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group" data-testid="logo-link">
              <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-primary transition-transform group-hover:scale-110" />
              <span className="text-xl sm:text-2xl font-playfair font-bold text-primary">
                Luxe Beauty
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    location === link.href 
                      ? 'text-primary bg-primary/5' 
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`}
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Link href="/booking">
                <Button 
                  className="px-6 py-2 font-semibold bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-200 shadow-sm hover:shadow-md" 
                  data-testid="book-appointment-button"
                >
                  Book Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="lg:hidden hover:bg-gray-100"
                  data-testid="mobile-menu-button"
                >
                  <Menu className="h-6 w-6 text-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 p-0 bg-white">
                {/* Mobile Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-7 h-7 text-primary" />
                      <span className="text-2xl font-playfair font-bold text-primary">Luxe Beauty</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="hover:bg-gray-100"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <div className="p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-180px)]">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                        location === link.href 
                          ? 'bg-primary text-white' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="p-4 border-t border-gray-100">
                  <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button 
                      className="w-full py-4 text-base font-semibold bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-200" 
                      data-testid="mobile-book-appointment-button"
                    >
                      Book Your Appointment
                    </Button>
                  </Link>
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