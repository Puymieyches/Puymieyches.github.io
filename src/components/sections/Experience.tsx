
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "Odys",
      period: "Nov 2024 - Apr 2025",
      location: "Remote",
      description: "Building modern web applications with Vue/Nuxt3 and TypeScript, integrating authentication and API services.",
      achievements: [
        "Built Nuxt3 (Vue) apps with TypeScript, integrated Auth and API calls to Airtable",
        "Customized SOFTR pages using HTML, CSS, JS, SQL, and PostgreSQL",
        "Deployed via GitHub + AWS AppRunner with caching and server-side optimization",
        "Created data visualizations using Chart.js",
        "Developed web scraper for landing pages",
        "Collaborated using Slack & Trello in Agile workflows"
      ],
      tech: ["Nuxt3", "Vue", "TypeScript", "PostgreSQL", "AWS AppRunner", "Chart.js", "Airtable"]
    },
    {
      role: "Freelance Business Consultant",
      company: "Various Clients",
      period: "Sep 2022 - Dec 2023",
      location: "Remote",
      description: "Provided business consulting services focusing on operational efficiency and technology solutions.",
      achievements: [
        "Solved operational inefficiencies and upgraded software systems",
        "Designed billing/payment solutions based on cash flow analysis",
        "Updated company websites using custom code and WordPress",
        "Trained teams on new processes and technologies"
      ],
      tech: ["WordPress", "Custom HTML/CSS/JS", "Business Analysis", "Process Optimization"]
    }
  ];

  const education = [
    {
      degree: "Full Stack Developer Certification",
      institution: "FreeCodeCamp",
      period: "Jan 2024 - Jul 2024",
      location: "Remote",
      description: "Comprehensive full-stack development program covering modern web technologies.",
      achievements: [
        "Covered web design, JS algorithms, React, APIs, SQL/NoSQL, Python/Pandas",
        "Built portfolio projects including JS calculator and Markdown previewer",
        "Developed full-stack applications with database integration"
      ],
      tech: ["React", "Node.js", "Python", "PostgreSQL", "MongoDB", "APIs"]
    },
    {
      degree: "MA (Hons), Finance & Accounting",
      institution: "University of Aberdeen",
      period: "Sep 2015 - Jun 2019",
      location: "Aberdeen, Scotland",
      description: "Graduated with 2:1 honours. Strong foundation in finance, statistics, and accounting.",
      achievements: [
        "Graduated with 2:1 honours",
        "Focus on finance, statistics, and accounting",
        "Dissertation in finance with DCF models and fundamental analysis",
        "Equity analyst experience"
      ],
      tech: ["Excel", "Financial Modeling", "Data Analysis", "Thomson Reuters EIKON"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey from finance to development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8">Work Experience</h3>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block"></div>
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative mb-12 md:ml-16">
                  <div className="absolute -left-20 top-6 w-4 h-4 bg-primary rounded-full hidden md:block"></div>
                  
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-primary mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-lg font-medium text-muted-foreground mb-1">
                            {exp.company}
                          </p>
                          <p className="text-sm text-muted-foreground mb-2">
                            📍 {exp.location}
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

          <div>
            <h3 className="text-2xl font-bold mb-8">Education</h3>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block"></div>
              
              {education.map((edu, index) => (
                <div key={index} className="relative mb-12 md:ml-16">
                  <div className="absolute -left-20 top-6 w-4 h-4 bg-primary rounded-full hidden md:block"></div>
                  
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-primary mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-lg font-medium text-muted-foreground mb-1">
                            {edu.institution}
                          </p>
                          <p className="text-sm text-muted-foreground mb-2">
                            📍 {edu.location}
                          </p>
                        </div>
                        <Badge variant="outline" className="self-start">
                          {edu.period}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {edu.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Highlights:</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {edu.tech.map((tech) => (
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
      </div>
    </section>
  );
};

export default Experience;
