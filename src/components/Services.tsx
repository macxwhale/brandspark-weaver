import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import airServices from "@/assets/gallery-air.jpg";
import safariExperience from "@/assets/gallery-safari-balloon.jpg";
import honeymoon from "@/assets/gallery-honeymoon.jpg";
import maasai from "@/assets/gallery-maasai.jpg";
import mice from "@/assets/gallery-mice.jpg";
import specialEvent from "@/assets/gallery-special-event.jpg";

const Services = () => {
  const services = [
    {
      image: airServices,
      title: "Air Travel",
      description: "Seamless flight bookings and ticketing services for domestic and international destinations.",
    },
    {
      image: safariExperience,
      title: "Safari Experience",
      description: "Witness the Great Migration, Big Five encounters, and authentic wildlife adventures.",
    },
    {
      image: honeymoon,
      title: "Honeymoon Packages",
      description: "Romantic getaways to paradise destinations, creating unforgettable moments for couples.",
    },
    {
      image: maasai,
      title: "Cultural Experiences",
      description: "Immerse yourself in authentic local cultures and traditions across Africa and beyond.",
    },
    {
      image: mice,
      title: "MICE Travel",
      description: "Professional event planning for meetings, incentives, conferences, and exhibitions.",
    },
    {
      image: specialEvent,
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
              className="hover-lift border-none shadow-md group animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <CardTitle className="absolute bottom-4 left-4 text-2xl text-white">
                  {service.title}
                </CardTitle>
              </div>
              <CardContent className="p-6">
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
