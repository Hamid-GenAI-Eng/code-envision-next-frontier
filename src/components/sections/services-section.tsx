import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Smartphone, 
  Brain, 
  MessageSquare, 
  Shield,
  ArrowUpRight
} from "lucide-react";
import servicesImage from "@/assets/services-workspace.jpg";

const services = [
  {
    icon: Globe,
    title: "Premium Web Applications",
    description: "Cutting-edge web solutions built with modern frameworks, delivering exceptional user experiences and scalable architecture.",
    features: ["React/Next.js", "TypeScript", "Cloud Architecture", "Performance Optimization"]
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Mobile Apps",
    description: "Native-quality mobile applications that work seamlessly across iOS and Android platforms with shared codebase efficiency.",
    features: ["React Native", "Flutter", "Native Performance", "Cross-Platform"]
  },
  {
    icon: Brain,
    title: "Machine Learning & Deep Learning",
    description: "Advanced AI models and neural networks that transform data into intelligent insights and automated decision-making systems.",
    features: ["TensorFlow", "PyTorch", "Computer Vision", "NLP"]
  },
  {
    icon: MessageSquare,
    title: "Multimodal RAG Systems",
    description: "Revolutionary AI agents that understand and process multiple data types, enabling intelligent information retrieval and generation.",
    features: ["Vector Databases", "LLM Integration", "Multimodal AI", "Intelligent Search"]
  },
  {
    icon: Shield,
    title: "Blockchain-Integrated Systems",
    description: "Secure, decentralized solutions leveraging blockchain technology for transparent, immutable, and trustless applications.",
    features: ["Smart Contracts", "DeFi Solutions", "Web3 Integration", "Cryptocurrency"]
  }
];

export const ServicesSection = () => {
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
    <section id="services" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={servicesImage}
          alt="Services Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="scroll-fade-in text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Expertise</span>
          </h2>
          <p className="scroll-fade-in text-xl text-foreground/80 max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
            We specialize in cutting-edge technologies that shape the future, 
            delivering solutions that combine innovation with practical business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className="scroll-fade-in glass-card border-border/20 glow-hover group cursor-pointer"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-foreground/40 group-hover:text-primary transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button className="scroll-fade-in btn-hero text-lg px-8 py-6" style={{ animationDelay: '0.8s' }}>
            Explore All Services
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};