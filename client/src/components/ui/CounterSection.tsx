import { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';

interface CounterProps {
  target: number;
  label: string;
  delay?: number;
}

const Counter = ({ target, label, delay = 0 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          setTimeout(() => {
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
              current += increment;
              if (current < target) {
                setCount(Math.floor(current));
                requestAnimationFrame(updateCounter);
              } else {
                setCount(target);
              }
            };

            updateCounter();
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [target, hasAnimated, delay]);

  return (
    <div ref={counterRef} className="text-center" data-testid={`counter-${label.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="text-5xl font-bold text-gold mb-2 font-playfair" data-testid={`counter-value-${label.toLowerCase().replace(/\s+/g, '-')}`}>
        {count.toLocaleString()}
      </div>
      <p className="text-gray-600 font-semibold" data-testid={`counter-label-${label.toLowerCase().replace(/\s+/g, '-')}`}>
        {label}
      </p>
    </div>
  );
};

const CounterSection = () => {
  const stats = [
    { target: 15, label: 'Years of Excellence' },
    { target: 50000, label: 'Happy Clients' },
    { target: 25, label: 'Expert Professionals' },
    { target: 12, label: 'Industry Awards' },
  ];

  return (
    <section className="py-20 bg-white" data-testid="counter-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100}>
              <Counter 
                target={stat.target} 
                label={stat.label}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
