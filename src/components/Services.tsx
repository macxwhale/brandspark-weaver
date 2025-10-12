import { Plane, Palmtree, Users, Calendar, Shield, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Air Travel",
      description: "Seamless flight bookings and ticketing services for domestic and international destinations.",
    },
    {
      icon: Palmtree,
      title: "Safari Experience",
      description: "Witness the Great Migration, Big Five encounters, and authentic wildlife adventures.",
    },
    {
      icon: MapPin,
      title: "Leisure Travel",
      description: "Curated vacation packages to exotic beaches, cultural sites, and scenic landscapes.",
    },
    {
      icon: Users,
      title: "Family Travel",
      description: "Family-friendly itineraries designed for all ages with safety and comfort in mind.",
    },
    {
      icon: Calendar,
      title: "MICE Travel",
      description: "Professional event planning for meetings, incentives, conferences, and exhibitions.",
    },
    {
      icon: Shield,
      title: "Special Events",
      description: "Exclusive packages for weddings, anniversaries, and milestone celebrations abroad.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive travel solutions tailored to make your journey unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="hover-lift border-none shadow-md group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
