import logo from "@/assets/logo.jpg";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <img src={logo} alt="Ayook Eree Global Tours" className="h-16 mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/80 max-w-md">
              Creating unforgettable travel experiences that connect you with the world's diverse cultures and breathtaking destinations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#destinations" className="text-primary-foreground/80 hover:text-secondary transition-colors">Destinations</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-secondary mt-0.5" />
                <a href="mailto:info@ayookglobal.com" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  info@ayookglobal.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-secondary mt-0.5" />
                <div className="text-primary-foreground/80">
                  <a href="tel:+254725853602" className="hover:text-secondary transition-colors block">
                    +254 725 853 602
                  </a>
                  <a href="tel:+254725853671" className="hover:text-secondary transition-colors block">
                    +254 725 853 671
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-secondary mt-0.5" />
                <span className="text-primary-foreground/80">
                  International Life House,<br />
                  Mama Ngina Street
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Ayook Eree Global Tours Ltd. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/ayook_globaltours?igsh=MXZnZ3JtemwyMjI1dg==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://wa.me/254725853602" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
