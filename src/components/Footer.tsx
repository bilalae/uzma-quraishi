import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Globe, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                Prof. Dr. Uzma Quraishi
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Dedicated to empowering women through academic excellence and fostering innovation 
                in higher education at Lahore College for Women University.
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Heart className="h-4 w-4 text-primary mr-2" />
                Empowering Tomorrow's Leaders
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#biography" className="hover:text-primary transition-smooth">
                    Biography
                  </a>
                </li>
                <li>
                  <a href="#initiatives" className="hover:text-primary transition-smooth">
                    Initiatives
                  </a>
                </li>
                <li>
                  <a href="#mission" className="hover:text-primary transition-smooth">
                    Mission & Vision
                  </a>
                </li>
                <li>
                  <a href="#speeches" className="hover:text-primary transition-smooth">
                    Speeches
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary transition-smooth">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* External Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">External Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a 
                    href="https://www.lcwu.edu.pk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-smooth flex items-center"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    LCWU Official Website
                  </a>
                </li>
                <li>
                  <a 
                    href="https://hessa.utah.edu/lcwu/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-smooth"
                  >
                    HESSA Partnership
                  </a>
                </li>
                <li>
                  <a 
                    href="https://pk.linkedin.com/in/prof-dr-uzma-quraishi-7ba49245" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-smooth"
                  >
                    LinkedIn Profile
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Contact Info</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <div>Lahore College for Women University</div>
                    <div>Jail Road, Lahore, Pakistan</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-primary mr-2" />
                  +92-42-99203801-9
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-primary mr-2" />
                  vc@lcwu.edu.pk
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground">
                © 2024 Prof. Dr. Uzma Quraishi - Vice Chancellor, LCWU. All rights reserved.
              </div>
              <div className="text-sm text-muted-foreground">
                Empowering Women Through Education Since 1922
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;