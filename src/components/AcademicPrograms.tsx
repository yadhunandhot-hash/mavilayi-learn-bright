import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, GraduationCap, Award } from "lucide-react";

export const AcademicPrograms = () => {
  const programs = [
    {
      title: "Primary School",
      description: "Curriculum focused on foundational skills and creative development.",
      icon: Users,
      grades: "Grades 1-5",
      features: ["Interactive Learning", "Creative Arts", "Basic Sciences", "Character Building"],
      color: "primary"
    },
    {
      title: "Middle School",
      description: "A balanced curriculum to prepare students for higher-level studies.",
      icon: BookOpen,
      grades: "Grades 6-8",
      features: ["Advanced Subjects", "Critical Thinking", "Team Projects", "Leadership Skills"],
      color: "accent"
    },
    {
      title: "High School",
      description: "Advanced courses and career-focused programs for college readiness.",
      icon: GraduationCap,
      grades: "Grades 9-12",
      features: ["College Prep", "Career Guidance", "Advanced Placement", "Research Projects"],
      color: "secondary"
    }
  ];

  return (
    <section id="academics" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Academic Programs
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive educational programs designed to nurture students at every stage of their academic journey.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
                    program.color === 'primary' ? 'from-primary to-primary-light' :
                    program.color === 'accent' ? 'from-accent to-accent/70' :
                    'from-secondary to-secondary/70'
                  }`}></div>
                  
                  <CardHeader className="text-center pb-4">
                    <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                      program.color === 'primary' ? 'bg-primary/10' :
                      program.color === 'accent' ? 'bg-accent/10' :
                      'bg-secondary/20'
                    }`}>
                      <Icon className={`h-8 w-8 ${
                        program.color === 'primary' ? 'text-primary' :
                        program.color === 'accent' ? 'text-accent' :
                        'text-secondary-foreground'
                      }`} />
                    </div>
                    <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      program.color === 'primary' ? 'bg-primary/10 text-primary' :
                      program.color === 'accent' ? 'bg-accent/10 text-accent' :
                      'bg-secondary/20 text-secondary-foreground'
                    }`}>
                      {program.grades}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="text-center">
                    <CardDescription className="text-base mb-6 leading-relaxed">
                      {program.description}
                    </CardDescription>
                    
                    <div className="space-y-2 mb-6">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                          <Award className="h-4 w-4 text-success" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      variant={program.color === 'primary' ? 'default' : program.color === 'accent' ? 'accent' : 'secondary'} 
                      className="w-full"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Join Our Academic Community?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Discover how our comprehensive programs can help your child reach their full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Schedule a Visit
              </Button>
              <Button variant="outline" size="lg">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};