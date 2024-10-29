import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack marketplace with AI-powered recommendations',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['React', 'Node.js', 'AI'],
  },
  {
    title: 'Healthcare App',
    description: 'Mobile application for patient management',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    tags: ['React Native', 'Firebase'],
  },
  {
    title: 'Financial Dashboard',
    description: 'Real-time analytics and reporting system',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['Vue.js', 'D3.js'],
  },
];

export function ProjectShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Card key={project.title} className="group overflow-hidden hover-lift">
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--gradient-1))/0.9] to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-white/80">{project.description}</p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="secondary"
                  className="bg-[hsl(var(--gradient-2)/0.2)] text-[hsl(var(--gradient-2))] hover:bg-[hsl(var(--gradient-2)/0.3)]"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}