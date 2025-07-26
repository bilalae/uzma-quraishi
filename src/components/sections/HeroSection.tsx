import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Award, Users, BookOpen } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

interface HeroSectionProps {
  onSectionChange: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSectionChange }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-hero">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.3) contrast(1.2)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Prof. Dr. <span className="text-primary">Uzma Quraishi</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Vice Chancellor of Lahore College for Women University
          </p>
          
          <p className="text-lg mb-12 text-muted-foreground max-w-2xl mx-auto">
            Empowering women through academic excellence, fostering innovation, and building leaders for tomorrow's challenges
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-card/20 rounded-lg backdrop-blur-sm border border-border animate-float">
              <Award className="h-8 w-8 text-primary mb-3" />
              <div className="text-2xl font-bold text-foreground">25+</div>
              <div className="text-sm text-muted-foreground">Years of Experience</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-card/20 rounded-lg backdrop-blur-sm border border-border animate-float" style={{ animationDelay: '1s' }}>
              <Users className="h-8 w-8 text-primary mb-3" />
              <div className="text-2xl font-bold text-foreground">Leadership</div>
              <div className="text-sm text-muted-foreground">& Administration</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-card/20 rounded-lg backdrop-blur-sm border border-border animate-float" style={{ animationDelay: '2s' }}>
              <BookOpen className="h-8 w-8 text-primary mb-3" />
              <div className="text-2xl font-bold text-foreground">Education</div>
              <div className="text-sm text-muted-foreground">& Research Focus</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              variant="glow" 
              size="xl"
              onClick={() => onSectionChange('biography')}
              className="animate-glow"
            >
              Learn About Her Journey
            </Button>
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => onSectionChange('initiatives')}
            >
              Explore Initiatives
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown className="h-8 w-8 text-primary mx-auto" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default HeroSection;