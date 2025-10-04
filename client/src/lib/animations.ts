// Animation variants for Framer Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const fadeInDown = {
  initial: { opacity: 0, y: -60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

export const slideInUp = {
  initial: { y: '100%' },
  animate: { y: 0 },
  exit: { y: '100%' },
  transition: { duration: 0.3, ease: 'easeInOut' }
};

// Stagger animations for lists
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Page transition animations
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};

// Hover animations
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.2 }
};

export const hoverLift = {
  whileHover: { y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' },
  transition: { duration: 0.3 }
};

// Button animations
export const buttonVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2, ease: 'easeOut' }
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

// Counter animation utility
export const animateCounter = (
  target: number,
  duration: number = 2000,
  onUpdate: (value: number) => void
) => {
  const startTime = performance.now();
  
  const updateCounter = (currentTime: number) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    
    // Easing function for smooth animation
    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
    const currentValue = Math.floor(easeOutCubic * target);
    
    onUpdate(currentValue);
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      onUpdate(target);
    }
  };
  
  requestAnimationFrame(updateCounter);
};

// Intersection Observer utility for scroll animations
export const createScrollObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
) => {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '-50px 0px',
    ...options
  };
  
  return new IntersectionObserver(callback, defaultOptions);
};

// Smooth scroll utility
export const smoothScroll = (targetId: string, offset: number = 80) => {
  const element = document.getElementById(targetId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Parallax scroll utility
export const calculateParallax = (scrollY: number, rate: number = 0.5) => {
  return scrollY * rate;
};

// Loading animation variants
export const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear'
    }
  }
};

export const pulseVariants = {
  animate: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};
