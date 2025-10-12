import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
            <p className="text-lg text-foreground leading-relaxed">
              Welcome to <span className="font-semibold text-secondary">Ayook Eree Global Tours</span>, 
              where every journey is a story waiting to be told. We're passionate about connecting travelers 
              with the world's diverse cultures, from vibrant festivals and local cuisines to authentic community 
              experiences. Our services go beyond cultural adventures. We also specialize in air travel, MICE 
              arrangements, safari experiences, special event trips, travel insurance and many more, all tailored 
              to make your travel smooth and unforgettable.
            </p>
            <p className="text-lg text-foreground leading-relaxed mt-4">
              At Ayook Eree Global Tours, we don't just plan trips — we create experiences that inspire, connect, 
              and last a lifetime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Card className="border-none shadow-lg hover-lift animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To inspire and connect people through authentic and sustainable travel experiences that celebrate 
                  culture, adventure, and discovery. We strive to provide seamless, personalized, and responsible 
                  travel solutions that make every journey meaningful, memorable, and environmentally conscious.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover-lift animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become a leading global travel brand known for promoting cultural understanding, sustainable 
                  tourism, and exceptional service by creating unforgettable experiences that bring the world closer 
                  together while preserving it for future generations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
