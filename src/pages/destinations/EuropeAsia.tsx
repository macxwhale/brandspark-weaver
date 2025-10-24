import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import santoriniImage from "@/assets/gallery-santorini.jpg";
import singaporeImage from "@/assets/gallery-singapore.jpg";
import singaporeCityImage from "@/assets/gallery-singapore-city.jpg";
import singapore2Image from "@/assets/singapore-2.jpg";
import sunriseImage from "@/assets/gallery-sunrise.jpg";
import parisImage from "@/assets/paris.jpg";
import turkeyImage from "@/assets/turkey.jpg";
import italyImage from "@/assets/italy.jpg";
import malaysia1Image from "@/assets/malaysia-1.jpg";
import malaysia2Image from "@/assets/malaysia-2.jpg";
import maldivesImage from "@/assets/maldives.jpg";
import mauritiusImage from "@/assets/mauritius.jpg";
import seychellesImage from "@/assets/seychelles.jpg";
import PageHero from "@/components/PageHero";
import europeAsiaHero from "@/assets/europe-asia.jpg";
import DestinationCarousel from "@/components/DestinationCarousel";

const EuropeAsia = () => {
  const europeDestinations = [
    {
      destination: "Greece – The Charm of Santorini",
      description: "Known for its whitewashed houses, blue-domed churches, and stunning sunsets over the Aegean Sea, Santorini is the crown jewel of Greece's islands. Explore charming villages like Oia and Fira, enjoy fine Mediterranean cuisine, or unwind on volcanic beaches.",
      image: santoriniImage,
    },
    {
      destination: "France – The City of Love",
      description: "Elegant, artistic, and endlessly romantic, Paris enchants every traveler. Visit iconic landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral, then stroll along the Seine River or enjoy a café in Montmartre.",
      image: parisImage,
    },
    {
      destination: "Turkey – Where East Meets West",
      description: "Straddling both Europe and Asia, Turkey is a captivating blend of history, culture, and natural beauty. Wander through Istanbul's historic sites, float in hot air balloons over Cappadocia's fairy-tale landscapes, or explore the ancient ruins of Ephesus.",
      image: turkeyImage,
    },
    {
      destination: "Italy – Where Culture Meets Cuisine",
      description: "From the timeless ruins of Rome and the dreamy waterways of Venice to the sun-kissed hills of Tuscany, Italy offers an unforgettable sensory journey. Delight in its rich flavors, marvel at iconic masterpieces, and experience the warmth of Italian charm.",
      image: italyImage,
    },
  ];

  const singaporeDestination = {
    destination: "Singapore – The City in a Garden",
    description: "A modern marvel filled with lush greenery, Singapore offers world-class attractions like Marina Bay Sands, Gardens by the Bay, and vibrant cultural districts. It's clean, safe, and full of charm.",
    images: [singaporeCityImage, singapore2Image],
  };

  const malaysiaDestination = {
    destination: "Malaysia – A Tapestry of Nature, Culture, and Modern Wonders",
    description: "Marvel at the iconic Petronas Towers in Kuala Lumpur, explore the vibrant Batu Caves with their towering golden statue and colorful steps, and enjoy the cool mountain air of Genting Highlands. Experience wild rainforests of Borneo or serene beaches of Langkawi.",
    images: [malaysia1Image, malaysia2Image],
  };

  const asiaDestinations = [
    {
      destination: "Phuket, Thailand – A Tropical Gem",
      description: "Famous for its stunning beaches, turquoise waters, and vibrant nightlife, Phuket is the ultimate island getaway. Unwind by the sea, visit nearby islands, or discover the island's rich culture and bustling markets.",
      image: sunriseImage,
    },
    {
      destination: "Bali, Indonesia – A Paradise of Culture and Calm",
      description: "Bali enchants with its emerald rice fields, sacred temples, and tranquil shores. Whether you're surfing, unwinding at a spa, or joining a yoga retreat, the island offers a perfect mix of relaxation, adventure, and spiritual charm.",
      image: sunriseImage,
    },
    {
      destination: "Maldives – Heaven on Earth",
      description: "The Maldives offers overwater villas, crystal-clear lagoons, and world-class diving spots. It's the ultimate destination for relaxation and romance.",
      image: maldivesImage,
    },
    {
      destination: "Vietnam – Land of Timeless Treasures",
      description: "Discover Vietnam's charm through its dramatic landscapes, vibrant cities, and rich culture. Cruise along Ha Long Bay, explore Hanoi's Old Quarter, or savor street food in Ho Chi Minh City.",
      image: sunriseImage,
    },
  ];

  const indianOcean = [
    {
      destination: "Mauritius – The Island of Harmony",
      description: "A melting pot of cultures surrounded by crystal-clear waters, Mauritius offers a perfect mix of relaxation and adventure. Enjoy sun-soaked beaches, lush sugarcane fields, and vibrant coral reefs. Explore Chamarel Waterfall, go snorkeling in Blue Bay, or unwind in a luxury beachfront resort.",
      image: mauritiusImage,
    },
    {
      destination: "Seychelles – Nature's Masterpiece",
      description: "An archipelago of 115 islands scattered across the Indian Ocean; Seychelles is pure paradise. Discover pristine beaches like Anse Source d'Argent, explore lush nature reserves, or dive into crystal-clear waters teeming with marine life.",
      image: seychellesImage,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-0">
        <PageHero
          title="Europe & Asia – Timeless Beauty and Endless Discovery"
          subtitle="From Europe's charming cities and historic landmarks to Asia's tropical escapes and rich traditions, each destination invites you to explore a perfect mix of culture, excitement, and tranquility."
          image={europeAsiaHero}
          eyebrow="Europe & Asia"
        />

        {/* Europe Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">European Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
              {europeDestinations.map((destination, index) => (
                <Card 
                  key={destination.destination}
                  className="group border-none shadow-lg hover-lift animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.destination}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        {destination.destination}
                      </h3>
                      <p className="text-xs text-white/95 leading-relaxed line-clamp-4">
                        {destination.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Asia Section */}
            <h2 className="text-4xl font-bold mb-12 text-center">Asia – Exotic Escapes and Cultural Wonders</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              A continent of contrasts, where tranquil islands meet bustling cities and ancient traditions blend with modern luxury.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
              <DestinationCarousel 
                title={singaporeDestination.destination}
                description={singaporeDestination.description}
                images={singaporeDestination.images}
              />
              
              <DestinationCarousel 
                title={malaysiaDestination.destination}
                description={malaysiaDestination.description}
                images={malaysiaDestination.images}
              />

              {asiaDestinations.map((destination, index) => (
                <Card 
                  key={destination.destination}
                  className="group border-none shadow-lg hover-lift animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.destination}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        {destination.destination}
                      </h3>
                      <p className="text-xs text-white/95 leading-relaxed line-clamp-4">
                        {destination.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Indian Ocean Section */}
            <h2 className="text-4xl font-bold mb-12 text-center">Indian Ocean Islands – Paradise Awaits</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Escape to the islands of the Indian Ocean, where turquoise waters, white-sand beaches, and warm hospitality create the perfect tropical getaway.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {indianOcean.map((destination, index) => (
                <Card 
                  key={destination.destination}
                  className="group border-none shadow-lg hover-lift animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.destination}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                        <MapPin className="w-6 h-6" />
                        {destination.destination}
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

export default EuropeAsia;
