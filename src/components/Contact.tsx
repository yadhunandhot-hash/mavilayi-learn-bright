import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with us for admissions, inquiries, or any questions about our school.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  We're here to help you with any questions about our school, programs, or admissions process. 
                  Feel free to reach out to us through any of the following methods.
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="flex items-start space-x-4 pt-6">
                    <div className="bg-primary/10 rounded-full p-3">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Address</h4>
                      <p className="text-muted-foreground">[Your School Adss]</p>
                      <p className="text-muted-foreground">City, State - Postal Code</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="flex items-start space-x-4 pt-6">
                    <div className="bg-accent/10 rounded-full p-3">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground">[Your Phone Number]</p>
                      <p className="text-sm text-muted-foreground">Mon - Fri: 8:00 AM - 4:00 PM</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-secondary">
                  <CardContent className="flex items-start space-x-4 pt-6">
                    <div className="bg-secondary/20 rounded-full p-3">
                      <Mail className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">[Your Email Address]</p>
                      <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-success">
                  <CardContent className="flex items-start space-x-4 pt-6">
                    <div className="bg-success/10 rounded-full p-3">
                      <Clock className="h-6 w-6 text-success" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
                      <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 4:00 PM</p>
                      <p className="text-muted-foreground">Saturday: 9:00 AM - 1:00 PM</p>
                      <p className="text-sm text-muted-foreground">Closed on Sundays & Holidays</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                      placeholder="Please share your message or inquiry..."
                    ></textarea>
                  </div>

                  <Button variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Required fields. We'll get back to you within 24 hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
