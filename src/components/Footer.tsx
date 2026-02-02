import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { loadHomeContent, type HomeContent } from "@/lib/content-loader";

const Footer = () => {
  const [content, setContent] = useState<HomeContent | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await loadHomeContent();
        setContent(data);
      } catch (error) {
        console.error('Failed to load content:', error);
      }
    };
    loadContent();
  }, []);

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-heading text-primary mb-4">L'Atelier du Volcan</h3>
            <p className="text-sm text-muted-foreground">
              {content?.quote.description || "Deux artisans, une même passion : le bois. Spécialistes en charpente, menuiserie et agencement."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link to="/realisations" className="hover:text-primary transition-colors">Réalisations</Link></li>
              <li><Link to="/a-propos" className="hover:text-primary transition-colors">À propos</Link></li>
              <li><Link to="/avis" className="hover:text-primary transition-colors">Avis</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/structure/ossature-bois" className="hover:text-primary transition-colors">Ossature bois</Link></li>
              <li><Link to="/menuiserie-interieur/escaliers" className="hover:text-primary transition-colors">Menuiserie</Link></li>
              <li><Link to="/agencement/cuisines" className="hover:text-primary transition-colors">Agencement</Link></li>
              <li><Link to="/extension/ossature-bois" className="hover:text-primary transition-colors">Extension bois</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Les 4 routes d'Albussac<br />15130 Sansac de Marmiesse</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:0750445055" className="hover:text-primary transition-colors">
                  07 50 44 50 55
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:contact@atelier-du-volcan.com" className="hover:text-primary transition-colors">
                  contact@atelier-du-volcan.com
                </a>
              </li>
              <li className="flex gap-3 mt-4">
                <a 
                  href="https://facebook.com/latelierduvolcan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://instagram.com/latelierduvolcan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} L'Atelier du Volcan. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
