import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  plans: {
    name: string;
    price: {
      INR: string;
      USD: string;
    };
    features: string[];
  }[];
  currency: 'INR' | 'USD';
}

export function ServiceCard({ icon: Icon, title, description, plans, currency }: ServiceCardProps) {
  return (
    <Card className="group hover-lift p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--gradient-2)/0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[hsl(var(--gradient-2)/0.2)] to-[hsl(var(--gradient-3)/0.2)] flex items-center justify-center mb-4 group-hover:animate-float">
          <Icon className="h-8 w-8 text-[hsl(var(--gradient-2))]" />
        </div>
        <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--gradient-1))] to-[hsl(var(--gradient-2))]">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-6">{description}</p>
        <div className="space-y-4">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className="p-4 rounded-lg bg-muted/50 hover:bg-[hsl(var(--gradient-2)/0.1)] transition-colors duration-300"
            >
              <div className="flex justify-between items-center mb-2">
                <Badge 
                  variant="secondary" 
                  className="bg-[hsl(var(--gradient-2)/0.2)] text-[hsl(var(--gradient-2))] hover:bg-[hsl(var(--gradient-2)/0.3)]"
                >
                  {plan.name}
                </Badge>
                <span className="font-bold text-[hsl(var(--gradient-2))]">
                  {currency === 'INR' ? `₹${plan.price.INR}` : `$${plan.price.USD}`}
                </span>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--gradient-2))]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}