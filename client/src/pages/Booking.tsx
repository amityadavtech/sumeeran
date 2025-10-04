import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageCircle, CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { mainServices } from '../data/services';

type BookingStep = 'service' | 'datetime' | 'details' | 'confirmation';

interface BookingData {
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Booking = () => {
  const [currentStep, setCurrentStep] = useState<BookingStep>('service');
  const [bookingData, setBookingData] = useState<BookingData>({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    { id: 'service', title: 'Select Service', icon: User },
    { id: 'datetime', title: 'Date & Time', icon: Calendar },
    { id: 'details', title: 'Your Details', icon: MessageCircle },
    { id: 'confirmation', title: 'Confirmation', icon: CheckCircle2 },
  ];

  const availableSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
  ];

  const handleNext = () => {
    const stepOrder: BookingStep[] = ['service', 'datetime', 'details', 'confirmation'];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    const stepOrder: BookingStep[] = ['service', 'datetime', 'details', 'confirmation'];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1]);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setCurrentStep('confirmation');
  };

  const updateBookingData = (field: keyof BookingData, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 'service':
        return bookingData.service !== '';
      case 'datetime':
        return bookingData.date !== '' && bookingData.time !== '';
      case 'details':
        return bookingData.name !== '' && bookingData.email !== '' && bookingData.phone !== '';
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen pt-20" data-testid="booking-page">
      {/* Hero Section */}
      <section 
        className="relative py-20 flex items-center justify-center overflow-hidden parallax"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080)'
        }}
        data-testid="booking-hero"
      >
        <div className="hero-gradient absolute inset-0"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4" data-testid="booking-hero-title">
              Book Your Appointment
            </h1>
            <p className="text-lg text-gray-100" data-testid="booking-hero-description">
              Schedule your luxury beauty experience in just a few simple steps
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16 bg-bg-light" data-testid="booking-process">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="mb-12" data-testid="booking-progress">
            <div className="flex justify-between items-center">
              {steps.map((step, index) => {
                const isActive = step.id === currentStep;
                const isCompleted = steps.findIndex(s => s.id === currentStep) > index;
                const StepIcon = step.icon;
                
                return (
                  <div 
                    key={step.id}
                    className={`flex flex-col items-center flex-1 ${index < steps.length - 1 ? 'relative' : ''}`}
                    data-testid={`booking-step-${step.id}`}
                  >
                    <div 
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                        isCompleted 
                          ? 'bg-primary text-white' 
                          : isActive 
                          ? 'bg-primary text-white' 
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      <StepIcon className="w-6 h-6" />
                    </div>
                    <span 
                      className={`text-sm font-medium ${
                        isActive || isCompleted ? 'text-primary' : 'text-gray-500'
                      }`}
                    >
                      {step.title}
                    </span>
                    {index < steps.length - 1 && (
                      <div 
                        className={`absolute top-6 left-1/2 w-full h-0.5 -translate-y-1/2 ${
                          isCompleted ? 'bg-primary' : 'bg-gray-200'
                        }`}
                        style={{ left: '50%', width: 'calc(100% - 3rem)' }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <Card className="shadow-xl" data-testid="booking-form-card">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair text-center">
                {steps.find(s => s.id === currentStep)?.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Service Selection */}
              {currentStep === 'service' && (
                <div className="space-y-6" data-testid="service-selection">
                  <p className="text-gray-600 text-center mb-8">
                    Choose the service you'd like to book
                  </p>
                  <RadioGroup 
                    value={bookingData.service} 
                    onValueChange={(value) => updateBookingData('service', value)}
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      {mainServices.map((service) => (
                        <div key={service.id} className="relative">
                          <RadioGroupItem 
                            value={service.id} 
                            id={service.id}
                            className="peer sr-only"
                            data-testid={`service-option-${service.id}`}
                          />
                          <Label 
                            htmlFor={service.id}
                            className="flex items-start space-x-4 p-6 border-2 border-gray-200 rounded-xl cursor-pointer peer-checked:border-primary peer-checked:bg-primary/5 hover:border-primary/50 transition-all duration-300"
                          >
                            <div className={`w-12 h-12 ${service.iconColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                              <service.icon className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-playfair font-bold text-lg text-text-dark mb-2">
                                {service.title}
                              </h3>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                              </p>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              )}

              {/* Date & Time Selection */}
              {currentStep === 'datetime' && (
                <div className="space-y-8" data-testid="datetime-selection">
                  <div>
                    <Label className="text-lg font-semibold text-text-dark mb-4 block">
                      <Calendar className="inline w-5 h-5 mr-2" />
                      Select Date
                    </Label>
                    <Input 
                      type="date"
                      value={bookingData.date}
                      onChange={(e) => updateBookingData('date', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="text-lg"
                      data-testid="date-input"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-lg font-semibold text-text-dark mb-4 block">
                      <Clock className="inline w-5 h-5 mr-2" />
                      Select Time
                    </Label>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                      {availableSlots.map((slot) => (
                        <Button
                          key={slot}
                          type="button"
                          variant={bookingData.time === slot ? "default" : "outline"}
                          className={`py-3 ${
                            bookingData.time === slot 
                              ? 'bg-primary text-white' 
                              : 'hover:bg-primary hover:text-white'
                          }`}
                          onClick={() => updateBookingData('time', slot)}
                          data-testid={`time-slot-${slot.replace(/[^a-zA-Z0-9]/g, '')}`}
                        >
                          {slot}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Personal Details */}
              {currentStep === 'details' && (
                <div className="space-y-6" data-testid="details-form">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="flex items-center text-text-dark mb-2">
                        <User className="w-4 h-4 mr-2" />
                        Full Name *
                      </Label>
                      <Input 
                        id="name"
                        value={bookingData.name}
                        onChange={(e) => updateBookingData('name', e.target.value)}
                        placeholder="Enter your full name"
                        data-testid="name-input"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="flex items-center text-text-dark mb-2">
                        <Phone className="w-4 h-4 mr-2" />
                        Phone Number *
                      </Label>
                      <Input 
                        id="phone"
                        value={bookingData.phone}
                        onChange={(e) => updateBookingData('phone', e.target.value)}
                        placeholder="Enter your phone number"
                        data-testid="phone-input"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="flex items-center text-text-dark mb-2">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Address *
                    </Label>
                    <Input 
                      id="email"
                      type="email"
                      value={bookingData.email}
                      onChange={(e) => updateBookingData('email', e.target.value)}
                      placeholder="Enter your email address"
                      data-testid="email-input"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="flex items-center text-text-dark mb-2">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Special Requirements (Optional)
                    </Label>
                    <Textarea 
                      id="message"
                      value={bookingData.message}
                      onChange={(e) => updateBookingData('message', e.target.value)}
                      placeholder="Any special requirements or preferences..."
                      rows={4}
                      data-testid="message-input"
                    />
                  </div>
                </div>
              )}

              {/* Confirmation */}
              {currentStep === 'confirmation' && (
                <div className="text-center space-y-8" data-testid="booking-confirmation">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-text-dark mb-4">
                      Booking Confirmed!
                    </h3>
                    <p className="text-gray-600 mb-8">
                      Thank you for choosing Luxe Beauty. Your appointment has been successfully booked.
                    </p>
                  </div>

                  <Card className="bg-bg-light text-left">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold text-text-dark mb-4">Booking Details:</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Service:</span>
                          <span className="font-medium">
                            {mainServices.find(s => s.id === bookingData.service)?.title}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Date:</span>
                          <span className="font-medium">
                            {new Date(bookingData.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Time:</span>
                          <span className="font-medium">{bookingData.time}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Name:</span>
                          <span className="font-medium">{bookingData.name}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 text-sm">
                      <strong>What's next?</strong> We'll send you a confirmation email shortly with all the details. 
                      If you need to reschedule or have any questions, please call us at +91 123 456 7890.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              {currentStep !== 'confirmation' && (
                <div className="flex justify-between pt-8 border-t" data-testid="booking-navigation">
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 'service'}
                    className="flex items-center"
                    data-testid="booking-previous"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>

                  {currentStep === 'details' ? (
                    <Button 
                      type="button"
                      onClick={handleSubmit}
                      disabled={!isStepValid() || isSubmitting}
                      className="bg-primary text-white hover:bg-secondary flex items-center"
                      data-testid="booking-submit"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2"></div>
                          Booking...
                        </>
                      ) : (
                        <>
                          Confirm Booking
                          <CheckCircle2 className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  ) : (
                    <Button 
                      type="button"
                      onClick={handleNext}
                      disabled={!isStepValid()}
                      className="bg-primary text-white hover:bg-secondary flex items-center"
                      data-testid="booking-next"
                    >
                      Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white" data-testid="booking-contact-info">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-playfair font-bold mb-6 text-text-dark">
              Need Help with Your Booking?
            </h2>
            <p className="text-gray-600 mb-8">
              Our friendly team is here to assist you with any questions or special requests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+911234567890"
                className="flex items-center bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-colors"
                data-testid="booking-call-button"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us: +91 123 456 7890
              </a>
              <a 
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
                data-testid="booking-whatsapp-button"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Booking;
