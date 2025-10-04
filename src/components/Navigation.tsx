import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = ({ transparent = false }: { transparent?: boolean }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const structureItems = [
    { label: "Charpente", path: "/structure/charpente" },
    { label: "Ossature bois", path: "/structure/ossature-bois" },
    { label: "Pergola", path: "/structure/pergola" },
    { label: "Terrasses", path: "/structure/terrasses" },
    { label: "Carport", path: "/structure/carport" },
  ];

  const menuiserieItems = [
    { label: "Intérieur", path: "/menuiserie/interieur" },
    { label: "Extérieur", path: "/menuiserie/exterieur" },
    { label: "Escaliers", path: "/menuiserie/escaliers" },
  ];

  const agencementItems = [
    { label: "Sols", path: "/agencement/sols" },
    { label: "Dressing", path: "/agencement/dressing" },
    { label: "Cuisines", path: "/agencement/cuisines" },
    { label: "Mobilier sur mesure", path: "/agencement/mobilier" },
  ];

  const extensionItems = [
    { label: "Extension ossature bois", path: "/extension/ossature-bois" },
    { label: "Surélévation", path: "/extension/surelevation" },
  ];

  return (
    <nav className={transparent ? "absolute top-0 z-40 w-full" : "sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"}>
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className={`text-2xl font-heading ${transparent ? 'text-white' : 'text-primary'}`}>L'Atelier du Volcan</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className={`text-sm font-medium transition-colors ${transparent ? 'text-white hover:text-white/80' : 'hover:text-primary'}`}>
              Accueil
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center text-sm font-medium transition-colors ${transparent ? 'text-white hover:text-white/80' : 'hover:text-primary'}`}>
                Charpente <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {structureItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link to={item.path}>{item.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center text-sm font-medium transition-colors ${transparent ? 'text-white hover:text-white/80' : 'hover:text-primary'}`}>
                Menuiserie <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {menuiserieItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link to={item.path}>{item.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center text-sm font-medium transition-colors ${transparent ? 'text-white hover:text-white/80' : 'hover:text-primary'}`}>
                Agencement <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {agencementItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link to={item.path}>{item.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center text-sm font-medium transition-colors ${transparent ? 'text-white hover:text-white/80' : 'hover:text-primary'}`}>
                Couverture <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {extensionItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link to={item.path}>{item.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/extension/ossature-bois" className={`text-sm font-medium transition-colors ${transparent ? 'text-white hover:text-white/80' : 'hover:text-primary'}`}>
              Extension Bois
            </Link>
            <Link to="/contact" className={`text-sm font-medium transition-colors ${transparent ? 'text-white hover:text-white/80' : 'hover:text-primary'}`}>
              Contact
            </Link>
          </div>

          {/* Address on the right (only on transparent) */}
          {transparent && (
            <div className="hidden lg:flex flex-col items-end text-white text-sm">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Les 4 routes d'Albussac</span>
              </div>
              <span>15130 Sansac de Marmiesse</span>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className={`h-6 w-6 ${transparent ? 'text-white' : ''}`} /> : <Menu className={`h-6 w-6 ${transparent ? 'text-white' : ''}`} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`lg:hidden py-4 space-y-3 ${transparent ? 'bg-foreground/95 backdrop-blur' : ''}`}>
            <Link 
              to="/" 
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <div className="space-y-2">
              <div className="font-medium text-sm text-muted-foreground">Structure</div>
              {structureItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block py-1 pl-4 text-sm hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="space-y-2">
              <div className="font-medium text-sm text-muted-foreground">Menuiserie</div>
              {menuiserieItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block py-1 pl-4 text-sm hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="space-y-2">
              <div className="font-medium text-sm text-muted-foreground">Agencement</div>
              {agencementItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block py-1 pl-4 text-sm hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="space-y-2">
              <div className="font-medium text-sm text-muted-foreground">Extension Bois</div>
              {extensionItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block py-1 pl-4 text-sm hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              to="/realisations"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Réalisations
            </Link>
            <Link
              to="/a-propos"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              À propos
            </Link>
            <Link
              to="/avis"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Avis
            </Link>
            <Button asChild className="w-full" onClick={() => setMobileMenuOpen(false)}>
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
