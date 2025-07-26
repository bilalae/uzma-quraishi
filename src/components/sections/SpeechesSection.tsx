import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, Calendar, PlayCircle, Download } from 'lucide-react';

const SpeechesSection: React.FC = () => {
  const speeches = [
    {
    title: "Youm‑e‑Tashakur Ceremony at LCWU",
    date: "May 2025",
    venue: "Lahore College for Women University",
    excerpt: "The students, faculty, and the entire nation are grateful to the Government of Pakistan and our brave Armed Forces for their historic victory against India.",
    type: "Commemoration",
    link: "https://www.youtube.com/watch?v=qv7urLxSpLo",
    duration: "58 minutes"
    },
    {
      title: "Launching of Punjab Lifesavers Initiative from Lahore College for Women University",
      date: "September 2024",
      venue: "Auditorium, Lahore College for Women University",
      excerpt: "We are honored that LCWU has been selected for launching of this historic initiative.",
      type: "Launch Ceremony",
      link: "https://www.youtube.com/watch?v=LaZoEzUhZgk&si=ZuU7P6Y6VnhRP9j5",
      duration: "1 hour and 9 minutes"
    },
    {
      title: "20th Convocation Ceremony at LCWU",
      date: "May 2025",
      venue: "LCWU Auditorium",
      excerpt: "I express profound gratitude to the Chancellor, Pro‑Chancellor, Government of Punjab, alumni, faculty and staff for their invaluable support and for empowering our students through transformative education.",
      type: "Convocation Ceremony",
      link: "https://www.youtube.com/watch?v=p7RHLf5Rl2c",
      duration: "1 hour and 4 minutes"
    }
  ];

  const messages = [
    {
      title: "Welcome Message to New Students",
      content: "Dear students, you are not just joining an institution; you are becoming part of a legacy of excellence, empowerment, and transformation. At LCWU, we believe in your potential to change the world, one idea at a time."
    },
    {
      title: "Message on Women's Day",
      content: "Today, we celebrate not just the achievements of women, but the promise of what women can accomplish when given equal opportunities. Education is the key that unlocks this potential."
    },
    {
      title: "Vision for Academic Excellence",
      content: "Excellence is not a destination but a journey of continuous improvement. We strive to create an environment where every student can discover their passion, develop their talents, and contribute meaningfully to society."
    }
  ];
  
  return (
    <section id="speeches" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Speeches & Messages
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Inspirational words and thought leadership from Prof. Dr. Uzma Quraishi on education, 
              women's empowerment, and the future of higher learning.
            </p>
          </div>

          {/* Featured Speeches */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Recent Speeches & Presentations</h3>
            <div className="space-y-8">
              {speeches.map((speech, index) => (
                <Card key={index} className="p-8 gradient-card border-border hover:shadow-glow transition-smooth">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                          {speech.type}
                        </span>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          {speech.date}
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-semibold mb-3 text-foreground">
                        {speech.title}
                      </h4>
                      
                      <p className="text-muted-foreground mb-4">
                        <strong>Venue:</strong> {speech.venue}
                      </p>
                      
                      <div className="relative">
                        <Quote className="h-6 w-6 text-primary absolute -top-2 -left-2" />
                        <p className="text-foreground italic leading-relaxed pl-6 mb-4">
                          "{speech.excerpt}"
                        </p>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4">
                        Duration: {speech.duration}
                      </p>
                    </div>
                    
                    <div className="flex flex-col gap-2 lg:ml-6">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-2"
                        onClick={() => {
                          console.log(speech.link)
                          window.open(speech.link, '_blank')
                          
                        }}
                      >
                        <PlayCircle className="h-4 w-4" />
                        Watch Video
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Inspirational Messages */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Inspirational Messages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {messages.map((message, index) => (
                <Card key={index} className="p-6 gradient-card border-border hover:shadow-glow transition-smooth group">
                  <div className="relative">
                    <Quote className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-smooth" />
                    <h4 className="text-lg font-semibold mb-4 text-foreground">
                      {message.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{message.content}"
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="p-8 gradient-card border-border">
              <h4 className="text-2xl font-semibold mb-4 text-foreground">
                Request a Speaking Engagement
              </h4>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Prof. Dr. Uzma Quraishi is available for speaking engagements on topics related to 
                education, women's empowerment, and leadership development.
              </p>
                          <Button
              variant="glow"
              size="lg"
              onClick={() => window.location.href = "mailto:vc.office@lcwu.edu.pk?subject=Speaking Engagement Request"}
            >
              Contact for Speaking Opportunities
            </Button> 
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeechesSection;