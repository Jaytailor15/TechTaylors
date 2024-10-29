import { useEffect, useState } from 'react';
import {
  Moon, Sun, Smartphone, Globe2, Megaphone, Palette, 
  Code2, Cpu, MessageCircle, Mail, Rocket, 
  CheckCircle2, Clock, Users, Zap, Shield, Award
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ServiceCard } from '@/components/ServiceCard';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { MouseTrail } from '@/components/MouseTrail';

const services = [
  {
    icon: Globe2,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices',
    plans: [
      {
        name: 'Basic',
        price: { INR: '25,000', USD: '299' },
        features: ['Single Page Website', 'Responsive Design', '3 Revisions', 'Basic SEO'],
      },
      {
        name: 'Premium',
        price: { INR: '75,000', USD: '899' },
        features: ['Multi-page Website', 'Advanced Features', 'Unlimited Revisions', 'Advanced SEO'],
      },
      {
        name: 'Enterprise',
        price: { INR: '2,00,000', USD: '2,499' },
        features: ['Full Web Application', 'Custom Features', 'Priority Support', 'Complete SEO Suite'],
      },
    ],
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    plans: [
      {
        name: 'Basic',
        price: { INR: '50,000', USD: '599' },
        features: ['Single Platform', 'Basic Features', '2 Revisions', 'App Store Submission'],
      },
      {
        name: 'Premium',
        price: { INR: '1,50,000', USD: '1,799' },
        features: ['Cross-platform', 'Advanced Features', '5 Revisions', 'Analytics Integration'],
      },
      {
        name: 'Enterprise',
        price: { INR: '5,00,000', USD: '5,999' },
        features: ['Custom Solution', 'All Features', 'Lifetime Support', 'White Label Option'],
      },
    ],
  },
  {
    icon: Cpu,
    title: 'SAAS Development',
    description: 'Scalable software-as-a-service solutions for modern businesses',
    plans: [
      {
        name: 'Startup',
        price: { INR: '3,00,000', USD: '3,599' },
        features: ['Core Features', 'Basic Scaling', '3 Months Support', 'Cloud Hosting'],
      },
      {
        name: 'Business',
        price: { INR: '8,00,000', USD: '9,599' },
        features: ['Advanced Features', 'Auto Scaling', '12 Months Support', 'Premium Hosting'],
      },
      {
        name: 'Enterprise',
        price: { INR: '15,00,000', USD: '17,999' },
        features: ['Custom Features', 'Unlimited Scaling', 'Dedicated Support', 'Custom Infrastructure'],
      },
    ],
  },
];

function App() {
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const { toast } = useToast();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [theme]);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-background">
        <div className="relative animate-float">
          <Rocket className="h-12 w-12 text-[hsl(var(--gradient-2))]" />
          <div className="absolute inset-0 animate-ping bg-[hsl(var(--gradient-2)/0.2)] rounded-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MouseTrail />
      
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-[hsl(var(--gradient-2))]" />
          <span className="text-xl font-bold">TechTaylors</span>
        </div>
        
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                {currency === 'INR' ? '₹' : '$'}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setCurrency('INR')}>INR (₹)</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCurrency('USD')}>USD ($)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]">
          Crafting Digital Excellence
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Transform your ideas into reality with our expert development and design services
        </p>
        <div className="flex gap-4 justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-[hsl(var(--gradient-2))] hover:bg-[hsl(var(--gradient-2))/0.9]">
                Get Started
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Contact Us</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Email" />
                <Textarea placeholder="Tell us about your project" />
                <Button type="submit">Send Message</Button>
              </form>
            </DialogContent>
          </Dialog>
          
          <Button variant="outline" asChild>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              plans={service.plans}
              currency={currency}
            />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
        <ProjectShowcase />
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <a href="mailto:contact@techtaylors.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <Mail className="h-4 w-4" />
                  contact@techtaylors.com
                </a>
                <a href="https://wa.me/1234567890" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">Web Development</li>
                <li className="text-muted-foreground">App Development</li>
                <li className="text-muted-foreground">SAAS Development</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">About Us</li>
                <li className="text-muted-foreground">Portfolio</li>
                <li className="text-muted-foreground">Contact</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
            © 2024 TechTaylors. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;