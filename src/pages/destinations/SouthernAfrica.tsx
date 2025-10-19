import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import cheetahImage from "@/assets/gallery-cheetah.jpg";
import safariImage from "@/assets/gallery-safari.jpg";
import sunriseImage from "@/assets/gallery-sunrise.jpg";

const SouthernAfrica = () => {
  const southAfrica = [
    {
      city: "Cape Town – The Mother City",
      description: "Famous for its stunning Table Mountain, Cape Town is where nature and culture meet. Explore the Cape Winelands, take a scenic drive along Chapman's Peak, or visit the historic Robben Island.",
      image: sunriseImage,
    },
    {
      city: "Johannesburg – The City of Gold",
      description: "South Africa's largest city is a bustling hub of business, art, and history. Visit the Apartheid Museum, explore Soweto, and experience Johannesburg's dynamic nightlife and culinary scene.",
      image: safariImage,
    },
    {
      city: "Durban – The Coastal Gem",
      description: "With its warm Indian Ocean waters and lively beachfront, Durban blends African, Indian, and colonial influences beautifully. Enjoy its golden beaches, visit uShaka Marine World, or savor the city's famous spicy cuisine.",
      image: cheetahImage,
    },
  ];

  const otherDestinations = [
    {
      country: "Botswana – The Jewel of the Kalahari",
      description: "Botswana is a land of untouched wilderness, spectacular wildlife, and breathtaking natural beauty. Explore the Okavango Delta, a UNESCO World Heritage Site, and Chobe National Park, home to one of the largest elephant populations in Africa.",
      highlights: ["Okavango Delta - winding waterways and abundant wildlife", "Chobe National Park - elephants, hippos, and crocodiles"],
    },
    {
      country: "Zimbabwe – The Land of Wonders",
      description: "Zimbabwe is home to Victoria Falls, one of the Seven Natural Wonders of the World. Explore wildlife-rich Hwange National Park, discover ancient history at the Great Zimbabwe Ruins, and cruise along the Zambezi River at sunset.",
      highlights: ["Victoria Falls - The Smoke That Thunders", "Hwange National Park", "Great Zimbabwe Ruins"],
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
                Southern Africa
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From the golden beaches and mountain peaks of South Africa to the untouched wilderness of Botswana and the wonders of Zimbabwe.
              </p>
            </div>
          </div>
        </section>

        {/* South Africa Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">South Africa – A World in One Country</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              A land of vibrant cities, diverse cultures, and breathtaking natural beauty. Explore golden beaches, mountain peaks, and wildlife reserves.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {southAfrica.map((destination, index) => (
                <Card 
                  key={destination.city}
                  className="group border-none shadow-lg hover-lift animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.city}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        {destination.city}
                      </h3>
                      <p className="text-sm text-white/95 leading-relaxed">
                        {destination.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Other Destinations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {otherDestinations.map((destination, index) => (
                <Card 
                  key={destination.country}
                  className="p-8 hover-lift animate-fade-in"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-primary" />
                    {destination.country}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {destination.description}
                  </p>
                  <ul className="space-y-2">
                    {destination.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
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

export default SouthernAfrica;
