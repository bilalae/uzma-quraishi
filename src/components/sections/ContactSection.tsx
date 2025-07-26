import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your message. We will get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Address",
      details: ["Lahore College for Women University", "Jail Road, Lahore", "Punjab, Pakistan"]
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      details: ["(042) 99203801", "Office Hours: 9:00 AM - 5:00 PM"]
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: ["vc.office@lcwu.edu.pk", "info@lcwu.edu.pk"]
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Contact
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get in touch with Prof. Dr. Uzma Quraishi and the LCWU administration. 
              We welcome inquiries about education, collaboration opportunities, and speaking engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 gradient-card border-border shadow-elegant">
              <div className="flex items-center mb-6">
                <MessageSquare className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold text-foreground">Send a Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="pl-10 bg-card border-border"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10 bg-card border-border"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Message subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-card border-border"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="min-h-[120px] bg-card border-border"
                    required
                  />
                </div>
                
                <Button type="submit" variant="glow" size="lg" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-8 gradient-card border-border shadow-elegant">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-4 mt-1">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick Links */}
              <Card className="p-6 gradient-card border-border">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
                <div className="space-y-3">
                  <a 
                    href="https://www.lcwu.edu.pk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-primary hover:text-primary/80 transition-smooth"
                  >
                    LCWU Official Website →
                  </a>
                  <a 
                    href="https://pk.linkedin.com/in/prof-dr-uzma-quraishi-7ba49245" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-primary hover:text-primary/80 transition-smooth"
                  >
                    LinkedIn Profile →
                  </a>
                  <a 
                    href="https://hessa.utah.edu/lcwu/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-primary hover:text-primary/80 transition-smooth"
                  >
                    HESSA Partnership →
                  </a>
                </div>
              </Card>

              {/* Office Location */}
              <Card className="p-6 gradient-card border-border">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Office Location</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Vice Chancellor's Office is located at the main campus of Lahore College for Women University, 
                  easily accessible from Jail Road, Lahore.
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open('https://maps.google.com/?q=Lahore+College+for+Women+University+Jail+Road+Lahore+Pakistan', '_blank')}
                >
                  Get Directions
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;