import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Destinations from "@/components/Destinations";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="home">
        <Hero />
        <Services />
        <About />
        <Destinations />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
