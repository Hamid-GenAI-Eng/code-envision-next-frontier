import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about-network.jpg";

export const AboutSection = () => {
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
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="scroll-fade-in">
              <Badge className="mb-6 text-sm px-4 py-2 bg-primary/10 text-primary border border-primary/20">
                About Code Envision
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Pioneering the Future of 
                <span className="gradient-text"> Digital Innovation</span>
              </h2>
            </div>

            <div className="scroll-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                At Code Envision, we don't just build software—we architect the future. 
                Our team of visionary engineers, AI specialists, and creative technologists 
                work at the intersection of cutting-edge technology and human-centered design.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Founded on the belief that technology should amplify human potential, 
                we craft solutions that are not only technically superior but emotionally 
                resonant and globally competitive.
              </p>
            </div>

            <div className="scroll-fade-in space-y-6 mb-8" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 mt-1">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-foreground/70">
                    To democratize advanced AI and technology solutions, making them accessible 
                    to businesses of all sizes while maintaining the highest standards of innovation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 mt-1">
                  <Eye className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                  <p className="text-foreground/70">
                    To be the global leader in AI-powered solutions, shaping a future where 
                    technology seamlessly integrates with human creativity and intuition.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-lg bg-success/10 border border-success/20 mt-1">
                  <Heart className="h-5 w-5 text-success" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                  <p className="text-foreground/70">
                    Innovation, integrity, and impact drive everything we do. We believe in 
                    transparent collaboration, continuous learning, and creating lasting value.
                  </p>
                </div>
              </div>
            </div>

            <div className="scroll-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button className="btn-hero text-lg px-8 py-6 group">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="scroll-fade-in relative" style={{ animationDelay: '0.3s' }}>
              <div className="glass-card p-8 rounded-2xl glow-hover">
                <img
                  src={aboutImage}
                  alt="Network Visualization"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 glass-card p-4 rounded-xl border border-primary/20">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">5+</div>
                  <div className="text-xs text-foreground/60">Years Experience</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl border border-accent/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">15+</div>
                  <div className="text-xs text-foreground/60">Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};