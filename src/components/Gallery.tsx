import safari from "@/assets/gallery-safari.jpg";
import santorini from "@/assets/gallery-santorini.jpg";
import singapore from "@/assets/gallery-singapore.jpg";
import air from "@/assets/gallery-air.jpg";
import cheetah from "@/assets/gallery-cheetah.jpg";
import honeymoon from "@/assets/gallery-honeymoon.jpg";
import maasai from "@/assets/gallery-maasai.jpg";
import mice from "@/assets/gallery-mice.jpg";
import egypt from "@/assets/gallery-egypt.jpg";
import safariBaloon from "@/assets/gallery-safari-balloon.jpg";
import singaporeCity from "@/assets/gallery-singapore-city.jpg";
import specialEvent from "@/assets/gallery-special-event.jpg";
import sunrise from "@/assets/gallery-sunrise.jpg";

const Gallery = () => {
  const images = [
    { src: safari, alt: "Hot air balloons over African safari landscape", span: "md:col-span-2 md:row-span-2" },
    { src: santorini, alt: "Beautiful Santorini Greece with white buildings and blue domes", span: "md:col-span-1" },
    { src: cheetah, alt: "Majestic cheetah in the African wilderness", span: "md:col-span-1" },
    { src: egypt, alt: "The Great Sphinx and Pyramids of Egypt", span: "md:col-span-2" },
    { src: maasai, alt: "Traditional Maasai cultural experience", span: "md:col-span-1 md:row-span-2" },
    { src: honeymoon, alt: "Romantic honeymoon destination at sunset", span: "md:col-span-1" },
    { src: singapore, alt: "Singapore's stunning indoor waterfall", span: "md:col-span-1" },
    { src: safariBaloon, alt: "Hot air balloon safari over zebra herds", span: "md:col-span-2" },
    { src: mice, alt: "Professional MICE and conference services", span: "md:col-span-1" },
    { src: air, alt: "Premium air travel services", span: "md:col-span-1" },
    { src: singaporeCity, alt: "Singapore Marina Bay Sands cityscape", span: "md:col-span-2" },
    { src: specialEvent, alt: "Romantic special event arrangements", span: "md:col-span-1" },
    { src: sunrise, alt: "Breathtaking African sunrise", span: "md:col-span-1" },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Moments Worth Capturing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the beauty of our destinations through these unforgettable moments. 
            Every image tells a story of adventure, culture, and discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg ${image.span} animate-fade-in hover-lift`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready to create your own unforgettable memories?
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
