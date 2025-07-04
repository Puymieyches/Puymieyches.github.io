
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Lead development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented best practices.",
      achievements: [
        "Increased application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipelines"
      ],
      tech: ["React", "Node.js", "AWS", "TypeScript", "Docker"]
    },
    {
      role: "Frontend Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description: "Developed responsive web applications and collaborated with designers to create exceptional user experiences.",
      achievements: [
        "Built 15+ client websites",
        "Improved load times by 60%",
        "Established design system"
      ],
      tech: ["Vue.js", "JavaScript", "SCSS", "Figma", "Git"]
    },
    {
      role: "Junior Developer",
      company: "StartUp Ventures",
      period: "2019 - 2020",
      description: "Worked on various web development projects and gained experience in full-stack development.",
      achievements: [
        "Completed 10+ projects",
        "Learned modern frameworks",
        "Collaborated with cross-functional teams"
      ],
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:ml-16">
                {/* Timeline dot */}
                <div className="absolute -left-20 top-6 w-4 h-4 bg-primary rounded-full hidden md:block"></div>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-lg font-medium text-muted-foreground mb-2">
                          {exp.company}
                        </p>
                      </div>
                      <Badge variant="outline" className="self-start">
                        {exp.period}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
