import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  footer?: React.ReactNode;
  variant?: 'default' | 'featured';
}

export function Card({ 
  title, 
  description, 
  footer, 
  variant = 'default',
  className, 
  ...props 
}: CardProps) {
  return (
    <div 
      className={cn(
        "card group",
        variant === 'featured' && 'md:col-span-2',
        className
      )} 
      {...props}
    >
      <div className="card-shine opacity-0 group-hover:opacity-100" />
      <div className={cn(
        "absolute inset-0",
        "dark:gradient-checks-dark gradient-checks-light"
      )} />
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
        </div>
        <p className="card-description">{description}</p>
        {footer && (
          <div className="card-footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
} 