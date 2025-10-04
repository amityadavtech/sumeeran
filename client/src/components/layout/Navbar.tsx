
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Sparkles, ChevronDown, X } from 'lucide-react';

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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gold/10' 
            : 'bg-gradient-to-b from-black/20 to-transparent'
        }`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
            {/* Premium Logo */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group" data-testid="logo-link">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-gold rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <Sparkles className={`relative w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 transition-all duration-300 ${
                  isScrolled ? 'text-primary' : 'text-gold'
                }`} />
              </div>
              <span className={`text-xl sm:text-2xl lg:text-3xl font-playfair font-bold bg-gradient-to-r from-primary via-gold to-primary bg-clip-text text-transparent transition-all duration-300 ${
                isScrolled ? '' : 'drop-shadow-lg'
              }`}>
                Luxe Beauty
              </span>
            </Link>

            {/* Desktop Premium Menu */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <div key={link.href} className="relative group">
                  <Link 
                    href={link.href}
                    className={`relative px-4 xl:px-5 py-2 text-sm xl:text-base font-semibold transition-all duration-300 flex items-center ${
                      location === link.href 
                        ? isScrolled 
                          ? 'text-primary' 
                          : 'text-gold'
                        : isScrolled 
                          ? 'text-gray-700 hover:text-primary' 
                          : 'text-white hover:text-gold'
                    }`}
                    data-testid={`nav-link-${link.label.toLowerCase()}`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {link.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                    
                    {/* Hover underline effect */}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                      location === link.href ? 'scale-x-100' : ''
                    } ${isScrolled ? 'bg-gradient-to-r from-primary to-gold' : 'bg-gold'}`}></span>
                  </Link>
                  
                  {/* Premium Dropdown Menu */}
                  {link.hasDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-gold/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden z-50">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-gold to-primary"></div>
                      {link.subLinks?.map((subLink, idx) => (
                        <Link 
                          key={subLink.href}
                          href={subLink.href}
                          className="block px-6 py-3 hover:bg-gradient-to-r hover:from-primary/5 hover:to-gold/5 transition-all duration-300 text-gray-700 hover:text-primary font-medium border-b border-gray-100 last:border-b-0"
                          data-testid={`nav-sublink-${subLink.label.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <span className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            {subLink.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Premium CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Link href="/booking">
                <Button className="relative overflow-hidden group px-6 xl:px-8 py-2.5 xl:py-3 text-sm xl:text-base font-bold bg-gradient-to-r from-primary via-gold to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 text-white shadow-lg hover:shadow-2xl hover:shadow-gold/50 rounded-full" data-testid="book-appointment-button">
                  <span className="relative z-10">Book Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gold to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Button>
              </Link>
            </div>

            {/* Premium Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`lg:hidden relative overflow-hidden group ${
                    isScrolled 
                      ? 'hover:bg-primary/10' 
                      : 'hover:bg-white/10 backdrop-blur-sm'
                  }`}
                  data-testid="mobile-menu-button"
                >
                  <div className="relative z-10">
                    <Menu className={`h-6 w-6 sm:h-7 sm:w-7 transition-colors ${
                      isScrolled ? 'text-primary' : 'text-white'
                    }`} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-gold opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[420px] p-0 bg-gradient-to-br from-white via-bg-light/30 to-white border-l-4 border-gold/30">
                {/* Premium Mobile Header */}
                <div className="relative p-6 pb-8 bg-gradient-to-br from-primary to-gold">
                  <div className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-sm"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="absolute inset-0 bg-white/30 rounded-full blur-lg"></div>
                          <Sparkles className="relative text-4xl sm:text-5xl text-white drop-shadow-lg" />
                        </div>
                        <span className="text-2xl sm:text-3xl font-playfair font-bold text-white drop-shadow-lg">Luxe Beauty</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-white hover:bg-white/20 rounded-full"
                      >
                        <X className="h-6 w-6" />
                      </Button>
                    </div>
                    <p className="text-white/90 text-sm sm:text-base font-medium">Your Journey to Beauty Begins Here</p>
                  </div>
                </div>
                
                {/* Premium Mobile Navigation */}
                <div className="p-4 sm:p-6 space-y-2 overflow-y-auto max-h-[calc(100vh-220px)]">
                  {navLinks.map((link, idx) => (
                    <div key={link.href} className="space-y-1">
                      <Link 
                        href={link.href}
                        className={`block text-base sm:text-lg font-semibold px-5 py-3.5 sm:py-4 rounded-2xl transition-all duration-300 ${
                          location === link.href 
                            ? 'bg-gradient-to-r from-primary to-gold text-white shadow-xl shadow-primary/30 scale-[1.02]' 
                            : 'text-gray-700 hover:bg-gradient-to-r hover:from-primary/10 hover:to-gold/10 hover:text-primary'
                        }`}
                        onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                        data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-3">
                            {location === link.href && (
                              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                            )}
                            {link.label}
                          </span>
                          {link.hasDropdown && (
                            <ChevronDown className={`w-5 h-5 transition-transform ${
                              location.startsWith(link.href) ? 'rotate-180' : ''
                            }`} />
                          )}
                        </div>
                      </Link>
                      
                      {/* Mobile Dropdown Items */}
                      {link.hasDropdown && (
                        <div className="ml-4 space-y-1 mt-2">
                          {link.subLinks?.map((subLink) => (
                            <Link 
                              key={subLink.href}
                              href={subLink.href}
                              className="block text-sm sm:text-base text-gray-600 hover:text-primary transition-all duration-300 py-2.5 px-4 rounded-xl hover:bg-primary/5 font-medium"
                              onClick={() => setIsMobileMenuOpen(false)}
                              data-testid={`mobile-nav-sublink-${subLink.label.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                                {subLink.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Premium Mobile CTA */}
                <div className="p-4 sm:p-6 pt-4 border-t-2 border-gold/20 bg-gradient-to-br from-bg-light/50 to-white">
                  <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full relative overflow-hidden group py-5 sm:py-6 text-base sm:text-lg font-bold bg-gradient-to-r from-primary via-gold to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 text-white shadow-2xl hover:shadow-3xl rounded-2xl" data-testid="mobile-book-appointment-button">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        Book Your Appointment
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-gold to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
