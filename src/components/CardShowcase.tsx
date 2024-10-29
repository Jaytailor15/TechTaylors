import { Card } from "./Card";

export function CardShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
      <Card
        variant="featured"
        title="Professional Design System"
        description="Experience our meticulously crafted design system featuring dynamic gradients, 
          animated checkerboard patterns, and responsive layouts. Built with attention to detail 
          and performance, ensuring a premium user experience across all devices."
        footer={
          <div className="flex items-center justify-between w-full">
            <span className="text-sm text-muted-foreground">Premium Features</span>
            <button className="text-sm font-medium text-primary hover:underline">
              Learn more →
            </button>
          </div>
        }
      />
      
      <Card
        title="Smart Animations"
        description="Subtle, performant animations enhance user interaction without compromising 
          performance. From smooth hover states to elegant gradient flows, every animation is 
          purposefully designed."
        footer={
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">View Examples →</span>
          </div>
        }
      />
      
      <Card
        title="Adaptive Theming"
        description="Seamlessly switch between light and dark modes with our intelligent 
          theming system. Each component is optimized for both themes, ensuring perfect 
          contrast and readability."
        footer={
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Try it now →</span>
          </div>
        }
      />
    </div>
  )
} 