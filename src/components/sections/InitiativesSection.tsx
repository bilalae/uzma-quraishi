import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, Users, Globe, Leaf, GraduationCap, Building } from 'lucide-react';

const InitiativesSection: React.FC = () => {
  const initiatives = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Women's Economic Inclusion",
      description: "Leading initiatives to promote women's economic participation through policy development and grassroots programs.",
      achievements: ["Policy Forum Organization", "Entrepreneurship Support", "Leadership Development"]
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Academic Excellence Programs",
      description: "Implementing innovative academic programs that prepare students for global challenges and opportunities.",
      achievements: ["Curriculum Modernization", "Research Enhancement", "Quality Assurance"]
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "International Collaborations",
      description: "Building partnerships with international institutions to enhance educational opportunities and research capabilities.",
      achievements: ["USAID HESSA Partnership", "Global Education Networks", "Exchange Programs"]
    },
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "Sustainable Development",
      description: "Promoting environmental awareness and sustainable practices within the university and community.",
      achievements: ["Climate Change Initiatives", "Green Campus Programs", "SDG Implementation"]
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovation & Research",
      description: "Fostering a culture of innovation and research excellence to address societal challenges.",
      achievements: ["Research Centers", "Innovation Labs", "Technology Integration"]
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "Infrastructure Development",
      description: "Modernizing university facilities and creating state-of-the-art learning environments.",
      achievements: ["Campus Modernization", "Digital Infrastructure", "Library Enhancement"]
    }
  ];

  return (
    <section id="initiatives" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Key Initiatives
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transformative projects and programs that are shaping the future of education 
              and empowering women at LCWU and beyond.
            </p>
          </div>

          {/* Initiatives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="p-8 gradient-card border-border hover:shadow-glow transition-smooth group">
                <div className="mb-6 group-hover:scale-110 transition-smooth">
                  {initiative.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {initiative.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {initiative.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground mb-3">Key Achievements:</h4>
                  {initiative.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {achievement}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Featured Initiative */}
          <Card className="p-10 gradient-card border-border shadow-elegant">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                USAID Higher Education System Strengthening Activity (HESSA)
              </h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                LCWU is a proud partner in the USAID HESSA initiative, working to strengthen 
                higher education systems in Pakistan through capacity building, research enhancement, 
                and institutional development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Faculty Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Research Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Digital Integration</div>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                variant="glow" 
                size="lg"
                onClick={() => window.open('https://hessa.utah.edu/lcwu/', '_blank')}
              >
                Learn More About HESSA Partnership
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;