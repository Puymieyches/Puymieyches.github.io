
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";

const About = () => {
  const skills = {
    "Front-End": ["JavaScript (ES6+)", "TypeScript", "Vue/Nuxt3", "React", "HTML5", "CSS3", "Sass", "Bootstrap"],
    "Back-End & APIs": ["Node.js", "Express", "REST", "Passport.js", "Socket.io"],
    "Cloud & DevOps": ["Cloudflare Workers", "AWS (AppRunner, S3)", "Docker", "Git/GitHub", "Bash"],
    "Databases": ["PostgreSQL", "MongoDB", "Mongoose", "Cloudflare KV"],
    "Data & Visualization": ["Python", "Pandas", "NumPy", "Matplotlib", "D3.js", "Chart.js"],
    "Testing & QA": ["Jest", "Mocha/Chai", "Chai-http", "ESLint", "Prettier"]
  };

  const languages = [
    { language: "English", level: "Native" },
    { language: "French", level: "Fluent" },
    { language: "Spanish", level: "A1 (Improving)" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Finance graduate turned developer with hands-on experience in modern technologies
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
              I'm a finance graduate who discovered my passion for development and made the transition to tech. 
              With hands-on experience in modern technologies, I'm driven by curiosity and love problem-solving 
              through code. Currently based in London, UK, I'm looking to relocate permanently to Spain.
            </p>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              My unique background in finance gives me a strong analytical foundation, while my development 
              skills allow me to build efficient, scalable solutions. I enjoy working with both front-end 
              and back-end technologies, and I'm always eager to learn new tools and frameworks.
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Languages</h4>
              <div className="space-y-2">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium">{lang.language}</span>
                    <Badge variant="outline">{lang.level}</Badge>
                  </div>
                ))}
              </div>
            </div>

            <Button className="mb-8">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-12">Skills & Technologies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4 text-center">{category}</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
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
