import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import eastAfricaImg from "@/assets/east-africa.jpg";
import southAfricaImg from "@/assets/south-africa.jpg";
import northAfricaImg from "@/assets/north-africa.jpg";
import europeAsiaImg from "@/assets/europe-asia.jpg";
import { ArrowRight } from "lucide-react";

const Destinations = () => {
  const destinations = [
    {
      title: "East Africa Safaris",
      description: "Wildebeest migration, balloon safaris, gorilla trekking, and pristine beaches in Diani, Mombasa & Zanzibar",
      image: eastAfricaImg,
    },
    {
      title: "South Africa",
      description: "Cape Town city tours, thrilling safaris in Johannesburg, and world-class wine country experiences",
      image: southAfricaImg,
    },
    {
      title: "Egypt & North Africa",
      description: "Camel riding in Morocco's Sahara, exploring the ancient Pyramids of Giza, and vibrant cultural markets",
      image: northAfricaImg,
    },
    {
      title: "Europe & Asia Packages",
      description: "Romantic Santorini & Maldives honeymoons, Eiffel Tower, Colosseum, Singapore & Malaysia tours",
      image: europeAsiaImg,
    },
  ];

  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Our Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover breathtaking locations across continents, each offering unique experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.title}
              className="overflow-hidden border-none shadow-xl hover-lift group animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {destination.title}
                </h3>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">{destination.description}</p>
                <Button variant="outline" className="group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
