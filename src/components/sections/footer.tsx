import { Code, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/code-envision-logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" }
    ],
    services: [
      { name: "Web Development", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
      { name: "AI Solutions", href: "#services" },
      { name: "Blockchain", href: "#services" }
    ],
    resources: [
      { name: "Blog", href: "#blog" },
      { name: "Case Studies", href: "#portfolio" },
      { name: "Documentation", href: "#docs" },
      { name: "Support", href: "#support" }
    ]
  };

  return (
    <footer className="relative bg-gradient-hero border-t border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logoImage} 
                alt="Code Envision Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-foreground/70 mb-6 leading-relaxed max-w-md">
              Pioneering the future of digital innovation with AI-powered solutions, 
              premium web applications, and cutting-edge technology that transforms visions into reality.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="border-border/40 hover:border-primary">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="border-border/40 hover:border-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="border-border/40 hover:border-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="border-border/40 hover:border-primary">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-border/20">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-foreground/70 mb-6">
              Get the latest insights on AI, technology trends, and industry innovations.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-card/50 border border-border/40 text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary"
              />
              <Button className="btn-hero px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/20 text-center">
          <p className="text-foreground/60">
            © {currentYear} Code Envision. All rights reserved. | 
            <a href="#privacy" className="hover:text-primary transition-colors ml-1">Privacy Policy</a> | 
            <a href="#terms" className="hover:text-primary transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};