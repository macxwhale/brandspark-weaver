import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MapPin } from "lucide-react";

interface DestinationCarouselProps {
  title: string;
  description: string;
  images: string[];
}

const DestinationCarousel = ({ title, description, images }: DestinationCarouselProps) => {
  return (
    <Card className="group border-none shadow-lg hover-lift animate-fade-in overflow-hidden">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={image} 
                  alt={`${title} - Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                    <MapPin className="w-6 h-6" />
                    {title}
                  </h3>
                  <p className="text-sm text-white/95 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </Card>
  );
};

export default DestinationCarousel;
