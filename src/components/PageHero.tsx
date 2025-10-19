import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  eyebrow?: string;
  showCtas?: boolean;
}

const PageHero = ({ title, subtitle, image, eyebrow, showCtas = false }: PageHeroProps) => {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden" role="banner">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="animate-fade-in">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Plane className="w-4 h-4" />
              <span className="text-sm font-medium">{eyebrow}</span>
            </div>
          )}

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {title}
          </h1>

          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/90 font-light">
            {subtitle}
          </p>

          {showCtas && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">Get a Free Quote</a>
              </Button>
              <Button variant="outline" size="lg" className="border-white/50 text-white hover:bg-white hover:text-primary" asChild>
                <a href="#destinations">Explore Destinations</a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default PageHero;
