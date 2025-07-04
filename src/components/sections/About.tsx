
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";

const About = () => {
  const skills = {
    Frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Angular"],
    Backend: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL", "MongoDB"],
    Tools: ["Git", "Docker", "AWS", "Figma", "VS Code", "Postman"]
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with 5+ years of experience creating digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-64 h-64 mx-auto md:mx-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mb-8">
              <div className="w-48 h-48 bg-muted rounded-full flex items-center justify-center">
                <span className="text-4xl">👨‍💻</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate full-stack developer who loves creating innovative solutions and beautiful user experiences. 
              With expertise in modern web technologies, I help businesses bring their ideas to life through clean, 
              efficient code and thoughtful design.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge through technical writing and mentoring.
            </p>

            <Button className="mb-8">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-12">Skills & Technologies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-4 text-center">{category}</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
