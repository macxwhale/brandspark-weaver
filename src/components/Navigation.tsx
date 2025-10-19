import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.jpg";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const destinations = [
    { name: "East Africa", path: "/destinations/east-africa" },
    { name: "Southern Africa", path: "/destinations/southern-africa" },
    { name: "North Africa", path: "/destinations/north-africa" },
    { name: "Europe & Asia", path: "/destinations/europe-asia" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Ayook Eree Global Tours" 
              className="h-10 md:h-14 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? "text-foreground hover:text-secondary" 
                    : "text-white hover:text-secondary"
                }`}
              >
                {link.name}
              </a>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className={`font-medium transition-colors flex items-center gap-1 ${
                isScrolled 
                  ? "text-foreground hover:text-secondary" 
                  : "text-white hover:text-secondary"
              }`}>
                Destinations
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border">
                {destinations.map((destination) => (
                  <DropdownMenuItem 
                    key={destination.name}
                    onClick={() => navigate(destination.path)}
                    className="cursor-pointer"
                  >
                    {destination.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant={isScrolled ? "hero" : "secondary"} size="sm">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-foreground" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-foreground" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-foreground hover:bg-muted transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-4 py-2">
              <div className="font-medium text-foreground mb-2">Destinations</div>
              {destinations.map((destination) => (
                <div
                  key={destination.name}
                  onClick={() => {
                    navigate(destination.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block px-4 py-2 text-muted-foreground hover:bg-muted transition-colors cursor-pointer"
                >
                  {destination.name}
                </div>
              ))}
            </div>
            <div className="px-4 mt-2">
              <Button variant="hero" size="sm" className="w-full">
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
