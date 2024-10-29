import { Card } from "@/components/Card"

export function SomeComponent() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card
        title="Beautiful Design"
        description="Our carefully crafted interface combines aesthetics with functionality. 
          Featuring smooth gradients, subtle animations, and thoughtful interactions 
          that make every interaction a delight."
        footer={
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Learn more →</span>
          </div>
        }
      />
      
      <Card
        title="Responsive Layout"
        description="Built with modern CSS features and best practices, our components 
          adapt seamlessly to any screen size. Experience consistent beauty from 
          mobile to desktop."
        footer={
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Learn more →</span>
          </div>
        }
      />
      
      <Card
        title="Dark Mode Ready"
        description="Every component is designed with both light and dark modes in mind. 
          Our thoughtful color system ensures perfect contrast and readability in 
          any theme."
        footer={
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Learn more →</span>
          </div>
        }
      />
    </div>
  )
} 