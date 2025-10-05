import { Phone, MessageCircle, Calendar } from 'lucide-react';

const FloatingActions = () => {
  const actions = [
    {
      href: 'https://wa.me/1234567890',
      icon: MessageCircle,
      bg: 'bg-green-500 hover:bg-green-600',
      label: 'WhatsApp',
      delay: '0.1s',
    },
    {
      href: 'tel:+1234567890',
      icon: Phone,
      bg: 'bg-blue-500 hover:bg-blue-600',
      label: 'Call',
      delay: '0.2s',
    },
    {
      href: '/booking',
      icon: Calendar,
      bg: 'bg-primary hover:bg-secondary',
      label: 'Book Now',
      delay: '0.3s',
    },
  ];

  return (
    <div className="fixed z-50 flex gap-4 p-4
                    right-4 bottom-4
                    flex-col md:flex-col lg:flex-col
                    md:bottom-6 md:right-6
                    md:gap-4
                    sm:flex-row sm:justify-center sm:right-1/2 sm:translate-x-1/2
                    sm:bottom-4
                    ">
      {actions.map((action) => (
        <a
          key={action.label}
          href={action.href}
          target={action.href.startsWith('http') ? '_blank' : undefined}
          rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className={`w-14 h-14 sm:w-12 sm:h-12 ${action.bg} rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 animate-float`}
          style={{ animationDelay: action.delay }}
        >
          <action.icon className="text-white text-xl sm:text-lg" />
          <span className="sr-only">{action.label}</span>
        </a>
      ))}
    </div>
  );
};

export default FloatingActions;
