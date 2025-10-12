import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah & James Mitchell",
      location: "United Kingdom",
      text: "Our honeymoon in Santorini was absolutely magical! Ayook Eree Global Tours handled everything perfectly, from flights to the most romantic hotel. Every detail was just right.",
      rating: 5,
    },
    {
      name: "David Omondi",
      location: "Kenya",
      text: "The Maasai Mara safari exceeded all expectations. Witnessing the Great Migration was a once-in-a-lifetime experience. The guides were knowledgeable and professional.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      location: "Singapore",
      text: "Booked a family trip to Egypt through Ayook Eree. From the pyramids to the Nile cruise, everything was seamless. My kids still talk about riding camels in the desert!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Travelers Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by travelers worldwide for safe, seamless, and memorable journeys
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="border-none shadow-lg hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
