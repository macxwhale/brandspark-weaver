import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import egyptImage from "@/assets/gallery-egypt.jpg";
import sunriseImage from "@/assets/gallery-sunrise.jpg";

const NorthAfrica = () => {
  const destinations = [
    {
      country: "Egypt – The Land of Pharaohs",
      description: "Stand in awe of the Great Pyramids of Giza, cruise along the River Nile, and explore ancient temples in Luxor and Aswan. Beyond its history, Egypt also offers the serene beaches of the Red Sea and vibrant city life in Cairo.",
      image: egyptImage,
    },
    {
      country: "Morocco – The Gateway to Africa",
      description: "With its blend of Arabic, Berber, and European influences, Morocco is a feast for the senses. Wander through the maze-like Medinas of Marrakech and Fes, experience the golden dunes of the Sahara Desert, and relax in the coastal beauty of Casablanca.",
      image: sunriseImage,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="bg-gradient-to-b from-primary/10 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                North Africa – Where History Meets Magic
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A land steeped in history, vibrant culture, and breathtaking scenery. Whether it's the iconic monuments of Egypt or the lively markets of Morocco, exploring this region feels like walking through the pages of a living legend.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {destinations.map((destination, index) => (
                <Card 
                  key={destination.country}
                  className="group border-none shadow-lg hover-lift animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-96 overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.country}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                        <MapPin className="w-6 h-6" />
                        {destination.country}
                      </h3>
                      <p className="text-sm text-white/95 leading-relaxed">
                        {destination.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NorthAfrica;
