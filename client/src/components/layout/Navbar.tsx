import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [mobileDropdowns, setMobileDropdowns] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
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
        { href: '/services/hair', label: 'Hair Care' },
        { href: '/services/skin', label: 'Skin Glow' },
        { href: '/services/nails', label: 'Nail Art' },
        { href: '/services/spa', label: 'Spa & Relaxation' },
      ],
    },
    { href: '/makeup', label: 'Makeup' },
    { href: '/mengrooming', label: 'Men Grooming' },
    {
      href: '/academy',
      label: 'Academy',
      hasDropdown: true,
      subLinks: [
        { href: '/academy/microblading', label: 'Microblading' },
        { href: '/academy/lasers', label: 'Lasers' },
      ],
    },
    {
      href: '/asthetics',
      label: 'Asthetics',
      hasDropdown: true,
      subLinks: [
        { href: '/asthetics/microblading', label: 'Microblading' },
        { href: '/asthetics/lasers', label: 'Lasers' },
      ],
    },
    { href: '/offers', label: 'Offers' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'backdrop-blur-md bg-[#f6eee0]/90 shadow-md'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#e4b7a0] to-[#c38370] flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              S
            </div>
            <span className="font-semibold text-lg sm:text-xl text-[#a45c40]">
              Sumeeran Salon
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`flex items-center text-sm font-medium transition-colors whitespace-nowrap ${location === link.href
                      ? 'text-[#a45c40]'
                      : 'text-[#5a4631] hover:text-[#c38370]'
                    }`}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>

                {/* Dropdown for desktop */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-44 bg-white border border-[#f6eee0] rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        className="block px-4 py-3 text-sm text-[#5a4631] hover:bg-[#f6eee0] hover:text-[#a45c40] rounded-lg"
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
              <Button className="bg-gradient-to-r from-[#e4b7a0] to-[#c38370] text-white px-5 py-2 rounded-full hover:opacity-90 shadow-md">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6 text-[#a45c40]" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[80vw] sm:w-[350px] bg-[#f6eee0] border-l border-[#e4b7a0] max-h-screen flex flex-col"
            >
              {/* Fixed header with close + profile */}
              <div className="flex flex-col items-center p-4 border-b border-[#e4b7a0]">


                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e4b7a0] to-[#c38370] flex items-center justify-center text-white font-bold text-xl shadow-md mb-3">
                    S
                  </div>
                  <span className="font-semibold text-lg text-[#a45c40]">
                    Sumeeran Salon
                  </span>
                </div>
              </div>

              {/* Scrollable links */}
              <div className="flex-1 overflow-y-auto scrollbar-hide px-4 py-2 space-y-2">
                {navLinks.map((link) => {
                  const isMobile = window.innerWidth < 1024;

                  if (link.hasDropdown && isMobile) {
                    const key = link.href.replace('/', '');

                    return (
                      <div key={link.href} className="space-y-1">
                        {/* Parent Link */}
                        <div
                          className={`block px-4 py-3 text-base font-medium transition-all duration-300 cursor-pointer ${location === link.href
                              ? 'text-[#c38370] drop-shadow-[0_1px_1px_rgba(164,92,64,0.3)] scale-[1.02]'
                              : 'text-[#5a4631] hover:text-[#a45c40] hover:scale-[1.03]'
                            }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setMobileDropdowns((prev) => ({
                              ...prev,
                              [key]: !prev[key],
                            }));
                          }}
                        >
                          <div className="flex items-center justify-between">
                            {link.label}
                            <ChevronDown
                              className={`w-4 h-4 text-[#a45c40] transform transition-transform duration-300 ${mobileDropdowns[key] ? 'rotate-180' : ''
                                }`}
                            />
                          </div>
                        </div>

                        {/* Submenu */}
                        {mobileDropdowns[key] && (
                          <div className="pl-6 mt-1 space-y-1">
                            {link.subLinks.map((subLink) => (
                              <Link
                                key={subLink.href}
                                href={subLink.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-2 text-sm text-[#5a4631] hover:text-[#a45c40] rounded-lg hover:bg-[#e4b7a0]/20 transition-colors"
                              >
                                {subLink.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  // Normal links
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 text-base font-medium transition-all duration-300 ${location === link.href
                          ? 'text-[#c38370] drop-shadow-[0_1px_1px_rgba(164,92,64,0.3)] scale-[1.02]'
                          : 'text-[#5a4631] hover:text-[#a45c40] hover:scale-[1.03]'
                        }`}
                    >
                      <div className="flex items-center justify-between">{link.label}</div>
                    </Link>
                  );
                })}



              </div>
              {/* Mobile CTA button at bottom */}
              <div className="pt-5 mt-5 border-t border-[#e4b7a0]">
                <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-[#e4b7a0] to-[#c38370] text-white font-semibold py-3 rounded-full shadow-md">
                    Book Now
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
