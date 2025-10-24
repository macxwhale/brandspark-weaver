import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import safariImage from "@/assets/gallery-safari.jpg";
import cheetahImage from "@/assets/gallery-cheetah.jpg";
import maasaiImage from "@/assets/gallery-maasai.jpg";
import balloonImage from "@/assets/gallery-safari-balloon.jpg";
import kigaliImage from "@/assets/kigali.jpg";
import ugandaImage from "@/assets/uganda.jpg";
import tanzaniaImage from "@/assets/tanzania.jpg";
import victoriaFalls2Image from "@/assets/victoria-falls-2.jpg";
import PageHero from "@/components/PageHero";
import eastAfricaHero from "@/assets/east-africa.jpg";
import DestinationCarousel from "@/components/DestinationCarousel";

const EastAfrica = () => {
  const kenyaDestination = {
    title: "Kenya – The Heart of Safari",
    description: "Experience the thrill of African wildlife in its natural habitat. Kenya offers unmatched safari adventures, From the world-famous Maasai Mara and its Great Migration to the serene shores of Lake Naivasha and the stunning views of Mount Kilimanjaro from Amboseli National Park.",
    images: [safariImage, victoriaFalls2Image],
  };

  const destinations = [
    {
      country: "Rwanda – The Land of a Thousand Hills",
      description: "Rwanda is a gem of natural beauty and resilience. Explore the lush rainforests of Volcanoes National Park for a once-in-a-lifetime gorilla trekking experience, or enjoy the tranquility of Lake Kivu and the charm of Kigali city.",
      image: kigaliImage,
    },
  ];

  const tanzaniaDestination = {
    title: "Tanzania – Where Adventure Meets Serenity",
    description: "Home to the majestic Serengeti, Tanzania is every traveler's dream, the breathtaking Ngorongoro Crater, and the exotic island of Zanzibar. Witness the Great Migration, climb Mount Kilimanjaro, or unwind on pristine beaches surrounded by turquoise waters.",
    images: [balloonImage, tanzaniaImage],
  };

  const ugandaDestination = {
    title: "Uganda – The Pearl of Africa",
    description: "Uganda captivates travelers with its diverse landscapes from the source of the River Nile to the misty Bwindi Impenetrable Forest, home to mountain gorillas. It's a destination for adventurers and nature lovers alike.",
    images: [cheetahImage, ugandaImage],
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-0">
        <PageHero
          title="Explore East Africa with Us"
          subtitle="East Africa is a region of breathtaking landscapes, diverse cultures, and unforgettable wildlife encounters. From the endless savannahs of Kenya to the misty mountains of Rwanda, every destination tells its own story."
          image={eastAfricaHero}
          eyebrow="East Africa"
        />

        {/* Destinations Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="animate-fade-in" style={{ animationDelay: "0s" }}>
                <DestinationCarousel 
                  title={kenyaDestination.title}
                  description={kenyaDestination.description}
                  images={kenyaDestination.images}
                />
              </div>

              {destinations.map((destination, index) => (
                <Card 
                  key={destination.country}
                  className="group border-none shadow-lg hover-lift animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-80 overflow-hidden">
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
              
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <DestinationCarousel 
                  title={tanzaniaDestination.title}
                  description={tanzaniaDestination.description}
                  images={tanzaniaDestination.images}
                />
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <DestinationCarousel 
                  title={ugandaDestination.title}
                  description={ugandaDestination.description}
                  images={ugandaDestination.images}
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

export default EastAfrica;
