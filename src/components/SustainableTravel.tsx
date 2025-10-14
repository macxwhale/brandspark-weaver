import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Users, Lightbulb, Heart, Globe } from "lucide-react";

const SustainableTravel = () => {
  const principles = [
    {
      icon: Leaf,
      title: "Responsible Travel Practices",
      description: "We promote eco-friendly tourism by supporting conservation projects and wildlife protection initiatives.",
    },
    {
      icon: Globe,
      title: "Reducing Waste",
      description: "We encourage travelers to minimize plastic use, recycle, and leave no trace in the destinations they visit.",
    },
    {
      icon: Users,
      title: "Supporting Local Communities",
      description: "We partner with local guides, artisans, and family-owned accommodations to ensure tourism benefits the people who call these places home.",
    },
    {
      icon: Lightbulb,
      title: "Conserving Energy & Resources",
      description: "We recommend eco-lodges and sustainable accommodations that prioritize renewable energy and water conservation.",
    },
    {
      icon: Heart,
      title: "Mindful Travel",
      description: "We educate travelers on respecting local customs, traditions, and wildlife, ensuring a positive impact on the communities and environments they visit.",
    },
  ];

  return (
    <section id="sustainable" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent mb-6">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sustainable Travel with Ayook Eree Global Tours
            </h2>
            <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
              At Ayook Eree Global Tours, we believe that travel should leave a positive impact on the 
              environment, local communities, and cultures. Sustainable tourism is at the heart of what we do, 
              ensuring that the beauty of the world remains intact for future generations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {principles.map((principle, index) => (
              <Card 
                key={principle.title}
                className="border-none shadow-lg hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                      <principle.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-none shadow-xl bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 text-center">
              <p className="text-lg text-foreground leading-relaxed">
                <span className="font-semibold">We are committed to sustainable tourism,</span> helping you 
                experience the beauty of the world responsibly while protecting it for generations to come.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SustainableTravel;
