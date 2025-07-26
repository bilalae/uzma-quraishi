import React from 'react';
import { Card } from '@/components/ui/card';
import { Eye, Target, Heart, Star, Users, Globe } from 'lucide-react';

const MissionSection: React.FC = () => {
  const visionPoints = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      text: "Women empowerment through academic excellence"
    },
    {
      icon: <Star className="h-6 w-6 text-primary" />,
      text: "Strengthening good governance and institutional culture"
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      text: "Inclusive culture of research and innovation"
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      text: "Socio-economic development of society"
    }
  ];

  const missionAreas = [
    {
      title: "Academic Collaboration",
      description: "Extensive collaborations between academia and diverse sectors for investment in human & social capital, facilitation of technical adeptness and promotion of knowledge-based economy."
    },
    {
      title: "Sustainable Development",
      description: "Staunch commitment towards emerging challenges of climate change, sustainable development and prosperity while upholding integrated strategic planning."
    },
    {
      title: "Research Excellence",
      description: "Promotion of research along with scholarly activities to generate indigenous and global knowledge that addresses contemporary challenges."
    },
    {
      title: "Inclusive Education",
      description: "Creating inclusive & equitable environment to engage students from diverse communities and ethnicities to shape them into visionary leaders and distinct professionals."
    }
  ];

  return (
    <section id="mission" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Mission & Vision 2040
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              LCWU's strategic vision for transforming higher education and empowering women 
              to lead in the global knowledge economy.
            </p>
          </div>

          {/* Vision Section */}
          <Card className="p-10 mb-12 gradient-card border-border shadow-elegant">
            <div className="flex items-center justify-center mb-8">
              <Eye className="h-12 w-12 text-primary mr-4" />
              <h3 className="text-3xl font-bold text-foreground">Vision 2040</h3>
            </div>
            
            <div className="text-center mb-10">
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                "Lahore College for Women University envisages fostering women empowerment through 
                academic excellence, strengthening of good governance and inclusive culture of research 
                and innovation for socio-economic development of the society."
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visionPoints.map((point, index) => (
                <div key={index} className="flex items-center p-4 bg-card/50 rounded-lg border border-border">
                  {point.icon}
                  <span className="ml-3 text-foreground">{point.text}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Mission Section */}
          <Card className="p-10 gradient-card border-border shadow-elegant">
            <div className="flex items-center justify-center mb-8">
              <Target className="h-12 w-12 text-primary mr-4" />
              <h3 className="text-3xl font-bold text-foreground">Mission 2040</h3>
            </div>
            
            <div className="text-center mb-10">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The University is thriving to achieve this pursuit through comprehensive initiatives 
                that address modern educational challenges and opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {missionAreas.map((area, index) => (
                <div key={index} className="p-6 bg-card/30 rounded-lg border border-border hover:shadow-glow transition-smooth">
                  <h4 className="text-xl font-semibold mb-4 text-foreground">{area.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Leadership Commitment */}
          <div className="mt-16 text-center">
            <Card className="p-8 gradient-card border-border inline-block">
              <h4 className="text-2xl font-semibold mb-4 text-foreground">Leadership Commitment</h4>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Under Prof. Dr. Uzma Quraishi's visionary leadership, LCWU is committed to 
                realizing these ambitious goals and creating a transformative educational experience 
                that prepares women to excel in the global arena.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;