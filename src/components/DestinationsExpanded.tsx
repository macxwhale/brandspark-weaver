import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ChevronRight } from "lucide-react";
import eastAfrica from "@/assets/east-africa.jpg";
import southAfrica from "@/assets/south-africa.jpg";
import northAfrica from "@/assets/north-africa.jpg";
import europeAsia from "@/assets/europe-asia.jpg";

const DestinationsExpanded = () => {
  const destinationRegions = [
    {
      region: "East Africa",
      image: eastAfrica,
      description: "Discover the wild heart of Africa with safaris, pristine beaches, and rich cultures.",
    },
    {
      region: "Southern Africa",
      image: southAfrica,
      description: "From Table Mountain to Victoria Falls, explore diverse landscapes and wildlife.",
    },
    {
      region: "North Africa",
      image: northAfrica,
      description: "Ancient wonders, Sahara adventures, and Mediterranean coastlines await.",
    },
    {
      region: "Europe & Asia",
      image: europeAsia,
      description: "Iconic cities, romantic islands, and exotic cultures across two continents.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {destinationRegions.map((destination, index) => (
            <Card 
              key={destination.region}
              className="group border-none shadow-lg hover-lift animate-fade-in overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.region}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    Destination: {destination.region}
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-sm text-white/90">
                    {destination.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="default" className="group">
            Request a Quote
            <MapPin className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsExpanded;
