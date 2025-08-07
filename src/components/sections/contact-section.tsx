import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="scroll-fade-in text-4xl md:text-6xl font-bold mb-6">
            Ready to <span className="gradient-text">Transform</span> Your Vision?
          </h2>
          <p className="scroll-fade-in text-xl text-foreground/80 max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Let's discuss how we can bring your ideas to life with cutting-edge technology. 
            Our team is ready to craft a solution that exceeds your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="scroll-fade-in space-y-6" style={{ animationDelay: '0.3s' }}>
              <Card className="glass-card border-border/20 glow-hover">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <p className="text-foreground/70">hello@codeenvision.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-border/20 glow-hover">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <p className="text-foreground/70">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-border/20 glow-hover">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                      <MapPin className="h-6 w-6 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Visit Us</h3>
                      <p className="text-foreground/70">San Francisco, CA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button className="btn-ghost-glow w-full text-lg py-6">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Chat
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="scroll-fade-in glass-card border-border/20" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="glass-card border-border/40 focus:border-primary"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="glass-card border-border/40 focus:border-primary"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="glass-card border-border/40 focus:border-primary"
                      placeholder="Your Company Inc."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="glass-card border-border/40 focus:border-primary min-h-32"
                      placeholder="Tell us about your project, goals, and how we can help transform your vision into reality..."
                      required
                    />
                  </div>

                  <Button type="submit" className="btn-hero w-full text-lg py-6 group">
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="scroll-fade-in text-center mt-16 glass-card p-8 rounded-2xl border border-border/20" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            Join the ranks of innovative companies that have transformed their business 
            with our cutting-edge solutions. Let's build something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero text-lg px-8 py-6">
              Schedule a Consultation
            </Button>
            <Button className="btn-ghost-glow text-lg px-8 py-6">
              View Our Process
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};