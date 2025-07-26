import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import BiographySection from '@/components/sections/BiographySection';
import InitiativesSection from '@/components/sections/InitiativesSection';
import MissionSection from '@/components/sections/MissionSection';
import SpeechesSection from '@/components/sections/SpeechesSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Handle smooth scrolling to sections
  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80; // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'biography', 'initiatives', 'mission', 'speeches', 'contact'];
      const current = sections.find(section => {
        if (section === 'home') {
          return window.scrollY < 100;
        }
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />
      
      <main>
        <HeroSection onSectionChange={handleSectionChange} />
        <BiographySection />
        <InitiativesSection />
        <MissionSection />
        <SpeechesSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
