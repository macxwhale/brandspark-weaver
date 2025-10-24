import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import cheetahImage from "@/assets/gallery-cheetah.jpg";
import safariImage from "@/assets/gallery-safari.jpg";
import sunriseImage from "@/assets/gallery-sunrise.jpg";
import capetownImage from "@/assets/capetown.jpg";
import capetown2Image from "@/assets/capetown-2.jpg";
import durbanImage from "@/assets/durban.jpg";
import victoriaFallsImage from "@/assets/victoria-falls.jpg";
import okavangoDeltaImage from "@/assets/okavango-delta.jpg";
import PageHero from "@/components/PageHero";
import southAfricaHero from "@/assets/south-africa.jpg";
import DestinationCarousel from "@/components/DestinationCarousel";

const SouthernAfrica = () => {
  const capeTownDestination = {
    title: "Cape Town – The Mother City",
    description: "Famous for its stunning Table Mountain, Cape Town is where nature and culture meet. Explore the Cape Winelands, take a scenic drive along Chapman's Peak, or visit the historic Robben Island.",
    images: [capetownImage, capetown2Image],
  };

  const durbanDestination = {
    title: "Durban – The Coastal Gem",
    description: "With its warm Indian Ocean waters and lively beachfront, Durban blends African, Indian, and colonial influences beautifully. Enjoy its golden beaches, visit uShaka Marine World, or savor the city's famous spicy cuisine.",
    images: [cheetahImage, durbanImage],
  };

  const southAfrica = [
    {
      city: "Johannesburg – The City of Gold",
      description: "South Africa's largest city is a bustling hub of business, art, and history. Visit the Apartheid Museum, explore Soweto, and experience Johannesburg's dynamic nightlife and culinary scene.",
      image: safariImage,
    },
  ];

  const botswanaDestination = {
    title: "Botswana – The Jewel of the Kalahari",
    description: "Botswana is a land of untouched wilderness, spectacular wildlife, and breathtaking natural beauty. Explore the Okavango Delta, a UNESCO World Heritage Site, and Chobe National Park, home to one of the largest elephant populations in Africa.",
    images: [sunriseImage, okavangoDeltaImage],
  };

  const zimbabweDestination = {
    title: "Zimbabwe – The Land of Wonders",
    description: "Zimbabwe is home to Victoria Falls, one of the Seven Natural Wonders of the World. Explore wildlife-rich Hwange National Park, discover ancient history at the Great Zimbabwe Ruins, and cruise along the Zambezi River at sunset.",
    images: [cheetahImage, victoriaFallsImage],
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-0">
        <PageHero
          title="Southern Africa"
          subtitle="From the golden beaches and mountain peaks of South Africa to the untouched wilderness of Botswana and the wonders of Zimbabwe."
          image={southAfricaHero}
          eyebrow="Southern Africa"
        />

        {/* South Africa Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">South Africa – A World in One Country</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              A land of vibrant cities, diverse cultures, and breathtaking natural beauty. Explore golden beaches, mountain peaks, and wildlife reserves.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              <div className="animate-fade-in" style={{ animationDelay: "0s" }}>
                <DestinationCarousel 
                  title={capeTownDestination.title}
                  description={capeTownDestination.description}
                  images={capeTownDestination.images}
                />
              </div>

              {southAfrica.map((destination, index) => (
                <Card 
                  key={destination.city}
                  className="group border-none shadow-lg hover-lift animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
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

              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <DestinationCarousel 
                  title={durbanDestination.title}
                  description={durbanDestination.description}
                  images={durbanDestination.images}
                />
              </div>
            </div>

            {/* Other Destinations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <DestinationCarousel 
                  title={botswanaDestination.title}
                  description={botswanaDestination.description}
                  images={botswanaDestination.images}
                />
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <DestinationCarousel 
                  title={zimbabweDestination.title}
                  description={zimbabweDestination.description}
                  images={zimbabweDestination.images}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SouthernAfrica;
