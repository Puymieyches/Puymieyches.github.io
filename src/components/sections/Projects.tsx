
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Trackmania Discord Bot",
      description: "A Discord bot built with Cloudflare Workers that connects to the Nadeo API to fetch and display custom club campaign stats, including reset timers and short map updates.",
      tech: ["Cloudflare Workers", "Cloudflare KV", "Discord API", "Nadeo API", "JavaScript"],
      github: "https://github.com/puymieyches",
      demo: "#",
      image: "/placeholder.svg"
    },
    {
      title: "Full-Stack Web Application",
      description: "Complete web application built during FreeCodeCamp certification with user authentication, database integration, and responsive design.",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "CSS3"],
      github: "https://github.com/puymieyches",
      demo: "#",
      image: "/placeholder.svg"
    },
    {
      title: "JavaScript Calculator",
      description: "Interactive calculator application built with vanilla JavaScript featuring a clean UI and full mathematical operations support.",
      tech: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
      github: "https://github.com/puymieyches",
      demo: "#",
      image: "/placeholder.svg"
    },
    {
      title: "Markdown Previewer",
      description: "Real-time markdown preview application that converts markdown syntax to HTML with live preview functionality.",
      tech: ["React", "Markdown", "CSS3", "HTML5"],
      github: "https://github.com/puymieyches",
      demo: "#",
      image: "/placeholder.svg"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive data visualization project using Chart.js and D3.js to display complex datasets with multiple chart types and filtering options.",
      tech: ["Chart.js", "D3.js", "JavaScript", "Python", "Pandas"],
      github: "https://github.com/puymieyches",
      demo: "#",
      image: "/placeholder.svg"
    },
    {
      title: "Nuxt3 Business Application",
      description: "Modern business application built with Nuxt3 and TypeScript, featuring authentication, API integration with Airtable, and deployment on AWS.",
      tech: ["Nuxt3", "Vue", "TypeScript", "Airtable", "AWS AppRunner", "PostgreSQL"],
      github: "https://github.com/puymieyches",
      demo: "#",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">🚀</span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
