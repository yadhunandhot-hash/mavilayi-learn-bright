import { Button } from "@/components/ui/button";
import { BookOpen, Target, Heart, Star } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Our School
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Insert a brief paragraph about the school's history, mission, and values here...
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our dedicated faculty, state-of-the-art facilities, and diverse curriculum prepare students for success.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 rounded-full p-2 mt-1">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Our Mission</h4>
                    <p className="text-muted-foreground">To provide quality education that nurtures academic excellence and character development.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-accent/10 rounded-full p-2 mt-1">
                    <Heart className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Our Values</h4>
                    <p className="text-muted-foreground">Integrity, respect, innovation, and commitment to lifelong learning.</p>
                  </div>
                </div>
              </div>

              <Button variant="default" size="lg" className="mt-8">
                Learn More About Us
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Modern Curriculum</h4>
                <p className="text-sm text-muted-foreground">Updated teaching methods aligned with current educational standards.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Expert Faculty</h4>
                <p className="text-sm text-muted-foreground">Qualified and experienced teachers dedicated to student success.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-secondary/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Holistic Development</h4>
                <p className="text-sm text-muted-foreground">Focus on academic, social, and emotional growth of students.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-success/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-success" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Safe Environment</h4>
                <p className="text-sm text-muted-foreground">Secure and nurturing environment for optimal learning.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};