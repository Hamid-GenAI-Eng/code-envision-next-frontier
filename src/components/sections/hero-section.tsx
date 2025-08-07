import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import heroImage from "@/assets/hero-ai-brain.jpg";

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="AI Brain Visualization"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <div className="float-animation absolute top-1/4 left-1/4">
          <Sparkles className="h-6 w-6 text-primary/40" />
        </div>
        <div className="float-animation absolute top-1/3 right-1/3" style={{ animationDelay: '2s' }}>
          <Zap className="h-8 w-8 text-accent/30" />
        </div>
        <div className="float-animation absolute bottom-1/3 left-1/6" style={{ animationDelay: '4s' }}>
          <Sparkles className="h-4 w-4 text-primary/50" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="scroll-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Crafting Tomorrow's
            <br />
            <span className="gradient-text">Intelligence Today</span>
          </h1>
        </div>

        <div className="scroll-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            We transform visionary ideas into cutting-edge AI solutions, premium web applications, 
            and blockchain-integrated systems that define the future of technology.
          </p>
        </div>

        <div className="scroll-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.4s' }}>
          <Button className="btn-hero text-lg px-8 py-6 group">
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button className="btn-ghost-glow text-lg px-8 py-6">
            View Our Work
          </Button>
        </div>

        <div className="scroll-fade-in mt-16" style={{ animationDelay: '0.6s' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-6 rounded-xl glow-hover">
              <h3 className="text-3xl font-bold gradient-text mb-2">50+</h3>
              <p className="text-foreground/70">AI Solutions Delivered</p>
            </div>
            <div className="glass-card p-6 rounded-xl glow-hover">
              <h3 className="text-3xl font-bold gradient-text mb-2">99%</h3>
              <p className="text-foreground/70">Client Satisfaction</p>
            </div>
            <div className="glass-card p-6 rounded-xl glow-hover">
              <h3 className="text-3xl font-bold gradient-text mb-2">24/7</h3>
              <p className="text-foreground/70">Global Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};