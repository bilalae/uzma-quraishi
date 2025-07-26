import React from 'react';
import { Card } from '@/components/ui/card';
import { GraduationCap, Briefcase, Award, BookOpen } from 'lucide-react';

const BiographySection: React.FC = () => {
  return (
    <section id="biography" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Biography
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A distinguished educator and leader with over 25 years of experience in higher education, 
              dedicated to empowering women and fostering academic excellence.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Biography Text */}
            <div className="space-y-6">
              <Card className="p-8 gradient-card border-border shadow-elegant">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Academic Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Prof. Dr. Uzma Quraishi brings over 25 years of distinguished experience in teaching, 
                  research, and administration in higher education. Currently serving as the Dean of the 
                  Faculty of Education at Lahore College for Women University (LCWU), she has been instrumental 
                  in shaping educational policies and fostering academic excellence.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Her professional interests extend beyond traditional education to include curriculum development, 
                  leadership training, and innovative pedagogical approaches that prepare students for the 
                  challenges of the 21st century.
                </p>
              </Card>

              <Card className="p-8 gradient-card border-border shadow-elegant">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Leadership Philosophy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dr. Quraishi believes in transformative leadership that empowers individuals to reach their 
                  full potential. Her approach to education emphasizes the importance of creating inclusive 
                  learning environments that nurture critical thinking, creativity, and social responsibility.
                </p>
              </Card>
            </div>

            {/* Timeline & Achievements */}
            <div className="space-y-6">
              {/* Education Timeline */}
              <Card className="p-8 gradient-card border-border shadow-elegant">
                <div className="flex items-center mb-6">
                  <GraduationCap className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold text-foreground">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-6 pb-4">
                    <h4 className="font-semibold text-foreground">Doctoral Degree</h4>
                    <p className="text-muted-foreground">Ph.D. in Education</p>
                  </div>
                  <div className="border-l-2 border-primary/50 pl-6 pb-4">
                    <h4 className="font-semibold text-foreground">Master's Degree</h4>
                    <p className="text-muted-foreground">Advanced studies in Educational Leadership</p>
                  </div>
                </div>
              </Card>

              {/* Professional Experience */}
              <Card className="p-8 gradient-card border-border shadow-elegant">
                <div className="flex items-center mb-6">
                  <Briefcase className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold text-foreground">Professional Roles</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-6 pb-4">
                    <h4 className="font-semibold text-foreground">Dean, Faculty of Education</h4>
                    <p className="text-muted-foreground">Lahore College for Women University</p>
                  </div>
                  <div className="border-l-2 border-primary/50 pl-6 pb-4">
                    <h4 className="font-semibold text-foreground">Academic Leadership</h4>
                    <p className="text-muted-foreground">25+ years in higher education</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center gradient-card border-border hover:shadow-glow transition-smooth">
              <Award className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Academic Excellence</h4>
              <p className="text-sm text-muted-foreground">Recognized for outstanding contributions to education</p>
            </Card>
            
            <Card className="p-6 text-center gradient-card border-border hover:shadow-glow transition-smooth">
              <BookOpen className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Research & Development</h4>
              <p className="text-sm text-muted-foreground">Leading innovative educational research</p>
            </Card>
            
            <Card className="p-6 text-center gradient-card border-border hover:shadow-glow transition-smooth">
              <Briefcase className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Leadership Training</h4>
              <p className="text-sm text-muted-foreground">Developing future educational leaders</p>
            </Card>
            
            <Card className="p-6 text-center gradient-card border-border hover:shadow-glow transition-smooth">
              <GraduationCap className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Curriculum Innovation</h4>
              <p className="text-sm text-muted-foreground">Modernizing educational frameworks</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;