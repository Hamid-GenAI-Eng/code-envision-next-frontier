import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, Award, Users, Target } from "lucide-react";
import hamidImage from "@/assets/hamid-saifullah.jpg";
import ahmedImage from "@/assets/ahmed-sarfaraz.jpg";

const teamMembers = [
  {
    name: "Hamid Saifullah",
    title: "Founder & CTO",
    image: hamidImage,
    bio: "Visionary technologist with expertise in AI, machine learning, and scalable system architecture. Leads our technical innovation and product development.",
    expertise: ["AI/ML", "System Architecture", "Product Strategy", "Innovation"]
  },
  {
    name: "Ahmed Sarfaraz Tatla", 
    title: "Co-Founder & CEO",
    image: ahmedImage,
    bio: "Strategic business leader driving growth and client relationships. Expert in business development, market expansion, and organizational leadership.",
    expertise: ["Business Strategy", "Client Relations", "Market Expansion", "Leadership"]
  }
];

const companyStats = [
  { icon: Users, value: "15+", label: "Expert Team Members" },
  { icon: Award, value: "50+", label: "Successful Projects" },
  { icon: Target, value: "99%", label: "Client Satisfaction" }
];

export const TeamSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="scroll-fade-in text-4xl md:text-6xl font-bold mb-6">
            Meet Our <span className="gradient-text">Leadership</span>
          </h2>
          <p className="scroll-fade-in text-xl text-foreground/80 max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Driven by innovation and guided by expertise, our founding team brings decades of combined 
            experience in AI, software development, and business strategy.
          </p>
        </div>

        {/* Company Stats */}
        <div className="scroll-fade-in grid grid-cols-1 md:grid-cols-3 gap-8 mb-20" style={{ animationDelay: '0.3s' }}>
          {companyStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={stat.label} className="glass-card border-border/20 glow-hover text-center">
                <CardContent className="p-8">
                  <div className="p-4 rounded-full bg-primary/10 border border-primary/20 inline-block mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold gradient-text mb-2">{stat.value}</h3>
                  <p className="text-foreground/70">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name}
              className="scroll-fade-in glass-card border-border/20 glow-hover overflow-hidden"
              style={{ animationDelay: `${0.4 + (index * 0.2)}s` }}
            >
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                  {/* Image */}
                  <div className="md:col-span-2 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:col-span-3 p-8">
                    <Badge className="mb-4 text-sm px-4 py-2 bg-primary/10 text-primary border border-primary/20">
                      Leadership
                    </Badge>
                    
                    <h3 className="text-2xl font-bold mb-2 gradient-text">
                      {member.name}
                    </h3>
                    
                    <p className="text-accent font-semibold mb-4 text-lg">
                      {member.title}
                    </p>
                    
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {member.bio}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3 text-foreground/90">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button className="p-2 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors">
                        <Linkedin className="h-5 w-5 text-primary" />
                      </button>
                      <button className="p-2 rounded-lg bg-accent/10 border border-accent/20 hover:bg-accent/20 transition-colors">
                        <Mail className="h-5 w-5 text-accent" />
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="scroll-fade-in text-center mt-16 glass-card p-8 rounded-2xl border border-border/20" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Work with Industry Leaders?
          </h3>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            Connect with our founding team to discuss how we can transform your business 
            with cutting-edge technology solutions.
          </p>
        </div>
      </div>
    </section>
  );
};