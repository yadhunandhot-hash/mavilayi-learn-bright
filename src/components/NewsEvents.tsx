import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Trophy, FileText } from "lucide-react";

export const NewsEvents = () => {
  const events = [
    {
      title: "Annual Sports Day",
      description: "Join us on [Date] for our annual sports competition! Read more...",
      date: "March 15, 2025",
      type: "Sports Event",
      icon: Trophy,
      color: "primary"
    },
    {
      title: "Parent-Teacher Meeting",
      description: "The next PTM will be held on [Date]. View schedule...",
      date: "March 20, 2025",
      type: "Academic Meeting",
      icon: Users,
      color: "accent"
    }
  ];

  const news = [
    {
      title: "New Science Laboratory Inaugurated",
      summary: "State-of-the-art science lab opens to enhance STEM education for our students.",
      date: "February 28, 2025",
      category: "Infrastructure"
    },
    {
      title: "Students Win Regional Science Fair",
      summary: "Our Grade 10 students secured first place in the regional science competition.",
      date: "February 25, 2025",
      category: "Achievement"
    },
    {
      title: "Teacher Development Workshop",
      summary: "Faculty participated in advanced teaching methodology workshop last weekend.",
      date: "February 22, 2025",
      category: "Faculty"
    }
  ];

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              News & Events
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest happenings, events, and achievements at Mavilayi UP School.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Upcoming Events */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
                <Calendar className="h-6 w-6 text-primary mr-3" />
                Upcoming Events
              </h3>
              
              <div className="space-y-6">
                {events.map((event, index) => {
                  const Icon = event.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-full ${
                              event.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                            }`}>
                              <Icon className={`h-5 w-5 ${
                                event.color === 'primary' ? 'text-primary' : 'text-accent'
                              }`} />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{event.title}</CardTitle>
                              <div className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                                event.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
                              }`}>
                                {event.type}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-foreground">{event.date}</div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{event.description}</p>
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="mt-8">
                <Button variant="default" className="w-full">
                  View All Events
                </Button>
              </div>
            </div>

            {/* Latest News */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
                <FileText className="h-6 w-6 text-accent mr-3" />
                Latest News
              </h3>
              
              <div className="space-y-6">
                {news.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-3">
                        <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary-foreground text-xs font-medium rounded-full">
                          {item.category}
                        </span>
                        <span className="text-sm text-muted-foreground">{item.date}</span>
                      </div>
                      <h4 className="font-semibold text-foreground mb-2 hover:text-primary cursor-pointer">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {item.summary}
                      </p>
                      <Button variant="ghost" size="sm" className="p-0 h-auto font-medium">
                        Read More →
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8">
                <Button variant="accent" className="w-full">
                  View All News
                </Button>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Stay Connected
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive updates about school events, achievements, and important announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};