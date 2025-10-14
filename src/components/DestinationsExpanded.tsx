import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const DestinationsExpanded = () => {
  const destinations = [
    {
      region: "East Africa",
      countries: [
        {
          name: "Kenya",
          description: "Experience the Great Wildebeest Migration in Masai Mara, enjoy hot air balloon safaris, visit the Giraffe Center, and relax on Diani's pristine white sand beaches.",
        },
        {
          name: "Tanzania",
          description: "Witness wildlife in Serengeti National Park, explore the Ngorongoro Crater, climb Mount Kilimanjaro, and unwind on Zanzibar's exotic spice island beaches.",
        },
        {
          name: "Uganda",
          description: "Trek to see mountain gorillas in Bwindi Impenetrable Forest, go white-water rafting on the Nile, and enjoy scenic boat cruises on Lake Victoria.",
        },
        {
          name: "Rwanda",
          description: "Track rare mountain gorillas in Volcanoes National Park, discover Kigali's vibrant culture, and visit serene lakes and beautiful tea plantations.",
        },
      ],
    },
    {
      region: "Southern Africa",
      countries: [
        {
          name: "South Africa",
          subDestinations: [
            { name: "Cape Town", description: "Iconic Table Mountain, stunning beaches, and world-class wine estates in Stellenbosch and Franschhoek." },
            { name: "Johannesburg", description: "Thrilling safaris in Kruger National Park and rich history at Apartheid Museum and Soweto." },
            { name: "Durban", description: "Golden beaches, vibrant Indian markets, and the scenic Drakensberg Mountains." },
          ],
        },
        {
          name: "Botswana",
          subDestinations: [
            { name: "Okavango Delta", description: "A UNESCO World Heritage site offering mokoro canoe rides and luxury safari camps." },
            { name: "Chobe National Park", description: "Famous for massive elephant herds and unforgettable river safaris." },
          ],
        },
        {
          name: "Zimbabwe",
          subDestinations: [
            { name: "Victoria Falls", description: "One of the Seven Natural Wonders of the World with adventure activities like bungee jumping and white-water rafting." },
            { name: "Hwange National Park", description: "Premier wildlife destination home to lions, elephants, and rhinos." },
            { name: "Great Zimbabwe Ruins", description: "Ancient stone city showcasing Africa's rich historical heritage." },
          ],
        },
      ],
    },
    {
      region: "North Africa",
      countries: [
        {
          name: "Egypt",
          description: "Explore the ancient Pyramids of Giza and the Sphinx, cruise the Nile River, visit the Valley of the Kings in Luxor, and dive into the Red Sea's vibrant coral reefs.",
        },
        {
          name: "Morocco",
          description: "Wander through vibrant souks in Marrakech, ride camels in the Sahara Desert, explore the blue city of Chefchaouen, and discover historic kasbahs.",
        },
      ],
    },
    {
      region: "Europe & Asia",
      countries: [
        {
          name: "Greece",
          description: "Discover ancient Athens, relax on the romantic islands of Santorini and Mykonos, and savor authentic Mediterranean cuisine.",
        },
        {
          name: "France (Paris)",
          description: "Visit the iconic Eiffel Tower, stroll through the Louvre Museum, cruise the Seine River, and enjoy world-class French cuisine.",
        },
        {
          name: "Italy",
          description: "Explore the Colosseum in Rome, cruise Venice's canals, admire Florence's Renaissance art, and taste authentic Italian gelato.",
        },
        {
          name: "Singapore",
          description: "Experience futuristic Gardens by the Bay, shop on Orchard Road, explore vibrant Chinatown, and enjoy world-class dining at hawker centers.",
        },
        {
          name: "Malaysia",
          description: "Visit the iconic Petronas Twin Towers, relax on Langkawi's beaches, explore Penang's heritage sites, and trek through Borneo's rainforests.",
        },
        {
          name: "Thailand (Phuket)",
          description: "Relax on stunning beaches, explore vibrant night markets, take island-hopping tours, and indulge in delicious Thai street food.",
        },
        {
          name: "Indonesia (Bali)",
          description: "Discover ancient temples, enjoy surfing and yoga retreats, explore lush rice terraces, and experience vibrant Balinese culture.",
        },
        {
          name: "Maldives",
          description: "Luxurious overwater villas, world-class diving and snorkeling, pristine white sand beaches, and romantic sunset cruises.",
        },
        {
          name: "Vietnam",
          description: "Cruise Ha Long Bay's limestone karsts, explore Hanoi's Old Quarter, visit historic Hoi An, and experience bustling Ho Chi Minh City.",
        },
        {
          name: "Turkey",
          description: "Explore Istanbul's historic mosques and bazaars, experience hot air ballooning in Cappadocia, and relax on Mediterranean beaches.",
        },
      ],
    },
    {
      region: "Indian Ocean Islands",
      countries: [
        {
          name: "Mauritius",
          description: "Pristine beaches, luxury resorts, vibrant coral reefs for snorkeling and diving, and lush botanical gardens.",
        },
        {
          name: "Seychelles",
          description: "Crystal-clear waters, stunning granite rock formations, world-class diving spots, and exclusive private island resorts.",
        },
      ],
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

        <div className="space-y-12 max-w-6xl mx-auto">
          {destinations.map((region, index) => (
            <Card 
              key={region.region}
              className="border-none shadow-xl hover-lift animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-r from-primary to-secondary p-6">
                <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                  <MapPin className="w-8 h-8" />
                  {region.region}
                </h3>
              </div>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {region.countries.map((country) => (
                    <div key={country.name} className="border-l-4 border-secondary pl-6 py-2">
                      <h4 className="text-2xl font-bold mb-3 text-primary">{country.name}</h4>
                      {country.description && (
                        <p className="text-muted-foreground leading-relaxed mb-4">{country.description}</p>
                      )}
                      {country.subDestinations && (
                        <div className="space-y-4 mt-4">
                          {country.subDestinations.map((sub) => (
                            <div key={sub.name} className="ml-4">
                              <h5 className="text-lg font-semibold text-foreground mb-2">{sub.name}</h5>
                              <p className="text-muted-foreground leading-relaxed">{sub.description}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
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
