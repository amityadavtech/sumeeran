import { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';

interface CounterProps {
  target: number;
  label: string;
  delay?: number;
}

const Counter = ({ target, label, delay = 0 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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

          setTimeout(updateCounter, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
  }, [target, delay]);

  return (
    <div ref={counterRef} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-[#c38370] mb-1 font-playfair">
        {count.toLocaleString()}
      </div>
      <p className="text-[#a45c40] font-medium">{label}</p>
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
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100}>
              <Counter target={stat.target} label={stat.label} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
