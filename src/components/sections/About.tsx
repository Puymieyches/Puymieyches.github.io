
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, MapPin, Calendar, Heart } from "lucide-react";

const About = () => {
  const skills = {
    frontend: ["JavaScript (ES6+)", "TypeScript", "Vue/Nuxt3", "React", "HTML5", "CSS3 (Sass, Bootstrap)"],
    backend: ["Node.js", "Express", "REST APIs", "Passport.js", "Socket.io"],
    cloud: ["Cloudflare Workers", "AWS (AppRunner, S3)", "Docker", "Git/GitHub"],
    databases: ["PostgreSQL", "MongoDB", "Mongoose", "Cloudflare KV"],
    data: ["Python (Pandas, NumPy)", "D3.js", "Chart.js", "Matplotlib"],
    testing: ["Jest", "Mocha/Chai", "ESLint/Prettier"]
  };

  const languages = [
    { name: "English", level: "Native" },
    { name: "French", level: "Fluent" },
    { name: "Spanish", level: "A1 (Improving)" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Finance graduate turned developer, passionate about creating innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-6">
                  <img 
                    src="/lovable-uploads/61a09751-2a5d-4855-9f94-cca1dd23b87f.png" 
                    alt="Manil Gajjar - Profile Photo"
                    className="w-48 h-48 rounded-full object-cover mx-auto border-4 border-primary/20"
                  />
                </div>
                <CardTitle className="text-2xl">Manil Gajjar</CardTitle>
                <p className="text-muted-foreground">Full-Stack Developer</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>London, UK → Spain</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Available for relocation</span>
                  </div>
                  <Button className="w-full" size="lg">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bio & Skills Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  My Story
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Finance graduate turned developer with hands-on experience in modern technologies, 
                    driven by curiosity and passion for problem-solving. My journey from analyzing 
                    financial markets to building web applications has given me a unique perspective 
                    on both business needs and technical solutions.
                  </p>
                  <p>
                    Currently based in London, UK, I'm actively seeking opportunities to relocate 
                    permanently to Spain and build a career in the Spanish tech ecosystem. I bring 
                    a strong foundation in full-stack development, from frontend frameworks like 
                    Vue/Nuxt3 and React to backend technologies and cloud deployment.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to 
                    open-source projects, or planning my next adventure in Spain. I'm particularly 
                    passionate about creating efficient, user-friendly applications that solve 
                    real-world problems.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Skills Grid */}
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.frontend.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Backend & APIs</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.backend.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Cloud & DevOps</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.cloud.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Databases</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.databases.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Data & Visualization</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.data.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Testing & QA</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.testing.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card>
              <CardHeader>
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {languages.map((lang) => (
                    <div key={lang.name} className="text-center">
                      <div className="font-medium">{lang.name}</div>
                      <div className="text-sm text-muted-foreground">{lang.level}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
