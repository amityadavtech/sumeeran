import { Users, Award, Heart, Target } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const images = containerRef.current.querySelectorAll(".img-zoom-container");

      gsap.from(images, {
        opacity: 0,
        y: 50,
        stagger: 0.3, // delay between each image
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // start when container top hits 80% of viewport
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, []);


  const timeline = [
    {
      year: '2009',
      title: 'The Beginning',
      description: 'Sumeeran Salon and Academy was founded with a vision to bring world-class beauty services to discerning clients.',
    },
    {
      year: '2012',
      title: 'Expansion',
      description: 'Expanded our services to include advanced spa treatments and wellness therapies.',
    },
    {
      year: '2015',
      title: 'Recognition',
      description: 'Received our first industry award for excellence in beauty services.',
    },
    {
      year: '2018',
      title: 'Innovation',
      description: 'Introduced cutting-edge technology and international treatment methods.',
    },
    {
      year: '2021',
      title: 'Premium Facility',
      description: 'Renovated our facility to create the ultimate luxury beauty destination.',
    },
    {
      year: '2024',
      title: 'Present Day',
      description: 'Continuing to set new standards in beauty excellence with over 50,000 satisfied clients.',
    },
  ];

  const team = [
    {
      name: 'Priya Sharma',
      role: 'Founder & Creative Director',
      image: 'https://images.unsplash.com/photo-1594824474011-7bb8bbc325e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      bio: '15+ years of experience in luxury beauty services',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Senior Hair Stylist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      bio: 'International training from London and Paris',
    },
    {
      name: 'Anita Verma',
      role: 'Spa & Wellness Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      bio: 'Certified in advanced aromatherapy and wellness',
    },
    {
      name: 'Meera Reddy',
      role: 'Makeup Artist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      bio: 'Celebrity makeup artist with 10+ years experience',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Beauty',
      description: 'We are passionate about helping our clients look and feel their absolute best.',
    },
    {
      icon: Award,
      title: 'Excellence Always',
      description: 'We maintain the highest standards in everything we do, from service to hygiene.',
    },
    {
      icon: Users,
      title: 'Client-Centered',
      description: 'Every treatment is personalized to meet your unique needs and preferences.',
    },
    {
      icon: Target,
      title: 'Innovation Focus',
      description: 'We continuously adopt the latest techniques and technologies in beauty care.',
    },
  ];

  return (
    <div className="min-h-screen pt-20" data-testid="about-page">
      {/* Hero Section */}
      <section
        className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden parallax"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080)'
        }}
        data-testid="about-hero"
      >
        <div className="hero-gradient absolute inset-0"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <ScrollReveal>

            <span className="inline-block px-4 md:px-6 py-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full  font-semibold text-xs md:text-sm tracking-wider mb-4 md:mb-6 text-text-dark" >
              ABOUT Sumeeran Salon and Academy
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 md:mb-6 leading-tight text-text-dark" data-testid="about-hero-title">
              Our Story, Your Beauty
            </h1>
            <p className="text-base md:text-xl text-gray-100 max-w-2xl mx-auto px-4" data-testid="about-hero-description">
              Discover the journey behind Mumbai's most prestigious beauty destination
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-16 md:py-24 bg-bg-light" data-testid="story-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
            <ScrollReveal>
              <div className="order-2 lg:order-1">
                {/* Small Label */}
                <span className="inline-block px-4 py-1 bg-accent/20 border border-accent/40 rounded-full text-accent font-semibold text-xs md:text-sm tracking-wider mb-4 md:mb-6 uppercase">
                  Our Journey
                </span>

                {/* Main Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 md:mb-8 bg-gradient-to-r from-text-dark to-primary bg-clip-text text-transparent leading-tight">
                  15 Years of Beauty Excellence
                </h2>

                {/* Paragraphs */}
                <div className="space-y-5 md:space-y-6 text-text-dark text-sm md:text-base leading-relaxed">
                  <p>
                    Founded in 2009, <span className="font-semibold text-primary">Sumeeran Salon and Academy</span> began as a small salon with a big dream - to create a space where beauty meets luxury, where every client feels like royalty. What started as a vision by founder Priya Sharma has grown into Mumbai's most sought-after beauty destination.
                  </p>
                  <p>
                    Over the years, we've served more than 50,000 clients, each leaving our salon not just looking beautiful, but feeling confident and empowered. Our commitment to excellence has earned recognition from beauty industry leaders and countless testimonials from satisfied clients.
                  </p>
                  <p>
                    Today, <span className="font-semibold text-secondary">Sumeeran Salon and Academy</span> stands as a testament to what passion, dedication, and unwavering commitment to quality can achieve. We continue to evolve, adopting the latest techniques and technologies while staying true to our core values of luxury, comfort, and exceptional service.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div ref={containerRef} className="grid grid-cols-2 gap-4 md:gap-6 order-1 lg:order-2">
                {/* Left Column */}
                <div className="space-y-4 md:space-y-6">
                  <div className="img-zoom-container rounded-2xl overflow-hidden shadow-xl transition-shadow duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                      alt="Salon interior"
                      className="img-zoom w-full h-32 md:h-48 object-cover"
                    />
                  </div>
                  <div className="img-zoom-container rounded-2xl overflow-hidden shadow-xl transition-shadow duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                      alt="Beauty treatment"
                      className="img-zoom w-full h-48 md:h-64 object-cover"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4 md:space-y-6 pt-4 md:pt-8">
                  <div className="img-zoom-container rounded-2xl overflow-hidden shadow-xl transition-shadow duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                      alt="Beauty products"
                      className="img-zoom w-full h-48 md:h-64 object-cover"
                    />
                  </div>
                  <div className="img-zoom-container rounded-2xl overflow-hidden shadow-xl transition-shadow duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                      alt="Team working"
                      className="img-zoom w-full h-32 md:h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
        
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-bg-light" data-testid="timeline-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-4 md:mb-6 text-text-dark" data-testid="timeline-title">
                Milestones & Achievements
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto px-4" data-testid="timeline-description">
                A timeline of our growth, achievements, and commitment to excellence
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Desktop Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-gold to-primary"></div>

            {/* Mobile Timeline Line */}
            <div className="md:hidden absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-gold to-primary"></div>

            <div className="space-y-8 md:space-y-12">
              {timeline.map((item, index) => (
                <ScrollReveal key={item.year} delay={index * 100}>
                  {/* Mobile Layout */}
                  <div
                    className="md:hidden relative pl-16"
                    data-testid={`timeline-item-${index}`}
                  >
                    <div className="absolute left-6 transform -translate-x-1/2 w-3 h-3 bg-gold rounded-full border-2 border-white shadow-lg"></div>
                    <div className="bg-white rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300">
                      <div
                        className="inline-block px-4 py-1 bg-gradient-to-r from-[#e4b7a0] to-[#c38370] text-white rounded-full text-sm font-bold mb-3"
                        data-testid={`timeline-year-${index}`}
                      >
                        {item.year}
                      </div>
                      <h3
                        className="text-lg font-playfair font-bold mb-2 text-text-dark"
                        data-testid={`timeline-title-${index}`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-gray-600 text-sm leading-relaxed"
                        data-testid={`timeline-description-${index}`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div
                    className={`hidden md:flex relative items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'
                      }`}
                    data-testid={`timeline-item-desktop-${index}`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                        <div
                          className="inline-block px-5 py-2 bg-gradient-to-r from-primary to-gold text-white rounded-full text-xl font-bold mb-3"
                          data-testid={`timeline-year-desktop-${index}`}
                        >
                          {item.year}
                        </div>
                        <h3
                          className="text-xl font-playfair font-bold mb-3 text-text-dark"
                          data-testid={`timeline-title-desktop-${index}`}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="text-gray-600 leading-relaxed"
                          data-testid={`timeline-description-desktop-${index}`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white" data-testid="team-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <span className="text-primary font-semibold text-xs md:text-sm tracking-wider uppercase mb-3 md:mb-4 block">
                Meet Our Team
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-4 md:mb-6 text-text-dark" data-testid="team-title">
                Expert Beauty Professionals
              </h2>
              <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-3xl mx-auto px-4" data-testid="team-description">
                Our talented team of beauty experts brings years of experience and passion to every service
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 100}>
                <div
                  className="bg-gradient-to-br from-bg-light to-white rounded-xl md:rounded-2xl p-5 md:p-6 text-center group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  data-testid={`team-member-${index}`}
                >
                  <div className="img-zoom-container rounded-full overflow-hidden w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 ring-4 ring-gold/20">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="img-zoom w-full h-full object-cover"
                      data-testid={`team-image-${index}`}
                    />
                  </div>
                  <h3
                    className="text-lg md:text-xl font-playfair font-bold mb-2 text-text-dark"
                    data-testid={`team-name-${index}`}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-primary font-semibold mb-2 md:mb-3 text-sm md:text-base"
                    data-testid={`team-role-${index}`}
                  >
                    {member.role}
                  </p>
                  <p
                    className="text-gray-600 text-xs md:text-sm leading-relaxed"
                    data-testid={`team-bio-${index}`}
                  >
                    {member.bio}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-secondary text-white relative overflow-hidden" data-testid="values-section">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-gold/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <span className="text-gold font-semibold text-xs md:text-sm tracking-wider uppercase mb-3 md:mb-4 block">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-4 md:mb-6" data-testid="values-title">
                What Drives Us
              </h2>
              <p className="text-gray-200 text-sm md:text-base lg:text-lg max-w-3xl mx-auto px-4" data-testid="values-description">
                The core principles that guide everything we do at Sumeeran Salon and Academy
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100}>
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300" data-testid={`value-${index}`}>
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <value.icon className="text-gold text-2xl md:text-3xl" />
                  </div>
                  <h3
                    className="text-lg md:text-xl font-playfair font-bold mb-2 md:mb-3"
                    data-testid={`value-title-${index}`}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="text-gray-300 leading-relaxed text-sm md:text-base"
                    data-testid={`value-description-${index}`}
                  >
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section
        className="py-20 md:py-32 relative overflow-hidden parallax"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080)'
        }}
        data-testid="quote-section"
      >
        <div className="hero-gradient absolute inset-0"></div>
        <div className="relative z-10 text-center text-white px-4 md:px-6 max-w-4xl mx-auto">
          <ScrollReveal>
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair italic mb-6 md:mb-8 leading-relaxed" data-testid="quote-text">
              "Beauty is not just about looking good, it's about feeling confident, empowered, and absolutely radiant. That's the experience we create for every client who walks through our doors."
            </blockquote>
            <cite className="text-gold font-semibold text-base md:text-lg not-italic" data-testid="quote-author">
              - Priya Sharma, Founder & Creative Director
            </cite>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
