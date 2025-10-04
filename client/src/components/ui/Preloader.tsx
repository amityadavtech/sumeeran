import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 bg-gradient-to-br from-secondary to-primary z-50 flex items-center justify-center transition-all duration-500 ${
        !isVisible ? 'opacity-0 invisible' : ''
      }`}
      data-testid="preloader"
    >
      <div className="text-center text-white">
        <div className="mb-4 animate-pulse">
          <Sparkles className="text-6xl mx-auto text-gold" />
        </div>
        <h1 className="text-4xl font-playfair font-bold animate-pulse" data-testid="preloader-text">
          Luxe Beauty
        </h1>
        <div className="mt-8">
          <div className="w-16 h-16 border-4 border-white/30 border-t-gold rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
