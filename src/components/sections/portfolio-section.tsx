import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const portfolioItems = [
  {
    title: "AI-Powered E-Commerce Platform",
    description: "Revolutionary shopping experience with personalized AI recommendations, real-time inventory optimization, and predictive analytics.",
    technologies: ["React", "Node.js", "TensorFlow", "AWS"],
    category: "AI & Web Development",
    status: "Live",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    metrics: {
      performance: "+150% Conversion Rate",
      impact: "$2M+ Revenue Generated"
    }
  },
  {
    title: "Multimodal RAG Healthcare Assistant",
    description: "Advanced AI system that processes medical images, documents, and patient data to provide intelligent diagnostic support.",
    technologies: ["Python", "LangChain", "OpenAI", "Vector DB"],
    category: "AI & Healthcare",
    status: "In Development",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    metrics: {
      performance: "95% Accuracy Rate",
      impact: "500+ Hours Saved Daily"
    }
  },
  {
    title: "DeFi Trading Protocol",
    description: "Secure decentralized finance platform with automated trading strategies, yield farming, and cross-chain compatibility.",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
    category: "Blockchain & DeFi",
    status: "Live",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    metrics: {
      performance: "$50M+ TVL",
      impact: "10K+ Active Users"
    }
  }
];

export const PortfolioSection = () => {
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
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="scroll-fade-in text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="scroll-fade-in text-xl text-foreground/80 max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Explore our portfolio of groundbreaking solutions that have transformed businesses 
            and set new industry standards for innovation and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {portfolioItems.map((project, index) => (
            <Card 
              key={project.title}
              className="scroll-fade-in glass-card border-border/20 glow-hover group overflow-hidden"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    className={`${
                      project.status === 'Live' 
                        ? 'bg-success/90 text-success-foreground' 
                        : 'bg-accent/90 text-accent-foreground'
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <Badge className="text-xs px-3 py-1 bg-primary/10 text-primary border border-primary/20">
                    {project.category}
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-foreground/70 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-muted/50 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/60">Performance:</span>
                    <span className="font-semibold text-primary">{project.metrics.performance}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/60">Impact:</span>
                    <span className="font-semibold text-accent">{project.metrics.impact}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="btn-ghost-glow flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live
                  </Button>
                  <Button size="sm" variant="outline" className="border-border/40">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button className="scroll-fade-in btn-hero text-lg px-8 py-6" style={{ animationDelay: '0.6s' }}>
            View Full Portfolio
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};